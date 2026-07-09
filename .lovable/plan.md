Plan: Update the barcode motif in `src/components/site/HeroMotif.tsx`.

1. Increase line count
   - `LINES` from 32 → 48.
   - Keep `VB = 480` and `SIDE_PAD = 40`, so spacing lands between the previous 80-line and 32-line densities.

2. Keep the ramp-up plateau stroke-weight profile
   - Left 60% (`t = 0 → 0.6`): thin weight (`MIN_W = 0.6`).
   - Middle 20% (`t = 0.6 → 0.8`): ramp up and plateau at the thick weight (`MAX_W = 6.5`).
   - Right 20% (`t = 0.8 → 1.0`): ramp back down to thin and stay thin.
   - The same smoothstep envelope from the current file stays in place.

3. Replace the solid cream stroke with a vertical gradient
   - Add a single `<linearGradient>` in `<defs>` with `gradientUnits="objectBoundingBox"`, running from the top of each line to the bottom.
   - Stop 0%: the page background color (`var(--background)` / `#050810`).
   - Stop 50%: the cream foreground color (`var(--cream)` / `#F5F1EA`) for the highest contrast at the center of each line.
   - Stop 100%: the background color again, so each line fades into the background at its ends.
   - Each line uses `stroke="url(#lineGradient)"` instead of the solid cream stroke.

4. Remove the per-line opacity envelope
   - The gradient itself now handles the fade, so the `MIN_OP`/`MAX_OP` opacity ramp is dropped and all lines render at full opacity.
   - Stroke width remains the only variable driven by the ramp-up plateau envelope.

5. No other files or dependencies change.

Expected result: a 48-line barcode with a single thick cluster on the right, where every line is brightest in its vertical center and softly dissolves into the deep navy background at the top and bottom.