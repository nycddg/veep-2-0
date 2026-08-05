# Revert pricing tiers to previous treatment

## What changed
The UI pass gave the featured "Operator" tier a highlighted card (`bg-surface-raised` + `border-l-2 border-accent`) and left the other three tiers as bare columns. The previous treatment treated all four tiers equally with vertical dividers between them and no container backgrounds.

## Plan
Revert `src/routes/pricing.tsx` (lines 118–159) to the previous treatment:

1. Grid: restore `gap-x-8` and add `lg:divide-x lg:divide-white/10` for vertical column dividers.
2. All tier cards: remove the conditional `featured` styling. Use a single class for every tier: `flex flex-col lg:px-6 lg:first:pl-0 lg:last:pr-0`.
3. Keep the inline "Most requested" badge on the Operator tier (unchanged).

No other sections of the page are touched.
