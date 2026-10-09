# Veep redesign — active execution plan

Updated 9 October 2026 following Dave’s first-principles redesign brief and homepage annotations.

This repository is the local preview only. Do not touch or deploy `/opt/data/veep-2-0`, push to `nycddg/veep-2-0`, or reconnect Lovable. Work in small commits on `fable/polish`; keep the build green.

## Read and execute

1. Read [LOCKS.md](LOCKS.md) for protected behavior and brand constraints.
2. Read [design/VEEP-REDESIGN-PLAN.md](design/VEEP-REDESIGN-PLAN.md) for the approved direction, page purposes, dependencies, and acceptance criteria.
3. Resume the active entry in [design/IMPLEMENTATION-BATCHES.md](design/IMPLEMENTATION-BATCHES.md). Do not start multiple unrelated page batches together.
4. Use [design/VEEP-DESIGN-SYSTEM.md](design/VEEP-DESIGN-SYSTEM.md) and the existing `src/components/site/system/` implementation. Add to this architecture rather than building a parallel system.

The earlier polish-only mandate and fixed OperatorCanvas/homepage-layout requirements are superseded. Existing components, including the homepage, are inputs to evaluate. They are not visual locks.

Every batch records its purpose, affected files, retained content, deliberate removals, responsive transformation, and actual verification. Finish or explicitly defer its exit criteria before expanding scope. A green build alone does not establish visual readiness.
