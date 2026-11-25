# Material Design 3: source-grounded guide index (web & mobile-web framing)

Built 2026-10-09 from **https://m3.material.io/** (Tier 1). Official Google resources linked from the site are Tier 2/3; the web repos were verified directly. Site content build `2026-09-23_06-10-05`; token data "Google Material 3" DSDB v38.2.9.

**Authority rule:** the Material documentation is authoritative. This guide reorganizes it without changing meaning. Rules are quoted or closely paraphrased with links to their source pages, and values come from the site's own token data. Where the docs say nothing, this guide says so and doesn't fill the gap. Standard M3 and **M3 Expressive** are kept distinct. Statuses (new, deprecated, no longer recommended, maintenance mode, Developer Preview, platform availability) are preserved as written. No third-party sources were used.

**Target platforms: web / mobile web and native mobile (Jetpack Compose, Android Views/MDC-Android, Flutter), on equal footing.** All guideline content is kept in full.
- Token tables show web values with the Android/default values alongside.
- [13](13-repositories-implementation.md) has (A) official repositories, (B) per-component availability on every platform including Expressive, (C) web, and (D) native.
- Each component file has an "Implementation links" section with the site's links and repo paths for every platform.
- [MATERIAL_3_AGENT_INSTRUCTIONS.md](MATERIAL_3_AGENT_INSTRUCTIONS.md) covers web in §15, native mobile in §16 and repositories in §17.

Key statuses:
- **Web:** Material Web Components are "currently in maintenance mode", and "Material 3 Expressive is not implemented on Web."
- **Android Views:** the MDC-Android M3 library "is in maintenance mode"; "Material Android is Compose-first."
- **Flutter:** "M3 Expressive is not available on Flutter."
- **Compose:** has every Expressive component (experimental until Compose Material 1.5.0).

## Start here
- **AI agents:** read [MATERIAL_3_AGENT_INSTRUCTIONS.md](MATERIAL_3_AGENT_INSTRUCTIONS.md) first. It covers the decision hierarchy, component-selection logic (Need / Consider / Choose based on / Avoid / Sources), Expressive rules, statuses, the web and mobile-web section, and the compliance checklist.
- **Humans:** read the "Essentials" at the top of each topic file. Each file then has a source-page table, a verbatim Do/Don't/Caution index, and a verbatim appendix of every in-scope page.

