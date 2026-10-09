# Veep design system

Decision record · 9 October 2026 · Homepage review milestone

## Authority and scope

Use Material 3 as structural guidance and Veep as the visual identity. Dave's explicit **no yellow** instruction supersedes the yellow language in the original system brief. The supplied September brand sheet informs the warm light surfaces, IBM Plex typography, blue, coral, and 15px imagery treatment. The site retains its dark default. This intentionally translates a light microsite reference rather than applying that document wholesale.

This milestone covers shared foundations, public header/footer, the booking action, text links, disclosures, and the homepage. Companies, Funds, Pricing, About, Join, FAQ, and MeetVeep retain their existing page compositions pending the next migration. Shared chrome and reused controls already inherit the new system. Portal surfaces and application handlers are outside this pass.

Open the working reference at **http://127.0.0.1:8090/__design-system/**. It uses the actual components and tokens. Its fields demonstrate local state only and send nothing. Vite's development middleware serves this address; it is not registered as a production route or build entry.

## What Material contributes

The official sources were read before implementation. Material 3 Expressive evolves M3 through stronger emphasis, more varied shape, emphasized typography, richer component behavior, and a motion model distinguishing spatial movement from visual effects. It is not a requirement to use Google's colors, fonts, icons, navigation, or every component.

| Principle                                    | Veep decision                                                                                                                                                | Source                                                                                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Reference, system, and component tokens      | Brand values feed semantic roles; components consume roles                                                                                                   | [Design tokens](https://m3.material.io/foundations/design-tokens/overview)                                                                |
| Paired surface and foreground roles          | Deliberate dark and light mappings, including inverse paper proof                                                                                            | [Color system](https://m3.material.io/styles/color/the-color-system)                                                                      |
| Concentrated expressive emphasis             | The hero is the visual peak; explanation and evidence become quieter                                                                                         | [Building with M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)                                                    |
| Role-based typography                        | Plex display, heading, title, lead, body, caption, and label roles; no new font or heavy weight                                                              | [Typography](https://m3.material.io/styles/typography/overview)                                                                           |
| Shape variety with discipline                | Square scope frames, 6px controls, 15px panels and images, meaningful circular centers                                                                       | [Shape](https://m3.material.io/styles/shape/overview)                                                                                     |
| Elevation communicates spatial relationships | Tonal sections and panels first; shadows reserved for true overlays                                                                                          | [Elevation](https://m3.material.io/styles/elevation/overview)                                                                             |
| Distinct, consistent states                  | Shared hover, focus, press, selected, disabled, validation, and disclosure behavior                                                                          | [States](https://m3.material.io/foundations/interaction/states/overview), [Buttons](https://m3.material.io/components/buttons/guidelines) |
| Separate spatial and effects motion          | Spatial easing for small movement; functional easing for color and state. Preserve authored CSS choreography; do not claim these curves are physical springs | [Motion](https://m3.material.io/styles/motion/overview/how-it-works)                                                                      |
| Adapt to available space                     | Recompose ownership, portraits, and navigation at content-driven breakpoints                                                                                 | [Adaptive window sizing](https://developer.android.com/develop/ui/views/layout/use-window-size-classes)                                   |

Do not import dynamic wallpaper colors, Android navigation rails, stock Material shapes, universal pill buttons, or a component library. Material's flexible shape guidance does not override the stable business meanings Dave requires in Veep diagrams.

## Foundations

The executable source of truth is `src/components/site/system/tokens.css`. `system.css` defines shared anatomy and state behavior. `home.css` owns the homepage's editorial compositions. Do not add page-specific values to the global legacy theme to migrate one page.

### Color

| Role              | Dark                | Light                                |
| ----------------- | ------------------- | ------------------------------------ |
| Page              | Night `#080C14`     | Cream `#FBFAF8`                      |
| Quiet section     | `#111925`           | `#F6F4F1`                            |
| Information panel | `#192331`           | `#F0EEEA`                            |
| Primary text      | `#F6F5F2`           | Ink `#0B111F`                        |
| Secondary text    | `#B1BBC9`           | Stone `#3B4350`                      |
| Blue accent       | `#789FFF`           | `#4E7AD4`                            |
| Small text link   | `#789FFF`           | Accessible blue derivative `#406ABA` |
| Signal            | Coral `#EC6B66`     | Coral `#EC6B66`                      |
| Primary action    | Cream with ink text | Ink with cream text                  |

Blue establishes active paths, boundaries, links, and focus. Coral identifies the selected work object in the homepage story and provides sparse punctuation. It is not a body-text color. The coral circle gets a fine ink edge in light mode because its fill alone has insufficient contrast against cream. Construction guides may be quiet; active objects and UI controls need stronger contrast. Status colors are confined to validation or actual state, never decorative palette expansion.

The `.v-paper` section deliberately uses light semantic roles inside dark mode. Nested `data-ve-theme` attributes provide the same mapping in the specimen. Light link color is slightly darker than the brand accent to support normal text on the light surfaces. Buttons use a neutral fill, preserving the light brand sheet's distinction between colored graphics and UI chrome.

### Type and space

Plex Sans: body 400, headings and controls 500. Plex Mono: labels, numbers, and prices. No italic marketing copy and no 600/700 weights. Display scales fluidly up to 88px, section headings up to 54px, title up to 32px, lead up to 26px. Body is 16px or 18px, captions 14px, short Mono labels 11px. Long explanations must not be reduced to label size.

Use the 4/8/12/16/24/32/48/64/96/128 spacing family. The maximum container is 1360px including fluid 20–48px gutters. Header, ticker label, body sections, and footer share that alignment. The homepage hero forms its own centered composition within the container. Headline, subhead, and body copy form one centered group, followed by the horizontal motion and a centered booking action. Body measure is normally capped at 52 characters; the hero introduction uses a wider 62-character measure on desktop and 34 on mobile. Section spacing is 64–104px, scaled to the available width.

### Shape and surface

The page remains open. Tonal sections organize chapters. A 15px panel contains genuinely related information, such as the ownership process. Portraits share that radius. Controls use 6px corners. Scope frames stay square and executive centers stay circular. These roles connect the UI and motion without rounding every object identically. No shadow is used to decorate ordinary cards.

### Motion

The sequence remains **business idea → information diagram → abstract composition → motion**. Every scene must have legible problem and resolved frames.

Homepage semantics: small blue circles are unresolved work, the enclosing circle is the executive center, coral identifies one selected mandate, and its square boundary defines scope. That same coral circle leaves the center and advances to the right. Other work remains; Veep is not represented as eliminating every executive responsibility. Do not add another owner marker or enlarge the coral work object.

The approved 5.4-second loop remains, now arranged horizontally beneath the headline and subhead. Mobile geometry shortens travel while keeping the shapes substantial. No homepage pause button is added. Motion pauses offscreen and when the document is hidden. Reduced motion uses the complete resolved frame. The ticker retains its full 16-client list, fades into its left label, pauses on hover/focus, and becomes a wrapped static list for reduced motion.

Functional interactions use 160–220ms transitions. Color and opacity do not overshoot. Small spatial movement uses a separate easing curve. No new animation dependency, page opacity gate, or decorative orbit is introduced.

## Component contracts

| Component               | Purpose and rules                                                                                                                                                                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ActionLink` / `Button` | Primary neutral fill, secondary outline, quiet text. Minimum 44px target. Native link/button semantics. Focus ring is 2px with space around it. Disabled is an actual disabled button. Selected examples combine fill, boundary, and explicit state text. |
| `BookLink`              | Wraps the canonical action with the existing booking URL, new-tab behavior, and label. Never substitute it for the Join application link.                                                                                                                 |
| `TextLink`              | Underline provides recognition beyond color; arrow is decorative; retains existing router destinations and hashes.                                                                                                                                        |
| `Disclosure`            | Native details/summary; keyboard activation; plus changes to a close mark; answer remains readable without an animated height trick.                                                                                                                      |
| `Field`                 | Persistent visible label, associated hint/error, `aria-invalid`, visible error message. This milestone demonstrates the component; it does not rewrite live form handlers.                                                                                |
| Header / footer         | Shared container and semantic colors. Desktop active route has a coral underline. Mobile menu focuses the first item, contains keyboard focus, closes on Escape, and returns focus to its trigger.                                                        |
| `ProfileFigure`         | 4:5 portrait, consistent crop treatment, name, role, and one supported credential. Caption identifies the person; image alt is empty to avoid repeating that identity. No availability or marketplace badges.                                             |
| `MotionScene`           | Existing semantic SVG composition and reduced-motion fallback. Colors inherit theme roles on migrated surfaces.                                                                                                                                           |

## Homepage editorial patterns

The hero is one centered editorial composition: a two-line thesis on desktop, a close subhead and body paragraph, a wide horizontal work loop, then the booking action. There is no eyebrow. Mobile uses a balanced three-line headline and shorter horizontal motion. At Dave’s request, the “Founders, CEOs…” paragraph now belongs to the hero; the “Veep gives companies and funds…” paragraph sits beside “It can’t all land back on your desk.” The proposition and paragraph wording are unchanged. The ticker then supplies client evidence once. The ownership chapter explains what changes. Open audience columns lead to Companies and Funds. A paper proof spread connects the $6M outcome with the work behind it. Portraits then supply human credibility with career attribution. The close returns to the reader's unresolved priority and a 30-minute introduction.

At 768px, ownership becomes a stacked problem/solution with a two-column process inside the solution, avoiding a large empty column. At 600px and below, the process becomes one reading column. Portraits use four columns on desktop, two on smaller widths, and one below 350px. The mobile hero keeps the full text group above the diagram and the CTA immediately below it, with no reserved animation-control row. Navigation switches at 1024px.

The diagram, proof spread, and editorial page composition remain bespoke. Do not create a generic card abstraction for every section.

## Audit and migration map

Source observations are separate from this milestone's visual QA. The recurring structural problem was several CSS systems styling the same role: utility classes, `.rebuild`, `.ve-*`, motion integration, and page-specific overrides. Buttons, type sizes, portrait corners, and color roles could drift independently. The homepage now uses `.ve-system` and `.vh-*` rather than another layer over `.rebuild`. 98 obsolete homepage/portrait selector groups were removed from legacy styles.

| Page                            | Preserve                                                                                          | Next system application                                                                                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Home (`index.tsx`)              | Thesis, client list, work loop, ownership responsibilities, engagement result, career attribution | Completed for review in this milestone                                                                                |
| Companies (`for-companies.tsx`) | Scoped mandate, proof narrative, commercial terms, Agent Teams within Companies                   | Migrate type and surfaces; retain explanatory diagrams; downplay Agent Teams and do not imply a delivery track record |
| Funds (`for-portfolios.tsx`)    | Lifecycle, independent company mandates, audit, roster terms, portfolio relationship              | Apply surface and hierarchy roles without turning separate company scopes into a generic network                      |
| Pricing (`pricing.tsx`)         | Prices, tiers, differences, qualifications, booking destinations                                  | Lower visual intensity, canonical rows/actions/disclosures; keep comparisons scannable                                |
| About (`about.tsx`)             | Founder stories, network imagery, career qualifications                                           | Editorial image sequence and shared portrait shape; remove redundant labels where they do no work                     |
| Join (`join.tsx`)               | Operator-focused narrative, criteria, application handler and destination                         | Apply field/state rules only after tracing existing form behavior; avoid talent-marketplace styling                   |
| FAQ (`faq.tsx`)                 | Questions, answers, grouping and destinations                                                     | Canonical disclosure now shared; page typography and spacing migrate next                                             |
| MeetVeep (`meetveep.tsx`)       | Low-friction conversion, method, case qualification, contact route                                | Quiet conversion layout using shared actions; preserve noindex behavior                                               |

Retain older styles needed by unmigrated pages until those pages are inspected and migrated. Do not globally reset portal, legal, forms, or unrelated public surfaces. The existing route paths, `BOOKING_URL`, form notifications, prices, and legal content remain protected.

## Review record

Studio Critic review focused on actual rendered hierarchy, section rhythm, and responsive composition. The main corrections were the duplicate desktop menu trigger, excess empty space in the tablet ownership panel, repeated client evidence, and inconsistent portrait/control treatment. The hero and the paper proof spread remain the principal peaks. Restraint comes from removing a repeated ticker and decorative audience glyphs, not removing business qualifications.

The Vosler review used the supplied source's Page 169 argument diagnostic: relevance, logical support, reader control, and realistic objections. The existing sequence already supports those needs: slipping work → ownership responsibilities → concrete evidence → next step. Preserve supported proof and the explicit client decision boundary. This is an editorial assessment, not evidence of conversion performance.

See `SYSTEM-REVIEW-QA.md` for the recorded checks and remaining rollout scope.
