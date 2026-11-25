# 15 — Source map

Complete index of every m3.material.io page reviewed (all fetched 2026-10-09 through the site's own content endpoints — the same JSON the site's Angular app renders). Columns: title, URL, category, key subject (tab), site content timestamp, counts of linked resources, and the local verbatim text file.

Additional machine-readable index: `inventory.json` (same records, with full internal/external link lists and token-table references).

## Data endpoints used (for refresh)
- Route table (slug → content file): embedded in `https://m3.material.io/static/angular/main.<hash>.js` (copied to `raw/_routes.json`, `raw/_blog_routes.json`).
- Page content: `https://m3.material.io/_dsm/content/m3/<build>/<exportedCarbonFileId>.json` — build used: `2026-09-23_06-10-05`.
- Token data: `https://m3.material.io/_dsm/data/dsdb-m3/<build>/<TYPE>.<id>.json` (TOKEN_TABLE, TYPOGRAPHY, COLOR, ELEVATION, MEASUREMENT, TOKEN_TYPE_UNSPECIFIED) and implementation status `designSystems_030656e0a1083ef1_components_<id>.json`.
- Legacy blog posts: `https://m3.material.io/page-data/Posts/<document_id>.json`.
- Sitemap: `https://m3.material.io/sitemap.xml` (375 URLs; lastmod of home 2026-07-08).

## Alias / non-content URLs in the sitemap
| URL | Note |
|---|---|
| https://m3.material.io/building-with-m3-expressive | Same content as /blog/building-with-m3-expressive (served from the same content file) |
| https://m3.material.io/m3-expressive-motion-theming | Same content as /blog/m3-expressive-motion-theming |
| https://m3.material.io/material-is-compose-first | Same content as /blog/material-is-compose-first |
| https://m3.material.io/whats-new-at-io26 | Same content as /blog/whats-new-at-io26 |
| https://m3.material.io/blog/get-started, https://m3.material.io/blog/search.html | Non-content routes (no content file) |


## Home (1)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 1 | Material Design | https://m3.material.io/ |  | 2026-07-08 | 19 | 5 | `raw/text/home.md` | [01-material-design-overview.md](01-material-design-overview.md) |

## Foundations (3)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 2 | Foundations | https://m3.material.io/foundations |  | 2026-07-17 | 8 | 0 | `raw/text/foundations.md` | [01-material-design-overview.md](01-material-design-overview.md) |
| 3 | Material A-Z | https://m3.material.io/foundations/glossary |  | 2026-08-18 | 27 | 2 | `raw/text/foundations__glossary.md` | [02-foundations.md](02-foundations.md) |
| 4 | Customizing Material | https://m3.material.io/foundations/customization |  | 2026-07-17 | 3 | 4 | `raw/text/foundations__customization.md` | [11-design-tokens.md](11-design-tokens.md) |

## Accessibility (12)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 5 | Overview — Principles | https://m3.material.io/foundations/overview/principles | Principles | 2026-07-17 | 0 | 1 | `raw/text/foundations__overview__principles.md` | [08-accessibility.md](08-accessibility.md) |
| 6 | Overview — Assistive technology | https://m3.material.io/foundations/overview/assistive-technology | Assistive technology | 2026-07-17 | 0 | 0 | `raw/text/foundations__overview__assistive-technology.md` | [08-accessibility.md](08-accessibility.md) |
| 7 | Designing — Overview | https://m3.material.io/foundations/designing/overview | Overview | 2026-07-17 | 0 | 0 | `raw/text/foundations__designing__overview.md` | [08-accessibility.md](08-accessibility.md) |
| 8 | Designing — Color contrast | https://m3.material.io/foundations/designing/color-contrast | Color contrast | 2026-07-17 | 1 | 0 | `raw/text/foundations__designing__color-contrast.md` | [08-accessibility.md](08-accessibility.md) |
| 9 | Designing — Structure | https://m3.material.io/foundations/designing/structure | Structure | 2026-07-17 | 0 | 0 | `raw/text/foundations__designing__structure.md` | [08-accessibility.md](08-accessibility.md) |
| 10 | Designing — Flow | https://m3.material.io/foundations/designing/flow | Flow | 2026-07-17 | 0 | 0 | `raw/text/foundations__designing__flow.md` | [08-accessibility.md](08-accessibility.md) |
| 11 | Designing — Elements | https://m3.material.io/foundations/designing/elements | Elements | 2026-07-17 | 1 | 0 | `raw/text/foundations__designing__elements.md` | [08-accessibility.md](08-accessibility.md) |
| 12 | Writing and text — Best practices | https://m3.material.io/foundations/writing/best-practices | Best practices | 2026-07-17 | 1 | 0 | `raw/text/foundations__writing__best-practices.md` | [08-accessibility.md](08-accessibility.md) |
| 13 | Writing and text — Text truncation | https://m3.material.io/foundations/writing/text-truncation | Text truncation | 2026-07-17 | 0 | 0 | `raw/text/foundations__writing__text-truncation.md` | [08-accessibility.md](08-accessibility.md) |
| 14 | Writing and text — Text resizing | https://m3.material.io/foundations/writing/text-resizing | Text resizing | 2026-07-17 | 0 | 0 | `raw/text/foundations__writing__text-resizing.md` | [08-accessibility.md](08-accessibility.md) |
| 15 | Building for all — User needs | https://m3.material.io/foundations/building-for-all/user-needs | User needs | 2026-07-17 | 0 | 0 | `raw/text/foundations__building-for-all__user-needs.md` | [08-accessibility.md](08-accessibility.md) |
| 16 | Building for all — Co-design | https://m3.material.io/foundations/building-for-all/co-design | Co-design | 2026-07-17 | 0 | 1 | `raw/text/foundations__building-for-all__co-design.md` | [08-accessibility.md](08-accessibility.md) |

## Content design (8)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 17 | Content design | https://m3.material.io/foundations/content-design/overview |  | 2026-07-17 | 0 | 2 | `raw/text/foundations__content-design__overview.md` | [02-foundations.md](02-foundations.md) |
| 18 | Alt text | https://m3.material.io/foundations/content-design/alt-text |  | 2026-07-17 | 1 | 0 | `raw/text/foundations__content-design__alt-text.md` | [02-foundations.md](02-foundations.md) |
| 19 | Global writing — Overview | https://m3.material.io/foundations/content-design/global-writing/overview | Overview | 2026-07-17 | 0 | 0 | `raw/text/foundations__content-design__global-writing__overview.md` | [02-foundations.md](02-foundations.md) |
| 20 | Global writing — Word choice | https://m3.material.io/foundations/content-design/global-writing/word-choice | Word choice | 2026-07-17 | 0 | 0 | `raw/text/foundations__content-design__global-writing__word-choice.md` | [02-foundations.md](02-foundations.md) |
| 21 | Notifications | https://m3.material.io/foundations/content-design/notifications |  | 2026-07-17 | 0 | 2 | `raw/text/foundations__content-design__notifications.md` | [02-foundations.md](02-foundations.md) |
| 22 | Style guide — UX writing best practices | https://m3.material.io/foundations/content-design/style-guide/ux-writing-best-practices | UX writing best practices | 2026-08-04 | 0 | 0 | `raw/text/foundations__content-design__style-guide__ux-writing-best-practices.md` | [02-foundations.md](02-foundations.md) |
| 23 | Style guide — Word choice | https://m3.material.io/foundations/content-design/style-guide/word-choice | Word choice | 2026-08-04 | 0 | 0 | `raw/text/foundations__content-design__style-guide__word-choice.md` | [02-foundations.md](02-foundations.md) |
| 24 | Style guide — Grammar and punctuation | https://m3.material.io/foundations/content-design/style-guide/grammar-and-punctuation | Grammar and punctuation | 2026-08-04 | 0 | 1 | `raw/text/foundations__content-design__style-guide__grammar-and-punctuation.md` | [02-foundations.md](02-foundations.md) |

## Tokens (2)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 25 | Design tokens — Overview | https://m3.material.io/foundations/design-tokens/overview | Overview | 2026-07-17 | 3 | 3 | `raw/text/foundations__design-tokens__overview.md` | [11-design-tokens.md](11-design-tokens.md) |
| 26 | Design tokens — How to use tokens | https://m3.material.io/foundations/design-tokens/how-to-use-tokens | How to use tokens | 2026-07-17 | 0 | 4 | `raw/text/foundations__design-tokens__how-to-use-tokens.md` | [11-design-tokens.md](11-design-tokens.md) |

## Interaction (6)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 27 | Gestures | https://m3.material.io/foundations/interaction/gestures |  | 2026-07-17 | 0 | 2 | `raw/text/foundations__interaction__gestures.md` | [10-patterns-interaction.md](10-patterns-interaction.md) |
| 28 | Inputs | https://m3.material.io/foundations/interaction/inputs |  | 2026-07-17 | 3 | 0 | `raw/text/foundations__interaction__inputs.md` | [10-patterns-interaction.md](10-patterns-interaction.md) |
| 29 | Selection | https://m3.material.io/foundations/interaction/selection |  | 2026-07-17 | 0 | 1 | `raw/text/foundations__interaction__selection.md` | [10-patterns-interaction.md](10-patterns-interaction.md) |
| 30 | States — Overview | https://m3.material.io/foundations/interaction/states/overview | Overview | 2026-07-17 | 6 | 1 | `raw/text/foundations__interaction__states__overview.md` | [10-patterns-interaction.md](10-patterns-interaction.md) |
| 31 | States — State layers | https://m3.material.io/foundations/interaction/states/state-layers | State layers | 2026-07-17 | 1 | 0 | `raw/text/foundations__interaction__states__state-layers.md` | [10-patterns-interaction.md](10-patterns-interaction.md) |
| 32 | States — Applying states | https://m3.material.io/foundations/interaction/states/applying-states | Applying states | 2026-07-17 | 0 | 0 | `raw/text/foundations__interaction__states__applying-states.md` | [10-patterns-interaction.md](10-patterns-interaction.md) |

