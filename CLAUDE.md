# Claude Code prompt — Nexus Trust website herpositionering (NL + EN)

> Geef onderstaande instructie aan Claude Code in de repository van nexustrust.eu.
> De prompt is zelfstandig leesbaar: alle benodigde merk- en contentinformatie staat erin.

---

## 0. Rol en doel

You are rebuilding the website **nexustrust.eu**. The site currently positions Nexus Trust as "a collective of senior freelancers that unsticks complex IT." That positioning is outdated. Your job is to **fully reposition** the site around a new, sharper brand: **sovereign digital trust for organisations that cannot outsource their trust**. The site must become **bilingual: Dutch (primary for the NL market) and English (for European reach)**, with a clean language switch.

Work in this order:
1. **Inspect the existing codebase first.** Detect the framework/stack (it appears to be a static or JS-rendered single-page site with `logo.png` at the root). Report what you find: build tooling, routing, styling system, deployment config. Do not assume — read `package.json`, config files, and the existing components.
2. Propose a minimal, sound plan to (a) add i18n/bilingual routing and (b) restructure content into the new information architecture below. Reuse the existing stack and design system where reasonable; only introduce new dependencies if clearly justified.
3. Implement the new content and structure (sections 3–8 below).
4. Update all metadata, SEO and Open Graph tags per language (section 9).
5. Run the acceptance checklist (section 11).

Keep changes reviewable: commit in logical steps and summarise what changed.

---

## 1. Brand brief (the new positioning — your source of truth)

**One-liner.** Nexus Trust builds digital trust that holds — sovereign, verifiable and controlled to the foundation — for organisations that cannot outsource their trust.

**Purpose.** Europe became dependent on convenient technology it no longer understands. Convenience won over comprehension; the craft was outsourced. Nexus Trust exists to reverse that: helping organisations — and with them Europe — regain the capability to build and control trust-critical technology themselves. Sovereignty here is **not ideology or protectionism**; it is about regaining competence. (Internal metaphor: "Europe must learn to cook again instead of depending on someone else's kitchen." Use the *spirit* of this externally; keep it positive and do **not** name any country as an adversary.)

**Core conviction.** *You cannot buy trust — you can only understand and control it.* The thick convenience products of hyperscalers and SaaS are black boxes. Handy, until you must actually account for your technology — and then it turns out you cannot certify, demonstrate or trust what you do not comprehend. When it truly has to be right, every layer counts down to the metal, and convenience becomes a liability. Sovereignty is therefore a **technical precondition for trust**: you cannot trust what someone else hides from you.

**The differentiator (moat).** Consultancies advise and leave; staffing firms build what someone else designed. Nexus Trust holds the **entire chain** — from architecture to bare metal, from conception to ceremony — in one unbroken line. Reason: *a handover is itself a black box.* At the seam between design and realisation, exactly what trust requires (understanding and control) leaks away. So: no handover, no gap, one line. This is why "a collective of senior technologists" is a requirement, not marketing — only someone who comprehends the whole stack can build trust.

**Implementation model — build, prove, hand over.** Complex, innovative initiatives do not survive the antibodies of the standing organisation. So Nexus Trust realises and operationalises them in a separate hub until they are working and proven, then hands over a **running department or business unit** — with the knowledge transferred and embedded. This creates no dependency on Nexus Trust, no lock-in: *we build ourselves out.* The same conviction (make the client independent, not dependent) applied to the engagement itself.

**Proof.** Nexus Trust designed **and** built a Qualified Trust Service Provider (QTSP) for issuing qualified certificates for electronic signatures — serving a professional group and, ultimately, all Dutch citizens. The original design had been made without sufficient eIDAS knowledge: scope too broad, technologically not certifiable. We cut scope back to the minimal certifiable core (deliberate strategy: certify the core first, then expand from a position where only maintenance audits remain — agile, without flooding stakeholders with blocking decisions), and realised it end to end: software, Root CA and Issuing CA, and the key ceremony. Outcome: renewed design and implementation in 6 months; ISO 27001 and eIDAS/ETSI certification in a further 6 months — achieved. From an uncertifiable concept to a certified, operational qualified trust service in a year. (Client cannot be named — keep anonymised; see guardrail in §10.)

