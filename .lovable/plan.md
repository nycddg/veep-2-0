## Goal
Make the operator summary paragraph in `OperatorProofCard` collapsible by default, keep the card container at a fixed size, and let users expand the full text. Apply this to every spotlight profile card on the site.

## What will change
- File: `src/components/site/OperatorProofCard.tsx`
- Scope: spotlight variant only (compact cards have no summary text)
- No data or route changes needed; all profile cards use this single component.

## Implementation details

### 1. Collapsible summary container
- Wrap the existing summary paragraph in a fixed-height container (e.g., `h-12` equivalent to 2 lines at `text-[13px]` leading).
- Collapsed state: truncate the text to 2 lines using `line-clamp-2`.
- Expanded state: keep the same container height but switch to `overflow-y-auto` so the full summary scrolls inside the fixed card area.

### 2. Toggle control
- Add a small text button below the summary area: collapsed = "Read more", expanded = "Show less".
- Track expansion with local React state (`expanded`, default `false`).
- Include `aria-expanded` and `aria-controls` on the button for accessibility.
- Keep button focus styles consistent with the global focus ring already defined in `src/styles.css`.

### 3. Preserve card layout
- Keep the existing `figcaption` flex column structure so the chips remain anchored at the bottom with `mt-auto`.
- The summary container height is fixed, so all cards in the grid row stay the same height by default.
- Add a subtle transition (`transition-all duration-300`) on the text clamp/overflow properties so the toggle feels smooth.

### 4. Verify behavior
- Confirm on the homepage `/` operator spotlight section that all four cards render with the same collapsed height.
- Click each "Read more" button to confirm the full summary appears and scrolls within the fixed container.
- Confirm "Show less" returns the card to the 2-line collapsed state.
- Run a build/typecheck to ensure no TypeScript or JSX errors were introduced.