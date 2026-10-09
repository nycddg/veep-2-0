# Veep motion: work changes state

## Information design before motion

Every composition starts with a business relationship, then a static problem and resolved state. The visual reference supplies line hierarchy, palette and restraint; it does not supply the business structure. Timing cannot rescue arbitrary geometry.

## Shared semantic vocabulary

| Primitive                           | Meaning                          | Placement rule                                                                                                  |
| ----------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Filled blue square                  | The work                         | Inside its defined scope, or at the starting position before it is scoped                                       |
| Dashed boundary                     | Potential or former scope        | Shows a relevant reference position, never decoration                                                           |
| Solid blue boundary                 | Defined mandate                  | Encloses the work it governs                                                                                    |
| Coral node                          | Accountable owner / relationship | Touches the scope boundary or relationship rail it is responsible for; detachment is explicitly a problem state |
| Hollow small square                 | Supporting capability            | Connects to the scope boundary when relevant; unused capability stays detached                                  |
| Active blue path                    | Owned movement or coordination   | Connects actual source and destination; never an ornamental intersection                                        |
| Muted path                          | Unresolved or background work    | Remains secondary to the owned path                                                                             |
| Capped endpoint                     | Delivery direction               | Terminates the owned path                                                                                       |
| Large hollow center containing work | Executive bottleneck             | Receives returning work paths; load decreases when a stream leaves                                              |
| Larger muted container              | Portfolio company                | Contains its own mandate; never shares a delivery scope with another company                                    |

