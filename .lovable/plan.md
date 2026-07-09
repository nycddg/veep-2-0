## Selectively restore bento layouts

Bring back card/bento styling for four specific areas, leave the rest of the editorial redesign intact.

### Sections to convert back to bento

1. **`#problem` — "The moment you're in"** (`src/routes/index.tsx` ~L417–462)
   - Replace the numbered `01/02/03/04` hairline list with a 2×2 responsive grid of cards.
   - Each card: rounded container, subtle border + faint surface fill, index chip (01–04), title, supporting copy.

2. **Network Impact highlights** (inside `#operators`, `src/routes/index.tsx` ~L537–560, driven by the `networkImpact` array)
   - Replace the editorial ledger rows with a responsive bento grid of stat cards (metric + label + supporting line).
   - Keep the "Network impact" eyebrow and section framing.

3. **`#benefits` — "What you get"** (`src/routes/index.tsx` ~L590–621)
   - Replace the hairline two-column list with a card grid (3-up on desktop, stacked on mobile). Each benefit gets its own card with title + copy, keeping the current check/mark treatment.

4. **`#proof` — Proof cases** (`src/routes/index.tsx` ~L666–723)
   - Replace the three tall editorial columns w/ vertical rules with three side-by-side proof cards.
   - Each card: rounded surface, mono tag, trigger paragraph, hairline divider, outcome paragraph, prominent mono metric at the bottom.

### What stays editorial (unchanged)

- `#solution` "Instead of" split
- `#operators` operator spotlight (portrait + hairline caption)
- `#offer` engagement pricing table
- `#how` process
- `#vs` comparison table
- `#faq`
- Global tokens: keep the tightened `--radius: 0.25rem` and current rule opacity. Bento cards will use that same radius so they read as restrained cards, not the old pillowy ones.

### Card styling contract (shared)

Use one consistent card treatment across the four restored areas so the bento reads as intentional:
- `rounded-[--radius]` container
- `bg-white/[0.02]` surface
- `ring-1 ring-white/10` border
- Generous internal padding (`p-6 md:p-8`)
- No heavy shadows; keep it flat and premium

No copy changes, no new components, no changes to other pages.