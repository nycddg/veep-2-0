
## Goal

Turn `/` into a focused one-page conversion site for **founders and CEOs of scaling companies** looking for a **fractional CXO** (CFO / COO / CRO / CTO). Single primary CTA sitewide: **Book intro call** (existing Fillout link). Keep `/contact`, `/pricing`, `/faq` as standalone pages; retire the rest.

## Routes

**Keep**
- `/` — rebuilt one-page conversion site (this plan)
- `/contact`, `/pricing`, `/faq` — kept for detail + SEO, restyled to match

**Redirect to `/#anchor`** (via TanStack `beforeLoad` stubs)
- `/for-companies` → `/#solution`
- `/for-portfolios` → `/#solution` (portfolios becomes a small secondary block on `/`)
- `/how-it-works` → `/#how`
- `/services`, `/services/*` → `/#offer`
- `/operators` → `/#operators`
- `/proof` → `/#proof`
- `/about`, `/insights`, `/partners`, `/compare*` → `/`

Sitemap trimmed to `/`, `/contact`, `/pricing`, `/faq`.

## Navigation

Sticky top nav with anchor links + Book intro call pill:
`Overview · Benefits · How it works · Proof · Pricing · FAQ · [Book intro call]`

Pricing/FAQ links go to the standalone pages; the rest scroll to sections. Mobile: hamburger + persistent bottom "Book intro call" bar.

## Page structure (in order)

