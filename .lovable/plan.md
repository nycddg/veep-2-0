Update the fourth item in the `networkImpact` array in `src/routes/index.tsx` (lines 216-221).

Current entry:
- figure: "100+"
- label: "PRODUCTS LAUNCHED"
- detail: "From AI and SaaS to consumer and enterprise solutions."

New entry:
- figure: "20+"
- label: "EXITS & ACQUISITIONS"
- detail: "Including strategic sales, integrations, and post-merger transformations."

Verification:
- Confirm the homepage "Network impact" section renders the updated 4th highlight.
- Run a build/typecheck to ensure no regressions.

Technical details:
- No component or layout changes needed; the grid already handles 4 items.
- The label is used as a React key, so uniqueness is preserved.