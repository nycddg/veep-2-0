# Homepage mobile cleanup plan

Goal: shorten the homepage scroll and reduce redundancy on mobile by hiding or abbreviating low-priority sections while keeping the conversion path intact.

## Proposed mobile treatment

Keep these sections visible (they carry the core pitch and CTA):

1. Hero — keep as the main hook
2. "What Veep is" definition — keep, short and useful for SEO/context
3. Problem / alternatives — keep, but maybe condense the "Instead of" grid
4. Solution / Veep model — keep
5. Benefits — keep, possibly as 3-up grid instead of 6-up
6. Engagements — keep
7. How it works — keep
8. For portfolios — keep (secondary CTA)
9. Objections — keep
10. FAQ mini — keep but may condense
11. Final CTA — keep

Hide these sections on mobile (`< md`):

- Operator spotlight rail — already a carousel; hiding it removes a large interactive block and reduces cognitive load on a small screen. The network impact stats inside this section go with it.
- Proof case studies — the three case-study cards are detailed proof; they can be hidden on mobile without losing the core promise, since benefits and social proof already support it.
- Testimonials — the quote/testimonial block inside the proof section is hidden along with proof.
- "Why Veep" comparison table — this is a long, detailed comparison grid. On mobile it stacks into a long list. Hiding it removes redundancy after the problem/alternatives section already covers the same idea.

## What stays but gets tightened

- Operator canvas match badge and match matrix are already hidden on small screens (`hidden sm:*`). Leave as is.
- Benefits grid can collapse from 6 items to 3 items, or keep all 6 in a 2-column grid.
- Final CTA button remains standard-sized (not full-width), already addressed in prior cleanup.

## Implementation steps

1. Add responsive `hidden md:block` wrappers to the Operator spotlight, Proof, and Differentiation sections in `src/routes/index.tsx`.
2. Verify the homepage still links logically (no section anchor target becomes a dead link).
3. Test the mobile viewport and confirm the scroll length is meaningfully shorter.
4. Build and run a quick preview check at mobile width to ensure no visual regressions.

## Notes / risks

- The "Operator spotlight" section contains network impact stats. If you want those stats to remain visible on mobile, we can extract them into a separate small section instead of hiding the whole block.
- The "Why Veep" table is useful for desktop comparison; hiding it on mobile means mobile users won't see the detailed breakdown, but the problem and benefits sections already communicate the same value.
