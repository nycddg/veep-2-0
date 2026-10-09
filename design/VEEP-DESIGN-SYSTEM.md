# Veep design system

Decision record · 9 October 2026 · Material guidance refinement

## Authority and scope

Use Material 3 as structural guidance and Veep as the visual identity. Dave's explicit **no yellow** instruction supersedes the yellow language in the original system brief. The supplied September brand sheet informs the warm light surfaces, IBM Plex typography, blue, coral, and 15px imagery treatment. The site retains its dark default. This intentionally translates a light microsite reference rather than applying that document wholesale.

This milestone covers shared foundations, public header/footer, the booking action, text links, disclosures, and the homepage. Companies, Funds, Pricing, About, Join, FAQ, and MeetVeep retain their existing page compositions pending the next migration. Shared chrome and reused controls inherit the refined state rules; legacy page-specific controls remain part of their respective migration batches. Portal surfaces and application handlers are outside this pass.

Open the working reference at **http://127.0.0.1:8090/__design-system/**. It uses the actual components and tokens, with paired dark/light specimens for default, hover, keyboard focus, pressed, selected, disabled, and validation states. Held states use dedicated specimen attributes mapped to the production selectors; they do not simulate application behavior. Its fields demonstrate local state only and send nothing. Vite's development middleware serves this address; it is not registered as a production route or build entry.

## What Material contributes

The official sources were read before implementation. Material 3 Expressive evolves M3 through stronger emphasis, more varied shape, emphasized typography, richer component behavior, and a motion model distinguishing spatial movement from visual effects. It is not a requirement to use Google's colors, fonts, icons, navigation, or every component.

