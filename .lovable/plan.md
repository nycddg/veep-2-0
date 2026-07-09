Tune `src/components/site/HeroMotif.tsx` so the barcode feels uniform-with-personality rather than a spectrum:

**Line heights — tighten the variation**
- Raise `BAND_MIN` from `0.18 * VB` to about `0.62 * VB` and lower `BAND_MAX` from `0.78 * VB` to about `0.74 * VB`, so every line occupies most of the vertical band and only nudges up/down.
- Simplify `heightAt(i)` to a single low-amplitude noise (one sine + a small secondary term) so heights drift ±~6% around the midpoint instead of swinging like an EQ meter.

**Gradient — more opaque edges**
- Keep the `userSpaceOnUse` linear gradient spanning the tallest line, but change the stop profile so the navy fade only happens in the outer ~15% of each end:
  - 0%: `#050810`
  - 15%: `#6366f1` (indigo already visible near the tip)
  - 50%: `#6366f1` (indigo core unchanged)
  - 85%: `#6366f1`
  - 100%: `#050810`
- Net effect: line ends read as solid indigo with just a soft feather into the navy, instead of long fades that made short lines nearly disappear.

**Keep untouched**
- `LINES = 48`, `SIDE_PAD`, `COL_GAP`, ramp-up-plateau stroke-width envelope (`envelopeAt`), `strokeLinecap="round"`, indigo `#6366f1` accent, navy `#050810` background.

No other files change.