1. **Hero** — Headline formula: *"Get a fractional CXO owning the outcome in under 10 days — without a 90-day exec search."* Subhead speaks to scaling-company founders/CEOs. Primary CTA: Book intro call. Secondary: "See how it works" (scroll to #how). Trust chip: "72-hour match · 10-day deploy · 30-day fit guarantee." Visual: existing `HeroVisual` refined.
2. **Company definition band** (GEO/AI-search) — one-sentence extractable definition: "Veep is a fractional CXO firm that places senior CFO, COO, CRO, and CTO operators inside scaling companies in under 10 days."
3. **Problem** — 4 pains founders feel (open exec seat, stalled fundraise, ops chaos, GTM plateau) + cost of inaction + why the alternatives (retained search, big-4 consultants, job boards) fail.
4. **Solution** — What Veep is, how it works, why operator-led beats consultants and search.
5. **Benefits** — 6 outcome cards (Own the outcome, Deploy in <10 days, Senior-only bench, No 6-figure retainers, Clean handoff, 30-day fit guarantee).
6. **Offer / Engagements** — Consolidated cards for Fractional CXO, Interim, Executive Bench, Advisory. Each: who it's for, what's included, outcome. Link out to `/pricing` for detail.
7. **How it works** — 4-step flow reusing `StepFlow`: Diagnose → Match → Deploy → Handoff.
8. **Proof** — Logo wall + hero testimonial (Jerry Kolber) + 3 operator proof cards + stats band (150+ operators, 72h match, <10d deploy).
9. **Differentiation** — "Old way vs. Veep" table (Retained search / Consultants / Job boards vs. Veep) using `CompareTable`.
10. **For portfolios** — small secondary band with one paragraph + CTA for PE/VC readers (replaces `/for-portfolios`).
11. **Objections** — 6 direct Q&A (Is this for me? What does it cost? How fast? Can I trust you? What if it doesn't fit? What happens after the call?).
12. **FAQ** — 8 concise Q&A optimized for AI search + `FAQPage` JSON-LD. Link to full `/faq`.
13. **Final CTA** — Reuse `FooterCTA`: "What critical initiative doesn't have an owner right now?" + Book intro call + fit-guarantee reassurance.
14. **Footer** — Compact: wordmark, one-liner, hello@veep.co, links to `/pricing`, `/faq`, `/contact`, Privacy, Terms.

## Copy principles

Every section answers one of: Why care? Is this for me? What do I get? Why trust you? Why now? What's next? No jargon, buyer-focused, outcome-first. Rewrite headlines to the "[outcome] for [audience] without [friction]" formula.

## SEO

- Single H1 in hero targeting **fractional CXO**.
- Secondary terms woven into H2s: fractional CFO, interim COO, fractional executive for startups, executive on demand.
- Route `head()` on `/`: new title `Fractional CXO in Under 10 Days — Veep`, matching description, og:title/description/url, canonical `/`.
- Semantic sections with `id`s matching nav anchors.
- Descriptive `alt` on every image; existing lazy loading kept.
- JSON-LD: keep Organization on `__root`; add `FAQPage` + `Service` schema on `/`.
- Update `sitemap.xml.ts` to just `/`, `/contact`, `/pricing`, `/faq`.
- Update `SiteFooter` + `SiteHeader` nav to the new anchor-based structure.

## GEO / AI search

- Company definition band #2 is a single extractable sentence.
- FAQ answers written as direct, standalone answers (not "well, it depends…").
- "Best for" language in Offer cards.
- Consistent entity naming ("Veep") everywhere.
- Location/service-area line in footer + Organization schema.

## Design

- Keep existing dark-navy + cream + Playfair aesthetic (locked design system, no repaint).
- Reuse `PageHero` visual language for the hero, `glass-card`, `StepFlow`, `CompareTable`, `LogoWall`, `Testimonials`, `OperatorProofCard`, `OutcomeTile`, `EngagementTile`, `TrustChip`, `FooterCTA`.
- Add repeated inline Book-intro-call CTAs after Benefits, Proof, and Objections.
- Mobile: sticky bottom CTA bar (new small component) so the primary action is always one tap away.

## Technical changes

### New / edited files
- `src/routes/index.tsx` — full rewrite into the 14-section flow above.
- `src/components/site/SiteHeader.tsx` — new anchor-based nav + Book intro call pill (kept mobile menu).
- `src/components/site/SiteFooter.tsx` — trimmed to kept routes + legal links.
- `src/components/site/StickyMobileCTA.tsx` *(new)* — bottom sticky "Book intro call" bar on mobile only.
- `src/components/site/ObjectionList.tsx` *(new)* — 6-item Q&A grid.
- `src/routes/__root.tsx` — mount `StickyMobileCTA`; update sitewide title/description defaults.
- `src/routes/contact.tsx`, `src/routes/pricing.tsx`, `src/routes/faq.tsx` — light nav/CTA alignment only; content preserved. Ensure canonical + og:url self-reference.
- `src/routes/sitemap[.]xml.ts` — reduce to 4 URLs.

### Redirect stubs (replace existing files with `beforeLoad` throw redirect)
- `for-companies.tsx`, `for-portfolios.tsx`, `how-it-works.tsx`, `operators.tsx`, `proof.tsx`, `about.tsx`, `insights.tsx`, `partners.tsx`, `compare.tsx`, `compare.vs-consultants.tsx`, `compare.vs-executive-search.tsx`, `services.tsx`, `services.index.tsx`, `services.ai-operators.tsx`, `services.executive-bench.tsx`, `services.fractional-cfo.tsx`, `services.interim.tsx` — all become `beforeLoad: () => { throw redirect({ to: '/', hash: '<anchor>' }) }` stubs so existing inbound links keep working. (Route files stay so `routeTree.gen.ts` stays consistent.)

### JSON-LD
- Add `FAQPage` + `Service` schema in `/` route `head().scripts`.

## Content the user still needs to supply (post-build)

- Real client logos (currently placeholder LogoWall).
- 2–3 additional named testimonials with role + company.
- 1–2 short case studies with metric (e.g. "Cut close from 22 to 6 days").
- Confirmed pricing bands for `/pricing` (or confirm "custom / on call").
- Any certifications, press mentions, or founder bio for extra trust.

## Out of scope

- No backend / auth / DB work.
- No visual redesign — existing token system and typography stay.
- Standalone `/pricing`, `/contact`, `/faq` content is preserved as-is; only nav/CTA styling touched.
