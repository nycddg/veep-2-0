# UI pass: rebalance air, color, and chrome

The last pass flattened almost everything to hairline-rule grids. Result: the site now reads as one long ruled sheet — a `border-t` under nearly every heading and every grid cell, minimal surface variety, and no color signal for "this is the important one." This pass adds air and selective color back, and removes rules that no longer do a scan job.

## What the audit found (current state)

- Rule-under-everything: `border-t border-white/10` appears on nearly every grid, cell, and heading block across `index.tsx`, `for-portfolios.tsx`, `pricing.tsx`, `ObjectionList`, `StatsBand`, `TriggerBento`, `Testimonials`.
- `OutcomeTile` carries `rounded-2xl` plus a top hairline — a rounded shape with a straight rule across it, no surface.
- Pricing tiers use `lg:divide-x` verticals with only `px-6` clearance, and the "Most requested" tier is marked by a coral label alone — no surface or accent rail.
- Sections mostly sit on `bg-background` / `bg-surface-band` with little alternation, so section boundaries rely on rules instead of tone.
- `StepFlow` uses `gap-px bg-white/10` inside a bordered rounded container — a grid of frames.
- Tight pairs (label → title → body) are inconsistent: some `mt-2`, some `mt-5`.

## Changes

1. **Rhythm system** — standardize spacing scale across shared components: 48px between clusters in a section, 12–16px within a cluster, 4–8px for label/title/body pairs. Section padding stays `py-20 md:py-28`.

2. **Cut rule density by roughly half.** Rules are kept only where they do a scan job:
   - keep: header/footer rules, dense row lists (FAQ, `CheckList`, comparison rows), column hairlines where gutters are ≥24px each side.
   - remove: rules that only underline a heading block, per-cell top rules in open grids with generous gaps (metric grid, `notIncluded`, portfolio grids, `ObjectionList`) — replaced with spacing and a muted label color.
   - fix: no hairline drawn across a rounded or filled surface (`OutcomeTile`).

3. **Tone banding instead of rules for section separation.** Alternate `bg-background` and `bg-surface-band` so consecutive sections read as distinct without a boundary line; drop the boundary rule where tone already separates them.

4. **Color for the pick.**
   - Pricing: the "Most requested" tier gets a single soft surface (`bg-surface-raised`) plus a left accent rail, so it reads as preferred by color, not just by a coral word. Other tiers stay open; vertical dividers get wider gutters.
   - Links, key emphasis, and accent rails use existing `--accent`; coral stays reserved for featured/urgent labels only.
   - Stats/proof band stays one intentional inverted band.

5. **Selective containers restored where a real unit exists**: one operator card, one FAQ answer group, the preferred pricing tier, the join form, the hero Match Matrix. Max one nesting level anywhere; no card-in-card reintroduced.

6. **`StepFlow`** — drop the outer border + `gap-px` frame grid; steps become numbered columns with generous gaps and one shared top rule.

7. **`OutcomeTile`** — either a real surface (rounded, `surface-raised`, hover accent) or a flat rule with square corners. Plan: give it the surface, since these are clickable units.

8. **Eyebrows/chips** — one quiet mono kicker per section; remove stacked kicker+chip pairs where both exist.

9. **Light + dark verification** on Home, Pricing, For Funds, FAQ, Services, About at desktop and mobile.

## Files

`src/styles.css` (spacing/rail utilities only, no new hex), `src/components/site/primitives.tsx`, `OutcomeTile.tsx`, `ObjectionList.tsx`, `StepFlow.tsx`, `StatsBand.tsx`, `TriggerBento.tsx`, `Testimonials.tsx`, `AudienceTabs.tsx`, `CompareTable.tsx`, `src/routes/index.tsx`, `pricing.tsx`, `for-portfolios.tsx`, `faq.tsx`, `services.index.tsx`, `about.tsx`.

No copy, route, IA, token-value, or SEO changes.

## Verification

Playwright screenshots of each touched page in light and dark, desktop and mobile: check section rhythm, no rule crossing a filled surface, no nested containers, preferred pricing tier legible by color.
