# Veep redesign — implementation batches

9 October 2026 · Local preview only · `fable/polish`

## Direction that must survive each batch

The current homepage is directionally useful, not memorable or final. It is not the reference standard to which the redesign must conform. Existing layouts, components, icons, punctuation, spacing, and motion may be replaced when they weaken the page’s purpose.

Keep the proposition, supported evidence, commercial responsibilities, real people, working destinations, and Veep foundations. Material supplies system logic; Veep supplies expression. No yellow. No generic Material reskin. No requirement to preserve a legacy shape or layout merely because it already exists.

## Execution protocol

1. Read `LOCKS.md`, `PLAN.md`, the roadmap, and the active batch below. Check current Git changes before editing.
2. State one communication problem and a bounded deliverable. Name the files/routes to be changed and the dependencies needed first.
3. Decide hierarchy and static relationships before adding movement. Give each surface, shape, and interaction a purpose.
4. Implement one coherent direction. Do not simultaneously explore alternative style systems on different pages.
5. Compare against actual source content and rendered screenshots. Record intentional copy removals; never invent claims, behaviors, or successful checks.
6. Verify affected breakpoints, themes, controls, routes, and the build. Fix problems within this batch before widening the work.
7. Commit only this batch’s files. Record what is complete, what remains provisional, and the next batch’s starting point. Preserve unrelated edits.

## Ordered batches

| Batch                                             | Scope / dependency                                                                                                                                                                                        | Concrete review checkpoint                                                                                                                                                     |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **01 — Homepage composition pilot**               | Latest annotated concerns: opening hierarchy, punctuation, client ticker, ownership explanation. Reconcile the historical guidance that locks the old layout.                                             | One real opening-to-ownership sequence, desktop/tablet/mobile, dark/light; explicit copy and layout decisions. This does not claim the whole homepage is final.                |
| **02 — Foundations and references**               | Import curated Material documentation and provenance into the agreed `design/references/material3/` folder. Consolidate the translation layer and extend existing tokens/type/layout/state roles.         | Paired specimen containing long text, real profiles, surfaces, controls, and legible static diagram states. No contradictory rules or new parallel architecture.               |
| **03 — Shared components and behavior**           | Depends on 02. Refine navigation, links, actions, disclosures, profiles, and presentation-only form states. Consolidate motion lifecycle and add the shared persistent motion preference.                 | Keyboard/touch/state matrix in the specimen, including reduced motion and persistence. Existing submissions, booking URLs, and menu semantics stay intact.                     |
| **04 — Complete homepage**                        | Use pilot feedback plus 02–03 to reconsider the whole page: hero, client evidence, ownership, audience paths, proof, people, close, and transitions. Nothing is locked solely because it is in the pilot. | Full homepage at 1440, 1024, 768, 390, and 320px in both themes. Review actual animation, static states, hierarchy, responsiveness, and interaction before broader rollout.    |
| **05 — For Companies**                            | Apply the validated system to a mandate-led page. Agent Teams stays a restrained section.                                                                                                                 | Scope selection, ownership responsibilities, proof, integrated operator evidence, and working deep links.                                                                      |
| **06 — For Funds**                                | Reuse proven foundations, not the Companies page template.                                                                                                                                                | One relationship above independent company mandates; lifecycle and commercial distinctions remain legible at compact widths. Review together with Companies before proceeding. |
| **07 — Pricing**                                  | Complete comparison primitives with exact prices and units.                                                                                                                                               | Clear commercial comparison in both themes and at all widths; no invented selection, recommendations, discounts, or purchase flow.                                             |
| **08 — About and Join**                           | People-led composition and cohesive portraits; apply shared form presentation after tracing handlers.                                                                                                     | Distinct human narratives, readable profiles, application keyboard/error/loading states, no real submissions.                                                                  |
| **09 — FAQ, MeetVeep, adjacent public utilities** | Reading and conversion patterns, then Contact/status consistency.                                                                                                                                         | Appropriate page hierarchy, working links/disclosures, unchanged legal/form/SEO behavior.                                                                                      |
| **10 — Coherence and cleanup**                    | All earlier batches. Audit relative motion intensity, preferences, theme/adaptive matrix, accessibility and performance. Remove only proven-unused legacy code.                                           | Final evidence tied to the actual revision, one canonical system, green build, explicit remaining exceptions.                                                                  |

Batches are serial design units, not instructions to spawn agents. If a batch becomes too broad, split it at a concrete reviewable boundary rather than editing more pages in parallel. Routine work within an authorized batch does not require repeated approval. A new page does not inherit the previous page’s layout by default.

## Batch 01 — decision and change record

**Status:** implemented; verification recorded below. This is an early composition review, not final homepage acceptance.

