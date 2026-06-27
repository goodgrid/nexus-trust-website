import { useCallback, useEffect, useState } from 'react'

// Supported locales. NL is primary for the Dutch market; EN for European reach.
export const LOCALES = ['nl', 'en']
export const DEFAULT_LOCALE = 'nl'

const STORAGE_KEY = 'nt-lang'

// Per-locale document metadata (title, description, og/twitter, html lang).
export const meta = {
  nl: {
    lang: 'nl',
    title: 'Nexus Trust - Soeverein digitaal vertrouwen',
    description:
      'Voor organisaties die aantoonbaar in control moeten zijn over vertrouwenskritische technologie ontwerpen én bouwen we soevereine, certificeerbare systemen - eIDAS, wallet, PKI. Geen black boxes.',
  },
  en: {
    lang: 'en',
    title: 'Nexus Trust - Sovereign digital trust',
    description:
      'For organisations that must be demonstrably in control of trust-critical technology, we design and build sovereign, certifiable systems - eIDAS, wallet, PKI. No black boxes.',
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
      menuOpen: 'Menu openen',
      menuClose: 'Menu sluiten',
    },
    langSwitch: { label: 'Taal', toEn: 'Schakel naar Engels' },
    hero: {
      eyebrow: 'Een collectief van senior technologen',
      headline: 'Digitaal vertrouwen dat je écht kunt verantwoorden.',
      lead: 'We ontwerpen én bouwen vertrouwenskritische systemen die je volledig begrijpt en beheerst - van architectuur tot het fundament. Geen black boxes.',
      hook:
        'De Europese wallet maakt vertrouwensdienstverleners van organisaties die dat nooit waren - met eIDAS- en NIS2/Cyberbeveiligingswet-verplichtingen erbij. Wij bouwen de infrastructuur die daartegen bestand is.',
      ctaPrimary: 'Plan een gesprek',
      ctaSecondary: 'Zo werken we',
    },
    conviction: {
      heading: 'Vertrouwen kun je niet inkopen - alleen begrijpen en beheersen.',
      body: 'De gemaksproducten van hyperscalers en SaaS zijn black boxes. Handig, totdat je je technologie moet kunnen verantwoorden - en dan blijkt dat je niet kunt certificeren, aantonen of vertrouwen wat je niet doorgrondt. Zodra het echt moet kloppen, telt elke laag, tot op het ijzer, en wordt gemak een aansprakelijkheid. Daarom is soevereiniteit voor ons geen politiek standpunt maar een technische voorwaarde voor vertrouwen: je kunt niet vertrouwen wat een ander voor je verbergt. Europa besteedde dit vak uit. Wij helpen organisaties het weer te beheersen.',
      supporting:
        'Gebouwd op Europese kaders - eIDAS, de AI Act, ISO 27001 - als ontwerp-uitgangspunt, niet als compliance-vinkje achteraf.',
      structuralHeading: 'Soevereiniteit is structureel, geen vlag.',
      structuralBody:
        "Soevereiniteit op basis van leveranciersnationaliteit is broos. Kies vandaag een Europese leverancier en een overname die je niet in de hand hebt maakt 'm morgen buitenlands - je soevereiniteit verdampt via een eigendomswisseling op een laag die je nooit bezat. Echte soevereiniteit is structureel: controle over de datalaag, portabiliteit en open standaarden, zodat een eigendomswisseling je niet alsnog vastzet. Eigendom en jurisdictie horen bij wat je moet kunnen beheersen - niet alleen de techniek.",
    },
    whyNow: {
      kicker: 'Waarom nu',
      heading: 'De wet zet de klok.',
      body: [
        'De Europese digitale identity wallet bouwt op vertrouwensdiensten, en is waardevol voor enorm veel partijen - dus om mee te doen word je vanzelf het ecosysteem in gezogen. Geef je een credential of attestatie uit in de wallet, of vertrouw je erop, dan word je vertrouwensdienstverlener, vaak zonder het door te hebben. En vertrouwensdienstverleners worden in een zwaarder regime getrokken: eIDAS-verplichtingen plus NIS2 - in Nederland de Cyberbeveiligingswet - met beveiligingsplichten, toezicht en meldplicht.',
        'Twee krachten versnellen dit. eIDAS is technologieneutraal, dus de reikwijdte volgt de functie, niet de techniek: de RDI concludeerde in juni 2026 dat zelfs aanbieders van eDelivery ("digitale aangetekende post") vertrouwensdienstverleners zijn - één illustratie van hoe wijd het net reikt. En eIDAS2 forceert de adoptie die eIDAS1 miste: lidstaten moeten de wallet leveren, en relying parties moeten die accepteren - voor gereguleerde sectoren en grote platforms uiterlijk ~eind 2027. De meesten halen onder tijdsdruk het vinkje met een gemakkelijke black-box-leverancier. Wij doen het omgekeerde: soeverein, certificeerbaar en gebouwd om te blijven - want dit ís nu je vertrouwensinfrastructuur. En het is onze thuisbasis: wallet, PID, credentials en attestaties zijn PKI en vertrouwensdiensten, exact wat we met de QTSP bouwden.',
      ],
      timelineLabel: 'De klok loopt (benaderende mijlpalen)',
      timeline: [
        { date: '20 mei 2024', label: 'in werking' },
        { date: 'dec 2024', label: 'uitvoeringshandelingen - de klok start' },
        { date: '~eind 2026', label: 'lidstaten bieden wallet (met PID) aan' },
        { date: '~eind 2027', label: 'acceptatieplicht: gereguleerde sectoren + grote platforms' },
      ],
      deadlineLabel: 'Acceptatieplicht eIDAS2-wallet',
      deadlineValue: '~eind 2027',
      sourceLabel: 'Bron: RDI - eDelivery-aanbieders vallen onder eIDAS en Cbw',
      sourceHref:
        'https://www.rdi.nl/actueel/nieuws/2026/06/03/aanbieders-edelivery-vallen-onder-eidas-en-cbw',
    },
    approach: {
      heading: 'Onze aanpak',
      intro: 'Ontwerpen én bouwen in één onafgebroken lijn - en onszelf er weer uit bouwen.',
      blocks: [
        {
          title: 'Ontwerp en bouw, in één hand.',
          body: 'Bureaus adviseren en verdwijnen. Detacheerders bouwen wat een ander bedacht. Wij houden de hele keten vast - van architectuur tot het ijzer, van conceptie tot ceremonie - want elke overdracht tussen specialisten is óók een black box: op de naad lekt het begrip en de beheersing weg waar vertrouwen op rust.',
        },
        {
          title: 'Bouwen, bewijzen, overdragen - de enige overdracht die telt is de laatste: naar jou.',
          body: 'Voor complexe initiatieven die de staande organisatie zou smoren, bouwen en operationaliseren we in een aparte hub tot het bewezen en werkend is - en dragen dan een draaiende eenheid over aan je team, met de kennis erbij. Dit is het tegenovergestelde van een tussentijdse overdracht: geen naad die controle laat weglekken, maar een complete, bewuste eindoverdracht van een bewezen capaciteit die je zelf kunt beheersen. Je wordt méér in control, niet afhankelijk van ons. We bouwen onszelf eruit.',
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
          body: 'We doorgronden je stack laag voor laag - van applicatie tot hardware en beheer - en brengen in kaart waar het vertrouwen lekt: de black boxes, de afhankelijkheden, de lagen die je niet kunt certificeren. AI hoort daar nadrukkelijk bij: welke modellen en providers, waar zit de lock-in en het pay-per-query-risico, verlaat data Europa, waar zitten de AI Act-gaten? Puur inzicht, geen belofte. Je krijgt een geprioriteerde kaart van afhankelijkheden en een concrete route naar beheersing.',
        },
        {
          badge: 'De kern',
          title: 'Ontwerpen én bouwen van soevereine vertrouwensdiensten',
          subtitle: 'Design & build sovereign trust services',
          body: 'Heb je een vertrouwenskritische capaciteit nodig die aantoonbaar klopt - een gekwalificeerde vertrouwensdienst, een identiteits-/eIDAS-oplossing, een certificeerbaar platform of soevereine infrastructuur - dan ontwerpen we op architectniveau én realiseren het zelf, in één onafgebroken lijn. Dezelfde discipline geldt voor AI-inzet: soevereine, controleerbare oplossingen waarin beheersing en verifieerbaarheid de eis zijn - eerlijk afgebakend tot waar onze capaciteit nu reikt. Je krijgt een werkende, certificeerbare dienst die je volledig kunt verantwoorden. Geen black box.',
        },
        {
          badge: 'Voor de grote initiatieven',
          title: 'Bouwen, bewijzen, overdragen',
          subtitle: 'Build, prove, transfer',
          body: 'We realiseren en operationaliseren een complex initiatief in een aparte hub tot het werkend en bewezen is, en dragen dan een draaiende afdeling of business unit over - kennis inbegrepen, ingepast in je organisatie. Een operationele eenheid die je zelf beheerst, zonder lock-in.',
        },
      ],
      todo: 'TODO (met klant te bevestigen): definitieve Engelse servicenamen.',
    },
    ai: {
      heading: 'Kracht omarmen, grip behouden.',
      body: 'AI is de zuiverste test van hoe we denken. Het is een dubbele black box - een getraind model dat niemand volledig doorgrondt, en een ondoorzichtig operating- en verdienmodel. We zijn er net zo van onder de indruk als iedereen, maar we passen dezelfde discipline toe die we overal toepassen: begrijpen en beheersen wat kan, soeverein en verifieerbaar inrichten, lock-in vermijden, en de AI Act als ontwerp-uitgangspunt nemen in plaats van als rem achteraf. En we zijn eerlijk: dit is ook voor ons geen gesneden koek - we werken eraan. Juist die eerlijkheid is het punt.',
    },
    collective: {
      heading: 'Het collectief',
      lead: 'Een collectief van senior technologen - want alleen wie de hele stack doorgrondt, kan vertrouwen bouwen. Senioriteit is hier een vereiste, geen vinkje.',
      experience: '90+ jaar gecombineerde ervaring.',
      // TODO (per brief §8): blurbs voorleggen aan elk lid ter bevestiging vóór publicatie; geen credentials verzinnen.
      members: [
        {
          name: 'Koen Bonnet',
          badge: 'Architecture & Product Delivery',
          href: 'https://goodgrid.nl',
          blurb:
            'Enterprise-architectuur, product ownership, DevOps en hands-on softwareontwikkeling (o.a. Node.js). Van strategie tot productie - de onafgebroken lijn.',
        },
        {
          name: 'Aniek Hannink',
          badge: 'Architecture & Secure Software',
          href: 'https://goodgrid.nl/magicchoice',
          blurb:
            'Past fundamentele technieken toe om vertrouwenskritische diensten écht te laten werken en standhouden - van architectuur via implementatie tot beheer.',
        },
        {
          name: 'Wiebe Woudstra',
          badge: 'Cloud Strategy & AI',
          href: 'https://www.beaudesert.nl',
          blurb:
            'Cloud-infrastructuur, AI-advies, identity management en hands-on IT-operatie - met oog voor soevereiniteit en grip. Van interim-leiderschap tot end-to-end operationele oplevering.',
        },
      ],
      delivery:
        'We zijn een kernteam dat het echte werk doet - ontwerpen en bouwen, de onafgebroken lijn. De technische realisatie blijft in de kern; het begrip en de beheersing die vertrouwen vereist besteden we niet uit. Naar behoefte vullen we aan met aangrenzende, gespecialiseerde rollen buiten de techniek: (eIDAS-)juridische expertise en een parttime compliance officer tijdens de operate-fase. We vullen aan rónd de kern - we geven de kern niet weg. Geen overdracht, geen bodyshopping.',
    },
    proof: {
      heading: 'Bewijs',
      cases: [
        {
          title: 'Wij bouwden wat anderen alleen beweren.',
          body: 'We ontwierpen en bouwden een gekwalificeerde vertrouwensdienst voor de uitgifte van gekwalificeerde handtekeningcertificaten - voor een beroepsgroep en uiteindelijk alle Nederlandse burgers. Het oorspronkelijke ontwerp, gemaakt zonder voldoende kennis van eIDAS, was te breed en niet te certificeren. We brachten het terug tot de minimale certificeerbare kern - die eerst certificeren, daarna uitbouwen vanuit een onderhoudspositie, agile en zonder stakeholders te overspoelen met blokkerende beslissingen - en bouwden het zelf: software, Root CA en Issuing CA, sleutelceremonie. Hernieuwd ontwerp en bouw in zes maanden; ISO 27001- en eIDAS/ETSI-certificering in nog eens zes - geslaagd. Van een niet-certificeerbaar concept naar een gecertificeerde, operationele vertrouwensdienst in een jaar.',
        },
        {
          title: "We adviseren de verschuiving niet alleen - we maken 'm.",
          body: 'Voor een cliëntidentificatiedienst in een gereguleerde sector verhuisden we de dienst naar Europese infrastructuur, namen we beheer en doorontwikkeling in eigen hand van een externe integrator - build, operate, en straks hand-over - en vervangen we de ingekochte black-box-echtheidscontrole van identiteitsbewijzen door een modulaire, flexibele dienst op basis van open source. De echtheidscontrole-software doet daarin nog steeds het werk, maar de lock-in is weg - de component is vervangbaar en de architectuur eromheen is van ons. Het resultaat: soevereine infrastructuur, eigenaarschap zonder overdracht-gat, en black boxes omgezet in modulaire bouwblokken waar je niet meer aan vastzit - met hogere betrouwbaarheid.',
        },
      ],
      illustration:
        'Voor een Europese retail-multinational ontwierpen we de aanpak én de tooling en voerden we het migratieproces voor ~5 miljoen HR-documenten - zó ingericht dat op individueel documentniveau verantwoording mogelijk is. Ontwerp, bouw en uitvoering in één hand; juist daardoor verifieerbare integriteit op schaal, met gevoelige persoonsgegevens.',
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
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    langSwitch: { label: 'Language', toNl: 'Switch to Dutch' },
    hero: {
      eyebrow: 'A collective of senior technologists',
      headline: 'Digital trust you can actually account for.',
      lead: 'We design and build trust-critical systems you fully understand and control - from architecture to the foundation. No black boxes.',
      hook:
        'The European wallet is turning organisations that never were trust service providers into exactly that - with eIDAS and NIS2/Cyberbeveiligingswet obligations to match. We build the infrastructure that holds up to it.',
      ctaPrimary: 'Schedule a call',
      ctaSecondary: 'How we work',
    },
    conviction: {
      heading: 'You cannot buy trust - only understand and control it.',
      body: 'The convenient products of hyperscalers and SaaS are black boxes. Useful, until you must account for your technology - and then it turns out you cannot certify, demonstrate or trust what you do not comprehend. When it truly has to be right, every layer counts, down to the metal, and convenience becomes a liability. That is why sovereignty, for us, is not a political stance but a technical precondition for trust: you cannot trust what someone else hides from you. Europe outsourced this craft. We help organisations master it again.',
      supporting:
        'Built on European frameworks - eIDAS, the AI Act, ISO 27001 - as a design principle, not a compliance checkbox afterwards.',
      structuralHeading: 'Sovereignty is structural, not a flag.',
      structuralBody:
        'Sovereignty by vendor nationality is fragile. Pick a European supplier today and an acquisition you do not control can make it foreign tomorrow - and your sovereignty evaporates through an ownership change at a layer you never owned. Real sovereignty is structural: control of the data layer, portability and open standards, so a change of ownership cannot trap you. Ownership and jurisdiction are part of what you must be able to control - not just the technology.',
    },
    whyNow: {
      kicker: 'Why now',
      heading: 'The law is setting the clock.',
      body: [
        'The European digital identity wallet is built on trust services, and it is valuable to a huge range of parties - so to take part, you get pulled in. Issue a credential or attestation into the wallet, or rely on one, and you become a trust service provider, often without realising it. And trust service providers are pulled into a heavier regime: eIDAS obligations plus NIS2 - in the Netherlands the Cyberbeveiligingswet - with security duties, supervision and incident reporting.',
        'Two forces accelerate this. eIDAS is technology-neutral, so its scope follows function, not technology: in June 2026 the Dutch regulator RDI concluded that even eDelivery providers ("digital registered post") are trust service providers - one illustration of how wide the net reaches. And eIDAS2 forces adoption where eIDAS1 stalled: Member States must provide the wallet, and relying parties must accept it - for regulated sectors and very large platforms by ~end 2027. Most will tick the box under time pressure with a convenient black-box vendor. We do the opposite: sovereign, certifiable, and built to last - because this is your trust infrastructure now. And it is our home turf: wallet, PID, credentials and attestations are PKI and trust services, exactly what we built with the QTSP.',
      ],
      timelineLabel: 'The clock is running (approximate milestones)',
      timeline: [
        { date: '20 May 2024', label: 'enters into force' },
        { date: 'Dec 2024', label: 'implementing acts - the clock starts' },
        { date: '~end 2026', label: 'Member States offer the wallet (with PID)' },
        { date: '~end 2027', label: 'acceptance duty: regulated sectors + large platforms' },
      ],
      deadlineLabel: 'eIDAS2 wallet acceptance duty',
      deadlineValue: '~end 2027',
      sourceLabel: 'Source: RDI - eDelivery providers fall under eIDAS and the Cybersecurity Act',
      sourceHref:
        'https://www.rdi.nl/actueel/nieuws/2026/06/03/aanbieders-edelivery-vallen-onder-eidas-en-cbw',
    },
    approach: {
      heading: 'Our approach',
      intro: 'Design and build in one unbroken line - and build ourselves back out.',
      blocks: [
        {
          title: 'Design and build, held in one hand.',
          body: 'Consultancies advise and leave. Staffing firms build what someone else designed. We hold the whole chain - from architecture to the metal, from conception to ceremony - because every handoff between specialists is itself a black box: at the seam, the understanding and control that trust depends on leak away.',
        },
        {
          title: 'Build, prove, transfer - the only handover that counts is the last one: to you.',
          body: 'For complex initiatives that the standing organisation would smother, we build and operate in a separate hub until it is proven and operational - then transfer a running unit to your team, with the knowledge embedded. This is the opposite of a mid-stream handoff: not a seam that leaks control, but a complete, deliberate transfer of a proven capability you can run yourself. You end up more in control, not dependent on us. We build ourselves out.',
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
          body: 'We map your stack layer by layer - from application to hardware and management - and show where trust leaks: the black boxes, the dependencies, the layers you cannot certify. AI is explicitly included: which models and providers, where is the lock-in and the pay-per-query risk, does data leave Europe, where are the AI Act gaps? Pure insight, no promises. You get a prioritised map of dependencies and a concrete route to control.',
        },
        {
          badge: 'The core',
          title: 'Design & build sovereign trust services',
          subtitle: 'Ontwerpen én bouwen van soevereine vertrouwensdiensten',
          body: 'When you need a trust-critical capability that demonstrably holds - a qualified trust service, an identity/eIDAS solution, a certifiable platform or sovereign infrastructure - we design it at architecture level and realise it ourselves, in one unbroken line. The same discipline applies to AI deployment: sovereign, controllable solutions where control and verifiability are the requirement - honestly scoped to where our capability currently reaches. You get a working, certifiable service you can fully account for. No black box.',
        },
        {
          badge: 'For the large initiatives',
          title: 'Build, prove, transfer',
          subtitle: 'Bouwen, bewijzen, overdragen',
          body: 'We realise and operationalise a complex initiative in a separate hub until it is working and proven, then hand over a running department or business unit - knowledge included, embedded in your organisation. An operational unit you control yourself, with no lock-in.',
        },
      ],
      todo: 'TODO (to confirm with client): final external English service names.',
    },
    ai: {
      heading: 'Embrace the power, keep the grip.',
      body: 'AI is the purest test of how we think. It is a double black box - a trained model nobody fully understands, and an opaque operating and pricing model. We are as impressed by it as anyone, but we apply the same discipline we apply everywhere: understand and control what we can, deploy sovereignly and verifiably, avoid lock-in, and treat the AI Act as a design principle rather than a brake bolted on afterwards. And we are honest: this is not solved for us either - we are working on it. That honesty is the point.',
    },
    collective: {
      heading: 'The collective',
      lead: 'A collective of senior technologists - because only those who comprehend the whole stack can build trust. Seniority here is a requirement, not a badge.',
      experience: '90+ years of combined experience.',
      // TODO (per brief §8): have each member confirm their blurb before publishing; do not invent credentials.
      members: [
        {
          name: 'Koen Bonnet',
          badge: 'Architecture & Product Delivery',
          href: 'https://goodgrid.nl',
          blurb:
            'Enterprise architecture, product ownership, DevOps, and hands-on software development (incl. Node.js). From strategy to production - the unbroken line.',
        },
        {
          name: 'Aniek Hannink',
          badge: 'Architecture & Secure Software',
          href: 'https://goodgrid.nl/magicchoice',
          blurb:
            'Applies fundamental techniques to make trust-critical services actually work and hold up - from architecture through implementation to operations.',
        },
        {
          name: 'Wiebe Woudstra',
          badge: 'Cloud Strategy & AI',
          href: 'https://www.beaudesert.nl',
          blurb:
            'Cloud infrastructure, AI consulting, identity management, and hands-on IT operations - with an eye for sovereignty and control. From interim leadership to end-to-end operational delivery.',
        },
      ],
      delivery:
        'We are a core team that does the real work - design and build, the unbroken line. The technical realisation stays in the core; we do not outsource the understanding and control that trust requires. We extend, as needed, with adjacent specialist roles that sit outside the engineering core: (eIDAS) legal expertise, and a part-time compliance officer during the operating phase. We add around the core - we never give the core away. No handover, no bodyshopping.',
    },
    proof: {
      heading: 'Proof',
      cases: [
        {
          title: 'We built what others only claim.',
          body: 'We designed and built a Qualified Trust Service Provider for issuing qualified electronic-signature certificates - for a professional group and, ultimately, all Dutch citizens. The original design, made without sufficient eIDAS knowledge, was too broad and could not be certified. We cut it back to the minimal certifiable core - certify that first, then expand from a position of maintenance audits, agile and without flooding stakeholders with blocking decisions - and built it ourselves: software, Root CA and Issuing CA, key ceremony. Renewed design and build in six months; ISO 27001 and eIDAS/ETSI certification in another six - achieved. From an uncertifiable concept to a certified, operational trust service in a year.',
        },
        {
          title: "We don't just advise the shift - we make it.",
          body: 'For a client-identification service in a regulated sector, we moved the service onto European infrastructure, took its operation and development in-house from an external integrator - build, operate, and soon hand over - and are replacing the procured black-box ID-authenticity solution with a modular, flexible service built on open source. The authenticity software still does the actual checking, but the lock-in is gone - the component is swappable and the architecture around it is ours. The result: sovereign infrastructure, ownership without a handover gap, and black boxes turned into modular building blocks you are no longer locked into - with higher reliability.',
        },
      ],
      illustration:
        'For a European retail multinational, we designed the approach and the tooling and ran the migration process for ~5 million HR documents - built so accountability holds at the level of each individual document. Design, build and operate in one hand; that is what makes integrity verifiable at scale, with sensitive personal data.',
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

  // 1. Explicit URL override (?lang=en) - makes hreflang URLs meaningful.
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
