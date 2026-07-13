
# Light mode + theme toggle

Goal: keep every component, layout, font, and spacing exactly as-is. Only the color palette flips. User picks via a header toggle; preference persists across visits.

## Approach

The site's colors are already routed through semantic CSS variables in `src/styles.css` (`--background`, `--foreground`, `--cream`, `--ink`, `--stone`, `--border`, `--rule`, `--surface-*`, `--card`, etc.). Components use classes like `text-cream`, `bg-background`, `border-white/10`. Rather than rewriting every component, we redefine what those tokens resolve to when a `.light` class is present on `<html>`.

This means `text-cream` continues to mean "primary text on surface" — dark ink in light mode, off-white in dark mode. Same for `bg-background`, `bg-card`, `border-border`, etc.

## Steps

1. **`src/styles.css`** — add a `html.light { … }` block that overrides the token values from `:root`:
   - `--background`, `--surface-ink`, `--surface-raised`, `--surface-band` → warm off-whites / pale grays (paced light bands mirroring the dark trio).
   - `--foreground`, `--cream` → deep navy ink (so `text-cream` stays readable).
   - `--ink` → cream (so inverted pills like `bg-cream text-ink` still invert correctly — the primary CTA becomes dark-on-light in dark mode, light-on-dark in light mode).
   - `--stone`, `--stone-soft` → mid/soft grays with AA contrast on the light canvas.
   - `--rule`, `--border`, `--input` → dark-on-light equivalents (`oklch(0 0 0 / 0.10)` etc.), replacing the `white / 0.x` values.
   - `--card`, `--muted`, `--secondary` → light glass (`oklch(0 0 0 / 0.04)`).
   - `--forest`, `--accent`, `--accent-gold`, `--accent-coral` → keep the same brand blue/coral (they read on both).
   - `--shadow-elegant`, `--shadow-float` → lighter shadows for the light canvas.
   - Also handle the few raw-color utilities in components (`border-white/10`, `bg-white/5`, etc.) by adding a small set of overrides scoped under `html.light` in the same block (a handful of `html.light .border-white\/10 { border-color: … }` rules) so we don't have to touch component files. Scope stays limited to the ~5 utilities actually used for chrome (`border-white/8`, `border-white/10`, `bg-white/5`, `divide-white/8`, `bg-background/85`).

2. **`src/lib/theme.tsx`** (new) — small `ThemeProvider` + `useTheme()` hook.
   - State: `"dark" | "light"`, default `"dark"`.
   - On mount (per SSR rules, inside `useEffect`), read `localStorage.veep-theme` and apply the class to `document.documentElement`.
   - `setTheme` writes localStorage, toggles the `light` class, and updates the `<meta name="theme-color">` content.
   - Accept a brief first-paint flash in dark (matches current behavior); no inline pre-hydration script needed for v1.

3. **`src/routes/__root.tsx`** — wrap `RootComponent`'s tree in `<ThemeProvider>`.

4. **`src/components/site/ThemeToggle.tsx`** (new) — sun/moon icon button (lucide `Sun` / `Moon`), 40×40 tap target, `aria-label="Toggle color theme"`, `aria-pressed`. Uses the same `motion-link` styling as other header controls.

5. **`src/components/site/SiteHeader.tsx`** — drop `<ThemeToggle />` into the desktop CTA cluster (before the Book intro pill) and into the mobile menu block (above the Book intro pill).

## Technical notes

- No component files change beyond `SiteHeader.tsx` and `__root.tsx`. All other pages inherit the palette flip via CSS token overrides.
- Because `--cream` and `--ink` swap roles in light mode, patterns like `bg-cream text-ink` (primary CTA pill) automatically become dark-on-light in dark mode and light-on-dark in light mode — CTAs stay high-contrast in both.
- Accent brand blue (`#789fff`) and coral (`#ec6b66`) are kept in both modes for brand continuity; contrast passes on both canvases.
- Focus rings, motion utilities, fonts, radii, shadows tuning aside — all unchanged.

## Out of scope

- No layout, spacing, typography, or copy changes.
- No per-page opt-outs (e.g. forcing a section to stay dark). If desired later, we can add a `.force-dark` utility.
- No system-preference auto-detection in v1 (defaults to dark; user toggles).