**Position on AI.** AI is not the exception to this philosophy — it is the purest test of it. It is a *double black box*: technically a trained model nobody fully understands, and commercially an opaque operating/pricing model. The addiction pattern repeats — impressive and cheap now, dependent later, then pay-per-query. Nexus Trust is **not against AI**; it is as impressed as anyone, but applies the same discipline: understand and control what you can, deploy sovereignly and verifiably, avoid lock-in, treat the AI Act as a design principle rather than an afterthought. **Embrace the power, keep the grip.** And be honest: this is not solved for us either — we are working on it. That honesty is credibility, not weakness; it distinguishes us from the hype sellers.

**Focus vs vision.** Focus is defined by *situation*, not by sector: organisations that must be demonstrably in control of trust-critical technology. That ring is wider than classic critical infrastructure and is growing, driven by regulation. *Beachhead (where we enter now, with urgency):* trust service providers and organisations being pulled into eIDAS/Cyberbeveiligingswet (Cbw) scope — eDelivery/Peppol, ERDS, interfaces that connect third parties — alongside classic critical infra (banks, healthcare, government). *Wider ring (where we are heading):* any organisation running a trust-critical interface or connecting to the European trust ecosystem (wallet, credentials, authentic sources). *Vision:* trust-through-understanding becomes the norm beyond critical infra too.

**Why now (regulatory tailwind — make this prominent on the site).** Sovereignty and trust are no longer merely sensible — the law is setting the clock. Two reinforcing drivers widen the market and add urgency: (1) *eIDAS scope is widening* — eIDAS is technology-neutral (scope follows function, not technology); in June 2026 the Dutch regulator RDI concluded that eDelivery providers are trust service providers and fall under eIDAS and the Cbw, starting with Peppol service providers. (2) *eIDAS2 forces adoption with a deadline* — where eIDAS1 stalled, eIDAS2 obliges Member States to introduce the digital identity wallet and obliges relying parties to accept it: for regulated sectors and very large platforms by 6 December 2027. Governments must unlock authentic sources as claims and onboard citizens with PIDs and credentials; the private sector rides along, both as relying parties and as issuers of their own credentials. Most will do the wrong thing under time pressure — tick the box with a convenient black-box vendor. That is exactly where Nexus Trust differs: sovereign and certifiable, not bolted on. And it is home turf — wallet, PID, credentials and attestations are PKI and trust services, exactly what the QTSP already was.

**Who it's for.** Owners of critical digital services — board, CISO/CTO, programme leads — at banks, healthcare institutions and government, who must be demonstrably in control, no longer want to lean blindly on black boxes from outside Europe, and want a party that not only advises but actually builds it and makes it work.

**What we do / don't.**
- DO: design *and* build (the whole line); build on European frameworks (eIDAS, AI Act, ISO 27001) as a design principle; comprehend and control the full stack down to hardware; honestly say "no" when something can't be accounted for.
- DON'T: resell black boxes or sell convenience as a solution; advise and walk away before it works; bodyshopping without ownership; hype over craftsmanship.

---

## 2. Assessment of the current site — keep / transform / drop

**Keep (already aligned with the new brand):**
- The three named members and their real profiles (Koen Bonnet, Aniek Hannink, Wiebe Woudstra) and "90+ years combined experience."
- "We are not here to become permanent" + knowledge transfer + "owned by your organisation" → reframe as the **build, prove, hand over** model.
- "From architecture through implementation to operations" → reframe as the **one unbroken line** / moat.
- Independence and "no consultancy theatre" → keep; it now supports the trust story.
- The honest, no-nonsense tone and the low-pressure CTA ("a short, direct conversation. No sales process.").

