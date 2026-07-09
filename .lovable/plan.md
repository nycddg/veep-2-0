Plan: Adjust the HeroMotif barcode in `src/components/site/HeroMotif.tsx`.

1. Reduce line count
   - `LINES` from 80 → 32.
   - Keep `VB = 480` and `SIDE_PAD = 40`, so column gap grows from ~5px to ~13px (clearer spacing between bars).

2. Replace the full-width cosine envelope with a ramp-up plateau profile
   - Left 60% (`t = 0 → 0.6`): standard thin weight (`MIN_W = 0.6`).
   - Middle 20% (`t = 0.6 → 0.8`): ramp up and hold a plateau at the thicker weight (`MAX_W = 6.5`).
   - Right 20% (`t = 0.8 → 1.0`): ramp back down to the standard thin weight, then remain standard through the end.
   - Use smoothstep easing for the two ramps so the transition is soft, not a hard cut.

   Concrete envelope function (t = index / 31):
   - `0.0–0.6`: weight = 0
   - `0.6–0.7`: smoothstep from 0 → 1 (ramp up)
   - `0.7–0.8`: flat at 1 (plateau)
   - `0.8–0.85`: smoothstep from 1 → 0 (ramp down)
   - `0.85–1.0`: flat at 0 (standard tail)

   Width and opacity are still derived from this envelope: `w = MIN_W + (MAX_W - MIN_W) * env`, `op = MIN_OP + (MAX_OP - MIN_OP) * env`.

3. Keep visual constants
   - All bars remain cream (`#F5F1EA`), `strokeLinecap="butt"`, uniform height (`BAND_H = 480 * 0.7`), no animation.
   - No other files or dependencies change.

Expected result: a much airier, more graphic barcode with a single thick cluster about one-fifth of the way from the right edge, surrounded by thin standard-weight lines.