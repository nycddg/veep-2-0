# UI cleanup pass — content layout over container layout

Visual structure only. No copy, route, IA, token-name, or theme-behavior changes. Shared components first so fixes cascade.

## Already clean (leave alone)
Pricing tier grid, homepage problem/alternatives/what-you-get grids, ObjectionList, OutcomeTile, and the for-portfolios/about sections are already spacing-driven from the earlier flatten. Only their surviving hairlines get reviewed under the separator rule.

## Findings to fix

**Shared components (done first)**
- `StepFlow` — four boxed cells made from `gap-px bg-white/10` inside a rounded bordered frame: a grid of boxes inside a box. Flatten to open columns with spacing; number + title + body carry the hierarchy.
- `CaseSwitcher` — bordered, tinted panel containing a bordered, tinted tab strip: card-in-card. Keep the tab strip (interactive control), remove the outer panel border and tint.
- `OperatorProofCard` — glass card with an inner tinted avatar tile and filled pill tags; the second variant is a ringed card with an inner top rule. Reduce to one surface per card, pills become plain mono labels, inner rule removed.
- `TrustChip` — filled and bordered pill used as a decorative kicker in `PageHero`. Render as plain mono small-caps with the accent dot, no fill, border, or radius. Chip still replaces the eyebrow so the two never stack.
- `Testimonials` — decorative full-width rule under the block: delete.
- `SiteFooter` — keeps one top rule; the legal-row rule gets real clearance instead of sitting tight under the columns.
- `OperatorCanvas` (hero) — already one media surface plus one floating Match Matrix. Keep; only open the air between image and proof line.

**Homepage**
- Comparison block (`#vs`) — collapsed `border-y` + `divide-y` grid with the Veep column tinted: the shared hairline runs through and against the highlighted cell. Rebuild as open rows with spacing; the Veep column becomes a standalone accent-wash surface with a left rule and equal optical padding, no hairline crossing it.
- Proof cards — the inner rule between Trigger and Outcome inside each cell becomes space.
- FOR FUNDS band — a top rule sits inside the inverted spotlight surface, cutting a filled panel. Remove; use padding.
- Rules under nearly every section heading: keep at most one per chapter, drop the rest and let the section cadence do the work.

**Pricing / for-portfolios / about**
- Same treatment for the repeated "rule under every heading" pattern.
- Pricing tiers keep the vertical divider only if each column has ≥24px gutter on both sides; otherwise the divider goes.
- Section-level top borders on bands that already change background colour are redundant and get removed.

## Spacing rhythm applied while flattening
Label to title 4–8px, siblings in a cluster 12–16px, clusters 32–48px, chapters 64–96px. Where a border is removed, spacing opens rather than tightens. No type shrinking to compensate.

## Verification
Playwright pass at desktop and mobile, light and dark, with before/after captures of the hero, the comparison block, pricing tiers, and the FAQ/objection sections. Check for no card-in-card, no rule clipping a filled surface, no eyebrow plus chip stacks, and no horizontal overflow.