## Guide index
| # | File | Contents |
|---|---|---|
| 00 | 00-README.md (this file) | Guide index, method, depth notes |
| 01 | [01-material-design-overview.md](01-material-design-overview.md) | Philosophy, system structure (site areas → files), major concepts, M3 and how M3 Expressive relates to it |
| 02 | [02-foundations.md](02-foundations.md) | Content design & writing, glossary, platform guidance (watches, XR), **elevation, spacing, icons** |
| 03 | [03-color.md](03-color.md) | Color system, roles, dynamic color, schemes, contrast levels, custom/static color |
| 04 | [04-typography.md](04-typography.md) | Type scale (baseline + emphasized), fonts, variable type, web units |
| 05 | [05-shape.md](05-shape.md) | Corner radius scale, **Expressive** shape library, shape morph |
| 06 | [06-motion.md](06-motion.md) | Motion physics (springs; standard vs **expressive** schemes), web spring-to-curve table, legacy easing & duration, transitions |
| 07 | [07-layout-adaptive.md](07-layout-adaptive.md) | Breakpoints (Android and web), panes, scaffold (bars/rails), canonical layouts, grids/spacing/density, RTL |
| 08 | [08-accessibility.md](08-accessibility.md) | Consolidated accessibility: principles, assistive tech, contrast, structure, flow, elements, writing, building for all, plus pointers to every component Accessibility tab |
| 09 | [09-components/](09-components/00-index.md) | Index, all-buttons page, and **36 component files**. Each has key points, status/Expressive/M2 differences, token sets, Do/Don't index, and the full verbatim tabs |
| 10 | [10-patterns-interaction.md](10-patterns-interaction.md) | Interaction states model, inputs (pointer/keyboard), gestures, selection, and the cross-component patterns Material documents (navigation by breakpoint, scaffold, pane adaptation, canonical layouts, transition patterns, button choice) |
| 11 | [11-design-tokens.md](11-design-tokens.md) | Token model (reference/system/component), names, semantic roles, inheritance chains, contexts and web resolution, theming/customization, implementation relationships. Links to [tokens/](tokens/components-index.md) |
| 12 | [12-tools-assets.md](12-tools-assets.md) | Figma kit, Theme Builder, Material Symbols, fonts, plugins; every external link from guide pages with HTTP status |
| 13 | [13-repositories-implementation.md](13-repositories-implementation.md) | (A) official GitHub repositories with status and last push; (B) per-component availability on Web, Compose, Views and Flutter incl. Expressive; (C) web: MWC status, repo check, web styles, color utilities, fonts and icons, token sources; (D) native: Compose, Views, Flutter, native style support. Then the full status matrix |
| 14 | [14-education.md](14-education.md) | All 114 m3.material.io blog posts (pre-M3 flagged), tutorials, videos, codelabs |
| 15 | [15-source-map.md](15-source-map.md) | Every source record: title, URL, category, key subject, linked resources, access date, and the guide file that covers it |
| extra | [16-coverage-audit.md](16-coverage-audit.md) | Extra file outside the required list: coverage by area, **everything not accessed or verified**, value verification, refresh procedure |
| — | [MATERIAL_3_AGENT_INSTRUCTIONS.md](MATERIAL_3_AGENT_INSTRUCTIONS.md) | Agent instruction file |
| — | [tokens/](tokens/components-index.md) | Resolved token tables (Web, with Android/default alongside): [system color](tokens/system-color.md), [reference palettes](tokens/ref-palette.md), [typography](tokens/system-typography.md), [shape](tokens/system-shape.md), [motion](tokens/system-motion.md), [elevation](tokens/system-elevation.md), [state](tokens/system-state.md), [spacing](tokens/system-spacing.md), plus 168 component token sets |
| — | `inventory.json` | Machine-readable inventory of 373 page records |
| — | `raw/` | Source captures: route tables, page/blog JSON, token/status data, verbatim per-page markdown (`raw/text/`), web repo docs (`raw/web/`), `verification.md` |
| — | `tools/` | Python scripts that regenerate everything from `raw/` (`assemble.py` builds 01–08, 10, 11, 13 from `tools/essentials/`; `build_platforms.py` builds the repo table, platform matrix and component implementation links) |

## Methodology (short)
1. Inventory first: the sitemap (375 URLs) and the site's route table (90 routes, 114 blog routes) were reconciled into `inventory.json`.
2. Each page's content JSON was captured. This is what the site renders: all tabs, captions, Do/Don't/Caution labels, alt text, and token/status modules. It was converted verbatim to `raw/text/`.
3. Token modules were resolved from the site's token database for Platform=Web (see [11](11-design-tokens.md) for exactly what that changes).
4. Essentials were hand-written from those sources with citations and checked against the text (`raw/verification.md`). Verbatim appendices and rule indices were generated so nothing is lost.
5. Repositories were verified with the GitHub API (snapshots in `raw/repos/`). Web implementation facts were checked against the material-web and material-color-utilities repos and npm (copies in `raw/web/`). Repo paths were HTTP-checked. Other external links were HTTP-checked only.

## Depth: honest notes
- **Deep:** components (full verbatim text plus resolved tokens and per-platform implementation links), color, typography/shape/motion tokens, layout/adaptive, M3 Expressive, platform availability (site tables plus repo checks), and the agent instructions.
- **Medium:** 10 (patterns & interaction) has fuller essentials for interaction. Its cross-component patterns are summaries that link to their full text in 06, 07 and 09. 11 (design tokens) closely follows the two token pages plus customization, with token-data facts. 08 and 02 essentials are brief; the detail is in the verbatim appendices.
- **Shallow:** library API docs (developer.android.com, api.flutter.dev and per-component material-web docs are linked, not summarized), tools (link-checked list), education (catalog), XR/watch and content-design essentials.
- **Not captured:** information only shown in images or videos (e.g. Specs redline diagrams), video transcripts, and interactive tools. See [16-coverage-audit.md](16-coverage-audit.md).

## Refresh
See "Freshness / refresh procedure" in [16-coverage-audit.md](16-coverage-audit.md).

Access date for all sources: **2026-10-09**.
