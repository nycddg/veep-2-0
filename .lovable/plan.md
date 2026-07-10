
# Fix: Reveal sections stuck at opacity 0

## Root cause

`Reveal` uses `useInView` with `threshold: 0.12` and `rootMargin: "0px 0px -8% 0px"`. On tall sections (>viewport) the intersection ratio can climb slowly, and with the `-8%` bottom margin the observer often doesn't fire the initial "already in view" callback either. Result: `data-in` stays `"false"` forever, CSS keeps opacity at 0, sections look black.

## Fix (minimal, no scope change)

Rewrite `src/components/site/Reveal.tsx` so it can never leave a section invisible:

1. **Synchronous first-paint check** — on mount, immediately measure the element's `getBoundingClientRect()`. If any part is already in the viewport (or above it), set `inView = true` right away. No black flash for above-fold or already-scrolled-past content.
2. **Looser observer** — use `threshold: 0` and `rootMargin: "0px 0px -5% 0px"` so any intersection at all triggers the reveal.
3. **Safety timeout** — `setTimeout(() => setInView(true), 600ms)` as a hard fallback so nothing ever stays hidden, even if IO misbehaves or is missing.
4. **Reduced-motion / no-IO** — if `prefers-reduced-motion: reduce` or `IntersectionObserver` is undefined, set `inView = true` immediately.
5. Cancel timers / disconnect observer on unmount.

CSS in `src/styles.css` stays as-is — `.motion-reveal[data-in="true"] { opacity: 1; transform: none; }` is correct; only the trigger is broken.

## No other changes

- No changes to `useInView.ts` (it's used only by `Reveal`, but I'll keep the hook and just bypass its logic in `Reveal` for the safety guarantees above).
- No changes to which sections are wrapped, to CSS tokens, or to any other motion utilities. CTA lift, arrow slide, nav link polish, FAQ collapse, header transition all continue to work.

## Verification

After the edit I'll run a preview snippet that:
- Reads `data-in` on all 5 `.motion-reveal` sections immediately and after 700ms
- Scrolls the page and reads again
- Confirms every section reaches `data-in="true"` and `opacity: 1`
