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

## Batch 01D — impact, evidence and next step

**Communication problem:** the large impact field delayed the evidence, narrow mobile profile captions weakened credibility, and two substantial audience pitches restarted the argument before the close.

**Change:** three open impact columns on desktop, paired title/description rows on tablet, stacked rows on mobile. Combine overlapping benefit and scope descriptions while retaining capital/transaction readiness, growth beyond the founder, and expansion scope. Reduce proof-heading repetition and the gap before the case figures. Preserve both case results, supporting work, exact Atomic Audio quote and Jerry Kolber attribution. Retain all four named operator credentials with their employers. At 600px and below, integrate a portrait beside its name, role and evidence on one surface. Replace the repeated audience pitches with compact Companies/Funds routes. Preserve the exact recognition close and practical intro-call next step; remove its repeated three-sentence problem recap.

**Scope:** homepage, home.css and this ledger. No commercial terms, offers, forms, destinations, source images, or other pages changed. Agent Teams remains outside the homepage pitch.

**Review checkpoint and verification:** full rendered page inspected at 1440×1000, 768×1024 and 390×844 in both themes. The blue impact field remains intentional in both themes; proof retains a light surface. No horizontal document overflow at inspected widths. Mobile results start at approximately 2681px (audit baseline 3179px); page height is 6694px (baseline 7631px), despite the clearer opening proposition. Desktop page height is 5514px (baseline 6506px). These are pacing checks, not a conversion claim. Portrait crops and adjacent evidence were inspected at actual mobile size. All 16 ticker clients and all homepage booking links remain. Focused ESLint and production builds passed after 01C and 01D; unrelated working changes remain unstaged.

**Evidence:** six full-page theme/size captures in `/Users/dave/.codex/visualizations/2026/10/09/01a121b2-13c8-7c22-ad99-ae4b3eaf3595/canon-refinement/`. Shared interaction fixes follow as a separate batch; this composition has not been marked approved by Dave.

## Batch 01E — navigation and reader motion preference

**Communication/access problem:** a mobile menu left open during a desktop resize could keep trapping keyboard focus inside hidden navigation. Automatic motion had no persistent site setting. The small ownership label failed normal-text contrast in light mode (corrected in 01C). Testing the reduced-motion state also exposed a clipped static client list.

**Change:** close the mobile menu at the desktop breakpoint and return affected focus to the visible home link. Add a native, labelled 44px Motion preference in the footer: follow the device setting or reduce motion. Persist the choice, synchronize it across consumers and tabs, and retain it for the current visit if storage is unavailable. Shared scenes, entry sequences and operator spotlights honor it; reduced motion shows complete static compositions and stops automatic spotlight rotation. The ticker now pauses offscreen and wraps all 16 names in its static state, with Trusted by still anchored left and vertically centered. No ticker arrows or visible ticker pause control added. No animation library added.

**Scope:** SiteHeader, SiteFooter, MotionPreference, the shared motion-preference hook/styles, existing motion consumers and home.css. No route composition outside the homepage, offers, forms, booking URLs, commercial claims or testimonial attribution changed. Prior unrelated working changes were preserved.

**Rendered and interaction checkpoint:**

- Footer preference reviewed at 1440, 768 and 390px in both themes, including visible keyboard focus and a 44px control. Additional 320px profile/static-ticker checks in both-theme review confirmed no document overflow; the static ticker itself has no horizontal clipping.
- Reproduced mobile-menu open → desktop resize: menu is removed, focus lands on the visible home link, next Tab reaches For Companies at its normal 44px target. Escape and keyboard disclosure behavior remain functional.
- Selected Reduce motion, reloaded and confirmed persistence after hydration. Hero reports `data-animate=false`; ownership/ticker report `still`; all 16 clients remain. The native menu also changes by Space → arrow → Return. Returning to the device setting restarts the normal hero loop. Scrolling away pauses both hero and ticker.
- Followed the work, proof and accountability links to `/for-companies#work`, `#proof` and `#benefits`; target headings sit below the sticky header. Followed the Funds route. Reduced motion persists into Companies: its three scenes are static and its operator spotlight is paused. All three desktop homepage booking links retain the canonical Fillout URL and `_blank` behavior. No forms submitted.
- Computed light-theme ownership-label contrast is 4.80:1 (`#406aba` on `#f6f4f1`), above the 4.5:1 normal-text threshold. Brand display/heading typography, blue/coral palette, and both themes remain intact.
- A clean reload and final reviewed interactions produce no new browser warnings or errors. A development-only hot-reload hook-order error occurred while replacing the old hook and cleared on reload; it did not recur in the final code. Focused ESLint, Prettier, production build and diff whitespace checks pass.
- OS-level reduced-motion switching was not driven through system settings. Its live media-query listener and CSS fallback were inspected; the explicit site reduced-motion branch was exercised in the real browser. Image responsive-source optimization remains a separate performance opportunity; no measured loading-speed claim is made.

