# Attio-inspired redesign direction for Veep

The four screens you shared are all from Attio's marketing site. They share a very specific design language — quiet, technical, editorial. Here is how I'd translate each layer of that language onto Veep, and where it would replace what's currently on the site.

## 1. Color — from cream/forest to instrument black

Attio's palette is essentially two values plus one accent:

- Near-black canvas (`#0A0A0A` → `#111`), not pure black
- Off-white ink (`#EDEDED`, `#B8B8B8` for secondary, `#6E6E6E` for tertiary/labels)
- Muted spectrum accent only inside the illustration itself (mint → gold → coral gradient across the "Universal Context" pyramid). Never on UI chrome.

For Veep this means flipping the current cream/forest system to a dark-mode-first identity:

- `--background`: near-black
- `--ink`: off-white
- `--stone`: mid-grey for body copy
- `--forest` stays, but is demoted from surface color to a single accent used sparingly (active nav dot, one hero word, one chart line). No more forest-green filled buttons or forest panels — buttons become the "Start for free" style: white pill on black, black pill on white when inverted.

Result: the site reads as an enterprise instrument rather than a consultancy brochure.

## 2. Typography — editorial technical, not literary

Attio pairs:

- A neutral geometric sans for display at large size, tight leading, generous tracking-in (looks like a customized Söhne / GT America Mono blend)
- The same sans at small size for body
- A monospace for micro-labels: `/ GROWTH + SECURITY`, `0.1 / 0.2 / 0.3`, `[04]`

No serif. No italics-for-emphasis. Emphasis comes from weight + color contrast (white sentence, grey continuation).

For Veep this replaces the Instrument Serif display headlines. Proposed pairing:

- Display + body: **Inter Tight** (already loaded) at tighter tracking, or swap to **Söhne** / **General Sans**
- Micro-labels: **JetBrains Mono** for eyebrows, section indices, stat units

The current "Senior operators. *Owned outcomes.*" hero becomes a single-weight statement with the second line greyed rather than italicized.

## 3. Information organization — indexed, numbered, gridded

Every Attio section is treated like a page in a technical manual:

- Section index top-left: `[04]`
- Section category top-right: `/ GROWTH + SECURITY`
- Faint ruled grid lines dividing hero, body, and footer bands
- Content lives in a centered ~1280px column with visible baseline gutters

Below the hero, columns are labeled `0.1 / 0.2 / 0.3 / 0.4 / 0.5` — not "Feature 1", not icons. The numbering itself becomes the visual system.

Applied to Veep:

- Every homepage section gets a `[01]` … `[08]` index and a category tag (`/ FRACTIONAL`, `/ INTERIM`, `/ SPRINT`, `/ BENCH`)
- The "How Veep engages" 3-pillar block becomes a 5-column indexed row (`0.1 Fractional`, `0.2 Interim`, `0.3 Sprint`, `0.4 Bench`, `0.5 AI Operators`) with a headline sentence + one grey continuation sentence per column — exactly like the "Semantic search delivers…" row
- The compare table keeps its logic but adopts the ruled-grid + monospace-label treatment

## 4. Illustration — line-based, generative, one per section

This is the biggest single shift. Attio never uses stock photography or shadcn card mockups. Instead each section has one custom generative-looking line illustration:

- **Universal Context** — a pyramid of horizontal gradient lines
- **System of action** — a vertical bar chart where a cluster of bars darkens to form an implied waveform
- **App SDK** — a horizontal tick-mark ruler under partner logos
- **Reference marks** — three abstract line studies (fan, diagonal hatch, vertical comb)

The common vocabulary: thin lines, evenly spaced, one dimension varies (length, opacity, color, weight) to encode meaning.

For Veep this replaces the current `MockPanel` / `FloatingChip` UI-mockup metaphor (which was Andela's language, not Veep's). New illustration library, one per section, all built in SVG/Canvas so they're crisp and free:

- **Hero** — a vertical bar array where a small central cluster is gold (the "operator moment") and the rest are faint grey (the payroll baseline)
- **Fractional / Interim / Sprint** — a horizontal timeline of tick marks where one segment is filled (engagement window)
- **Executive Bench** — a scatter of dots grouped into clusters (portfolio companies), with connecting lines to a central bench
- **Stats band** — Attio's exact treatment: giant numbers left, waveform-bar illustration right, ruled grid behind
- **Case switcher** — replace the current giant serif metric with the vertical-bar waveform, where the peak is annotated with the outcome ("Series B closed in 14 weeks")

## 5. Motion — restrained, one gesture per section

Attio uses very little motion, and when it does it's:

- Bars draw in from bottom on scroll into view
- Numbers count up once
- Nav underline slides on hover

No parallax, no scroll-jack, no floating chips. Marquee stays (it's on-brand for the manifesto energy) but slows down and drops the italic serif.

## What gets replaced vs. kept

| Kept | Replaced |
|---|---|
| IA (12 routes, dual audience) | Cream + forest palette → near-black + off-white |
| Copy and messaging | Instrument Serif display → geometric sans + mono labels |
| Pillar / trigger / compare content | `MockPanel` + `FloatingChip` UI mockups → line-based SVG illustrations |
| CTAs (dual) | Forest-filled buttons → white/black pill buttons, Attio-style |
| Marquee section | Italic serif marquee copy → tight-tracked sans, single weight |
| Route structure | Section headers → indexed (`[01]`, `/ CATEGORY`) with ruled grid |

## Suggested build order

1. **Tokens + typography pass** in `src/styles.css` — swap palette, load new font stack, define mono label utility
2. **Primitives update** — `Eyebrow` becomes mono `/ LABEL`, new `SectionIndex` component (`[0N]`), new `RuledGrid` wrapper
3. **Illustration kit** — 5–6 reusable SVG components (`BarStack`, `Waveform`, `Timeline`, `TickRuler`, `DotCluster`, `GradientPyramid`)
4. **Homepage** first, then propagate to `/for-companies`, `/for-portfolios`, `/services/*`
5. **Retire** `HeroVisual`, `MockPanel`, `FloatingChip` (or keep them for a possible "Portal" area, not marketing)

## Open questions before I build

1. **Scope** — full site redesign in this pass, or homepage first as a proof, then propagate?
2. **Dark mode only, or light+dark?** Attio is dark-first with a light "system of action" section. Veep could do the same (dark hero, one light section for the compare table).
3. **Accent color** — keep Veep's forest green as the single spectrum accent, or shift to Attio's mint→coral gradient (only inside illustrations)?
4. **Illustration ambition** — static SVGs (fast, cheap), or animated on scroll (bars draw in, numbers count up)?
