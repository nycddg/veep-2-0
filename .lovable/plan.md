# Interior Pages: Full Rebuild + Consolidation

The homepage now sells "executive leadership, on demand." The interior pages still read like a professional-services microsite — too many routes, overlapping copy, inconsistent structure, and no shared narrative. This plan rebuilds every interior page from scratch against the homepage's six-question spine and cuts the page count.

## Narrative spine (every page maps to one question)

1. What problem — `/` (done), `/for-companies`, `/for-portfolios`
2. Why hiring/consulting is wrong — folded into `/how-it-works`
3. How Veep solves it — `/how-it-works`, `/operators`
4. Which engagement fits — `/services` (one page, four products)
5. Why trust Veep — `/proof` (case studies + testimonials + track record)
6. Next step — `/contact`

## Information architecture changes

Consolidate 17 routes down to 9:

```text
KEEP + REBUILD                       REMOVE / REDIRECT
/                       (done)       /services/fractional-cfo  → /services#fractional
/for-companies                       /services/interim         → /services#interim
/for-portfolios                      /services/executive-bench → /for-portfolios
/services               (index only) /services/ai-operators    → /how-it-works#ai
/how-it-works           (new)        /compare                  → /how-it-works#vs
/operators                           /compare/vs-consultants   → /how-it-works#vs
/proof                  (new)        /compare/vs-exec-search   → /how-it-works#vs
/pricing                             /partners                 → /for-portfolios
/faq                                 /insights                 → removed from nav
/contact
```

Redirects: replace deleted route files with a `beforeLoad` that `throw redirect(...)` to the new anchor, so old links and search results don't 404.

Nav shrinks to: Companies · Portfolios · How it works · Operators · Proof · Pricing · Book a call.

## Page-by-page rebuild

Every page uses the same rhythm: `PageHero` → 2–3 focused sections → `FooterCTA`. No page exceeds 5 sections. Copy is cut ~40%.

### /for-companies
Hero: "Fill the seat that's blocking the quarter." → outcome tiles (reuse `OutcomeTile`) grouped by trigger (raise, launch, transition, turnaround) → engagement match table (which product for which trigger) → single testimonial → FooterCTA.

### /for-portfolios
Hero: "An executive bench across the portfolio." → 3-step bench flow (`StepFlow`) → what's included vs billed → one portfolio case → FooterCTA. Absorbs `/partners` content (co-invest / advisor network as a subsection).

### /services (single page, replaces 5 files)
Hero: "Four ways to engage an operator." → four anchored product blocks (`#advisory`, `#fractional`, `#interim`, `#sprint`) using `EngagementTile` expanded to include: what it is, when to use it, typical scope, price band, one proof point. No more per-product routes. Functional coverage grid (Finance/People/GTM/Ops/Product) stays at the bottom.

### /how-it-works (new — absorbs /compare + /services/ai-operators)
Hero: "How Veep actually works." → `StepFlow` (Brief → Match in 72h → Operator embeds → Outcome + handoff) → `#vs` contrast block (Veep vs Search vs Consulting vs Freelance, 4-column table, replaces `CompareTable`) → `#ai` AI-powered operators subsection (operator governs / AI executes / operator reviews) → guarantee + SLA strip → FooterCTA.

### /operators
Hero: "The operators behind the outcomes." → caliber strip (logos) → 6 anonymized operator cards using `OperatorProofCard` grouped by function → one paragraph on vetting (no directory, no search — reinforces curated/managed positioning) → FooterCTA.

### /proof (new — absorbs testimonials + track record from /about)
Hero: "$1B+ raised. $3B+ revenue. $2B+ saved. 20+ exits." → 3 case studies (problem / operator / outcome, structured identically) → testimonial wall (3–4) → logo mosaic → FooterCTA. Retires `/about` — the "principles" content compresses into a short strip on `/how-it-works`.

### /pricing
Hero: "Priced to the outcome, not the hour." → four-tier band (Advisory / Fractional / Interim / Sprint) with what's included per tier → "what's not included" honesty block → guarantee → FAQ excerpt (3 pricing Qs) → FooterCTA.

### /faq
Rebuild as accordion grouped into 4 sections (Engagement · Operators · Pricing · Legal). Cut duplicated Qs already answered on `/how-it-works` and `/pricing`.

### /contact
Keep current intent/outcome param handling. Tighten layout: left = one-sentence promise + trust chip + 72h SLA, right = form. Remove secondary copy.

## Shared component work

- `EngagementTile`: extend to support anchor id + expanded body (when-to-use, scope, price, proof) so `/services` can render four full product blocks with one component.
- `CompareTable`: rewrite as a 4-column matrix (Veep / Search / Consulting / Freelance) with rows for Speed, Ownership, Cost model, Exit. Used only on `/how-it-works#vs`.
- `CaseSwitcher`: reuse on `/proof` as the case study renderer.
- New: `RedirectRoute` helper — one-liner file per deleted route that calls `throw redirect({ to, hash })` in `beforeLoad`.

## Header, footer, metadata

- `SiteHeader`: update nav to the 7-item set above; remove Insights.
- `SiteFooter`: mirror new IA; group links under Product / Company / Legal.
- Every rebuilt route gets fresh `head()` with unique title + description + og:title/og:description matching the new one-sentence promise.
- `sitemap.xml.ts`: regenerate against the reduced route set.

## Explicitly out of scope

- No new backend, no live matching, no operator directory/search.
- No new imagery beyond initials avatars and logo wordmarks already in repo.
- Homepage is not touched.
- No copy changes to legal pages.

## Verification

- `bunx tsgo` typecheck.
- Playwright pass at 1280 and 390 widths across all 9 kept routes + 3 redirect routes (confirm redirect lands on correct anchor).
- Manual link audit: grep for `to="/services/fractional-cfo"` etc. and update in-body links to the new anchors.
