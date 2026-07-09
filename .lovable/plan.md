Apply the Veep color palette as a whole-site accent swap, keeping the dark navy canvas and updating the accent system to use the new palette.

Current state
- The site uses a deep navy canvas (`#050810`) with an indigo accent (`#6366f1` / `forest`) for hero tail phrases, links, bullets, badges, and CTA emphasis.
- The user provided a palette with a brighter blue (`#789fff`), coral (`#ec6b66`), peach (`#f09172`), and lighter tones.
- User confirmed they want a whole-site accent swap.

Plan
1. Update the primary accent color in `src/styles.css` from the current indigo to the brighter blue `#789fff` (mapped as `oklch` or hex in the `--forest` / `--accent` tokens). This affects hero tail phrases, section eyebrows, links, bullets, and labels.
2. Add a secondary accent token for the warm coral `#ec6b66` or peach `#f09172` and use it sparingly for high-priority signals: the "Most common" / "Most requested" badge on pricing/service cards, guarantee labels, and other urgency states.
3. Keep the dark navy background; do not move to a light theme. The light blues and grays in the uploaded palette are not needed for the dark theme.
4. Audit all components and routes that reference the current accent (`text-accent`, `bg-accent`, `border-accent`, `bg-forest`, etc.) and update them to use the new tokens consistently.
5. Verify the change across the homepage, pricing, services, and for-portfolios pages to ensure the new blue reads cleanly and the coral accent adds warmth without clashing.
6. Run the build and capture homepage + pricing screenshots to confirm the palette swap is applied consistently.

Files to edit: `src/styles.css` for tokens; any route or component using the accent color (e.g., `src/components/site/EngagementTile.tsx`, `src/routes/pricing.tsx`, `src/routes/for-portfolios.tsx`, `src/components/site/primitives.tsx`, etc.).