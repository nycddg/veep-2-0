# Mobile CTAs — intrinsic width, not full-bleed

Buttons currently stretch edge-to-edge on mobile in two ways:
1. Their containers use `flex-col` (default `align-items: stretch`), which stretches child anchors/links to the container width.
2. A few anchors explicitly set `w-full sm:w-auto`.

Goal: on mobile, CTA buttons render at their natural pill width (matching desktop), while keeping the stacked vertical layout. Desktop is unchanged.

## Changes

**`src/components/site/PageHero.tsx`** (shared hero on most interior routes)
- CTA row: change `items-stretch sm:items-center` → `items-start sm:items-center`.

**`src/components/site/FooterCTA.tsx`** (footer CTA on every page)
- CTA row: add `items-start` for mobile alongside the existing `sm:items-center`.

**`src/routes/index.tsx`** (home hero + closing CTA)
- Line 472 primary CTA: drop `w-full sm:w-auto justify-center`; keep `inline-flex items-center` so pill sizes to content.
- Line 835 closing CTA: drop `w-full sm:w-auto`; keep `inline-flex items-center justify-center` so pill sizes to content.

No other live route defines its own CTA row — they all go through `PageHero` or `FooterCTA`, so those two edits cover the rest of the site.

## Out of scope
- Desktop layout, spacing, typography.
- Secondary "underline" text links (already intrinsic-width).
- Full-width UI primitives (`progress`, `slider`, `avatar`) — unrelated.
