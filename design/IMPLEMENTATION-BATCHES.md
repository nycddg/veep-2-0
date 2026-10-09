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
| **01B — Homepage narrative correction**           | Dave’s review of 01: retain stronger hero type; restore the explicit diagram’s explanatory job; lead with customer stakes, impact, and evidence.                                                          | One continuous problem → ownership → impact → proof → people argument, with process secondary and audience routing after evidence.                                             |
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

**Status:** reviewed. Dave accepted the stronger hero typography but rejected the process-first hierarchy and removal of the explicit diagram. The historical decisions below are superseded by Batch 01B. They are retained to explain the correction, not as current design instructions.

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

## Batch 01B — homepage narrative correction

**Status:** implemented and verified for narrative review. Shared-system rollout and final homepage acceptance remain later work.

**Problem:** the prior pass confused emotional implication with explicit explanation. Its removal of the second diagram erased the reason alternatives still leave the executive holding the work. The blue process chapter then gave Veep’s method more importance than the buyer’s problem, impact, or evidence. Audience routing interrupted the argument before the result.

**Decision and sequence:**

1. Preserve the stronger hero, approved copy, circular work loop, CTA, and clean 16-client ticker.
2. Restore “It can’t all land back on your desk.” Explain why team capacity, a pending permanent hire, and outside advice still return unresolved decisions to the executive.
3. Make the ownership change spatially explicit: desk → senior operating partner → completed work. Retain remaining work at the executive center and the explicit client decision boundary.
4. Put the four delivery responsibilities in a native “How the work gets delivered” disclosure. They remain available without leading the page.
5. Give the large blue field and display scale to capital readiness, repeatable revenue, and commercial expansion.
6. Follow immediately with the $6M raise, 25% project-margin improvement, and Atomic Audio testimonial. Keep each case and speaker attribution intact.
7. Follow with named operator credentials, then Companies/Funds paths and the existing booking close.

**Bounded source scope:** `src/routes/index.tsx`, `rebuild/OwnershipDiagram.tsx`, `system/home.css`, `system/tokens.css`, and these three governing design documents. No changes to other page compositions, shared controls, profile assets, public navigation, commercial terms, booking behavior, or form handlers. Unrelated working changes remain outside this batch.

**Copy and evidence record:**

- Restored the problem heading, “Critical work. No clear owner.”, the three alternative descriptions, and the executive return explanation from the pre-01 homepage. “The CEO’s desk” becomes the direct label “Your desk.” The old “Fundraise · GTM reset · Operating gap” row remains removed; concrete priorities now have a full impact chapter.
- Added the short hinge “The team is busy. The hire takes time. Advice still needs someone to act on it. The work keeps coming back to you.” It summarizes the three existing alternatives, without a new service claim.
- Preserved the operating-partner-capacity proposition and client responsibility for strategic decisions and approvals. Added a short transition naming the senior operating partner and support already described by the delivery model.
- Preserved all four process descriptions and the advisory/operating distinction inside the disclosure. “With Veep” remains attached to the accountable operating partner.
- Added “The work moves. So does the business.” as the impact transition. The three priorities, benefit lines, and supporting work descriptions come from `rebuild/WorkMandate.tsx`; “Revenue repeatability” is presented as “Repeatable revenue,” matching Dave’s language.
- Kept the homepage’s $6M case and added the existing software-studio 25% project-margin case from `routes/for-companies.tsx`, with its operating work. The exact Atomic Audio quotation and Jerry Kolber attribution come from that same source. Neither anonymous case is attributed to Atomic Audio.
- Added “The work. The difference it made.” as the proof heading; changed “Inside the engagement” to “Inside the engagements” for the two-case spread. Link still targets `/for-companies#proof`.
- Operator profiles, audience-path copy, and closing copy remain unchanged. Audience paths move below profiles. The impact link targets the existing `/for-companies#work` anchor.

**Static semantics:** the three alternatives converge on the desk. The blue route leaves that center, passes through the framed senior operating partner, and ends at delivery. Supporting text names execution ownership and Veep’s accountability. The coral work object advances; other work remains at the desk. All labels, responsibilities, and paths are present without animation.

