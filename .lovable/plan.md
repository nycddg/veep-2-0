## Goal

Restore a dedicated `/for-portfolios` interior page (currently just a redirect to `/#portfolios`) and route the homepage + pricing links to it. Content and pricing must reflect the current "The work needs an owner" positioning and the four-tier model (Advisory / Sprint / Operator / Pod) — not the old CFO/COO/GTM tier language from the previous version.

## Changes

### 1. Replace `src/routes/for-portfolios.tsx` (currently a redirect) with a full page

Structure, using existing components (`PageHero`, `FooterCTA`, `Section`/primitives, glass-card patterns from `pricing.tsx`):

- **Head**: title "For Portfolios — Executive Capacity Partnership | Veep", matching description, og tags, canonical.
- **PageHero**: eyebrow "For Portfolios" · title "An executive bench," italic "on retainer." · sub explaining priority access to vetted senior operators across portfolio companies, framed around "work that needs an owner."
- **Section: The problem** — 3 short cards: unplanned CEO transitions, value-creation work stalling between board meetings, portcos each rebuilding the same operator search from scratch.
- **Section: Executive Capacity Audit** — the entry point. Two-column: "What you get" (portfolio-wide leadership risk map, function coverage assessment, upcoming capital/event triggers, recommended bench structure per company, emergency coverage path) + a dark callout describing the Portfolio Executive Bench that follows.
- **Section: Bench tiers** — three cards aligned to updated messaging:
  - *Company Bench* — for a single portco with recurring capacity needs (~$15k–$35k/yr).
  - *Portfolio Bench* (featured) — for investors/holdcos, $50k–$150k/yr; priority matching, quarterly capacity planning, emergency Operator/Pod coverage SLA, included diagnostics, Executive Capacity MSA.
  - *Capacity Subscription* — ongoing multi-function support for a high-growth portco, priced from Pod range ($30k+/mo).
  Each card notes: engagements billed separately by SOW at preferred rates; converts cleanly to Advisory/Sprint/Operator/Pod models from the main pricing page.
- **Section: How it works with portfolios** — 4-step strip: Audit → MSA signed once → SOW per engagement → Quarterly review. Reuses `StepFlow` styling or inline mirrors of it.
- **Section: What's included vs. billed separately** — small clarity block (bench = access + planning + SLA; deployments = SOW).
- **FooterCTA**: headline "Map your portfolio's executive capacity." with primary "Book intro call" and secondary link "Request a capacity audit" (→ `/contact?intent=audit`).

All copy uses current voice: "operators who've been in the seat," "work that needs an owner," 72-hour match / 10-day deploy / 30-day fit guarantee where relevant. No references to the removed positioning.

### 2. Update links pointing at `/#portfolios` or the redirect stub to the interior page

- `src/routes/index.tsx` (section #10, lines 657–683): change the "Request a capacity audit" CTA target to `/for-portfolios`, and add a primary link ("See how the bench works →") also to `/for-portfolios`. Keep the `id="portfolios"` anchor on the homepage section so the nav hash link still scrolls there.
- `src/routes/pricing.tsx` (line ~210): the "See how the bench works →" link already points to `/for-portfolios` — verify it now resolves to the real page (no code change needed beyond the route replacement).
- `src/components/site/SiteHeader.tsx`: no nav change requested; leave as-is.

### 3. Route wiring

Because `/for-portfolios` already exists in `routeTree.gen.ts` (as a redirect), simply replacing the file's exported `Route` with the real page component is enough — the router plugin regenerates the tree on next build. No manual edits to `routeTree.gen.ts`.

## Out of scope

- No new nav entry, no changes to `/operators` redirect, no changes to header/footer beyond the link retarget above.
- No new imagery — page uses the same typographic + glass-card system as `pricing.tsx` and `PageHero`.

## Open question

None blocking — I'll mirror the tier ranges already shown in `pricing.tsx`'s portfolio callout ($50k–$150k/yr bench, deployments billed by SOW) so the two pages agree. If you want different numbers on the interior page, tell me before I build.