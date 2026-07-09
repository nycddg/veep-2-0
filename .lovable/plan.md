## Barcode-style hero motif

Rework `src/components/site/HeroMotif.tsx` to match the reference: uniform-height vertical lines spread horizontally across the panel, where **stroke weight** (not height) varies along the x-axis — thin hairlines at the edges, ramping up to thick bold bars in the center, then back down.

### Visual spec
- ~80 vertical lines, evenly spaced across the full width.
- All lines the same height (a tall, centered vertical band — roughly 70% of the panel height).
- Stroke width driven by a cosine envelope from center:
  - Edges: ~0.6px hairlines
  - Center: ~6–7px bold bars
  - Smooth ramp between
- Opacity also lifts slightly toward center (0.35 → 0.9) so density reads as tonal weight, like the reference.
- Color stays on the current cream token (`#F5F1EA`); drop the indigo center line — the reference is monochrome.
- Remove the breathing animation (reference is static). Keep the `prefers-reduced-motion` guard as a no-op.

### Technical notes
- Replace `heightAt` with a shared cosine envelope function; use it to compute `strokeWidth` and `strokeOpacity` per line.
- Keep the same container/aspect-ratio wrapper and SVG viewBox — only the line generation changes.
- No new dependencies, no other files touched.
