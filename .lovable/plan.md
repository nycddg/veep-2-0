## Goal
Add Daniel Walsh's quote alongside Jerry Kolber's on the home Proof section without regressing the current single-hero-quote treatment into a bland "3-up quote grid" tick.

## Recommendation: editorial pair, not a grid
Keep one **hero quote** (Jerry — it's the punchiest, "think, act, engage like co-founders") and demote Daniel's quote to a **supporting quote** set below, at ~50% the size, left-aligned, with a hairline divider between them. This matches the "one hero + supporting" pattern already called out in the de-templating plan for Proof (`.lovable/plan.md` §9), and reads like a real editorial spread instead of a testimonials carousel.

```text
        VERIFIED — FOUNDER TESTIMONIALS

   "I cannot recommend this team more highly.
    They think, act, and engage like co-founders."
                       — Jerry Kolber, Atomic Audio
   ────────────────────────────────────────────
   "As a founder raising capital, I couldn't have
    asked for a better partner. I never felt alone."
                       — Daniel Walsh, VeroSkills
```

## Changes

**`src/components/site/Testimonials.tsx`** — rewrite:
- Accept an internal `quotes` array; render the first as the hero blockquote (current large size, centered), the rest as supporting blockquotes at `text-xl md:text-2xl`, left-aligned inside the same max-w container, separated by a top hairline (`border-t border-white/10`) with generous padding.
- Eyebrow becomes plural: "Verified — Founder testimonials".
- Author block: keep the initials avatar + name/role pattern, but drop the avatar on supporting quotes (name + role only, mono caption) so the hero quote stays the visual anchor.
- Fix the straight double-quote to typographic curly quotes (" ") to match the editorial voice.

Data lives inside the component (2 items) — no props threading needed today; easy to extend later.

## Out of scope
No new route, no carousel, no logos, no changes to the surrounding Proof section chrome or the operator cards.
