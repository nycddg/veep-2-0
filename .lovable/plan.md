
# Veep redesign — locked direction (v3: floating roster on dark navy)

Direction chosen: dark navy `#050810` canvas, Playfair Display serif + Inter sans, indigo accent, white pill CTA, tilted glass-morphic operator proof cards on the right of a split hero. That is the visual contract — I will not re-derive it.

## What I'll build (this pass = homepage + design system)

### 1. Design system swap (`src/styles.css`, `src/routes/__root.tsx`)
- New tokens: `--background` navy `#050810`, `--card` `rgba(255,255,255,0.04)`, `--border` `rgba(255,255,255,0.1)`, `--primary` white, `--accent` indigo `#6366f1`, keep gold retired.
- Load Playfair Display + Inter via `<link>` in `__root.tsx` head; register in `@theme` as `--font-display` and `--font-sans`.
- Retire the `[01] / CATEGORY` mono rulers as dominant chrome — keep monospace only for small meta.

### 2. New primitives (`src/components/site/`)
- `OperatorProofCard` — tilted glass card (initials avatar, name, role, 1–2 pedigree chips). Display-only, no CTA, no rate, no availability.
- `OutcomeTile` — dark glass tile with serif headline + short line, hover lift, links to `/contact?outcome=…`.
- `EngagementTile` — 4-up product tile (name, price band, "best when", CTA).
- `StepFlow` — 4-step visual (Diagnose · Match · Deploy <10d · Handoff).
- `TrustChip` — "72-hr match · 30-day fit guarantee".
- Rework `SiteHeader`/`SiteFooter` to match dark navy palette.

### 3. Homepage rebuild (`src/routes/index.tsx`)
Sections, top to bottom:
1. **Split hero** — left: eyebrow chip, H1 in Playfair ("Executive leadership, on demand." with "Exceptional" in italic), subhead framing the 3 core ideas, white pill CTA "Book intro call" (Fillout) + ghost CTA "How it works", trust chip. Right: 4 tilted operator proof cards using real names from existing roster (Jian Yang, Elaine Bogart, Vanessa Kwan, Stephanie Lung) with pedigree chips.
2. **Trust bar** — slow logo marquee + 4 metrics ($1B+ raised · 15+ exits · $2B+ savings · 30M users).
3. **Outcomes grid (6 tiles)** — Close the raise · Fix the forecast · Integrate the acquisition · Unblock GTM · Ship the platform · Cover the seat. Each → prefilled `/contact`.
4. **Why not hire or consult** — 3-column contrast (Hire 4–6mo permanent · Consult advice not ownership · Veep operator owns it in <10 days), Veep column visually weighted.
5. **How it works** — 4-step flow, visual.
6. **Engagement models** — 4 product tiles (Advisory, Fractional, Interim, Sprint) with price band + "best when" + CTA to leaf.
7. **Operator caliber strip** — pedigree company logos mosaic + "26 vetted operators · led at Stripe, Airbnb, Uber, Coinbase, Shopify…". No cards, no browse.
8. **Case studies** — 3 anonymized outcome cards (existing).
9. **Testimonial** — Jerry Kolber, full-bleed dark.
10. **FAQ** — condensed 6.
11. **Closing CTA band**.

Persistent bottom-right "Book intro call" chip on scroll past hero.

## Explicitly out of scope this pass

- Interior routes (`/operators`, `/services/*`, `/pricing`, `/compare`, `/about`, `/faq`, `/contact`) — will restyle to the new system in a follow-up pass once you approve the homepage. IA stays.
- No search, no filters, no browsable operator directory, no per-operator rates or availability. Roster is proof only.
- No new backend, no live matching engine. Outcome tiles prefill `/contact` via querystring.
- No headshot scraping — initials avatars.
- `/insights` stays "coming soon".

## Verification

- `bunx tsgo` typecheck
- Playwright screenshot at 1280 + 390 widths, view outputs to confirm the hero matches the chosen direction.

Approve and I'll build it.
