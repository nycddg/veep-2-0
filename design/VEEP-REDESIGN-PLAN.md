# Veep visual and interaction redesign plan

9 October 2026 · Proposed implementation roadmap · Local polish repository

Rebuild the public site's visual and interaction system around Veep's identity, using Material 3 and M3 Expressive to make the underlying rules complete and consistent. Preserve the current proposition, approved copy, commercial terms, and working behavior. Recompose sections where their current structure weakens the story.

The design direction is an editorial operating system: expressive typography, a small family of tonal surfaces, real people and concrete evidence, and geometry that explains responsibility and movement. Material supplies role, state, adaptation, and continuity principles. Veep supplies the fonts, palette, composition, imagery, and motion personality.

This is the implementation plan for review. Site code remains unchanged in this step.

## 1. Current state and design diagnosis

The repository is `/Users/dave/Projects/veep-2-0`, on `fable/polish`. It uses React 19, TanStack Start/Router, Vite, Bun, Tailwind, and custom CSS. The existing toolchain is sufficient for this redesign. There is no need to adopt a Material component package or add an animation library.

### Findings from rendered pages

The eight requested pages were opened in the local browser. Their desktop openings were inspected, along with the Companies proof spread and Funds relationship section. These observations concern visible composition; this planning review does not substitute for the responsive, interaction, or accessibility acceptance checks below.

| Finding                                                                                                               | Consequence                                                                                                                                | Design response                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Home's headline, supporting copy, motion, and CTA form an integrated opening. The ticker provides a clear transition. | The site already has a useful expression benchmark.                                                                                        | Preserve that hierarchy and semantic motion; use it to calibrate scale, space, and restraint.                                |
| Companies, Funds, Pricing, Join, and MeetVeep give separate geometric scenes substantial hero space.                  | Similar visual structures flatten the difference between learning about delivery, comparing prices, and applying to join.                  | Give each page a primary visual task. Keep a diagram only where it communicates information better than the content itself.  |
| Pricing's comparison begins below a large animated introduction.                                                      | The page delays its most useful information.                                                                                               | Make the commercial comparison the main visual event directly after a compact introduction.                                  |
| About has a six-person portrait strip with alternating offsets, followed by founder biographies and principles.       | The people are valuable; the repeated stagger and split intro feel more like components arranged in sequence than a human editorial story. | Compose the introduction and people together, align related profiles deliberately, and give the founders a distinct chapter. |
| The Companies proof spread combines large results, explanatory work, and an attributed testimonial effectively.       | There is already meaningful variation and hierarchy to preserve.                                                                           | Refine its typography and alignment within the new system; retain its open composition and evidence.                         |
| The Funds map distinguishes a master relationship from separate company mandates.                                     | Its underlying information architecture is sound, but company independence could be clearer spatially.                                     | Keep its content and responsibilities; recompose the shared layer above distinct company scopes.                             |

### Findings from source

There are several generations of styling in use. Home uses `.ve-system` and `vh-*`; the other main pages use `.rebuild`, `.ve-editorial`, and `ve-*` patterns. `Section` still consumes `--rb-*` colors and fixed utility spacing, while `Container` already uses the newer `v-container`. The public surface adapter overrides earlier rules instead of eliminating their competing definitions.

The largest files are currently `src/styles.css` at 1,937 lines, `rebuild/editorial.css` at 2,599, and `rebuild/public-pages.css` at 1,573. These sizes are evidence of accumulated layers, not a target for arbitrary line-count reduction. The real goal is one owner for each design decision.

Motion lifecycle logic is repeated in `MotionScene`, `useSectionMotion`, and `OperatorSpotlight`. Profiles also have several implementations: `ProfileFigure`, the spotlight, About's contact sheet, and Join's portraits. Some variation is justified by content, but crop behavior, surfaces, identity typography, and accessibility should be shared.

The written rules conflict in places. `VEEP-DESIGN-SYSTEM.md` still describes 15px general panels, outlined secondary actions, and coral navigation underlines; the later container record and current components use 8px panels and tonal states. `LOCKS.md` and `PLAN.md` also contain historical polish-only restrictions and old module requirements superseded by Dave's subsequent directions. Resolve these before expanding the system.

## 2. Authority and repository references

Keep the agreed documentation structure inside the existing `design/` directory:

- `design/VEEP-DESIGN-SYSTEM.md`: the single current Veep design specification, consolidated rather than extended with contradictory appendices.
- `design/MATERIAL-3-APPLICATION.md`: the explicit Material-to-Veep translation, including intentional departures from baseline Material values.
- `design/references/material3/`: curated source material, provenance, source dates, and coverage limitations.
- `design/VEEP-REDESIGN-PLAN.md`: this implementation roadmap.
- `design/SYSTEM-REVIEW-QA.md`: acceptance evidence organized by implemented milestone.
- `design/CONTAINERS-AND-SECONDARY-MOTION.md` and `design/MOTION-SYSTEM.md`: historical decision detail; reconcile their current decisions into the canonical specification and link rather than duplicate rules.