**Transform:**
- The "hard reset / unstick stalled IT" narrative is now at most a *method* ("we set aside what can't be accounted for and rebuild it right" — exactly how the QTSP was done), **not** the headline. Demote it.
- The generic "complex IT challenges" framing → replace with the specific **sovereign digital trust for critical infrastructure** framing.

**Drop / add:**
- DROP: "collective of senior freelancers" as the headline identity (keep "collective of senior technologists" as supporting).
- ADD (entirely missing today): sovereignty, digital trust, the black-box conviction, eIDAS/AI Act/ISO 27001, the QTSP proof, the critical-infra focus, and the AI position.

---

## 3. Information architecture

Single-page site with anchored sections is acceptable (matches current), but structure content as these clear blocks, in this order. Provide a sticky header with logo, section nav, language switch (NL/EN), and a primary CTA.

1. **Hero** — the promise.
2. **The conviction** — why we exist (sovereignty + trust).
3. **Why now** — the regulatory wave (eIDAS scope widening + eIDAS2 wallet, deadline 6 Dec 2027). Make this prominent; it is the urgency engine.
4. **The approach** — one unbroken line (design + build); build, prove, hand over.
5. **Services** — the three service forms.
6. **On AI** — our position.
7. **The collective** — who we are, why seniority is a requirement.
8. **Proof** — the QTSP story.
9. **Contact / CTA.**
10. **Footer** — logo, contact, language switch, minimal legal.

---

## 4. Copy — Hero

Register note: this is buyer-facing. Keep the nationality **implicit** (no "American"); lead with control, accountability and capability, not geopolitics.

**EN**
- Eyebrow: *A collective of senior technologists*
- Headline: **Digital trust you can actually account for.**
- Subhead: For banks, healthcare and government, we design and build trust-critical systems you fully understand and control — from architecture to the foundation. No black boxes.
- Primary CTA: *Schedule a call* — Secondary: *How we work*

**NL**
- Eyebrow: *Een collectief van senior technologen*
- Headline: **Digitaal vertrouwen dat je écht kunt verantwoorden.**
- Subhead: Voor banken, zorg en overheid ontwerpen én bouwen we vertrouwenskritische systemen die je volledig begrijpt en beheerst — van architectuur tot het fundament. Geen black boxes.
- Primary CTA: *Plan een gesprek* — Secondary: *Zo werken we*

**Audience strip (one slim line directly under the hero subhead — do NOT make this a separate section).** Makes the situation-based focus explicit without reading like internal strategy.
- EN: *For organisations that must be demonstrably in control of trust-critical technology — banks, healthcare and government, and the widening ring now drawn into eIDAS/Cbw scope or the European wallet: trust service providers, eDelivery/Peppol, and anyone running a trust-critical interface.*
- NL: *Voor organisaties die aantoonbaar in control moeten zijn over vertrouwenskritische technologie — banken, zorg en overheid, en de groeiende kring die nu binnen eIDAS/Cbw-scope of de Europese wallet valt: vertrouwensdienstverleners, eDelivery/Peppol, en iedereen met een vertrouwenskritisch koppelvlak.*

---

## 5. Copy — The conviction

**EN — heading:** *You cannot buy trust — only understand and control it.*
Body: The convenient products of hyperscalers and SaaS are black boxes. Useful, until you must account for your technology — and then it turns out you cannot certify, demonstrate or trust what you do not comprehend. When it truly has to be right, every layer counts, down to the metal, and convenience becomes a liability. That is why sovereignty, for us, is not a political stance but a technical precondition for trust: you cannot trust what someone else hides from you. Europe outsourced this craft. We help organisations master it again.

