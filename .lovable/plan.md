## Goal

Invert the type roles: **IBM Plex Mono** owns structure/accent (headlines, section titles, eyebrows, callouts, stats, prices); **IBM Plex Sans** owns readability (body, nav, buttons, forms, cards). Remove every `italic` on the site and replace italic emphasis with the existing accent color.

## Changes

### 1. Global tokens (`src/styles.css`)

- Keep both Plex families loaded (already wired in `__root.tsx`).
- Repoint the display slot to mono:
  - `--font-display: "IBM Plex Mono", …`
  - `--font-serif: "IBM Plex Mono", …` (so every existing `font-serif` class becomes mono — no per-file churn)
  - `--font-sans: "IBM Plex Sans", …` (unchanged)
  - `--font-mono: "IBM Plex Mono", …` (unchanged)
- Rewrite the base heading rule for mono:
  - `font-family: var(--font-mono)`, `font-weight: 500`, `letter-spacing: -0.02em` (h1: `-0.03em`), `line-height: 1.08` (h1: `1.05`).
  - Mono needs slightly tighter tracking and a bit more line-height than sans display; these values keep h1/h2 from feeling wide or mechanical.
- Body base: keep `font-sans`, weight 400, `letter-spacing: -0.005em`, `line-height: 1.55`.
- Drop the italic block added last round. Add a global reset:
  ```
  em, i, .italic { font-style: normal; color: var(--color-accent); }
  ```
  So every existing `<em>` / `<span className="italic">` renders upright in indigo (the current accent) — the emphasis rhythm survives without italics.

### 2. Component retune (targeted, no layout changes)

- **`PageHero.tsx`** — H1 currently `text-5xl md:text-6xl xl:text-7xl`. Mono at 7xl is oversized; scale to `text-4xl md:text-5xl xl:text-6xl`, keep tracking from the global rule, drop `leading-[1.02]` in favor of `leading-[1.05]`. Sub-copy unchanged.
- **`FooterCTA.tsx`** — headline `text-4xl md:text-6xl` → `text-3xl md:text-5xl`; same tracking/line-height as global.
- **Homepage section h2s** (`index.tsx`) and other route h2s using `text-4xl md:text-5xl` → `text-3xl md:text-4xl` where they currently span multiple lines with the "italic" accent word, so mono lines don't wrap awkwardly.
- **Pricing tier prices** (`pricing.tsx`, `for-portfolios.tsx`) — already `font-mono`; keep, just verify tracking is `tracking-tight` (already set).
- **Stats band** (`index.tsx` line ~607) — already `font-mono`; keep.
- **`SiteHeader.tsx`** — nav links remain Plex Sans; no change. Wordmark stays image.
- **`SiteFooter.tsx`** — section titles get `font-mono uppercase tracking-[0.18em] text-xs` (already close); confirm.
- **`primitives.tsx` `Eyebrow`** — already indigo micro-caps; wrap in `font-mono` so it's explicit (Plex Sans currently supplies it via the missing utility). Keep tracking `0.25em`.
- **Cards** (`ObjectionList`, `TriggerBento`, `OperatorProofCard`, `StepFlow`, engagement tiles) — card *titles* (currently `font-serif text-xl/2xl`) become mono via the global remap. Verify tracking doesn't blow up: for card titles `text-xl`, add a per-file `tracking-tight` where missing.
- **`Testimonials.tsx`** — the huge pull-quote uses `font-serif text-3xl md:text-5xl … italic`. Remove `italic`; keep it as mono (via `font-serif` remap) or explicitly switch to sans for readability. Plan: switch this one component to `font-sans` weight 500 — a giant mono quote reads like a code block, not a testimonial.

### 3. Italic sweep

Find every occurrence of `italic` in `src/` and remove the class. For each removed `italic`, ensure the element has `text-accent` (or the existing accent-toned class, e.g. `text-stone` swaps stay `text-stone` only where they were the *dim* half of an italic pair — otherwise switch to `text-accent`). Concretely, the pattern `<span className="italic text-stone">…</span>` inside headings becomes `<span className="text-accent">…</span>` so the emphasis stays visible against the cream headline.

Files touched (from a repo sweep): `PageHero.tsx`, `FooterCTA.tsx`, `Testimonials.tsx`, `index.tsx`, `pricing.tsx`, `for-portfolios.tsx`, `faq.tsx`, `contact.tsx`, `about.tsx`, `how-it-works.tsx`, `proof.tsx`, `insights.tsx`, `partners.tsx`, `compare*.tsx`, `services.*.tsx`, `primitives.tsx`, and any other file where `rg italic` matches.

### 4. Visual verification pass

Drive Playwright against `localhost:8080`, capture `/`, `/for-portfolios`, `/pricing`, `/faq`, `/contact` at 1280×1800 and 390×844. Review for:
- Mono headlines wrapping mid-word or spilling past container
- Card titles feeling cramped or mechanical
- Any leftover italic
- Accent-emphasis words being legible on cream/stone headlines

Patch anything that reads off; iterate until clean.

## Out of scope

- Palette, layout, section order, component composition — nothing moves.
- No changes to icons, imagery, or motion.
- No self-hosted font install.

## Open question

None — proceeding as spec'd. If a specific headline reads badly at the retuned size on your screen after the pass, point me at it and I'll adjust that one.