Clean up the "Where portfolios lose time" section on `/for-portfolios` so the 2x2 grid feels intentional, breathable, and easy to scan.

## Current state
- Section padding (`py-20 md:py-28`) and the header-to-grid gap (`border-t pt-10`) feel tight on the raised navy band.
- The four problem cards sit flat against the surface with no containers, so the 2x2 blends together.
- Card titles and descriptions use similar weights/sizes, making the hierarchy weak.
- There are no scan aids (numbers, rules, or icons) to guide the eye across the four items.

## Proposed changes
1. **Increase section rhythm** — bump the section to `py-24 md:py-32` so the raised band has the same visual weight as the chapters above and below it.
2. **Give the header more room** — widen the headline block to `max-w-3xl` and increase the margin below it to `mb-14 md:mb-16`, removing the cramped top-rule on the grid.
3. **Containerize each problem card** — wrap each of the four items in the existing glass-card language: `bg-card rounded-2xl border border-white/10 p-6 md:p-8`. This keeps the 2x2 distinct without breaking the dark, minimal palette.
4. **Add scannable index markers** — prepend `01`–`04` in mono-accent labels above each card title so the four problems read as a paced list, not a wall of text.
5. **Improve typographic hierarchy** —
   - Card titles: `text-xl md:text-2xl text-cream tracking-tight leading-snug`
   - Descriptions: `text-base text-cream/70 leading-relaxed` with `mt-5` separation
6. **Increase the grid gap** — move to `gap-6 md:gap-8` so the cards breathe and the 2x2 feels like four deliberate zones, not a dense masonry block.

## Outcome
The section keeps the same content and 2-column layout, but gains clear visual grouping, better vertical rhythm, and stronger scanability. No new components or design tokens are needed — the work stays inside `src/routes/for-portfolios.tsx` using the existing `card`, `cream`, `accent`, and `font-mono` tokens.