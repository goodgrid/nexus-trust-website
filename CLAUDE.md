# Claude Code prompt - Nexus Trust website herpositionering (NL + EN)

> Geef onderstaande instructie aan Claude Code in de repository van nexustrust.eu.
> De prompt is zelfstandig leesbaar: alle benodigde merk- en contentinformatie staat erin.

---

## 0. Rol en doel

You are rebuilding the website **nexustrust.eu**. The site currently positions Nexus Trust as "a collective of senior freelancers that unsticks complex IT." That positioning is outdated. Your job is to **fully reposition** the site around a new, sharper brand: **sovereign digital trust for organisations that cannot outsource their trust**. The site must become **bilingual: Dutch (primary for the NL market) and English (for European reach)**, with a clean language switch.

Work in this order:
1. **Inspect the existing codebase first.** Detect the framework/stack (it appears to be a static or JS-rendered single-page site with `logo.png` at the root). Report what you find: build tooling, routing, styling system, deployment config. Do not assume - read `package.json`, config files, and the existing components.
2. Propose a minimal, sound plan to (a) add i18n/bilingual routing and (b) restructure content into the new information architecture below. Reuse the existing stack and design system where reasonable; only introduce new dependencies if clearly justified.
3. Implement the new content and structure (sections 3–8 below).
4. Update all metadata, SEO and Open Graph tags per language (section 9).
5. Run the acceptance checklist (section 11).

Keep changes reviewable: commit in logical steps and summarise what changed.

---

## 1. Brand brief (the new positioning - your source of truth)

**One-liner.** Nexus Trust builds digital trust that holds - sovereign, verifiable and controlled to the foundation - for organisations that cannot outsource their trust.

**Purpose.** Europe became dependent on convenient technology it no longer understands. Convenience won over comprehension; the craft was outsourced. Nexus Trust exists to reverse that: helping organisations - and with them Europe - regain the capability to build and control trust-critical technology themselves. Sovereignty here is **not ideology or protectionism**; it is about regaining competence. (Internal metaphor: "Europe must learn to cook again instead of depending on someone else's kitchen." Use the *spirit* of this externally; keep it positive and do **not** name any country as an adversary.)

**Core conviction.** *You cannot buy trust - you can only understand and control it.* The thick convenience products of hyperscalers and SaaS are black boxes. Handy, until you must actually account for your technology - and then it turns out you cannot certify, demonstrate or trust what you do not comprehend. When it truly has to be right, every layer counts down to the metal, and convenience becomes a liability. Sovereignty is therefore a **technical precondition for trust**: you cannot trust what someone else hides from you. And sovereignty is *structural*, not a flag: choosing a European vendor is no guarantee, because an ownership change you do not control can make it foreign overnight. Real sovereignty means controlling the data layer, portability and open standards - ownership and jurisdiction are part of what you must be able to control, not just the technology.

**The differentiator (moat).** Consultancies advise and leave; staffing firms build what someone else designed. Nexus Trust holds the **entire chain** - from architecture to bare metal, from conception to ceremony - in one unbroken line. Reason: *a handover is itself a black box.* At the seam between design and realisation, exactly what trust requires (understanding and control) leaks away. So: no handover, no gap, one line. This is why "a collective of senior technologists" is a requirement, not marketing - only someone who comprehends the whole stack can build trust.

**Implementation model - build, prove, hand over.** Complex, innovative initiatives do not survive the antibodies of the standing organisation. So Nexus Trust realises and operationalises them in a separate hub until they are working and proven, then hands over a **running department or business unit** - with the knowledge transferred and embedded. This creates no dependency on Nexus Trust, no lock-in: *we build ourselves out.* The same conviction (make the client independent, not dependent) applied to the engagement itself.

**Proof.** Nexus Trust designed **and** built a Qualified Trust Service Provider (QTSP) for issuing qualified certificates for electronic signatures - serving a professional group and, ultimately, all Dutch citizens. The original design had been made without sufficient eIDAS knowledge: scope too broad, technologically not certifiable. We cut scope back to the minimal certifiable core (deliberate strategy: certify the core first, then expand from a position where only maintenance audits remain - agile, without flooding stakeholders with blocking decisions), and realised it end to end: software, Root CA and Issuing CA, and the key ceremony. Outcome: renewed design and implementation in 6 months; ISO 27001 and eIDAS/ETSI certification in a further 6 months - achieved. From an uncertifiable concept to a certified, operational qualified trust service in a year. (Client cannot be named - keep anonymised; see guardrail in §10.)

A second, live case proves build-operate-transfer and sovereignty in practice: for a client-identification service in a regulated sector, Nexus Trust moved the service onto European infrastructure, took its operation and development in-house from an external integrator (build, operate, and soon hand over), and is replacing the procured black-box ID-authenticity solution with a modular, flexible service built on open source. The authenticity software still does the actual checking, but the lock-in is gone - the component is swappable and the architecture around it is ours - for higher reliability and control. (Sector omitted; external integrator not named; keep neutral - see guardrail in §10.)

