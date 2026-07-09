## Problem
The current collapsible summary in `OperatorProofCard.tsx` keeps a fixed 42px height in both collapsed and expanded states. When expanded, the full text is hidden inside a scrollable 2-line window, so the user does not see the complete summary. The container also appears to shrink vertically, which tightens the space between the summary and the industry chips below.

## Goal
Make the expanded state reveal the full summary text while keeping the collapsed state compact and uniform. Preserve comfortable spacing between the summary and the chips.

## What will change
- File: `src/components/site/OperatorProofCard.tsx`
- Scope: spotlight variant summary block only

## Implementation details

### 1. Expand to full text
- Replace the fixed `h-[42px]` in the expanded state with an auto-height or large max-height so the full summary is visible.
- Keep the collapsed state at 2 lines (`line-clamp-2`) with a fixed max-height of 42px so all cards remain the same size by default.
- Use a `max-height` transition so the expansion feels smooth:
  - collapsed: `max-h-[42px] line-clamp-2 overflow-hidden`
  - expanded: `max-h-[200px] overflow-hidden` (or `max-h-none` if a transition is not needed)

### 2. Prevent container shrink
- Ensure the collapsed summary always occupies the same 42px, even if the text is shorter than 2 lines, by setting `min-h-[42px]` together with `max-h-[42px]` in the collapsed state.
- This keeps the card caption rhythm consistent across all operator cards.

### 3. Maintain spacing between summary and chips
- Add a top margin (`mt-3`) to the summary wrapper so the gap between the summary/button group and the chips is preserved even when the chips are pushed down by `mt-auto`.
- Alternatively, wrap the chips in a `mt-auto` container that still respects the existing `gap-4` in `figcaption`.

### 4. Smooth transition
- Keep `transition-all duration-300` on the summary wrapper so the height and clamp changes animate smoothly.
- Use a CSS custom property or inline style if needed for a precise `max-height` animation.

### 5. Verify
- Confirm on the homepage operator spotlight that all cards initially show the same 2-line height.
- Click each "Read more" to confirm the full summary appears and the card grows smoothly.
- Confirm clicking "Show less" returns the card to the 2-line collapsed state with no layout shift.
- Run a production build and typecheck to confirm no errors.