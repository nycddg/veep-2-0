# PASS4-NOTES.md — Fable 5, Pass 4 (Dave 08.17 evening GDoc + card hover)

Branch `fable/polish` · clone only · no push (`live-readonly` push remote is
DISABLED), no deploy, `/opt/data/veep-2-0` untouched. Commits authored as
Cisco (`cisco@veep.work`). `bun run build` verified green (exit 0) after
**every** commit below.

---

## 1. CTA + 30-minute copy stacked — DONE, `cf52a1b`

`InlineCTA` (home: Benefits, Proof, Before-you-book) went from a horizontal
flex to a vertical stack: pill on top, the "30-minute call · Reply within 1
business day · 30-day fit guarantee" line **under it, left-aligned**. Same
type as before (xs stone-soft), same label, same Fillout destination — a
one-line layout change (`flex flex-wrap items-center` →
`flex flex-col items-start`).

**Where it did NOT apply, and why:**
- **FooterCTA** — the decision's condition ("if a short guarantee line lives
  next to it") never triggers: the 30-min copy lives in the `sub` paragraph
  **above** the pill (where Dave wants it), and the pill's only sibling is
  the "Request a capacity audit" link, a CTA rather than supporting copy.
  Nothing moved.
- **PageHero** — pill + secondary CTA link only; no sibling-of-pill copy
  exists anywhere it's used. Verified by grepping every `BOOKING_URL` /
  30-minute-copy site: `InlineCTA` was the only treatment with a guarantee
  line beside the pill.

## 2. For Funds spotlight = home chapter — DONE, `a4618f0`

The home `/#operators` chapter was extracted **verbatim** into a shared
`src/components/site/OperatorSpotlightChapter.tsx`: eyebrow, h2, body
paragraph, `OperatorSpotlightRail` (shared `spotlightOperators` data), the
"Just a few of the 75+…" footnote, the **Network impact** eyebrow + dotted
stat grid, and the right-aligned "Aggregated outcomes across our operator
roster." mono chrome. Home renders the component inside its existing
section wrapper (id, Reveal, CTA row after the chapter all unchanged);
`/for-portfolios` renders the same component on its raised band. The
grafted 75+/72h/<10d/30d strip + $B recap line from Pass 3 retire from
that page — one source of truth, no third layout. The `networkImpact`
data moved with the chapter (deleted from `index.tsx`), so the numbers
exist in exactly one file.

**Discrepancy flagged for Dave:** the GDoc describes the grid as
"$2B+ / $1B+ / $3B+ / **95%**", but home — declared the source of truth —
ships "$2B+ / $1B+ / $3B+ / **20+ Exits & acquisitions**". I copied home
exactly (locked numbers stay locked; 95% match success lives elsewhere in
the proof chrome). If Dave actually wants a 95% cell in the grid, that's a
separate, explicit change to the locked home chapter — not mine to invent.

## 3. Card hover = row wash — DONE, `5d44b9d`

The existing `.motion-row-wash` utility (accent at 12%, background-size
0→100% draw, **240ms `--ease-standard`**) gained a `:hover` self-trigger so
it can sit directly on a card instead of needing a `.group` parent (which
would have cross-fired nested `group` hovers, e.g. the roster card's
"See engagement pricing" arrow). No new library, no new utility — two
selectors added to the existing rule set:
- `.motion-row-wash:hover { background-size: 100% 100% }`
- reduced-motion block: both hover paths forced back to `0% 100%`
  (`prefers-reduced-motion` = **no wash at all** now, per the decision —
  previously the global 0.001ms transition would have snapped it in).

Applied to every enumerated `surface-card` box:
- **benefits** (home, What you get)
- **case cards** (home, Proof — they are cards since Pass 3)
- **objections** (`ObjectionList`, home Before-you-book)
- **volatility cards** (/for-portfolios, Where your portfolios lose time)
- **roster $75k card** (/for-portfolios)

Backgrounds clip to the 20px radius natively, so the wash respects the
card shape. Works on mouse and trackpad hover; no lift, no bounce, no
parallax. **Deliberately excluded:** the `ProblemDiagram` nodes also use
`surface-card`, but they're figure elements wired together with hairline
connectors, not content cards, and they're absent from the decision's
enumeration — a hover wash on diagram nodes would imply interactivity that
isn't there. Easy one-liner if Dave wants them washed too.

---

## Pass 4 commits (this branch, in order)

1. `cf52a1b` InlineCTA vertical stack (item 1)
2. `a4618f0` shared OperatorSpotlightChapter, For Funds remix retired (item 2)
3. `5d44b9d` row wash on surface-card boxes + reduced-motion hardening (item 3)

## QA notes for Dave's browser pass

- **Item 1**: check the three home InlineCTA spots — pill, then the 30-min
  line directly under it, both flush left. Mobile already stacked, so only
  desktop visibly changes.
- **Item 2**: /for-portfolios now reads Audit → home spotlight chapter
  (rail → 75+ footnote → Network impact grid → aggregated line) → Roster.
  The page no longer shows the 75+/72h/<10d/30d band anywhere; those
  numbers still appear in the page hero sub and FooterCTA sub. Confirm the
  4-stat grid (2-col on mobile) reads well on the raised band.
- **Item 3**: hover any boxed card — accent wash sweeps left-to-right in
  240ms, no movement of the card itself. With reduced motion enabled, no
  wash appears (this also newly applies to the Why Veep table rows).
  Light mode: wash is the light accent at 12% over paper-white cards.

## Locks honored

Matrix labels small · Why Veep hidden on mobile · CTA destinations and
labels unchanged (Fillout pill, audit links, pricing links untouched) ·
proof numbers untouched — the chapter moved as-is, 20+ kept, nothing
invented · Sans heads 500 · Mono chrome only (mono-label stays chrome) ·
no bounce/parallax/Framer/GSAP (wash is a background-size transition) ·
`prefers-reduced-motion` honored (stricter than before) · clone only,
no push, no vercel deploy (`NITRO_PRESET=vercel` is the local build
preset, not a deploy).
