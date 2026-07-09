Plan: Reduce the network impact stats section from 8 items to 4, keeping only the requested highlights.

What will change:
- Edit the `networkImpact` array in `src/routes/index.tsx` (currently 8 items) to retain only:
  - Cost savings delivered — $2B+
  - Capital raised — $1B+
  - Revenue opportunity created — $3B+
  - Products & platforms launched — 100+
- All existing labels, figures, and detail text remain unchanged.
- The existing grid layout uses `grid-cols-2 lg:grid-cols-4`, so 4 items will display cleanly on both mobile and desktop with no layout changes needed.
- The footer line "Aggregated outcomes across our operator roster." stays as-is.

What will not change:
- No styling, component structure, or page layout changes.
- No other sections of the homepage are affected.