Add the Material material as reference documentation during Phase 1. Keep the supplied agent manual in the reference directory, with a README explaining its role. Do not promote its strict Material-conformance instructions into root `AGENTS.md`. Dave's Veep brief explicitly calls for custom expression, including Plex typography, tight radii, and the established palette.

Import the guide index, relevant foundations, color, typography, shape, motion, adaptive layout, accessibility, states, tokens, implementation notes, and coverage audit. Include the relevant button, icon-button, text-field, checkbox, radio, switch, tabs, navigation, and carousel references. Retain provenance and any required supporting links. Keep the ZIP and bulky raw captures outside the repository; record their source location and checksum. This avoids duplicating the archive and making unused platform material part of every design task.

Update the root guidance with a short reading order and a dated supersession note. Preserve the live-repository isolation, no-push rule, font limits, commercial protections, and build requirement. The current user brief controls the scope of the redesign; historical polish-only language must no longer contradict it.

The guide's coverage audit says that visual-only specifications and videos were not fully captured. Consult the official visual specification when a decision depends on those details. Do not describe custom web behavior as an official Material implementation.

## 3. Material principles translated into Veep rules

These are proposed Veep decisions, not a claim that our custom values are Material defaults. The supplied guide's chapters 03–07, 10, and 11 provide the underlying role, state, motion, and adaptive concepts.

| Dimension   | Material principle                                                         | Veep interpretation                                                                                                  | Implementation rule                                                                                                            |
| ----------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Color       | Assign semantic roles and compatible foreground/background pairs.          | Night, warm paper, blue activity, and coral signal carry distinct jobs.                                              | Components consume `--v-*` roles; literal brand colors live only in reference tokens.                                          |
| Typography  | Type styles describe communication roles.                                  | Plex Sans carries the editorial voice; Plex Mono marks role, metadata, prices, and concise figures.                  | Define each role's size, leading, tracking, weight, and measure. Keep heads/UI at 500 and prose at 400.                        |
| Spacing     | Repeated relationships use a coherent spacing scale.                       | Tight within a thought; generous between narrative chapters.                                                         | Use the existing 4/8/12/16/24/32/48/64/96/128 family, with named compact, standard, and feature section spacing.               |
| Grid        | Recompose according to available space and content priority.               | A common alignment system supports different editorial layouts.                                                      | Twelve desktop columns, eight medium columns, four compact columns; individual patterns choose their spans.                    |
| Shape       | Shape identifies families and state.                                       | Tight UI corners coexist with round work nodes and square scope boundaries.                                          | Keep 0px diagram frames, 6px controls, 8px panels, 15px profiles, and 10px inset portrait crops.                               |
| Containers  | Group related content at the right emphasis.                               | A container must express a mandate, person, comparison, or interaction.                                              | Open content is the default. Use tonal fills when grouping has meaning; do not box every section.                              |
| Elevation   | Depth communicates spatial relationships.                                  | Ordinary content remains on the page; overlays sit above it.                                                         | No routine card shadows. Reserve elevation for the mobile menu or a genuine overlay.                                           |
| Imagery     | Images support hierarchy and meaning.                                      | Real operators provide human authority.                                                                              | Share crop metadata and profile anatomy; no stock business imagery, fake dashboards, or generated replacement identities.      |
| Icons       | Consistent symbols clarify an action.                                      | Quiet functional icons complement expressive geometry.                                                               | Retain Lucide for controls, with consistent optical size/stroke. Use authored SVG only for explanatory diagrams.               |
| Interaction | Behavior follows the component's purpose.                                  | Navigation moves, a mandate changes selection, a disclosure reveals, and a static portrait simply presents evidence. | Never apply a universal hover lift. Every interactive treatment has touch and keyboard equivalents.                            |
| States      | State is explicit and can combine with focus.                              | Tone, a mark or text cue, and geometry explain the current state.                                                    | Specify default, hover, focus, press, selected, disabled, loading, error, and success where applicable.                        |
| Motion      | Continuity, hierarchy, and spatial/effects behavior support comprehension. | Work is scoped, ownership attaches, capability assembles, and delivery advances.                                     | Animate a legible relationship between two static states. Keep effects non-overshooting and text stable.                       |
| Adaptation  | Reveal, resize, reposition, divide, or swap when space changes.            | Preserve meaning while changing composition.                                                                         | Reflow portfolio hierarchies and comparisons deliberately; do not shrink a desktop diagram into an unreadable phone thumbnail. |