A third, subordinate capability illustration (one line, not a full case): for a European retail multinational, Nexus Trust designed the approach and the tooling and ran the migration process for ~5 million HR documents - built so that accountability holds at the level of each individual document. This is the same design-build-operate chain: owning the whole chain is exactly what makes integrity verifiable at scale, with sensitive personal data. Frame it strictly as that (verifiable integrity through end-to-end ownership); do NOT frame it as a sovereignty win (the destination vendor has since changed ownership) and do not name the vendor. See guardrail in §10.

**Position on AI.** AI is not the exception to this philosophy - it is the purest test of it. It is a *double black box*: technically a trained model nobody fully understands, and commercially an opaque operating/pricing model. The addiction pattern repeats - impressive and cheap now, dependent later, then pay-per-query. Nexus Trust is **not against AI**; it is as impressed as anyone, but applies the same discipline: understand and control what you can, deploy sovereignly and verifiably, avoid lock-in, treat the AI Act as a design principle rather than an afterthought. **Embrace the power, keep the grip.** And be honest: this is not solved for us either - we are working on it. That honesty is credibility, not weakness; it distinguishes us from the hype sellers.

**Focus vs vision.** Focus is defined by *situation*, not by sector: organisations that must be demonstrably in control of trust-critical technology. That ring is wider than classic critical infrastructure and is growing, driven by regulation. *Beachhead (where we enter now, with urgency):* trust service providers and organisations being pulled into eIDAS/Cyberbeveiligingswet (Cbw) scope - eDelivery/Peppol, ERDS, interfaces that connect third parties - alongside classic critical infra (banks, healthcare, government). *Wider ring (where we are heading):* any organisation running a trust-critical interface or connecting to the European trust ecosystem (wallet, credentials, authentic sources). *Vision:* trust-through-understanding becomes the norm beyond critical infra too.

**Why now (regulatory tailwind - make this prominent on the site).** Sovereignty and trust are no longer merely sensible - the law is setting the clock, and the market is widening structurally. The mechanism: the European digital identity wallet is built on trust services and is valuable to a huge range of parties, so to take part - issuing credentials/attestations into it, or relying on them - organisations become trust service providers, often without realising it. Trust service providers are then pulled into a heavier regime: eIDAS obligations plus NIS2 (in the Netherlands the Cyberbeveiligingswet) - security duties, supervision, incident reporting. Two forces accelerate this: (1) eIDAS is technology-neutral, so scope follows function - in June 2026 the Dutch regulator RDI concluded that even eDelivery providers are trust service providers under eIDAS and the Cbw (one illustration of how wide the net reaches); (2) eIDAS2 forces adoption where eIDAS1 stalled - Member States must provide the wallet and relying parties must accept it, for regulated sectors and very large platforms by 6 December 2027. Most will tick the box under time pressure with a convenient black-box vendor. That is exactly where Nexus Trust differs: sovereign and certifiable, not bolted on. And it is home turf - wallet, PID, credentials and attestations are PKI and trust services, exactly what the QTSP already was.

**Who it's for.** Owners of critical digital services - board, CISO/CTO, programme leads - at banks, healthcare institutions and government, who must be demonstrably in control, no longer want to lean blindly on black boxes from outside Europe, and want a party that not only advises but actually builds it and makes it work.

**What we do / don't.**
- DO: design *and* build (the whole line); build on European frameworks (eIDAS, AI Act, ISO 27001) as a design principle; comprehend and control the full stack down to hardware; honestly say "no" when something can't be accounted for.
- DON'T: resell black boxes or sell convenience as a solution; advise and walk away before it works; bodyshopping without ownership; hype over craftsmanship.

---

## 2. Assessment of the current site - keep / transform / drop

**Keep (already aligned with the new brand):**
- The three named members and their real profiles (Koen Bonnet, Aniek Hannink, Wiebe Woudstra) and "90+ years combined experience."
- "We are not here to become permanent" + knowledge transfer + "owned by your organisation" → reframe as the **build, prove, hand over** model.
- "From architecture through implementation to operations" → reframe as the **one unbroken line** / moat.
- Independence and "no consultancy theatre" → keep; it now supports the trust story.
- The honest, no-nonsense tone and the low-pressure CTA ("a short, direct conversation. No sales process.").

**Transform:**
- The "hard reset / unstick stalled IT" narrative is now at most a *method* ("we set aside what can't be accounted for and rebuild it right" - exactly how the QTSP was done), **not** the headline. Demote it.
- The generic "complex IT challenges" framing → replace with the specific **sovereign digital trust for critical infrastructure** framing.

**Drop / add:**
- DROP: "collective of senior freelancers" as the headline identity (keep "collective of senior technologists" as supporting).
- ADD (entirely missing today): sovereignty, digital trust, the black-box conviction, eIDAS/AI Act/ISO 27001, the QTSP proof, the critical-infra focus, and the AI position.

---

## 3. Information architecture

Single-page site with anchored sections is acceptable (matches current), but structure content as these clear blocks, in this order. Provide a sticky header with logo, section nav, language switch (NL/EN), and a primary CTA.