| Principle                                    | Veep decision                                                                                                                                                | Source                                                                                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Reference, system, and component tokens      | Brand values feed semantic roles; components consume roles                                                                                                   | [Design tokens](https://m3.material.io/foundations/design-tokens/overview)                                                                |
| Paired surface and foreground roles          | Deliberate dark and light mappings, including inverse paper proof                                                                                            | [Color system](https://m3.material.io/styles/color/the-color-system)                                                                      |
| Concentrated expressive emphasis             | The hero is the visual peak; explanation and evidence become quieter                                                                                         | [Building with M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)                                                    |
| Role-based typography                        | Plex display, heading, title, lead, body, caption, and label roles; no new font or heavy weight                                                              | [Typography](https://m3.material.io/styles/typography/overview)                                                                           |
| Shape variety with discipline                | Square scope frames, 6px controls, 8px panels, 15px profiles, 10px inset images, meaningful circular centers                                                 | [Shape](https://m3.material.io/styles/shape/overview)                                                                                     |
| Elevation communicates spatial relationships | Tonal sections and panels first; shadows reserved for true overlays                                                                                          | [Elevation](https://m3.material.io/styles/elevation/overview)                                                                             |
| Distinct, consistent states                  | Shared hover, focus, press, selected, disabled, validation, and disclosure behavior                                                                          | [States](https://m3.material.io/foundations/interaction/states/overview), [Buttons](https://m3.material.io/components/buttons/guidelines) |
| Separate spatial and effects motion          | Spatial easing for small movement; functional easing for color and state. Preserve authored CSS choreography; do not claim these curves are physical springs | [Motion](https://m3.material.io/styles/motion/overview/how-it-works)                                                                      |
| Adapt to available space                     | Recompose ownership, portraits, and navigation at content-driven breakpoints                                                                                 | [Adaptive window sizing](https://developer.android.com/develop/ui/views/layout/use-window-size-classes)                                   |

Do not import dynamic wallpaper colors, Android navigation rails, stock Material shapes, universal pill buttons, or a component library. Material's flexible shape guidance does not override the stable business meanings Dave requires in Veep diagrams.

## Foundations

The current executable implementation is `src/components/site/system/tokens.css`. `system.css` defines shared anatomy and state behavior. `home.css` owns the homepage's editorial compositions. Do not add page-specific values to the global legacy theme to migrate one page.

### Color — expanded specification, 9 October 2026

Dave accepted this palette for the design system and subsequently authorized its application with the homepage narrative/newsletter revision. These are hand-selected Veep values using Material role relationships, not Google's baseline colors or an automatically generated scheme. No yellow or new purple family. Default dark and deliberate light remain.

Sources: [baseline](https://m3.material.io/styles/color/static/baseline), [roles](https://m3.material.io/styles/color/roles), [system overview](https://m3.material.io/styles/color/system/overview). The supplied Material archive provided readable source text where the live pages require JavaScript.

#### Accent and container pairs

| Role | Light | Dark |
| --- | --- | --- |
| Primary | `#365CA8` | `#ADC6FF` |
| On primary | `#FBFAF8` | `#102E61` |
| Primary container | `#DCE6FF` | `#263E68` |
| On primary container | `#183665` | `#DCE6FF` |
| Secondary | `#566176` | `#BDC7DF` |
| On secondary | `#FBFAF8` | `#273246` |
| Secondary container | `#E0E6F1` | `#354157` |
| On secondary container | `#273246` | `#E0E6F1` |
| Tertiary | `#A33F3C` | `#FFB4AC` |
| On tertiary | `#FBFAF8` | `#641F1D` |
| Tertiary container | `#FFDAD6` | `#71302E` |
| On tertiary container | `#71302E` | `#FFDAD6` |

Blue/primary supports active structure, links, selection and high-emphasis actions. Slate/secondary supports quieter UI and tonal controls. Coral/tertiary supports selected work, client voice and occasional editorial emphasis. Pair every fill with its own on-color. The bright brand coral is not a general body-text color; its dark derivative may serve a properly paired text role.

#### Complete neutral surface hierarchy

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Surface | `#FBFAF8` | `#080C14` | Page background |
| Surface container lowest | `#FFFFFF` | `#05080E` | Lowest container level |
| Surface container low | `#F7F6F3` | `#111925` | Quiet section grouping |
| Surface container | `#F0EEEA` | `#192331` | Standard cards and profiles |
| Surface container high | `#E9E7E3` | `#222D3D` | Stronger grouping or nested panels |
| Surface container highest | `#E2E0DC` | `#2D384A` | Most distinct neutral containers |
| On surface | `#0B111F` | `#F6F5F2` | Headings and body |
| On surface variant | `#3B4350` | `#B1BBC9` | Supporting text |
| Outline | `#737C89` | `#8B97AA` | Functional boundaries |
| Outline variant | `#C7CCD4` | `#3D4859` | Dividers and construction lines |

Higher containers become darker in light mode and lighter in dark mode. These are available hierarchy levels, not a six-color section sequence or automatic shadow/elevation scale. Keep the same role for a layout region across breakpoints. On-surface roles work across neutral containers; accent containers use their paired foregrounds.

#### Signature fields and validation

| Custom role | Fill | Foreground | Use |
| --- | --- | --- | --- |
| Brand impact, both themes | `#789FFF` | `#0B111F` | Strong periwinkle business-impact field |
| Brand signal, both themes | `#EC6B66` | `#0B111F` | Selected work and coral testimonial field |
| Error, light | `#A82E29` | `#FBFAF8` | Validation |
| Error, dark | `#FFB4AC` | `#641F1D` | Validation |
| Success, light | `#30653E` | `#FBFAF8` | Actual success state |
| Success, dark | `#B1D1B7` | `#123A21` | Actual success state |

Signature fields are Veep editorial roles, not universal theme-independent UI colors. Their ink pairings calculate to 7.36:1 for periwinkle and 6.16:1 for coral. The accent/container foreground pairs exceed 4.5:1. Contrast must still be checked on actual backgrounds, including hover, focus, selection and disabled treatments. Error and success also require explicit text or icons; hue alone does not communicate state. A coral work marker on cream still needs a contrasting edge when its boundary carries meaning.

#### Application and migration

Reference values feed semantic roles, then component roles. Batches 01I–01J introduce the expanded roles in `tokens.css` and apply them to the homepage and shared aliases; existing aliases remain where other pages depend on them. The homepage has been reviewed in both themes; other page compositions still require their own migration review. Preserve neutral booking treatment until its actual surface context is reviewed. Do not replace every blue or coral literal blindly.

The newsletter should use primary-container/on-primary-container in both themes: pale blue/deep text in light, deep blue/pale text in dark. Operator evidence uses neutral/slate surfaces. Impact and testimonial retain their signature fields. This is a color application direction, not approval of unreviewed page layouts.

Audit page and section backgrounds, nested panels, portraits, typography, links, buttons, input boundaries, dividers, active diagram contours, construction lines, focus and interaction states. Use surface-specific foregrounds and validate desktop, tablet and mobile in both themes before declaring the migration complete. Existing `.v-paper` proof surfaces intentionally remain light within dark mode and must receive the complete light role mapping.

### Type and space

Plex Sans: body 400, headings and controls 500. Plex Mono: labels, numbers, and prices. No italic marketing copy and no 600/700 weights. Shared display scales fluidly up to 88px, section headings up to 54px, title up to 32px, lead up to 26px. The homepage has a 92px maximum hero display and a 64px maximum chapter statement; these page-owned expressive roles do not inflate other pages. Process is secondary reading, not a display headline. Body is 16px or 18px, captions 14px, short Mono labels 12px in the current foundation work. Long explanations must not be reduced to label size.

Use the 4/8/12/16/24/32/48/64/96/128 spacing family. The maximum container is 1360px including fluid 20–48px gutters. Header, ticker label, body sections, and footer share that alignment. The homepage hero is an editorial split within the shared container: a three-line headline at left and compact horizontal motion at right, followed by three problem statements beneath the headline and the positioning copy with equally weighted tonal For companies / For funds actions beneath the motion. Reserve the strongest neutral filled action for booking in the header and close. The full client ticker forms a ruled base inside that same container. At 600px and below, the two groups stack in reading order; the 601–1000px range keeps the split with a smaller display scale. Body measure is normally capped at 52 characters; the hero positioning paragraph uses 48ch. Standard section spacing is 64–104px, scaled to the available width. Audience routing and the delivery timeline share a compact 48–64px rhythm. Proof and operator headings use the same 48px separation from their evidence. Supporting problem/impact titles share a 20–28px role with 1.4/1.2 leading appropriate to statements/headings; process titles use 24px/1.2. These are page-owned roles, not additional global heading sizes.

### Shape and surface

The page remains open. Tonal sections organize chapters. An 8px panel contains genuinely related information. Cohesive profile surfaces use 15px corners with a 10px inset image frame. The homepage’s explicit bottleneck/ownership diagram sits on a quiet section tone; the strong blue chapter belongs to business impact. Controls use 6px corners. Scope frames stay square and executive centers stay circular. These roles connect the UI and motion without rounding every object identically. No shadow is used to decorate ordinary cards.

### Motion

The sequence remains **business idea → information diagram → abstract composition → motion**. Every scene must have legible problem and resolved frames.

Homepage semantics: small blue circles are unresolved work, the enclosing circle is the executive center, coral identifies one selected mandate, and its square boundary defines scope. That same coral circle leaves the center and advances to the right. Other work remains; Veep is not represented as eliminating every executive responsibility. Do not add another owner marker or enlarge the coral work object.

The shared homepage cycle is twelve seconds. The compact horizontal hero loop sits to the right of the headline on larger screens and after the problem subhead on mobile. The ownership diagram uses the same duration, with six arrivals from empty and one coral extraction leaving five moving items until reset. Mobile geometry shortens travel while keeping the shapes substantial. No homepage pause button is added. Motion pauses offscreen and when the document is hidden. Reduced motion uses the complete resolved frame. The ticker retains its full 16-client list, fades into its left label, pauses on hover/focus, and becomes a wrapped static list for reduced motion.

Functional interactions use 160–220ms transitions. Color and opacity do not overshoot. Small spatial movement uses a separate easing curve. No new animation dependency, page opacity gate, or decorative orbit is introduced.

## Component contracts

| Component               | Purpose and rules                                                                                                                                                                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ActionLink` / `Button` | Primary neutral fill, secondary/on-secondary-container pair, quiet text. Geometry stays at 6px corners across hover, press and focus; feedback is tonal, without scaling or changing the radius. Secondary hover blends 8% foreground; press blends 12%. Minimum 44px target. Native link/button semantics. Focus ring is 2px with space around it. Disabled is an actual disabled button. Selected examples combine fill, boundary, and explicit state text.                                            |
| `BookLink`              | Wraps the canonical action with the existing booking URL, new-tab behavior, and label. Never substitute it for the Join application link.                                                                                                                                                               |
| `TextLink`              | Underline provides recognition beyond color and strengthens on hover/press; arrow remains stationary and decorative; retains existing router destinations and hashes.                                                                                                                                                                                      |
| `Disclosure`            | Native details/summary; keyboard activation; plus changes to a close mark; answer remains readable without an animated height trick.                                                                                                                                                                    |
| `Field`                 | Persistent visible label, associated hint/error, `aria-invalid`, visible error message. This milestone demonstrates the component; it does not rewrite live form handlers.                                                                                                                              |
| Header / footer         | Shared container and semantic colors. Desktop active route uses the paired secondary container and foreground, with distinct hover and pressed feedback. Mobile menu focuses the first item, contains keyboard focus, closes on Escape, and returns focus to its trigger.                                                                                                 |
| `ProfileFigure`         | One panel-tone surface with a 4:5 portrait, name, role, and one supported credential. Plex Sans for name and evidence; 12px Plex Mono for the role. The image frame owns the corner crop. Caption identifies the person; image alt is empty to avoid repetition. No availability or marketplace badges. |
| `MotionScene`           | Existing semantic SVG composition and reduced-motion fallback. Colors inherit theme roles on migrated surfaces.                                                                                                                                                                                         |

## Public copy direction · 9 October 2026

Dave's site-wide copy correction takes precedence over earlier provenance-footnote treatments. Use direct, calm, commercially grounded language. State the work, the result, and the next step with confidence.

- Let named operators, roles, companies, and concrete achievements establish credibility. Do not append blanket warnings about work before Veep or current availability.
- Testimonials stand with their speaker and company. Do not add editorial disclaimers separating them from nearby cases.
- Label conceptual content plainly: “Example mandate,” “Example company mandates,” or “Example finance workflow.” Avoid a second sentence explaining what the example is not.
- Calls to action explain what the reader gets: define the priority, recommend the operating capacity, agree the next step. Avoid repeated “whether Veep is the right fit” endings.
- Keep supported figures, exact testimonial wording, prices, scope, service responsibilities, and commercial terms accurate. Put useful terms where readers make the relevant decision; do not repeat them as defensive marketing footnotes.
- Retain the canonical “It's probably a job for Veep.” Its conversational recognition is deliberate brand voice.
- Preserve Dave’s exact current hero positioning: “Founders and funds hire to own high-stakes mandates across strategic finance, GTM, and operations when the work has no owner and needs to move now.” The three problem statements sit beneath the headline. Both audience routes keep their approved destinations; header and closing booking links retain their existing behavior.

## Homepage editorial patterns

The homepage is an editorial split: a three-line headline and compact work animation share the first row; three problem statements and positioning with equal audience actions share the second. The sixteen-client ticker forms a ruled base on the same alignment. The hero remains open, with no eyebrow, colored period, or separate animation panel.

The next chapter makes ownership explicit: three alternatives return work to Your desk. The circle and Veep wordmark rectangle are centered on the progression line. Six incoming items accumulate and keep moving inside the circle; one turns coral and leaves, reducing the count to five. The wordmark switches with the theme. The separated accountability statement reads “Veep is accountable” and “for scope, quality, and continuity from delivery through to handoff.”

The current sequence is hero/ticker → ownership/accountability → periwinkle business impact → Companies/Funds routing → always-visible Scope/Assemble/Own/Deliver timeline → paper proof → coral client voice → operator profiles → prior-company ticker → newsletter → booking close. The proof retains the $6M raise and 25% project-margin improvement; the testimonial retains its exact quotation and attribution. Labels read “B2B SAAS · FINANCE” and “SOFTWARE STUDIO · GROWTH.” Profiles include existing past-company evidence above the achievement.

Above 600px the ownership progression is horizontal; at and below 600px it becomes vertical. Both layouts loop while visible and pause offscreen or when the document is hidden. Reduced motion shows the resolved relationship without movement. The hero stacks at 600px, with a smaller split composition from 601–1000px. Profiles use four columns on desktop, two at medium widths, then horizontal single-column cards at 600px. Navigation changes at 1024px. No new breakpoint is introduced by the Material refinement.

See [the batch ledger](IMPLEMENTATION-BATCHES.md) for the rejected process-first pilot, its narrative correction, copy provenance, and review evidence. Shared foundations and full-site acceptance remain in the batch plan; this revision does not establish a new immovable template.

The diagram, proof spread, and editorial page composition remain bespoke. Do not create a generic card abstraction for every section.

## Audit and migration map

Source observations are separate from this milestone's visual QA. The recurring structural problem was several CSS systems styling the same role: utility classes, `.rebuild`, `.ve-*`, motion integration, and page-specific overrides. Buttons, type sizes, portrait corners, and color roles could drift independently. The homepage now uses `.ve-system` and `.vh-*` rather than another layer over `.rebuild`. 98 obsolete homepage/portrait selector groups were removed from legacy styles.

| Page                            | Preserve                                                                                         | Next system application                                                                                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Home (`index.tsx`)              | Thesis, client list, work loop, explicit ownership change, supported results, career attribution | Narrative correction ready for review; foundation/component rollout and final acceptance remain in the batch plan     |
| Companies (`for-companies.tsx`) | Scoped mandate, proof narrative, commercial terms, Agent Teams within Companies                  | Migrate type and surfaces; retain explanatory diagrams; downplay Agent Teams and do not imply a delivery track record |
| Funds (`for-portfolios.tsx`)    | Lifecycle, independent company mandates, audit, roster terms, portfolio relationship             | Apply surface and hierarchy roles without turning separate company scopes into a generic network                      |
| Pricing (`pricing.tsx`)         | Prices, tiers, differences, qualifications, booking destinations                                 | Lower visual intensity, canonical rows/actions/disclosures; keep comparisons scannable                                |
| About (`about.tsx`)             | Founder stories, network imagery, career qualifications                                          | Editorial image sequence and shared portrait shape; remove redundant labels where they do no work                     |
| Join (`join.tsx`)               | Operator-focused narrative, criteria, application handler and destination                        | Apply field/state rules only after tracing existing form behavior; avoid talent-marketplace styling                   |
| FAQ (`faq.tsx`)                 | Questions, answers, grouping and destinations                                                    | Canonical disclosure now shared; page typography and spacing migrate next                                             |
| MeetVeep (`meetveep.tsx`)       | Low-friction conversion, method, case qualification, contact route                               | Quiet conversion layout using shared actions; preserve noindex behavior                                               |

Retain older styles needed by unmigrated pages until those pages are inspected and migrated. Do not globally reset portal, legal, forms, or unrelated public surfaces. The existing route paths, `BOOKING_URL`, form notifications, prices, and legal content remain protected.

## Earlier review record (before the current composition pilot)

Studio Critic review focused on actual rendered hierarchy, section rhythm, and responsive composition. The main corrections were the duplicate desktop menu trigger, excess empty space in the tablet ownership panel, repeated client evidence, and inconsistent portrait/control treatment. At that checkpoint the hero and paper proof spread were the principal peaks. Restraint comes from removing a repeated ticker and decorative audience glyphs, not removing business qualifications.

The Vosler review used the supplied source's Page 169 argument diagnostic: relevance, logical support, reader control, and realistic objections. The existing sequence already supports those needs: slipping work → ownership responsibilities → concrete evidence → next step. Preserve supported proof and the explicit client decision boundary. This is an editorial assessment, not evidence of conversion performance.

See `SYSTEM-REVIEW-QA.md` for the recorded checks and remaining rollout scope.

## Container and secondary motion refinement · 9 October 2026

The [tonal container decisions](CONTAINERS-AND-SECONDARY-MOTION.md) supersede earlier accent-edge and open-caption profile treatments. Profiles now compose portrait, name, role, and evidence on one surface. General panels use an 8px radius; profile surfaces retain 15px corners.

## Material Web assessment applied · 9 October 2026

Use the official [theming hierarchy](https://github.com/material-components/material-web/blob/main/docs/theming/README.md), [color pairs](https://github.com/material-components/material-web/blob/main/docs/theming/color.md), [button emphasis](https://github.com/material-components/material-web/blob/main/docs/components/button.md), and [state layers](https://github.com/material-components/material-web/blob/main/docs/components/ripple.md) as references for the custom system. No Material dependency is installed: the [roadmap](https://github.com/material-components/material-web/blob/main/docs/roadmap.md) records maintenance mode with no planned new features/components.

`interactions.css` owns action, navigation, icon-control and text-link anatomy and states. The newsletter passes its primary/on-primary colors into that shared action contract. Color roles stay stable across responsive layouts. Paper proof establishes a complete nested light palette; secondary audience controls use their own paired foreground, and decorative dividers stay separate from functional control boundaries. The specimen demonstrates the real components with no form submission.
