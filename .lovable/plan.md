Update the homepage Proof section's three case-study cards to use the three case studies from the uploaded PDF, rewritten in the site's current concise voice and kept as text-only cards.

## What will change

In `src/routes/index.tsx`, replace the current `cases` array (lines 166–185) with three new entries mapped to the existing card structure: `tag`, `trigger`, `outcome`, `metric`.

## Proposed new copy

1. **B2B SaaS · Seed Sprint**
   - Trigger: "CEO was preparing for a first institutional round without a financial model, investor materials, or fundraising experience."
   - Outcome: "Built a 3-year model, diligence-ready CAC/LTV dashboards, and coached the CEO through term sheets and investor meetings."
   - Metric: "$6M seed round in 6 weeks"

2. **Software Studio · Operations Operator**
   - Trigger: "An $8M dev shop was stuck firefighting, with inconsistent project profitability and no scalable path into AI."
   - Outcome: "Installed standardized project scoping and staffing, built an AI GTM and delivery framework, and hired a Director of AI."
   - Metric: "Project profitability up 25%"

3. **Podcast Publisher · Business Operator**
   - Trigger: "A profitable, bootstrapped publisher with millions in revenue had never raised outside capital and had no financial model or growth plan."
   - Outcome: "Built the company's first financial model, defined use of proceeds, and sourced investors representing over a third of the round."
   - Metric: "35% of round sourced"

## Verification

- Run `bun run build:dev` to confirm the build is clean.
- Take a Playwright screenshot of the homepage Proof section to verify the three cards render correctly.
- No other components or pages will be touched.