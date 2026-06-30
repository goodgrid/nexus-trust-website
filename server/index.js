import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import rateLimit from 'express-rate-limit'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT = process.env.PORT || 3000

// Brevo + recipient config. Sender must be a verified sender/domain in Brevo.
const BREVO_API_KEY = process.env.BREVO_API_KEY || ''
const CONTACT_TO = process.env.CONTACT_TO || 'hi@nexustrust.eu'
const CONTACT_FROM = process.env.CONTACT_FROM || 'no-reply@nexustrust.eu'
const CONTACT_FROM_NAME = process.env.CONTACT_FROM_NAME || 'Nexus Trust website'

const DIST_DIR = path.join(__dirname, '..', 'dist')

const app = express()

// Behind nginx/Brainpod: trust the first proxy so rate-limiting sees the real IP.
app.set('trust proxy', 1)
app.use(express.json({ limit: '32kb' }))

const isEmail = (value) => typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '')
const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'rate_limited' },
})

app.post('/api/contact', contactLimiter, async (req, res) => {
  const body = req.body || {}

  // Honeypot: a real user never fills this hidden field. Pretend success so
  // bots get no signal, but send nothing.
  if (clean(body.company, 200)) {
    return res.json({ ok: true })
  }

  const name = clean(body.name, 200)
  const email = clean(body.email, 200)
  const organisation = clean(body.organisation, 200)
  const message = clean(body.message, 5000)

  if (!name || !isEmail(email) || message.length < 2) {
    return res.status(400).json({ ok: false, error: 'invalid_input' })
  }

  if (!BREVO_API_KEY) {
    console.error('[contact] BREVO_API_KEY is not set; cannot send mail.')
    return res.status(500).json({ ok: false, error: 'not_configured' })
  }

  const lines = [
    `Naam: ${name}`,
    `E-mail: ${email}`,
    organisation ? `Organisatie: ${organisation}` : null,
    '',
    message,
  ].filter((line) => line !== null)

  const htmlContent = `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5">
    <p><strong>Naam:</strong> ${escapeHtml(name)}<br>
    <strong>E-mail:</strong> ${escapeHtml(email)}${
      organisation ? `<br><strong>Organisatie:</strong> ${escapeHtml(organisation)}` : ''
    }</p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  </div>`

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { name: CONTACT_FROM_NAME, email: CONTACT_FROM },
        to: [{ email: CONTACT_TO }],
        replyTo: { email, name },
        subject: `Contactformulier: ${name}`,
        textContent: lines.join('\n'),
        htmlContent,
      }),
    })

    if (!response.ok) {
      const detail = await response.text().catch(() => '')
      console.error(`[contact] Brevo responded ${response.status}: ${detail}`)
      return res.status(502).json({ ok: false, error: 'send_failed' })
    }

    return res.json({ ok: true })
  } catch (err) {
    console.error('[contact] Failed to reach Brevo:', err)
    return res.status(502).json({ ok: false, error: 'send_failed' })
  }
})

// Static site + SPA fallback.
app.use(express.static(DIST_DIR))
app.get('*', (_req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Nexus Trust server listening on :${PORT}`)
})
