## Kill the dark corner halo on operator cards

**Cause:** `<article>` has `bg-[#0a0f1d]` (near-black) as fallback under an `overflow-hidden rounded-2xl` clip. At the rounded corners, sub-pixel antialiasing lets that dark fill bleed through around the photo edge — visible as a small dark artifact on each corner, especially now that the border no longer masks it.

**Fix:** In `src/components/site/OperatorSpotlightRail.tsx` swap the card's opaque dark fallback for a neutral surface that matches the photo tone in both themes:

- Change `bg-[#0a0f1d]` → `bg-[color:var(--surface-raised)]`.

This uses the already-defined raised surface token (dark blue-black in dark mode, pale warm gray in light mode), so:
- In dark mode the corner tone stays deep and blends with the page canvas — no visible halo.
- In light mode the corner tone matches the cream page — no dark bleed at all.

No layout, sizing, or featured-ring changes.

### Files touched
- `src/components/site/OperatorSpotlightRail.tsx` — single className swap on the `<article>`.
