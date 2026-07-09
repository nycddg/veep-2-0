Style the single Portfolio Roster card on `/for-portfolios` as a centered featured card.

Current state
- The `Roster models` section uses a 4-column grid with vertical dividers and a single `Portfolio Roster` card.
- With only one card, it sits left-aligned and looks like an unfinished version of the `/pricing` cards.
- User confirmed they want a **centered featured card** with a border/background, rather than the divider layout.

Plan
1. Replace the 4-column divider grid with a single centered card container.
2. Give the card a visible border and subtle background (`glass-card` or equivalent `bg-card border border-white/10 rounded-3xl p-8 md:p-10`) so it reads as a deliberate featured card.
3. Keep the same information hierarchy from `/pricing`:
   - Title (`Portfolio Roster`)
   - Price (`$75k / year · usage billed separately`)
   - Best-for line
   - Bullet list
   - "See engagement pricing →" link
4. Center the card horizontally and limit its max-width (`max-w-2xl mx-auto` or similar) so it does not stretch awkwardly on wide screens.
5. Preserve the section header and the guarantee text below the card.
6. Verify with a screenshot of the section to confirm the card is centered, has a visible border/background, and maintains the pricing-page hierarchy.

File to edit: `src/routes/for-portfolios.tsx` (lines ~182–216).