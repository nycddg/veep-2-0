Add **Operator in the Loop** as a fifth engagement model across the Veep offer ladder, with copy and positioning that matches the existing four offers (Advisory, Sprint, Operator, Pod).

## Where it goes

1. **Homepage offer ladder (`src/routes/index.tsx`, `#offer` section)**
  - Insert "Operator in the Loop" into the `engagements` array as the fifth tile.
  - Update the grid from `lg:grid-cols-4` to `lg:grid-cols-5` so five tiles fit cleanly.
  - Keep the existing "Operator" tile as the featured one.
2. **Pricing page (`src/routes/pricing.tsx`)**
  - Insert "Operator in the Loop" into the `tiers` array.
  - Update the grid from `lg:grid-cols-4` to `lg:grid-cols-5`.
  - Update the page meta description to include the new price.
  - Update the FAQ answer about converting between models to mention where Operator in the Loop fits.
3. **Cross-references that list the four existing models**
  - `src/components/site/StepFlow.tsx` — add "Operator in the Loop" to the scope step list.
  - `src/routes/faq.tsx` — update the price list and the model list.
  - `src/routes/index.tsx` FAQ answer — update the price list.
  - `src/components/site/ObjectionList.tsx` — update the price list.
  - `src/routes/for-portfolios.tsx` — update the two lists that mention the engagement models.
4. **Structured data (`src/routes/index.tsx`)**
  - Add the new offer to the `serviceSchema` offers array so the JSON-LD stays accurate.

## Proposed copy

### Homepage tile (EngagementTile)

- **Name:** Operator in the Loop
- **Price:** From $20k / mo
- **Best when:** AI agent teams and recurring workflows governed by a senior Veep operator. For work that needs more capacity, more consistency, and senior oversight without building a department.

### Pricing tier

- **Name:** Operator in the Loop
- **Price:** From $20k / per month
- **Best for:** AI agent teams and recurring workflows governed by a senior Veep operator.
- **Items:**
  - Recurring finance, RevOps, sales, and marketing workflows
  - Customer operations and back-office execution
  - AI workflow implementation and process improvement
  - Function-level capacity without the department hire

The full use-case list you provided (recurring finance workflows, revenue operations, sales and marketing execution, customer operations, reporting and analysis, internal process management, back-office operations, content and campaign production, data cleanup and enrichment, operating cadence support, AI workflow implementation, function-level process improvement) is condensed into the four bullets above to match the brevity of the other tiers. We can expand the card with the full list if you prefer.

## Open questions

1. Should the full 12-item use-case list appear on the pricing card, or is the condensed 4-bullet version acceptable? no
2. Should "Operator in the Loop" also be added to the homepage solution section sentence that already lists the models ("Advisory, Sprint, Operator, Pod, or Operator in the Loop") — or is that already fine as-is? yes homepage 
3. Should the featured "Most requested" tile remain on Operator, or move to Operator in the Loop? stay on operator