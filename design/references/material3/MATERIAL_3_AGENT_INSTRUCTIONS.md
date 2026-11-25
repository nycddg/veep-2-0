# MATERIAL_3_AGENT_INSTRUCTIONS.md

Operating manual for an AI design agent that must design within **Google Material Design 3 (M3)**, including **M3 Expressive**, exactly as documented on https://m3.material.io/ (content build `2026-09-23_06-10-05`, token DB v38.2.9; accessed 2026-10-09).

Every instruction cites the Material page it comes from. If an instruction here and the official page ever disagree, **the official page wins**. Re-check the page, because Material changes.

---

## 0. Ground rules (read first)

1. **Material is authoritative.** Use Material's terminology exactly: *color roles*, *surface container*, *state layer*, *breakpoints* (not "window size classes", which is the old name), *app bar* (not "top app bar", the old name), *navigation bar* (not "bottom navigation"), *emphasized* type styles, *motion scheme*, *spring tokens*.
2. **Never invent.** Don't make up token names, values, component variants, sizes, or rules. If the guide or the site doesn't answer a question, say "Material does not document this" and either ask, or pick the least-assumptive option and flag it as outside Material.
3. **Keep conditions intact.** Many Material rules are conditional ("Use static color if… your product is built for iOS"; "no longer recommended… for those who have updated"). Carry the condition with the rule.
4. **Keep standard M3 and M3 Expressive separate.** M3 Expressive "isn't a new version of the system… this isn't 'M4'" (https://m3.material.io/blog/building-with-m3-expressive). Before designing, decide whether the product uses the Expressive update (§10). Then use that track's components, motion scheme and type styles consistently.
5. **Respect statuses.** Treat anything marked *no longer recommended*, *[Deprecated]* (token sets), *Unavailable* (platform), *experimental*, or *Developer Preview* as such. See §12.
6. **No blending.** Don't import rules from other design systems (Apple HIG, Fluent, Tailwind defaults, Bootstrap, etc.). For iOS, use only what Material itself says about iOS.
7. **Use tokens, not literals.** "Use design tokens instead of hardcoded values" (https://m3.material.io/foundations/design-tokens/overview; token model in `11-design-tokens.md`). When you give a value, give the token and its baseline value, e.g. `md.sys.color.primary` (#6750A4 light / #D0BCFF dark in the baseline scheme).

8. **Targets: web / mobile web and native mobile, on equal footing.** Apply all Material guidance as written, then the platform specifics: **§15 Web and mobile web** or **§16 Native mobile** (Jetpack Compose, Android Views/MDC-Android, Flutter). Per-component availability for every platform, including Expressive, is in `13-repositories-implementation.md` §B. Official repositories: **§17**.

Where to look:
| Need | File |
|---|---|
| Component rules, specs, do/don'ts, accessibility | `09-components/<component>.md` (verbatim site text) |
| Token values (resolved) | `tokens/` (system-*.md, components/*.md) |
| Overview, philosophy, M3 vs M3 Expressive | `01-material-design-overview.md` |
| Foundations (content design, glossary, watches, XR, elevation, spacing, icons) | `02-foundations.md` |
| Color / typography / shape / motion | `03-color.md`, `04-typography.md`, `05-shape.md`, `06-motion.md` |
| Layout & adaptive | `07-layout-adaptive.md` |
| Accessibility | `08-accessibility.md` |
| Interaction states, inputs, gestures, selection, cross-component patterns | `10-patterns-interaction.md` |
| Token model, contexts, theming | `11-design-tokens.md` |
| Tools & assets | `12-tools-assets.md` |
| Per-component availability on Web / Compose / Views / Flutter (incl. Expressive) | `13-repositories-implementation.md` §B; each component file's "Implementation links" section |
| Web specifics | `13-repositories-implementation.md` §C, §15 below |
| Native mobile specifics | `13-repositories-implementation.md` §D, §16 below |
| Official GitHub repositories | §17 below; full table in `13-repositories-implementation.md` §A |
| Platform availability, all platforms | `13-repositories-implementation.md` (status matrix) |
| Exact original page | URL in each section, or `raw/text/*.md` |

---

## 1. Decision hierarchy (reason in this order)

The brief's 11-step order matches how Material structures its guidance, so it's kept as is. Material documents no different ordering.

1. **User/task requirements.** What is the user's primary goal on this screen? Material: "Each screen should contain a single prominent button for the primary action" (https://m3.material.io/components/all-buttons). Expressive usability work starts from the app's goals in order of priority (https://m3.material.io/foundations/usability/applying-m3-expressive).
2. **Platform/context.** Web / mobile web (§15) or native mobile: Jetpack Compose, Android Views (MDC-Android), Flutter (§16). Other targets: iOS (only what Material says), Wear OS, Android XR. **Check the component's status for that platform (and its Expressive status) in `13-repositories-implementation.md` §B before you specify it.** Web has no Expressive. Flutter has no Expressive. Compose has all Expressive components (experimental until Compose Material 1.5.0). Views is in maintenance mode.
3. **Material foundation rules.** Accessibility by default (§9), content design, tokens.
4. **Layout/adaptive requirements.** Pick the breakpoint(s), number of panes, and canonical layout (§6).
5. **Appropriate Material component.** Use the selection logic in §7. Don't build custom components when a Material component fits. If you need a custom one, map it to Material color roles (https://m3.material.io/styles/color/roles: "If your product contains custom components, they'll need to be properly mapped to this set of color roles").
6. **Semantic design tokens.** Color roles (§2), type styles (§3), shape (§4), elevation, spacing (§5).
7. **States and interaction** (§8).
8. **Accessibility check** (§9).
9. **Motion** (§11).
10. **Expressive treatment, where appropriate** (§10).
11. **Final Material compliance review** (§13 checklist).

---

## 2. Color — how to assign roles
Sources: https://m3.material.io/styles/color/roles · https://m3.material.io/styles/color/choosing-a-scheme · https://m3.material.io/styles/color/system/overview · values: `tokens/system-color.md`

**Do**
- **Pick the scheme type first, keeping its conditions.** Use **static (baseline)** if: you're not ready for dynamic color; you're migrating from M2; the product is enterprise and wouldn't benefit from personalized color or user-controlled contrast; **the product is built for iOS**. Use **dynamic** if: you want personalization; you want colors driven by wallpaper or in-app content; you want user-controlled contrast; or you aren't sure whether you'll need a mix. For dynamic color, design first with the baseline scheme so role mapping is correct, then check it in Material Theme Builder.
- **Assign roles by emphasis:**
  - **Primary**: "the most prominent components… such as the FAB, high-emphasis buttons, and active states."
  - **Secondary**: "less prominent components… such as filter chips"; secondary container is for "recessive components like tonal buttons."
  - **Tertiary**: "contrasting accents… or bring heightened attention to an element such as an input field," at the designer's discretion.
  - **Error**: error states. It stays static in dynamic schemes.
- **Surfaces:** use `surface` for the background and `surface container` for navigation areas, which is "the most common combination." Use the five surface-container levels (lowest to highest) for hierarchy and nesting, especially in expanded layouts. Keep the same role for the same layout region at every breakpoint.
- **Text and icons:** use **on-** roles only on their paired fill (on primary on primary, on surface / on surface variant on any surface or surface container).
- **Outlines:** `outline` for important boundaries such as a text-field outline. `outline variant` for decorative elements such as dividers.
- **Contrast levels:** support standard, medium and high contrast. They are tokenized (values in `tokens/system-color.md`).

**Don't**
- Don't use **container** roles for text or icons ("They should not be used for text or icons").
- Don't pair roles outside their intended pairs. "Improper color mappings can produce unintended visual results and break accessibility."
- Don't use `outline` for dividers or for multi-element components like cards. Don't use `outline variant` to define target boundaries or create hierarchy. Caution: outline variant is acceptable on chip and button borders when the content inside them gives 4.5:1 contrast.
- Don't use **add-on roles** (fixed, fixed dim, surface bright/dim) unless you specifically need them: "If you aren't sure whether your product should use the add-on roles, it probably shouldn't." Don't use fixed colors where contrast is required.
- Don't hard-code hex values from the baseline scheme as if they were the product's colors. Dynamic and custom schemes change the values, but the roles stay the same.

---

## 3. Typography — how to choose type roles
Sources: https://m3.material.io/styles/typography/applying-type · https://m3.material.io/styles/typography/type-scale-tokens · https://m3.material.io/styles/typography/fonts · https://m3.material.io/styles/typography/editorial-treatments · values: `tokens/system-typography.md`, table in `04-typography.md`

**Do**
- Choose by role: **Display** (short, important text or numerals; best on large screens), **Headline** (short, high-emphasis text on smaller screens), **Title** (medium-emphasis, relatively short text), **Body** (long passages), **Label** (utilitarian text inside components; buttons use label large).
- "Select styles from the scale that are most appropriate." "No single product will use all the styles."
- Use the default font Roboto (static), which is applied to all M3 components by default. Variable fonts like Roboto Flex "aren't yet part of the M3 typescale." When you use Roboto Flex, set the fallback order Roboto Flex → Roboto → Noto Sans.
- **Expressive track only:** use **emphasized** styles "for selection, actions, headlines, and other editorial treatments." Baseline and emphasized styles "are meant to be used together."
- For editorial treatments: keep similar moments consistent (tokenize them) and match the emotional tone to the task.

**Don't**
- Don't use expressive or decorative fonts for body text. Be cautious with them for titles.
- Don't use editorial treatments "in labels or just to give information." Don't mix clashing editorial styles in one layout, and don't mimic personalization theming.
- Don't use very light weights for small body text, or excessive weight at small sizes (cautions on the editorial-treatments page).

---

## 4. Shape
Sources: https://m3.material.io/styles/shape/corner-radius-scale · https://m3.material.io/styles/shape/overview-principles · https://m3.material.io/styles/shape/shape-morph · values: `tokens/system-shape.md`

- Use the **10-step corner radius scale** via `md.sys.shape.corner.*`: none 0, extra-small 4, small 8, medium 12, large 16, large-increased 20, extra-large 28, extra-large-increased 32, extra-extra-large 48 (dp), and full. Components come pre-mapped. Keep component defaults unless you're customizing on purpose.
- "Generally, products should consistently use the Material 3 shape styles." Customization is "sometimes necessary, and even encouraged, for hero moments or custom components." Customize at the style level (affects every component mapped to that style) or the component level (remap a single component).
- Asymmetric "inner corners" belong to closely grouped items, such as menus and split buttons.
- **Expressive track:** use the 35-shape library for decorative elements (image crops, avatars, emphasis) and shape morph for state changes and actions in progress. Shape morph is available on Android (Compose `MaterialShapes`). **"Web is not currently available."** Caution: "Smaller shapes can result in essential actions looking less important."

---

## 5. Elevation, spacing, icons
Sources: https://m3.material.io/styles/elevation/overview · https://m3.material.io/styles/elevation/applying-elevation · https://m3.material.io/styles/spacing/overview · https://m3.material.io/styles/spacing/applying-spacing · https://m3.material.io/styles/icons/applying-icons

- **Elevation:** "Avoid changing the default elevation of Material 3 components." "Stick to using a small amount of elevation levels." The levels are level0–5 = 0/1/3/6/8/12dp. By default, M3 shows separation through tonal difference. Use shadows "only when required to create additional protection against a background or to encourage interaction." Overlapping containers need different color roles.
- **Spacing:** apply `md.sys.measurement.space*` tokens to padding, gaps and margins. The scale is 8dp-based (space100 = 8dp). Preserve spacing when text scales to 200%. Leading and trailing swap in RTL.
- **Icons:** Material Symbols are the default (outlined, rounded, sharp; axes for weight, fill, grade and optical size). In toggle icon buttons, use the outlined icon for unselected and the filled icon for selected (https://m3.material.io/components/icon-buttons/overview).

---

## 6. Layout and adaptive design
Sources: https://m3.material.io/foundations/layout/breakpoints/overview · https://m3.material.io/foundations/layout/canonical-examples/overview · https://m3.material.io/foundations/layout/scaffold/panes · details in `07-layout-adaptive.md`

- **Breakpoints (Android and web):** Compact <600dp · Medium 600–839 · Expanded 840–1199 · Large 1200–1599 · Extra-large 1600+. Design for breakpoints, not devices.
- **Per-breakpoint component recommendations** (from the breakpoints overview table):
  - Compact: 1 pane; navigation bar or modal expanded nav rail; simple or full-screen dialog; bottom sheet for actions.
  - Medium: 1 pane (recommended) or 2; navigation bar or modal expanded rail; simple dialog; menu.
  - Expanded and Large: 1 or 2 panes (2 recommended); modal or standard expanded rail; simple dialog; menu.
  - Extra-large: 1–3 panes (3 recommended); same navigation as Large.
- Start from a **canonical layout**: feed, list-detail, or supporting pane (primary area "typically about two-thirds").
- When moving between breakpoints, decide what to **reveal, divide, resize, reposition, or swap**.
- Panes are fixed or flexible. Multiple panes are co-planar, floating or docked. Use the pane adaptation strategies named on the panes page (e.g. show and hide, levitate).
- Design for RTL (https://m3.material.io/foundations/layout/bidirectionality-rtl).

---

## 7. Component selection logic

Use this only where Material documents the distinction. Full rules for each component are in `09-components/<name>.md`.

**Actions: which button?** (https://m3.material.io/components/all-buttons)
- **Need:** the primary, most important, or most common action on a screen. **Consider:** FAB / Extended FAB / FAB menu; filled button; split button; standard button group. **Choose by:**
  - Filled button: "final or unblocking actions in a flow."
  - Split button: "key actions with multiple options."
  - Standard button group: "show multiple key actions."
  - Extended FAB instead of FAB "when label text is needed to understand action."
  - FAB menu "Opens from a FAB to show 2–6 related actions" and "Replaces any usage of stacked small FABs." It's not used with extended FABs.
- **Need:** important, but not the main task. **Consider:** tonal, elevated or outlined button. Use elevated "only… when a button requires visual separation from a patterned background."
- **Need:** optional or supplementary. **Consider:** text button ("actions not essential to the user journey"), icon button ("optional supplementary actions such as 'Bookmark' or 'Star'"), connected button group ("changing the content visible on a page").
- **Rule:** one high-emphasis button per screen. Side by side beats stacked when there's room. **Avoid** cluttering the screen with buttons; move low-priority actions to overflow menus or icon buttons (buttons/guidelines).

**Selection controls**
- **Need:** select multiple from a list. **Choose:** checkbox ("Use checkboxes (instead of switches or radio buttons) if multiple options can be selected").
- **Need:** select exactly one from a list. **Choose:** radio button ("Use radio buttons (not switches) when only one item can be selected").
- **Need:** independently toggle settings. **Choose:** switch ("Use switches (not radio buttons) if the items in a list can be independently controlled"; "the best way to let people adjust settings").
- **Need:** choose among a few options or views as buttons. **Expressive track:** use a **connected button group**; "the segmented button is no longer recommended." **Baseline track:** the segmented button is for "simple choices between two to five items (for more items or complex choices, use chips)."
- **Need:** contextual options, filters or entries as compact elements. **Choose:** chips. "Choose the chip variant based on its purpose and author": an action → **assist**; filtering → **filter**; product-generated → **suggestion**; user-entered → **input**.
- **Need:** a value from a range. **Choose:** slider ("present the full range of available values"; "The slider value should take effect immediately").

**Navigation** (also see §6)
- Compact or medium: **navigation bar**, with 3–5 destinations of equal importance (Expressive: the **flexible** navigation bar; "Baseline navigation bar is no longer recommended").
- Medium and larger: **navigation rail**, with 3–7 destinations plus an optional FAB (Expressive: **collapsed** and **expanded** rails; "the baseline navigation rail is no longer recommended").
- Navigation drawer: "no longer recommended in the Material 3 Expressive update. For those who have updated, use an expanded navigation rail." On the baseline track, use the standard drawer at expanded and larger breakpoints, and the modal drawer at compact and medium.
- Peer content groups within a view: **tabs** (primary or secondary).
- Top of page: **app bar**, for the page title, navigation and 1–2 essential actions. Use a **toolbar** for page actions. Expressive: use medium flexible or large flexible app bars ("medium and large app bars… are no longer recommended"). The search app bar is the "emphasized, global entry-point" for search.

**Actions bars and menus**
- Frequently used page actions, always on screen: **toolbar** (docked or floating; "Use the vibrant color style for greater emphasis"). "Don't show at the same time as a navigation bar." The docked toolbar replaces the bottom app bar ("The bottom app bar is no longer recommended").
- Temporary set of actions: **menu** ("To show actions on screen at all times, use a toolbar instead"). Expressive: vertical menus are "recommended for new designs"; the baseline menu is still available.

**Communication and feedback**
- Critical information or a decision that blocks the flow: **dialog** ("disable all app functionality when they appear"; one task only; e.g. confirming high-risk actions). Basic or full-screen; full-screen is listed for compact.
- Short process update that doesn't interrupt: **snackbar** (bottom of the UI; dismissive or non-dismissive). Avoid icons and inline links in snackbars (caution and don't on snackbar/guidelines).
- Supplementary content or actions: **bottom sheet** (compact and medium; standard or modal) or **side sheet** (optional content and actions without interrupting the main content; "Standard side sheets are… used mostly in medium to expanded breakpoints"; "Modal side sheets are preferred in compact breakpoints").
- Brief label for an element: **plain tooltip** (describes icon buttons). More detail: **rich tooltip** (optional title, link, buttons). On the web, icon buttons should show a tooltip on hover.
- Counts or status on navigation items or icons: **badge** (small or large; up to 4 characters including "+").
- **Waiting:**
  - Loading under about five seconds, or pull-to-refresh: **loading indicator** ("should replace most uses of the indeterminate circular progress indicator"). Not used for processes that go from indeterminate to determinate.
  - Real-time status of a process: **progress indicator**, linear or circular. Use the same configuration for every instance of the same process. The wavy active track is optional, "for use cases that would benefit from increased expressiveness."

**Content containers**
- Content and actions on a single topic: **card** (elevated, filled or outlined).
- A scannable index to find an item and act on it: **list**.
- Scrolling visual items: **carousel** (multi-browse, uncontained, uncontained multi-aspect ratio, hero, center-aligned hero, full-screen).
- Grouping inside lists or containers: **divider**, "Only use dividers if items can't be grouped with open space."

**Input**
- Text entry: **text field**, filled or outlined. "Both variants… provide the same functionality. The variant… can depend on style alone."
- Dates: **date picker** (docked, modal, modal input). Times: **time picker** (dial or input; modal).
- Query-based navigation: **search** (search bar and search view, plus the search app bar).

Where Material gives no distinction, don't invent a decision tree. Present the options and cite the component pages.

---

## 8. States and interaction
Sources: https://m3.material.io/foundations/interaction/states/overview · …/state-layers · …/applying-states · values: `tokens/system-state.md` · full model plus inputs, gestures, selection and cross-component patterns: `10-patterns-interaction.md`

- Apply the six states consistently: enabled, disabled, hover, focused, pressed, dragged. "States have two visual indicators to ensure accessibility." States can be combined (e.g. selection + hover).
- Use **state layers**: an overlay in the content's color (usually the on-color) at a fixed opacity. Hover 8%, focus 10%, pressed 10%, dragged 16% (`md.sys.state.*`). Only one state layer at a time. The state layer is 40dp; the interactive target is 48dp.
- **Disabled:** shown "through color changes and reduced elevation." Disabled is inherited by buttons, cards, checkboxes, chips, list items, radio buttons, switches and text fields. It is **not** inherited by app bars, badges, dialogs, FABs, menus, navigation bar/drawer/rail, sheets, tabs and tooltips.
- Focus indicator tokens: thickness 3dp, outer offset 2dp, inner offset −3dp.

---

## 9. Accessibility (always on)
Sources: https://m3.material.io/foundations/overview/principles · https://m3.material.io/foundations/designing/color-contrast · https://m3.material.io/foundations/designing/elements · each component's Accessibility tab

- Text contrast: at least 4.5:1 for small text, and at least 3:1 for large text (14pt bold / 18pt regular and up) and graphics.
- Non-text containers such as buttons: 3:1 against their background. Clustered components should each reach 3:1. Standalone prominent elements like FABs are exempt from the container rule.
- Touch targets: "consider making touch targets at least 48 x 48dp." Web phrasing on the site: "The default target size should be at least 48x48 CSS pixels" (foundations/layout/grids-spacing/density). See §15.3.
- Use color roles only in their intended pairs, so contrast holds when users change contrast levels.
- Follow each component's Accessibility tab for keyboard, focus and screen-reader behavior. Don't generalize from one component to another.
- Content: alt text, writing, truncation and resizing rules are in `02-foundations.md` (content design) and `08-accessibility.md`.

---

## 10. M3 Expressive: when and how
Sources: https://m3.material.io/blog/building-with-m3-expressive · https://m3.material.io/foundations/usability/applying-m3-expressive · component Overview pages ("M3 Expressive update")

**Decide the track.**
- **Expressive track:** use the new and updated components (button groups, FAB menu, loading indicator, split button, toolbars; flexible nav bar; collapsed and expanded rails; flexible app bars; new button, FAB and icon-button sizes and shapes; wavy progress; updated sliders; vertical menus; expressive lists), the **expressive motion scheme** by default, **emphasized** type styles, and the expanded shape library.
- **Baseline track:** use the baseline components, the standard type styles, and either the legacy easing system or the standard motion scheme. The site still documents these but marks many as "no longer recommended" for teams that have updated.
- Check platform support first. Expressive components are marked Unavailable on Web in many status tables. In Compose, Expressive APIs are experimental until Compose Material 1.5.0 (blog/material-is-compose-first).

**Apply the seven tactics with restraint:** a variety of shapes; rich, nuanced color contrast between primary, secondary and tertiary; emphasized typography for key elements; containment for emphasis; fluid spring motion; component flexibility across contexts; and hero moments. "Stick to one or two hero moments in your product."

**Usability guardrails:** "Avoid crowding the screen with too many large or equally prominent elements"; use different color roles for actions and data; for secondary flows, "use fewer design tactics to reduce cognitive load."

---

## 11. Motion
Sources: https://m3.material.io/styles/motion/overview/how-it-works · https://m3.material.io/styles/motion/overview/specs · https://m3.material.io/styles/motion/easing-and-duration/tokens-specs · values: `tokens/system-motion.md`

- Default to the **motion physics system** (springs). The easing and duration system is legacy: "Products should migrate to the new system." It's still used for the transition patterns.
- Choose one product-wide **motion scheme**. **Expressive** "should be used for most situations, particularly hero moments and key interactions." **Standard** "should be used for utilitarian products." The scheme is set at product level; tokens such as `md.sys.motion.spring.fast.spatial` stay the same.
- Use **spatial** springs for position, size, rotation and corner changes (they overshoot). Use **effects** springs for color and opacity ("where there shouldn't be any overshoot"). Each comes in fast, default and slow.
- Platform availability:
  - **Web:** "Compatible with Compose springs." "Use springs when possible, otherwise use curves that mimic the springs for animations without interruptions or gestures." Official spring-to-curve table in `06-motion.md` (e.g. expressive fast spatial = cubic-bezier(0.42, 1.67, 0.21, 0.90), 350ms; standard default spatial = cubic-bezier(0.27, 1.06, 0.18, 1.00), 500ms). For legacy easing on web, `md.sys.motion.easing.emphasized` resolves to Standard easing (token data; the easing tokens & specs table lists CSS Emphasized as "N/A (Use Standard as a fallback)").
  - **Jetpack Compose:** Available: "Use built-in components and spring tokens" (`MotionScheme`). **MDC-Android:** "Available. Not added to components." "Use built-in spring tokens." **Flutter:** Unavailable. The site gives no Flutter alternative beyond the legacy easing and duration system, which "can be used by teams that haven't yet updated".
- Legacy transitions: container transform, forward and backward, lateral, top level, enter and exit, skeleton loaders. Each has listed "commonly used with" components.

---

## 12. Status awareness: deprecated, replaced, platform-limited
Verbatim sources: each component's Overview "M3 Expressive update" section (copied into `09-components/*.md` §2).

| Item | Status (as written on the site) | Use instead |
|---|---|---|
| Segmented button | "no longer recommended in the Material 3 expressive update. For those who have updated, use the connected button group" | Connected button group |
| Navigation drawer | "no longer recommended in the Material 3 Expressive update. For those who have updated, use an expanded navigation rail" | Expanded navigation rail |
| Baseline navigation rail | "no longer recommended" | Collapsed navigation rail |
| Baseline navigation bar | "no longer recommended" | Flexible navigation bar |
| Medium and large app bars | "no longer recommended" | Medium flexible and large flexible app bars |
| Bottom app bar | "no longer recommended and should be replaced with the docked toolbar" | Docked toolbar |
| Small FAB | "no longer recommended" | FAB / medium FAB |
| Surface color FABs | "no longer recommended" | Other FAB color styles |
| Baseline extended FAB | "no longer recommended" | Small, medium or large extended FAB |
| Stacked small FABs / speed dial | FAB menu "should replace the speed dial and any usage of stacked small FABs" | FAB menu |
| Indeterminate circular progress | Loading indicator "should replace most uses" | Loading indicator |
| Neutral text button; 24dp padding for small buttons | "no longer recommended" (buttons overview; 16dp padding "recommended to match padding of new sizes") | See buttons page |
| Baseline menu | "still available"; vertical menus "recommended for new designs" | Vertical menu |
| Token sets prefixed "[Deprecated]" | Deprecated (`tokens/components-index.md`) | Current set named on the Specs tab |
| Easing & duration motion | Legacy; "Products should migrate" | Spring tokens / motion schemes |
| MDC-Android (Views) | 1.14.0 is the "final stable release"; library "entering maintenance mode" | Jetpack Compose |
| Compose M3 Expressive APIs | Experimental until Compose Material 1.5.0 ("later in 2026") | — |
| Shape morph on Web | "Web is not currently available" | — |
| Material Web Components (`@material/web`) | "currently in maintenance mode. No updates are currently being made to this library. Material 3 Expressive is not implemented on Web." (develop/web); repo: "maintenance mode pending new maintainers" | For components MWC lacks, build to the component's Specs/tokens; the site names no other web library except Angular Material ("Implementation may differ") |
| Spacing tokens on Web | "Unavailable" (styles/spacing/overview) | Use the dp values from `tokens/system-spacing.md` (see §15.2 on units) |
| material-foundation/material-tokens (DSP) | Linked by the site as the baseline token source, but the GitHub repo is **archived** (last push 2023-08-15) | Current site token data (`tokens/`) |
| XR guidance | The blog calls it "Developer Preview" | Check each XR page |
| M3 Expressive on Flutter | "M3 Expressive is not available on Flutter" (develop/flutter) | Baseline M3 components |
| Android Views (MDC-Android) M3 library | "in maintenance mode… Material Android is Compose-first" (develop/android/mdc-android) | Jetpack Compose |

---

## 13. Final Material compliance checklist
- [ ] Track chosen (baseline vs Expressive) and applied consistently; nothing "no longer recommended" is used on the Expressive track.
- [ ] Every component exists and is available on the target platform (status matrix in `13-repositories-implementation.md`).
- [ ] One clear high-emphasis action per screen.
- [ ] Colors are role-based and correctly paired; no container roles on text; outline vs outline-variant used correctly; works in dark theme and at medium/high contrast.
- [ ] Type uses scale roles (emphasized only where it fits).
- [ ] Shape uses scale tokens; any customizations are deliberate (hero moments or custom components).
- [ ] Elevation defaults are unchanged and the number of levels is kept small.
- [ ] States are applied, with state-layer opacities from tokens; disabled-inheritance rules are respected.
- [ ] Contrast, 48×48dp targets, and component-specific accessibility tab rules are met.
- [ ] The layout adapts per breakpoint (navigation and pane recommendations), with RTL considered.
- [ ] Motion uses one scheme and spring tokens (web: the conversion table).
- [ ] Web: every component's Web status is checked (§15.1). Expressive-only components aren't assumed to exist in MWC.
- [ ] Native: the component's Compose / Views / Flutter status (and Expressive status) is checked in 13 §B. Targets are at least 48x48dp. Content stays out of the safety regions. Predictive back is handled for compatible components on Android. The reduced-motion setting is honored (§16).
- [ ] Web: targets are at least 48x48 CSS pixels by default, density is opt-in, hover and Tab-key focus states are visible, ARIA roles are set for interactive elements, and the platform reduced-motion setting is honored (§15).
- [ ] Every non-obvious decision cites a Material URL. Anything Material doesn't document is labeled as such.

## 14. When uncertain, consult
| Question | Source |
|---|---|
| Which button? | https://m3.material.io/components/all-buttons |
| Color role for X | https://m3.material.io/styles/color/roles |
| Token value | `tokens/` or the component's Specs tab |
| Breakpoint behavior | https://m3.material.io/foundations/layout/breakpoints/overview |
| Is X deprecated or replaced? | The component's Overview "M3 Expressive update" section |
| Platform support | The component's "Availability & resources" table (`13-repositories-implementation.md`) |
| Term meaning | https://m3.material.io/foundations/glossary |
| Web library status / support | https://m3.material.io/develop/web and `13-repositories-implementation.md` |

---

## 15. Web and mobile web
Use only what the sources say. Items marked **(repo)** come from the official material-web / material-color-utilities repositories linked from the site. Items marked **(web platform, not Material)** name the standard browser mechanism for a Material requirement; they aren't Material rules. Everything else is m3.material.io.

### 15.1 Library and component availability
- **Material Web Components (`@material/web`)**: "currently in maintenance mode… Material 3 Expressive is not implemented on Web" (https://m3.material.io/develop/web). (repo) "There is no current work planned for new features or components." Latest npm release 2.5.0 (2026-07-15). (repo) Browsers: Chrome/Edge 120+, Firefox 119+, Safari 16.4+.
- **Available on Web** (site status tables; matches repo `docs/components/`): buttons, checkbox, chips, dialogs, divider, FAB, extended FAB, icon buttons, lists, menus, progress indicators, radio button, sliders, switch, tabs, text fields.
- **Unavailable on Web:** app bars, badges, bottom sheets, cards, carousel, date pickers, navigation bar, navigation drawer, navigation rail, search, segmented buttons, side sheets, snackbar, time pickers, toolbars, tooltips. Every **"Web: Expressive"** entry is UNAVAILABLE, including button groups, FAB menu, loading indicator and split button. (repo) Badge, card, navigation bar/drawer and segmented button exist only in `labs/`, "not recommended for production".
- **Consequence for Expressive on web:** the guidelines (and the Figma kit, which "will continue to reflect the latest of what's available in the Material Compose library") describe Expressive components that no official web library implements. If a web product adopts the Expressive track (§10), you're building those components yourself from the component's Specs tab and `tokens/components/*`. Say so explicitly in any plan.
- **Angular:** the site links Angular Material, noting "Implementation may differ from Material Web Components and these guidelines."

### 15.2 Breakpoints for browser widths, and units
- Breakpoints "apply to Android and web" (https://m3.material.io/foundations/layout/breakpoints/overview): Compact <600dp · Medium 600–839 · Expanded 840–1199 · Large 1200–1599 · Extra-large ≥1600. "Large and extra-large breakpoints… are most useful for creating web experiences tailored to laptop and desktop devices. Some products may not need large and extra-large breakpoints." Design for the **window**, not the device: "The amount of available window space is dynamic."
- **Units:** the breakpoint pages give widths in **dp** and don't state a dp-to-CSS-pixel conversion. The site states the same target minimum both as "48x48dp" and as "48x48 CSS pixels", but it never formally equates the units. If you implement breakpoints as CSS px, flag that as an implementation assumption.
- Navigation per breakpoint (table in §6 / `07-layout-adaptive.md`). Web-specific lines: "On web, when the screen size is smaller than 320 CSS pixels, swap the navigation drawer for a navigation bar to ensure accessibility"; "For web experiences on laptop and desktop devices, use either a standard navigation drawer, or a navigation rail that transitions into a modal navigation drawer" (components/navigation-drawer/guidelines). Check each nav component's Web status (15.1); none of the three is implemented in MWC.
- **Type units on web:** font size sp → rem, "SP_SIZE/16 = rem" (24sp = 1.5rem). Letter spacing in rem: "(Tracking value in px / font size in sp)". "In web UIs, the line height and bounding box height are the same"; set type with "line-height, padding, and container measurements" (styles/typography/type-scale-tokens, applying-type).
- Mobile web = compact (and sometimes medium) breakpoint guidance, e.g. date pickers: "On compact breakpoints, such as mobile, a full-screen modal date picker is recommended to increase readability and touch target size."

### 15.3 Pointer vs touch targets
- Material sets **one default minimum for all inputs**: "The default target size should be at least 48x48 CSS pixels" (grids-spacing/density); component Accessibility tabs repeat "48x48 CSS pixels" for checkbox, radio, switch, chips, tabs, icon buttons and text fields. **Material doesn't define a smaller pointer-only target.** Don't invent one.
- Density is the documented way to get more compact (often desktop) UIs: people should **opt in**; "Don't apply component scaling by default if it would result in a target below 48x48 CSS pixels"; density controls themselves keep 48x48 CSS px; "Although a person may prefer a denser layout for desktop, they may not for mobile. Density shouldn't automatically change across breakpoints or orientation unless a person changes it." Density steps typically reduce height or padding by 4dp (density page).
- Icon targets: "Symbols of 24dp should have a target size of 48dp by default"; "A 20dp size symbol can use a target size of 40dp" (styles/icons/applying-icons). State layers are 40dp within a 48dp target (states/state-layers).
- Pointer behavior (foundations/interaction/inputs): show a cursor whenever a mouse is used; pointer by default, hand for links, I-beam over text, resize arrows on resizable edges; "A mouse click or stylus tap should demonstrate the same feedback as touch input" (pressed ripple); secondary click "should activate a context menu"; with touch, "always show touch controls, even if other inputs are connected." Predictive back is described as an Android gesture ("On Android…"). Don't assume it on mobile web.

### 15.4 Hover and keyboard focus
- Hover: "When the mouse rests on an interactive element, the hover state is a valuable cue for interaction"; hover "should also invoke tooltips when applicable" (inputs). Icon buttons: "On web, display a tooltip describing the action while hovering"; "On web, icon buttons should display a tooltip with an accessibility label." FABs: "When hovering over a FAB on web products, FABs should display a tooltip"; "Consider displaying a tooltip when the FAB is focused. This is supported on web." Hover state layer opacity 0.08 (`md.sys.state.hover.state-layer-opacity`). Note: tooltips are UNAVAILABLE in MWC (15.1).
- Keyboard focus: "Many people use the Tab key… to navigate the interactive elements of a web page… When an element is tabbed to, it appears in its focused state with a ring-like keyboard focus indicator"; "There can only be one focus state at a time in a layout"; focus can combine with hover, activated or selected (states/applying-states). Focus-indicator tokens: thickness 3dp, outer offset 2dp (`md.sys.state.focus-indicator.*`). (repo) MWC ships a focus ring component.
- Physical keyboard: users "should be able to perform any actions that the virtual keyboard provides, and more"; Enter for a common action like send; Spacebar for play/pause (inputs).
- Semantics: "For web, assign ARIA roles for all interactive elements" (designing/elements); "By using standard platform controls and semantic HTML (on the web), apps automatically contain the markup and code needed to work well with a platform's assistive technology" (designing/overview); "For web only: Landmarks and headings help assistive-technology users orient themselves" (designing/structure).

### 15.5 Reduced motion via the platform setting
- "Most platforms have a reduced animation setting to help users with a sensitivity to motion. If that setting is on, transitions should: Use subtle fades instead of intense sliding or scaling animations; Disable decorative effects like parallax or shape morphing" (styles/motion/transitions/applying-transitions). Carousel: with reduced motion, "the parallax effect should be removed and carousel items should no longer expand as they come into view" (components/carousel/accessibility).
- **(web platform, not Material)** Browsers expose that OS setting as the CSS/JS media feature `prefers-reduced-motion`. Material doesn't name it; use it as the way to read the platform setting, and apply Material's rules above.

### 15.6 Color, type, icons and tokens on web
- Tokens: use `tokens/` (resolved for Platform=Web; only emphasized easing and variable-font `opsz` tokens differ from other platforms; see `11-design-tokens.md`). (repo) MWC exposes them as CSS custom properties: `--md-sys-color-*`, `--md-sys-typescale-*`, `--md-ref-typeface-brand/plain`, `--md-sys-shape-corner-*`. Spacing tokens: site says Web "Unavailable".
- Color generation: (repo) `@material/material-color-utilities` (TypeScript) generates schemes at runtime (`themeFromSourceColor`, `applyTheme`), including "choosing theme colors from images". Keep Material's color-role rules (§2); the library doesn't replace them.
- Fonts and icons: Roboto is the default typeface; Roboto Flex/Serif/Mono are on Google Fonts (styles/typography/fonts). Material Symbols: "Get Material Symbols icons at fonts.google.com/icons"; "Use the Material Symbols variable font" (styles/icons/overview). (repo) Load via Google Fonts, e.g. `https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined`, with fill/grade via `font-variation-settings`. MWC typography needs weights 400/500/700.
- Don't take values from material-web source as Material rules where they differ from the site. The site and `tokens/` win.

---

## 16. Native mobile: Jetpack Compose, Android Views (MDC-Android), Flutter
m3.material.io only. Platform API names appear only where the site links them.

### 16.1 Library and component availability (site status tables; full table in 13 §B)
- **Jetpack Compose** (`androidx.compose.material3`): "Material Android is Compose-first." Baseline AVAILABLE for every component except **side sheets (UNAVAILABLE)**. **Every Expressive entry is AVAILABLE**, including button groups, FAB menu, loading indicator, split buttons and docked/floating toolbars. Expressive APIs stay experimental until Compose Material 1.5.0 ("later in 2026"; "M3 Expressive APIs are like an expansion pack to M3; you can opt in to them").
- **Android Views (MDC-Android):** "The Android Views (MDC-Android) M3 library is in maintenance mode. While it'll receive critical fixes, Material Android is Compose-first. Migrate to Jetpack Compose to use the latest features." 1.14 is "the final stable release". Baseline AVAILABLE except **tooltips (UNAVAILABLE)**. Expressive AVAILABLE except **FAB menu, menus, search (UNAVAILABLE)**.
- **Flutter:** "Flutter supports original M3 components. M3 Expressive is not available on Flutter." Opt in with `ThemeData.useMaterial3`. Baseline AVAILABLE except **side sheets and tooltips (UNAVAILABLE)**.
- If the product uses the Expressive track (§10): on Compose, use the Expressive components (experimental APIs). On Views, check the three exceptions above. On Flutter, Expressive components don't exist; say so in any plan.

### 16.2 Breakpoints (previously "window size classes")
- Material now says **breakpoints** ("A breakpoint (previously window size class) is the window size at which a layout needs to change…"; "These apply to Android and web"). Compact <600dp (phone in portrait) · Medium 600–839dp (tablet in portrait, foldable in portrait unfolded) · Expanded 840–1199dp (phone in landscape, tablet in landscape, foldable in landscape unfolded, desktop) · Large 1200–1599dp · Extra-large 1600dp+ (breakpoints/overview).
- **Height breakpoints:** "On Android, compact, medium, and expanded breakpoints are also available for height… it's rare that layouts need to adjust to available height" (the site links Android's window-size-classes docs).
- Design for the window, not the device: "The amount of available window space is dynamic and changes based on user behavior, such as multi-window modes or unfolding a foldable device"; "Devices fall into different breakpoints based on orientation."
- Foldables: the layout terms include **fold** ("a flexible area of the screen or a hinge that separates two displays") and **spacer** ("the space between two panes on a foldable device"). "A split-pane layout keeps the spacer visually centered. It's best for foldable devices" (scaffold/panes).
- Reachability (breakpoints/medium): "For horizontal tablets and unfolded foldables, the top 25% of the screen is likely out of reach… limit the amount of interactions that are placed in the upper 25% of the screen." "Avoid placing essential interactive elements too close to the bottom edge of the screen."

### 16.3 Touch targets
- "Consider making touch targets at least 48 x 48dp" (designing/elements). Lists: "Target size must be at least 48x48dp". Menus: "Targets should be 48x48dp or larger". Extra small and small icon buttons "must have a target size of 48x48dp or larger". Time-picker dial selectors 48x48dp. Text-field target size 56dp (specs). Icons: 24dp symbol → 48dp target; 20dp → 40dp target.
- Density stays opt-in and doesn't change automatically across breakpoints or orientation (grids-spacing/density), as in §15.3.

### 16.4 System UI, safety regions, edge-to-edge
- Material documents **safety regions**: "Zones reserved for system UI elements outside the application space, such as status bar or gesture bar" (layout-overview). "Bars are placed adjacent to the safety regions, which contain system UI elements. The safety region shouldn't contain primary content" (scaffold/bars). "Bar and safety rulers reserve space for system UI elements like the status bar and gesture navigation. They ensure actionable content like app bars aren't covered by system UI" (grids-spacing/grids). Compose resource on the site: "Jetpack Compose: Rulers".
- **"Edge-to-edge"** appears on the site only at component level: "Lists should extend edge-to-edge in compact windows" (lists/guidelines); "Full-screen carousels fill the window edge-to-edge" (carousel/specs). The site has no system-level edge-to-edge guideline. Don't invent one; follow the safety-region rules above and the platform's own docs for the APIs.

### 16.5 Predictive back (Android)
- "On Android, a person can swipe left or right on certain components as a way to navigate to a previous destination… Before completing the swipe, the person can decide to continue to the previous view or stay in the current view." Compatible components: **bottom sheet, navigation bar, navigation rail, search bar, side sheet** (foundations/interaction/gestures).
- Component behavior:
  - Bottom sheet: it "detaches from the left and right edges of the screen to signal it will close"; "previous screen is revealed in a preview".
  - Side sheet: it "detaches from the top and bottom edges"; it and its content "always scales in the direction of the gesture".
  - Search: it "detaches from the screen edge to signal the full-screen layout will minimize".
  - Navigation rail: predictive back "only applies to the **modal expanded** navigation rail".
- RTL: "RTL predictive back features should mirror those found in a LTR context" (bidirectionality-rtl). Implementation doc linked by the site: [MDC-Android PredictiveBack.md](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md).
- Predictive back is described for Android only. The site doesn't describe it for Flutter-on-iOS or for the web.

### 16.6 Dynamic color and platform color
- "User-generated color comes from an Android user's personal wallpaper" (dynamic/user-generated-source). "Dynamic color is both a user setting and a developer choice"; implement a custom theme so there's "a fallback color scheme available for users who don't enable dynamic color" (foundations/customization). Static (baseline) color applies "if your product is built for iOS" (styles/color/choosing-a-scheme). Flutter dynamic color: `dynamic_color` package (site link). Repo: [material-foundation/flutter-packages](https://github.com/material-foundation/flutter-packages/tree/main/packages/dynamic_color).

### 16.7 Type, motion, reduced motion
- Type: sp units on Android (type-scale-tokens). "Roboto is the default typeface for Android". The variable-font `opsz` tokens are defined for the Android/default platform (`tokens/system-typography.md`, Android column).
- Motion: see §11. Emphasized easing on Android/Compose is the path-based curve (token data; legacy system).
- Reduced motion: the same platform-setting rules as §15.5 ("Most platforms have a reduced animation setting…") apply on native.
- External input on phones, tablets and foldables (mouse, keyboard, stylus): follow foundations/interaction/inputs (`10-patterns-interaction.md`).

---

## 17. Official repositories (verified 2026-10-09; full table with purposes and statuses in `13-repositories-implementation.md` §A)
| Repo | Platform | Status (last push) | Consult when |
|---|---|---|---|
| [material-components/material-web](https://github.com/material-components/material-web) ([docs/components](https://github.com/material-components/material-web/tree/main/docs/components), [labs](https://github.com/material-components/material-web/tree/main/labs)) | Web | Active, but site says "maintenance mode" (2026-10-08) | Checking whether a component exists on web, its API, or theming custom properties |
| [material-foundation/material-color-utilities](https://github.com/material-foundation/material-color-utilities) ([typescript](https://github.com/material-foundation/material-color-utilities/tree/main/typescript) = npm `@material/material-color-utilities`) | Web + native | Active (2026-08-21) | Generating schemes, tonal palettes or dynamic color in code |
| [angular/components](https://github.com/angular/components) ([src/material](https://github.com/angular/components/tree/main/src/material)) | Web (Angular) | Active (2026-10-07) | Angular apps (site: "Implementation may differ") |
| [androidx/androidx — compose/material3](https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3) | Android (Compose) | Active (2026-10-09) | Compose Material 3 / Expressive source and APIs |
| [material-components/material-components-android](https://github.com/material-components/material-components-android) ([docs/components](https://github.com/material-components/material-components-android/tree/master/docs/components)) | Android (Views) | Active repo, "[MAINTENANCE MODE]" (2026-09-14) | Views implementation, PredictiveBack doc, theming docs |
| [flutter/flutter — material](https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src/material) | Flutter | Active (2026-10-09) | Flutter Material widgets (no Expressive) |
| [material-foundation/flutter-packages](https://github.com/material-foundation/flutter-packages) | Flutter | Active (2026-10-01) | `dynamic_color`, `google_fonts` packages |
| [google/material-design-icons](https://github.com/google/material-design-icons) | All | Active (2026-10-09) | Material Symbols / icon font sources (catalog: fonts.google.com/icons) |
| [google/fonts](https://github.com/google/fonts) ([roboto](https://github.com/google/fonts/tree/main/ofl/roboto), [robotoflex](https://github.com/google/fonts/tree/main/ofl/robotoflex)) | All | Active (2026-10-09) | Roboto / Roboto Flex / Serif / Mono font files |
| [material-foundation/material-tokens](https://github.com/material-foundation/material-tokens) | All | **Archived** (2023-08-15) | History only. Use `tokens/` (site data) for current values |
| [material-foundation/material-theme-builder](https://github.com/material-foundation/material-theme-builder) | Web tool | **Archived** (2025-05-21) | History only. The site points to the Theme Builder Figma plugin |

Don't treat a repo's code or README as overriding m3.material.io guidance. Use repos for availability and API facts.