1. **Hero** - the promise.
2. **The conviction** - why we exist (sovereignty + trust).
3. **Why now** - the regulatory wave (eIDAS scope widening + eIDAS2 wallet, deadline 6 Dec 2027). Make this prominent; it is the urgency engine.
4. **The approach** - one unbroken line (design + build); build, prove, hand over.
5. **Services** - the three service forms.
6. **On AI** - our position.
7. **The collective** - who we are, why seniority is a requirement.
8. **Proof** - two cases: the QTSP (certified, completed) and the live client-identification case (build-operate-transfer + sovereignty in action).
9. **Contact / CTA.**
10. **Footer** - logo, contact, language switch, minimal legal.

---

## 4. Copy - Hero

Register note: this is buyer-facing. Keep the nationality **implicit** (no "American"); lead with control, accountability and capability, not geopolitics.

**EN**
- Eyebrow: *A collective of senior technologists*
- Headline: **Digital trust you can actually account for.**
- Subhead: We design and build trust-critical systems you fully understand and control - from architecture to the foundation. No black boxes.
- Primary CTA: *Schedule a call* - Secondary: *How we work*

**NL**
- Eyebrow: *Een collectief van senior technologen*
- Headline: **Digitaal vertrouwen dat je écht kunt verantwoorden.**
- Subhead: We ontwerpen én bouwen vertrouwenskritische systemen die je volledig begrijpt en beheerst - van architectuur tot het fundament. Geen black boxes.
- Primary CTA: *Plan een gesprek* - Secondary: *Zo werken we*

**Hook line (one slim line directly under the hero subhead - do NOT make this a separate section).** The subhead carries the promise; this line is the "this is suddenly you" hook - it names why a fast-widening group is being pulled into the trust world. Keep it to one or two sentences. The full mechanism is explained in the "Why now" band; the situation-based focus lives there and in "who it's for", so do not turn this into a sector list in the subhead.
- EN: *The European wallet is turning organisations that never were trust service providers into exactly that - with eIDAS and NIS2/Cyberbeveiligingswet obligations to match. We build the infrastructure that holds up to it.*
- NL: *De Europese wallet maakt vertrouwensdienstverleners van organisaties die dat nooit waren - met eIDAS- en NIS2/Cyberbeveiligingswet-verplichtingen erbij. Wij bouwen de infrastructuur die daartegen bestand is.*

---

## 5. Copy - The conviction

**EN - heading:** *You cannot buy trust - only understand and control it.*
Body: The convenient products of hyperscalers and SaaS are black boxes. Useful, until you must account for your technology - and then it turns out you cannot certify, demonstrate or trust what you do not comprehend. When it truly has to be right, every layer counts, down to the metal, and convenience becomes a liability. That is why sovereignty, for us, is not a political stance but a technical precondition for trust: you cannot trust what someone else hides from you. Europe outsourced this craft. We help organisations master it again.

**NL - kop:** *Vertrouwen kun je niet inkopen - alleen begrijpen en beheersen.*
Body: De gemaksproducten van hyperscalers en SaaS zijn black boxes. Handig, totdat je je technologie moet kunnen verantwoorden - en dan blijkt dat je niet kunt certificeren, aantonen of vertrouwen wat je niet doorgrondt. Zodra het echt moet kloppen, telt elke laag, tot op het ijzer, en wordt gemak een aansprakelijkheid. Daarom is soevereiniteit voor ons geen politiek standpunt maar een technische voorwaarde voor vertrouwen: je kunt niet vertrouwen wat een ander voor je verbergt. Europa besteedde dit vak uit. Wij helpen organisaties het weer te beheersen.

Optional supporting line (both languages): built on European frameworks - eIDAS, the AI Act, ISO 27001 - as a design principle, not a compliance checkbox afterwards.

**Supporting point - sovereignty is structural, not a flag (both languages; a sharp differentiator).**
- EN: Sovereignty by vendor nationality is fragile. Pick a European supplier today and an acquisition you do not control can make it foreign tomorrow - and your sovereignty evaporates through an ownership change at a layer you never owned. Real sovereignty is structural: control of the data layer, portability and open standards, so a change of ownership cannot trap you. Ownership and jurisdiction are part of what you must be able to control - not just the technology.
- NL: Soevereiniteit op basis van leveranciersnationaliteit is broos. Kies vandaag een Europese leverancier en een overname die je niet in de hand hebt maakt 'm morgen buitenlands - je soevereiniteit verdampt via een eigendomswisseling op een laag die je nooit bezat. Echte soevereiniteit is structureel: controle over de datalaag, portabiliteit en open standaarden, zodat een eigendomswisseling je niet alsnog vastzet. Eigendom en jurisdictie horen bij wat je moet kunnen beheersen - niet alleen de techniek.

---

## 5b. Copy - Why now

Make this a prominent band right after the conviction. Lead with the *mechanism*: the wallet is built on trust services and is valuable to many parties, so organisations get pulled into the ecosystem and become trust service providers - which drags them into eIDAS plus NIS2/Cyberbeveiligingswet. Use the RDI/eDelivery ruling only as one illustration, not the headline. It turns "sovereignty is sensible" into "the law is setting the clock, and most will solve it the wrong way." Keep it factual and confident; do not fearmonger. May be split into two short paragraphs for readability.

