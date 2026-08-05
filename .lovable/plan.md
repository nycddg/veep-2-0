# Spotlight the "For Funds" callouts

Give the FOR FUNDS blocks on the homepage and pricing page a distinct, premium spotlight treatment so they read as a separate audience moment rather than another section.

## Recommended direction

Use an **inverted surface band**: in dark mode the block sits on a pale cream surface with navy type; in light mode it sits on the deep navy canvas with cream type. The brand accent (bright blue in dark, violet in light) stays as the eyebrow and link color, so the block reads as branded rather than as a random color block.

Why this over a flat accent-color background: the accent is a saturated blue/violet used for small labels and focus rings. Filling a full-width band with it would fight the buttons and hurt body-copy contrast. Inversion delivers the same "stop here" effect with better legibility and a more editorial, premium feel — consistent with the flatten pass already applied sitewide.

## What changes

Homepage (`#portfolios` band)
- Section background swaps from `surface-raised` to the new inverted spotlight surface.
- Eyebrow, headline, body, primary button, and secondary link all pick up correct inverted colors automatically.
- Hairline divider and button styles adjust so the cream CTA doesn't disappear on a cream background (it becomes the inverted ink-filled pill).

Pricing page (portfolio callout)
- Same inverted surface, applied as a contained panel with generous padding, keeping the existing accent left rule as an accent detail.
- Copy, heading, and link inherit the inverted palette.

Both keep the same copy, layout, and CTAs. Mobile spacing unchanged.

## Technical notes

- Add a `.spotlight-invert` class in `src/styles.css` that locally redefines the semantic tokens the components already use (`--cream`, `--stone`, `--ink`, `--surface-raised`, `--accent`, and the white/black opacity overrides) to their opposite-mode values, with a separate definition under `html.light`.
- Because children reference semantic tokens (`text-cream`, `text-stone`, `bg-cream`, `text-ink`, `border-white/10`), the only component edits are swapping the section wrapper class on `src/routes/index.tsx` (`#portfolios`) and wrapping the pricing callout in `src/routes/pricing.tsx`.
- No hardcoded hex or `text-white` / `bg-black` utilities; verify both themes.
