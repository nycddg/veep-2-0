## Goal
Fix h2 overlaps caused by the global `white-space: nowrap !important` on h2 by allowing specific h2s to wrap to 2 lines where they currently overflow their container or overlap adjacent content.

## Approach

1. **Add an opt-out utility class** in `src/styles.css`:
   ```css
   h2.allow-wrap { white-space: normal !important; }
   ```
   This lets us keep the global one-line default while surgically reverting individual h2s to wrapping — cleaner than editing the global rule or hunting per-page overrides.

2. **Audit every route** with Playwright at desktop (1280) and mobile (375) widths:
   - Navigate each route in `src/routes/` (home, services + subroutes, pricing, for-companies, for-portfolios, about, contact, faq, how-it-works, insights, join, operators, partners, proof, roster, compare + subroutes, privacy, terms, plus operator profile pages).
   - For every `h2`, measure `scrollWidth > clientWidth` (overflow) OR compare `getBoundingClientRect()` against its parent/siblings to detect overlap with neighboring content (e.g. accent text, adjacent columns, images).
   - Screenshot each flagged section for visual confirmation.

3. **Apply `className="... allow-wrap"`** to each h2 identified as overflowing/overlapping, in its source file. Preserve all existing classes and structure.

4. **Re-run the audit** after edits to confirm no remaining overlaps and that non-flagged h2s still render on one line as intended.

## Scope
- Only h2 elements. Hero h1 and other headings untouched.
- Only presentation change (className additions + one CSS rule). No copy, layout, or component structure changes.
- Both desktop and mobile viewports checked; an h2 flagged at either width gets the opt-out class (single class works for both).

## Deliverable
- 1 CSS addition in `src/styles.css`.
- `className` edits across the route/component files whose h2s overflow.
- Short summary listing which pages/sections were reverted to 2 lines.
