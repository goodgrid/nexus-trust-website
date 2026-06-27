import { useCallback, useEffect, useState } from 'react'

// Supported locales. NL is primary for the Dutch market; EN for European reach.
export const LOCALES = ['nl', 'en']
export const DEFAULT_LOCALE = 'nl'

const STORAGE_KEY = 'nt-lang'

// Per-locale document metadata (title, description, og/twitter, html lang).
export const meta = {
  nl: {
    lang: 'nl',
    title: 'Nexus Trust — Soeverein digitaal vertrouwen',
    description:
      'Voor banken, zorg en overheid ontwerpen én bouwen we vertrouwenskritische systemen die je volledig begrijpt en beheerst. Geen black boxes.',
  },
  en: {
    lang: 'en',
    title: 'Nexus Trust — Sovereign digital trust',
    description:
      'For banks, healthcare and government, we design and build trust-critical systems you fully understand and control. No black boxes.',
  },
}

// All page copy, per locale.
export const content = {
  nl: {
    nav: {
      conviction: 'Overtuiging',
      whyNow: 'Waarom nu',
      approach: 'Aanpak',
      services: 'Diensten',
      ai: 'Over AI',
      collective: 'Het collectief',
      proof: 'Bewijs',
      contact: 'Contact',
      cta: 'Plan een gesprek',
    },
    langSwitch: { label: 'Taal', toEn: 'Schakel naar Engels' },
    hero: {
      eyebrow: 'Een collectief van senior technologen',
      headline: 'Digitaal vertrouwen dat je écht kunt verantwoorden.',
      lead: 'Voor banken, zorg en overheid ontwerpen én bouwen we vertrouwenskritische systemen die je volledig begrijpt en beheerst — van architectuur tot het fundament. Geen black boxes.',
      audience:
        'Voor organisaties die aantoonbaar in control moeten zijn over vertrouwenskritische technologie — banken, zorg en overheid, en de groeiende kring die nu binnen eIDAS/Cbw-scope of de Europese wallet valt: vertrouwensdienstverleners, eDelivery/Peppol, en iedereen met een vertrouwenskritisch koppelvlak.',
      ctaPrimary: 'Plan een gesprek',
      ctaSecondary: 'Zo werken we',
    },
    conviction: {
      heading: 'Vertrouwen kun je niet inkopen — alleen begrijpen en beheersen.',
      body: 'De gemaksproducten van hyperscalers en SaaS zijn black boxes. Handig, totdat je je technologie moet kunnen verantwoorden — en dan blijkt dat je niet kunt certificeren, aantonen of vertrouwen wat je niet doorgrondt. Zodra het echt moet kloppen, telt elke laag, tot op het ijzer, en wordt gemak een aansprakelijkheid. Daarom is soevereiniteit voor ons geen politiek standpunt maar een technische voorwaarde voor vertrouwen: je kunt niet vertrouwen wat een ander voor je verbergt. Europa besteedde dit vak uit. Wij helpen organisaties het weer te beheersen.',
      supporting:
        'Gebouwd op Europese kaders — eIDAS, de AI Act, ISO 27001 — als ontwerp-uitgangspunt, niet als compliance-vinkje achteraf.',
    },
    whyNow: {
      kicker: 'Waarom nu',
      heading: 'De wet zet de klok.',
      body: 'Twee elkaar versterkende verschuivingen verbreden wie aantoonbaar in control moet zijn over zijn vertrouwenstechnologie — met een deadline erbij. Eén: de eIDAS-reikwijdte verbreedt. eIDAS is technologieneutraal, dus de reikwijdte volgt de functie, niet de techniek. De RDI concludeerde in juni 2026 dat aanbieders van eDelivery ("digitale aangetekende post") vertrouwensdienstverleners zijn en onder eIDAS en de Cyberbeveiligingswet vallen — te beginnen bij Peppol-serviceproviders. Twee: eIDAS2 forceert de adoptie die eIDAS1 miste. Lidstaten moeten de Europese identity wallet introduceren, en relying parties moeten die accepteren — voor gereguleerde sectoren en grote platforms uiterlijk 6 december 2027. Overheden ontsluiten authentieke bronnen als claims en onboarden burgers met PID’s en credentials; de private sector lift mee, zowel door de wallet te accepteren als door eigen credentials uit te geven. De meesten halen onder tijdsdruk het vinkje met een gemakkelijke black-box-leverancier. Wij doen het omgekeerde: soeverein, certificeerbaar en gebouwd om te blijven — want dit ís nu je vertrouwensinfrastructuur.',
      deadlineLabel: 'Acceptatiedeadline eIDAS2-wallet',
      deadlineValue: '6 december 2027',
      sourceLabel: 'Bron: RDI — eDelivery-aanbieders vallen onder eIDAS en Cbw',
      sourceHref:
        'https://www.rdi.nl/actueel/nieuws/2026/06/03/aanbieders-edelivery-vallen-onder-eidas-en-cbw',
    },
    approach: {
      heading: 'Onze aanpak',
      intro: 'Ontwerpen én bouwen in één onafgebroken lijn — en onszelf er weer uit bouwen.',
      blocks: [
        {
          title: 'Ontwerpen én bouwen — geen overdracht, geen gat.',
          body: 'Bureaus adviseren en verdwijnen. Detacheerders bouwen wat een ander bedacht. Wij houden de hele keten vast — van architectuur tot het ijzer, van conceptie tot ceremonie — want een overdracht is óók een black box: op de naad lekt het begrip en de beheersing weg waar vertrouwen op rust.',
        },
        {
          title: 'Bouwen, bewijzen, overdragen.',
          body: 'Voor complexe initiatieven die de staande organisatie zou smoren, bouwen en operationaliseren we in een aparte hub tot het bewezen en werkend is — en dragen dan een draaiende eenheid over, met de kennis erbij, ingepast in de organisatie. Je wordt méér in control, niet afhankelijk van ons. We bouwen onszelf eruit.',
        },
      ],
    },
    services: {
      heading: 'Diensten',
      intro: 'Drie vormen, oplopend in commitment. Van inzicht tot een draaiende eenheid.',
      cards: [
        {
          badge: 'Het startpunt',
          title: 'Afhankelijkheidsdoorlichting',
          subtitle: 'Dependency X-Ray',
          body: 'We doorgronden je stack laag voor laag — van applicatie tot hardware en beheer — en brengen in kaart waar het vertrouwen lekt: de black boxes, de afhankelijkheden, de lagen die je niet kunt certificeren. AI hoort daar nadrukkelijk bij: welke modellen en providers, waar zit de lock-in en het pay-per-query-risico, verlaat data Europa, waar zitten de AI Act-gaten? Puur inzicht, geen belofte. Je krijgt een geprioriteerde kaart van afhankelijkheden en een concrete route naar beheersing.',
        },
        {
          badge: 'De kern',
          title: 'Ontwerpen én bouwen van soevereine vertrouwensdiensten',
          subtitle: 'Design & build sovereign trust services',
          body: 'Heb je een vertrouwenskritische capaciteit nodig die aantoonbaar klopt — een gekwalificeerde vertrouwensdienst, een identiteits-/eIDAS-oplossing, een certificeerbaar platform of soevereine infrastructuur — dan ontwerpen we op architectniveau én realiseren het zelf, in één onafgebroken lijn. Dezelfde discipline geldt voor AI-inzet: soevereine, controleerbare oplossingen waarin beheersing en verifieerbaarheid de eis zijn — eerlijk afgebakend tot waar onze capaciteit nu reikt. Je krijgt een werkende, certificeerbare dienst die je volledig kunt verantwoorden. Geen black box.',
        },
        {
          badge: 'Voor de grote initiatieven',
          title: 'Bouwen, bewijzen, overdragen',
          subtitle: 'Build, prove, transfer',
          body: 'We realiseren en operationaliseren een complex initiatief in een aparte hub tot het werkend en bewezen is, en dragen dan een draaiende afdeling of business unit over — kennis inbegrepen, ingepast in je organisatie. Een operationele eenheid die je zelf beheerst, zonder lock-in.',
        },
      ],
      todo: 'TODO (met klant te bevestigen): definitieve Engelse servicenamen.',
    },
    ai: {
      heading: 'Kracht omarmen, grip behouden.',
      body: 'AI is de zuiverste test van hoe we denken. Het is een dubbele black box — een getraind model dat niemand volledig doorgrondt, en een ondoorzichtig operating- en verdienmodel. We zijn er net zo van onder de indruk als iedereen, maar we passen dezelfde discipline toe die we overal toepassen: begrijpen en beheersen wat kan, soeverein en verifieerbaar inrichten, lock-in vermijden, en de AI Act als ontwerp-uitgangspunt nemen in plaats van als rem achteraf. En we zijn eerlijk: dit is ook voor ons geen gesneden koek — we werken eraan. Juist die eerlijkheid is het punt.',
    },
    collective: {
      heading: 'Het collectief',
      lead: 'Een collectief van senior technologen — want alleen wie de hele stack doorgrondt, kan vertrouwen bouwen. Senioriteit is hier een vereiste, geen vinkje.',
      experience: '90+ jaar gecombineerde ervaring.',
      members: [
        {
          name: 'Koen Bonnet',
          badge: 'Architecture & Product Delivery',
          href: 'https://goodgrid.nl',
          blurb:
            'Enterprise-architectuur, product ownership, DevOps en hands-on Node.js-ontwikkeling. Van strategie tot productie.',
        },
        {
          name: 'Aniek Hannink',
          badge: 'Architecture & Secure Software',
          href: 'https://goodgrid.nl/magicchoice',
          blurb:
            'Bedreven in het toepassen van fundamentele technieken om diensten écht te laten werken — van architectuur via implementatie tot beheer.',
        },
        {
          name: 'Wiebe Woudstra',
          badge: 'Cloud Strategy & AI',
          href: 'https://www.beaudesert.nl',
          blurb:
            'Cloud-infrastructuur, AI-advies, identity management en hands-on IT-operatie. Van interim-leiderschap tot end-to-end operationele oplevering.',
        },
      ],
    },
    proof: {
      heading: 'We hebben gebouwd wat de meesten alleen beweren.',
      body: 'We ontwierpen en bouwden een gekwalificeerde vertrouwensdienst (QTSP) van begin tot eind. We zetten het ontwerp van onze voorgangers opzij omdat het niet te certificeren was, ontwierpen het opnieuw, en realiseerden het zelf — van de software tot de Root CA en Issuing CA, van het plannen tot het uitvoeren van de sleutelceremonie. Van conceptie tot ceremonie.',
    },
    contact: {
      heading: 'Vertrouwen dat je niet kunt uitbesteden? Laten we praten.',
      body: 'Een kort, direct gesprek om te zien of we kunnen helpen. Geen verplichtingen, geen salestraject.',
      cta: 'Neem contact op',
    },
    footer: {
      tag: 'Soeverein digitaal vertrouwen',
      emailLabel: 'E-mail',
    },
  },

  en: {
    nav: {
      conviction: 'Conviction',
      whyNow: 'Why now',
      approach: 'Approach',
      services: 'Services',
      ai: 'On AI',
      collective: 'The Collective',
      proof: 'Proof',
      contact: 'Contact',
      cta: 'Schedule a call',
    },
    langSwitch: { label: 'Language', toNl: 'Switch to Dutch' },
    hero: {
      eyebrow: 'A collective of senior technologists',
      headline: 'Digital trust you can actually account for.',
      lead: 'For banks, healthcare and government, we design and build trust-critical systems you fully understand and control — from architecture to the foundation. No black boxes.',
      audience:
        'For organisations that must be demonstrably in control of trust-critical technology — banks, healthcare and government, and the widening ring now drawn into eIDAS/Cbw scope or the European wallet: trust service providers, eDelivery/Peppol, and anyone running a trust-critical interface.',
      ctaPrimary: 'Schedule a call',
      ctaSecondary: 'How we work',
    },
    conviction: {
      heading: 'You cannot buy trust — only understand and control it.',
      body: 'The convenient products of hyperscalers and SaaS are black boxes. Useful, until you must account for your technology — and then it turns out you cannot certify, demonstrate or trust what you do not comprehend. When it truly has to be right, every layer counts, down to the metal, and convenience becomes a liability. That is why sovereignty, for us, is not a political stance but a technical precondition for trust: you cannot trust what someone else hides from you. Europe outsourced this craft. We help organisations master it again.',
      supporting:
        'Built on European frameworks — eIDAS, the AI Act, ISO 27001 — as a design principle, not a compliance checkbox afterwards.',
    },
    whyNow: {
      kicker: 'Why now',
      heading: 'The law is setting the clock.',
      body: 'Two reinforcing shifts are widening who must be in control of their trust technology — and adding a deadline. First, eIDAS scope is widening: it is technology-neutral, so scope follows function, not technology. In June 2026 the Dutch regulator RDI concluded that providers of eDelivery ("digital registered post") are trust service providers, falling under eIDAS and the Cybersecurity Act — starting with Peppol service providers. Second, eIDAS2 forces adoption where eIDAS1 stalled: Member States must introduce the European digital identity wallet, and relying parties must accept it — for regulated sectors and very large platforms by 6 December 2027. Governments unlock authentic sources as claims and onboard citizens with PIDs and credentials; the private sector rides along, both accepting the wallet and issuing its own credentials. Most will tick the box under time pressure with a convenient black-box vendor. We do the opposite: sovereign, certifiable, and built to last — because this is your trust infrastructure now.',
      deadlineLabel: 'eIDAS2 wallet acceptance deadline',
      deadlineValue: '6 December 2027',
      sourceLabel: 'Source: RDI — eDelivery providers fall under eIDAS and the Cybersecurity Act',
      sourceHref:
        'https://www.rdi.nl/actueel/nieuws/2026/06/03/aanbieders-edelivery-vallen-onder-eidas-en-cbw',
    },
    approach: {
      heading: 'Our approach',
      intro: 'Design and build in one unbroken line — and build ourselves back out.',
      blocks: [
        {
          title: 'Design and build — no handover, no gap.',
          body: 'Consultancies advise and leave. Staffing firms build what someone else designed. We hold the whole chain — from architecture to the metal, from conception to ceremony — because a handover is itself a black box: at the seam, the understanding and control that trust depends on leak away.',
        },
        {
          title: 'Build, prove, hand over.',
          body: 'For complex initiatives that the standing organisation would smother, we build and operate in a separate hub until it is proven and operational — then hand over a running unit, with the knowledge transferred and embedded. You end up more in control, not dependent on us. We build ourselves out.',
        },
      ],
    },
    services: {
      heading: 'Services',
      intro: 'Three forms, ascending in commitment. From insight to a running unit.',
      cards: [
        {
          badge: 'The entry point',
          title: 'Dependency X-Ray',
          subtitle: 'Afhankelijkheidsdoorlichting',
          body: 'We map your stack layer by layer — from application to hardware and management — and show where trust leaks: the black boxes, the dependencies, the layers you cannot certify. AI is explicitly included: which models and providers, where is the lock-in and the pay-per-query risk, does data leave Europe, where are the AI Act gaps? Pure insight, no promises. You get a prioritised map of dependencies and a concrete route to control.',
        },
        {
          badge: 'The core',
          title: 'Design & build sovereign trust services',
          subtitle: 'Ontwerpen én bouwen van soevereine vertrouwensdiensten',
          body: 'When you need a trust-critical capability that demonstrably holds — a qualified trust service, an identity/eIDAS solution, a certifiable platform or sovereign infrastructure — we design it at architecture level and realise it ourselves, in one unbroken line. The same discipline applies to AI deployment: sovereign, controllable solutions where control and verifiability are the requirement — honestly scoped to where our capability currently reaches. You get a working, certifiable service you can fully account for. No black box.',
        },
        {
          badge: 'For the large initiatives',
          title: 'Build, prove, transfer',
          subtitle: 'Bouwen, bewijzen, overdragen',
          body: 'We realise and operationalise a complex initiative in a separate hub until it is working and proven, then hand over a running department or business unit — knowledge included, embedded in your organisation. An operational unit you control yourself, with no lock-in.',
        },
      ],
      todo: 'TODO (to confirm with client): final external English service names.',
    },
    ai: {
      heading: 'Embrace the power, keep the grip.',
      body: 'AI is the purest test of how we think. It is a double black box — a trained model nobody fully understands, and an opaque operating and pricing model. We are as impressed by it as anyone, but we apply the same discipline we apply everywhere: understand and control what we can, deploy sovereignly and verifiably, avoid lock-in, and treat the AI Act as a design principle rather than a brake bolted on afterwards. And we are honest: this is not solved for us either — we are working on it. That honesty is the point.',
    },
    collective: {
      heading: 'The collective',
      lead: 'A collective of senior technologists — because only those who comprehend the whole stack can build trust. Seniority here is a requirement, not a badge.',
      experience: '90+ years of combined experience.',
      members: [
        {
          name: 'Koen Bonnet',
          badge: 'Architecture & Product Delivery',
          href: 'https://goodgrid.nl',
          blurb:
            'Enterprise architecture, product ownership, DevOps, and hands-on Node.js development. From strategy to production.',
        },
        {
          name: 'Aniek Hannink',
          badge: 'Architecture & Secure Software',
          href: 'https://goodgrid.nl/magicchoice',
          blurb:
            'Skilled at applying fundamental techniques to make services actually work — from architecture through implementation to operations.',
        },
        {
          name: 'Wiebe Woudstra',
          badge: 'Cloud Strategy & AI',
          href: 'https://www.beaudesert.nl',
          blurb:
            'Cloud infrastructure, AI consulting, identity management, and hands-on IT operations. From interim leadership to end-to-end operational delivery.',
        },
      ],
    },
    proof: {
      heading: 'We have built what most only claim.',
      body: 'We designed and built a Qualified Trust Service Provider end to end. We set aside our predecessors’ design because it was not certifiable, redesigned it, and realised it ourselves — from the software to the Root CA and Issuing CA, from planning to executing the key ceremony. From conception to ceremony.',
    },
    contact: {
      heading: 'Trust you can’t outsource? Let’s talk.',
      body: 'A short, direct conversation to see whether we can help. No obligations, no sales process.',
      cta: 'Get in touch',
    },
    footer: {
      tag: 'Sovereign digital trust',
      emailLabel: 'Email',
    },
  },
}