**NL — kop:** *Vertrouwen kun je niet inkopen — alleen begrijpen en beheersen.*
Body: De gemaksproducten van hyperscalers en SaaS zijn black boxes. Handig, totdat je je technologie moet kunnen verantwoorden — en dan blijkt dat je niet kunt certificeren, aantonen of vertrouwen wat je niet doorgrondt. Zodra het echt moet kloppen, telt elke laag, tot op het ijzer, en wordt gemak een aansprakelijkheid. Daarom is soevereiniteit voor ons geen politiek standpunt maar een technische voorwaarde voor vertrouwen: je kunt niet vertrouwen wat een ander voor je verbergt. Europa besteedde dit vak uit. Wij helpen organisaties het weer te beheersen.

Optional supporting line (both languages): built on European frameworks — eIDAS, the AI Act, ISO 27001 — as a design principle, not a compliance checkbox afterwards.

---

## 5b. Copy — Why now

Make this a prominent band right after the conviction. It turns "sovereignty is sensible" into "the law is setting the clock, and most will solve it the wrong way." Keep it factual and confident; do not fearmonger.

**EN — heading:** *The law is setting the clock.*
Body: Two reinforcing shifts are widening who must be in control of their trust technology — and adding a deadline. First, eIDAS scope is widening: it is technology-neutral, so scope follows function, not technology. In June 2026 the Dutch regulator RDI concluded that providers of eDelivery ("digital registered post") are trust service providers, falling under eIDAS and the Cybersecurity Act — starting with Peppol service providers. Second, eIDAS2 forces adoption where eIDAS1 stalled: Member States must introduce the European digital identity wallet, and relying parties must accept it — for regulated sectors and very large platforms by 6 December 2027. Governments unlock authentic sources as claims and onboard citizens with PIDs and credentials; the private sector rides along, both accepting the wallet and issuing its own credentials. Most will tick the box under time pressure with a convenient black-box vendor. We do the opposite: sovereign, certifiable, and built to last — because this is your trust infrastructure now.

**NL — kop:** *De wet zet de klok.*
Body: Twee elkaar versterkende verschuivingen verbreden wie aantoonbaar in control moet zijn over zijn vertrouwenstechnologie — met een deadline erbij. Eén: de eIDAS-reikwijdte verbreedt. eIDAS is technologieneutraal, dus de reikwijdte volgt de functie, niet de techniek. De RDI concludeerde in juni 2026 dat aanbieders van eDelivery ("digitale aangetekende post") vertrouwensdienstverleners zijn en onder eIDAS en de Cyberbeveiligingswet vallen — te beginnen bij Peppol-serviceproviders. Twee: eIDAS2 forceert de adoptie die eIDAS1 miste. Lidstaten moeten de Europese identity wallet introduceren, en relying parties moeten die accepteren — voor gereguleerde sectoren en grote platforms uiterlijk 6 december 2027. Overheden ontsluiten authentieke bronnen als claims en onboarden burgers met PID's en credentials; de private sector lift mee, zowel door de wallet te accepteren als door eigen credentials uit te geven. De meesten halen onder tijdsdruk het vinkje met een gemakkelijke black-box-leverancier. Wij doen het omgekeerde: soeverein, certificeerbaar en gebouwd om te blijven — want dit ís nu je vertrouwensinfrastructuur.