**Final review state:** implementation complete for these three scoped refinements; user design acceptance remains open. Full-page 01D captures plus final opening, mobile profile, static-client and preference captures are in the evidence directory above. The preview is restored to the homepage in dark mode with device motion settings. Broader redesign batches remain separate work and do not inherit this homepage composition as an approved template.


## Batch 01F — audience placement and client voice

**Communication problem:** Dave requested an earlier Companies/Funds choice after business impact and a more prominent Atomic Audio testimonial.

**Change:** move existing audience routes directly below impact; give the unchanged testimonial and Jerry Kolber attribution their own coral section between results and operators, with larger type. No added animation.

**Scope and checkpoint:** homepage, home.css and this ledger. Rendered at 1280, 768 and 390px in both themes; no horizontal overflow. Coral/ink contrast is 6.16:1. Quote, case claims, destinations and other content preserved. Production build, focused lint, formatting and diff checks pass. Evidence: canon-refinement/annotations in the October 9 visualization directory. Implemented for review, not blanket design approval.


## Batch 01G — operator history and newsletter

**Communication problem:** Dave requested restoration of operator-company history below the profiles and a newsletter registration section above the final booking invitation.

**Change:** extend the existing ticker with the 40 company names already present in ClientStrip, labelled “Our operators have worked at” to distinguish career history from Veep clients. Reuse the existing fading track, hover/focus pause, offscreen lifecycle and persistent reduced-motion setting. Add a tonal “Zero to Something” section with Dave’s “Field notes for founders building in the messy middle.” copy and a secondary registration action to his supplied Mailchimp URL. Booking remains the final primary action. No form payloads or handlers changed.

**Scope:** ClientTicker, homepage, home.css and this ledger. Existing dirty ClientStrip and other unrelated files remain untouched. No new company claims or animation library.

**Review checkpoint:** actual rendered profiles, ticker, newsletter and close inspected at 1280, 768 and 390px in both themes. Newsletter stacks below desktop; action remains comfortably sized. Mobile reduced-motion state displays all 40 names without horizontal document overflow and reports animation:none. Keyboard Enter on registration reaches “Zero to Something Registration” at the supplied Mailchimp URL; no subscription submitted. Restored homepage, dark theme, device motion setting and normal viewport. Focused lint, formatting, production build and diff checks pass. Captures: canon-refinement/annotations/operator-newsletter in the October 9 visualization directory. This completes the requested local changes; broader design acceptance remains open.


## Batch 01H — expanded color specification

**Communication problem:** the palette lacked a documented range of accent containers and a complete light-mode neutral hierarchy.

**Change:** save the agreed blue/primary, slate/secondary, coral/tertiary families, complete paired light/dark surfaces and foregrounds, outlines, signature fields, validation colors and migration rules in VEEP-DESIGN-SYSTEM.md. This is a documentation checkpoint before implementation.

**Scope:** design system and ledger only. Existing uncommitted implementation files preserved. Next: apply roles with the authorized homepage recognition and newsletter batches; actual newsletter issue pending Dave's source.


## Batch 01I — color roles and customer recognition

**Communication problem:** restore concrete recognition before the explicit desk-to-owner explanation, and apply the expanded palette across backgrounds and foreground elements coherently.

