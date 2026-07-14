## Light-mode audit — round two

Scope: light theme only. Dark mode stays exactly as-is.

### 1. Accent → previous purple (light mode only)

In `src/styles.css` inside the `html.light { … }` block, override the brand accent so every `text-accent`, `bg-accent`, `border-accent`, `ring-accent`, `--color-accent-gold` (used for gold dots/checks that were remapped to blue) reads as vivid purple on cream:

- `--forest: #5b46f5;` (drives `--accent` → all accent utilities)
- `--accent-gold: #5b46f5;` (keeps the gold-dot / check chips consistent)
- `--ring: #5b46f5;`

Dark mode keeps the current bright blue `#789fff`. Coral (`--accent-coral`) stays untouched in both themes.

### 2. Operator spotlight cards (light mode)

File: `src/components/site/OperatorSpotlightRail.tsx`

- Name (`h3`), role, and prior-company lines currently use `text-ink` / `text-ink/80` / `text-ink/70`. In light mode `--ink` is cream, so text renders light-on-photo. Add explicit light-mode overrides so the meta block reads dark navy on light:
  - Name: `text-ink light:text-[color:var(--foreground)]`
  - Role: `text-ink/80 light:text-[color:var(--foreground)]/80`
  - Prior companies: `text-ink/70 light:text-[color:var(--foreground)]/70`
- Remove the card border in both themes: drop `border`, `border-white/5`, `hover:border-white/15`, and the featured `border-[color:var(--color-accent-coral)]/40`. Keep the rounded corners and background.
- Featured coral halo currently signaled only by the border — replace with a subtle inset ring on the featured card only (`ring-1 ring-inset ring-[color:var(--color-accent-coral)]/40`) so featured state survives border removal, or drop the featured treatment entirely if the reviewer prefers. Default: keep the coral inset ring.

### 3. Pricing page dividers (light mode)

File: `src/routes/pricing.tsx`

All dividers on this page use `border-white/10` or `divide-white/10`. The global light-mode override maps these to `rgb(0 0 0 / 0.10)` which is faint on the `--surface-band` (near-white) background. Bump light-mode contrast just for divider utilities used on pricing sections:

Add to `src/styles.css` (under the existing raw-utility overrides):

```
html.light .border-white\/10 { border-color: rgb(10 19 48 / 0.18); }
html.light .divide-white\/10 > :not([hidden]) ~ :not([hidden]) { border-color: rgb(10 19 48 / 0.18); }
html.light .lg\:divide-white\/10 > :not([hidden]) ~ :not([hidden]) { border-color: rgb(10 19 48 / 0.18); }
```

This lifts the four-tier column dividers, the "What's not included" top rules, the FAQ cell top rules, and the section-top borders to visible navy-tinted hairlines. Same rule benefits every other page using these classes.

### 4. Cross-page light-mode audit pass

Capture the homepage, /pricing, /services, /for-portfolios, /operators, /about, /contact in light mode via Playwright at 1280×1800. For each page verify:

- Any remaining `text-cream/*` on hardcoded dark cards (e.g. Match Matrix pattern) still reads correctly (already patched on homepage — check for repeat offenders on other pages).
- Wordmarks in header/footer both flip (already patched — re-verify on the new pages).
- Dividers/rules are visible after the contrast bump in §3.
- Accent color reads as purple, with sufficient contrast against cream in eyebrows, links, dots, ring focus states.

For each new inconsistency found, fix in the smallest possible way — token override in `html.light` block, or a per-component `light:` variant. Log fixes in the response.

### Files touched
- `src/styles.css` — accent overrides in `html.light`; divider contrast bump.
- `src/components/site/OperatorSpotlightRail.tsx` — remove borders, add light-mode dark text for name/role/prior.
- Any additional per-component fixes surfaced by the audit pass (reported after screenshots).

### Out of scope
- Dark mode visuals (unchanged).
- Layout, spacing, typography, copy.
- Coral featured signal color.
