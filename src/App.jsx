import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { useLanguage } from './i18n'

const NAV_ITEMS = [
  { id: 'conviction', key: 'conviction' },
  { id: 'why-now', key: 'whyNow' },
  { id: 'approach', key: 'approach' },
  { id: 'services', key: 'services' },
  { id: 'collective', key: 'collective' },
  { id: 'proof', key: 'proof' },
]

const track = (eventName, data) => {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, data)
  }
}

const CONTACT_EMAIL = 'info@nexustrust.eu'

function LanguageSwitch({ locale, setLanguage }) {
  return (
    <div className="langSwitch" role="group" aria-label="Language / Taal">
      {['nl', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          className={`langBtn${locale === code ? ' langBtnActive' : ''}`}
          aria-pressed={locale === code}
          lang={code}
          onClick={() => {
            setLanguage(code)
            track('language-switch', { to: code })
          }}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function App() {
  const { locale, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Lock body scroll, trap focus, and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return

    document.body.style.overflow = 'hidden'

    const focusable = () =>
      menuRef.current
        ? Array.from(
            menuRef.current.querySelectorAll(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          )
        : []

    focusable()[0]?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const items = focusable()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  // Close the menu once the viewport is wide enough to show the inline nav.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1000px)')
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const sections = ['conviction', 'why-now', 'approach', 'services', 'ai', 'collective', 'proof', 'contact']
    const observed = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observed.has(entry.target.id)) {
            observed.add(entry.target.id)
            track('section-view', { section: entry.target.id })
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="#top" aria-label="Nexus Trust">
            <img className="brandLogoHorizontal" src="/logo-horizontal.png" alt="Nexus Trust" />
          </a>

          <nav className="nav" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <a className="navLink" href={`#${item.id}`} key={item.id}>
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          <div className="headerActions">
            <div className="headerDesktopActions">
              <LanguageSwitch locale={locale} setLanguage={setLanguage} />
              <a
                className="btn btnPrimary"
                href="#contact"
                onClick={() => track('click', { element: 'header-cta' })}
              >
                {t.nav.cta}
              </a>
            </div>

            <button
              type="button"
              className={`hamburger${menuOpen ? ' hamburgerOpen' : ''}`}
              aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              ref={menuButtonRef}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="hamburgerBox" aria-hidden="true">
                <span className="hamburgerInner" />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`mobileMenu${menuOpen ? ' mobileMenuOpen' : ''}`}
          ref={menuRef}
          hidden={!menuOpen}
        >
          <nav className="mobileMenuInner container" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                className="mobileNavLink"
                href={`#${item.id}`}
                key={item.id}
                onClick={closeMenu}
              >
                {t.nav[item.key]}
              </a>
            ))}

            <div className="mobileMenuFooter">
              <LanguageSwitch locale={locale} setLanguage={setLanguage} />
              <a
                className="btn btnPrimary"
                href="#contact"
                onClick={() => {
                  track('click', { element: 'mobile-menu-cta' })
                  closeMenu()
                }}
              >
                {t.nav.cta}
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="eyebrow">{t.hero.eyebrow}</div>
              <h1>{t.hero.headline}</h1>
              <p className="lead">{t.hero.lead}</p>
              <p className="hookLine">{t.hero.hook}</p>

              <div className="heroCtas">
                <a
                  className="btn btnPrimary"
                  href="#contact"
                  onClick={() => track('click', { element: 'hero-schedule-call' })}
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  className="btn btnGhost"
                  href="#approach"
                  onClick={() => track('click', { element: 'hero-our-approach' })}
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="heroVisual">
              <img className="heroLogo" src="/logo.png" alt="Nexus Trust" />
            </div>
          </div>
        </section>

        <section id="conviction" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>{t.conviction.heading}</h2>
            </div>
            <div className="prose">
              <p className="lead">{t.conviction.body}</p>
              <p className="muted supportingLine">{t.conviction.supporting}</p>
            </div>

            <div className="card structuralCard">
              <div className="cardTitle">{t.conviction.structuralHeading}</div>
              <p className="cardText">{t.conviction.structuralBody}</p>
            </div>
          </div>
        </section>

        <section id="why-now" className="section">
          <div className="container">
            <div className="band">
              <div className="bandKicker">{t.whyNow.kicker}</div>
              <h2>{t.whyNow.heading}</h2>
              {t.whyNow.body.map((paragraph, i) => (
                <p className="bandBody" key={i}>{paragraph}</p>
              ))}
              <div className="bandFooter">
                <div className="bandDeadline">
                  <span className="bandDeadlineLabel">{t.whyNow.deadlineLabel}</span>
                  <span className="bandDeadlineValue">{t.whyNow.deadlineValue}</span>
                </div>
                <a
                  className="bandSource"
                  href={t.whyNow.sourceHref}
                  target="_blank"
                  rel="noopener"
                  onClick={() => track('click', { element: 'why-now-source' })}
                >
                  {t.whyNow.sourceLabel} <span className="linkIcon">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>{t.approach.heading}</h2>
              <p className="muted">{t.approach.intro}</p>
            </div>

            <div className="grid2">
              {t.approach.blocks.map((block) => (
                <div className="card" key={block.title}>
                  <div className="cardTitle">{block.title}</div>
                  <p className="cardText">{block.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>{t.services.heading}</h2>
              <p className="muted">{t.services.intro}</p>
            </div>

            <div className="grid3">
              {t.services.cards.map((card, i) => (
                <div className="card" key={card.title}>
                  <div
                    className={`badge ${['badgeCyan', 'badgePink', 'badgeAmber'][i % 3]}`}
                  >
                    {card.badge}
                  </div>
                  <div className="cardTitle">{card.title}</div>
                  {locale === 'nl' && <div className="cardSubtitle">{card.subtitle}</div>}
                  <p className="cardText">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai" className="section">
          <div className="container">
            <div className="cardWide">
              <div className="sectionHead">
                <h2>{t.ai.heading}</h2>
              </div>
              <p className="cardText">{t.ai.body}</p>
            </div>
          </div>
        </section>

        <section id="collective" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>{t.collective.heading}</h2>
              <p className="muted">
                {t.collective.lead} <span className="nowrapInline">{t.collective.experience}</span>
              </p>
            </div>

            <div className="grid3">
              {t.collective.members.map((member) => (
                <div className="card profileCard" key={member.name}>
                  <img
                    className="profilePhoto"
                    src={`/${member.name}.jpg.avif`}
                    alt={member.name}
                  />
                  <div className="profileContent">
                    <div className="badge badgeCyan">{member.badge}</div>
                    <a
                      className="cardTitle profileLink"
                      href={member.href}
                      target="_blank"
                      rel="noopener"
                      onClick={() => track('click', { element: 'profile-link', name: member.name })}
                    >
                      {member.name} <span className="linkIcon">↗</span>
                    </a>
                    <p className="cardText">{member.blurb}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="deliveryModel">{t.collective.delivery}</p>
          </div>
        </section>

        <section id="proof" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>{t.proof.heading}</h2>
            </div>

            <div className="grid2">
              {t.proof.cases.map((proofCase) => (
                <div className="cardWide proofCard" key={proofCase.title}>
                  <div className="cardTitle">{proofCase.title}</div>
                  <p className="cardText">{proofCase.body}</p>
                </div>
              ))}
            </div>

            <p className="proofIllustration">{t.proof.illustration}</p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="cta">
              <div>
                <h2>{t.contact.heading}</h2>
                <p className="muted">{t.contact.body}</p>
              </div>
              <div className="ctaActions">
                <a
                  className="btn btnPrimary"
                  href={`mailto:${CONTACT_EMAIL}`}
                  onClick={() => track('click', { element: 'contact-email' })}
                >
                  {t.contact.cta}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerBrand">
            <img
              className="footerLogo"
              src="/logo.png"
              alt="Nexus Trust"
              style={{ width: 44, height: 44 }}
            />
            <div>
              <div className="footerName">Nexus Trust</div>
              <div className="footerTag">{t.footer.tag}</div>
            </div>
          </div>

          <div className="footerLinks">
            <LanguageSwitch locale={locale} setLanguage={setLanguage} />
            <a
              className="footerLink"
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={() => track('click', { element: 'footer-email' })}
            >
              {t.footer.emailLabel}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