## Layout & adaptive (21)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 33 | Layout overview — Overview | https://m3.material.io/foundations/layout/layout-overview/overview | Overview | 2026-08-18 | 4 | 6 | `raw/text/foundations__layout__layout-overview__overview.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 34 | Layout overview — Parts of layout | https://m3.material.io/foundations/layout/layout-overview/parts-of-layout | Parts of layout | 2026-08-18 | 6 | 2 | `raw/text/foundations__layout__layout-overview__parts-of-layout.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 35 | Layout overview — Adaptive design | https://m3.material.io/foundations/layout/layout-overview/adaptive-design | Adaptive design | 2026-08-18 | 4 | 2 | `raw/text/foundations__layout__layout-overview__adaptive-design.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 36 | Breakpoints — Overview | https://m3.material.io/foundations/layout/breakpoints/overview | Overview | 2026-07-17 | 1 | 1 | `raw/text/foundations__layout__breakpoints__overview.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 37 | Breakpoints — Compact | https://m3.material.io/foundations/layout/breakpoints/compact | Compact | 2026-07-17 | 0 | 0 | `raw/text/foundations__layout__breakpoints__compact.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 38 | Breakpoints — Medium | https://m3.material.io/foundations/layout/breakpoints/medium | Medium | 2026-07-17 | 0 | 0 | `raw/text/foundations__layout__breakpoints__medium.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 39 | Breakpoints — Expanded | https://m3.material.io/foundations/layout/breakpoints/expanded | Expanded | 2026-07-17 | 2 | 0 | `raw/text/foundations__layout__breakpoints__expanded.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 40 | Breakpoints — Large & extra-large | https://m3.material.io/foundations/layout/breakpoints/large-extra-large | Large & extra-large | 2026-07-17 | 2 | 0 | `raw/text/foundations__layout__breakpoints__large-extra-large.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 41 | Canonical layout examples — Overview | https://m3.material.io/foundations/layout/canonical-examples/overview | Overview | 2026-07-17 | 4 | 3 | `raw/text/foundations__layout__canonical-examples__overview.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 42 | Canonical layout examples — Feed | https://m3.material.io/foundations/layout/canonical-examples/feed | Feed | 2026-07-17 | 1 | 0 | `raw/text/foundations__layout__canonical-examples__feed.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 43 | Canonical layout examples — List-detail | https://m3.material.io/foundations/layout/canonical-examples/list-detail | List-detail | 2026-07-17 | 1 | 0 | `raw/text/foundations__layout__canonical-examples__list-detail.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 44 | Canonical layout examples — Supporting pane | https://m3.material.io/foundations/layout/canonical-examples/supporting-pane | Supporting pane | 2026-07-17 | 1 | 0 | `raw/text/foundations__layout__canonical-examples__supporting-pane.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 45 | Scaffold — Overview | https://m3.material.io/foundations/layout/scaffold/overview | Overview | 2026-07-17 | 1 | 2 | `raw/text/foundations__layout__scaffold__overview.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 46 | Scaffold — Bars | https://m3.material.io/foundations/layout/scaffold/bars | Bars | 2026-07-17 | 0 | 1 | `raw/text/foundations__layout__scaffold__bars.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 47 | Scaffold — Rails | https://m3.material.io/foundations/layout/scaffold/rails | Rails | 2026-07-17 | 1 | 1 | `raw/text/foundations__layout__scaffold__rails.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 48 | Scaffold — Panes | https://m3.material.io/foundations/layout/scaffold/panes | Panes | 2026-07-17 | 0 | 0 | `raw/text/foundations__layout__scaffold__panes.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 49 | Grids &amp; spacing — Overview | https://m3.material.io/foundations/layout/grids-spacing/overview | Overview | 2026-07-17 | 1 | 2 | `raw/text/foundations__layout__grids-spacing__overview.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 50 | Grids &amp; spacing — Grids | https://m3.material.io/foundations/layout/grids-spacing/grids | Grids | 2026-07-17 | 1 | 2 | `raw/text/foundations__layout__grids-spacing__grids.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 51 | Grids &amp; spacing — Spacing | https://m3.material.io/foundations/layout/grids-spacing/spacing | Spacing | 2026-07-17 | 1 | 0 | `raw/text/foundations__layout__grids-spacing__spacing.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 52 | Grids &amp; spacing — Density | https://m3.material.io/foundations/layout/grids-spacing/density | Density | 2026-07-17 | 0 | 0 | `raw/text/foundations__layout__grids-spacing__density.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |
| 53 | Bidirectionality &amp; RTL | https://m3.material.io/foundations/layout/bidirectionality-rtl |  | 2026-08-05 | 10 | 2 | `raw/text/foundations__layout__bidirectionality-rtl.md` | [07-layout-adaptive.md](07-layout-adaptive.md) |

## Expressive / usability (2)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 54 | Usability — Overview | https://m3.material.io/foundations/usability/overview | Overview | 2026-07-17 | 11 | 1 | `raw/text/foundations__usability__overview.md` | [01-material-design-overview.md](01-material-design-overview.md) |
| 55 | Usability — Applying M3 Expressive | https://m3.material.io/foundations/usability/applying-m3-expressive | Applying M3 Expressive | 2026-07-17 | 11 | 2 | `raw/text/foundations__usability__applying-m3-expressive.md` | [01-material-design-overview.md](01-material-design-overview.md) |

## Platform: watches (4)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 56 | Design for watches — Overview | https://m3.material.io/foundations/watches/overview | Overview | 2026-07-17 | 3 | 10 | `raw/text/foundations__watches__overview.md` | [02-foundations.md](02-foundations.md) |
| 57 | Design for watches — Foundations | https://m3.material.io/foundations/watches/foundations | Foundations | 2026-07-17 | 1 | 7 | `raw/text/foundations__watches__foundations.md` | [02-foundations.md](02-foundations.md) |
| 58 | Design for watches — Styles | https://m3.material.io/foundations/watches/styles | Styles | 2026-07-17 | 0 | 10 | `raw/text/foundations__watches__styles.md` | [02-foundations.md](02-foundations.md) |
| 59 | Design for watches — Layout | https://m3.material.io/foundations/watches/layout | Layout | 2026-07-17 | 0 | 10 | `raw/text/foundations__watches__layout.md` | [02-foundations.md](02-foundations.md) |

## Platform: XR (10)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 60 | Design for immersive XR — Overview | https://m3.material.io/foundations/xr/design/overview | Overview | 2026-07-17 | 5 | 14 | `raw/text/foundations__xr__design__overview.md` | [02-foundations.md](02-foundations.md) |
| 61 | Design for immersive XR — Interaction | https://m3.material.io/foundations/xr/design/interaction | Interaction | 2026-07-17 | 2 | 4 | `raw/text/foundations__xr__design__interaction.md` | [02-foundations.md](02-foundations.md) |
| 62 | Design for immersive XR — Layout | https://m3.material.io/foundations/xr/design/layout | Layout | 2026-07-17 | 2 | 4 | `raw/text/foundations__xr__design__layout.md` | [02-foundations.md](02-foundations.md) |
| 63 | Design for immersive XR — Accessibility | https://m3.material.io/foundations/xr/design/accessibility | Accessibility | 2026-07-17 | 0 | 4 | `raw/text/foundations__xr__design__accessibility.md` | [02-foundations.md](02-foundations.md) |
| 64 | XR components — Overview | https://m3.material.io/foundations/xr/components/overview | Overview | 2026-07-17 | 5 | 0 | `raw/text/foundations__xr__components__overview.md` | [02-foundations.md](02-foundations.md) |
| 65 | XR components — App bars | https://m3.material.io/foundations/xr/components/app-bars | App bars | 2026-07-17 | 3 | 4 | `raw/text/foundations__xr__components__app-bars.md` | [02-foundations.md](02-foundations.md) |
| 66 | XR components — Dialogs | https://m3.material.io/foundations/xr/components/dialogs | Dialogs | 2026-07-17 | 7 | 4 | `raw/text/foundations__xr__components__dialogs.md` | [02-foundations.md](02-foundations.md) |
| 67 | XR components — Nav bar | https://m3.material.io/foundations/xr/components/nav-bar | Nav bar | 2026-07-17 | 3 | 3 | `raw/text/foundations__xr__components__nav-bar.md` | [02-foundations.md](02-foundations.md) |
| 68 | XR components — Nav rail | https://m3.material.io/foundations/xr/components/nav-rail | Nav rail | 2026-07-17 | 5 | 4 | `raw/text/foundations__xr__components__nav-rail.md` | [02-foundations.md](02-foundations.md) |
| 69 | XR components — Toolbars | https://m3.material.io/foundations/xr/components/toolbars | Toolbars | 2026-07-17 | 3 | 4 | `raw/text/foundations__xr__components__toolbars.md` | [02-foundations.md](02-foundations.md) |

## Styles (1)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 70 | Styles | https://m3.material.io/styles |  | 2026-07-17 | 6 | 0 | `raw/text/styles.md` | [01-material-design-overview.md](01-material-design-overview.md) |

## Color (14)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 71 | Color system — Overview | https://m3.material.io/styles/color/system/overview | Overview | 2026-07-23 | 3 | 6 | `raw/text/styles__color__system__overview.md` | [03-color.md](03-color.md) |
| 72 | Color system — How the system works | https://m3.material.io/styles/color/system/how-the-system-works | How the system works | 2026-07-23 | 3 | 1 | `raw/text/styles__color__system__how-the-system-works.md` | [03-color.md](03-color.md) |
| 73 | Color roles | https://m3.material.io/styles/color/roles |  | 2026-07-27 | 3 | 0 | `raw/text/styles__color__roles.md` | [03-color.md](03-color.md) |
| 74 | Choosing a scheme | https://m3.material.io/styles/color/choosing-a-scheme |  | 2026-07-17 | 2 | 0 | `raw/text/styles__color__choosing-a-scheme.md` | [03-color.md](03-color.md) |
| 75 | Static color schemes — Baseline | https://m3.material.io/styles/color/static/baseline | Baseline | 2026-07-17 | 3 | 2 | `raw/text/styles__color__static__baseline.md` | [03-color.md](03-color.md) |
| 76 | Static color schemes — Custom brand | https://m3.material.io/styles/color/static/custom-brand | Custom brand | 2026-07-17 | 3 | 3 | `raw/text/styles__color__static__custom-brand.md` | [03-color.md](03-color.md) |
| 77 | Dynamic color schemes — Choosing a source | https://m3.material.io/styles/color/dynamic/choosing-a-source | Choosing a source | 2026-07-17 | 3 | 0 | `raw/text/styles__color__dynamic__choosing-a-source.md` | [03-color.md](03-color.md) |
| 78 | Dynamic color schemes — User-generated source | https://m3.material.io/styles/color/dynamic/user-generated-source | User-generated source | 2026-07-17 | 3 | 2 | `raw/text/styles__color__dynamic__user-generated-source.md` | [03-color.md](03-color.md) |
| 79 | Dynamic color schemes — Content-based source | https://m3.material.io/styles/color/dynamic/content-based-source | Content-based source | 2026-07-17 | 0 | 2 | `raw/text/styles__color__dynamic__content-based-source.md` | [03-color.md](03-color.md) |
| 80 | Advanced customizations — Overview | https://m3.material.io/styles/color/advanced/overview | Overview | 2026-07-17 | 7 | 0 | `raw/text/styles__color__advanced__overview.md` | [03-color.md](03-color.md) |
| 81 | Advanced customizations — Apply colors | https://m3.material.io/styles/color/advanced/apply-colors | Apply colors | 2026-07-17 | 4 | 0 | `raw/text/styles__color__advanced__apply-colors.md` | [03-color.md](03-color.md) |
| 82 | Advanced customizations — Define new colors | https://m3.material.io/styles/color/advanced/define-new-colors | Define new colors | 2026-07-17 | 4 | 0 | `raw/text/styles__color__advanced__define-new-colors.md` | [03-color.md](03-color.md) |
| 83 | Advanced customizations — Adjust existing colors | https://m3.material.io/styles/color/advanced/adjust-existing-colors | Adjust existing colors | 2026-07-17 | 6 | 1 | `raw/text/styles__color__advanced__adjust-existing-colors.md` | [03-color.md](03-color.md) |
| 84 | Color resources | https://m3.material.io/styles/color/resources |  | 2026-07-17 | 0 | 5 | `raw/text/styles__color__resources.md` | [03-color.md](03-color.md) |

## Typography (5)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 85 | Typography — Overview | https://m3.material.io/styles/typography/overview | Overview | 2026-08-28 | 3 | 8 | `raw/text/styles__typography__overview.md` | [04-typography.md](04-typography.md) |
| 86 | Typography — Fonts | https://m3.material.io/styles/typography/fonts | Fonts | 2026-08-28 | 2 | 7 | `raw/text/styles__typography__fonts.md` | [04-typography.md](04-typography.md) |
| 87 | Typography — Type scale & tokens | https://m3.material.io/styles/typography/type-scale-tokens | Type scale & tokens | 2026-08-28 | 2 | 1 | `raw/text/styles__typography__type-scale-tokens.md` | [04-typography.md](04-typography.md) |
| 88 | Typography — Applying type | https://m3.material.io/styles/typography/applying-type | Applying type | 2026-08-28 | 2 | 1 | `raw/text/styles__typography__applying-type.md` | [04-typography.md](04-typography.md) |
| 89 | Typography — Editorial treatments | https://m3.material.io/styles/typography/editorial-treatments | Editorial treatments | 2026-08-28 | 0 | 3 | `raw/text/styles__typography__editorial-treatments.md` | [04-typography.md](04-typography.md) |

