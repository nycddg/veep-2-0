## Goal
Restyle the Operator Spotlight cards on the home page so each operator reads as a real person, not a set of chips — closer to the editorial "portrait + name + one-line role + credentials" pattern in the references, but without ever needing to source or license company logos.

## The no-logo move
Prior companies stay as **typographic wordmarks**, not images. We render them inline as a single line:

`INDUSTRIOUS · OPENCARE · UGE · AVENIR`

Set in IBM Plex Mono, uppercase, tight tracking, cream at 70%, separated by a middot. This gives the "logo strip" rhythm from the Katie McLaughlin reference (bold horizontal credential row under the name) with zero asset sourcing. Any new operator we add is a text edit.

## Card structure (top → bottom)
```text
┌──────────────────────────────┐
│                              │
│        PORTRAIT              │  ~4:5 ratio, indigo-tinted duotone
│        (photo)               │  rounded top corners only
│                              │
├──────────────────────────────┤
│ Jian Yang                    │  H3, sans, cream
│ Senior Finance Operator      │  body, stone
│ ─────────────────────────    │  hairline
│ INDUSTRIOUS · OPENCARE · UGE │  mono caption, cream/70
│                              │
│ Led $80M Series C readiness. │  ← ONE line, prose, not bullets
│ Built FP&A across 40+ sites. │
│ Ran diligence through exit.  │
│                              │
│ Real Estate  Consumer  M&A   │  small mono tags, no pill borders
└──────────────────────────────┘
```

Key moves vs current card:
- Portrait becomes the dominant element (was: monogram initials in a rounded square).
- "Prior seat" prose becomes a **typographic wordmark row** — the no-logo substitute.
- Bulleted outcomes with arrow glyphs → **short prose lines**, editorial voice.
- Chip pills lose their border/background — become spaced mono tags.
- Drop the tilt/rotate/translate hover trick and the `glass-card` frame. Card is a flat panel with a hairline, single radius.

## Portrait handling (this is where premium happens)
- Aspect: 4:5 portrait, `object-cover`, `object-top`.
- Treatment: subtle **indigo duotone** via CSS `filter: grayscale(1)` + `mix-blend-multiply` over an `accent/15` wash. Unifies mismatched headshots and reinforces brand.
- Missing photo fallback: keep the current initials block but at portrait aspect, on an `accent/10` field — so a card without a photo still holds the grid.
- Storage: add optional `photoUrl?: string` to `OperatorProofCard` props. Photos live as Lovable Assets (`src/assets/operators/*.jpg.asset.json`), imported per operator on the home route.

## Component changes
**`src/components/site/OperatorProofCard.tsx`** — rewrite:
- New props: `photoUrl?: string`, `priorCompanies?: string[]` (replaces free-text `priorSeat`), `outcomes?: string[]` stays but renders as prose lines, `chips` stays.
- Remove: `tilt`, `translateY`, glass-card frame, hover rotate/translate, initials-in-rounded-square (moved to fallback).
- Structure: `<figure>` with portrait on top, `<figcaption>` block below with name → role → hairline → mono wordmark row → prose lines → tag row.

**`src/routes/index.tsx`** — operator spotlight section:
- Update each operator entry to pass `priorCompanies: ["Industrious", "OpenCare", ...]` instead of the current sentence.
- Remove the per-card `tilt`/`translateY` props from the call sites.
- Grid becomes a clean 3-up on desktop, 1-up on mobile, equal heights, no staggered offsets.

## Photos
I won't invent likenesses. Two options — I'll pick (a) unless you say otherwise:
- **(a)** Placeholder portraits: keep the initials fallback for now with the new duotone treatment, so the layout ships today. You drop real headshots in later.
- **(b)** You upload the 3 real headshots and I wire them into `src/assets/operators/`.

## Out of scope
No copy rewrites beyond restructuring `priorSeat` → `priorCompanies` list, no palette change, no changes to other cards on the page, no changes to routes other than the home operator section.

## Verification
Recapture `/#proof` at 1280 and 390, confirm: portrait dominates, wordmark row reads as a credential strip, no chip-pill noise, no card tilt, mobile stacks cleanly with no awkward chip wraps.
