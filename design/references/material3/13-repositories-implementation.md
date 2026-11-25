# 13 — Repositories & implementation (web and native mobile, equal footing)

Primary sources: https://m3.material.io/develop · https://m3.material.io/develop/web · https://m3.material.io/develop/android/jetpack-compose · https://m3.material.io/develop/android/mdc-android · https://m3.material.io/develop/flutter · per-component "Availability & resources" status tables (in each 09-components file) · style-page availability tables · https://m3.material.io/blog/material-is-compose-first
Tier-2 repo verification (copies in `raw/web/`, GitHub API snapshots in `raw/repos/`): github.com/material-components/material-web (README, docs/roadmap.md, docs/support.md, docs/theming/*, docs/components/), npm `@material/web` and `@material/material-color-utilities` registry metadata, github.com/material-foundation/material-color-utilities typescript/README.md, GitHub repo metadata. Accessed 2026-10-09.

> **Framing.** This guide covers **web / mobile web and native mobile (Jetpack Compose, Android Views/MDC-Android, Flutter) on equal footing.** Section A lists the official repositories. Section B gives per-component availability on every platform. Sections C (web) and D (native) give each platform's status and resources. All guideline content (01–11, 09-components) applies on every platform. Statuses are quoted from the site; repo facts are labeled "(repo)".

## A. Official repositories (verified 2026-10-09 via GitHub API)
Ordered web → native → shared. Only repositories that exist are listed.

| Group | Repository | Platform | Purpose | Relationship to M3 | Status (GitHub API, 2026-10-09) | Last push | Linked from m3.material.io | Key paths |
|---|---|---|---|---|---|---|---|---|
| Web | [material-components/material-web](https://github.com/material-components/material-web) | Web (Lit web components) | Official Material Web Components library, npm `@material/web`. Source per component (`button/`, `checkbox/`, `chips/`, `dialog/`, `divider/`, `fab/`, `iconbutton/`, `list/`, `menu/`, `progress/`, `radio/`, `select/`, `slider/`, `switch/`, `tabs/`, `textfield/`), plus `tokens/`, `typography/`, `labs/` (experimental) and `docs/` | The site's Web implementation for M3 (baseline only). Site: "currently in maintenance mode… Material 3 Expressive is not implemented on Web" | Active | 2026-10-08 | yes | [docs/components](https://github.com/material-components/material-web/tree/main/docs/components) · [docs/theming](https://github.com/material-components/material-web/tree/main/docs/theming) · [tokens/](https://github.com/material-components/material-web/tree/main/tokens) · [labs/](https://github.com/material-components/material-web/tree/main/labs) |
| Shared (web + native) | [material-foundation/material-color-utilities](https://github.com/material-foundation/material-color-utilities) | TypeScript (npm `@material/material-color-utilities`), Java, Kotlin, Dart, C++, Swift | Color algorithms: HCT color space, dynamic schemes, theme generation from images | Algorithms that power the M3 color system (dynamic color, tonal palettes) | Active | 2026-08-21 | blog only | [typescript/](https://github.com/material-foundation/material-color-utilities/tree/main/typescript) · [kotlin/](https://github.com/material-foundation/material-color-utilities/tree/main/kotlin) · [java/](https://github.com/material-foundation/material-color-utilities/tree/main/java) · [dart/](https://github.com/material-foundation/material-color-utilities/tree/main/dart) |
| Web | [angular/components](https://github.com/angular/components) | Web (Angular) | Angular Material components | Linked by the site via material.angular.dev: "Implementation may differ from Material Web Components and these guidelines" | Active | 2026-10-07 | via material.angular.dev | [src/material](https://github.com/angular/components/tree/main/src/material) |
| Web (legacy) | [material-components/material-components-web](https://github.com/material-components/material-components-web) | Web | Material Components for the web (MDC Web), the earlier web library | Pre-M3 / M2-era web library. Not linked by current M3 guide pages; listed for disambiguation only | **Archived** | 2025-01-13 | no |  |
| Native — Android | [androidx/androidx](https://github.com/androidx/androidx) | Android (Jetpack Compose) | GitHub mirror of AndroidX (canonical source: android.googlesource.com/platform/frameworks/support). Compose Material 3 lives in `compose/material3/` | Jetpack Compose Material 3 (`androidx.compose.material3`), including M3 Expressive APIs (experimental until Compose Material 1.5.0) | Active | 2026-10-09 | yes | [compose/material3/material3](https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3) · [canonical (googlesource)](https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/) |
| Native — Android | [material-components/material-components-android](https://github.com/material-components/material-components-android) | Android (Views) | Material Components for Android (MDC-Android), the Views library | Site: "The Android Views (MDC-Android) M3 library is in maintenance mode." 1.14 is the "final stable release". Has M3 Expressive for Views | Active | 2026-09-14 | yes | [docs/components](https://github.com/material-components/material-components-android/tree/master/docs/components) · [docs/theming](https://github.com/material-components/material-components-android/tree/master/docs/theming) · [PredictiveBack.md](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md) |
| Native — Flutter | [flutter/flutter](https://github.com/flutter/flutter) | Flutter (iOS, Android, web, desktop) | Flutter framework; the Material library is `packages/flutter/lib/src/material` | Site: "Flutter supports original M3 components. M3 Expressive is not available on Flutter." M3 via `ThemeData.useMaterial3`; umbrella issue #91605 | Active | 2026-10-09 | yes | [packages/flutter/lib/src/material](https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src/material) · [M3 umbrella issue #91605](https://github.com/flutter/flutter/issues/91605) |
| Native — Flutter | [material-foundation/flutter-packages](https://github.com/material-foundation/flutter-packages) | Flutter | Material Foundation Flutter packages: `dynamic_color`, `dynamic_color_testing`, `google_fonts` | `dynamic_color` (linked from the color system page via pub.dev) provides dynamic color on Flutter | Active | 2026-10-01 | via pub.dev | [packages/dynamic_color](https://github.com/material-foundation/flutter-packages/tree/main/packages/dynamic_color) · [packages/google_fonts](https://github.com/material-foundation/flutter-packages/tree/main/packages/google_fonts) |
| Native — Flutter (legacy) | [material-foundation/material-dynamic-color-flutter](https://github.com/material-foundation/material-dynamic-color-flutter) | Flutter | Former home of the dynamic_color package. Repo description: "Now lives at …/flutter-packages" | Superseded by flutter-packages/packages/dynamic_color | **Archived** | 2023-02-02 | no |  |
| Native — iOS (legacy) | [material-components/material-components-ios](https://github.com/material-components/material-components-ios) | iOS | Material Components for iOS (MDC-iOS) | Not linked by current M3 pages; listed for disambiguation only | **Archived** | 2025-06-12 | no |  |
| Native — Android (samples) | [android/compose-samples](https://github.com/android/compose-samples) | Android (Compose) | Official Jetpack Compose sample apps (e.g. Reply) | Linked from the site (e.g. the Reply Material 3 sample) | Active | 2026-10-09 | yes |  |
| Native — Android (samples) | [android/user-interface-samples](https://github.com/android/user-interface-samples) | Android (Views) | Android UI samples, including CanonicalLayouts | Linked by the site as the "Android Views (MDC-Android): Canonical layouts" resource | **Archived** | 2025-07-11 | yes | [CanonicalLayouts](https://github.com/android/user-interface-samples/tree/main/CanonicalLayouts) |
| Shared (icons) | [google/material-design-icons](https://github.com/google/material-design-icons) | All (fonts, SVG, PNG, Android, iOS) | Material Symbols and legacy Material Icons sources: `symbols/`, `variablefont/`, `font/`, `src/`, `png/`, `android/`, `ios/` | Source for Material Symbols, M3's default icon set (catalog: fonts.google.com/icons) | Active | 2026-10-09 | no (site links fonts.google.com/icons) | [variablefont/](https://github.com/google/material-design-icons/tree/master/variablefont) · [symbols/](https://github.com/google/material-design-icons/tree/master/symbols) |
| Shared (fonts) | [google/fonts](https://github.com/google/fonts) | All (Google Fonts) | Font files served by Google Fonts | Roboto (default M3 typeface), Roboto Flex, Roboto Serif, Roboto Mono | Active | 2026-10-09 | no (site links fonts.google.com) | [ofl/roboto](https://github.com/google/fonts/tree/main/ofl/roboto) · [ofl/robotoflex](https://github.com/google/fonts/tree/main/ofl/robotoflex) · [ofl/robotoserif](https://github.com/google/fonts/tree/main/ofl/robotoserif) · [ofl/robotomono](https://github.com/google/fonts/tree/main/ofl/robotomono) |
| Shared (fonts) | [googlefonts/roboto-3-classic](https://github.com/googlefonts/roboto-3-classic) | All | Roboto variable font development ("Development of a Roboto Variable font") | Upstream source for Roboto | Active | 2026-06-17 | no |  |
| Shared (fonts) | [googlefonts/roboto-flex](https://github.com/googlefonts/roboto-flex) | All | Roboto Flex source | Upstream for the variable font named on styles/typography/fonts | Active | 2026-06-17 | yes |  |
| Shared (fonts) | [googlefonts/roboto-serif](https://github.com/googlefonts/roboto-serif) | All | Roboto Serif source | Upstream for Roboto Serif (styles/typography/fonts) | Active | 2026-06-15 | no |  |
| Shared (fonts) | [googlefonts/RobotoMono](https://github.com/googlefonts/RobotoMono) | All | Roboto Mono source | Upstream for Roboto Mono (styles/typography/fonts) | Active | 2026-06-19 | no |  |
| Shared (fonts, legacy) | [googlefonts/roboto-2](https://github.com/googlefonts/roboto-2) | All | "The Roboto family of fonts" (previous Roboto repo; `googlefonts/roboto` redirects here) | Superseded by roboto-3-classic | **Archived** | 2025-04-01 | no |  |
| Shared (tokens, legacy) | [material-foundation/material-tokens](https://github.com/material-foundation/material-tokens) | All (DSP JSON) | "Material Design DSP": baseline theme and tokens as a Design System Package | Linked by the site as "Material baseline theme and tokens (DSP)". Archived, so it predates M3 Expressive. Prefer the site token data | **Archived** | 2023-08-15 | yes |  |
| Shared (tools, legacy) | [material-foundation/material-theme-builder](https://github.com/material-foundation/material-theme-builder) | Web app / Figma | "Visualize dynamic color and create a custom Material Theme" (web Theme Builder source) | Site points designers to the Material Theme Builder Figma plugin. This web-builder repo is archived | **Archived** | 2025-05-21 | blog only |  |

Not found or not public (checked via GitHub, HTTP 404), so not listed as repos: `material-components/material-components-android-examples` and `material-components/material-components-android-compose-theme-adapter` (both still linked from some site pages or blog posts), and `material-components/material-design-for-wordpress`. Last-push dates are UTC dates from the GitHub API. Raw API snapshots are in `raw/repos/`.

## B. Per-component availability by platform (site status tables, including Expressive)
From each component's "Availability & resources" table (data `designSystems/030656e0a1083ef1`, dsdbVersion 2026-09-16v2). Statuses are copied exactly.

| Component | Web | Web: Expressive | Jetpack Compose | Jetpack Compose: Expressive | Android Views (MDC-Android) | Android Views (MDC-Android): Expressive | Flutter |
|---|---|---|---|---|---|---|---|
| App bars | UNAVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE |
| Badges | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Bottom sheets | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Button groups | — | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — |
| Buttons | AVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE |
| Cards | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Carousel | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Checkbox | AVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Chips | AVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Date pickers | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Dialogs | AVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Divider | AVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Extended FABs | AVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE |
| FAB menu | — | UNAVAILABLE | — | AVAILABLE | — | UNAVAILABLE | — |
| Floating action buttons (FABs) | AVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE |
| Icon buttons | AVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE |
| Lists | AVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE |
| Loading indicator | — | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — |
| Menus | AVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE | AVAILABLE |
| Navigation bar | UNAVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE |
| Navigation drawer | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Navigation rail | UNAVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE |
| Progress indicators | AVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE |
| Radio button | AVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Search | UNAVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE | AVAILABLE |
| Segmented buttons | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Side sheets | UNAVAILABLE | — | UNAVAILABLE | — | AVAILABLE | — | UNAVAILABLE |
| Sliders | AVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE |
| Snackbar | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Split buttons | — | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — |
| Switch | AVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Tabs | AVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Text fields | AVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Time pickers | UNAVAILABLE | — | AVAILABLE | — | AVAILABLE | — | AVAILABLE |
| Toolbars | UNAVAILABLE | — | Bottom app bar: AVAILABLE | Docked toolbar: AVAILABLE; Floating toolbar: AVAILABLE | Bottom app bar: AVAILABLE | Docked toolbar: AVAILABLE; Floating toolbar: AVAILABLE | Bottom app bar: AVAILABLE |
| Tooltips | UNAVAILABLE | — | AVAILABLE | — | UNAVAILABLE | — | UNAVAILABLE |

"—" = the component's status table has no row for that platform. There is no "Flutter: Expressive" column on any site table; the Flutter page says "M3 Expressive is not available on Flutter." Variant labels (e.g. "Docked toolbar", "Bottom app bar") are the site's own resource names.

Summary of the table above (no added interpretation):
- **Web:** 16 components AVAILABLE. Every "Web: Expressive" entry is UNAVAILABLE.
- **Jetpack Compose:** baseline AVAILABLE for every component with a row **except side sheets (UNAVAILABLE)**. **Every "Jetpack Compose: Expressive" entry is AVAILABLE** (incl. button groups, FAB menu, loading indicator, split buttons, docked and floating toolbars).
- **Android Views (MDC-Android):** baseline AVAILABLE for every component with a row **except tooltips (UNAVAILABLE)**. Expressive: AVAILABLE except **FAB menu, menus and search (UNAVAILABLE)**.
- **Flutter:** baseline AVAILABLE except **side sheets and tooltips (UNAVAILABLE)**. Expressive-only components have no Flutter row ("M3 Expressive is not available on Flutter").

## C. Web and mobile web

### Material Web Components (`@material/web`), the site's official web library
- **Site status (develop/web):** "**Material Web Components are currently in maintenance mode.** No updates are currently being made to this library. **Material 3 Expressive is not implemented on Web.**" The Web roadmap card: "Material Web is currently in maintenance mode; the roadmap lists what used to be planned and all past releases."
- **(repo) README:** "MWC is in maintenance mode pending new maintainers" (links discussion #5642). **(repo) docs/roadmap.md** (reviewed 2026-07-31): "There is no current work planned for new features or components. Bug fixes or other contributions may be added on a case-by-case basis." Its "Future" list ("components we have not built yet") is now explicitly unplanned: Autocomplete, Badge, Banner, Bottom app bar, Bottom sheet, Card, Data table, Date picker, Navigation bar, Navigation drawer, Navigation rail, Search, Segmented button, Snackbar, Time picker, Top app bar, Tooltip.
- **(repo/npm)** Latest `@material/web` is **2.5.0**, published 2026-07-15. The repo isn't archived (last push 2026-10-08).
- Site resource links: [Get started](https://github.com/material-components/material-web/blob/main/docs/quick-start.md) · [Theming](https://github.com/material-components/material-web/tree/main/docs/theming) · [MWC dev docs](https://github.com/material-components/material-web/tree/main/docs) · [Material Web 2.0 announcement](https://github.com/material-components/material-web/discussions/categories/announcements).
- **(repo) Browser support (docs/support.md):** "MWC aims to support the latest two major versions of browsers at the time of each release." Listed: Chrome 120+, Edge 120+, Firefox 119+, Safari 16.4+ (older Safari possibly with an `ElementInternals` polyfill).
- **(repo) Theming = CSS custom properties** that mirror Material token names: `--md-sys-color-<token>` (docs/theming/color.md), `--md-ref-typeface-brand` / `--md-ref-typeface-plain` and `--md-sys-typescale-<scale>-<size>-<property>` (typography.md), `--md-sys-shape-corner-*` (shape.md). The color doc points to the Material Theme Builder Figma plugin, or `material-color-utilities` "to generate color schemes at runtime".
- **Angular:** the site also links [Angular Material](https://material.angular.dev/) with the note "Implementation may differ from Material Web Components and these guidelines." (The MWC README recommends Angular Material for Angular apps.)

### Web component support, checked against the repo
"Web" and "Web: Expressive" columns are copied from each component's Availability & resources table (— = no row on that table). The repo column comes from material-web `docs/components/` and `labs/` on 2026-10-09. The site and the repo agree: every component marked AVAILABLE has a doc in `docs/components/`, and nothing marked UNAVAILABLE has one.

| Component | Site: Web | Site: Web: Expressive | material-web repo |
|---|---|---|---|
| App bars | UNAVAILABLE | UNAVAILABLE | Not implemented |
| Badges | UNAVAILABLE | — | Not in docs/components; experimental `labs/badge` only ("not recommended for production") |
| Bottom sheets | UNAVAILABLE | — | Not implemented |
| Button groups | — | UNAVAILABLE | Not implemented |
| Buttons | AVAILABLE | UNAVAILABLE | `docs/components/button.md` |
| Cards | UNAVAILABLE | — | Not in docs/components; experimental `labs/card` only ("not recommended for production") |
| Carousel | UNAVAILABLE | — | Not implemented |
| Checkbox | AVAILABLE | — | `docs/components/checkbox.md` |
| Chips | AVAILABLE | — | `docs/components/chip.md` |
| Date pickers | UNAVAILABLE | — | Not implemented |
| Dialogs | AVAILABLE | — | `docs/components/dialog.md` |
| Divider | AVAILABLE | — | `docs/components/divider.md` |
| Extended FABs | AVAILABLE | UNAVAILABLE | `docs/components/fab.md` |
| FAB menu | — | UNAVAILABLE | Not implemented |
| Floating action buttons (FABs) | AVAILABLE | UNAVAILABLE | `docs/components/fab.md` |
| Icon buttons | AVAILABLE | UNAVAILABLE | `docs/components/icon-button.md` |
| Lists | AVAILABLE | UNAVAILABLE | `docs/components/list.md` |
| Loading indicator | — | UNAVAILABLE | Not implemented |
| Menus | AVAILABLE | UNAVAILABLE | `docs/components/menu.md` |
| Navigation bar | UNAVAILABLE | UNAVAILABLE | Not in docs/components; experimental `labs/navigationbar (+ navigationtab)` only ("not recommended for production") |
| Navigation drawer | UNAVAILABLE | — | Not in docs/components; experimental `labs/navigationdrawer` only ("not recommended for production") |
| Navigation rail | UNAVAILABLE | UNAVAILABLE | Not implemented |
| Progress indicators | AVAILABLE | UNAVAILABLE | `docs/components/progress.md` |
| Radio button | AVAILABLE | — | `docs/components/radio.md` |
| Search | UNAVAILABLE | UNAVAILABLE | Not implemented |
| Segmented buttons | UNAVAILABLE | — | Not in docs/components; experimental `labs/segmentedbutton (+ segmentedbuttonset)` only ("not recommended for production") |
| Side sheets | UNAVAILABLE | — | Not implemented |
| Sliders | AVAILABLE | UNAVAILABLE | `docs/components/slider.md` |
| Snackbar | UNAVAILABLE | — | Not implemented |
| Split buttons | — | UNAVAILABLE | Not implemented |
| Switch | AVAILABLE | — | `docs/components/switch.md` |
| Tabs | AVAILABLE | — | `docs/components/tabs.md` |
| Text fields | AVAILABLE | — | `docs/components/text-field.md` |
| Time pickers | UNAVAILABLE | — | Not implemented |
| Toolbars | UNAVAILABLE | — | Not implemented |
| Tooltips | UNAVAILABLE | — | Not implemented |

- **Implemented in material-web (16 site entries):** buttons, checkbox, chips, dialogs, divider, extended FAB and FAB (`fab.md`), icon buttons, lists, menus, progress indicators, radio button, sliders, switch, tabs, text fields. The repo also documents supporting pieces with no M3 component page: elevation, focus ring, ripple, icon, select.
- **Not implemented on web:** app bars, badges, bottom sheets, cards, carousel, date pickers, navigation bar/drawer/rail, search, segmented buttons, side sheets, snackbar, time pickers, toolbars, tooltips, plus every Expressive-only component (button groups, FAB menu, loading indicator, split button). The repo's `labs/` folder ("experimental features that are not recommended for production") holds badge, card, navigation bar/drawer/tab and segmented button.
- **No Expressive on web:** every "Web: Expressive" entry is UNAVAILABLE, matching "Material 3 Expressive is not implemented on Web."

### Style/system support on the web (site availability tables)
| Area | Site says for Web |
|---|---|
| Typography | Web: Available (material-web typography doc); Web: Expressive: Unavailable (styles/typography/overview) |
| Motion physics | "Web — Compatible with Compose springs." "Use springs when possible, otherwise use curves that mimic the springs for animations without interruptions or gestures." Official conversion table in [06-motion.md](06-motion.md) (styles/motion/overview/how-it-works, specs) |
| Easing tokens | Token data gives Web `md.sys.motion.easing.emphasized` → Standard easing (the path-based Emphasized curve isn't available on web); the easing tokens & specs table lists Emphasized for CSS as "N/A (Use Standard as a fallback)" (styles/motion/easing-and-duration/tokens-specs) |
| Shape morph | "Web is not currently available" (styles/shape/shape-morph) |
| Spacing tokens | Web: **Unavailable** (styles/spacing/overview) |
| Elevation | "MWC - Web: Available" (styles/elevation/overview) |
| Color | The color system table lists no Web implementation row. Web color theming is documented in the material-web repo (above) |
| Layout | "Material layout guidance is implemented on Android and applies to web" (layout-overview); breakpoints "apply to Android and web". No web layout library is listed |

### Color utilities for the web
- **material-color-utilities (TypeScript)**, npm `@material/material-color-utilities` (latest 0.4.0, 2026-01-21): "(repo) Algorithms and utilities that power the Material Design 3 (M3) color system, including choosing theme colors from images and creating tones of colors". The README shows `themeFromSourceColor` and `applyTheme` (which updates "custom properties for material tokens") and `prefers-color-scheme` detection. On m3.material.io it's linked from blog posts, not guide pages (see 12). Repo not archived.

### Icons and fonts on the web
- **Material Symbols** (site): "Get Material Symbols icons at fonts.google.com/icons"; "Use the Material Symbols variable font to enable dynamic styling"; styles: outlined, rounded, sharp; axes: weight, fill, grade, optical size (styles/icons/overview, applying-icons). **(repo) material-web docs/components/icon.md** loads them as a Google Fonts web font, e.g. `<link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet">`; fill and grade are set via `font-variation-settings`.
- **Fonts** (site): Roboto is "currently applied by default to all Material 3 components"; Roboto Flex, Roboto Serif and Roboto Mono are on Google Fonts (styles/typography/fonts). **(repo)** The MWC quick start loads `Roboto:wght@400;500;700` from fonts.googleapis.com, and typography.md says "All three weight styles need to be included for a font."
- **Web units** (site, type-scale-tokens): font size sp → **rem** (conversion "SP_SIZE/16 = rem"; e.g. 24sp = 1.5rem). Letter spacing: "(Tracking value in px / font size in sp) = letter spacing" in rem. Type setting on the web: "line height and bounding box height are the same" (half-leading); "Use line-height, padding, and container measurements for setting typography on the web" (applying-type).

### Token sources usable on the web
- **Site token data** (this guide's `tokens/`, resolved for Platform=Web; see [11-design-tokens.md](11-design-tokens.md)). Only 31 tokens have Web-specific values. Everything else is a shared default.
- **material-foundation/material-tokens (DSP).** The site lists it as "Material baseline theme and tokens (DSP)". **(repo) That GitHub repository is archived** (last push 2023-08-15), so it predates M3 Expressive and later token changes. Treat it as historical and prefer the site's current token data.
- **material-web CSS custom properties** (`--md-sys-*`, `--md-ref-*`) as above. The repo's own roadmap lists shape/motion token expansion and "Density and spacing tokens" as unplanned future work.
- **Material Theme Builder** (Figma plugin) exports "Android, Jetpack Compose" per the site's how-to-use-tokens page, which names no web export format.

## D. Native mobile: Jetpack Compose, Android Views (MDC-Android), Flutter

### Jetpack Compose (`androidx.compose.material3`)
- **Site status:** "Material Android is Compose-first." The blog (Google I/O 2026) says "Material Android is transitioning to focus all feature development on the Material Compose library." The develop page announces "M3 Expressive is available on Jetpack Compose" and upcoming "stable Expressive components, a Styles API for easier customization, and Navigation3 integration into the adaptive library."
- **Expressive APIs are experimental until Compose Material 1.5.0:** "Later in 2026, Material Android will release Compose 1.5.0, which will promote M3 experimental APIs to stable, including M3 Expressive. M3 Expressive APIs are like an expansion pack to M3; you can opt in to them." The Figma kit and guidelines "will continue to reflect the latest of what's available in the Material Compose library."
- **Repo:** [androidx/androidx `compose/material3/material3`](https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3) (GitHub mirror; canonical [android.googlesource.com](https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/)). Site resources: [Compose Material 3 releases](https://developer.android.com/jetpack/androidx/releases/compose-material3), [M2→M3 migration](https://developer.android.com/develop/ui/compose/designsystems/material2-material3), [Theming in Compose](https://developer.android.com/develop/ui/compose/designsystems), [Reply sample](https://goo.gle/reply-compose-sample) ([android/compose-samples](https://github.com/android/compose-samples)), [adaptive navigation codelab](https://goo.gle/compose-adaptive-codelab).

### Android Views (MDC-Android)
- **Site status:** "**The Android Views (MDC-Android) M3 library is in maintenance mode.** While it'll receive critical fixes, Material Android is Compose-first. Migrate to Jetpack Compose to use the latest features." "Material Views 1.14 (MDC-Android) is the final stable release for the Views library." Also: "M3 Expressive is available on Android Views (MDC-Android)". The blog says 1.14.0 brings expressive themes, the expressive list, the emphasized type scale and expressive styles for 11 existing components. (repo) The GitHub description is prefixed "[MAINTENANCE MODE]".
- **Repo:** [material-components/material-components-android](https://github.com/material-components/material-components-android): [docs/components](https://github.com/material-components/material-components-android/tree/master/docs/components), [docs/theming](https://github.com/material-components/material-components-android/tree/master/docs/theming), [PredictiveBack.md](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md). Canonical layouts sample: [android/user-interface-samples CanonicalLayouts](https://github.com/android/user-interface-samples/tree/main/CanonicalLayouts) (repo archived).

### Flutter
- **Site status:** "Flutter supports original M3 components. **M3 Expressive is not available on Flutter.**" Opt in with `ThemeData.useMaterial3` ("Set ThemeData.useMaterial3 to true for updated components and to apply new typography, color, elevation, and more"). Engineering is tracked in the [Material 3 umbrella issue #91605](https://github.com/flutter/flutter/issues/91605). The widget-catalog card text reads: "The Flutter team is currently working on Material Design 3 support for Material Components."
- **Repos:** [flutter/flutter `packages/flutter/lib/src/material`](https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src/material). Dynamic color: [material-foundation/flutter-packages `packages/dynamic_color`](https://github.com/material-foundation/flutter-packages/tree/main/packages/dynamic_color) (the color system page links pub.dev `dynamic_color`). Canonical layouts: [flutter_adaptive_scaffold](https://pub.dev/packages/flutter_adaptive_scaffold) (site link).

### Style/system support on native (site availability tables)
| Area | Jetpack Compose | Android Views (MDC-Android) | Flutter |
|---|---|---|---|
| Typography (styles/typography/overview) | Available; Expressive: Available | Available; Expressive: Available | Available |
| Color (styles/color/system/overview) | Available | Available | Available (`dynamic_color`) |
| Motion physics (styles/motion/overview) | Available ("Use built-in components and spring tokens") | "Available. Not added to components." ("Use built-in spring tokens") | Unavailable |
| Shape library (styles/shape/overview-principles) | Available (`MaterialShapes`) | Available | — (no row) |
| Shape morph (styles/shape/shape-morph) | "For Android, use the Shapes in Compose API" | — | — |
| Spacing tokens (styles/spacing/overview) | Available | Unavailable | — (no row) |
| Elevation (styles/elevation/overview) | Available | Available | Available |
| Layout (layout-overview) | Canonical layouts, Rulers, Navigation3: Available | Canonical layouts sample: Available | — (develop/flutter links flutter_adaptive_scaffold) |
| Height breakpoints | "On Android, compact, medium, and expanded breakpoints are also available for height" (breakpoints/overview) | same | — |

### Tokens on native
- The token tables in `tokens/` show the **Android/default-platform values next to the web values** (motion and typography have a separate Android column; all other values are platform-untagged and identical on both). The only differences: `md.sys.motion.easing.emphasized` is the path-based curve on Android/Compose but Standard on web, and the variable-font `opsz` tokens are defined on Android but undefined on web. See [11-design-tokens.md](11-design-tokens.md).
- Material Theme Builder exports "Android, Jetpack Compose" (foundations/design-tokens/how-to-use-tokens).


## Aggregated implementation status matrix (from the site's status tables; data `designSystems/030656e0a1083ef1`, dsdbVersion 2026-09-16v2)

AVAILABLE / UNAVAILABLE / other values exactly as stored. Blank = no entry for that resource on the component's table. Web columns are summarized at the top of this file. Note the Compose-first blog (above): Compose Expressive APIs are experimental until Compose Material 1.5.0; MDC-Android 1.14.0 is the final stable Views release.

| Component | Design Kit (Figma) | Jetpack Compose | Jetpack Compose: Expressive | Android Views (MDC-Android) | Android Views (MDC-Android): Expressive | Flutter | Web | Web: Expressive | Jetpack Compose - Bottom app bar | Android Views (MDC-Android): Expressive - Docked toolbar | Jetpack Compose: Expressive - Floating toolbar | Android Views (MDC-Android) - Bottom app bar | Flutter - Bottom app bar | Android Views (MDC-Android): Expressive - Floating toolbar | Jetpack Compose: Expressive - Docked toolbar | Android Views (MDC-Android)  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| App bars | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Badges | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |  |
| Bottom sheets | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |  |
| Button groups | AVAILABLE |  | AVAILABLE |  | AVAILABLE |  |  | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Buttons | AVAILABLE | AVAILABLE | AVAILABLE |  | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  | AVAILABLE |
| Cards | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |  |
| Carousel | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |  |
| Checkbox | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | AVAILABLE |  |  |  |  |  |  |  |  |  |
| Chips | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | AVAILABLE |  |  |  |  |  |  |  |  |  |
| Date pickers | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |  |
| Dialogs | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | AVAILABLE |  |  |  |  |  |  |  |  |  |
| Divider | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | AVAILABLE |  |  |  |  |  |  |  |  |  |
| Extended FABs | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |
| FAB menu | AVAILABLE |  | AVAILABLE |  | UNAVAILABLE |  |  | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Floating action buttons (FABs) | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Icon buttons | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Lists | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Loading indicator | AVAILABLE |  | AVAILABLE |  | AVAILABLE |  |  | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Menus | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Navigation bar | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Navigation drawer | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |  |
| Navigation rail | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Progress indicators | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Radio button | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | AVAILABLE |  |  |  |  |  |  |  |  |  |
| Search | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE | AVAILABLE | UNAVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Segmented buttons | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |  |
| Side sheets | AVAILABLE | UNAVAILABLE |  | AVAILABLE |  | UNAVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |  |
| Sliders | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Snackbar | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |  |
| Split buttons | AVAILABLE |  | AVAILABLE |  | AVAILABLE |  |  | UNAVAILABLE |  |  |  |  |  |  |  |  |
| Switch | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | AVAILABLE |  |  |  |  |  |  |  |  |  |
| Tabs | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | AVAILABLE |  |  |  |  |  |  |  |  |  |
| Text fields | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | AVAILABLE |  |  |  |  |  |  |  |  |  |
| Time pickers | AVAILABLE | AVAILABLE |  | AVAILABLE |  | AVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |  |
| Toolbars | AVAILABLE |  |  |  |  |  | UNAVAILABLE |  | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE | AVAILABLE |  |
| Tooltips | AVAILABLE | AVAILABLE |  | UNAVAILABLE |  | UNAVAILABLE | UNAVAILABLE |  |  |  |  |  |  |  |  |  |

### Full link list per component/resource

| Component | Resource | Type | Status | URL |
|---|---|---|---|---|
| App bars | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/TopAppBar.md |
| App bars | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/TopAppBar.md |
| App bars | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| App bars | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/AppBar-class.html |
| App bars | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/app-bars?hl=en |
| App bars | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#AppBarRow(kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Function1) |
| App bars | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| App bars | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Badges | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/BadgeDrawable.md |
| Badges | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Badges | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/Badge-class.html |
| Badges | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/badges |
| Badges | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Bottom sheets | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/BottomSheet.md |
| Bottom sheets | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Bottom sheets | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/BottomSheet-class.html |
| Bottom sheets | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/bottom-sheets |
| Bottom sheets | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Button groups | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#button-groups |
| Button groups | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Button groups | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#ButtonGroup(androidx.compose.ui.Modifier,kotlin.Float,androidx.compose.foundation.layout.Arrangement.Horizontal,kotlin.Function1) |
| Button groups | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Buttons | Android Views (MDC-Android)  | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md |
| Buttons | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md |
| Buttons | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Buttons | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| Buttons | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/button |
| Buttons | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#Button(kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.ui.graphics.Shape,androidx.compose.material3.ButtonColors,androidx.compose.material3.ButtonElevation,androidx.compose.foundation.BorderStroke,androidx.compose.foundation.layout.PaddingValues,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function1) |
| Buttons | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/button.md |
| Buttons | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Cards | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Card.md |
| Cards | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Cards | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/Card-class.html |
| Cards | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/card |
| Cards | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Carousel | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Carousel.md |
| Carousel | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Carousel | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/CarouselView-class.html |
| Carousel | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/carousel |
| Carousel | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Checkbox | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Checkbox.md |
| Checkbox | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Checkbox | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/Checkbox-class.html |
| Checkbox | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/checkbox |
| Checkbox | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md |
| Chips | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Chip.md |
| Chips | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Chips | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/Chip-class.html |
| Chips | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/chip |
| Chips | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/chip.md |
| Date pickers | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/DatePicker.md |
| Date pickers | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Date pickers | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/DatePickerDialog-class.html |
| Date pickers | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/datepickers |
| Date pickers | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Dialogs | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Dialog.md |
| Dialogs | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Dialogs | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| Dialogs | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/dialog |
| Dialogs | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/dialog.md |
| Divider | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Divider.md |
| Divider | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Divider | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/Divider-class.html |
| Divider | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/divider |
| Divider | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/divider.md |
| Extended FABs | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/FloatingActionButton.md#extended-fabs |
| Extended FABs | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/FloatingActionButton.md#extended-fabs |
| Extended FABs | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Extended FABs | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/FloatingActionButton-class.html |
| Extended FABs | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/fab?hl=en#extended |
| Extended FABs | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#ExtendedFloatingActionButton(kotlin.Function0,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Shape,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.material3.FloatingActionButtonElevation,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function1) |
| Extended FABs | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/fab.md |
| Extended FABs | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| FAB menu | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | UNAVAILABLE |  |
| FAB menu | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| FAB menu | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#FloatingActionButtonMenu(kotlin.Boolean,kotlin.Function0,androidx.compose.ui.Modifier,androidx.compose.ui.Alignment.Horizontal,kotlin.Function1) |
| FAB menu | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Floating action buttons (FABs) | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/FloatingActionButton.md |
| Floating action buttons (FABs) | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/FloatingActionButton.md |
| Floating action buttons (FABs) | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Floating action buttons (FABs) | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/FloatingActionButton-class.html |
| Floating action buttons (FABs) | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/fab |
| Floating action buttons (FABs) | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#FloatingActionButton(kotlin.Function0,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Shape,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.material3.FloatingActionButtonElevation,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function0) |
| Floating action buttons (FABs) | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/fab.md |
| Floating action buttons (FABs) | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Icon buttons | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#icon-button |
| Icon buttons | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#icon-button |
| Icon buttons | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Icon buttons | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/IconButton-class.html |
| Icon buttons | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/icon-button |
| Icon buttons | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#IconButton(kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.material3.IconButtonColors,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.ui.graphics.Shape,kotlin.Function0) |
| Icon buttons | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md |
| Icon buttons | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Lists | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/views/layout/recyclerview |
| Lists | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/List.md#m3-expressive |
| Lists | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Lists | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ListTile-class.html |
| Lists | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/lists |
| Lists | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#ListItem%28kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,androidx.compose.material3.ListItemColors,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp%29 |
| Lists | Web | WIZ_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/list.md |
| Lists | Web: Expressive | WIZ_IMPLEMENTATION | UNAVAILABLE |  |
| Loading indicator | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/LoadingIndicator.md |
| Loading indicator | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Loading indicator | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#LoadingIndicator(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,kotlin.collections.List) |
| Loading indicator | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Menus | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Menu.md |
| Menus | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | UNAVAILABLE |  |
| Menus | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Menus | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| Menus | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/menu |
| Menus | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#DropdownMenuGroup%28androidx.compose.material3.MenuGroupShapes,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp,androidx.compose.foundation.BorderStroke,androidx.compose.foundation.layout.PaddingValues,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function1%29 |
| Menus | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/menu.md |
| Menus | Web: Expressive | WIZ_IMPLEMENTATION | UNAVAILABLE |  |
| Navigation bar | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md |
| Navigation bar | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md |
| Navigation bar | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Navigation bar | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/NavigationBar-class.html |
| Navigation bar | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/navigation-bar |
| Navigation bar | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#NavigationBar(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1) |
| Navigation bar | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Navigation bar | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Navigation drawer | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationDrawer.md |
| Navigation drawer | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Navigation drawer | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/NavigationDrawer-class.html |
| Navigation drawer | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/drawer |
| Navigation drawer | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Navigation rail | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationRail.md |
| Navigation rail | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationRail.md |
| Navigation rail | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Navigation rail | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/NavigationRail-class.html |
| Navigation rail | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/navigation-rail |
| Navigation rail | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#NavigationRail(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,kotlin.Function1,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1) |
| Navigation rail | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Navigation rail | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Progress indicators | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/ProgressIndicator.md |
| Progress indicators | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/ProgressIndicator.md |
| Progress indicators | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Progress indicators | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| Progress indicators | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/progress |
| Progress indicators | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#LinearWavyProgressIndicator(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.drawscope.Stroke,androidx.compose.ui.graphics.drawscope.Stroke,androidx.compose.ui.unit.Dp,kotlin.Float,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp) |
| Progress indicators | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/progress.md |
| Progress indicators | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Radio button | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/RadioButton.md |
| Radio button | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Radio button | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| Radio button | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/radio-button |
| Radio button | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/radio.md |
| Search | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Search.md |
| Search | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | UNAVAILABLE |  |
| Search | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Search | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/SearchBar-class.html |
| Search | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/search-bar |
| Search | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#SearchBar(androidx.compose.material3.SearchBarState,kotlin.Function0,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Shape,androidx.compose.material3.SearchBarColors,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp) |
| Search | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Search | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Segmented buttons | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#toggle-button |
| Segmented buttons | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Segmented buttons | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/SegmentedButton-class.html |
| Segmented buttons | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/segmented-button |
| Segmented buttons | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Side sheets | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/SideSheet.md |
| Side sheets | Design Kit (Figma) | FIGMA | AVAILABLE | http://goo.gle/m3-design-kit |
| Side sheets | Flutter | FLUTTER_IMPLEMENTATION | UNAVAILABLE |  |
| Side sheets | Jetpack Compose | JETPACK_IMPLEMENTATION | UNAVAILABLE |  |
| Side sheets | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Sliders | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Slider.md |
| Sliders | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Slider.md |
| Sliders | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Sliders | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/Slider-class.html |
| Sliders | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/slider |
| Sliders | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#Slider(androidx.compose.material3.SliderState,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.material3.SliderColors,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function1,kotlin.Function1) |
| Sliders | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/slider.md |
| Sliders | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Snackbar | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Snackbar.md |
| Snackbar | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Snackbar | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/SnackBar-class.html |
| Snackbar | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/snackbar |
| Snackbar | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Split buttons | Android Views (MDC-Android): Expressive | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#split-button |
| Split buttons | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Split buttons | Jetpack Compose: Expressive | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#SplitButtonLayout(kotlin.Function0,kotlin.Function0,androidx.compose.ui.Modifier,androidx.compose.ui.unit.Dp) |
| Split buttons | Web: Expressive | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Switch | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Switch.md |
| Switch | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Switch | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| Switch | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/switch |
| Switch | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/switch.md |
| Tabs | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Tabs.md |
| Tabs | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Tabs | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/TabBar-class.html |
| Tabs | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/tabs |
| Tabs | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/tabs.md |
| Text fields | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/TextField.md |
| Text fields | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Text fields | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| Text fields | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#textfield |
| Text fields | Web | LIT_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/text-field.md |
| Time pickers | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/TimePicker.md |
| Time pickers | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Time pickers | Flutter | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/TimePickerDialog-class.html |
| Time pickers | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/time-pickers |
| Time pickers | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Toolbars | Android Views (MDC-Android) - Bottom app bar | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/BottomAppBar.md |
| Toolbars | Android Views (MDC-Android): Expressive - Docked toolbar | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/DockedToolbar.md |
| Toolbars | Android Views (MDC-Android): Expressive - Floating toolbar | ANDROID_IMPLEMENTATION | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/FloatingToolbar.md |
| Toolbars | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Toolbars | Flutter - Bottom app bar | FLUTTER_IMPLEMENTATION | AVAILABLE | https://api.flutter.dev/flutter/material/BottomAppBar-class.html |
| Toolbars | Jetpack Compose - Bottom app bar | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/app-bars#bottom |
| Toolbars | Jetpack Compose: Expressive - Docked toolbar | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/FlexibleBottomAppBar.composable |
| Toolbars | Jetpack Compose: Expressive - Floating toolbar | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/HorizontalFloatingToolbar.composable |
| Toolbars | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |
| Tooltips | Android Views (MDC-Android) | ANDROID_IMPLEMENTATION | UNAVAILABLE |  |
| Tooltips | Design Kit (Figma) | FIGMA | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |
| Tooltips | Flutter | FLUTTER_IMPLEMENTATION | UNAVAILABLE |  |
| Tooltips | Jetpack Compose | JETPACK_IMPLEMENTATION | AVAILABLE | https://developer.android.com/develop/ui/compose/components/tooltip |
| Tooltips | Web | LIT_IMPLEMENTATION | UNAVAILABLE |  |


---

## Source pages in scope

| Page | URL | Site content timestamp | Do | Don't | Caution |
|---|---|---|---|---|---|
| Develop | https://m3.material.io/develop | 2026-07-22T02:01:04.752Z | 0 | 0 | 0 |
| Android Views (MDC-Android) | https://m3.material.io/develop/android/mdc-android | 2026-08-04T11:11:59.907Z | 0 | 0 | 0 |
| Jetpack Compose | https://m3.material.io/develop/android/jetpack-compose | 2026-07-28T07:03:05.793Z | 0 | 0 | 0 |
| Flutter | https://m3.material.io/develop/flutter | 2026-07-17T05:06:20.633Z | 0 | 0 | 0 |
| Web | https://m3.material.io/develop/web | 2026-07-17T05:36:33.730Z | 0 | 0 | 0 |

## Verbatim rule index (every Do / Don't / Caution caption on the pages above)


## Appendix — verbatim page text (digest: text, tables and figure captions; image-only content represented by captions)

### Develop

Source: https://m3.material.io/develop


#### Announcements

The latest in Material development

**[Material Android is Compose-first]** (fig) Jetpack Compose is the modern toolkit for building Material UI on Android. The Material Views (MDC-Android) library is in maintenance mode and will only receive critical fixes. Link: https://m3.material.io/blog/material-is-compose-first?utm_source=develop&utm_medium=referral&utm_campaign=IO26

#### Material platforms

The Material Compose library is built in-house, so it receives the latest Material updates first. It’s the recommended platform for developing on Android.

**[Jetpack Compose]** (fig) Jetpack Compose is the recommended toolkit for building Material UI on Android. Get developer documentation, tutorials, and feature highlights to build with Material for Android using Jetpack Compose. Link: https://m3.material.io/develop/android/jetpack-compose

The Material Flutter library is actively maintained by the Flutter team and receives periodic Material updates.

**[Flutter]** (fig) Flutter offers the best Material support for multi-platform app development. Get developer documentation to build with Material for Flutter. Link: https://m3.material.io/develop/flutter

##### Additional platforms

Material’s Android Views (MDC-Android) and web libraries are in maintenance mode. They’re still available to use, but are not receiving feature updates from Material.

**[Android Views (MDC-Android)]** (fig) Developer documentation to build with Material for Android Views. Link: https://m3.material.io/develop/android/mdc-android

**[Web]** (fig) Developer documentation to build with Material in any web framework. Link: https://m3.material.io/develop/web

### Android Views (MDC-Android)

Source: https://m3.material.io/develop/android/mdc-android


#### Android Views in maintenance mode

**The Android Views (MDC-Android) M3 library is in maintenance mode.** While it’ll receive critical fixes, Material Android is Compose-first. Migrate to Jetpack Compose to use the latest features. [Read the Compose-first announcement](https://m3.material.io/blog/material-is-compose-first)

#### Announcements

The latest from Android Views (MDC-Android)

**[Material Android is Compose-first]** (fig) Material Views 1.14 (MDC-Android) is the final stable release for the Views library. There’s never been a better time to migrate to Jetpack Compose. Link: https://m3.material.io/blog/material-is-compose-first

**[M3 Expressive is available on Android Views (MDC-Android)]** (fig) Material’s latest evolution helps you make products even more engaging and easier to use. Link: https://m3.material.io/blog/building-with-m3-expressive

**[Material Design Components for Android 1.11.0 and 1.12.0]** (fig) New color options and carousel refinements Link: https://m3.material.io/blog/android-stable-release-1-12-0

#### Resources & documentation

Guides, developer docs, tutorials, and more

**[Compose-first development]** (fig) Learn how the shift to Compose affects Android Views (MDC-Android) libraries, tools, and documentation Link: https://developer.android.com/develop/ui/compose/first

**[Material Components – Github]** (fig) Documentation for all Material Components available in the Android Views (MDC-Android) repo on Github Link: https://github.com/material-components/material-components-android/tree/master/docs/components

**[Material You: Applying dynamic color for your app or brand]** (fig) Learn how to apply dynamic color in this short talk from two Material experts Link: https://www.youtube.com/watch?v=4bguZJwHqsQ

**[Building beautiful transitions with Material Motion]** (fig) Codelab and video tutorial: Get step-by-step instructions for Material transition patterns Link: https://www.youtube.com/watch?v=iuvmnxTRgRM

**[Apply dynamic color using Material Design 3 for Android]** (fig) Codelab with step-by-step instructions for adding dynamic color features to an app Link: https://codelabs.developers.google.com/codelabs/apply-dynamic-color#0

**[Material Design Components - MAD Skills]** (fig) YouTube playlist with step-by-step instructions for using Material Components for Android Link: https://www.youtube.com/playlist?list=PLWz5rJ2EKKc8SmtMNw34wvYkqj45rV1d3

### Jetpack Compose

Source: https://m3.material.io/develop/android/jetpack-compose


#### Announcements

The latest from Jetpack Compose

**[Material Android is Compose-first]** (fig) Material Android is all-in on Compose. Read about upcoming Material Compose features like stable Expressive components, a Styles API for easier customization, and Navigation3 integration into the adaptive library. Link: https://m3.material.io/blog/material-is-compose-first

**[M3 Expressive is available on Jetpack Compose]** (fig) Material’s latest evolution helps you make products even more engaging and easier to use. Link: https://m3.material.io/blog/building-with-m3-expressive

**[Adding Motion Physics with Jetpack Compose]** (fig) Supercharge your Android transitions and animations with the new M3 Expressive motion theming system. Link: https://m3.material.io/blog/m3-expressive-motion-theming

**[Design for Android]** (fig) Learn how to design beautiful and modern Android apps with updated, Android-specific design guidance. Link: https://developer.android.com/design/ui

#### Develop for all platforms

Get the code samples, guides, and API references to build Android apps for all kinds of platforms in the Android ecosystem, like WearOS and Android XR. Material has guidance on [designing for watches](https://m3.material.io/foundations/watches/overview) and [designing for XR](https://m3.material.io/foundations/xr/design/overview).

**[Develop for WearOS]** (fig) Material’s latest evolution helps you make products even more engaging and easier to use. Link: https://developer.android.com/training/wearables

**[Develop for Android XR]** (fig) Supercharge your Android transitions and animations with the new M3 Expressive motion theming system. Link: https://developer.android.com/develop/xr/get-started

#### Resources & documentation

Guides, developer docs, tutorials, and more for getting started with Jetpack Compose

**[Compose-first development]** (fig) Compose is the primary UI toolkit to build adaptive, high performance Android apps Link: https://developer.android.com/develop/ui/compose/first?_gl=1*1fr61ya*_ga*MzI1NjMyOTExLjE3NjI0MTE3NDU.*_ga_QPQ2NRV856*czE3ODM1MDA3NjUkbzQxMyRnMSR0MTc4MzUwMjM3MiRqNTgkbDAkaDA

**[Compose Material 3]** (fig) Documentation for all Material 3 Components available for Jetpack Compose Link: https://developer.android.com/jetpack/androidx/releases/compose-material3

**[Migrate from M2 to M3 for Jetpack Compose]** (fig) Guides on implementing Material Design 3, migrating from Material 2 to Material 3, and more Link: https://developer.android.com/develop/ui/compose/designsystems/material2-material3

**[Jetpack Compose Tutorial]** (fig) Use Jetpack Compose to build a simple UI with declarative functions Link: https://developer.android.com/jetpack/compose/tutorial

**[Jetpack Compose Pathway]** (fig) Learn how to use Jetpack Compose to build native Android UI Link: https://developer.android.com/courses/jetpack-compose/course

**[Theming in Compose]** (fig) Jetpack Compose makes it easy to give your app a consistent look and feel with theming Link: https://developer.android.com/develop/ui/compose/designsystems

**[Material Components and layouts]** (fig) Material Components and layouts are available as composable functions Link: https://developer.android.com/jetpack/compose/layouts/material

**[Best of Material 3 with Reply sample app in Compose]** (fig) Check out the Reply sample app for Compose Link: https://goo.gle/reply-compose-sample

**[Adaptive apps with Compose and Material navigation]** (fig) Learn how to get the most from navigation components like nav rail, drawer, and tabs in apps build with Jetpack Compose Link: https://goo.gle/compose-adaptive-codelab

### Flutter

Source: https://m3.material.io/develop/flutter


#### Material 3 Widget catalog

Flutter supports original M3 components. M3 Expressive is not available on Flutter.

**[Material Flutter widget catalog]** (fig) The Flutter team is currently working on Material Design 3 support for Material Components. Link: https://docs.flutter.dev/ui/widgets/material

#### Resources & documentation

Guides, developer docs, tutorials, and more

**[Flutter.dev]** (fig) Google's UI toolkit for building beautiful, natively compiled applications from a single codebase. Link: https://flutter.dev/

**[Material 3 GitHub issue]** (fig) Umbrella tracking issue for all past and future engineering work on Flutter support for Material 3. Link: https://github.com/flutter/flutter/issues/91605

**[Opt-in with useMaterial3 flag]** (fig) Set ThemeData.useMaterial3 to true for updated components and to apply new typography, color, elevation, and more. Link: https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html

**[MDC-101: Apply Material 3 to Flutter]** (fig) Step-by-step codelab on how to apply Material 3 in your Flutter app. Link: https://codelabs.developers.google.com/codelabs/mdc-101-flutter

**[Build an animated responsive layout]** (fig) Start with an empty Flutter app and build out a fully styled and animated application using Material 3 with Flutter. Link: https://codelabs.developers.google.com/codelabs/flutter-animated-responsive-layout#0

**[5 Steps to prepare your app for large screens]** (fig) What to prioritize when building a responsive UI experience. Link: https://www.youtube.com/watch?v=7nrhTdS7dHg

**[Material 3 from design to deployment]** (fig) Learn how to build the Basil Material study in Flutter with advanced theming techniques that support multiple device contexts. Link: https://www.youtube.com/watch?v=7nrhTdS7dHg

**[Material 3 Canonical layouts]** (fig) See how to build an adaptive, responsible application using Material 3 canonical layouts with the adaptive\_scaffold package. Link: https://pub.dev/packages/flutter_adaptive_scaffold

**[Sample app: Wonderous]** (fig) Wonderous pushes visual fidelity, effects, and transitions to showcase Flutter capabilities on modern mobile hardware. Link: https://flutter.gskinner.com/wonderous/

### Web

Source: https://m3.material.io/develop/web


#### Announcements

**Material Web Components are currently in maintenance mode.** No updates are currently being made to this library. Material 3 Expressive is not implemented on Web.

**[Material Web 2.0]** (fig) Start using lightweight and accessible Material Components in any web framework Link: https://github.com/material-components/material-web/discussions/categories/announcements

**[Web roadmap]** (fig) Material Web is currently in maintenance mode; the roadmap lists what used to be planned and all past releases Link: https://github.com/material-components/material-web/blob/main/docs/roadmap.md

#### Resources & documentation

Guides, developer docs, tutorials, and more

**[Get started]** (fig) Install Material Web Components and start building Link: https://github.com/material-components/material-web/blob/main/docs/quick-start.md

**[Theming]** (fig) Use theming to apply color, typography, and other styles to your Material Web app Link: https://github.com/material-components/material-web/tree/main/docs/theming

**[Material Web Components dev docs]** (fig) Build using Material’s made-in-house library. Documentation for all Material components and styles available in MWC. Link: https://github.com/material-components/material-web/tree/main/docs

**[Angular Material dev docs]** (fig) Build using Material 3 in Angular. Note: Implementation may differ from Material Web Components and these guidelines. Link: https://material.angular.dev/

