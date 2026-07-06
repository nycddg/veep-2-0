
## Deliverable 1 — Audit document

Write a single, blunt audit to `/mnt/documents/veep-site-audit.md` (surfaced via a `presentation-artifact` tag) following the exact 12-section structure you requested:

1. Executive summary — plain-English verdict.
2. Top 10 most damaging problems — severity, location, problem, why it hurts, exact fix.
3. Page-by-page audit — `/`, `/for-companies`, `/for-portfolios`, `/services` + 4 service sub-pages, `/operators`, `/partners`, `/about`, `/insights`, `/contact`. Each page: purpose, pass/fail, conversion issues, copy issues, design issues, SEO issues, GEO issues, recommended changes.
4. Improved site architecture — proposed sitemap + nav grouped by buyer intent (companies, portfolios, services, proof, company), with a Pricing page, Case Studies page, Industries pages, FAQ page, and Compare pages surfaced.
5. Rewritten homepage — full block-by-block rewrite (hero H1/sub, primary + secondary CTA, trust bar, problem, solution, benefits, how it works, proof/case studies, FAQ, final CTA) with 3 alternate headlines, 3 alternate CTAs, 3 positioning angles.
6. SEO + GEO action plan — target keywords per page, new pages to build, metadata rewrites, `Organization` / `Service` / `FAQPage` / `BreadcrumbList` / `Person` schema plan, internal-link map, AI-search extractable answer blocks.
7. 30-day implementation plan — Week 1 messaging/CTA, Week 2 design/trust, Week 3 SEO/GEO/content, Week 4 test + optimize.
8. Final verdict.

Concrete audit themes it will name (preview so you know the tone):
- Hero underclaims: no proof/quantification above the fold, "Owned outcomes" is abstract, no risk reversal, no "in under 10 days" until deep scroll.
- "Veep" is undefined for cold visitors — no one-liner "Veep is a…".
- Two competing CTAs ("Talk to us" / "Book a call") that go to the same form; ambiguous.
- No pricing on `/services` overview until you click through; ranges buried; no comparison of models.
- No real case studies, only anonymous testimonials — kills trust for a premium executive buy.
- Operators page uses initials + generic tags; reads as low-credibility for a $35–90k/mo interim CFO buy.
- Logos wall claims "operators from" but never proves it (no bios, no LinkedIn, no attribution).
- No FAQ, no comparison page (vs. Chief Outsiders / BELAY / Toptal / Bolster / Continuum), no industries pages — all three are critical for SEO + GEO.
- `/insights` posts link to `/insights` (dead loop) — no actual articles → zero topical authority.
- Meta descriptions repeat the hero tagline; no keyword targeting ("fractional CFO", "interim COO", "portfolio operating partner").
- No `Organization`, `Service`, or `FAQPage` schema; no sitemap.xml or robots.txt confirmed.
- Dark cream-on-black with mono-heavy type is stylish but reduces scannability; body copy runs long paragraphs without bolded outcomes.
- Contact form: 6 fields + timing select before any social proof adjacent — friction without reassurance.
- No urgency, no cost-of-inaction framing, no guarantee visible on homepage (the "30-day fit guarantee" is buried inside the contact form checklist).

## Deliverable 2 — Highest-impact implementation

After the audit is written, implement the Week-1 and highest-ROI Week-2/3 items directly. Scope, in priority order:

**A. Homepage rewrite (`src/routes/index.tsx` + hero copy)**
- New H1: "Fractional and interim executives who own the outcome — in place in under 10 days."
- New sub: one sentence that names the buyer (founders, CEOs, PE portfolios) and the wedge (CFO, COO, CRO, CTO).
- Single primary CTA "Book a discovery call"; secondary "See how it works" scrolls to How-It-Works.
- Add above-the-fold proof strip: "$1B+ raised · $3B+ revenue created · 20+ exits · Operators from Verizon, Bain, Oliver Wyman".
- Add a new "How it works" 4-step block (Diagnose → Match → Deploy in <10 days → Handoff).
- Add a new "Which model fits" comparison block that surfaces price ranges from `/services`.
- Add a homepage FAQ (6 Qs) reusing the objection copy from `/for-companies` — doubles as `FAQPage` schema for GEO.

**B. Navigation + IA (`SiteHeader.tsx`, `SiteFooter.tsx`)**
- Collapse header to 5 items: Services, For Companies, For Portfolios, Proof (operators + case studies + insights), About. Reduces cognitive load.
- Keep single primary CTA in header.

**C. New pages**
- `src/routes/pricing.tsx` — surface all four engagement models with price ranges, what's included, and typical outcome. Ranks for "fractional CFO pricing", "interim COO cost".
- `src/routes/faq.tsx` — 15 direct-answer Qs; emit `FAQPage` JSON-LD. Primary GEO surface.
- `src/routes/compare.vs-consultants.tsx` and `src/routes/compare.vs-search.tsx` — comparison pages targeting "fractional CFO vs consultant", etc.

**D. Trust upgrades**
- On `/operators`: replace initials with full first name + last initial + tenure line ("15 yrs · ex-CFO Morning Brew") — keeps privacy but restores credibility.
- Add a "Recent engagements" strip on homepage with 3 anonymized outcome cards (metric + situation + result).
- Move the "30-day fit guarantee" line above the fold on homepage and to the contact form top.

**E. SEO + GEO**
- Rewrite `<title>` and meta descriptions on every route with target keyword + outcome (e.g. `/services/fractional-cfo` → "Fractional CFO Services | Veep — CFO capacity in under 10 days").
- Add `Organization` JSON-LD in `__root.tsx` (name, url, logo, sameAs, description).
- Add `Service` JSON-LD on each service sub-page; `FAQPage` on `/faq` and homepage; `BreadcrumbList` on deep routes.
- Add `public/robots.txt` and a dynamic `src/routes/sitemap[.]xml.ts` server route enumerating all public routes.
- Fix `/insights` dead-loop links: either mark posts "Coming soon" or route them to real slugs (out of scope to write full posts — plan will note it).

**F. Conversion micro-fixes**
- Contact form: reduce required fields to Name + Work email + Context; make Role/Company/Timing optional; add trust line "Response within 1 business day · No pitch deck required" directly above the submit button; add 3-logo strip beside the form.
- Add sticky mobile CTA on all pages.

**Out of scope** (called out in the audit but not implemented in this pass): real case-study content, real operator photos + bios, real insights articles, brand-photography swap, analytics/A-B test wiring, Semrush-driven keyword expansion beyond the obvious targets.

## Technical notes

- All new routes use TanStack `createFileRoute` with per-route `head()` (title, description, og:*, canonical relative path, JSON-LD via `scripts`).
- Schema is emitted with `type: "application/ld+json"` in the `scripts` array per project conventions.
- Preserve current dark palette, IBM Plex type system, and design tokens — no visual rebrand. Only tighten hierarchy (larger outcome numbers, bolded benefit leads, shorter paragraphs).
- No backend/DB changes; contact form stays client-only (unchanged submit behavior).

Approve to proceed and I'll write the audit artifact first, then ship the implementation in one pass.
