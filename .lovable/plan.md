## Where it goes

Insert a new **"Network impact"** metrics band directly below the Operators Spotlight grid (`#operators` section in `src/routes/index.tsx`), just above the existing "150+ vetted senior operators…" footer row. It reinforces the operator credibility story right where prospects are already evaluating the roster — no new page or new section header needed.

## What it looks like

A compact eyebrow ("Network impact — aggregated across our operator roster") followed by a responsive grid of stat tiles: 2 cols on mobile, 3 on tablet, 5 on desktop. Each tile shows:

- Large serif figure in `text-accent` (e.g. `$2B+`)
- Uppercase micro-label (e.g. `Cost savings delivered`)
- One-line supporting sentence in `text-stone-soft`

Styling matches the existing site: `glass-card rounded-3xl`, serif display type, `SectionEyebrow`, `text-accent` for the numbers. No new components required — inline the grid in `index.tsx` next to the existing `spotlightOperators` block.

## Which metrics to include

All 10 provided are strong but 10 tiles is heavy. Recommended edit to the top 8 most differentiated (drop overlap between "revenue scaling" and "revenue opportunity", and drop "exits" which overlaps M&A):

1. `$2B+` — Cost savings delivered
2. `$1B+` — Capital raised
3. `$3B+` — Revenue opportunity created
4. `$24B` — M&A integrations led
5. `10x+` — Revenue scaling enabled
6. `75+` — Global brands transformed
7. `1,000+` — Team members led & scaled
8. `100+` — Products & platforms launched

(Full 10 also fits as 2×5 if you'd rather keep everything.)

## Framing / disclosure

Label the band **"Aggregated across our operator roster"** so the numbers read as network totals, not per-engagement claims. Keeps it honest and matches the site's grounded tone.

## Technical notes

- Single edit to `src/routes/index.tsx`: add a `networkImpact` array near the other content arrays (~line 165) and render a new `<div>` inside the `#operators` section between the spotlight grid (line 479) and the footer row (line 480).
- No new files, no new dependencies, no route changes.
- Update `serviceSchema` JSON-LD? Not needed — these are marketing figures, not structured offers.

## Open questions before build

1. 8 above
2. place under operators