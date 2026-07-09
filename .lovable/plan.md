# Hero visual — line-based motif (3 options)

Replace the current motion piece with a still (or barely-breathing) **line composition**, inspired by the Attio "Universal Context" mark and the three geometric line studies. Palette stays locked: cream lines on the navy hero, single indigo accent, no new colors, no italics. Left column (eyebrow, headline, subhead, CTAs) untouched — only the right visual swaps.

All three sit inside a bordered panel matching the site's card language, respect `prefers-reduced-motion`, and are pure inline SVG — no libraries, no images.

---

### Option A — Lens

Horizontal hairlines stacked vertically. Line length grows from a single short stroke at top, expanding to the widest line at center, then contracting back to a single stroke at bottom — a lens/almond silhouette (the Attio composition, restrained). All strokes cream at low opacity; the center 3–4 lines fade to indigo. Barely-perceptible drift: individual lines gently shift ±2px horizontally on a slow 8s loop.

- **Reads as:** many streams of work converging into a single point of ownership, then flowing back out.
- **Density:** ~28 lines. Editorial and calm.

### Option B — From noise to order

Two halves of the panel. Left half: short horizontal lines at irregular x-positions and varied widths — the "unowned work" as scattered strokes. Right half: the same line count aligned to a clean flush-left grid, uniform gap, uniform stroke — the "owned system." A thin vertical indigo cursor line sits at the midpoint (static). A subtle 6s sweep animates a faint highlight from left to right.

- **Reads as:** an operator steps in and the mess resolves into a system.
- **Density:** ~14 lines per side. Diagrammatic, closest in meaning to the pitch.

### Option C — Signal

Vertical hairlines evenly spaced across the panel (the third reference — vertical bar block). Line heights vary in a slow sinusoidal envelope so the top and bottom edges form soft opposing curves (like a compressed waveform). One line in the middle is indigo and slightly taller. Optional very slow 12s breathing on line heights (±3%). Everything else static.

- **Reads as:** a steady operational pulse with a single owner at its center.
- **Density:** ~48 vertical lines. Most abstract, most graphic.

---

## Shared constraints

- Pure inline SVG, ~80–130 LOC, no new deps.
- Cream `#F5F1EA` strokes at 0.2–0.4 opacity; indigo `#6366F1` accent used on 1–4 lines max.
- Contained in the same bordered panel used in the current motif (`border-white/10`, subtle dot-grid background) with the mono corner labels kept.
- Motion is optional and very slow (8–12s loops) or off entirely; `prefers-reduced-motion` → completely static.
- No text inside the graphic beyond the existing corner meta.

## Files

- `src/components/site/HeroMotif.tsx` — rewritten as the chosen line composition.
- No other files touched.

**Reply A, B, or C and I'll build it.**  
  
**A**