**Change:** add one compact recognition paragraph naming fundraising, a slipping GTM reset, margins and a leadership gap. Preserve the strong hero, explicit ownership diagram, secondary process disclosure, impact → audiences → results sequence, exact testimonial, operator credentials and both tickers. Add full light/dark accent/container and neutral-surface roles to tokens, map existing surface/link/outline/focus aliases to them, retain signature impact/coral fields and neutral booking controls. Selected states use the secondary container. The impact section uses an ink focus ring against its blue surface. No unrelated typography changes included in this commit.

**Review checkpoint:** actual problem and newsletter renders at 1280, 768 and 390px in both themes, with verified viewport widths and no document overflow. An initial viewport control did not affect an existing user tab; those captures were replaced by verified captures from an isolated review tab. Homepage text/background sampling returned no ratios below 4.5:1 (93 light, 99 dark samples; this is not a complete accessibility audit). Full-page color sequence and actual scrolled proof/testimonial/profile surfaces reviewed. All original booking destinations and attribution retained. Newsletter-specific source and styling follow as Batch 01J.

**Evidence:** `/Users/dave/.codex/visualizations/2026/10/09/01a121b2-13c8-7c22-ad99-ae4b3eaf3595/canon-refinement/expanded-colors/`. Focused lint, formatting and production build pass. Shared tokens are available to other pages; this review does not certify every unmigrated page composition.


## Batch 01J — newsletter as evidence of operating judgment

**Communication problem:** the newsletter had space but no concrete demonstration of its editorial value.

**Change:** retain Zero to Something and Dave's messy-middle tagline, add a concise capital/revenue/people editorial promise and a real field-note preview. Use the published August 2026 issue supplied by Dave: “Nobody Is Deciding About AI,” its exact short excerpt (“Someone's job has to depend on answering the hardest questions.”), and the issue's Dave sign-off. “Read a field note” links to that issue; “Subscribe to Zero to Something” keeps the previously supplied Mailchimp registration destination. No unsupported cadence, new metric, form submission or invented issue.

**Source:** https://us19.campaign-archive.com/?u=37a4f019ed5c8b493097f1afc&id=308958e8a9 (read in the browser). The explanatory sentence about stalled AI experiments is a summary, not a quotation.

**Composition and color:** newsletter sits above the final booking invitation. Desktop uses paired publication/issue columns; tablet and mobile stack the publication, subscribe action and actual excerpt. Primary-container foregrounds apply to every label, heading, description and link; the subscribe action uses primary/on-primary, with a paired-color hover layer. Focus inherits the high-contrast newsletter foreground, not the page's default ring color. Light is pale blue with deep text; dark is deep blue with pale text.

**Verification:** six actual responsive/theme captures in the 01I evidence directory. No overflow. Keyboard activation of the field-note link reaches the supplied archive; newsletter focus ring checked in dark mode. Both ticker states become still and the hero reports data-animate=false under Reduce motion, with all newsletter content present. Device motion restored. Production build, focused lint, formatting and diff checks pass. No forms submitted. This implements the requested local revision; no push or deployment.

## Batch 01K — September field note

**Communication problem:** Dave requested the September issue in place of August.

**Change:** feature “When the Middle Gets Messier,” with its exact short excerpt about a busy company standing still, a paraphrased description about sharpening priorities, September 2026 date and existing Dave/Veep attribution. The piece connects the publication to the homepage's stalled-work problem. Update the reading destination to Dave's September archive; retain the subscription destination, publication positioning, layout and color roles.

**Source:** https://us19.campaign-archive.com/?u=37a4f019ed5c8b493097f1afc&id=fa9065ae89 (read in the browser).

**Review checkpoint:** newsletter rendered and inspected at 1280, 768 and 390px in light and dark themes, with actual viewport widths verified and no horizontal overflow. The reading link opens the September issue containing the featured title. Production build, focused lint, formatting and diff checks pass. Evidence: `canon-refinement/expanded-colors/september-newsletter/` in the October 9 visualization directory. Scope is homepage copy/link and this ledger only; unrelated working changes preserved. No push or deployment.


## Batch 01L — restore the delivery timeline

**Communication problem:** Dave requested the hidden Scope / Assemble / Own / Deliver content as a visible steps section below business impact.

**Change:** remove the disclosure from the problem chapter and place the unchanged four-step explanation directly after impact, before audience routes. Use a fine connecting line and numbered nodes, horizontal on desktop and vertical at 800px and below. Keep the heading and neutral surface quieter than the business-impact field. Preserve advisory's execution distinction, ownership link and explicit desk diagram. No new motion.

