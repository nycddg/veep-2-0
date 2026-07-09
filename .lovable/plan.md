## Goal
Make the operator profile cards stay at a fixed maximum height so the container never shifts when "Read more" is clicked; only the summary text should toggle between 2-line clamp and full text. Also widen the cards by 5%.

## What will change
- `src/components/site/OperatorProofCard.tsx` — fixed-height summary block
- `src/components/site/primitives.tsx` — add a `maxWidth` option to `Section`
- `src/routes/index.tsx` — use the wider section for the operator spotlight

## Implementation details

### 1. Fixed maximum-height summary container
- All current operator summaries expand to about 127px. Set the summary container to a fixed `h-[150px]` so it can hold the longest text with a small buffer.
- Collapsed state: `line-clamp-2` to hide the rest of the text.
- Expanded state: no line clamp, so the full text is visible inside the same 150px container.
- Because the container height is fixed, the card body will already be at its maximum size and will not shift when toggling.
- Remove the height transition (since the container doesn't change size); keep a subtle opacity/fade transition on the text if desired.

### 2. Preserve spacing and chips position
- Keep the `figcaption` flex column and `mt-auto` chips so the industry tags stay anchored at the bottom.
- Keep a small padding buffer (`pb-2`) below the summary/button group to maintain breathing room.

### 3. Widen the cards by 5%
- Add a `maxWidth` prop to the `Section` primitive. Default remains `max-w-7xl` (80rem / 1280px); add a `wide` option that uses `max-w-[84rem]` (1344px, ~5% wider).
- Apply `maxWidth="wide"` to the operator spotlight section in `src/routes/index.tsx` so the four-column grid expands by ~5% and each card becomes ~5% wider.

### 4. Verify
- Confirm all four cards render at the same height and do not shift when clicking "Read more" / "Show less".
- Confirm the full summary text appears when expanded and the 2-line clamp appears when collapsed.
- Confirm the operator spotlight grid is visibly wider than the surrounding sections.
- Run production build and typecheck.