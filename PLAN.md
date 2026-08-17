# Fable 5 pass — Cisco plan (optimized from ChatGPT)

Source ChatGPT prompts: https://docs.google.com/document/d/1oczj7HzqLATmVIuIMXHTdn48lVP820eJKcqdfky1HZQ/edit

## Verdict

ChatGPT is **directionally right** (polish, not redesign; restrain motion; kill Lovable slop).
It is **not sound as written**.

Breaks:
1. Type spec is inverted. Mono is chrome, not headlines. Weight ceiling is 500, not 600.
2. Site is already live (Phases 0–5). There is no “must fix before launch.”
3. Two unbounded audits will chew through Dave locks (canvas, CTA, 95%/matrix, mobile hides).
4. Ignores Vera / DNA / issue #2 / existing VT + reveal motion.
5. Running Fable against live `veep-2-0` main will ship to veep.work. PAT historically pushes main.

## Isolation

This directory is a **disconnected clone** of `cb0bcf5`.
Remote `live-readonly` is fetch-only. Push URL is disabled.
Dave QA here or on a future private preview project. Cisco cherry-picks winners to live.

## One pass, not two mega-audits

### Pass 0 — map (no edits)
Inventory routes, tokens in `src/styles.css`, OperatorCanvas, CTA primitives, forms, VT/reveal CSS.
Diff against LOCKS.md. List only lock-safe polish.

### Pass 1 — fit and finish (Fable)
Allowed:
- Spacing / type-scale consistency **inside** the mobile ladder
- Hairline / card / button / FAQ / form state consistency
- Quiet hover/focus, FAQ height animation, form loading/error
- Residual Lovable class soup, unused imports, dead files
- A11y: labels, focus rings, accordion keyboard, tap targets
- Perf: image sizes, font loading, CLS from motion

Forbidden:
- New typeface or Mono headlines
- New canvas motif / float / mobile matrix
- CTA destination or homepage primary label changes
- Copy/strategy/proof number changes
- Default theme flip
- Second motion library (Framer, GSAP, spring kits)

### Pass 2 — harden (only if Pass 1 is clean)
Forms (/contact /join) submit + notify path, join-not-Fillout, redirects, sitemap, console errors.
SEO/security package already shipped on live — verify, do not restyle via meta.

## Sequence

1. Read LOCKS.md
2. Pass 0 written into `AUDIT.md` (short)
3. Implement Pass 1 in small commits
4. `bun run build` (+ lint/type if present)
5. Stop for Dave visual QA
6. Only then Pass 2

## Open in Cursor

Folder: `/opt/data/projects/veep-work-fable`
Model: Claude Fable 5. Pass required model params (thinking/context/effort). Bare `claude-fable-5` dies empty.
Do not open `/opt/data/veep-2-0`.