**Review checkpoint:** actual timeline and impact adjacency inspected; four steps remain legible in both themes and reduced motion. Keyboard order continues from the ownership link to the company route.

## Batch 01M — annotation details

**Communication problem:** Dave requested clearer role labels and quotation punctuation, shorter publication metadata, revised ticker/reading labels and top-aligned closing columns.

**Change:** add quotation marks around the unchanged Atomic Audio testimonial; preserve Jerry Kolber attribution. Change the intro to “Our operating partners”; shorten profile labels to Finance / Marketing / People / Growth and render them as right-aligned pills using secondary-container foreground/background roles. Change the career-history ticker label to Dave's “Companies we’ve helped build,” preserving all 40 names. Change newsletter metadata to “September 2026” and its link to “Read our latest note,” retaining the September and signup destinations. Align the closing heading with the top of the booking copy.

**Scope and verification for 01L–01M:** homepage, home.css, OperatorProof, ProfileFigure, ClientTicker and this ledger only. Both batches rendered at verified 1280, 768 and 390px widths in both themes. No horizontal overflow, clipped labels or displaced credentials. Closing heading/copy top coordinates match. Reduced-motion check retains all four steps and 40 career-history names; device setting restored. Production build, focused ESLint, formatting and diff checks pass. Temporary review tabs closed. Evidence: `canon-refinement/annotation-refinements/` in the October 9 visualization directory (final files use width/theme/area names; initial timeline-only capture attempts were superseded after viewport verification). Unrelated working changes preserved. No push or deployment.


## Batch 01N — profile alignment and photo inset

**Communication problem:** Dave requested function pills aligned with names and more space around portraits, then revised the photo scale from 90% to 95%.

**Change:** place name and right-aligned function pill in one vertically centered identity row. Allow longer names to wrap within their column. Scale each homepage portrait frame to 95% within its existing space, preserving card dimensions, credentials and image assets. Final scale supersedes the intermediate 90% adjustment.

**Review checkpoint:** actual profiles inspected at 1381, 768 and 390px in both themes; computed scale is 0.95 at every width, with no document overflow. Names and pills remain aligned; longer names wrap on mobile. Existing motion and focus behavior unchanged. Production build, focused lint, formatting and diff checks pass. Evidence: `canon-refinement/profile-95/` in the October 9 visualization directory. Scope: ProfileFigure, home.css and ledger. Unrelated work preserved; no push or deployment.


## Batch 01O — past-company lines and audience placement

**Communication problems:** Dave requested two or three past companies above each profile's achievement and asked to swap the delivery timeline with Companies/Funds routing.

**Changes:** use each operator's two existing `priorCompanies` records from spotlight-operators.ts: Industrious / Opencare; Morning Brew / The New Republic; Zocdoc / Pager Health; LVMH / Macy's. Display in IBM Plex Mono above the unchanged achievement. Preserve aligned pills and 95% photo scale. Swap the two complete homepage sections so impact → audiences → timeline → results is the sequence. No copy or destinations changed in the moved sections.

**Review checkpoint:** profile company lines and reordered sections inspected at 1381, 768 and 390px in both themes with verified viewport widths and no horizontal overflow. Confirmed computed IBM Plex Mono. Longer company names wrap on mobile. Production build, focused lint, formatting and diff checks pass. Evidence directories: `canon-refinement/profile-companies/` and `canon-refinement/audience-before-timeline/` in the October 9 visualization directory. No new motion or focusable controls. Scope: OperatorProof, ProfileFigure, home.css, homepage and ledger; unrelated work preserved. No push or deployment.


## Batch 01P — ownership wording and accountability callout

**Communication problem:** Dave requested more direct diagram language and a distinct accountability callout below it.

**Change:** use Dave's exact “A Veep operating partner,” “Owns strategy, execution, and team coordination.” and “Get the job done and hand off cleanly.” Remove “With Veep” and center the partner heading inside its existing scope. Remove the second accountability sentence as explicitly requested. Move the remaining sentence farther below the diagram into a blue primary-container callout with paired foreground and a primary leading border. This user-directed wording supersedes the earlier homepage wording; other commercial and responsibility copy remains unchanged.

