# Add visual separation to the four flat grids

The four selected clusters (Instead-of alternatives, The Veep model list, Network impact metrics, and the how-it-works step flow) currently rely on gap alone, so items run together when scanned. Add consistent hairline separation — no boxes, no new colors.

## The pattern

One rule set applied to all four, so they read as the same system:
- Multi-column grids get **vertical hairlines between columns** (`border-white/10`) with equal padding on both sides of each rule, so columns are visibly divided instead of just spaced.
- On mobile, where the grid collapses to one column, the vertical rules turn off and each item gets a **top hairline** instead.
- Keep existing type and spacing; only the separators and the padding around them change.

## Per section

1. **Instead of (3-up alternatives, index.tsx)** — vertical dividers between the three options at `md`; top hairline per item on small screens.
2. **The Veep model (stacked list, index.tsx)** — horizontal hairlines between the four items with even padding above and below, replacing plain `space-y-8`. Outer left rule on the column stays.
3. **Network impact (4-up metrics, index.tsx)** — vertical dividers between metrics at `lg`, 2-up on tablet with dividers on the inner edge; top hairline per item on mobile.
4. **StepFlow (4-up steps)** — keep the shared top rule, add vertical dividers between the four steps at `md`; top hairline per step on mobile.

## Technical notes

Use `divide-x divide-white/10` with per-column `px` on the grid, or explicit `border-l` on items with `first:border-l-0`, chosen per grid so the rules do not collide with the section's outer edges. Rules use existing `white/10` in dark and inherit the light-mode override already present in `src/styles.css` — no new tokens.

Verification: Playwright screenshots of Home at desktop, tablet, and mobile widths in both themes, confirming no dangling rules at grid edges and no wrapped-row rule artifacts.
