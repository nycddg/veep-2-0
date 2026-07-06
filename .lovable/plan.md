
# Veep — Attio-Inspired Redesign (locked scope)

Based on your answers:
- **Scope:** full site
- **Theme:** dark everywhere, one light section (Compare table)
- **Accent:** mint → coral gradient, used *only inside illustrations* (UI chrome stays neutral white/black/grey with warm-gold reserved as a single hover/link tint or dropped entirely)
- **Motion:** SVG illustrations animate on scroll

---

## 1. Design tokens (`src/styles.css`)

- Base: `--bg #0B0B0C`, `--surface #111113`, `--fg #EDEDED`, `--fg-muted #8A8A8E`, `--rule #1E1E22`
- Light section tokens: `--bg-light #F4F2ED`, `--fg-light #111`, `--rule-light #E4E1DA`
- Illustration gradient stops: `--ill-mint #7CE0C0`, `--ill-mint-2 #56C7C0`, `--ill-coral-1 #F2A47C`, `--ill-coral-2 #EE6A4D` (exposed as CSS vars, referenced only inside `illustrations.tsx`)
- Retire the forest-green + warm-gold UI accents. Keep the gold token but stop using it in components; buttons become white-on-black / black-on-white pills only.

## 2. Typography

- Keep Inter Tight (display + body) and JetBrains Mono (labels/indices) — already loaded.
- Purge remaining Instrument Serif references (headings switch to Inter Tight tight-tracked).
- Standardize label style: `text-[11px] uppercase tracking-[0.14em] font-mono text-fg-muted`.

## 3. Section chrome

Every section on every page uses the indexed header primitive already introduced:

```
[03]  / FRACTIONAL
Any C-suite role, on the day you need it.
Grey continuation sentence describing scope.
```

Ruled 1px dividers (`--rule`) between blocks. Compare section inverts to light tokens and keeps the same index/label treatment.

## 4. Illustration kit — animated

Rebuild `src/components/site/illustrations.tsx` so each SVG:
- Uses the mint→coral linear gradient (no solid greens/golds).
- Exposes a `useInView` trigger (IntersectionObserver, 20% threshold, one-shot).
- Animates via CSS custom-property tweens or `<animate>` on `stroke-dashoffset` / `transform` — no runtime JS library beyond a tiny 20-line hook.

Illustrations to ship (one per section type):
1. **GradientPyramid** (hero) — stacked horizontal bars, gradient sweep left→right on enter, faint vertical scan line loop.
2. **Timeline** (fractional/interim/sprint) — ruler with a filled engagement window that draws in from left; endpoint dots pop last.
3. **Waveform** (stats + case switcher) — vertical bars grow from 0 to their target height, gradient colored, staggered 20ms.
4. **DotCluster** (executive bench) — nodes fade in, connecting lines stroke-draw between them.
5. **TickRuler** (pricing/compare) — tick marks stroke-draw; active tick pulses once.
6. **OrbitDial** (AI operators) — arc stroke-draws, satellite dot orbits once then rests.

## 5. Component updates

- `HeroVisual` → GradientPyramid, keeps existing copy structure.
- `TriggerBento` → each of 4 cards gets a small inline illustration variant (Timeline/DotCluster/Waveform/TickRuler mini).
- `StatsBand` → Waveform behind giant numbers; numbers count up on enter.
- `CaseSwitcher` → Waveform with annotated peak marker.
- `CompareTable` → wrap in `<section data-theme="light">` block; tokens swap via `[data-theme="light"]` selector in styles.css. Rest of page stays dark.
- `Testimonials`, `LogoWall`, `Marquee`, `FooterCTA`, `PageHero`, `SiteHeader`, `SiteFooter` → strip any lingering gold/forest classes, adopt neutral chrome.
- `AudienceTabs` → tab underline uses mint→coral gradient (only exception where the gradient touches UI, since it reads as an illustration accent).

## 6. Pages touched

All routes: `index`, `for-companies`, `for-portfolios`, `services` (+ 5 children), `operators`, `about`, `insights`, `contact`, `partners`. Each gets:
- Dark theme confirmed
- Indexed sections
- One appropriate illustration per major block
- Compare/pricing table (where present) in the light band

## 7. Scroll-animation primitive

Add `src/components/site/useInView.ts` — a ~15 line hook returning `[ref, inView]` with `once: true`, `rootMargin: "-10% 0px"`. All illustrations consume it. No new dependencies.

## 8. Motion budget (restraint)

- Illustrations animate once, ~600–900ms, ease-out.
- Numbers count up once.
- Nav link underline slides on hover.
- Marquee stays slow (existing).
- No parallax, no scroll-scrubbed timelines, no auto-loops except the hero scan line.

## 9. Out of scope

- No content/copy rewrites.
- No route additions or URL changes.
- No light-mode toggle — dark is the site; the compare block is a designed inversion, not a theme switch.
- No new npm packages.

## 10. Build order

1. Tokens + purge old accents (`styles.css`, small sweep across components).
2. `useInView` hook.
3. Rebuild `illustrations.tsx` with animated gradient SVGs.
4. Swap illustrations into each section component.
5. Light-mode Compare band.
6. Walk every route, verify indices/labels/illustrations render, screenshot homepage + for-companies + services/fractional-cfo to confirm.