**Review checkpoint:** diagram and callout inspected at actual 1381, 768 and 390px widths in both themes. No horizontal overflow; partner heading fits the mobile scope. Existing static/reduced-motion geometry retained, with no new motion or controls. Production build, focused lint, formatting and diff checks pass. Scope: OwnershipDiagram, homepage, home.css and ledger. Evidence: `canon-refinement/ownership-callout/` in the October 9 visualization directory. Unrelated work preserved; no push or deployment.


## Batch 01Q — simplify timeline footer

Remove the advisory sentence from the homepage timeline as Dave requested. The remaining “How ownership works” link now occupies the left edge of the footer without changing its destination. Reviewed actual 1381, 768 and 390px renders in both themes; link aligns with the section heading at every width and no overflow occurs. Build and focused lint pass. Evidence: `canon-refinement/method-footer/`. Scope: homepage and ledger only; unrelated work preserved, no push or deployment.


## Batch 01R — direct delivery-step copy

Use Dave's exact Scope, Assemble and Own descriptions. Match Deliver to their direct tone: “Finish the job, hand off cleanly, and agree what comes next.” Preserve the four-step structure and ownership destination. Actual rendered copy reviewed at 1381, 768 and 390px in both themes; no overflow. Build, focused lint, formatting and diff checks pass. Evidence: `canon-refinement/method-copy/`. Scope: homepage and ledger; unrelated work preserved, no push or deployment.


## Batch 01S — Own wording correction

Replace the Own description with Dave's “Drive delivery and team coordination through to completion.” Other step copy stays unchanged. Rendered at 1381, 768 and 390px in both themes; no overflow. Build, focused lint, formatting and diff checks pass. Evidence: `canon-refinement/own-copy/`. Homepage and ledger only; no push or deployment.


## Batch 01T — editorial accountability statement

**Communication problem:** Dave rejected the filled accountability strip as inconsistent with the site's design. Its banner treatment competed with the impact field and reduced the statement to notification-like body copy.

**Change:** replace the fill and leading border with an open editorial composition on the existing section surface. A fine horizontal rule separates the statement from the diagram; “Veep stays accountable” receives stronger IBM Plex hierarchy, with the rest of the unchanged sentence alongside it. Stack the two parts on mobile. Keep the gap below the diagram and preserve the business-impact color field's prominence.

**Review checkpoint:** actual diagram → accountability → impact transition inspected at 1381, 768 and 390px in both themes. Text wraps without overflow and uses existing foreground/surface roles. No animation or interaction changes. Build, focused lint, formatting and diff checks pass. Evidence: `canon-refinement/accountability-editorial/` in the October 9 visualization directory. Scope: homepage, home.css and ledger; unrelated changes preserved. No push or deployment. Revised treatment remains open to Dave's design review.

## Batch 01U — looping ownership and visible accumulation

**Communication problem:** Dave noted that the ownership diagram stopped after one pass and incoming work disappeared at the desk boundary. He also requested “Veep operating partners.”

**Change:** repeat the incoming-work, desk accumulation and delivery sequence on a shared ten-second cycle. Three incoming balls transfer at the desk boundary to matching-size dots, travel around the label, and settle alongside the existing three. Hold the accumulated work during the coral delivery movement, then clear the arrivals for the next cycle. Retain viewport/document pause behavior. Adapt the delivery path vertically on mobile; its desk entries follow the stacked connector. Static/reduced-motion states show six desk dots and the completed delivery endpoint. Change only the requested partner label; retain surrounding copy and destinations.

**Review checkpoint:** actual renders inspected at 1381, 768 and 390px in both themes, with no horizontal overflow. Live computed states confirmed arrivals, settled accumulation, delivery and a subsequent repeated phase; all moving elements use infinite cycles. Off-screen state pauses animations. The user motion preference stops all moving diagram elements and leaves the complete diagram readable; device preference restored. Production build, focused lint, formatting and diff checks pass. Evidence: `canon-refinement/ownership-loop/` in the October 9 visualization directory, including the complete reduced-motion composition. Scope: OwnershipDiagram, home.css and this ledger. Unrelated work preserved; local commit only, no push or deployment.