## Shape (3)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 90 | Shape — Overview & principles | https://m3.material.io/styles/shape/overview-principles | Overview & principles | 2026-07-17 | 2 | 4 | `raw/text/styles__shape__overview-principles.md` | [05-shape.md](05-shape.md) |
| 91 | Shape — Corner radius scale | https://m3.material.io/styles/shape/corner-radius-scale | Corner radius scale | 2026-07-17 | 1 | 0 | `raw/text/styles__shape__corner-radius-scale.md` | [05-shape.md](05-shape.md) |
| 92 | Shape — Shape morph | https://m3.material.io/styles/shape/shape-morph | Shape morph | 2026-07-17 | 0 | 1 | `raw/text/styles__shape__shape-morph.md` | [05-shape.md](05-shape.md) |

## Elevation (3)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 93 | Elevation — Overview | https://m3.material.io/styles/elevation/overview | Overview | 2026-07-17 | 0 | 5 | `raw/text/styles__elevation__overview.md` | [02-foundations.md](02-foundations.md) |
| 94 | Elevation — Applying elevation | https://m3.material.io/styles/elevation/applying-elevation | Applying elevation | 2026-07-17 | 1 | 0 | `raw/text/styles__elevation__applying-elevation.md` | [02-foundations.md](02-foundations.md) |
| 95 | Elevation — Tokens | https://m3.material.io/styles/elevation/tokens | Tokens | 2026-07-17 | 1 | 0 | `raw/text/styles__elevation__tokens.md` | [02-foundations.md](02-foundations.md) |

## Spacing (3)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 96 | Spacing — Overview | https://m3.material.io/styles/spacing/overview | Overview | 2026-07-17 | 4 | 0 | `raw/text/styles__spacing__overview.md` | [02-foundations.md](02-foundations.md) |
| 97 | Spacing — Applying spacing | https://m3.material.io/styles/spacing/applying-spacing | Applying spacing | 2026-07-17 | 1 | 0 | `raw/text/styles__spacing__applying-spacing.md` | [02-foundations.md](02-foundations.md) |
| 98 | Spacing — Tokens | https://m3.material.io/styles/spacing/tokens | Tokens | 2026-07-17 | 1 | 0 | `raw/text/styles__spacing__tokens.md` | [02-foundations.md](02-foundations.md) |

## Icons (3)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 99 | Icons — Overview | https://m3.material.io/styles/icons/overview | Overview | 2026-07-17 | 0 | 4 | `raw/text/styles__icons__overview.md` | [02-foundations.md](02-foundations.md) |
| 100 | Icons — Designing icons | https://m3.material.io/styles/icons/designing-icons | Designing icons | 2026-07-17 | 0 | 5 | `raw/text/styles__icons__designing-icons.md` | [02-foundations.md](02-foundations.md) |
| 101 | Icons — Applying icons | https://m3.material.io/styles/icons/applying-icons | Applying icons | 2026-07-17 | 0 | 0 | `raw/text/styles__icons__applying-icons.md` | [02-foundations.md](02-foundations.md) |

## Motion (6)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 102 | Motion physics system — How it works | https://m3.material.io/styles/motion/overview/how-it-works | How it works | 2026-07-17 | 5 | 2 | `raw/text/styles__motion__overview__how-it-works.md` | [06-motion.md](06-motion.md) |
| 103 | Motion physics system — Specs | https://m3.material.io/styles/motion/overview/specs | Specs | 2026-07-17 | 2 | 0 | `raw/text/styles__motion__overview__specs.md` | [06-motion.md](06-motion.md) |
| 104 | Easing and duration — Applying easing and duration | https://m3.material.io/styles/motion/easing-and-duration/applying-easing-and-duration | Applying easing and duration | 2026-07-17 | 3 | 0 | `raw/text/styles__motion__easing-and-duration__applying-easing-and-duration.md` | [06-motion.md](06-motion.md) |
| 105 | Easing and duration — Tokens & specs | https://m3.material.io/styles/motion/easing-and-duration/tokens-specs | Tokens & specs | 2026-07-17 | 2 | 6 | `raw/text/styles__motion__easing-and-duration__tokens-specs.md` | [06-motion.md](06-motion.md) |
| 106 | Transitions — Transition patterns | https://m3.material.io/styles/motion/transitions/transition-patterns | Transition patterns | 2026-07-17 | 13 | 4 | `raw/text/styles__motion__transitions__transition-patterns.md` | [06-motion.md](06-motion.md) |
| 107 | Transitions — Applying transitions | https://m3.material.io/styles/motion/transitions/applying-transitions | Applying transitions | 2026-07-17 | 0 | 1 | `raw/text/styles__motion__transitions__applying-transitions.md` | [06-motion.md](06-motion.md) |

