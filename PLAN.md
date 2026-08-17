# Fable 5 pass — Cisco plan

Fable owns visual. Cisco owns locks and the live site. No Vera designer pass.

## Live site (HARD)

Do not touch `/opt/data/veep-2-0` or `nycddg/veep-2-0`.
This clone has push disabled. No Vercel. No production deploy.
Cisco cherry-picks winners after Dave QA.

## Roles

- **Fable:** visual/graphic plan and later polish
- **Cisco:** isolation, locks, cherry-pick to live
- **Vera:** not in this loop

## ChatGPT

Posture kept (polish, not redesign). Type spec thrown out: Mono is chrome only, heads 500. No launch-blocker frame. One Pass 0 plan, not two mega-audits.

## Sequence

1. Fable Pass 0 — inspect this clone, write `FABLE-PLAN.md` + `AUDIT.md`. No product edits.
2. Dave reviews.
3. Pass 1 on this clone only.
4. Dave visual QA.
5. Cisco cherry-picks to live.

## Pass 1 allowed / forbidden

Allowed: spacing and type-scale inside the existing mobile ladder; hairline/card/button/FAQ/form states; quiet hover/focus; leftover Lovable soup; a11y; image/font perf; extend existing VT/reveal motion.

Forbidden: new typeface or Mono headlines; new canvas motif / float / mobile matrix; CTA destination or homepage primary label; copy/strategy/proof numbers; default theme flip; second motion library.

## Open

Folder: `/opt/data/projects/veep-work-fable`
Model: `claude-fable-5` with thinking=true, context=1m, effort=high.
Do not open `/opt/data/veep-2-0`.