**EN - heading:** *The law is setting the clock.*
Body: The European digital identity wallet is built on trust services, and it is valuable to a huge range of parties - so to take part, you get pulled in. Issue a credential or attestation into the wallet, or rely on one, and you become a trust service provider, often without realising it. And trust service providers are pulled into a heavier regime: eIDAS obligations plus NIS2 - in the Netherlands the Cyberbeveiligingswet - with security duties, supervision and incident reporting. Two forces accelerate this. eIDAS is technology-neutral, so its scope follows function, not technology: in June 2026 the Dutch regulator RDI concluded that even eDelivery providers ("digital registered post") are trust service providers - one illustration of how wide the net reaches. And eIDAS2 forces adoption where eIDAS1 stalled: Member States must provide the wallet, and relying parties must accept it - for regulated sectors and very large platforms by 6 December 2027. Most will tick the box under time pressure with a convenient black-box vendor. We do the opposite: sovereign, certifiable, and built to last - because this is your trust infrastructure now. And it is our home turf: wallet, PID, credentials and attestations are PKI and trust services, exactly what we built with the QTSP.

**NL - kop:** *De wet zet de klok.*
Body: De Europese digitale identity wallet bouwt op vertrouwensdiensten, en is waardevol voor enorm veel partijen - dus om mee te doen word je vanzelf het ecosysteem in gezogen. Geef je een credential of attestatie uit in de wallet, of vertrouw je erop, dan word je vertrouwensdienstverlener, vaak zonder het door te hebben. En vertrouwensdienstverleners worden in een zwaarder regime getrokken: eIDAS-verplichtingen plus NIS2 - in Nederland de Cyberbeveiligingswet - met beveiligingsplichten, toezicht en meldplicht. Twee krachten versnellen dit. eIDAS is technologieneutraal, dus de reikwijdte volgt de functie, niet de techniek: de RDI concludeerde in juni 2026 dat zelfs aanbieders van eDelivery ("digitale aangetekende post") vertrouwensdienstverleners zijn - één illustratie van hoe wijd het net reikt. En eIDAS2 forceert de adoptie die eIDAS1 miste: lidstaten moeten de wallet leveren, en relying parties moeten die accepteren - voor gereguleerde sectoren en grote platforms uiterlijk 6 december 2027. De meesten halen onder tijdsdruk het vinkje met een gemakkelijke black-box-leverancier. Wij doen het omgekeerde: soeverein, certificeerbaar en gebouwd om te blijven - want dit ís nu je vertrouwensinfrastructuur. En het is onze thuisbasis: wallet, PID, credentials en attestaties zijn PKI en vertrouwensdiensten, exact wat we met de QTSP bouwden.

**Timeline element (render as a simple horizontal / stepped timeline graphic; high-level and factual).** Makes the urgency tangible. Present the dates as approximate ("eind 2026/2027"); they are widely reported estimates keyed to the implementing acts, not hard calendar dates in the regulation text.
- **20 May 2024** - eIDAS2 (Regulation (EU) 2024/1183) enters into force.
- **Dec 2024** - technical implementing acts adopted - this starts the clock.
- **~end 2026** (24 months later) - every Member State must offer at least one EU Digital Identity Wallet, with PID, to its citizens.
- **~end 2027** (a further ~12 months) - mandatory acceptance: regulated private sectors that require strong user authentication, plus very large online platforms/gatekeepers, must accept the wallet (public-sector services are in scope too).
- NL labels: "in werking" / "uitvoeringshandelingen - de klok start" / "lidstaten bieden wallet (met PID) aan" / "acceptatieplicht: gereguleerde sectoren + grote platforms".