(Cite the RDI ruling and the 6 December 2027 date as factual anchors. Link the RDI source where appropriate: https://www.rdi.nl/actueel/nieuws/2026/06/03/aanbieders-edelivery-vallen-onder-eidas-en-cbw)

---

## 6. Copy — The approach

Two short sub-blocks.

**A. One unbroken line.**
- EN: *Design and build — no handover, no gap.* Consultancies advise and leave. Staffing firms build what someone else designed. We hold the whole chain — from architecture to the metal, from conception to ceremony — because a handover is itself a black box: at the seam, the understanding and control that trust depends on leak away.
- NL: *Ontwerpen én bouwen — geen overdracht, geen gat.* Bureaus adviseren en verdwijnen. Detacheerders bouwen wat een ander bedacht. Wij houden de hele keten vast — van architectuur tot het ijzer, van conceptie tot ceremonie — want een overdracht is óók een black box: op de naad lekt het begrip en de beheersing weg waar vertrouwen op rust.

**B. Build, prove, hand over.**
- EN: For complex initiatives that the standing organisation would smother, we build and operate in a separate hub until it is proven and operational — then hand over a running unit, with the knowledge transferred and embedded. You end up more in control, not dependent on us. We build ourselves out.
- NL: Voor complexe initiatieven die de staande organisatie zou smoren, bouwen en operationaliseren we in een aparte hub tot het bewezen en werkend is — en dragen dan een draaiende eenheid over, met de kennis erbij, ingepast in de organisatie. Je wordt méér in control, niet afhankelijk van ons. We bouwen onszelf eruit.

---

## 7. Copy — Services (three forms, ascending commitment)

Render as three cards. Keep the Dutch working names; provide an English label alongside.

**1. Dependency X-Ray / Afhankelijkheidsdoorlichting** — *the entry point*
- EN: We map your stack layer by layer — from application to hardware and management — and show where trust leaks: the black boxes, the dependencies, the layers you cannot certify. AI is explicitly included: which models and providers, where is the lock-in and the pay-per-query risk, does data leave Europe, where are the AI Act gaps? Pure insight, no promises. You get a prioritised map of dependencies and a concrete route to control.
- NL: We doorgronden je stack laag voor laag — van applicatie tot hardware en beheer — en brengen in kaart waar het vertrouwen lekt: de black boxes, de afhankelijkheden, de lagen die je niet kunt certificeren. AI hoort daar nadrukkelijk bij: welke modellen en providers, waar zit de lock-in en het pay-per-query-risico, verlaat data Europa, waar zitten de AI Act-gaten? Puur inzicht, geen belofte. Je krijgt een geprioriteerde kaart van afhankelijkheden en een concrete route naar beheersing.

**2. Design & build sovereign trust services / Ontwerpen én bouwen van soevereine vertrouwensdiensten** — *the core*
- EN: When you need a trust-critical capability that demonstrably holds — a qualified trust service, an identity/eIDAS solution, a certifiable platform or sovereign infrastructure — we design it at architecture level and realise it ourselves, in one unbroken line. The same discipline applies to AI deployment: sovereign, controllable solutions where control and verifiability are the requirement — honestly scoped to where our capability currently reaches. You get a working, certifiable service you can fully account for. No black box.
- NL: Heb je een vertrouwenskritische capaciteit nodig die aantoonbaar klopt — een gekwalificeerde vertrouwensdienst, een identiteits-/eIDAS-oplossing, een certificeerbaar platform of soevereine infrastructuur — dan ontwerpen we op architectniveau én realiseren het zelf, in één onafgebroken lijn. Dezelfde discipline geldt voor AI-inzet: soevereine, controleerbare oplossingen waarin beheersing en verifieerbaarheid de eis zijn — eerlijk afgebakend tot waar onze capaciteit nu reikt. Je krijgt een werkende, certificeerbare dienst die je volledig kunt verantwoorden. Geen black box.

**3. Build, prove, transfer / Bouwen, bewijzen, overdragen** — *for the large initiatives*
- EN: We realise and operationalise a complex initiative in a separate hub until it is working and proven, then hand over a running department or business unit — knowledge included, embedded in your organisation. An operational unit you control yourself, with no lock-in.
- NL: We realiseren en operationaliseren een complex initiatief in een aparte hub tot het werkend en bewezen is, en dragen dan een draaiende afdeling of business unit over — kennis inbegrepen, ingepast in je organisatie. Een operationele eenheid die je zelf beheerst, zonder lock-in.

---

## 8. Copy — On AI, The collective, Proof, Contact

**On AI.**
- EN heading: *Embrace the power, keep the grip.* Body: AI is the purest test of how we think. It is a double black box — a trained model nobody fully understands, and an opaque operating and pricing model. We are as impressed by it as anyone, but we apply the same discipline we apply everywhere: understand and control what we can, deploy sovereignly and verifiably, avoid lock-in, and treat the AI Act as a design principle rather than a brake bolted on afterwards. And we are honest: this is not solved for us either — we are working on it. That honesty is the point.
- NL kop: *Kracht omarmen, grip behouden.* Body: AI is de zuiverste test van hoe we denken. Het is een dubbele black box — een getraind model dat niemand volledig doorgrondt, en een ondoorzichtig operating- en verdienmodel. We zijn er net zo van onder de indruk als iedereen, maar we passen dezelfde discipline toe die we overal toepassen: begrijpen en beheersen wat kan, soeverein en verifieerbaar inrichten, lock-in vermijden, en de AI Act als ontwerp-uitgangspunt nemen in plaats van als rem achteraf. En we zijn eerlijk: dit is ook voor ons geen gesneden koek — we werken eraan. Juist die eerlijkheid is het punt.

**The collective.** Keep the three profiles (pull current text as a base, update framing). Lead line:
- EN: *A collective of senior technologists — because only those who comprehend the whole stack can build trust.* Seniority here is a requirement, not a badge. Keep the existing per-person blurbs (Koen Bonnet — Architecture & Product Delivery; Aniek Hannink — Architecture & Secure Software; Wiebe Woudstra — Cloud Strategy & AI) and their external profile links.
- NL: *Een collectief van senior technologen — want alleen wie de hele stack doorgrondt, kan vertrouwen bouwen.* Senioriteit is hier een vereiste, geen vinkje.

**Proof — the QTSP.** (Anonymised — the client cannot be named. See guardrail in §10.)
- EN heading: *We have built what most only claim.* Body: We designed and built a Qualified Trust Service Provider for issuing qualified electronic-signature certificates — for a professional group and, ultimately, all Dutch citizens. The original design, made without sufficient eIDAS knowledge, was too broad and could not be certified. We cut it back to the minimal certifiable core — certify that first, then expand from a position of maintenance audits, agile and without flooding stakeholders with blocking decisions — and built it ourselves: software, Root CA and Issuing CA, key ceremony. Renewed design and build in six months; ISO 27001 and eIDAS/ETSI certification in another six — achieved. From an uncertifiable concept to a certified, operational trust service in a year.
- NL kop: *We hebben gebouwd wat de meesten alleen beweren.* Body: We ontwierpen en bouwden een gekwalificeerde vertrouwensdienst voor de uitgifte van gekwalificeerde handtekeningcertificaten — voor een beroepsgroep en uiteindelijk alle Nederlandse burgers. Het oorspronkelijke ontwerp, gemaakt zonder voldoende kennis van eIDAS, was te breed en niet te certificeren. We brachten het terug tot de minimale certificeerbare kern — die eerst certificeren, daarna uitbouwen vanuit een onderhoudspositie, agile en zonder stakeholders te overspoelen met blokkerende beslissingen — en bouwden het zelf: software, Root CA en Issuing CA, sleutelceremonie. Hernieuwd ontwerp en bouw in zes maanden; ISO 27001- en eIDAS/ETSI-certificering in nog eens zes — geslaagd. Van een niet-certificeerbaar concept naar een gecertificeerde, operationele vertrouwensdienst in een jaar.

**Contact / CTA.** Keep the existing low-pressure tone.
- EN: *Trust you can't outsource? Let's talk.* A short, direct conversation to see whether we can help. No obligations, no sales process. CTA: *Get in touch.*
- NL: *Vertrouwen dat je niet kunt uitbesteden? Laten we praten.* Een kort, direct gesprek om te zien of we kunnen helpen. Geen verplichtingen, geen salestraject. CTA: *Neem contact op.*

---

## 9. Technical & SEO requirements

- **Bilingual.** Implement clean NL/EN with a visible switch. Prefer locale-prefixed routes (`/nl`, `/en`) or the stack's idiomatic i18n. Default locale: NL for NL visitors, EN otherwise (or simply default NL with an obvious EN switch — choose the simpler robust option and state your choice). Persist the user's choice.
- **Metadata per language.** Update `<title>`, meta description, canonical, and Open Graph / Twitter tags per locale. Replace the current English-only "Unstick Complex IT" metadata. Add `hreflang` alternates linking NL/EN versions.
  - NL title example: "Nexus Trust — Soeverein digitaal vertrouwen" / description: "Voor banken, zorg en overheid ontwerpen én bouwen we vertrouwenskritische systemen die je volledig begrijpt en beheerst. Geen black boxes."
  - EN title example: "Nexus Trust — Sovereign digital trust" / description: "For banks, healthcare and government, we design and build trust-critical systems you fully understand and control. No black boxes."
- Keep `logo.png`; ensure OG image still resolves per locale.
- **Accessibility & performance.** Semantic headings, sufficient contrast, keyboard-navigable nav and language switch, alt text. Keep it fast and lightweight; no heavy frameworks added unnecessarily.
- **Analytics/cookies.** If anything is added, default to the most privacy-preserving option and a clear consent choice; do not add non-essential tracking by default.

---

## 10. Tone, register and guardrails

- Buyer-facing register: clear, sober, confident. Short sentences. No hype, no buzzword salad.
- Keep the **nationality implicit** externally. Talk about dependence, control and accountability — never name a country as the enemy. (The internal "American junk food" metaphor stays internal.)
- Do **not** overclaim on AI. The honest "we are working on it" framing is deliberate — preserve it. Do not present a packaged "managed AI" product; AI appears only inside the X-Ray and the design-and-build service.
- Keep claims defensible: the QTSP is real and specific; do not invent additional case studies, client names, logos or metrics. If a section needs proof you don't have, leave a clearly-marked TODO rather than fabricating.
- **QTSP confidentiality:** the client cannot be named — keep the case anonymised. Note that even the descriptors "a professional group" + "all Dutch citizens" + "qualified electronic-signature certificates" may be identifying to insiders. Before publishing, the client must confirm comfort with this wording. Generic fallback if needed: "a qualified trust service for issuing qualified electronic-signature certificates at national scale." Do not add the client's name, logo, or a verifiable certificate registry link unless the client explicitly clears it.
- Don't paste the rawest internal lines verbatim where they'd read as blunt to a conservative buyer; use the copy provided above, which is already adapted.

---

## 11. Acceptance checklist

- [ ] Existing stack detected and reported; plan stated before large changes.
- [ ] Site fully bilingual (NL + EN) with working, persistent language switch and `hreflang`.
- [ ] All nine sections implemented with the copy above (both languages).
- [ ] Old "Unstick Complex IT / senior freelancers" headline positioning removed; "hard reset" demoted to method.
- [ ] Sovereignty, digital trust, black-box conviction, European frameworks, QTSP proof, and AI position all present.
- [ ] "Why now" band present and prominent (eIDAS scope widening + RDI eDelivery ruling; eIDAS2 wallet with the 6 Dec 2027 acceptance deadline), factual and not fearmongering.
- [ ] Focus framed by situation (must be in control of trust-critical tech), not as a closed sector list; beachhead + wider ring + vision conveyed. The hero audience strip (§4) makes this explicit without a separate strategy section.
- [ ] The three members and their profile links retained and reframed.
- [ ] Metadata, canonical and OG/Twitter tags updated per locale.
- [ ] Nationality kept implicit; no fabricated clients/metrics; AI not overclaimed.
- [ ] Accessible, fast, privacy-preserving.
- [ ] Changes committed in reviewable steps with a summary.

---

## Open decisions to confirm with the client (leave as TODOs if unanswered)
- Final external English names for the three services (working: "Dependency X-Ray", "Design & build sovereign trust services", "Build, prove, transfer").
- Whether to publish pricing/engagement models (currently out of scope for the site).
- Whether to add a short "Vision" line about trust-through-understanding becoming the norm beyond critical infrastructure.