**Motion and adaptation:** above 600px, blue work markers converge during the first 1.5 seconds; one coral mandate then advances through the owner to delivery over 2.2 seconds. This is a finite sequence using the existing offscreen/hidden/reduced-motion lifecycle. At and below 600px, alternatives feed a vertical desk → owner → completion relationship, shown in its static resolved state. The hero’s existing continuous loop is unchanged. No pause control, animation dependency, or content entrance gate is added.

**Visual hierarchy:** quiet section tone for the explicit diagram; periwinkle/ink for impact in both themes; a light result/testimonial spread; then portrait evidence and audience navigation. `--v-surface-impact` / `--v-on-impact` replace the previous ownership-field tokens. No new colors, fonts, or shape vocabulary.

### Verification

- Production build and focused ESLint pass. No new unit tests for reversible layout/copy composition.
- Dark-mode DOM width checks at 1440, 1024, 768, 390, and 320px: no horizontal page overflow or overflowing narrative text. Actual diagram screenshots reviewed at desktop, 768, 390, and 320px; impact/proof reviewed at desktop and 390px.
- Light-mode diagram reviewed at desktop and 390px. DOM width checks at 1024, 768, 390, and 320px likewise report no overflow. Dark mode restored after review.
- Native process disclosure opens with pointer input and closes with Enter; all four responsibilities and the existing ownership link remain present.
- Activated the work and case-evidence links and verified `/for-companies#work` and `/for-companies#proof`; the case link was also exercised by keyboard. The three booking actions retain the canonical URL and new-tab behavior. No forms submitted.
- The desktop ownership sequence reaches its final zero-translation state and changes to paused when scrolled out of view. Reduced-motion behavior was checked in the shared hook and CSS: the complete resolved relationship remains with animation disabled. OS-level preference switching was not simulated.
- Full desktop page reviewed from hero through footer. Named portrait cards render after the proof/testimonial chapter and before audience routing. No browser console errors observed. Prettier and diff whitespace checks pass.

Review captures: `/Users/dave/.codex/visualizations/2026/10/08/01a11cba-9c61-7091-878a-af7c099dd3d0/homepage-narrative-01b/`.

### Next starting point

Use Dave’s response to this narrative correction to guide later homepage refinement. Then continue Batch 02’s curated reference import, Material → Veep application document, and paired specimen. Preserve the distinction between the hero’s inference and the diagram’s explicit explanation. Shared persistent motion preferences and complete site acceptance remain planned work.

## Batch 01C — canon-informed opening, October 9

**Status:** implementation authorized by Dave after the independent Studio Critic audit and supplied October 3 business/brand canon addenda. The resulting design is a review candidate, not an approved template for other pages. This entry supersedes the historical next-start instruction above.

**Communication problem:** the opening named the buyer and problem before explaining the offer; the next chapter then repeated the problem in several forms. The addenda confirm the operating-partner-capacity proposition and accountability boundary. Their older layout prescriptions do not override Dave's current hierarchy or explicit-diagram requirement.

**Change:** retain the exact H1 and current CEOs/funds audience sentence, promote that sentence to the subhead, and put the full canonical value proposition below it. Remove the former “The work you can't get to / priority that keeps slipping” subhead. Preserve copy → hero loop → CTA order. Compress the second chapter to its problem heading, explicit diagram, accountability boundary, and subordinate native process disclosure. Diagram inputs describe situations (team at capacity, hire in progress, advice in hand) rather than categories of providers. Remove the redundant problem paragraph, “Critical work. No clear owner.” label, and “The work gets an owner.” repeat heading. Restore explicit scope, quality, continuity, delivery/handoff accountability; client decisions and approvals remain explicit.

**Scope:** homepage, OwnershipDiagram, home.css, and this ledger only. No pricing, claims, booking destinations, forms, routes, hero geometry/timing, or client names changed. The diagram's small “With Veep” label uses the accessible link token and increases to 12px on compact screens.

**Review checkpoint:** actual opening and ownership renders inspected at desktop, tablet and mobile in the course of this batch; full six-view theme/size matrix follows after the contiguous homepage refinements. The mobile opening contains the complete proposition, graphic and CTA within 844px. The diagram retains a horizontal relationship above 600px and vertical relationship below it; all meaning is available without motion. Build/lint results and final evidence are recorded with the completed review below.