Custom typeface and type-role mapping are supported in the official [Material Web typography documentation](https://github.com/material-components/material-web/blob/main/docs/theming/typography.md). This supports the translation approach; it does not require adopting that library or its baseline weights.

## 4. Global design system

### Typography

The following are starting design values for the specimen, subject to visual calibration there. They are Veep values. Sizes use rem-based tokens and restrained fluid interpolation, with minimums that remain readable under zoom.

| Role                     | Desktop             | Tablet  | Mobile       | Typeface and behavior                                                                              |
| ------------------------ | ------------------- | ------- | ------------ | -------------------------------------------------------------------------------------------------- |
| Signature hero display   | 80–88px             | 60–72px | 42–48px      | Sans 500; leading 1.04–1.08; short deliberate line groups.                                         |
| Other page title         | 64–76px             | 52–60px | 38–44px      | Sans 500; leading 1.08; sized to the page's job rather than always matching Home.                  |
| Section headline         | 44–54px             | 36–44px | 30–34px      | Sans 500; leading 1.1–1.15.                                                                        |
| Supporting headline      | 26–32px             | 24–28px | 22–24px      | Sans 500; leading 1.2.                                                                             |
| Hero subhead             | 24–26px             | 22–24px | 20–22px      | Sans 400; leading 1.4.                                                                             |
| Large body               | 18px                | 18px    | 17–18px      | Sans 400; leading 1.55; normally 42–52ch.                                                          |
| Standard body            | 16px                | 16px    | 16px         | Sans 400; leading 1.55–1.65.                                                                       |
| Profile name             | 20–24px             | 20–22px | 18–22px      | Sans 500; adjust to card width without truncating identity.                                        |
| Role and metadata        | 12–13px             | 12–13px | 12px         | Mono 400; title/sentence case; preserve meaningful word groups.                                    |
| Navigation               | 14–16px             | 16px    | 18px in menu | Sans 400; active 500 with a tonal indicator.                                                       |
| Buttons and CTAs         | 16px                | 16px    | 16px         | Sans 500; 44px minimum target, usually 48px high.                                                  |
| Annotations/captions     | 14px                | 14px    | 14px         | Sans 400 for explanation; Mono only for genuinely short labels.                                    |
| Prices and proof figures | Contextual 48–112px | 44–80px | 40–64px      | Mono 400, tabular figures where comparison needs alignment; the adjacent explanation remains Sans. |

Use scale, line breaks, placement, and space to create emphasis, rather than adding heavier fonts. Keep established high-impact proof treatments where they already work, and calibrate the metric role in the specimen before applying it globally. Test the actual longest name, question, price qualification, and heading rather than placeholder strings. Hard line breaks are allowed only when the compact layout remains intentional.

### Color, themes, and surfaces

Retain the current canonical palette in `system/tokens.css`:

| Role                 | Dark                  | Light                                        |
| -------------------- | --------------------- | -------------------------------------------- |
| Page                 | `#080C14`             | `#FBFAF8`                                    |
| Section              | `#111925`             | `#F6F4F1`                                    |
| Panel                | `#192331`             | `#F0EEEA`                                    |
| Main text            | `#F6F5F2`             | `#0B111F`                                    |
| Secondary text       | `#B1BBC9`             | `#3B4350`                                    |
| Blue activity/accent | `#789FFF`             | `#4E7AD4`                                    |
| Text link            | `#789FFF`             | `#406ABA`                                    |
| Coral signal         | `#EC6B66`             | `#EC6B66`, with contrast support when needed |
| Primary action       | Cream fill / ink text | Ink fill / cream text                        |

No yellow. Keep dark as the first-visit default and preserve the user's explicit theme preference. Do not derive the light palette by inversion or follow the operating-system color preference automatically.

Add only missing roles that are actually used: paired inverse surfaces, overlay/scrim, selected containers, and component state foregrounds. A paper proof spread inside dark mode is deliberate. Map every text, control, and state within that spread through its own theme context. No isolated color fixes in page styles.

Ordinary section separation should come from spacing and tone. Use a panel for a bounded mandate, a coherent profile, a form, or a comparison plane. Keep introductions, biographies, testimonials, result narratives, and closing copy open. Retain lines for actual relationships, necessary input boundaries, comparison alignment, and focus indicators.

### Layout and navigation

Keep a 1360px maximum container and shared alignment across the header, ticker, sections, and footer. Use 20px compact, 32px medium, and up to 48px large gutters. For text-heavy pages, constrain the reading column inside the larger grid.

Define section spacing by narrative role: compact transitions, standard chapters, and feature moments. Adjacent sections should not all have the same height or repeat the same headline-left/body-right composition. Large negative space must separate or emphasize ideas, not compensate for a small disconnected illustration.

Retain current route labels and destinations. Desktop navigation stays a horizontal website header with one clear booking action. Compact navigation is a focused menu with escape, focus return, an inert background where modal behavior is used, and a visible current route. Test the transition at 1024px and around its exact breakpoint. No application navigation rail or floating action button is needed.

## 5. Component and interaction contracts

| Component                | Proposed behavior and states                                                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary CTA              | Neutral high-contrast fill. Tonal hover, brief press compression, explicit focus ring. Preserve destination, target behavior, and label.                                                                      |
| Secondary action         | Tonal or quiet text treatment according to emphasis. Underline/directional mark provides recognition beyond color.                                                                                            |
| Navigation               | Active tone plus `aria-current`; hover does not look selected. Focus remains visible over active and hover states.                                                                                            |
| Profile                  | One surface for image, name, role, and evidence. Use compact portrait and expanded editorial variants sharing the same anatomy. Static profiles have no button-like hover.                                    |
| Profile sequence         | Keep explicit previous/next/selection controls and user control of progression. Image and copy transition together; manual interaction gives the reader control. No automatic announcements for every slide.  |
| Mandate selector         | Preserve existing hash destinations and keyboard tabs. Change one bounded scope in place; animate the selected boundary/work products rather than moving the whole page.                                      |
| Portfolio map            | All companies and responsibilities readable at rest. A selected lane can receive emphasis, but meaning and scope must never require hover.                                                                    |
| Disclosure               | Native semantic disclosure, tonal open state, rotating mark, focus preserved. Expanded copy remains ordinary readable prose.                                                                                  |
| Pricing                  | A comparison, not a purchase configurator. Preserve all four offers and units; no invented recommended plan, calculator, discount, or selectable pricing state.                                               |
| Forms                    | Visible labels, real required states, contextual help, loading lock, useful error and success states. Reuse presentation without changing payloads, recipients, validation, uploads, or submission functions. |
| Editorial proof          | Results and their explanation remain together. No animated counting or artificial metric dashboards.                                                                                                          |
| Theme/motion preferences | Clearly labelled controls with persistent state. Preference changes do not trigger decorative full-page transitions.                                                                                          |

State documentation must include combinations, such as selected plus keyboard focus, error plus focus, or loading plus disabled. Disabled should mean an unavailable action, not a decorative low-emphasis style.

## 6. Page-by-page strategy

### Homepage

**Objective and hierarchy:** establish the operating problem, show the change in ownership, prove credibility, and provide a clear next step. Preserve the approved order: proposition → ownership explanation → audience paths → proof → people → close.

**Hero:** retain the centered headline/subhead/body group, horizontal circular work loop, and CTA underneath. Refine the proportions as one composition; do not replace it with another split hero or add an eyebrow. Keep the full client ticker and its anchored “Trusted by” label.

**Composition and surfaces:** make the ownership explanation a single before/after narrative plane, with the same work moving from the executive bottleneck toward an owned process. Keep enough contrast between its problem and resolution without enclosing both in separate cards. The audience pathways can share one quiet tonal chapter. Retain the inverse proof spread, integrated profile cards, and open closing statement.

**Type, imagery, and behavior:** Home owns the largest display role. Use real portraits at a generous readable scale. Retain the loop's circle geometry, equally sized coral mandate, and semantic sequence. The ownership section runs one finite sequence; audience links and the CTA supply functional interaction. On compact screens, turn the ownership flow vertical while preserving reading order; portraits use two columns only while names and credentials fit, then one. Remove duplicated separators and any secondary animation competing with the hero. No copy change planned.

### For Companies

**Objective and hierarchy:** help a CEO recognize their priority, understand who owns the work, see evidence, and understand engagement options. Preserve the current narrative and section anchors.

**Hero:** compose the headline, supporting copy, and a concrete scoped-mandate preview together. Move the useful `WorkMandate` idea into the opening's visual argument. The selected priority determines the scope, work products, and attached lead-owner information. Replace the separate floating-shape scene with geometry embedded in that actual mandate.

**Composition and surfaces:** follow with an open responsibility arrangement for lead operating partner, Veep, and the client's team. Retain the strong asymmetric proof spread and testimonial. Use one expanded portrait/evidence card for operator experience; follow it with a readable comparison plane, engagement shapes, a restrained Agent Teams section, and the delivery sequence. Vary dense evidence, quiet explanation, and human imagery rather than alternating identical ruled rows.

**Type and behavior:** page-title scale below Home; large result figures anchor proof. The mandate selector carries the signature interaction. Responsibility connectors and process markers animate once. Retain tab keyboard behavior and deep links. Compact layouts put the selector before its panel and preserve labels when comparisons stack. Keep the existing desktop-only comparison restriction unless separately changed. Agent Teams stays within `#agent-teams`, with its current scope and oversight copy; it gets no separate route, invented proof, or dominant hero treatment. No copy change planned.

### For Funds

**Objective and hierarchy:** explain shared access and planning across a portfolio while preserving distinct delivery responsibilities inside each company. The route remains `/for-portfolios`; navigation remains “For Funds.”

**Hero:** retain the typographic opening, but lead directly into the investment lifecycle. Use the timeline as the visual continuation of the proposition. Remove the separate generic portfolio scene that repeats the relationship story later.

**Composition and surfaces:** present the capacity audit as a clear editorial brief, then make the relationship map the page's signature composition: a shared Veep/fund relationship above three independent company groups, each containing its mandate and lead responsibility. Separate company groups with space and restrained tone; connect only to the shared relationship. Keep scope, statement-of-work, and delivery-fee distinctions adjacent to the structure they explain.

**Type, imagery, and behavior:** use concise labels and strong company/mandate hierarchy. Preserve the career metrics and operator spotlight as a human evidence chapter, followed by the Roster relationship. Animate the shared connection and then individual scope paths once. At compact widths, use the relationship as a header followed by separate company groups down one spine; do not shrink three columns. Audit and Roster actions preserve existing destinations and terms. Retain “Example company mandates.” Remove duplicate scene/control chrome; no copy change planned.

### Pricing

**Objective and hierarchy:** let the reader compare responsibility, price, unit, and engagement shape quickly.

**Hero and composition:** a compact typographic introduction leads immediately to the comparison. Remove the standalone scope animation from the opening. The offers themselves are the visual. Keep Advisory visually grouped as senior judgment and Sprint/Operator/Pod as operating delivery, using a shared comparison plane and tonal grouping.

**Type and surfaces:** align offer names, Mono price figures, billing units, fit statements, and included work. Give “From” and the unit clear proximity to each price. Follow with the fit guarantee, included commercial assurances, Portfolio Roster, the existing brief Agent Teams note, questions, and close. Preserve every price and qualification.

**Behavior and adaptation:** use link and disclosure states; no fake plan-selection interaction. At medium widths use two columns only if labels remain unambiguous; at compact widths show complete vertical offer sections with repeated field labels. Do not hide prices or essential terms inside a carousel. No new imagery, animation, copy, audit price, or commercial promise is needed.

### About

**Objective and hierarchy:** make the operating model credible through people, origins, and working principles.

**Hero and imagery:** group the existing proposition and introductory copy, then compose the operator contact sheet as part of that opening. Use deliberate portrait sizes and alignment rather than alternating offsets for their own sake. Every portrait remains joined to its identity on the panel surface. Use existing verified photography; no fabricated founder portraits.

**Composition and surfaces:** give the founders a distinct editorial chapter with their existing biographies. Keep this open unless an actual portrait-and-biography unit needs a shared surface. Recompose the four operating principles as a paced sequence, using larger lead statements and concise supporting paragraphs rather than another uniform row stack. Keep the Advisory ownership distinction with the relevant principle.

**Type and behavior:** a strong page title, human-scale profile names, quiet Mono roles, and generous biography measure. Portrait entry can settle once inside the crop; static people do not lift on hover. Any existing profile link must be visibly a link and preserve its destination. On compact screens, introduce the people sequentially and stack biographies in reading order. Remove decorative staggering and redundant structural lines. No copy change planned.

### Join Veep

**Objective and hierarchy:** help experienced operators recognize fit and complete the existing application.

**Hero:** bring the invitation, fit explanation, and a small group of real operator profiles into one human opening. Replace the generic assembly animation with actual people and capability labels. Keep the “Apply to join Veep” action pointed at the existing application anchor.

**Composition and surfaces:** follow with clear criteria, then one calm application surface. Distinguish the invitation from the form through scale and tone. Keep existing fields and optionality; visually group personal details, experience, and supporting material without creating a new multi-step flow.

**Type and behavior:** readable 16px inputs and persistent labels; concise Mono group labels only where useful. Focus, selection, file status, pending, errors, and success carry the interaction. Preserve submission logic and upload handling. On compact screens place the context above the form, make all fields full-width, and keep help/error text adjacent. Remove the detached motion scene and unused empty hero space. Do not imply available assignments or add urgency. No promotional copy change planned.

### FAQ

**Objective and hierarchy:** make a known question easy to find and its answer easy to read.

**Hero and composition:** use a shorter introduction with a clear topic index. Retain Engagement, Operators, Pricing, and Portfolios & partnerships, their questions, answers, and anchors. The reading area gets the visual priority; it does not need a signature illustration.

**Type and surfaces:** page-title and body roles, question titles around 20–24px, answers at normal body measure. Keep closed questions open on the page and use a tonal surface to connect an expanded question with its answer. Adjust vertical rhythm so the list scans as related information rather than isolated statements separated by excessive space.

**Behavior and adaptation:** retain native disclosures. The desktop topic index may remain sticky if it does not obscure content; compact screens use a wrapping topic list above the questions. Open state, focus, and the disclosure mark provide enough motion. No search feature is needed for the current content volume. No copy change planned.

### MeetVeep

**Objective and hierarchy:** provide a concise campaign introduction that moves from the proposition to process, evidence, fit, and contact.

**Hero:** keep the existing headline, subhead, body, and destination. Integrate one compact ownership sequence below that group; use the same semantic vocabulary as Home without duplicating its full hero. The existing timing statements remain close to their operating-engagement qualification.

**Composition and surfaces:** use a compressed sequence of open proposition, four-step method, inverse proof spread, engagement fit, and closing action. The page should read as a concise introduction rather than a scaled-down copy of every main-site section. Keep its existing shared site navigation behavior and `noindex, nofollow` metadata.

**Type and behavior:** strong but shorter display scale; readable process labels and proof explanation. One finite geometric sequence plus normal CTA/link states is sufficient. On phones the method becomes vertical and timing statements wrap as complete units. Remove the detached illustration footprint and redundant separators. No copy change planned.

### Other public surfaces

Apply the shared header, footer, controls, fields, and theme rules to Contact and public error/not-found states. Contact's inquiry and audit-intent behavior stays intact. Preserve existing redirects from legacy service, comparison, and operator URLs, including their hashes. Keep legal text and portal bodies outside the redesign; regression-check them because they share the global stylesheet and root layout. Do not promote the design or motion specimens into public production routes.

## 7. Motion system

Every narrative scene starts with a written semantic map: primary object, secondary actors, relationship, direction, and resolved state. Approve its static problem and resolved frames before animating. The same object must remain recognizably the same object throughout its movement.

| Level     | Job                                                 | Proposed behavior                                                                                                                                                                                                    |
| --------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Signature | Make the core proposition memorable.                | Preserve Home's 5.4-second continuous work loop, current circular vocabulary, and selected coral mandate.                                                                                                            |
| Narrative | Explain a change in responsibility or relationship. | Finite entry or deliberate replay: ownership paths, mandate assembly, portfolio scopes. Start around 1.2–2.4 seconds; retain the existing 4.6-second ownership sequence only if its additional steps need that time. |
| Component | Explain a user-triggered state change.              | Roughly 220–400ms for selection, disclosure, and image/copy transitions; direction follows the action.                                                                                                               |
| Micro     | Confirm input.                                      | Roughly 120–180ms for press and 160–220ms for tone/focus-related effects. No motion delays input.                                                                                                                    |

These timing ranges are Veep calibration targets. Keep spatial and visual-effect tokens separate. Use custom CSS/WAAPI only where it is needed; retain CSS keyframes for authored sequences. Standard motion remains restrained. Expressive character comes from decisive acceleration, scale, alignment, and settlement, not repeated bounce or decorative orbiting.

Extract shared preference, document visibility, and intersection lifecycle handling from the existing motion and spotlight implementations. Keep each diagram's geometry and timeline in its own component. Do not build a universal diagram renderer or apply one reveal to every section.

Secondary sections rest after their sequence. Offscreen and hidden-document motion stops consuming work. Reduced motion renders a complete, meaningful static state, and content is visible before hydration. Profile motion stays inside the crop; statistics never count up.

Keep the hero and ticker free of inline pause buttons as previously directed. Add one persistent site-level Motion setting in the footer preferences row and mobile menu that stops automatic loops, ticker movement, and automatic profile progression without holding keyboard focus. Continue honoring the operating-system reduced-motion preference. This reconciles the continuous loop with user control: hover/focus-only pausing does not satisfy the mechanism described in [WCAG 2.2.2 guidance](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Test the setting across route changes and reloads.

## 8. Adaptive behavior

Use Material's available-space reasoning while choosing breakpoints that fit Veep's content. Proposed layout classes are compact below 600px, medium 600–839px, expanded 840–1199px, and large from 1200px. Navigation can switch at 1024px because its content requires it; document that as a component threshold.

- **Large:** full editorial grid, comparative content beside supporting explanation, generous images, and diagrams with readable labels.
- **Expanded:** tighten gaps and reduce feature scale; retain split layouts only when the copy and visual each have enough width.
- **Medium:** reorder complex compositions into two clear regions, avoid tiny four-column pricing, and use two/three-column people layouts according to actual card width.
- **Compact:** narrative order becomes vertical. Keep the Home loop horizontal while shortening travel; turn relationship maps into a legible vertical hierarchy. Tables or comparisons must preserve field labels and terms. No essential disclosure depends on hover, drag, or horizontal discovery.

At 390px, two compact profile columns remain valid if identity and role wrapping are clean. At 320px use one column. Use container width for reusable profile variants where possible. Do not solve overflow with clipped text or globally hidden horizontal overflow.

## 9. Implementation architecture and file disposition

Extend the current folders. Do not create a second design-system package, parallel page tree, or theme provider. The boundary is foundations → primitives → components → editorial patterns → page composition.

All paths below are under `/Users/dave/Projects/veep-2-0/`.

| Layer                           | Canonical location and action                                                                                                                                                                |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| References and decisions        | Existing `design/` plus `design/references/material3/` and `design/MATERIAL-3-APPLICATION.md`.                                                                                               |
| Reference values and themes     | Retain `src/components/site/system/tokens.css`. Separate reference, semantic, and necessary component roles inside the same file.                                                            |
| Type, layout, and states        | Keep `system/system.css` as the public system entry. Extract `typography.css`, `layout.css`, and `states.css` within that folder when the separation makes ownership clearer.                |
| Primitives                      | Retain `system/Controls.tsx`; migrate the existing `rebuild/Container.tsx`, `Section.tsx`, and `TextLink.tsx` to canonical roles. Keep import adapters only during migration.                |
| Shared site components          | Retain `SiteHeader.tsx`, `SiteFooter.tsx`, `ThemeToggle.tsx`, and the existing theme provider. Strengthen state and menu behavior in place.                                                  |
| Profiles                        | Retain `system/ProfileFigure.tsx` as the shared anatomy. Refactor `rebuild/OperatorSpotlight.tsx` around the same image/identity/evidence treatment, with a genuine expanded variant.        |
| Editorial patterns              | Retain `rebuild/WorkMandate.tsx`, `PortfolioMap.tsx`, `OwnershipDiagram.tsx`, `ClientTicker.tsx`, and `AgentTeam.tsx`. Recompose them around their information jobs.                         |
| Motion primitives               | Retain `motion/` for scenes and geometry. Consolidate lifecycle handling with `system/useSectionMotion.ts`; keep scene-specific choreography separate.                                       |
| Page compositions               | Keep the eight existing route files. Split the oversized editorial/public CSS into page-owned files within the existing site folders. Shared patterns own their own CSS.                     |
| Assets and evidence             | Retain the existing headshot assets, asset metadata, `src/lib/spotlight-operators.ts`, and `rebuild/spotlightSelections.ts`. Centralize crop metadata without inventing image or claim data. |
| Specimen                        | Extend `design/system-study.tsx` and `system-study.css`; keep `motion-study.tsx` for scene states and timelines. Both remain development-only.                                               |
| App-wide and protected surfaces | Reduce `src/styles.css` to app foundations and explicitly retained legacy/portal styles after migration proves their usage. Preserve root SEO, analytics, route handling, and theme boot.    |

### Retain, refactor, replace, and remove

- **Retain:** routing, data/content, booking configuration, current Home semantic scene, client list, proof attribution, profile photography, native disclosure semantics, form submission functions, and current successful keyboard behavior.
- **Refactor:** Section and PublicPage primitives, profile variants, active/selected states, theme scope, motion lifecycle, and public route compositions. `PublicIntro` should offer a small number of composition primitives rather than force every page into its current two-column opening.
- **Replace:** detached generic hero scenes on Pricing and Join; duplicated standalone diagram treatments on Companies and Funds; page-specific literal style patches with owned rules.
- **Remove after reachability checks:** unused old canvas/deck/reveal implementations, unreachable variants, duplicated ticker code, and the temporary public surface adapter once every consumer has migrated. `OperatorCanvas`, `OperatorSpotlightChapter`, `ProblemDiagram`, `OperatorDeck`, `ClientStrip`, and `LogoWall` are candidates, not an automatic deletion list.

Several candidate legacy files already contain uncommitted work. Preserve that work in the audit and only remove a file after checking its imports, routes, assets, and Git changes. Keep local commits focused on one milestone.

Resolve `--rb-*`, `--ve-*`, and `--v-*` overlap by migrating consumers to `--v-*` roles, not by adding a fourth vocabulary. Establish a clear import order and selector ownership. Remove compatibility rules alongside each migrated component; never delete broad legacy CSS before checking portal, legal, and redirect-dependent surfaces.

## 10. Phases and dependencies

Two changes to the proposed sequence are important: document reconciliation begins before foundation work, and motion, accessibility, and responsive verification happen inside every milestone. The late passes verify coherence and remove remnants; they do not introduce those concerns for the first time.

| Phase                                                           | Work and dependencies                                                                                                                                                                                                                                                                                     | Reviewable exit condition                                                                                                                          |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0. Baseline and rule reconciliation                             | Record current screenshots, route/hash/CTA map, commercial content, existing changes, and known checks. Reconcile historical guidance. Draw static composition studies for the Home ownership story, Companies mandate, Funds relationship, and About people spread before deciding their component APIs. | One clear authority order, protected behavior inventory, purpose-led page composition briefs, static relationship frames, and deletion candidates. |
| 1. Foundations                                                  | Import curated Material references; consolidate Veep specification and translation layer. Complete tokens, type, space, grid, shape, paired themes, state and motion roles.                                                                                                                               | Paired dark/light specimen with real long content, profiles, controls, and static diagram frames. No unresolved contradictory rules.               |
| 2. Core component layer                                         | Refactor containers, sections, buttons, links, navigation, fields, disclosures, and profile anatomy. Add shared motion preference/lifecycle support.                                                                                                                                                      | Complete state matrix, keyboard/touch behavior, and compact examples in the existing specimen.                                                     |
| 3. Homepage stress test                                         | Recompose ownership and transitions around the retained hero, proof, ticker, and people. Implement its actual motion while designing the page.                                                                                                                                                            | One complete homepage at all five target widths in both themes. Review hierarchy, static states, interaction, and motion together before rollout.  |
| 4. Companies and Funds                                          | Apply distinct mandate-led and relationship-led compositions. Retain proof and commercial distinctions.                                                                                                                                                                                                   | Company scope selection, proof, profile, and portfolio hierarchy demonstrate different page rhythms with the same design language.                 |
| 5. Remaining public pages                                       | Pricing first for comparison primitives; About and Join next for people/forms; FAQ next for reading/navigation; MeetVeep for a concise campaign composition. Bring Contact and public status surfaces into shared components.                                                                             | All eight pages and adjacent public utilities use the canonical system. Protected form and route behavior remains intact.                          |
| 6. Cross-site interaction and motion review                     | Tune relative intensity, transitions, shared state behavior, and motion preferences across the now-complete pages.                                                                                                                                                                                        | No arbitrary animation, duplicate motion lifecycle, or page that feels unrelated below its hero.                                                   |
| 7. Final theme, adaptive, accessibility, and performance checks | Run the full route/theme/width matrix and functional acceptance criteria below.                                                                                                                                                                                                                           | Documented passes, remaining exceptions, and visual review captures tied to the actual implemented revision.                                       |
| 8. Consolidation and cleanup                                    | Remove proven-unused CSS/components/adapters, complete docs, and recheck all affected/protected surfaces. Cleanup has already occurred incrementally during prior phases.                                                                                                                                 | One system of record, an up-to-date specimen, green build, focused local commits, and no competing public theme layer.                             |

The first implementation deliverable should be Phase 0–2's specimen and a coherent homepage composition proposal, not simultaneous changes across eight routes. Keep subsequent review checkpoints at the complete Home and Companies/Funds milestones. Do not require repeated approval for routine work inside an already-authorized phase.

## 11. QA and acceptance criteria

### Visual and content

- Each page has a recognizable primary visual job. It should be identifiable from its structure even before reading the headline.
- Every major section has a documented purpose, primary element, surface decision, responsive transformation, and motion decision. “No motion” is a valid decision.
- Typography uses the established fonts and 400/500 limits. No new yellow, arbitrary radii, gradients, decorative border rails, or ubiquitous shadows.
- Profile image and copy remain cohesive; crop edges stay clean during motion and at fractional dimensions.
- Compare route text before/after. Preserve approved copy; record any unavoidable layout-driven change individually with its reason. Preserve prices, units, guarantees, labels on examples, and attribution.

### Responsive and themes

- Render all eight requested pages at 1440, 1024, 768, 390, and 320px in both themes: 80 page/viewport/theme cases, with targeted checks just above and below important breakpoints.
- Check 200% text/zoom behavior and narrow reflow, long names, expanded answers, selected mandates, form errors, and menu-open states.
- No document overflow, clipped copy, overlapping labels, misplaced connector endpoints, or offscreen controls. A deliberately scrollable comparison must be labelled and keyboard-usable, though reflow is preferred here.
- Theme changes preserve hierarchy, selected states, image treatment, and contrast inside inverse sections. Verify first paint, persisted preference, and nested theme contexts.

### Interaction and accessibility

- Keyboard access and visible focus for every control. Correct heading order, landmarks, names, link/button semantics, tab behavior, expanded state, and current navigation state.
- WCAG 2.2 AA is the target. Verify 4.5:1 normal text contrast, 3:1 qualifying large text and necessary control/graphic contrast, with the actual rendered color pairs. Project controls retain at least 44px usable targets where practical. See the official [text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) criteria.
- Test reduced motion and the site-level Motion setting in the rendered browser. Do not substitute source inspection for preference testing or claim compliance from it.
- Moving and changing content stays controllable. Motion does not gate text, steal focus, announce continuously, or consume resources while offscreen/hidden.
- Preserve form handlers, field names, validation, payloads, consent/legal text, recipients, and uploads. Exercise error/loading/success presentation through local fixtures or isolated component states; do not submit real forms.

### Performance and technical checks

- Use the existing Bun build and ESLint/formatting checks. Record pre-existing failures separately from regressions. Do not add a test runner for this redesign.
- No new component or motion framework. Shared design changes should reduce duplicated CSS and logic rather than increase global overrides.
- Use stable image dimensions, correct crop metadata, appropriate loading priority, and existing font assets. Do not eagerly load every carousel portrait when only one is initially needed.
- Compare production-build route assets and browser performance before/after on the same device/network settings. Use [Core Web Vitals](https://web.dev/articles/vitals) targets of LCP at or below 2.5s, CLS at or below 0.1, and INP at or below 200ms. Local lab measurements and interaction traces support regression checks; field assessment requires real-user data.
- Check console/hydration errors, direct route entry, hash navigation, aliases, canonical/OG data, FAQ structured data, and MeetVeep noindex behavior. Smoke-check portal and legal surfaces for shared-CSS regressions.

## 12. Completion standard

The redesign is complete when the eight pages have distinct, purpose-led compositions and share one reliable vocabulary for type, color, space, surfaces, states, and motion. Adding a new page should require selecting appropriate patterns and composing its story, not copying a legacy page and accumulating overrides.

Preserve `BOOKING_URL`, route paths and redirects, form behavior, commercial terms, legal content, portal behavior, and the local-only workflow. No push, deployment, dependency installation, or production change is part of this plan.

The immediate design decision is to establish the system in the specimen, then prove it through Home and the two audience pages. The current strongest modules become evidence for that system; weak compositions are rebuilt according to the information they need to communicate.
