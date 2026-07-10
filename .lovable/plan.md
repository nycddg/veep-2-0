# Operator Spotlight — Flagship Carousel

Turn the current 4-up grid into a horizontal snap-scroll rail of image-forward cards. Portrait stays clearly visible in the default state; hover reveals a personal-summary panel from the bottom.

## Scope

Files changed:
- `src/components/site/OperatorSpotlightCard.tsx` — new component (image-forward variant)
- `src/components/site/OperatorSpotlightRail.tsx` — new carousel wrapper (scroll rail + progress bar + prev/next arrows)
- `src/routes/index.tsx` — swap the current `grid` + `OperatorProofCard` block for `<OperatorSpotlightRail operators={spotlightOperators} />`

The existing `OperatorProofCard` component stays in place (still used elsewhere via the `variant="compact"` prop and by any other callers). No data-shape changes to `spotlightOperators`.

## Card design (based on selected direction)

Fixed-size card: `w-[340px] aspect-[3/4]`, `bg-[#0a0f1d]`, thin `border border-white/5` (coral border for the one operator marked featured).

Layers (bottom → top):
1. Portrait image — grayscale, `brightness-90` default → `grayscale-0 brightness-100 scale-105` on hover, 500ms ease.
2. Blue tint — `bg-accent/10 mix-blend-overlay`, fades to transparent on hover.
3. Corner legibility gradient — `bg-gradient-to-tr from-transparent via-transparent to-black/30`, only in top-right quadrant, fades on hover. Keeps the face fully visible; only tints behind the meta text.
4. Meta (top-right, `z-10`): name (Plex Sans 20px, cream, subtle `drop-shadow-md`), role (Plex Mono 10px, accent color), prior companies (Plex Mono 10px, cream/60) stacked right-aligned.
5. Summary panel (bottom, hidden by default): `translate-y-full` → `translate-y-0` on hover, 500ms ease-out. `bg-background/95 backdrop-blur-md`, top border in accent color, summary text + small "Read more" affordance.

Accessibility: entire card is focusable; `group-focus-within` mirrors hover so keyboard users get the reveal too. Portrait `alt={name}`.

## Rail wrapper

- `flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scroll-smooth no-scrollbar` — 3–4 cards visible at desktop widths, remaining operators reveal via horizontal scroll/drag.
- No-scrollbar utility already exists in code base pattern; add inline `<style>` block for `.no-scrollbar` if not present globally.
- Progress + controls row (from v2), placed below the rail:
  - Left: mono counter `01 // NN` + a `h-px flex-1 bg-white/10` track with an inner `bg-accent/60` fill; width computed from `scrollLeft / (scrollWidth - clientWidth)` via a scroll listener.
  - Right: two 32px circular icon buttons (`border border-white/10`, hover `border-accent/40 text-accent`) that call `scrollBy({ left: ±cardWidth, behavior: "smooth" })`.
- Uses `useRef` for the scroll container and `useState` for the progress percentage + current index.

## Technical notes

- Client-only interactivity (scroll listener, refs) — component uses `useState`/`useEffect`/`useRef`, no server-side concerns.
- No new dependencies. Pure Tailwind + React.
- Coral featured accent: add optional `featured?: boolean` prop; today it's off — hook is there for later. (No data change now.)
- Section wrapper, eyebrow, headline, and lead paragraph in `index.tsx` are unchanged.

## Out of scope

- No changes to operator data, photos, or the network-impact block below.
- No changes to `OperatorProofCard` (still used by hero collage compact variant).
- No mobile-specific redesign beyond the fact that snap-scroll works naturally on touch; card width stays 340px so mobile shows ~1 card + peek.