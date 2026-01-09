import { useEffect } from 'react'
import './App.css'

const track = (eventName, data) => {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, data)
  }
}

function App() {
  useEffect(() => {
    const sections = ['collective', 'approach', 'services', 'contact']
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
            <img className="brandLogo" src="/logo.png" alt="Nexus Trust" />
            <span className="brandName">Nexus Trust</span>
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <a className="navLink" href="#collective">The Collective</a>
            <a className="navLink" href="#approach">Approach</a>
            <a className="navLink" href="#services">Services</a>
            <a className="navLink" href="#contact">Contact</a>
          </nav>

          <a className="btn btnPrimary" href="#contact" onClick={() => track('click', { element: 'header-cta' })}>Get in touch</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="eyebrow">Collective of senior freelancers</div>
              <h1>Unstick complex IT challenges - by making the right call.</h1>
              <p className="lead">
                We are a collective of senior technologists with 90+ years of combined experience.
                We help organisations move forward when complex IT initiatives stall - sometimes by continuing,
                sometimes by deliberately stopping and resetting.
              </p>

              <div className="heroCtas">
                <a className="btn btnPrimary" href="#contact" onClick={() => track('click', { element: 'hero-schedule-call' })}>Schedule a call</a>
                <a className="btn btnGhost" href="#approach" onClick={() => track('click', { element: 'hero-our-approach' })}>Our approach</a>
              </div>
            </div>
            <div className="heroVisual">
              <img className="heroLogo" src="/logo.png" alt="Nexus Trust" />
            </div>
          </div>
        </section>

        <section id="collective" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>The collective</h2>
              <p className="muted">Three complementary profiles. One shared standard of responsibility.</p>
            </div>

            <div className="grid2">
              <div className="card">
                <div className="cardTitle">Some decisions should not be made alone.</div>
                <p className="cardText">
                  <p>When delivery stalls, costs rise and confidence erodes, the hardest question is not how to continue, but whether continuing still makes sense.</p>

                  <p>We work as a collective because these decisions require multiple senior perspectives - technical, organisational and operational. We challenge each other, validate conclusions, and take responsibility for the outcome together.</p>

                  <p>No consultancy theatre. No single-ego calls. Just experienced judgement.</p>
                </p>
              </div>

              <div className="card">
                <div className="cardTitle">We’ve seen organisations grow, stall, recover - and sometimes fail.</div>
                <p className="cardText">
                  Our strength lies in combining deep technological fundamentals with a realistic understanding of organisations under pressure. We know modern architectures, cloud-native systems and applied AI - but more importantly, we know when technology is the problem, and when it isn’t.

                </p>
              </div>
            </div>

            <div className="grid3" style={{ marginTop: 14 }}>
              <div className="card profileCard">
                <img className="profilePhoto" src="/Koen Bonnet.jpg.avif" alt="Koen Bonnet" />
                <div className="profileContent">
                  <div className="badge badgeCyan">Architecture & Product Delivery</div>
                  <a className="cardTitle profileLink" href="https://goodgrid.nl" target="_blank" rel="noopener noreferrer" onClick={() => track('click', { element: 'profile-link', name: 'Koen Bonnet' })}>Koen Bonnet</a>
                  <p className="cardText">
                    Enterprise architecture, product ownership, DevOps, and hands-on Node.js development.
                    From strategy to production.
                  </p>
                </div>
              </div>

              <div className="card profileCard">
                <img className="profilePhoto" src="/Aniek Hannink.jpg.avif" alt="Aniek Hannink" />
                <div className="profileContent">
                  <div className="badge badgePink">Architecture & Secure Software</div>
                  <a className="cardTitle profileLink" href="https://magicchoice.com" target="_blank" rel="noopener noreferrer" onClick={() => track('click', { element: 'profile-link', name: 'Aniek Hannink' })}>Aniek Hannink</a>
                  <p className="cardText">
                    Skilled at applying fundamental techniques to make services actually work — from architecture through implementation to operations.
                  </p>
                </div>
              </div>

              <div className="card profileCard">
                <img className="profilePhoto" src="/Wiebe Woudstra.jpg.avif" alt="Wiebe Woudstra" />
                <div className="profileContent">
                  <div className="badge badgeAmber">Cloud Strategy & AI</div>
                  <a className="cardTitle profileLink" href="https://beaudesert.nl" target="_blank" rel="noopener noreferrer" onClick={() => track('click', { element: 'profile-link', name: 'Wiebe Woudstra' })}>Wiebe Woudstra</a>
                  <p className="cardText">
                    Cloud infrastructure, AI consulting, identity management, and hands-on IT operations. From interim leadership to end-to-end operational delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Our approach: the hard reset</h2>
              <p className="muted">
                Stalled initiatives rarely fail because people aren’t working hard enough.

                They fail because the underlying assumptions no longer hold. In those cases, optimisation only increases sunk cost.

                Our approach starts with one question: is this still the right thing to continue?
              </p>
            </div>

            <div className="grid2">
              <div className="card">
                <div className="cardTitle">We start without attachment to past decisions.</div>
                <p className="cardText">
                  <p>With decades of experience, we recognise patterns quickly - but we deliberately suspend solutions until we understand the real constraints: technical debt, organisational dynamics, regulatory pressure and delivery reality.</p>

                  <p>The goal is not blame. The goal is clarity.</p>

                </p>
              </div>

              <div className="card">
                <div className="cardTitle">Sound decisions require both fundamentals and current possibilities.</div>
                <p className="cardText">
                  We understand systems from the ground up - data models, integration patterns, failure modes - and we know what modern technology makes possible today. We use neither dogma nor hype; only what materially improves the situation.

                </p>
              </div>

              <div className="card">
                <div className="cardTitle">Sometimes stopping is the fastest way forward.</div>
                <p className="cardText">
                  Not everything is rebuilt. What still has value is preserved. What no longer serves the organisation is deliberately replaced.

                  We design and build systems that work in practice - and that internal teams can actually maintain.
                </p>
              </div>

              <div className="card">
                <div className="cardTitle">We are not here to become permanent.</div>
                <p className="cardText">
                  Our work ends with a system that runs, is understood, documented, and owned by your
                  organisation. Knowledge transfer and operational stability are part of the outcome - not an afterthought.

                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Services</h2>
              <p className="muted">
                From diagnosis to production. We take on the full journey, or exactly the part where you're stuck.
              </p>
            </div>

            <div className="grid3">
              <div className="card">
                <div className="badge badgeCyan">Diagnosis</div>
                <div className="cardTitle">Assessment & Reset Advisory</div>
                <p className="cardText">
                  Independent assessment of stalled initiatives.
                  Where are we really stuck? What options still make sense? And what is the most responsible next step?
                </p>
              </div>

              <div className="card">
                <div className="badge badgePink">Architecture</div>
                <div className="cardTitle">Redesign & Modernization</div>
                <p className="cardText">
                  Pragmatic architecture and system redesign. Built to last, built to operate - not to impress.
                </p>
              </div>

              <div className="card">
                <div className="badge badgeAmber">Delivery</div>
                <div className="cardTitle">Hands-on Implementation</div>
                <p className="cardText">
                  We don’t stop at advice. We implement, stabilise, and stay involved until the new situation actually works.

                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="cta">
              <div>
                <h2>Stuck - or unsure whether to continue?</h2>
                <p className="muted">
                  A short, direct conversation to assess whether we can help. No obligations. No sales process.

                </p>
              </div>
              <div className="ctaActions">
                <a className="btn btnPrimary" href="mailto:info@nexustrust.eu" onClick={() => track('click', { element: 'contact-email' })}>Get in touch</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerBrand">
            <img className="footerLogo" src="/logo.png" alt="Nexus Trust" />
            <div>
              <div className="footerName">Nexus Trust</div>
              <div className="footerTag">Collective for technological reset</div>
            </div>
          </div>

          <div className="footerLinks">
            <a className="footerLink" href="mailto:info@nexustrust.eu" onClick={() => track('click', { element: 'footer-email' })}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