## Components (146)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 108 | Components | https://m3.material.io/components |  | 2026-09-01 | 36 | 0 | `raw/text/components.md` | [01-material-design-overview.md](01-material-design-overview.md) |
| 109 | All buttons | https://m3.material.io/components/all-buttons |  | 2026-07-17 | 11 | 0 | `raw/text/components__all-buttons.md` | [09-components/all-buttons.md](09-components/all-buttons.md) |
| 110 | Buttons — Overview | https://m3.material.io/components/buttons/overview | Overview | 2026-07-24 | 1 | 0 | `raw/text/components__buttons__overview.md` | [09-components/buttons.md](09-components/buttons.md) |
| 111 | Buttons — Specs | https://m3.material.io/components/buttons/specs | Specs | 2026-07-24 | 2 | 0 | `raw/text/components__buttons__specs.md` | [09-components/buttons.md](09-components/buttons.md) |
| 112 | Buttons — Guidelines | https://m3.material.io/components/buttons/guidelines | Guidelines | 2026-07-24 | 2 | 0 | `raw/text/components__buttons__guidelines.md` | [09-components/buttons.md](09-components/buttons.md) |
| 113 | Buttons — Accessibility | https://m3.material.io/components/buttons/accessibility | Accessibility | 2026-07-24 | 0 | 0 | `raw/text/components__buttons__accessibility.md` | [09-components/buttons.md](09-components/buttons.md) |
| 114 | Button groups — Overview | https://m3.material.io/components/button-groups/overview | Overview | 2026-09-16 | 1 | 0 | `raw/text/components__button-groups__overview.md` | [09-components/button-groups.md](09-components/button-groups.md) |
| 115 | Button groups — Specs | https://m3.material.io/components/button-groups/specs | Specs | 2026-09-16 | 4 | 0 | `raw/text/components__button-groups__specs.md` | [09-components/button-groups.md](09-components/button-groups.md) |
| 116 | Button groups — Guidelines | https://m3.material.io/components/button-groups/guidelines | Guidelines | 2026-09-16 | 1 | 0 | `raw/text/components__button-groups__guidelines.md` | [09-components/button-groups.md](09-components/button-groups.md) |
| 117 | Button groups — Accessibility | https://m3.material.io/components/button-groups/accessibility | Accessibility | 2026-09-16 | 0 | 0 | `raw/text/components__button-groups__accessibility.md` | [09-components/button-groups.md](09-components/button-groups.md) |
| 118 | FABs — Overview | https://m3.material.io/components/floating-action-button/overview | Overview | 2026-07-27 | 1 | 0 | `raw/text/components__floating-action-button__overview.md` | [09-components/floating-action-button.md](09-components/floating-action-button.md) |
| 119 | FABs — Specs | https://m3.material.io/components/floating-action-button/specs | Specs | 2026-07-27 | 4 | 0 | `raw/text/components__floating-action-button__specs.md` | [09-components/floating-action-button.md](09-components/floating-action-button.md) |
| 120 | FABs — Guidelines | https://m3.material.io/components/floating-action-button/guidelines | Guidelines | 2026-07-27 | 1 | 0 | `raw/text/components__floating-action-button__guidelines.md` | [09-components/floating-action-button.md](09-components/floating-action-button.md) |
| 121 | FABs — Accessibility | https://m3.material.io/components/floating-action-button/accessibility | Accessibility | 2026-07-27 | 0 | 0 | `raw/text/components__floating-action-button__accessibility.md` | [09-components/floating-action-button.md](09-components/floating-action-button.md) |
| 122 | Extended FABs — Overview | https://m3.material.io/components/extended-fab/overview | Overview | 2026-07-27 | 1 | 0 | `raw/text/components__extended-fab__overview.md` | [09-components/extended-fab.md](09-components/extended-fab.md) |
| 123 | Extended FABs — Specs | https://m3.material.io/components/extended-fab/specs | Specs | 2026-07-27 | 4 | 0 | `raw/text/components__extended-fab__specs.md` | [09-components/extended-fab.md](09-components/extended-fab.md) |
| 124 | Extended FABs — Guidelines | https://m3.material.io/components/extended-fab/guidelines | Guidelines | 2026-07-27 | 2 | 0 | `raw/text/components__extended-fab__guidelines.md` | [09-components/extended-fab.md](09-components/extended-fab.md) |
| 125 | Extended FABs — Accessibility | https://m3.material.io/components/extended-fab/accessibility | Accessibility | 2026-07-27 | 0 | 0 | `raw/text/components__extended-fab__accessibility.md` | [09-components/extended-fab.md](09-components/extended-fab.md) |
| 126 | FAB menu — Overview | https://m3.material.io/components/fab-menu/overview | Overview | 2026-07-17 | 1 | 0 | `raw/text/components__fab-menu__overview.md` | [09-components/fab-menu.md](09-components/fab-menu.md) |
| 127 | FAB menu — Specs | https://m3.material.io/components/fab-menu/specs | Specs | 2026-07-17 | 2 | 0 | `raw/text/components__fab-menu__specs.md` | [09-components/fab-menu.md](09-components/fab-menu.md) |
| 128 | FAB menu — Guidelines | https://m3.material.io/components/fab-menu/guidelines | Guidelines | 2026-07-17 | 2 | 0 | `raw/text/components__fab-menu__guidelines.md` | [09-components/fab-menu.md](09-components/fab-menu.md) |
| 129 | FAB menu — Accessibility | https://m3.material.io/components/fab-menu/accessibility | Accessibility | 2026-07-17 | 2 | 0 | `raw/text/components__fab-menu__accessibility.md` | [09-components/fab-menu.md](09-components/fab-menu.md) |
| 130 | Icon buttons — Overview | https://m3.material.io/components/icon-buttons/overview | Overview | 2026-07-17 | 1 | 0 | `raw/text/components__icon-buttons__overview.md` | [09-components/icon-buttons.md](09-components/icon-buttons.md) |
| 131 | Icon buttons — Specs | https://m3.material.io/components/icon-buttons/specs | Specs | 2026-07-17 | 2 | 0 | `raw/text/components__icon-buttons__specs.md` | [09-components/icon-buttons.md](09-components/icon-buttons.md) |
| 132 | Icon buttons — Guidelines | https://m3.material.io/components/icon-buttons/guidelines | Guidelines | 2026-07-17 | 1 | 1 | `raw/text/components__icon-buttons__guidelines.md` | [09-components/icon-buttons.md](09-components/icon-buttons.md) |
| 133 | Icon buttons — Accessibility | https://m3.material.io/components/icon-buttons/accessibility | Accessibility | 2026-07-17 | 0 | 0 | `raw/text/components__icon-buttons__accessibility.md` | [09-components/icon-buttons.md](09-components/icon-buttons.md) |
| 134 | Segmented buttons — Overview | https://m3.material.io/components/segmented-buttons/overview | Overview | 2026-09-16 | 2 | 0 | `raw/text/components__segmented-buttons__overview.md` | [09-components/segmented-buttons.md](09-components/segmented-buttons.md) |
| 135 | Segmented buttons — Specs | https://m3.material.io/components/segmented-buttons/specs | Specs | 2026-09-16 | 3 | 0 | `raw/text/components__segmented-buttons__specs.md` | [09-components/segmented-buttons.md](09-components/segmented-buttons.md) |
| 136 | Segmented buttons — Guidelines | https://m3.material.io/components/segmented-buttons/guidelines | Guidelines | 2026-09-16 | 1 | 0 | `raw/text/components__segmented-buttons__guidelines.md` | [09-components/segmented-buttons.md](09-components/segmented-buttons.md) |
| 137 | Segmented buttons — Accessibility | https://m3.material.io/components/segmented-buttons/accessibility | Accessibility | 2026-09-16 | 1 | 0 | `raw/text/components__segmented-buttons__accessibility.md` | [09-components/segmented-buttons.md](09-components/segmented-buttons.md) |
| 138 | Split buttons — Overview | https://m3.material.io/components/split-button/overview | Overview | 2026-09-08 | 1 | 0 | `raw/text/components__split-button__overview.md` | [09-components/split-button.md](09-components/split-button.md) |
| 139 | Split buttons — Specs | https://m3.material.io/components/split-button/specs | Specs | 2026-09-08 | 2 | 0 | `raw/text/components__split-button__specs.md` | [09-components/split-button.md](09-components/split-button.md) |
| 140 | Split buttons — Guidelines | https://m3.material.io/components/split-button/guidelines | Guidelines | 2026-09-08 | 0 | 0 | `raw/text/components__split-button__guidelines.md` | [09-components/split-button.md](09-components/split-button.md) |
| 141 | Split buttons — Accessibility | https://m3.material.io/components/split-button/accessibility | Accessibility | 2026-09-08 | 1 | 0 | `raw/text/components__split-button__accessibility.md` | [09-components/split-button.md](09-components/split-button.md) |
| 142 | Toolbars — Overview | https://m3.material.io/components/toolbars/overview | Overview | 2026-07-28 | 1 | 0 | `raw/text/components__toolbars__overview.md` | [09-components/toolbars.md](09-components/toolbars.md) |
| 143 | Toolbars — Specs | https://m3.material.io/components/toolbars/specs | Specs | 2026-07-28 | 2 | 1 | `raw/text/components__toolbars__specs.md` | [09-components/toolbars.md](09-components/toolbars.md) |
| 144 | Toolbars — Guidelines | https://m3.material.io/components/toolbars/guidelines | Guidelines | 2026-07-28 | 1 | 0 | `raw/text/components__toolbars__guidelines.md` | [09-components/toolbars.md](09-components/toolbars.md) |
| 145 | Toolbars — Accessibility | https://m3.material.io/components/toolbars/accessibility | Accessibility | 2026-07-28 | 0 | 0 | `raw/text/components__toolbars__accessibility.md` | [09-components/toolbars.md](09-components/toolbars.md) |
| 146 | Bottom sheets — Overview | https://m3.material.io/components/bottom-sheets/overview | Overview | 2026-07-28 | 0 | 0 | `raw/text/components__bottom-sheets__overview.md` | [09-components/bottom-sheets.md](09-components/bottom-sheets.md) |
| 147 | Bottom sheets — Specs | https://m3.material.io/components/bottom-sheets/specs | Specs | 2026-07-28 | 1 | 0 | `raw/text/components__bottom-sheets__specs.md` | [09-components/bottom-sheets.md](09-components/bottom-sheets.md) |
| 148 | Bottom sheets — Guidelines | https://m3.material.io/components/bottom-sheets/guidelines | Guidelines | 2026-07-28 | 1 | 0 | `raw/text/components__bottom-sheets__guidelines.md` | [09-components/bottom-sheets.md](09-components/bottom-sheets.md) |
| 149 | Bottom sheets — Accessibility | https://m3.material.io/components/bottom-sheets/accessibility | Accessibility | 2026-07-28 | 0 | 0 | `raw/text/components__bottom-sheets__accessibility.md` | [09-components/bottom-sheets.md](09-components/bottom-sheets.md) |
| 150 | Cards — Overview | https://m3.material.io/components/cards/overview | Overview | 2026-07-24 | 0 | 0 | `raw/text/components__cards__overview.md` | [09-components/cards.md](09-components/cards.md) |
| 151 | Cards — Specs | https://m3.material.io/components/cards/specs | Specs | 2026-07-24 | 2 | 0 | `raw/text/components__cards__specs.md` | [09-components/cards.md](09-components/cards.md) |
| 152 | Cards — Guidelines | https://m3.material.io/components/cards/guidelines | Guidelines | 2026-07-24 | 4 | 0 | `raw/text/components__cards__guidelines.md` | [09-components/cards.md](09-components/cards.md) |
| 153 | Cards — Accessibility | https://m3.material.io/components/cards/accessibility | Accessibility | 2026-07-24 | 1 | 0 | `raw/text/components__cards__accessibility.md` | [09-components/cards.md](09-components/cards.md) |
| 154 | Carousel — Overview | https://m3.material.io/components/carousel/overview | Overview | 2026-08-18 | 0 | 0 | `raw/text/components__carousel__overview.md` | [09-components/carousel.md](09-components/carousel.md) |
| 155 | Carousel — Specs | https://m3.material.io/components/carousel/specs | Specs | 2026-08-18 | 2 | 0 | `raw/text/components__carousel__specs.md` | [09-components/carousel.md](09-components/carousel.md) |
| 156 | Carousel — Guidelines | https://m3.material.io/components/carousel/guidelines | Guidelines | 2026-08-18 | 6 | 0 | `raw/text/components__carousel__guidelines.md` | [09-components/carousel.md](09-components/carousel.md) |
| 157 | Carousel — Accessibility | https://m3.material.io/components/carousel/accessibility | Accessibility | 2026-08-18 | 0 | 0 | `raw/text/components__carousel__accessibility.md` | [09-components/carousel.md](09-components/carousel.md) |
| 158 | Chips — Overview | https://m3.material.io/components/chips/overview | Overview | 2026-07-17 | 0 | 0 | `raw/text/components__chips__overview.md` | [09-components/chips.md](09-components/chips.md) |
| 159 | Chips — Specs | https://m3.material.io/components/chips/specs | Specs | 2026-07-17 | 2 | 0 | `raw/text/components__chips__specs.md` | [09-components/chips.md](09-components/chips.md) |
| 160 | Chips — Guidelines | https://m3.material.io/components/chips/guidelines | Guidelines | 2026-07-17 | 5 | 0 | `raw/text/components__chips__guidelines.md` | [09-components/chips.md](09-components/chips.md) |
| 161 | Chips — Accessibility | https://m3.material.io/components/chips/accessibility | Accessibility | 2026-07-17 | 0 | 0 | `raw/text/components__chips__accessibility.md` | [09-components/chips.md](09-components/chips.md) |
| 162 | Dialogs — Overview | https://m3.material.io/components/dialogs/overview | Overview | 2026-07-28 | 0 | 0 | `raw/text/components__dialogs__overview.md` | [09-components/dialogs.md](09-components/dialogs.md) |
| 163 | Dialogs — Specs | https://m3.material.io/components/dialogs/specs | Specs | 2026-07-28 | 1 | 0 | `raw/text/components__dialogs__specs.md` | [09-components/dialogs.md](09-components/dialogs.md) |
| 164 | Dialogs — Guidelines | https://m3.material.io/components/dialogs/guidelines | Guidelines | 2026-07-28 | 2 | 0 | `raw/text/components__dialogs__guidelines.md` | [09-components/dialogs.md](09-components/dialogs.md) |
| 165 | Dialogs — Accessibility | https://m3.material.io/components/dialogs/accessibility | Accessibility | 2026-07-28 | 0 | 0 | `raw/text/components__dialogs__accessibility.md` | [09-components/dialogs.md](09-components/dialogs.md) |
| 166 | Divider — Overview | https://m3.material.io/components/divider/overview | Overview | 2026-07-17 | 0 | 0 | `raw/text/components__divider__overview.md` | [09-components/divider.md](09-components/divider.md) |
| 167 | Divider — Specs | https://m3.material.io/components/divider/specs | Specs | 2026-07-17 | 1 | 0 | `raw/text/components__divider__specs.md` | [09-components/divider.md](09-components/divider.md) |
| 168 | Divider — Guidelines | https://m3.material.io/components/divider/guidelines | Guidelines | 2026-07-17 | 0 | 0 | `raw/text/components__divider__guidelines.md` | [09-components/divider.md](09-components/divider.md) |
| 169 | Divider — Accessibility | https://m3.material.io/components/divider/accessibility | Accessibility | 2026-07-17 | 0 | 0 | `raw/text/components__divider__accessibility.md` | [09-components/divider.md](09-components/divider.md) |
| 170 | Menus — Overview | https://m3.material.io/components/menus/overview | Overview | 2026-07-28 | 1 | 0 | `raw/text/components__menus__overview.md` | [09-components/menus.md](09-components/menus.md) |
| 171 | Menus — Specs | https://m3.material.io/components/menus/specs | Specs | 2026-07-28 | 5 | 0 | `raw/text/components__menus__specs.md` | [09-components/menus.md](09-components/menus.md) |
| 172 | Menus — Guidelines | https://m3.material.io/components/menus/guidelines | Guidelines | 2026-07-28 | 5 | 0 | `raw/text/components__menus__guidelines.md` | [09-components/menus.md](09-components/menus.md) |
| 173 | Menus — Accessibility | https://m3.material.io/components/menus/accessibility | Accessibility | 2026-07-28 | 2 | 0 | `raw/text/components__menus__accessibility.md` | [09-components/menus.md](09-components/menus.md) |
| 174 | Navigation bar — Overview | https://m3.material.io/components/navigation-bar/overview | Overview | 2026-07-28 | 1 | 0 | `raw/text/components__navigation-bar__overview.md` | [09-components/navigation-bar.md](09-components/navigation-bar.md) |
| 175 | Navigation bar — Specs | https://m3.material.io/components/navigation-bar/specs | Specs | 2026-07-28 | 4 | 0 | `raw/text/components__navigation-bar__specs.md` | [09-components/navigation-bar.md](09-components/navigation-bar.md) |
| 176 | Navigation bar — Guidelines | https://m3.material.io/components/navigation-bar/guidelines | Guidelines | 2026-07-28 | 3 | 1 | `raw/text/components__navigation-bar__guidelines.md` | [09-components/navigation-bar.md](09-components/navigation-bar.md) |
| 177 | Navigation bar — Accessibility | https://m3.material.io/components/navigation-bar/accessibility | Accessibility | 2026-07-28 | 0 | 0 | `raw/text/components__navigation-bar__accessibility.md` | [09-components/navigation-bar.md](09-components/navigation-bar.md) |
| 178 | Navigation drawer — Overview | https://m3.material.io/components/navigation-drawer/overview | Overview | 2026-07-30 | 2 | 0 | `raw/text/components__navigation-drawer__overview.md` | [09-components/navigation-drawer.md](09-components/navigation-drawer.md) |
| 179 | Navigation drawer — Specs | https://m3.material.io/components/navigation-drawer/specs | Specs | 2026-07-30 | 5 | 0 | `raw/text/components__navigation-drawer__specs.md` | [09-components/navigation-drawer.md](09-components/navigation-drawer.md) |
| 180 | Navigation drawer — Guidelines | https://m3.material.io/components/navigation-drawer/guidelines | Guidelines | 2026-07-30 | 3 | 0 | `raw/text/components__navigation-drawer__guidelines.md` | [09-components/navigation-drawer.md](09-components/navigation-drawer.md) |
| 181 | Navigation drawer — Accessibility | https://m3.material.io/components/navigation-drawer/accessibility | Accessibility | 2026-07-30 | 1 | 0 | `raw/text/components__navigation-drawer__accessibility.md` | [09-components/navigation-drawer.md](09-components/navigation-drawer.md) |
| 182 | Navigation rail — Overview | https://m3.material.io/components/navigation-rail/overview | Overview | 2026-07-24 | 1 | 0 | `raw/text/components__navigation-rail__overview.md` | [09-components/navigation-rail.md](09-components/navigation-rail.md) |
| 183 | Navigation rail — Specs | https://m3.material.io/components/navigation-rail/specs | Specs | 2026-07-24 | 2 | 0 | `raw/text/components__navigation-rail__specs.md` | [09-components/navigation-rail.md](09-components/navigation-rail.md) |
| 184 | Navigation rail — Guidelines | https://m3.material.io/components/navigation-rail/guidelines | Guidelines | 2026-07-24 | 4 | 1 | `raw/text/components__navigation-rail__guidelines.md` | [09-components/navigation-rail.md](09-components/navigation-rail.md) |
| 185 | Navigation rail — Accessibility | https://m3.material.io/components/navigation-rail/accessibility | Accessibility | 2026-07-24 | 0 | 0 | `raw/text/components__navigation-rail__accessibility.md` | [09-components/navigation-rail.md](09-components/navigation-rail.md) |
| 186 | Loading indicator — Overview | https://m3.material.io/components/loading-indicator/overview | Overview | 2026-07-29 | 1 | 0 | `raw/text/components__loading-indicator__overview.md` | [09-components/loading-indicator.md](09-components/loading-indicator.md) |
| 187 | Loading indicator — Specs | https://m3.material.io/components/loading-indicator/specs | Specs | 2026-07-29 | 0 | 0 | `raw/text/components__loading-indicator__specs.md` | [09-components/loading-indicator.md](09-components/loading-indicator.md) |
| 188 | Loading indicator — Guidelines | https://m3.material.io/components/loading-indicator/guidelines | Guidelines | 2026-07-29 | 1 | 1 | `raw/text/components__loading-indicator__guidelines.md` | [09-components/loading-indicator.md](09-components/loading-indicator.md) |
| 189 | Loading indicator — Accessibility | https://m3.material.io/components/loading-indicator/accessibility | Accessibility | 2026-07-29 | 0 | 0 | `raw/text/components__loading-indicator__accessibility.md` | [09-components/loading-indicator.md](09-components/loading-indicator.md) |
| 190 | Progress indicators — Overview | https://m3.material.io/components/progress-indicators/overview | Overview | 2026-07-29 | 1 | 0 | `raw/text/components__progress-indicators__overview.md` | [09-components/progress-indicators.md](09-components/progress-indicators.md) |
| 191 | Progress indicators — Specs | https://m3.material.io/components/progress-indicators/specs | Specs | 2026-07-29 | 1 | 0 | `raw/text/components__progress-indicators__specs.md` | [09-components/progress-indicators.md](09-components/progress-indicators.md) |
| 192 | Progress indicators — Guidelines | https://m3.material.io/components/progress-indicators/guidelines | Guidelines | 2026-07-29 | 0 | 0 | `raw/text/components__progress-indicators__guidelines.md` | [09-components/progress-indicators.md](09-components/progress-indicators.md) |
| 193 | Progress indicators — Accessibility | https://m3.material.io/components/progress-indicators/accessibility | Accessibility | 2026-07-29 | 0 | 0 | `raw/text/components__progress-indicators__accessibility.md` | [09-components/progress-indicators.md](09-components/progress-indicators.md) |
| 194 | Radio button — Overview | https://m3.material.io/components/radio-button/overview | Overview | 2026-07-17 | 0 | 0 | `raw/text/components__radio-button__overview.md` | [09-components/radio-button.md](09-components/radio-button.md) |
| 195 | Radio button — Specs | https://m3.material.io/components/radio-button/specs | Specs | 2026-07-17 | 3 | 0 | `raw/text/components__radio-button__specs.md` | [09-components/radio-button.md](09-components/radio-button.md) |
| 196 | Radio button — Guidelines | https://m3.material.io/components/radio-button/guidelines | Guidelines | 2026-07-17 | 0 | 0 | `raw/text/components__radio-button__guidelines.md` | [09-components/radio-button.md](09-components/radio-button.md) |
| 197 | Radio button — Accessibility | https://m3.material.io/components/radio-button/accessibility | Accessibility | 2026-07-17 | 0 | 0 | `raw/text/components__radio-button__accessibility.md` | [09-components/radio-button.md](09-components/radio-button.md) |
| 198 | Search — Overview | https://m3.material.io/components/search/overview | Overview | 2026-07-27 | 1 | 1 | `raw/text/components__search__overview.md` | [09-components/search.md](09-components/search.md) |
| 199 | Search — Specs | https://m3.material.io/components/search/specs | Specs | 2026-07-27 | 4 | 0 | `raw/text/components__search__specs.md` | [09-components/search.md](09-components/search.md) |
| 200 | Search — Guidelines | https://m3.material.io/components/search/guidelines | Guidelines | 2026-07-27 | 6 | 2 | `raw/text/components__search__guidelines.md` | [09-components/search.md](09-components/search.md) |
| 201 | Search — Accessibility | https://m3.material.io/components/search/accessibility | Accessibility | 2026-07-27 | 2 | 0 | `raw/text/components__search__accessibility.md` | [09-components/search.md](09-components/search.md) |
| 202 | Side sheets — Overview | https://m3.material.io/components/side-sheets/overview | Overview | 2026-07-28 | 0 | 0 | `raw/text/components__side-sheets__overview.md` | [09-components/side-sheets.md](09-components/side-sheets.md) |
| 203 | Side sheets — Specs | https://m3.material.io/components/side-sheets/specs | Specs | 2026-07-28 | 1 | 0 | `raw/text/components__side-sheets__specs.md` | [09-components/side-sheets.md](09-components/side-sheets.md) |
| 204 | Side sheets — Guidelines | https://m3.material.io/components/side-sheets/guidelines | Guidelines | 2026-07-28 | 1 | 1 | `raw/text/components__side-sheets__guidelines.md` | [09-components/side-sheets.md](09-components/side-sheets.md) |
| 205 | Side sheets — Accessibility | https://m3.material.io/components/side-sheets/accessibility | Accessibility | 2026-07-28 | 0 | 0 | `raw/text/components__side-sheets__accessibility.md` | [09-components/side-sheets.md](09-components/side-sheets.md) |
| 206 | Sliders — Overview | https://m3.material.io/components/sliders/overview | Overview | 2026-07-17 | 1 | 0 | `raw/text/components__sliders__overview.md` | [09-components/sliders.md](09-components/sliders.md) |
| 207 | Sliders — Specs | https://m3.material.io/components/sliders/specs | Specs | 2026-07-17 | 1 | 0 | `raw/text/components__sliders__specs.md` | [09-components/sliders.md](09-components/sliders.md) |
| 208 | Sliders — Guidelines | https://m3.material.io/components/sliders/guidelines | Guidelines | 2026-07-17 | 0 | 0 | `raw/text/components__sliders__guidelines.md` | [09-components/sliders.md](09-components/sliders.md) |
| 209 | Sliders — Accessibility | https://m3.material.io/components/sliders/accessibility | Accessibility | 2026-07-17 | 0 | 0 | `raw/text/components__sliders__accessibility.md` | [09-components/sliders.md](09-components/sliders.md) |
| 210 | Switch — Overview | https://m3.material.io/components/switch/overview | Overview | 2026-07-17 | 0 | 0 | `raw/text/components__switch__overview.md` | [09-components/switch.md](09-components/switch.md) |
| 211 | Switch — Specs | https://m3.material.io/components/switch/specs | Specs | 2026-07-17 | 4 | 0 | `raw/text/components__switch__specs.md` | [09-components/switch.md](09-components/switch.md) |
| 212 | Switch — Guidelines | https://m3.material.io/components/switch/guidelines | Guidelines | 2026-07-17 | 0 | 0 | `raw/text/components__switch__guidelines.md` | [09-components/switch.md](09-components/switch.md) |
| 213 | Switch — Accessibility | https://m3.material.io/components/switch/accessibility | Accessibility | 2026-07-17 | 1 | 0 | `raw/text/components__switch__accessibility.md` | [09-components/switch.md](09-components/switch.md) |
| 214 | Text fields — Overview | https://m3.material.io/components/text-fields/overview | Overview | 2026-09-08 | 0 | 0 | `raw/text/components__text-fields__overview.md` | [09-components/text-fields.md](09-components/text-fields.md) |
| 215 | Text fields — Specs | https://m3.material.io/components/text-fields/specs | Specs | 2026-09-08 | 2 | 0 | `raw/text/components__text-fields__specs.md` | [09-components/text-fields.md](09-components/text-fields.md) |
| 216 | Text fields — Guidelines | https://m3.material.io/components/text-fields/guidelines | Guidelines | 2026-09-08 | 0 | 0 | `raw/text/components__text-fields__guidelines.md` | [09-components/text-fields.md](09-components/text-fields.md) |
| 217 | Text fields — Accessibility | https://m3.material.io/components/text-fields/accessibility | Accessibility | 2026-09-08 | 0 | 0 | `raw/text/components__text-fields__accessibility.md` | [09-components/text-fields.md](09-components/text-fields.md) |
| 218 | Tooltips — Overview | https://m3.material.io/components/tooltips/overview | Overview | 2026-07-17 | 0 | 0 | `raw/text/components__tooltips__overview.md` | [09-components/tooltips.md](09-components/tooltips.md) |
| 219 | Tooltips — Specs | https://m3.material.io/components/tooltips/specs | Specs | 2026-07-17 | 1 | 0 | `raw/text/components__tooltips__specs.md` | [09-components/tooltips.md](09-components/tooltips.md) |
| 220 | Tooltips — Guidelines | https://m3.material.io/components/tooltips/guidelines | Guidelines | 2026-07-17 | 0 | 0 | `raw/text/components__tooltips__guidelines.md` | [09-components/tooltips.md](09-components/tooltips.md) |
| 221 | Tooltips — Accessibility | https://m3.material.io/components/tooltips/accessibility | Accessibility | 2026-07-17 | 0 | 0 | `raw/text/components__tooltips__accessibility.md` | [09-components/tooltips.md](09-components/tooltips.md) |
| 222 | App bars — Overview | https://m3.material.io/components/app-bars/overview | Overview | 2026-07-24 | 2 | 0 | `raw/text/components__app-bars__overview.md` | [09-components/app-bars.md](09-components/app-bars.md) |
| 223 | App bars — Specs | https://m3.material.io/components/app-bars/specs | Specs | 2026-07-24 | 2 | 0 | `raw/text/components__app-bars__specs.md` | [09-components/app-bars.md](09-components/app-bars.md) |
| 224 | App bars — Guidelines | https://m3.material.io/components/app-bars/guidelines | Guidelines | 2026-07-24 | 1 | 0 | `raw/text/components__app-bars__guidelines.md` | [09-components/app-bars.md](09-components/app-bars.md) |
| 225 | App bars — Accessibility | https://m3.material.io/components/app-bars/accessibility | Accessibility | 2026-07-24 | 1 | 0 | `raw/text/components__app-bars__accessibility.md` | [09-components/app-bars.md](09-components/app-bars.md) |
| 226 | Lists — Overview | https://m3.material.io/components/lists/overview | Overview | 2026-08-06 | 1 | 2 | `raw/text/components__lists__overview.md` | [09-components/lists.md](09-components/lists.md) |
| 227 | Lists — Specs | https://m3.material.io/components/lists/specs | Specs | 2026-08-06 | 9 | 1 | `raw/text/components__lists__specs.md` | [09-components/lists.md](09-components/lists.md) |
| 228 | Lists — Guidelines | https://m3.material.io/components/lists/guidelines | Guidelines | 2026-08-06 | 4 | 0 | `raw/text/components__lists__guidelines.md` | [09-components/lists.md](09-components/lists.md) |
| 229 | Lists — Accessibility | https://m3.material.io/components/lists/accessibility | Accessibility | 2026-08-06 | 5 | 0 | `raw/text/components__lists__accessibility.md` | [09-components/lists.md](09-components/lists.md) |
| 230 | Badges — Overview | https://m3.material.io/components/badges/overview | Overview | 2026-07-17 | 0 | 0 | `raw/text/components__badges__overview.md` | [09-components/badges.md](09-components/badges.md) |
| 231 | Badges — Specs | https://m3.material.io/components/badges/specs | Specs | 2026-07-17 | 1 | 0 | `raw/text/components__badges__specs.md` | [09-components/badges.md](09-components/badges.md) |
| 232 | Badges — Guidelines | https://m3.material.io/components/badges/guidelines | Guidelines | 2026-07-17 | 0 | 0 | `raw/text/components__badges__guidelines.md` | [09-components/badges.md](09-components/badges.md) |
| 233 | Badges — Accessibility | https://m3.material.io/components/badges/accessibility | Accessibility | 2026-07-17 | 0 | 0 | `raw/text/components__badges__accessibility.md` | [09-components/badges.md](09-components/badges.md) |
| 234 | Tabs — Overview | https://m3.material.io/components/tabs/overview | Overview | 2026-07-17 | 0 | 0 | `raw/text/components__tabs__overview.md` | [09-components/tabs.md](09-components/tabs.md) |
| 235 | Tabs — Specs | https://m3.material.io/components/tabs/specs | Specs | 2026-07-17 | 1 | 0 | `raw/text/components__tabs__specs.md` | [09-components/tabs.md](09-components/tabs.md) |
| 236 | Tabs — Guidelines | https://m3.material.io/components/tabs/guidelines | Guidelines | 2026-07-17 | 1 | 0 | `raw/text/components__tabs__guidelines.md` | [09-components/tabs.md](09-components/tabs.md) |
| 237 | Tabs — Accessibility | https://m3.material.io/components/tabs/accessibility | Accessibility | 2026-07-17 | 0 | 0 | `raw/text/components__tabs__accessibility.md` | [09-components/tabs.md](09-components/tabs.md) |
| 238 | Checkbox — Overview | https://m3.material.io/components/checkbox/overview | Overview | 2026-08-12 | 0 | 0 | `raw/text/components__checkbox__overview.md` | [09-components/checkbox.md](09-components/checkbox.md) |
| 239 | Checkbox — Specs | https://m3.material.io/components/checkbox/specs | Specs | 2026-08-12 | 2 | 0 | `raw/text/components__checkbox__specs.md` | [09-components/checkbox.md](09-components/checkbox.md) |
| 240 | Checkbox — Guidelines | https://m3.material.io/components/checkbox/guidelines | Guidelines | 2026-08-12 | 0 | 0 | `raw/text/components__checkbox__guidelines.md` | [09-components/checkbox.md](09-components/checkbox.md) |
| 241 | Checkbox — Accessibility | https://m3.material.io/components/checkbox/accessibility | Accessibility | 2026-08-12 | 1 | 0 | `raw/text/components__checkbox__accessibility.md` | [09-components/checkbox.md](09-components/checkbox.md) |
| 242 | Date pickers — Overview | https://m3.material.io/components/date-pickers/overview | Overview | 2026-07-27 | 0 | 0 | `raw/text/components__date-pickers__overview.md` | [09-components/date-pickers.md](09-components/date-pickers.md) |
| 243 | Date pickers — Specs | https://m3.material.io/components/date-pickers/specs | Specs | 2026-07-27 | 1 | 0 | `raw/text/components__date-pickers__specs.md` | [09-components/date-pickers.md](09-components/date-pickers.md) |
| 244 | Date pickers — Guidelines | https://m3.material.io/components/date-pickers/guidelines | Guidelines | 2026-07-27 | 2 | 0 | `raw/text/components__date-pickers__guidelines.md` | [09-components/date-pickers.md](09-components/date-pickers.md) |
| 245 | Date pickers — Accessibility | https://m3.material.io/components/date-pickers/accessibility | Accessibility | 2026-07-27 | 0 | 0 | `raw/text/components__date-pickers__accessibility.md` | [09-components/date-pickers.md](09-components/date-pickers.md) |
| 246 | Time pickers — Overview | https://m3.material.io/components/time-pickers/overview | Overview | 2026-07-17 | 0 | 0 | `raw/text/components__time-pickers__overview.md` | [09-components/time-pickers.md](09-components/time-pickers.md) |
| 247 | Time pickers — Specs | https://m3.material.io/components/time-pickers/specs | Specs | 2026-07-17 | 2 | 0 | `raw/text/components__time-pickers__specs.md` | [09-components/time-pickers.md](09-components/time-pickers.md) |
| 248 | Time pickers — Guidelines | https://m3.material.io/components/time-pickers/guidelines | Guidelines | 2026-07-17 | 0 | 0 | `raw/text/components__time-pickers__guidelines.md` | [09-components/time-pickers.md](09-components/time-pickers.md) |
| 249 | Time pickers — Accessibility | https://m3.material.io/components/time-pickers/accessibility | Accessibility | 2026-07-17 | 0 | 0 | `raw/text/components__time-pickers__accessibility.md` | [09-components/time-pickers.md](09-components/time-pickers.md) |
| 250 | Snackbar — Overview | https://m3.material.io/components/snackbar/overview | Overview | 2026-07-28 | 0 | 0 | `raw/text/components__snackbar__overview.md` | [09-components/snackbar.md](09-components/snackbar.md) |
| 251 | Snackbar — Specs | https://m3.material.io/components/snackbar/specs | Specs | 2026-07-28 | 1 | 0 | `raw/text/components__snackbar__specs.md` | [09-components/snackbar.md](09-components/snackbar.md) |
| 252 | Snackbar — Guidelines | https://m3.material.io/components/snackbar/guidelines | Guidelines | 2026-07-28 | 0 | 0 | `raw/text/components__snackbar__guidelines.md` | [09-components/snackbar.md](09-components/snackbar.md) |
| 253 | Snackbar — Accessibility | https://m3.material.io/components/snackbar/accessibility | Accessibility | 2026-07-28 | 0 | 0 | `raw/text/components__snackbar__accessibility.md` | [09-components/snackbar.md](09-components/snackbar.md) |

