## Goal

Move from stripe-of-cards pacing to editorial pacing driven by background tone. Give the site rhythm using 3 dark tones instead of decoration.

## Tone system (add to `src/styles.css`)

Define three semantic surface tokens, all dark, all AA-safe with existing `--cream` / `--stone`:

- `--surface-ink` — current `--background` (deep navy #050810). Hero, operator/proof, final CTA, footer.
- `--surface-raised` — subtly lifted blue-black (~+3–4% L, same hue). Problem/urgency, benefits, FAQ.
- `--surface-band` — charcoal-navy (slightly warmer/darker chroma shift). Pricing, roster, comparison bands.

Expose as Tailwind utilities via `@theme inline` (`--color-surface-ink`, `--color-surface-raised`, `--color-surface-band`) so sections can use `bg-surface-raised` etc. Add a `@utility section-band` that also sets `color-scheme: dark` and a hairline `box-shadow: inset 0 1px 0 var(--color-rule)` for optional soft top separation without a hard border.

Rule of use: no more than 3–4 tones total; never alternate mechanically; a band only appears when it separates a narrative chapter.

## Band assignment

Homepage (`src/routes/index.tsx`):
- Hero + overview → ink
- `#problem` → raised
- `#solution` → ink (continues problem→solution as one chapter with just a hairline)
- `#operators` (operator spotlight) → ink
- `#benefits` → raised
- `#offer` (pricing preview) → band
- `#how` → raised
- `#proof` → ink
- `#vs` (comparison) → band
- `#portfolios` → raised
- final CTA + footer → ink
- `#faq` → raised

Pricing (`src/routes/pricing.tsx`):
- Hero → ink
- Tier section → band
- Add-ons / comparison → band (continuous, hairline only)
- Pricing FAQ → raised
- Final CTA → ink

Portfolios (`src/routes/for-portfolios.tsx`):
- Hero → ink
- Audit → raised
- Process → ink
- Retainer → band
- Proof → ink
- CTA → ink

FAQ (`src/routes/faq.tsx`): Hero ink, list raised.
Proof / How-it-works / Compare: apply the same 3-tone logic (ink for narrative + proof, raised for problem/steps, band for comparison tables).

## Card removal (where band now carries structure)

For each section receiving a tonal band, drop the outer `glass-card` / `rounded-3xl` / bordered panel and let type + rules carry it:

- Homepage `#problem` (TriggerBento wrapper) → editorial rows on `bg-surface-raised`, hairline dividers instead of card grid.
- `#benefits` grid → 2-col editorial list, no card borders.
- `#offer` pricing preview → band with rule-separated tiers, no card chrome around each tier.
- `#how` (StepFlow) → numbered rows separated by hairlines on the band.
- `#vs` comparison → full-width band, borderless table with `ruled-top` / `ruled-bottom` rules only.
- `#portfolios` → editorial split, no card container.
- `#faq` items → rules only (they mostly are already).
- Pricing tier cards → keep the featured tier as a subtle raised panel for hierarchy, strip chrome from the two flanking tiers so the band does the framing.
- Pricing add-ons / portfolio audit / retainer / process → convert card grids to editorial rows.

Keep card containers only where they encode real UI meaning (Testimonials quote panels, OperatorProofCard glass panel — the branded spotlight).

## Section transitions

- Between two same-tone sections: keep the existing `border-t border-white/10` hairline.
- Between different tones: drop the hairline (the tone change is the separator), or use the `section-band` inset hairline for the softer case.
- No gradient overlays, no glows, no blurred blobs added — this is tonal only.

## Implementation order

1. Add tokens + `section-band` utility in `src/styles.css`.
2. Homepage: swap section `className`s to the new tone map, remove redundant card wrappers section-by-section.
3. Pricing page: apply band + strip flanking tier chrome.
4. Portfolios page: apply band map + convert audit/process/retainer grids to editorial rows.
5. FAQ, Proof, How-it-works, Compare: apply band map (mostly className swaps).
6. Visual check: run Playwright on `/`, `/pricing`, `/for-portfolios`, `/faq` at 1280×1800; confirm no more than 3 tones visible, contrast holds, no striped feel.

## Guardrails

- No new colors beyond the 3 surface tokens.
- No changes to copy, illustrations, or component logic.
- OperatorProofCard, Testimonials quote panels, featured pricing tier, header, and footer chrome unchanged.
- All text stays on `--cream` / `--stone` — verify AA on `--surface-raised` and `--surface-band` before shipping.