function detectInitialLocale() {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  // 1. Explicit URL override (?lang=en) — makes hreflang URLs meaningful.
  const params = new URLSearchParams(window.location.search)
  const fromUrl = params.get('lang')
  if (fromUrl && LOCALES.includes(fromUrl)) return fromUrl

  // 2. Persisted choice.
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && LOCALES.includes(stored)) return stored
  } catch {
    // ignore storage access errors
  }

  // 3. Browser preference: Dutch speakers get NL, everyone else EN.
  const nav = window.navigator
  const langs = [nav.language, ...(nav.languages || [])].filter(Boolean)
  if (langs.some((l) => l.toLowerCase().startsWith('nl'))) return 'nl'
  return 'en'
}

export function useLanguage() {
  const [locale, setLocale] = useState(detectInitialLocale)

  // Reflect the active locale in <html lang>, document metadata and the URL.
  useEffect(() => {
    const m = meta[locale]
    document.documentElement.lang = m.lang
    document.title = m.title

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }
    setMeta('meta[name="description"]', 'content', m.description)
    setMeta('meta[property="og:title"]', 'content', m.title)
    setMeta('meta[property="og:description"]', 'content', m.description)
    setMeta('meta[name="twitter:title"]', 'content', m.title)
    setMeta('meta[name="twitter:description"]', 'content', m.description)

    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // ignore storage access errors
    }

    // Keep ?lang in sync without adding a history entry.
    const url = new URL(window.location.href)
    if (url.searchParams.get('lang') !== locale) {
      url.searchParams.set('lang', locale)
      window.history.replaceState({}, '', url)
    }
  }, [locale])

  const setLanguage = useCallback((next) => {
    if (LOCALES.includes(next)) setLocale(next)
  }, [])

  return { locale, setLanguage, t: content[locale] }
}
