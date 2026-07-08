You selected the **Command center monolithic** direction for the Network Impact metrics band. The goal is to break away from the repetitive glass-card grid and make the network totals feel like a single, authoritative read-out.

## What we'll change

In `src/routes/index.tsx`, replace the current 8-tile `glass-card` grid under the `#operators` section with a single unified panel that still lives between the operator spotlight grid and the "150+ vetted senior operators…" footer row.

### Visual structure

```text
┌─────────────────────────────────────────────────────────────────────┐
│  ─────────────── Network Impact ───────────────                    │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  · $2B+          · $1B+           · $3B+          · $24B     │  │
│  │    Cost savings    Capital          Revenue          M&A      │  │
│  │    delivered       raised           opportunity      led       │  │
│  │                                                                │  │
│  │  · 10x+          · 75+            · 1,000+        · 100+      │  │
│  │    Revenue         Global brands    Team members    Products  │  │
│  │    scaling         transformed      led & scaled    launched    │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  Aggregated outcomes across our operator roster.                     │
└─────────────────────────────────────────────────────────────────────┘
```

- **Monolithic panel**: one dark, slightly raised surface with a faint border and subtle inner dot grid, replacing 8 separate glass cards.
- **Section label**: centered "Network Impact" eyebrow flanked by thin gradient rules, so it feels like a deliberate module rather than an afterthought.
- **Metric layout**: 2 columns on mobile, 4 on desktop inside the panel, divided by hairline vertical rules on desktop.
- **Metric tile**: small label, large figure, and one-line supporting detail. No icons — keeps the text-only constraint.
- **Accent details**: small indigo corner brackets on the panel and a very subtle scan-line animation to give it a "live command center" feel without adding color.
- **Tokens**: all colors and typography come from the existing design system (IBM Plex Mono, indigo accent, cream/stone text). No new hardcoded colors or fonts.

## What we'll keep

- The 8 existing metrics and their exact copy.
- The section placement inside `#operators`.
- The existing "150+ vetted senior operators…" footer row.

## Technical notes

- Single file edit: `src/routes/index.tsx`.
- Add one `@keyframes` rule to `src/styles.css` for the scan-line animation.
- No new components, no new dependencies, no route changes.
- Verify the build passes and the section looks correct at mobile, tablet, and desktop widths.

## Open decision

Should the scan-line animation be included, or should we keep the panel static for now? The prototype includes it, but we can omit it if you prefer a calmer read.