## Batch 01V — active work inside both circles

**Communication problem:** Dave requested an empty desk that fills with multiple items, then loses exactly one coral item to delivery. He subsequently rejected the landing grid and requested continuous pinball-like motion in both the desk diagram and hero.

**Change:** six staggered arrivals fill the desk from empty on a twelve-second loop. Individual bounded paths keep them moving below the desk label. The lower-center pickup turns coral, transfers to the delivery path, and leaves five moving items behind until reset. The pickup and outgoing marker use the same size and location; mobile scales the interior paths and retains vertical delivery. Reduced motion shows five irregularly placed desk items and the delivered coral item. In the hero, replace the blue balls' stationary holds with varied directional movement inside the circle, retaining its existing arrival, pressure, scope and extraction choreography. This supersedes 01U's three persistent dots and stationary arrangement.

**Review checkpoint:** actual 1381, 768 and 390px layouts inspected in dark/light, with no horizontal overflow. Live desk states observed at zero, six before extraction, and five with the delivery marker visible; positions continue changing between observations. Hero movement inspected in full and compact geometry. Reduced motion stops both animations and keeps readable outcomes. Off-screen pause uses the existing shared lifecycle. Build, focused lint, formatting and diff checks pass. Evidence: `canon-refinement/pinball-ownership/` in the October 9 visualization directory. Intermediate `ownership-count/` and `empty-desk-fill/` captures are superseded by this batch; some early viewport attempts were discarded after dimension checks. Scope: OwnershipDiagram, home.css, home-motion.css and ledger. No push/deployment; unrelated work preserved.

## Batch 01W — accountability and proof annotations

Apply Dave's exact “Veep is accountable” and “for scope, quality, and continuity from delivery through to handoff.” Replace the delivery description with “With the level of quality and authorship you'd expect.” Remove the accountability sentence's 48ch cap: it occupies one line at 1381px and wraps naturally on tablet/mobile without a new breakpoint or forced nowrap. Use “The difference Veep makes” and matching uppercase labels “B2B SAAS · FINANCE SCOPE” / “SOFTWARE STUDIO · GROWTH SCOPE,” preserving each case's sector and scope. Actual proof and accountability layouts reviewed at all three widths in both themes alongside 01V. Claims, figures, destinations and testimonial attribution unchanged. Homepage and shared batch ledger only; local commit, no push or deployment.


## Batch 01X — continuous outlines, wordmark, and centered ownership

**Changes:** replace the hero square’s dashed stroke reveal with a complete outline that fades in, removing corner seams. Give the hero circle and square 1.5px non-scaling strokes. Replace the diagram’s visible partner heading with the existing white/navy wordmark according to theme, retaining its accessible heading. Remove SCOPE from both proof labels. Dave’s follow-up lowers the desk and partner shapes 39px so their centers meet the unchanged progression line, vertically centers Your desk, and reduces the new wordmark by exactly 5% (112px to 106.4px, with the proportional mobile cap reduced from 70% to 66.5%). Extend the incoming connector and motion to the new circle boundary. Keep moving work below the centered label and match the coral pickup to the right-hand progression line.

**Responsive behavior and verification:** preserve the existing mobile vertical diagram; its centered desk label and proportionally smaller wordmark use the same rules, with compact internal motion coordinates. No new breakpoint. Actual 1381, 768 and 390px renders checked in both themes without horizontal overflow. Desktop measurements confirm identical vertical centers for the circle, rectangle, label, logo and progression line. Reduced motion remains legible; running animation and solid hero stroke verified, then device motion preference and dark theme restored. Production build, focused ESLint and diff checks pass. Evidence: canon-refinement/outline-logo/ and canon-refinement/centered-ownership/ in the October 9 visualization directory. Scope: HomeWorkLoop, home-motion.css, OwnershipDiagram, home.css, homepage and ledger only. Unrelated work preserved; local commit only, no push/deployment.


## Batch 01Y — unified hero composition and calmer pinballs

**Communication problem:** Dave felt the centered copy, motion, booking action and client ticker read as separate ideas. He requested a cohesive hero and pinball speed comparable to the ownership diagram.

