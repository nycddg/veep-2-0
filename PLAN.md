# Veep redesign — active execution plan

Updated 9 October 2026 following Dave’s first-principles redesign brief and homepage annotations.

This repository is the local preview only. Do not touch or deploy `/opt/data/veep-2-0`, push to `nycddg/veep-2-0`, or reconnect Lovable. Work in small commits on `fable/polish`; keep the build green.

## Read and execute

1. Read [LOCKS.md](LOCKS.md) for protected behavior and brand constraints.
2. For the November 24 redesign references, open the [Veep Brand Standards index](design/references/veepwebsitenew/index.html) for the brand guidelines, design spec, visual library, motion studies, and offers and pricing. The bundle also includes the [brand system plan](design/references/veepwebsitenew/brand-system-plan.html), [visual range review](design/references/veepwebsitenew/visual-range-review.html), and [standards audit](design/references/veepwebsitenew/standards-audit.md).
3. Read [design/VEEP-REDESIGN-PLAN.md](design/VEEP-REDESIGN-PLAN.md) for the implementation roadmap, page purposes, dependencies, and acceptance criteria.
4. Resume the active entry in [design/IMPLEMENTATION-BATCHES.md](design/IMPLEMENTATION-BATCHES.md). Do not start multiple unrelated page batches together.
5. Use [design/VEEP-DESIGN-SYSTEM.md](design/VEEP-DESIGN-SYSTEM.md) and the existing `src/components/site/system/` implementation for the current codebase. Add to this architecture rather than building a parallel system.

The earlier polish-only mandate and fixed OperatorCanvas/homepage-layout requirements are superseded. Existing components, including the homepage, are inputs to evaluate. They are not visual locks.

Every batch records its purpose, affected files, retained content, deliberate removals, responsive transformation, and actual verification. Finish or explicitly defer its exit criteria before expanding scope. A green build alone does not establish visual readiness.
