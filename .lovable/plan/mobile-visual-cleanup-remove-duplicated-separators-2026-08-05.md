# Mobile visual cleanup — remove duplicated separators

The desktop divider pass added rules that stack up when grids collapse to one column on phones. Screenshots at 393px show repeated hairlines, stray vertical lines, and dead space inside cards.

## What's wrong on mobile today

1. **Double rules under section headings.** In the "How it works" step flow, the header block draws a hairline and the grid draws another right below it — two lines with an empty band between them. The same pattern appears wherever a section header rule sits directly above a grid with its own top rule.
2. **Every stacked item gets its own rule.** When 4-up grids collapse to one column (Network impact metrics, step flow, portfolio stats), each item carries a top hairline, so the page reads as a ladder of lines instead of grouped content.
3. **Stray vertical lines.** Engagement tiles keep a left border that only made sense as a column divider; on mobile it reads as an orphan vertical bar beside each block.
4. **Dead space inside tiles.** Engagement tiles stretch to equal desktop heights, leaving a large empty gap above the price row on mobile.

## Fixes

- Collapse the header-rule + grid-rule pair into a single hairline at mobile widths.
- For collapsed grids, keep one rule at the top of the group and use spacing between items instead of a rule per item; where separation is genuinely needed, use a group-level divider rather than a border on each child.
- Turn off column-divider (left) borders below the desktop breakpoint so they only appear when columns actually sit side by side.
- Remove forced equal heights on engagement/pricing tiles at mobile so the price row sits directly under the copy.
- Normalize mobile rhythm: consistent gap between stacked items, larger gap between clusters, so hierarchy comes from spacing rather than lines.

## Pages covered

Home, Pricing, For Portfolios, About, FAQ, Join, Contact, plus shared components (StepFlow, EngagementTile, StatsBand, OutcomeTile, ObjectionList, AudienceTabs, TriggerBento, Testimonials, SiteFooter).

Desktop treatments stay exactly as they are — all changes are mobile-only breakpoint adjustments.

## Technical notes

Tailwind class edits only: replace unconditional `border-t` with `md:border-t` where a parent rule already exists, swap per-child `border-t` for a parent `divide-y` at mobile, gate `border-l` behind `md:`, and drop stretch/`h-full` on tiles below `md`. No copy, data, or logic changes. Verification by re-capturing mobile screenshots of every live page.