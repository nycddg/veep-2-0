## Goal

Move the entire site off Inter + Playfair Display to **IBM Plex Sans** (UI, body, headings, italics) and **IBM Plex Mono** (labels, stats, timestamps, code, monospace chrome). Preserve the current dark editorial brand — just re-tune weights, sizes, tracking, and spacing so IBM Plex reads as intentional, not defaulted.

## Changes

### 1. Load the fonts (`src/routes/__root.tsx`)

Replace the current Google Fonts `<link>` with:

```
family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600
&family=IBM+Plex+Mono:wght@400;500;600
```

Keep the `preconnect` links.

### 2. Rewire the type tokens (`src/styles.css`)

- `--font-sans: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;`
- `--font-serif: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;` (all `font-serif` usages become Plex Sans — no more Playfair)
- `--font-display: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;`
- `--font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;`

Body base:
- `font-family: var(--font-sans)`, weight 400, `letter-spacing: -0.01em`, `font-feature-settings: "ss02", "cv11"` for Plex Sans's cleaner `a`/`g`.

Headings (`h1, h2, h3, .font-serif, .font-display`):
- keep display sizes, but drop to `font-weight: 500`, `letter-spacing: -0.028em` (h1: `-0.035em`), `line-height: 1.02` on display, `1.1` on section h2s. Editorial italic accent (`<span className="italic">`) stays — Plex Sans italic is distinct and preserves the current rhythm.

Mono (`.font-mono`, `.mono-label`, `--font-mono` consumers):
- `letter-spacing: 0.08em` for uppercase labels, `0.02em` for numeric stat displays, weight 500 for legibility at small sizes.

### 3. Component pass (small, targeted tweaks — no layout changes)

Only touch what visibly breaks or reads worse after the swap:

- **`SiteHeader.tsx`** — nav links: bump to `text-[13px]` weight 500, tighten button label to weight 500 (Plex Sans at 500 reads as the previous Inter 500 well); confirm wordmark image still balances.
- **`PageHero.tsx`** — hero H1 was Playfair 5xl–7xl. Plex Sans at that scale reads heavy; set weight 500, tracking `-0.04em`, line-height 1.02. Sub-copy: `text-lg md:text-xl`, weight 400 (drop the `font-light`).
- **`FooterCTA.tsx`** — same treatment: weight 500 on the huge headline, tracking `-0.035em`.
- **`primitives.tsx` `Eyebrow`** — already mono-label style via accent; ensure `font-mono` class applied and letter-spacing bumped to `0.28em` for Plex Mono's wider glyph.
- **Route files using `font-serif` for section h2s** (`index.tsx`, `pricing.tsx`, `for-portfolios.tsx`, `faq.tsx`, `contact.tsx`, `about.tsx`, `services.*`, `compare*`, `how-it-works`, `proof`, `insights`, `partners`) — no per-file edits needed because `font-serif` now maps to Plex Sans; the global heading rule handles weight/tracking. Do a Playwright screenshot pass to catch any h2 that still looks off.
- **Stat/number displays** (`StatsBand`, pricing tier prices `$75k`, hero chips) — apply `font-mono` where the design intent was numeric emphasis; today those use `font-serif` for the price. For pricing tiers, switch the `$…` number to `font-mono` weight 500, `tracking-tight`, so it reads as data, not display copy.
- **`OperatorProofCard.tsx`** — initials chip and name treatment: name stays sans, initials use `font-mono`.
- **Cards / list bullets** — no changes; spacing already generous.
- **Buttons** — pill buttons keep current padding; label weight 500 (Plex Sans 400 looks anemic on the cream pill against navy). Global sweep of `font-medium` on buttons is already correct.
- **Forms/inputs** (`contact.tsx`) — inputs get `font-mono` for values users type (email, company), labels stay sans.

### 4. Visual verification pass

After the edits, drive Playwright against `localhost:8080` and capture screenshots of `/`, `/for-portfolios`, `/pricing`, `/faq`, `/contact`, `/services`, `/about` at 1280×1800 and 390×844. Review each; if a heading looks too heavy or a card feels cramped, patch that specific component. Iterate until the pass is clean.

## Out of scope

- Palette, layout structure, section order, or component composition — nothing moves.
- No new components, no route changes.
- No self-hosted `@fontsource` install — Google Fonts CDN is already wired and preconnected.

## Open question

None — proceeding with Plex Sans for both body and (former) serif slots since the brief says "all fonts use IBM Plex." If you'd rather keep Playfair for the italic display accents and only move UI/body to Plex Sans, say so before I build.