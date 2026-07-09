# Add blue-accent emphasis to remaining headlines

I audited every section headline (h1/h2/h3) across all route files and shared section components for the `<span className="text-accent">…</span>` tail pattern. 12 places are missing it. Plan below fixes each, matching the existing pattern where the last 2–5 words of the headline are wrapped in the accent span.

## Route-level fixes

**`src/routes/index.tsx`**
- L753: "Stabilize the operational gaps transactions create." → accent tail `transactions create.`

**`src/routes/pricing.tsx`**
- L170: "The price you see is the price you pay." → accent `the price you pay.`
- L192: "The right operating partners, ready when the portfolio needs them." → accent `when the portfolio needs them.`
- L223: "Straight answers to the questions we get most." → accent `the questions we get most.`

**`src/routes/for-portfolios.tsx`**
- L135: "Portfolio Capacity Audit" → accent `Capacity Audit`
- L188: "Roster Development and Management" → accent `and Management`

## Shared component fixes

These render on multiple pages, so a single edit fixes site-wide.

- **`StatsBand.tsx` L24** — "The system of action for senior operators." → accent `for senior operators.`
- **`TriggerBento.tsx` L31** — "Built for the moments that create urgency." → accent `that create urgency.`
- **`CaseSwitcher.tsx` L37** — "One operator. One outcome. One number that matters." → accent `One number that matters.`
- **`AudienceTabs.tsx` L155** — "One platform. Two ways to buy." → accent `Two ways to buy.`
- **`CompareTable.tsx` L31** — "Better. Faster. Cheaper. Really." Renders on a light/cream background with `text-ink`. Options:
  1. Skip (accent-blue on cream may clash with the section's warm palette), or
  2. Add accent `Cheaper. Really.` and rely on existing `text-accent` token which already has adequate contrast on cream.
  Recommend option 2 — will verify visually after edit.

## FooterCTA (special case)

**`FooterCTA.tsx` L12** — the `headline` prop is typed `string`, so callers can't inject a `<span>`. Two options:

- **A (recommended):** widen `headline: string` → `headline: ReactNode`, then update the 3 call sites to pass `<>Make your next big <span className="text-accent">move.</span></>` etc. Consistent with the rest of the site.
- **B:** leave FooterCTA alone (headlines stay unaccented in the footer band).

Recommend A. Call sites to update: `pricing.tsx`, `about.tsx`, plus the default in `FooterCTA` itself; I'll grep for others during implementation.

## AudienceTabs panel titles (optional stretch)

`AudienceTabs.tsx` L198 renders 6 panel titles from a plain-string data array. Adding accents requires changing the `title` field to `ReactNode`. Not included by default — happy to add if you want the panel headings accented too.

## Not changing

- PageHero-driven hero headlines — all already use the `accent` prop.
- Small utility labels ("Application received.", "Send us a message.", "Straight answers." FAQ label on index L801) — too short for a tail split.
- Redirect stub routes (services.*, compare.*, operators, insights, proof, etc.) — no markup.

## Verification

After edits, load `/`, `/pricing`, `/for-portfolios`, `/about` in Playwright and screenshot each section headline to confirm the blue tail renders and CompareTable's cream section still reads well.