**Change:** compose the hero as one editorial spread inside the shared page container. Set the unchanged headline in three left-aligned lines, with its audience line and booking action directly below. Pair compact horizontal motion with the unchanged operating-partner explanation alongside it. Bring the full sixteen-client ticker into the same container as a fine-ruled base. Preserve all copy, the booking destination, motion preference, ticker controls and client names. The hero cycle is now twelve seconds, matching the desk cycle; fewer interior direction changes reduce pinball velocity further while preserving arrival, extraction, scope, and reset. The existing compact MotionScene option now also chooses compact desk geometry.

**Responsive transformation:** above 600px retain the editorial split; between 601 and 1000px use smaller headline typography and a tighter column gap. At 600px and below stack proposition/action then motion/explanation. Compact illustration geometry keeps the circle and square readable in its column. The ticker retains its existing static name wrap under reduced motion. Update the design-system composition record to supersede its earlier centered-hero description.

**Verification:** actual 1381, 768 and 390px renders inspected in both themes with viewport dimensions verified and no document overflow. Running pinballs inspected and computed duration confirmed at 12s; reduced motion removes animation and exposes all sixteen client names. Keyboard Tab reaches the hero booking action with visible focus and the original Fillout URL. Production build, focused ESLint, formatting and diff checks pass. Dark theme and device motion restored. Evidence: canon-refinement/unified-hero/ in the October 9 visualization directory, including a reduced-motion desktop capture. Scope: homepage, home.css, MotionScene, home-motion.css, stories, design-system record and ledger. Local commit only; unrelated changes preserved, no push or deployment.


## Batch 01Z — poster-inspired problem subhead and founder positioning

**Request and reference:** inspect Dave’s localhost:8080/poster hero and borrow its direct problem-led structure. Actual reference inspected in the browser. Use its three sentences beneath the headline: “The work you can’t get to. The project that keeps slipping. The OKR with no momentum.” Preserve the current Plex typography, theme system, abstract motion and ticker.

**Change:** headline/motion occupy a shared top row; the problems and positioning share a second row. Replace the previous two introductory paragraphs with Dave’s exact “Founders and funds hire Veep when mission-critical work has no clear owner and needs to move now. We own high-stakes mandates across strategic finance, GTM, and operations.” Place the unchanged booking action below that right-hand copy. The former CEO-led audience line and VC/PE-capacity explanation are deliberately removed from this hero at Dave’s instruction. No reference-page guarantees, timelines, metrics, fonts or color treatments imported.

**Responsive and verification:** retain the existing 600px stacking threshold and tablet typography range. Mobile reading order is headline, problem subhead, illustration, positioning/action, then ticker. Actual 1381, 768 and 390px renders inspected in both themes with no horizontal overflow. Exact rendered text verified; keyboard focus reaches the original booking destination; reduced-motion state remains complete. Production build, focused lint, formatting and diff checks pass. Restore dark theme and device motion preference. Evidence: canon-refinement/poster-led-hero/ in the October 9 visualization directory. Scope: homepage, home.css, design-system composition record and ledger. Local commit only; unrelated changes preserved, no push/deployment.


## Batch 01AA — hero audience actions and concise positioning

Apply Dave’s exact sentence: “Founders and funds hire to own high-stakes mandates across strategic finance, GTM, and operations when the work has no owner and needs to move now.” Replace the hero’s booking button with For companies linking to /for-companies and For funds linking to /for-portfolios, using existing primary and secondary action styles. A 12px gap and flex wrap accommodate narrower containers without a new breakpoint. Header and closing booking actions stay unchanged. Record this explicit user-directed exception to the former hero booking constraint in LOCKS.md and the design-system composition description.

Actual 1381, 768 and 390px layouts reviewed in both themes with no overflow; both actions remain side by side at those widths and retain 46px targets. Both destinations opened successfully. Keyboard focus reaches each action visibly. Exact rendered sentence and complete reduced-motion state verified; dark theme and device motion restored. Production build, focused ESLint, formatting and diff checks pass. Evidence: canon-refinement/hero-audience-actions/ in the October 9 visualization directory. Scope: homepage, home.css, LOCKS.md, design-system record and ledger. Local commit only; unrelated work preserved, no push/deployment.