(Cite the RDI ruling and the ~end-2027 acceptance milestone as factual anchors. Link the RDI source where appropriate: https://www.rdi.nl/actueel/nieuws/2026/06/03/aanbieders-edelivery-vallen-onder-eidas-en-cbw)

---

## 6. Copy - The approach

Two short sub-blocks. **Important:** these two touch the word "handover" from opposite directions - resolve it explicitly so a critical reader cannot catch a contradiction. A *handoff mid-stream* (between specialists, design thrown over the wall) is the black box we avoid; the *final transfer to the client* is the deliberate, good end-state. Keep that distinction visible in the copy (in NL: "tussentijdse overdracht" vs "eindoverdracht aan jou").

**A. One unbroken line - no handoffs mid-stream.**
- EN: *Design and build, held in one hand.* Consultancies advise and leave. Staffing firms build what someone else designed. We hold the whole chain - from architecture to the metal, from conception to ceremony - because every handoff between specialists is itself a black box: at the seam, the understanding and control that trust depends on leak away.
- NL: *Ontwerp en bouw, in één hand.* Bureaus adviseren en verdwijnen. Detacheerders bouwen wat een ander bedacht. Wij houden de hele keten vast - van architectuur tot het ijzer, van conceptie tot ceremonie - want elke overdracht tussen specialisten is óók een black box: op de naad lekt het begrip en de beheersing weg waar vertrouwen op rust.

**B. Build, prove, transfer - the only handover that counts is the last one: to you.**
- EN: For complex initiatives that the standing organisation would smother, we build and operate in a separate hub until it is proven and operational - then transfer a running unit to your team, with the knowledge embedded. This is the opposite of a mid-stream handoff: not a seam that leaks control, but a complete, deliberate transfer of a proven capability you can run yourself. You end up more in control, not dependent on us. We build ourselves out.
- NL: Voor complexe initiatieven die de staande organisatie zou smoren, bouwen en operationaliseren we in een aparte hub tot het bewezen en werkend is - en dragen dan een draaiende eenheid over aan je team, met de kennis erbij. Dit is het tegenovergestelde van een tussentijdse overdracht: geen naad die controle laat weglekken, maar een complete, bewuste eindoverdracht van een bewezen capaciteit die je zelf kunt beheersen. Je wordt méér in control, niet afhankelijk van ons. We bouwen onszelf eruit.

---

## 7. Copy - Services (three forms, ascending commitment)

Render as three cards. Keep the Dutch working names; provide an English label alongside.

**1. Dependency X-Ray / Afhankelijkheidsdoorlichting** - *the entry point*
- EN: We map your stack layer by layer - from application to hardware and management - and show where trust leaks: the black boxes, the dependencies, the layers you cannot certify. AI is explicitly included: which models and providers, where is the lock-in and the pay-per-query risk, does data leave Europe, where are the AI Act gaps? Pure insight, no promises. You get a prioritised map of dependencies and a concrete route to control.
- NL: We doorgronden je stack laag voor laag - van applicatie tot hardware en beheer - en brengen in kaart waar het vertrouwen lekt: de black boxes, de afhankelijkheden, de lagen die je niet kunt certificeren. AI hoort daar nadrukkelijk bij: welke modellen en providers, waar zit de lock-in en het pay-per-query-risico, verlaat data Europa, waar zitten de AI Act-gaten? Puur inzicht, geen belofte. Je krijgt een geprioriteerde kaart van afhankelijkheden en een concrete route naar beheersing.

**2. Design & build sovereign trust services / Ontwerpen én bouwen van soevereine vertrouwensdiensten** - *the core*
- EN: When you need a trust-critical capability that demonstrably holds - a qualified trust service, an identity/eIDAS solution, a certifiable platform or sovereign infrastructure - we design it at architecture level and realise it ourselves, in one unbroken line. The same discipline applies to AI deployment: sovereign, controllable solutions where control and verifiability are the requirement - honestly scoped to where our capability currently reaches. You get a working, certifiable service you can fully account for. No black box.
- NL: Heb je een vertrouwenskritische capaciteit nodig die aantoonbaar klopt - een gekwalificeerde vertrouwensdienst, een identiteits-/eIDAS-oplossing, een certificeerbaar platform of soevereine infrastructuur - dan ontwerpen we op architectniveau én realiseren het zelf, in één onafgebroken lijn. Dezelfde discipline geldt voor AI-inzet: soevereine, controleerbare oplossingen waarin beheersing en verifieerbaarheid de eis zijn - eerlijk afgebakend tot waar onze capaciteit nu reikt. Je krijgt een werkende, certificeerbare dienst die je volledig kunt verantwoorden. Geen black box.

**3. Build, prove, transfer / Bouwen, bewijzen, overdragen** - *for the large initiatives*
- EN: We realise and operationalise a complex initiative in a separate hub until it is working and proven, then hand over a running department or business unit - knowledge included, embedded in your organisation. An operational unit you control yourself, with no lock-in.
- NL: We realiseren en operationaliseren een complex initiatief in een aparte hub tot het werkend en bewezen is, en dragen dan een draaiende afdeling of business unit over - kennis inbegrepen, ingepast in je organisatie. Een operationele eenheid die je zelf beheerst, zonder lock-in.

---

## 8. Copy - On AI, The collective, Proof, Contact

**On AI.**
- EN heading: *Embrace the power, keep the grip.* Body: AI is the purest test of how we think. It is a double black box - a trained model nobody fully understands, and an opaque operating and pricing model. We are as impressed by it as anyone, but we apply the same discipline we apply everywhere: understand and control what we can, deploy sovereignly and verifiably, avoid lock-in, and treat the AI Act as a design principle rather than a brake bolted on afterwards. And we are honest: this is not solved for us either - we are working on it. That honesty is the point.
- NL kop: *Kracht omarmen, grip behouden.* Body: AI is de zuiverste test van hoe we denken. Het is een dubbele black box - een getraind model dat niemand volledig doorgrondt, en een ondoorzichtig operating- en verdienmodel. We zijn er net zo van onder de indruk als iedereen, maar we passen dezelfde discipline toe die we overal toepassen: begrijpen en beheersen wat kan, soeverein en verifieerbaar inrichten, lock-in vermijden, en de AI Act als ontwerp-uitgangspunt nemen in plaats van als rem achteraf. En we zijn eerlijk: dit is ook voor ons geen gesneden koek - we werken eraan. Juist die eerlijkheid is het punt.

**The collective.** Keep the three profiles (pull current text as a base, update framing). Lead line:
- EN: *A collective of senior technologists - because only those who comprehend the whole stack can build trust.* Seniority here is a requirement, not a badge. Pull the existing per-person blurbs and external profile links from the current live site as a base (Koen Bonnet - Architecture & Product Delivery; Aniek Hannink - Architecture & Secure Software; Wiebe Woudstra - Cloud Strategy & AI), with these corrections: (a) Koen does software development in general, not only Node.js - replace "hands-on Node.js development" with "hands-on software development" (you may mention specific stacks only as examples, e.g. "incl. Node.js", never as the whole); (b) refresh all three blurbs so they fit the new positioning (sovereign digital trust), ideally reviewed by each member before publishing. Do not invent new credentials; leave a clearly-marked TODO where a member still needs to confirm wording.
- NL: *Een collectief van senior technologen - want alleen wie de hele stack doorgrondt, kan vertrouwen bouwen.* Senioriteit is hier een vereiste, geen vinkje.

Delivery model (add as a short paragraph in this section, both languages):
- EN: We are a **core team** that does the real work - design and build, the unbroken line. The technical realisation stays in the core; we do not outsource the understanding and control that trust requires. We extend, as needed, with adjacent specialist roles that sit outside the engineering core: (eIDAS) legal expertise, and a part-time compliance officer during the operating phase. We add around the core - we never give the core away. No handover, no bodyshopping.
- NL: We zijn een **kernteam** dat het echte werk doet - ontwerpen en bouwen, de onafgebroken lijn. De technische realisatie blijft in de kern; het begrip en de beheersing die vertrouwen vereist besteden we niet uit. Naar behoefte vullen we aan met aangrenzende, gespecialiseerde rollen buiten de techniek: (eIDAS-)juridische expertise en een parttime compliance officer tijdens de operate-fase. We vullen aan rónd de kern - we geven de kern niet weg. Geen overdracht, geen bodyshopping.

**Proof - the QTSP.** (Anonymised - the client cannot be named. See guardrail in §10.)
- EN heading: *We built what others only claim.* Body: We designed and built a Qualified Trust Service Provider for issuing qualified electronic-signature certificates - for a professional group and, ultimately, all Dutch citizens. The original design, made without sufficient eIDAS knowledge, was too broad and could not be certified. We cut it back to the minimal certifiable core - certify that first, then expand from a position of maintenance audits, agile and without flooding stakeholders with blocking decisions - and built it ourselves: software, Root CA and Issuing CA, key ceremony. Renewed design and build in six months; ISO 27001 and eIDAS/ETSI certification in another six - achieved. From an uncertifiable concept to a certified, operational trust service in a year.
- NL kop: *Wij bouwden wat anderen alleen beweren.* Body: We ontwierpen en bouwden een gekwalificeerde vertrouwensdienst voor de uitgifte van gekwalificeerde handtekeningcertificaten - voor een beroepsgroep en uiteindelijk alle Nederlandse burgers. Het oorspronkelijke ontwerp, gemaakt zonder voldoende kennis van eIDAS, was te breed en niet te certificeren. We brachten het terug tot de minimale certificeerbare kern - die eerst certificeren, daarna uitbouwen vanuit een onderhoudspositie, agile en zonder stakeholders te overspoelen met blokkerende beslissingen - en bouwden het zelf: software, Root CA en Issuing CA, sleutelceremonie. Hernieuwd ontwerp en bouw in zes maanden; ISO 27001- en eIDAS/ETSI-certificering in nog eens zes - geslaagd. Van een niet-certificeerbaar concept naar een gecertificeerde, operationele vertrouwensdienst in een jaar.

**Proof - a second, live case (build-operate-transfer + sovereignty).** Anonymised: omit the sector, do not name the external integrator, keep it neutral and factual (no disparagement).
- EN heading: *We don't just advise the shift - we make it.* Body: For a client-identification service in a regulated sector, we moved the service onto European infrastructure, took its operation and development in-house from an external integrator - build, operate, and soon hand over - and are replacing the procured black-box ID-authenticity solution with a modular, flexible service built on open source. The authenticity software still does the actual checking, but the lock-in is gone - the component is swappable and the architecture around it is ours. The result: sovereign infrastructure, ownership without a handover gap, and black boxes turned into modular building blocks you are no longer locked into - with higher reliability.
- NL kop: *We adviseren de verschuiving niet alleen - we maken 'm.* Body: Voor een cliëntidentificatiedienst in een gereguleerde sector verhuisden we de dienst naar Europese infrastructuur, namen we beheer en doorontwikkeling in eigen hand van een externe integrator - build, operate, en straks hand-over - en vervangen we de ingekochte black-box-echtheidscontrole van identiteitsbewijzen door een modulaire, flexibele dienst op basis van open source. De echtheidscontrole-software doet daarin nog steeds het werk, maar de lock-in is weg - de component is vervangbaar en de architectuur eromheen is van ons. Het resultaat: soevereine infrastructuur, eigenaarschap zonder overdracht-gat, en black boxes omgezet in modulaire bouwblokken waar je niet meer aan vastzit - met hogere betrouwbaarheid.

**Proof - capability illustration (one line, subordinate to the two cases above).** Frame as verifiable integrity at scale, never as a sovereignty win; do not name the vendor.
- EN: For a European retail multinational, we designed the approach and the tooling and ran the migration process for ~5 million HR documents - built so accountability holds at the level of each individual document. Design, build and operate in one hand; that is what makes integrity verifiable at scale, with sensitive personal data.
- NL: Voor een Europese retail-multinational ontwierpen we de aanpak én de tooling en voerden we het migratieproces voor ~5 miljoen HR-documenten - zó ingericht dat op individueel documentniveau verantwoording mogelijk is. Ontwerp, bouw en uitvoering in één hand; juist daardoor verifieerbare integriteit op schaal, met gevoelige persoonsgegevens.

**Contact / CTA.** Keep the existing low-pressure tone.
- EN: *Trust you can't outsource? Let's talk.* A short, direct conversation to see whether we can help. No obligations, no sales process. CTA: *Get in touch.*
- NL: *Vertrouwen dat je niet kunt uitbesteden? Laten we praten.* Een kort, direct gesprek om te zien of we kunnen helpen. Geen verplichtingen, geen salestraject. CTA: *Neem contact op.*

---

## 9. Technical & SEO requirements

- **Bilingual.** Implement clean NL/EN with a visible switch. Prefer locale-prefixed routes (`/nl`, `/en`) or the stack's idiomatic i18n. Default locale: NL for NL visitors, EN otherwise (or simply default NL with an obvious EN switch - choose the simpler robust option and state your choice). Persist the user's choice.
- **Metadata per language.** Update `<title>`, meta description, canonical, and Open Graph / Twitter tags per locale. Replace the current English-only "Unstick Complex IT" metadata. Add `hreflang` alternates linking NL/EN versions. Per-page metadata must reflect the current positioning: situation-based focus (not a closed sector list), the design-and-build-and-operate offer, and the eIDAS/eIDAS2 urgency. Give service/sub-pages their own meta using the service names (Afhankelijkheidsdoorlichting / Dependency X-Ray, etc.) and intent keywords from the list below.
  - NL title example: "Nexus Trust - Soeverein digitaal vertrouwen" / description: "Voor organisaties die aantoonbaar in control moeten zijn over vertrouwenskritische technologie ontwerpen én bouwen we soevereine, certificeerbare systemen - eIDAS, wallet, PKI. Geen black boxes."
  - EN title example: "Nexus Trust - Sovereign digital trust" / description: "For organisations that must be demonstrably in control of trust-critical technology, we design and build sovereign, certifiable systems - eIDAS, wallet, PKI. No black boxes."
  - Optional eIDAS2-urgency variant (good for the homepage or a wallet/eIDAS landing page): NL "eIDAS2 verplicht de wallet - acceptatie uiterlijk dec 2027. Wij bouwen soevereine, certificeerbare vertrouwensinfrastructuur, geen black box."; EN "eIDAS2 makes the wallet mandatory - acceptance by Dec 2027. We build sovereign, certifiable trust infrastructure, not a black box."
- Keep `logo.png`; ensure OG image still resolves per locale.
- **Responsive design (required).** The site must be fully responsive across mobile, tablet and desktop - mobile-first. The current header is not responsive; fix it. On narrow viewports the navigation must collapse into a hamburger menu (accessible: a real `<button>` with `aria-expanded`/`aria-controls`, keyboard-operable, focus-trapped when open, closes on Escape). The language switch and primary CTA must remain reachable in the collapsed menu. Test at common breakpoints (e.g. 360, 768, 1024, 1440px); no horizontal scroll, no overlap, tap targets at least ~44px. Hero, the audience hook line, the "Why now" band and the service cards must all reflow cleanly on mobile.
- **Accessibility & performance.** Semantic headings, sufficient contrast, keyboard-navigable nav and language switch, alt text. Keep it fast and lightweight; no heavy frameworks added unnecessarily.
- **Analytics/cookies.** If anything is added, default to the most privacy-preserving option and a clear consent choice; do not add non-essential tracking by default.
- **Target keywords (capability- and intent-based, NOT client names).** Optimise to be found by buyers who have the problem - searching on the capability and the regulation - not by people searching for a specific former client. Weave these naturally into headings, body copy and the per-locale meta titles/descriptions; do not keyword-stuff, and never use a client's name for SEO.
  - *Capability (EN):* qualified trust service provider, QTSP, qualified electronic signature certificates, eIDAS, eIDAS2, ETSI, Root CA, Issuing CA, PKI, ISO 27001, digital sovereignty, sovereign digital infrastructure, verifiable credentials, attestations (QEAA/EAA), PID.
  - *Capability (NL):* gekwalificeerde vertrouwensdienst, vertrouwensdienstverlener, gekwalificeerde certificaten elektronische handtekening, eIDAS, eIDAS2, ETSI, Root CA, Issuing CA, PKI, ISO 27001, digitale soevereiniteit, soevereine digitale infrastructuur, verifiable credentials, PID.
  - *Regulation / context (EN & NL):* EUDI wallet / Europese digitale identity wallet, wallet acceptance obligation / wallet-acceptatieplicht, relying party, Cyberbeveiligingswet (Cbw), NIS2, eDelivery, Peppol, ERDS.
  - *Intent / long-tail (give these dedicated headings or future insight articles):* "do I fall under eIDAS" / "val ik onder eIDAS", "eIDAS2 wallet readiness", "eIDAS scope assessment", "build a qualified trust service" / "gekwalificeerde vertrouwensdienst bouwen", "EUDI wallet integration", "wallet-acceptatieplicht 2027", "sovereign trust infrastructure" / "soevereine vertrouwensinfrastructuur".
  - The "Why now" band and the Dependency X-Ray service already map well onto this intent; reflect the same vocabulary there. Consider an insights/blog section over time to capture the long-tail regulatory queries.
  - Suggested flagship insight article (strong, differentiating, and SEO-relevant): **"Sovereignty is structural, not a flag"** - why choosing a European vendor is no guarantee (ownership can change overnight) and why real sovereignty means controlling the data layer, portability and open standards. Can draw, generically and without naming anyone, on the lived experience of an acquisition undoing a vendor-based sovereignty choice.

---

## 10. Tone, register and guardrails

- Buyer-facing register: clear, sober, confident. Short sentences. No hype, no buzzword salad.
- Keep the **nationality implicit** externally. Talk about dependence, control and accountability - never name a country as the enemy. (The internal "American junk food" metaphor stays internal.)
- Do **not** overclaim on AI. The honest "we are working on it" framing is deliberate - preserve it. Do not present a packaged "managed AI" product; AI appears only inside the X-Ray and the design-and-build service.
- Keep claims defensible: the QTSP is real and specific; do not invent additional case studies, client names, logos or metrics. If a section needs proof you don't have, leave a clearly-marked TODO rather than fabricating.
- **QTSP confidentiality:** the client cannot be named - keep the case anonymised. Note that even the descriptors "a professional group" + "all Dutch citizens" + "qualified electronic-signature certificates" may be identifying to insiders. Before publishing, the client must confirm comfort with this wording. Generic fallback if needed: "a qualified trust service for issuing qualified electronic-signature certificates at national scale." Do not add the client's name, logo, or a verifiable certificate registry link unless the client explicitly clears it.
- **Second case confidentiality:** for the client-identification case, omit the sector, do not name the external integrator, and keep the framing neutral and factual - describe what we did and the outcome, never disparage the prior delivery approach or vendor. Same no-name/no-logo rule applies until cleared.
- **HR-migration illustration:** keep it to one subordinate line. Do not name the client or the destination vendor. Frame ONLY as verifiable integrity at scale (provable processing and arrival per individual document) - never as a sovereignty achievement, because the destination vendor has since changed ownership. That migration is, however, valid material for the *structural-sovereignty* point of view (told generically, "we have seen an acquisition undo sovereignty"), not as a client proof.
- Don't paste the rawest internal lines verbatim where they'd read as blunt to a conservative buyer; use the copy provided above, which is already adapted.

---

## 11. Acceptance checklist

- [ ] Existing stack detected and reported; plan stated before large changes.
- [ ] Site fully bilingual (NL + EN) with working, persistent language switch and `hreflang`.
- [ ] All nine sections implemented with the copy above (both languages).
- [ ] Old "Unstick Complex IT / senior freelancers" headline positioning removed; "hard reset" demoted to method.
- [ ] Sovereignty, digital trust, black-box conviction, European frameworks, QTSP proof, and AI position all present.
- [ ] "Why now" band present and prominent: leads with the mechanism (wallet built on trust services -> you become a trust service provider -> eIDAS + NIS2/Cyberbeveiligingswet), with the RDI eDelivery ruling and the eIDAS2 wallet 6 Dec 2027 deadline as supporting facts; factual, not fearmongering.
- [ ] Focus framed by situation (must be in control of trust-critical tech), not as a closed sector list. The hero hook line (§4) lands the "this is suddenly you" point; the wider audience is carried by the "Why now" band and "who it's for", not by a sector list in the subhead.
- [ ] No "no handover" vs "hand over" contradiction: the approach explicitly distinguishes a mid-stream handoff (avoided) from the final transfer to the client (the deliberate good end-state).
- [ ] The three members and their profile links retained and reframed.
- [ ] Metadata, canonical and OG/Twitter tags updated per locale.
- [ ] SEO optimised on capability/intent keywords (per locale), never on a client name; no client name, logo or registry link without explicit clearance.
- [ ] Nationality kept implicit; no fabricated clients/metrics; AI not overclaimed.
- [ ] Accessible, fast, privacy-preserving.
- [ ] Fully responsive (mobile-first); the header collapses into an accessible hamburger menu on narrow viewports, with the language switch and CTA reachable; no horizontal scroll or overlap at 360/768/1024/1440px.
- [ ] Changes committed in reviewable steps with a summary.

---

## Open decisions to confirm with the client (leave as TODOs if unanswered)
- Final external English names for the three services (working: "Dependency X-Ray", "Design & build sovereign trust services", "Build, prove, transfer").
- Whether to publish pricing/engagement models (currently out of scope for the site).
- Whether to add a short "Vision" line about trust-through-understanding becoming the norm beyond critical infrastructure.