Use Veep blue (#789FFF dark / #4E7AD4 light), coral #F43F34 and theme-muted construction lines. Backgrounds remain transparent. Reference strokes are 1.2–1.5px; active routes 2px; scope outlines 3px; endpoint caps 4px. Filled areas supply contrast without making every line heavy. No yellow, textures, random orbits, arbitrary rotations, node labels or simulated dashboards.

## Composition definitions and static-state test

### Home: work stops returning to your desk

The 2026-10-09 screen-recording reference prompted a deliberate reduction: the homepage expresses one event at a time, rather than drawing every business role as a separate node. The separate support network, branching routes, pressure rings, reference boxes and delivery cap have been removed.

- **Primary object:** one larger blue work square, among two smaller work pieces.
- **Executive center:** a single open circle. All three pieces repeatedly return into it, and it expands under their load.
- **Scope and ownership:** a frame closes around the selected work after it leaves the center. A coral node attaches directly to that frame.
- **Direction:** quiet horizontal entry axes and a single vertical guide. The work, scope and owner subsequently travel down together as one unit. They do not return to the center.
- **Problem frame:** all three pieces collect inside the expanded circle.
- **Resolved frame:** the center has relaxed and retains the other two pieces. The owned unit has settled below it, visibly separate and still intact.

The portrait composition puts the collecting circle beside the headline and the resolved owned unit near the CTA level. It uses a 420×540 drawing space capped at 430px wide on desktop and 360px wide on mobile. The same geometry and stable SVG key preserve playback through responsive changes.

Home alone runs a continuous **9-second loop**:

1. **0–2.8s:** work returns twice; the ring expands in response to the load.
2. **2.8–4.6s:** one piece leaves, its boundary closes, and an owner attaches.
3. **4.8–6.4s:** the complete owned unit moves down and settles with a small overshoot.
4. **6.4–7.6s:** the resolved arrangement holds.
5. **7.6–9.0s:** that unit clears forward, and fresh upstream work begins the next cycle.

The owner remains attached to its scope throughout delivery. There are no decorative rotations, orbiting nodes, animated network branches, or frame-by-frame React updates. The remaining forms and restrained settling motion borrow the reference's simplicity; the geometry retains Veep's blue/coral palette. The static/reduced-motion state shows the complete resolution. Supporting capability is explained in page content rather than encoded as another network in this hero.

### Companies: a mandate gains an owner

- **Primary object:** one fixed work square.
- **Secondary actors:** one owner and two supporting capabilities.
- **Relationship:** a boundary governs the work; the owner attaches to its upper edge; support connects at its sides.
- **Direction:** a single delivery path leaves below the mandate.
- **Problem frame:** potential scope, detached owner, detached capabilities, no delivery route.
- **Resolved frame:** a defined scope encloses the unchanged work, responsibility touches it, support joins it, and a delivery endpoint is reachable.

### Agent Teams: the right team forms around the work

- **Primary object:** the already scoped, owned mandate, fixed at the center throughout.
- **Secondary actors:** four candidate capabilities.
- **Relationship:** only three connect to the mandate; the fourth remains separate and muted.
- **Direction:** capabilities move inward to attachment positions, not around an orbit.
- **Problem frame:** owned work and disconnected possible support.
- **Resolved frame:** one coherent configuration around the unchanged mandate; the irrelevant capability stays visibly outside it.

The component remains within Companies. Nearby copy, not geometry, explains human review, technical oversight and approvals. The example remains illustrative and separately scoped.

### Funds: one relationship, distinct company mandates

- **Primary object:** the relationship above a set of independent companies.
- **Secondary actors:** each company and its mandate.
- **Relationship:** three explicit levels: relationship rail → separate company containers → scoped work inside each company.
- **Direction:** shared access branches downward. No mandate crosses or connects to another company.
- **Problem frame:** companies and work remain disconnected from shared access; scope is potential.
- **Resolved frame:** branches reach company boundaries and each work square is centered in its own defined scope.

Mobile shows two companies rather than compressing three. The containment hierarchy and commercial separation remain the same.

### Handoff: delivery carries forward

- **Primary object:** work transferring from an originating scope to a receiving scope.
- **Secondary actors:** the owner and the capability retained at the receiving end.
- **Relationship:** both work and responsibility cross; the receiving scope retains a connected capability.
- **Direction:** left to right, with retained support below the receiving scope.
- **Problem frame:** work and ownership are on the left; the receiver is only a reference boundary.
- **Resolved frame:** work and owner sit in the defined receiving scope. The old scope becomes a reference; the receiving capability remains attached.

This is a conceptual handoff, not a claim of ongoing Veep support or a perpetual retainer.

## Secondary library

Pricing uses a broad potential boundary resolving into a defined mandate with support at its edges. Join keeps an owned mandate fixed while relevant expertise joins it and one unused capability remains separate. MeetVeep moves disconnected work into a scoped first step with an attached owner and an onward path. Each has paired static states in the local review source.

## Motion follows the relationships

The default rhythm is problem → boundary/connection → transfer or attachment → resolved hold. Home runs the 9-second loop defined above. Other core scenes remain finite at 4.6–5.2s; secondary scenes remain finite at 3.4–3.6s. Paths draw only between meaningful objects. Work follows its route; supporting capabilities move toward their attachment positions; an owner moves onto the boundary it owns. No movement exists merely to add personality.

Cubic-bezier(.65,0,.2,1) provides controlled acceleration and deceleration. Choreography is an authored interpretation, not timing inferred from the still [Motion reference](https://motion.dev/). Finite scenes stop at the resolved arrangement used for reduced motion. Home has a resolved hold before its next cycle. The existing ticker retains its separate behavior.

## Placement and copy

| Surface                      | Treatment                                                                                                                                                                                                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home                         | The owned-branch composition replaces the portrait hero. The positioning sentence remains; the process sentence is removed because the page already explains the method. Four portraits move into a still proof spread, retaining career qualifications.             |
| For Companies                | The scope / ownership composition carries the opening. The existing scope explorer, responsibility map, proof, commercial terms and operator spotlights stay available.                                                                                              |
| Agent Teams within Companies | The fixed-mandate / selective-team composition accompanies the section. The model remains explicitly illustrative and separately scoped. Client decisions, operator review and technical oversight remain stated in text. No standalone Agent Teams page is created. |
| Companies / handoff          | The handoff is a smaller composition beside the delivery narrative. It does not add a claim of ongoing support.                                                                                                                                                      |
| For Funds                    | The three-level relationship composition carries the hero. Detailed copy and the existing relationship map retain separate scopes, statements of work and delivery fees.                                                                                             |
| Pricing                      | Scope configuration is a small accent. It is not a configuration tool or a pricing calculator. All prices and terms stay unchanged.                                                                                                                                  |
| About                        | Keep the editorial hero and people still. The point of view is already clear without another animation.                                                                                                                                                              |
| Join                         | Relevant expertise is a small accent. Existing operator portraits move into the experience section; application behavior stays unchanged.                                                                                                                            |
| FAQ                          | Keep the existing disclosure interaction; no graphic hero.                                                                                                                                                                                                           |
| MeetVeep                     | The scoped first-step composition replaces the hero portrait and supports the first conversation. No promised outcome or availability is introduced.                                                                                                                 |

## Responsive composition

Home uses the 420×540 portrait composition at every width. Other principal scenes on desktop/tablet use a 600×520 drawing space. At 600px and below the other principal studies use a 360×450 composition with repositioned relationships and shorter travel. Funds reduces three companies to two; it retains the nested company/mandate hierarchy. The smaller accents have their own 380×250 space. Below 900px, principal hero copy and art stack; controls remain touch-accessible.

SVG aspect ratios reserve space before hydration. Animations change transforms, SVG stroke dash offsets and visibility, never page layout; there are no filters or canvas render loops. Hero photos no longer compete for LCP; proof images load lazily.

## Runtime and accessibility

Shared React SVG components and CSS keyframes; Home explicitly loops and other scenes remain finite; no animation library, new runtime dependency, or frame-by-frame React state updates.

- Start when at least 25% of the figure is visible. Home continues cycling while visible; other scenes play once.
- Pause when offscreen or when the document is hidden.
- Pause / Play / Replay controls are keyboard accessible with visible focus.
- Scrolling back resumes the Home loop at its paused position; it does not restart a finished finite composition.
- Reduced motion and no-JavaScript rendering show a coherent static arrangement, rather than blank art.
- SVG titles and descriptions describe the abstract action, without exposing a schematic legend.
- The drawing contains no visible text; headline, body and CTA remain readable throughout.
- The control row reserves its height with or without motion.
- The study opens with paired problem/resolved frames. “Play transitions” animates only the resolved side. Static comparison uses the same still branch as reduced motion, without changing system settings.

## Local study source

The eight paired composition studies live in design/motion-study.tsx. They are not a public route or a production asset. To export a standalone local review:

    bun build design/motion-study.tsx --target=browser --format=iife --outdir=/private/tmp/veep-motion-study
    cp design/motion-study.html /private/tmp/veep-motion-study/index.html

Open the exported index.html locally. The stylesheet uses the site's existing IBM Plex Sans font.

## Validation

Validated locally on 2026-10-08:

- Production build passed; targeted ESLint passed for all changed implementation files and the local study; `git diff --check` passed.
- Home, Companies and Funds rendered at 1440, 1024, 768, 390 and 320px in both themes (30 combinations). Each completed its finite sequence; no page overflow, clipped SVG geometry or visible SVG text was detected.
- Pricing, Join and MeetVeep rendered at 1440 and 390px in both themes. Assembly and handoff were inspected within Companies at desktop and mobile sizes. About and FAQ retain zero added motion scenes.
- Five paired problem/resolved core compositions were visually inspected before finalizing transitions. The study provides paired states for all eight compositions, using the same still rendering branch as reduced motion. OS-level reduced-motion settings were not changed.
- Keyboard replay, manual pause/resume and offscreen pausing were exercised on Home. Paused transforms stayed unchanged; offscreen animation play state was paused.
- Forms were not submitted. Booking destinations, prices, commercial qualifications and legal/portal surfaces were not changed.
- Full TypeScript checking still reports 11 errors in existing unrelated files (PageHero, SiteHeader, auth middleware, portal code and the root route); none were in the motion implementation. The production build passes independently.

These are local rendering and interaction checks, not a production Core Web Vitals measurement or a user comprehension study. The static-state review establishes a consistent information model; audience comprehension remains a design judgment for review.

Screenshot and viewport records are saved in the task's `veep-abstract-motion` artifact folder. The final files are `states-*.png`, `home/companies/funds-{theme}-{width}-*.png`, and `responsive-checks.json`; earlier exploratory captures in that folder are superseded.

### Homepage loop follow-up — 2026-10-09

The horizontal and initial vertical network explorations were superseded by the simpler loop described above after reviewing the supplied 4.38-second Motion screen recording. Only the final `minimal` captures describe the current homepage.

Current homepage screenshots and check records are in `veep-abstract-motion/home-loop-2026-10-09/minimal`.

Final simplified-loop validation:

- Home rendered at 1440, 1024, 768, 390 and 320px in both themes without horizontal overflow or clipped geometry.
- Two complete nine-second loops were inspected. Work returned, left the center, gained its frame/owner, moved as one unit, settled and cleared forward before the next cycle.
- Manual pause stayed held across theme and viewport changes; offscreen animation paused. Keyboard play/resume was verified through the shared control. A Companies smoke check confirmed its finite scene still finishes with Replay.
- Both static problem/resolved frames were inspected. They have no active keyframes or playback controls. This uses the same still branch as reduced motion; OS settings were not changed.
- No page copy, booking destinations, prices, forms, ticker behavior or other page compositions changed in this homepage follow-up.
- Production build, targeted ESLint and diff formatting checks passed. Full TypeScript checking still reports the same 11 existing errors outside the motion files; no new motion errors were reported.
