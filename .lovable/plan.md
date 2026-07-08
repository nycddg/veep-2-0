## Goal
Update every engagement card so the offer name (Advisory / Sprint / Operator / Pod) is the most prominent element, while the price becomes a smaller, supporting detail.

## Surfaces to change
1. **Homepage engagement cards** — `src/components/site/EngagementTile.tsx` used in `src/routes/index.tsx` (#offer section).
2. **Pricing page tier cards** — `src/routes/pricing.tsx` lines 120-158, which currently duplicate a similar price-first layout inline.

## Design direction (selected: prominent offer name)
- Offer name becomes the largest type on the card (serif, ~2xl).
- "Best when" description sits directly below the name as the secondary read.
- Price drops to a small, muted mono line near the bottom, above or beside the CTA.
- Featured badge stays in the top-right as-is.
- Preserve current card container, glass styling, hover lift, and link behavior.
- Keep both surfaces visually consistent so a user moving from home to pricing sees the same hierarchy.

## Implementation steps
1. Refactor `EngagementTile.tsx`:
   - Reorder internal layout: name → description → price + per-period → CTA.
   - Resize typography: name `font-serif text-2xl`, price `font-mono text-sm text-stone-soft`.
   - Keep `featured` badge and hover transition intact.
2. Update `src/routes/pricing.tsx` tier cards to match the new hierarchy:
   - Move name up and enlarge it.
   - Shrink price and place it above the scope link.
   - Keep the feature list and "Most common" badge unchanged.
3. Run `bun run build` (or the project's build command) to confirm no type/JSX errors.
4. Open the preview and visually verify both the homepage #offer section and the /pricing page cards read name first, price second.

## Out of scope
- No pricing number changes (already updated in prior turns).
- No changes to booking links, metadata, or JSON-LD.
- No new components or packages.