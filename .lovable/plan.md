## Problem

On `/for-companies`, the "Sits in the gap between search, consulting, and freelancers" section renders `<CompareTable />` inside a default `<Section>` (dark canvas). But `CompareTable.tsx` is explicitly built for the light palette — it uses `text-ink`, `text-ink/50`, `border-ink/10`, `bg-ink/[0.04]`. On a dark background all of that copy and rule work goes near-invisible, which is exactly what the screenshot shows.

The component's own header comment states: *"rendered inside the one light section on the site. Colors are locked to the light palette (ink on cream)."*

## Intended design

The site design uses **one light section** — the compare table — as the deliberate inversion against the otherwise all-dark canvas. On the home page it already renders inside `<Section tone="light">`. `/for-companies` is the outlier.

## Fix

In `src/routes/for-companies.tsx`, change the wrapping section for `<CompareTable />` from:

```tsx
<Section><CompareTable /></Section>
```

to:

```tsx
<Section tone="light"><CompareTable /></Section>
```

No changes to `CompareTable` itself — it is correct. No other pages need this change (audit: `CompareTable` is only used on `/` and `/for-companies`; `/` already uses `tone="light"`).