## Batch 01AB — apply Material reference refinements

**Status:** complete for the authorized refinement pass; broader legacy-page migration remains in its own batches.

**Request:** Dave authorized all five recommendations from the Material Web assessment: balanced CTA emphasis, coherent states, surface/foreground pairing, type/spacing discipline, and a reliable component reference. Keep Veep identity and existing dependencies.

**Change:** equally weighted secondary-container audience actions; stable 6px controls with tonal hover/press; shared state ownership for actions, navigation, icons and text links; selected foreground pairing; newsletter action inherits the same state contract. Shared twelve-second hero/desk timing replaces the stale global default. Page-owned supporting type, compact-section spacing and heading-to-evidence gaps reduce drift without rewriting approved copy or altering routes. Extend the existing development-only reference with held states and paired surfaces, repair its missing prior-company profile inputs, and consolidate stale composition/motion guidance.

**Scope:** homepage, home.css, interactions.css, scoped system.css/token changes, component-reference additions, and design records. Preserve pre-existing foundation extraction and all unrelated page changes. No new package, form behavior, claims, or breakpoint.

**Verification:** rendered Home at 1381, 1024, 768, 390 and 320px in both themes with no document overflow. At 320/390px the audience actions remain equal-width with 46px height; no additional breakpoint. Inspected desktop audience/timeline/proof rhythm, tablet newsletter/close and mobile reading order. Paired specimen reviewed at desktop and 390px. Measured enabled action/surface text pairs above 4.5:1; corrected the newsletter light pressed mixture from 16% to 12%, yielding 4.76:1 (dark 6.37:1). Keyboard Tab reaches both hero routes with a 2px/4px-offset focus ring; mobile menu focuses navigation and Escape restores its trigger. Local-only field error/success, selected state and disclosure toggling work. Reduced motion stops hero, desk and ticker while preserving complete content; restored device preference and dark mode. Production build, focused ESLint and diff checks pass. No real submissions, push or deployment.

Evidence: `canon-refinement/material-refinement/` in the October 9 visualization directory, including paired-state, hero, responsive full-page, reduced-motion and contrast records. Existing uncommitted foundation and page work remains preserved and unstaged; scoped commits contain only this pass. No claim of complete legacy-page or screen-reader certification.


## Batch 01AC — founder audience labels

Rename the company audience label throughout navigation, homepage actions and headings, page metadata, related audience copy and the component reference. Follow Dave’s capitalization rule: “For Founders” in header/mobile/footer navigation; “For founders” in buttons and headings. Preserve /for-companies destinations and general prose referring to companies. No responsive or token changes.

Production build passes; focused lint passes for the cleanly scoped files, with pre-existing formatting errors in OperatorSpotlightChapter left untouched. Source and browser checks verify the audience labels and existing destinations. Preserve unrelated work; local commit only, no push or deployment.


## Batch 01AD — homepage Voice & Edge copy pass

Dave requested a homepage copy update using Vosler Copywriting and supplied Veep-Voice-and-Edge-Addendum-2026-10-09.md. Consulted the plugin’s supplied source discussion of headline-to-body progression and objections (extraction Pages 36–37), landing-page guidance, and the addendum as reference material. Apply the buyer situation → senior ownership → practical benefit → mechanism → proof → action progression within the existing composition.

Replace the hero’s mandate-heavy support and OKR line, sharpen the recognition and diagram captions, turn service inventories into active descriptions, clarify founder relief and fund readiness, rewrite the four delivery steps, and make the close a direct invitation to bring the stuck work. Update the operator introduction without changing its evidence. Retain H1, accountability statement, audience labels/casing, all case numbers and descriptions, testimonial/attribution, people/credentials, newsletter, metadata, URLs, and commercial terms. This user-requested copy pass supersedes the earlier exact supporting-copy and closing-heading guidance. No stylesheet, breakpoint, motion, or behavior change.

Validation: production build and focused lint pass; actual desktop dark/light and 390px mobile renders reviewed, including hero, method and closing copy. No horizontal page overflow at checked widths. Existing responsive typography accommodates the copy. Evidence: October 9 visualization directory /voice-update/. Restore dark theme and viewport. Local commit only; preserve unrelated changes and do not push.
