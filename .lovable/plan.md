## Diagnose why the motion pass isn't visible

You're not seeing the animation changes on the live preview. The code from last turn is in the files, so this is almost certainly a delivery / wiring issue, not a design issue. I want to confirm the cause before touching anything else.

### Likely causes (in order)

1. **HMR gate not flushed** — the sandbox buffers `src/` edits until end of turn or an explicit flush. The console log shows `[vite] server connection lost` and a failed websocket, which means your browser never received the hot updates for `styles.css`, `Reveal.tsx`, `SiteHeader.tsx`, `accordion.tsx`, and the form primitives. A hard reload (or a flush + reload) should show them.
2. **`Reveal` regression** — I switched `Reveal` from a mount-time animation to `IntersectionObserver`. If the observer never fires (e.g. element already past the viewport, or `rootMargin` too aggressive), sections stay at `opacity: 0`. The replay actually shows `data-in="true"` toggling as you scroll, so this is probably fine on the home page — but worth confirming on shorter pages (FAQ, Contact, Privacy).
3. **Utilities not applied where expected** — some motion utilities were added to base components (button, inputs, accordion) but several hand-rolled anchor pills, nav links, footer links, and card tiles were listed in the plan and *not yet* wired up. So even after a reload, nav/footer/tiles will look unchanged because those edits were deferred.
4. **Prefers-reduced-motion** — if your OS is set to "reduce motion," the global guard strips everything by design. Worth ruling out.

### Plan

**Step 1 — Confirm delivery.** Flush the HMR gate and hard-reload the preview. Then verify in the browser:
   - `getComputedStyle(document.documentElement).getPropertyValue('--dur-hover')` returns `200ms`
   - A `.motion-reveal` element exists and flips `data-in` on scroll
   - The header gets `data-scrolled="true"` past 12px
   - Hovering a button shows the 1px lift + shadow

**Step 2 — Fix whichever of the four causes is real.**
   - If (1): no code change needed, just the flush + reload restores everything.
   - If (2): relax `Reveal`'s `rootMargin` to `0px` and threshold to `0.05`, and fall back to `inView = true` if `IntersectionObserver` misses (e.g. element already above the fold on mount — check `getBoundingClientRect().top < window.innerHeight` synchronously in the effect).
   - If (3): finish wiring the utilities the previous pass left out:
     - `SiteHeader` nav links → `motion-underline`
     - `SiteFooter` link groups → `motion-link` + `motion-underline`
     - `OutcomeTile`, `EngagementTile`, `OperatorProofCard`, pricing tier cards → replace ad-hoc `transition-all duration-300 hover:-translate-y-1` with `motion-hover-lift` for one consistent curve
     - Hand-rolled pill anchors (hero + FooterCTA CTAs, "Book intro" etc.) → add `motion-cta`
     - Arrow-suffix links (`→` / `ArrowUpRight`) → wrap in `group` and add `motion-arrow` to the icon
   - If (4): note it and stop — the behavior is correct.

**Step 3 — QA pass.** Home, Pricing, About, Join, FAQ, Contact, Privacy/Terms at desktop + mobile, plus one reduced-motion check. Confirm no console errors and no layout shift.

### Out of scope

No new keyframes, no copy/layout/typography changes, no route transitions, no scroll-linked parallax. Purely finishing the restrained motion pass and confirming it's actually reaching the browser.

### What I need from you

Two quick answers so I don't guess:

1. Did you **hard-reload** the preview (Cmd/Ctrl-Shift-R) after my last message? The websocket dropped, so a normal reload may still be serving stale CSS/JS.
2. Is your OS set to **Reduce Motion** (macOS: System Settings → Accessibility → Display → Reduce motion; Windows: Settings → Accessibility → Visual effects → Animation effects)? If yes, that alone would explain "no motion" and the site is behaving correctly.

If both are "no / not sure," I'll proceed with Step 1 + Step 3 (finish wiring the deferred utilities) as the default.
