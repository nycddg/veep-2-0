# Hero visual — motion graphic replacement

Kill the floating operator profile cards on the homepage hero. They read as a marketplace/roster. Replace the right-side visual with a single, restrained abstract motion piece that represents the offer: **senior operator → owns the work → hands back stronger.**

Left column (eyebrow, headline, subhead, CTAs) stays exactly as-is. Only the right visual changes. All motion is looping, subtle, editorial — never SaaS-cheerful, never decorative.

## Pick one of three directions

### Option A — "Ownership loop"

A single indigo dot enters from outside the frame, snaps onto a faint node in a sparse constellation of scattered dots (representing the founder's org), and a soft ring pulses outward. Thin connective lines draw themselves between the dot and 3–4 neighbors as the dot settles. Then the whole cluster stabilizes and holds. Loop restarts every ~7s.

- **Says:** one operator drops in, takes ownership, integrates, stabilizes the system.
- **Feels:** precise, quiet, systems-minded. Closest to Linear / Stripe / Vercel motion register.
- **Build:** pure SVG + Framer Motion, ~120 LOC, no assets.

### Option B — "The gap closes"

Two horizontal rules sit apart with a visible gap between them, labeled in mono: `NOW` above, `EXECUTIVE HIRE` below. A short indigo bar slides in and bridges the gap. A thin progress line traces left-to-right through the bar. When it completes, the bar dissolves and the two rules re-separate — loop.

- **Says:** we fill the interim between now and the full-time hire.
- **Feels:** editorial, diagrammatic, closest to FT / Stripe Press. Most literal to the pitch.
- **Build:** SVG + Framer Motion, ~100 LOC, no assets.

### Option C — "Weight lifts"

A stack of ~6 thin horizontal bars of varying widths (the "work") sits heavy at the bottom of the frame. One bar at a time floats up, rotates a few degrees, and settles into a clean aligned column on the right — the "owned" pile. The unowned stack shrinks; the owned column grows. When empty, it resets.

- **Says:** work gets picked up, owned, organized. Load moves off the founder.
- **Feels:** physical, tactile, a little more warm/human than A or B without being cute.
- **Build:** SVG + Framer Motion with staggered springs, ~140 LOC, no assets.

## Shared constraints (all three)

- Palette: existing navy background, cream strokes at low opacity, single indigo accent — no new colors.
- Motion: slow, deliberate, one focal event at a time. No parallax, no particles, no glow.
- Respects `prefers-reduced-motion` → renders the final state as a still.
- Contained inside a bordered panel matching the site's existing card language (thin cream/10 border, subtle inner grid dot pattern already used elsewhere).
- No text labels inside the graphic except Option B's two mono rules.

## Files touched on implementation

- `src/components/site/HomeHero.tsx` (or wherever the hero visual lives) — remove profile card block, drop in `<HeroMotif />`.
- `src/components/site/HeroMotif.tsx` — new component containing the chosen SVG + Framer Motion animation.
- No CSS token changes. No new deps (framer-motion already in the project).

**Reply with A, B, or C** and I'll build it.  
  
A