## Implementation (5)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 254 | Develop | https://m3.material.io/develop |  | 2026-07-22 | 5 | 0 | `raw/text/develop.md` | [13-repositories-implementation.md](13-repositories-implementation.md) |
| 255 | Android Views (MDC-Android) | https://m3.material.io/develop/android/mdc-android |  | 2026-08-04 | 3 | 6 | `raw/text/develop__android__mdc-android.md` | [13-repositories-implementation.md](13-repositories-implementation.md) |
| 256 | Jetpack Compose | https://m3.material.io/develop/android/jetpack-compose |  | 2026-07-28 | 5 | 12 | `raw/text/develop__android__jetpack-compose.md` | [13-repositories-implementation.md](13-repositories-implementation.md) |
| 257 | Flutter | https://m3.material.io/develop/flutter |  | 2026-07-17 | 0 | 9 | `raw/text/develop__flutter.md` | [13-repositories-implementation.md](13-repositories-implementation.md) |
| 258 | Web | https://m3.material.io/develop/web |  | 2026-07-17 | 0 | 6 | `raw/text/develop__web.md` | [13-repositories-implementation.md](13-repositories-implementation.md) |

## Education (blog) (115)

| # | Page title | URL | Key subject | Site timestamp | Int. links | Ext. links | Local text | Guide file |
|---|---|---|---|---|---|---|---|---|
| 259 | Material Design Blog | https://m3.material.io/blog |  | 2026-07-17 | 113 | 2 | `raw/text/blog.md` | [14-education.md](14-education.md) |
| 260 | What’s new at Google I/O 2026 | https://m3.material.io/blog/whats-new-at-io26 |  | 2026-07-08 | 14 | 4 | `raw/text/blog__whats-new-at-io26.md` | [14-education.md](14-education.md) |
| 261 | Material Android is Compose-first | https://m3.material.io/blog/material-is-compose-first |  | 2026-07-08 | 2 | 18 | `raw/text/blog__material-is-compose-first.md` | [14-education.md](14-education.md) |
| 262 | Adding Motion Physics with Jetpack Compose | https://m3.material.io/blog/m3-expressive-motion-theming |  | 2026-07-08 | 8 | 2 | `raw/text/blog__m3-expressive-motion-theming.md` | [14-education.md](14-education.md) |
| 263 | Start building with Material 3 Expressive | https://m3.material.io/blog/building-with-m3-expressive |  | 2026-07-16 | 20 | 5 | `raw/text/blog__building-with-m3-expressive.md` | [14-education.md](14-education.md) |
| 264 | How to make your text more accessible | https://m3.material.io/blog/how-to-make-text-more-accessible |  | 2023-05-12 | 0 | 38 | `raw/text/blog__how-to-make-text-more-accessible.md` | [14-education.md](14-education.md) |
| 265 | Material Design at I/O ‘23 | https://m3.material.io/blog/material-google-io23 |  | 2023-05-01 | 1 | 20 | `raw/text/blog__material-google-io23.md` | [14-education.md](14-education.md) |
| 266 | The designer’s toolbox | https://m3.material.io/blog/designer-toolbox-figma-android-studio-relay |  | 2023-05-26 | 0 | 12 | `raw/text/blog__designer-toolbox-figma-android-studio-relay.md` | [14-education.md](14-education.md) |
| 267 | Building a Material Theme on Android: Shape | https://m3.material.io/blog/android-material-theme-shape |  | 2020-09-01 | 0 | 34 | `raw/text/blog__android-material-theme-shape.md` | [14-education.md](14-education.md) |
| 268 | Why We Recommend Material Components for Android | https://m3.material.io/blog/why-we-recommend-material-design-components-android |  | 2020-08-25 | 0 | 32 | `raw/text/blog__why-we-recommend-material-design-components-android.md` | [14-education.md](14-education.md) |
| 269 | Material Design Components for Android 1.6.1 | https://m3.material.io/blog/android-stable-release-1-6-1 |  | 2022-07-07 | 3 | 14 | `raw/text/blog__android-stable-release-1-6-1.md` | [14-education.md](14-education.md) |
| 270 | 10 Steps to Translate Your iOS Designs for Android | https://m3.material.io/blog/ten-steps-ios-android-design |  | 2021-04-16 | 0 | 20 | `raw/text/blog__ten-steps-ios-android-design.md` | [14-education.md](14-education.md) |
| 271 | Join Material Design at I/O ‘22 | https://m3.material.io/blog/material-google-io22 |  | 2022-05-11 | 0 | 13 | `raw/text/blog__material-google-io22.md` | [14-education.md](14-education.md) |
| 272 | Start Here: 5 Exercises to Prepare Your App for Large Screens | https://m3.material.io/blog/5-steps-large-screen-apps |  | 2021-05-19 | 0 | 11 | `raw/text/blog__5-steps-large-screen-apps.md` | [14-education.md](14-education.md) |
| 273 | Google Fonts ❤️ Material Icons | https://m3.material.io/blog/google-fonts-material-icons |  | 2021-03-02 | 0 | 8 | `raw/text/blog__google-fonts-material-icons.md` | [14-education.md](14-education.md) |
| 274 | The new Google Fonts: find what you’re looking for | https://m3.material.io/blog/2023-google-fonts-redesign |  | 2023-09-07 | 2 | 3 | `raw/text/blog__2023-google-fonts-redesign.md` | [14-education.md](14-education.md) |
| 275 | Material Design for WordPress | https://m3.material.io/blog/material-design-wordpress-plugin |  | 2021-02-16 | 0 | 10 | `raw/text/blog__material-design-wordpress-plugin.md` | [14-education.md](14-education.md) |
| 276 | MDC-Android Stable release 1.7.0 | https://m3.material.io/blog/android-stable-release-1-7-0 |  | 2022-10-20 | 0 | 5 | `raw/text/blog__android-stable-release-1-7-0.md` | [14-education.md](14-education.md) |
| 277 | Material Design Components for Android 1.3.0 | https://m3.material.io/blog/android-stable-release-1-3-0 |  | 2021-02-18 | 0 | 41 | `raw/text/blog__android-stable-release-1-3-0.md` | [14-education.md](14-education.md) |
| 278 | Material Design Components for Android 1.10.0 | https://m3.material.io/blog/android-stable-release-1-10-0 |  | 2023-10-25 | 0 | 15 | `raw/text/blog__android-stable-release-1-10-0.md` | [14-education.md](14-education.md) |
| 279 | People-First Principles for Digital Wellbeing | https://m3.material.io/blog/digital-wellbeing-ux-principles |  | 2020-09-17 | 0 | 7 | `raw/text/blog__digital-wellbeing-ux-principles.md` | [14-education.md](14-education.md) |
| 280 | Video: Craft a Dark Theme with Material Design | https://m3.material.io/blog/dark-theme-design-tutorial-video |  | 2020-06-30 | 0 | 2 | `raw/text/blog__dark-theme-design-tutorial-video.md` | [14-education.md](14-education.md) |
| 281 | Designing Harmony into Dynamic Color | https://m3.material.io/blog/dynamic-color-harmony |  | 2022-02-10 | 7 | 2 | `raw/text/blog__dynamic-color-harmony.md` | [14-education.md](14-education.md) |
| 282 | Say hello to Roboto Serif | https://m3.material.io/blog/roboto-serif |  | 2022-02-16 | 0 | 28 | `raw/text/blog__roboto-serif.md` | [14-education.md](14-education.md) |
| 283 | 2021 Material Design Awards | https://m3.material.io/blog/material-design-awards-2021 |  | 2021-09-16 | 0 | 35 | `raw/text/blog__material-design-awards-2021.md` | [14-education.md](14-education.md) |
| 284 | Announcing Google Fonts Knowledge | https://m3.material.io/blog/google-fonts-knowledge |  | 2021-12-07 | 0 | 6 | `raw/text/blog__google-fonts-knowledge.md` | [14-education.md](14-education.md) |
| 285 | An updated theming experience with Material Theme Builder 2.0 | https://m3.material.io/blog/material-theme-builder-2-color-match |  | 2023-12-19 | 1 | 3 | `raw/text/blog__material-theme-builder-2-color-match.md` | [14-education.md](14-education.md) |
| 286 | Building Beautiful Transitions with Material Motion for Android | https://m3.material.io/blog/android-material-motion |  | 2020-09-01 | 0 | 43 | `raw/text/blog__android-material-motion.md` | [14-education.md](14-education.md) |
| 287 | Introducing Tone-based Surfaces in Material 3 | https://m3.material.io/blog/tone-based-surface-color-m3 |  | 2023-03-23 | 1 | 0 | `raw/text/blog__tone-based-surface-color-m3.md` | [14-education.md](14-education.md) |
| 288 | Roboto … But Make It Flex | https://m3.material.io/blog/roboto-flex |  | 2022-05-05 | 0 | 50 | `raw/text/blog__roboto-flex.md` | [14-education.md](14-education.md) |
| 289 | Material Design Components for Android 1.9.0 | https://m3.material.io/blog/android-stable-release-1-9-0 |  | 2023-05-17 | 0 | 6 | `raw/text/blog__android-stable-release-1-9-0.md` | [14-education.md](14-education.md) |
| 290 | Designing a Material Theme: Shape | https://m3.material.io/blog/design-material-theme-shape |  | 2020-09-01 | 0 | 6 | `raw/text/blog__design-material-theme-shape.md` | [14-education.md](14-education.md) |
| 291 | Migrating to Material Design 3 | https://m3.material.io/blog/migrating-material-3 |  | 2021-10-27 | 6 | 8 | `raw/text/blog__migrating-material-3.md` | [14-education.md](14-education.md) |
| 292 | How Google created a custom Material theme | https://m3.material.io/blog/google-material-custom-theme |  | 2018-05-09 | 0 | 6 | `raw/text/blog__google-material-custom-theme.md` | [14-education.md](14-education.md) |
| 293 | Welcome to the Material Blog—Letter from the Editor | https://m3.material.io/blog/material-design-blog-welcome |  | 2020-09-01 | 0 | 0 | `raw/text/blog__material-design-blog-welcome.md` | [14-education.md](14-education.md) |
| 294 | Using Material Density on the Web | https://m3.material.io/blog/material-density-web |  | 2020-01-16 | 0 | 13 | `raw/text/blog__material-density-web.md` | [14-education.md](14-education.md) |
| 295 | Material Design Components for Android 1.5.0 | https://m3.material.io/blog/android-stable-release-1-5 |  | 2022-02-17 | 0 | 9 | `raw/text/blog__android-stable-release-1-5.md` | [14-education.md](14-education.md) |
| 296 | Designing a Material Theme: Typography | https://m3.material.io/blog/design-material-theme-type |  | 2020-09-01 | 0 | 13 | `raw/text/blog__design-material-theme-type.md` | [14-education.md](14-education.md) |
| 297 | Magic, utility, and redesigning Material.io | https://m3.material.io/blog/material-io-redesign |  | 2022-10-18 | 1 | 4 | `raw/text/blog__material-io-redesign.md` | [14-education.md](14-education.md) |
| 298 | From Rebranding to Readability with Atkinson Hyperlegible | https://m3.material.io/blog/atkinson-hyperlegible-design |  | 2022-06-09 | 0 | 20 | `raw/text/blog__atkinson-hyperlegible-design.md` | [14-education.md](14-education.md) |
| 299 | The Avatar Project: Derek Brahney | https://m3.material.io/blog/derek-brahney-interview |  | 2022-07-07 | 0 | 2 | `raw/text/blog__derek-brahney-interview.md` | [14-education.md](14-education.md) |
| 300 | Material Partner Studies | https://m3.material.io/blog/material-partner-studies |  | 2018-05-08 | 0 | 5 | `raw/text/blog__material-partner-studies.md` | [14-education.md](14-education.md) |
| 301 | Material Design Components for Android 1.11.0 and 1.12.0 | https://m3.material.io/blog/android-stable-release-1-12-0 |  | 2024-05-08 | 18 | 13 | `raw/text/blog__android-stable-release-1-12-0.md` | [14-education.md](14-education.md) |
| 302 | Reinventing the carousel | https://m3.material.io/blog/material-3-carousel-research-design |  | 2023-05-10 | 3 | 4 | `raw/text/blog__material-3-carousel-research-design.md` | [14-education.md](14-education.md) |
| 303 | What’s new in the M3 design kit | https://m3.material.io/blog/whats-new-design-kit |  | 2023-05-19 | 3 | 8 | `raw/text/blog__whats-new-design-kit.md` | [14-education.md](14-education.md) |
| 304 | Material Design at Google I/O 2021 | https://m3.material.io/blog/material-google-io21 |  | 2021-05-06 | 0 | 14 | `raw/text/blog__material-google-io21.md` | [14-education.md](14-education.md) |
| 305 | Making it easier to get Google Fonts | https://m3.material.io/blog/get-google-fonts-update |  | 2024-02-12 | 0 | 14 | `raw/text/blog__get-google-fonts-update.md` | [14-education.md](14-education.md) |
| 306 | Material Design Components for Android 1.4.0 | https://m3.material.io/blog/android-stable-release-1-4 |  | 2021-07-07 | 0 | 25 | `raw/text/blog__android-stable-release-1-4.md` | [14-education.md](14-education.md) |
| 307 | Finding Wellbeing in Filters and Selfies | https://m3.material.io/blog/digital-wellbeing-face-retouching |  | 2020-10-01 | 0 | 5 | `raw/text/blog__digital-wellbeing-face-retouching.md` | [14-education.md](14-education.md) |
| 308 | The Story of Shantell Sans | https://m3.material.io/blog/shantell-martin-variable-font |  | 2023-03-07 | 0 | 35 | `raw/text/blog__shantell-martin-variable-font.md` | [14-education.md](14-education.md) |
| 309 | Material Design 3 for Compose 1.2 | https://m3.material.io/blog/material-3-compose-1-2 |  | 2024-02-07 | 0 | 8 | `raw/text/blog__material-3-compose-1-2.md` | [14-education.md](14-education.md) |
| 310 | Announcing the Material Design Award Winners for 2020 | https://m3.material.io/blog/mda-2020-winners |  | 2020-12-14 | 0 | 3 | `raw/text/blog__mda-2020-winners.md` | [14-education.md](14-education.md) |
| 311 | Designing Text for the People Who Read It | https://m3.material.io/blog/designing-text-visual-acuity-research |  | 2021-03-11 | 0 | 6 | `raw/text/blog__designing-text-visual-acuity-research.md` | [14-education.md](14-education.md) |
| 312 | Building a Material Theme on Android: Color | https://m3.material.io/blog/android-material-theme-color |  | 2020-09-01 | 0 | 28 | `raw/text/blog__android-material-theme-color.md` | [14-education.md](14-education.md) |
| 313 | Introducing the M3 design kit for Figma | https://m3.material.io/blog/material-3-figma-design-kit |  | 2022-10-18 | 0 | 2 | `raw/text/blog__material-3-figma-design-kit.md` | [14-education.md](14-education.md) |
| 314 | Jamie Chung’s Artful, Abstract Photographs for Material Design | https://m3.material.io/blog/jamie-chung-photography-interview |  | 2022-08-25 | 0 | 5 | `raw/text/blog__jamie-chung-photography-interview.md` | [14-education.md](14-education.md) |
| 315 | Material Icons: Sehee Lee | https://m3.material.io/blog/material-icons-sehee-lee-interview |  | 2022-05-11 | 0 | 1 | `raw/text/blog__material-icons-sehee-lee-interview.md` | [14-education.md](14-education.md) |
| 316 | Finding Ethical Design | https://m3.material.io/blog/finding-ethical-design |  | 2020-12-16 | 0 | 3 | `raw/text/blog__finding-ethical-design.md` | [14-education.md](14-education.md) |
| 317 | How to Reduce Layout Reflow When Using Web Fonts | https://m3.material.io/blog/reduce-reflow-with-web-fonts |  | 2021-09-09 | 0 | 10 | `raw/text/blog__reduce-reflow-with-web-fonts.md` | [14-education.md](14-education.md) |
| 318 | Material Design 3 for Compose version 1.3 | https://m3.material.io/blog/material-3-compose-1-3 |  | 2024-09-10 | 3 | 16 | `raw/text/blog__material-3-compose-1-3.md` | [14-education.md](14-education.md) |
| 319 | Designing a Material Theme: Color | https://m3.material.io/blog/design-material-theme-color |  | 2020-09-01 | 0 | 9 | `raw/text/blog__design-material-theme-color.md` | [14-education.md](14-education.md) |
| 320 | Better design for bigger screens | https://m3.material.io/blog/material-you-large-screens |  | 2023-04-29 | 2 | 2 | `raw/text/blog__material-you-large-screens.md` | [14-education.md](14-education.md) |
| 321 | From Placeholders to Genuine Avatars | https://m3.material.io/blog/asset-people-2 |  | 2022-03-24 | 2 | 3 | `raw/text/blog__asset-people-2.md` | [14-education.md](14-education.md) |
| 322 | Adjusting Grade for Mode | https://m3.material.io/blog/readability-research |  | 2022-05-11 | 0 | 4 | `raw/text/blog__readability-research.md` | [14-education.md](14-education.md) |
| 323 | How Ravn solves design-developer handoff with Relay | https://m3.material.io/blog/relay-ravn-case-study |  | 2023-02-02 | 0 | 1 | `raw/text/blog__relay-ravn-case-study.md` | [14-education.md](14-education.md) |
| 324 | Building a Dark Theme for Google Fonts | https://m3.material.io/blog/google-fonts-dark-theme |  | 2021-02-22 | 0 | 11 | `raw/text/blog__google-fonts-dark-theme.md` | [14-education.md](14-education.md) |
| 325 | Using Block Patterns with Material Design for WordPress | https://m3.material.io/blog/material-design-wordpress-plugin-030 |  | 2022-01-05 | 0 | 6 | `raw/text/blog__material-design-wordpress-plugin-030.md` | [14-education.md](14-education.md) |
| 326 | Unveiling Material You | https://m3.material.io/blog/announcing-material-you |  | 2021-05-18 | 0 | 14 | `raw/text/blog__announcing-material-you.md` | [14-education.md](14-education.md) |
| 327 | Design for everyone | https://m3.material.io/blog/m3-a11y |  | 2022-05-11 | 3 | 5 | `raw/text/blog__m3-a11y.md` | [14-education.md](14-education.md) |
| 328 | First Batch of Color Fonts Arrives on Google Fonts | https://m3.material.io/blog/color-fonts-are-here |  | 2022-09-13 | 0 | 19 | `raw/text/blog__color-fonts-are-here.md` | [14-education.md](14-education.md) |
| 329 | How to Find Device Metrics for Any Screen | https://m3.material.io/blog/device-metrics |  | 2020-05-19 | 0 | 7 | `raw/text/blog__device-metrics.md` | [14-education.md](14-education.md) |
| 330 | New SIL Typefaces | https://m3.material.io/blog/sil-typefaces |  | 2023-03-22 | 0 | 63 | `raw/text/blog__sil-typefaces.md` | [14-education.md](14-education.md) |
| 331 | Material Design Components for Android 1.8.0 | https://m3.material.io/blog/android-stable-release-1-8-0 |  | 2023-02-02 | 1 | 9 | `raw/text/blog__android-stable-release-1-8-0.md` | [14-education.md](14-education.md) |
| 332 | Video: Google Design Tutorials | https://m3.material.io/blog/google-design-tutorial-video |  | 2019-09-01 | 0 | 3 | `raw/text/blog__google-design-tutorial-video.md` | [14-education.md](14-education.md) |
| 333 | A Year in the Life of a Material Design Advocate | https://m3.material.io/blog/year-in-the-life-material-design-advocate |  | 2021-04-22 | 0 | 38 | `raw/text/blog__year-in-the-life-material-design-advocate.md` | [14-education.md](14-education.md) |
| 334 | Using the Gemini app with Material Design 3 | https://m3.material.io/blog/how-to-gemini-app-compose-material-design-3 |  | 2024-05-07 | 6 | 9 | `raw/text/blog__how-to-gemini-app-compose-material-design-3.md` | [14-education.md](14-education.md) |
| 335 | Top Tips for Data Accessibility | https://m3.material.io/blog/data-visualization-accessibility |  | 2022-11-08 | 2 | 7 | `raw/text/blog__data-visualization-accessibility.md` | [14-education.md](14-education.md) |
| 336 | Introducing the Compose Material Catalog | https://m3.material.io/blog/jetpack-compose-catalog |  | 2021-05-19 | 0 | 10 | `raw/text/blog__jetpack-compose-catalog.md` | [14-education.md](14-education.md) |
| 337 | Looking for Noto? It’s now on the Google Fonts website and API | https://m3.material.io/blog/noto-announcement |  | 2021-09-16 | 0 | 4 | `raw/text/blog__noto-announcement.md` | [14-education.md](14-education.md) |
| 338 | Adjusting the Focus | https://m3.material.io/blog/inclusive-imagery-at-google |  | 2021-09-16 | 0 | 2 | `raw/text/blog__inclusive-imagery-at-google.md` | [14-education.md](14-education.md) |
| 339 | Announcing Relay Alpha | https://m3.material.io/blog/relay-in-alpha |  | 2022-10-24 | 0 | 7 | `raw/text/blog__relay-in-alpha.md` | [14-education.md](14-education.md) |
| 340 | Building a Material Dark Theme on Android | https://m3.material.io/blog/android-dark-theme-tutorial |  | 2020-08-26 | 0 | 23 | `raw/text/blog__android-dark-theme-tutorial.md` | [14-education.md](14-education.md) |
| 341 | The Design of Readex Pro | https://m3.material.io/blog/readex-pro-legibility-arabic-type-design |  | 2023-03-09 | 0 | 52 | `raw/text/blog__readex-pro-legibility-arabic-type-design.md` | [14-education.md](14-education.md) |
| 342 | Start building with Material You | https://m3.material.io/blog/start-building-with-material-you |  | 2021-10-27 | 6 | 13 | `raw/text/blog__start-building-with-material-you.md` | [14-education.md](14-education.md) |
| 343 | Migrating to Material Components for Android | https://m3.material.io/blog/migrate-android-material-components |  | 2020-04-16 | 0 | 49 | `raw/text/blog__migrate-android-material-components.md` | [14-education.md](14-education.md) |
| 344 | The 24-hour Clock Design Challenge | https://m3.material.io/blog/24-hour-clock-design-research |  | 2022-12-01 | 0 | 0 | `raw/text/blog__24-hour-clock-design-research.md` | [14-education.md](14-education.md) |
| 345 | Introducing the Material Design YouTube Channel | https://m3.material.io/blog/material-design-youtube-channel |  | 2020-10-20 | 0 | 2 | `raw/text/blog__material-design-youtube-channel.md` | [14-education.md](14-education.md) |
| 346 | Material Design 3 for Compose gets new components and features | https://m3.material.io/blog/material-3-compose-1-1 |  | 2023-05-10 | 1 | 19 | `raw/text/blog__material-3-compose-1-1.md` | [14-education.md](14-education.md) |
| 347 | Material Design 3 for Compose is now stable | https://m3.material.io/blog/material-3-compose-stable |  | 2022-10-24 | 4 | 16 | `raw/text/blog__material-3-compose-stable.md` | [14-education.md](14-education.md) |
| 348 | How Oddfellows Illustrated Material You | https://m3.material.io/blog/interview-oddfellows-m3-art-style |  | 2022-01-27 | 6 | 10 | `raw/text/blog__interview-oddfellows-m3-art-style.md` | [14-education.md](14-education.md) |
| 349 | Celebrating Global Accessibility Awareness Day | https://m3.material.io/blog/accessibility-awareness-day-2022 |  | 2022-05-19 | 1 | 11 | `raw/text/blog__accessibility-awareness-day-2022.md` | [14-education.md](14-education.md) |
| 350 | Material Design for XR (Developer Preview) | https://m3.material.io/blog/material-design-xr-dev-preview |  | 2024-12-12 | 4 | 31 | `raw/text/blog__material-design-xr-dev-preview.md` | [14-education.md](14-education.md) |
| 351 | Introducing Material Symbols | https://m3.material.io/blog/introducing-symbols |  | 2022-04-19 | 0 | 11 | `raw/text/blog__introducing-symbols.md` | [14-education.md](14-education.md) |
| 352 | What does your UI say to your users? | https://m3.material.io/blog/testing-material-3 |  | 2024-05-13 | 0 | 1 | `raw/text/blog__testing-material-3.md` | [14-education.md](14-education.md) |
| 353 | Design to Code: Turning Handoffs Into High-fives | https://m3.material.io/blog/designtocode |  | 2021-10-27 | 0 | 2 | `raw/text/blog__designtocode.md` | [14-education.md](14-education.md) |
| 354 | The Best of Material in 2022 | https://m3.material.io/blog/material-design-2022-roundup |  | 2022-12-15 | 10 | 33 | `raw/text/blog__material-design-2022-roundup.md` | [14-education.md](14-education.md) |
| 355 | Introducing Material Design Guidance for Large Screens | https://m3.material.io/blog/material-design-for-large-screens |  | 2021-05-14 | 0 | 26 | `raw/text/blog__material-design-for-large-screens.md` | [14-education.md](14-education.md) |
| 356 | What “Digital Wellbeing” Means to Material Design | https://m3.material.io/blog/digital-wellbeing-design-systems |  | 2020-09-16 | 0 | 2 | `raw/text/blog__digital-wellbeing-design-systems.md` | [14-education.md](14-education.md) |
| 357 | Video: Fonts are software | https://m3.material.io/blog/fonts-are-software-video |  | 2023-08-24 | 0 | 4 | `raw/text/blog__fonts-are-software-video.md` | [14-education.md](14-education.md) |
| 358 | Looking for What’s Missing | https://m3.material.io/blog/asset-people-3 |  | 2022-03-31 | 1 | 3 | `raw/text/blog__asset-people-3.md` | [14-education.md](14-education.md) |
| 359 | Replacing “Users” with People | https://m3.material.io/blog/asset-people-1 |  | 2022-03-17 | 2 | 4 | `raw/text/blog__asset-people-1.md` | [14-education.md](14-education.md) |
| 360 | The State of Design Systems: 2020 | https://m3.material.io/blog/research-state-of-design-systems-2020 |  | 2020-12-16 | 0 | 6 | `raw/text/blog__research-state-of-design-systems-2020.md` | [14-education.md](14-education.md) |
| 361 | The Science of Color & Design | https://m3.material.io/blog/science-of-color-design |  | 2022-02-17 | 0 | 16 | `raw/text/blog__science-of-color-design.md` | [14-education.md](14-education.md) |
| 362 | Jetpack Compose: Now in Beta | https://m3.material.io/blog/jetpack-compose-beta |  | 2021-02-24 | 0 | 95 | `raw/text/blog__jetpack-compose-beta.md` | [14-education.md](14-education.md) |
| 363 | Material Design at Android Developer Summit 2022 | https://m3.material.io/blog/material-ads-2022 |  | 2022-10-24 | 0 | 14 | `raw/text/blog__material-ads-2022.md` | [14-education.md](14-education.md) |
| 364 | Teaming Up to Improve Reading Research | https://m3.material.io/blog/readability-consortium |  | 2022-02-15 | 0 | 13 | `raw/text/blog__readability-consortium.md` | [14-education.md](14-education.md) |
| 365 | You Asked for it—Here Are Some of Our Favorite Font Pairings | https://m3.material.io/blog/google-fonts-pairing-figma |  | 2022-06-02 | 0 | 15 | `raw/text/blog__google-fonts-pairing-figma.md` | [14-education.md](14-education.md) |
| 366 | Choosing the Right Transitions | https://m3.material.io/blog/motion-research-container-transform |  | 2022-01-20 | 0 | 7 | `raw/text/blog__motion-research-container-transform.md` | [14-education.md](14-education.md) |
| 367 | Unlocking component flexibility with slots in Figma | https://m3.material.io/blog/material-3-slot-components-figma |  | 2024-11-04 | 0 | 3 | `raw/text/blog__material-3-slot-components-figma.md` | [14-education.md](14-education.md) |
| 368 | Material Components for Android 1.2.0 | https://m3.material.io/blog/android-stable-release-1-2 |  | 2020-08-04 | 0 | 29 | `raw/text/blog__android-stable-release-1-2.md` | [14-education.md](14-education.md) |
| 369 | Material Design Award Winners 2021 | https://m3.material.io/blog/mda-2021-winners |  | 2021-12-16 | 0 | 4 | `raw/text/blog__mda-2021-winners.md` | [14-education.md](14-education.md) |
| 370 | Material Design at Google I/O ‘24 | https://m3.material.io/blog/google-io-2024 |  | 2024-04-30 | 0 | 7 | `raw/text/blog__google-io-2024.md` | [14-education.md](14-education.md) |
| 371 | Principles and Techniques for Effective Localization | https://m3.material.io/blog/localization-principles-techniques |  | 2021-08-30 | 0 | 17 | `raw/text/blog__localization-principles-techniques.md` | [14-education.md](14-education.md) |
| 372 | Introducing Material Theme Builder | https://m3.material.io/blog/material-theme-builder |  | 2021-10-27 | 2 | 14 | `raw/text/blog__material-theme-builder.md` | [14-education.md](14-education.md) |
| 373 | Building a Material Theme on Android: Typography | https://m3.material.io/blog/android-material-theme-type |  | 2020-09-01 | 0 | 28 | `raw/text/blog__android-material-theme-type.md` | [14-education.md](14-education.md) |


Total m3.material.io records: 373. Date accessed for all: 2026-10-09.

## External first-party resources

259 distinct external URLs are linked from guide pages and component status tables (1,194 including blog posts). All were HTTP-checked on 2026-10-09; per-URL status is in 12-tools-assets.md and `raw/_external_status.txt`. External pages were link-checked, not crawled in depth (see 16-coverage-audit.md).