**Problem:** the hero already demonstrates work leaving the executive center. The next section repeated that problem in a separate failure tree next to a process card. Decorative coral periods and ticker arrows also survived from an older visual treatment without explaining anything.

**Decision:** give the opening greater typographic scale while retaining its coherent copy → motion → action ordering. Let the next section resolve the proposition in one full-width brand-color chapter. A single path joins the four delivery responsibilities. Blue is the ownership field; coral is the mandate travelling through it. The rest of the homepage waits for its own full-page composition batch.

**Source scope:** `src/routes/index.tsx`, `rebuild/OwnershipDiagram.tsx`, `rebuild/ClientTicker.tsx`, `system/home.css`, `system/tokens.css`, and governing design documentation. `ClientTicker` currently has only one rendered consumer, the homepage. No other route, form, navigation, image asset, booking destination, or animation library changed.

**Retained:** exact hero proposition, subhead, CEOs/funds body line, no eyebrow, existing circular work-loop semantics and timing, booking label/URL, all 16 client names, four process labels/descriptions, client decision boundary, source attribution and commercial terms.

**Removed or relocated copy, individually:**

- “The work gets an owner.” moves from the process card to the chapter heading.
- “With Veep” moves with that heading; it is a chapter label, not a hero eyebrow.
- “Veep gives companies and funds…” remains unchanged, now directly below the chapter statement.
- “It can’t all land back on your desk.” and the failure-tree descriptions (team capacity, pending permanent hire, outside advice, and CEO-desk return) leave this section because the hero already presents the same problem. They are not rewritten into new service claims.
- “Critical work. No clear owner.” and “Fundraise · GTM reset · Operating gap” leave with the obsolete failure tree. Those needs continue to be represented by the proposition and audience copy elsewhere on the page.
- The repeated sentence beginning “The operating partner model found inside top VC and PE firms…” is removed; the same point is already stated in the retained introduction.
- The client/advisory responsibility sentence moves below the complete process; its wording and distinction remain intact.
- Heading periods become normal text color. The ticker’s decorative arrows are removed without replacing them with another decorative symbol. The ownership link keeps its label and `/for-companies#benefits` destination, with an underline and no arrow.

**Static relationship:** four ordered responsibilities, one path, one work marker at delivery. All labels and descriptions are readable without motion. There is no synthetic dashboard, new metric, second owner symbol, or hidden essential content.

**Motion:** one 4.6-second progression when the process enters view; no loop competing with the hero. Desktop pauses at the four ordered stages. Compact layouts use a continuous vertical advance alongside the same reading order. Existing offscreen/document-hidden pause and reduced-motion handling are retained. No additional control or library was added.

**Responsive transformation:** large centered opening; four process columns above 800px; one vertical path at and below 800px. Mobile title scale stays comparable to the hero. The brand-color chapter pairs periwinkle and ink deliberately in both themes.

### Verification

- Browser opening checked at 1440, 1024, 768, 390, and 320px in both themes. DOM measurements confirm no horizontal page overflow at the measured widths; screenshots confirm the copy → motion → CTA order and responsive type.
- Ownership chapter visually checked at desktop, tablet, and compact widths down to 320px. Four columns become one vertical reading sequence without shrinking the descriptions. The periwinkle/ink field remains consistent in light and dark modes.
- Verified all 16 client names remain; decorative ticker arrows and homepage coral punctuation are absent.
- Both homepage booking actions retain `https://schedule.fillout.com/t/3AddME1CYfus`. Clicked the ownership link and confirmed `/for-companies#benefits`; no forms were submitted.
- Confirmed the process uses one finite animation and reaches its final transform. Scrolling/focusing below the section changes it to paused and the hero to `data-playing="false"`. Mobile menu/theme control exercised while checking light mode; restored dark mode afterward.
- No browser console errors observed in the reviewed route flow.
- Focused ESLint and Prettier checks passed. Production build passed. No additional test framework or redundant unit tests were introduced for these presentation changes.
- Reduced-motion static behavior was inspected in the existing shared hook and CSS: animation is disabled and all text plus the complete path remain. OS-level reduced-motion switching was not simulated in this browser run. Full accessibility/performance acceptance and the persistent motion preference remain in later batches.

Review captures live outside the source tree at `/Users/dave/.codex/visualizations/2026/10/08/01a11cba-9c61-7091-878a-af7c099dd3d0/homepage-batch-01/`. They include desktop opening/ownership, compact ownership, and light/dark breakpoint captures. Do not infer full-site readiness from this pilot.

### Next starting point

Batch 02: the curated reference import, Material → Veep application document, and paired system specimen. Treat the pilot as a candidate to evaluate, not a new immovable rule. Shared persistent motion preferences and full-homepage rhythm remain planned work; neither is claimed complete here.
