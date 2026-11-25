# 16 — Research completeness & coverage audit (extra file, outside the required 00–15 list)

Audit date: 2026-10-09 · Site content build: `2026-09-23_06-10-05` · Token DB: "Google Material 3" v38.2.9 (published 2026-08-10) · Status-table DB: dsdbVersion 2026-09-16v2

## How the site was read
m3.material.io is an Angular single-page app with no server-rendered text. Rather than scraping rendered HTML, this guide reads the **same JSON the site's own app loads**:
1. The route table embedded in the app bundle (slug → content file, tabs, alternate slugs).
2. One content JSON per page (`/_dsm/content/m3/<build>/<id>.json`). It holds every tab: text HTML, figure captions, Do/Don't/Caution labels, alt text, and module references.
3. The interactive token modules' data (`/_dsm/data/dsdb-m3/<build>/…`), resolved into values by `tools/dsdb.py`.
4. Component "Availability & resources" status tables (separate DSDB).
5. Blog posts (`/page-data/Posts/<id>.json` for legacy posts; content JSON for 2025–2026 posts).

These endpoints were found by capturing the live site's network traffic in headless Chrome, so the content is exactly what the site renders (minus images/video).

## Coverage by area
| Area | Status | Notes |
|---|---|---|
| Foundations (accessibility, content design, customization, tokens, glossary, building for all, usability) | **Complete**: all pages fetched | — |
| Color | **Complete** | 14 pages + full color token data (light/dark × 3 contrast levels) |
| Typography | **Complete** | 5 pages + baseline, emphasized and variable type scale tokens |
| Shape | **Complete** (text and tokens) | Shape library shapes are images/Figma assets; not enumerated by name beyond what the text says (the site states 35 shapes; a few, e.g. "flower" and "sunny", are named in text) |
| Motion | **Complete** (text and tokens) | Spring tokens for both schemes; legacy easing/duration; web conversion table |
| M3 Expressive | **Complete** for documented changes | Blog + usability page + per-component update sections |
| Layout & adaptive | **Complete** | 21 pages |
| Components | **Complete**: 36 components × 4 tabs + All buttons page | Every tab's text, captions and do/don'ts; tokens for all 168 component token sets |
| States / interaction | **Complete** | — |
| Tokens | **Complete** for what the site exposes | 6,418 tokens / 181 sets resolved for 3P audience, Android platform default, light + dark |
| Platforms: Watches, XR | **Complete** (text) | XR is labeled Developer Preview in the blog |
| Tools / assets | **Listed and link-checked**, not explored | Figma kit and plugins return HTTP 403 to automated clients; not inspectable |
| Repositories / implementation | **Repos verified via GitHub API; web checked against repo**; native API docs link-checked | material-web component support, maintenance status, browsers, theming custom properties, and the material-color-utilities TS package were checked against repo/npm (see item 5). Native library docs weren't reviewed |
| Education | **Complete** for the m3.material.io blog (114 posts) | External videos, codelabs and talks are listed, not watched or read |

Totals: **373** m3.material.io page records reviewed (258 guideline tab-pages across 88 route files, 114 blog posts, 1 blog index), covering all 375 sitemap URLs. The other 2 sitemap URLs (blog/get-started, blog/search.html) are non-content routes, and 4 root URLs are aliases of blog posts. **77** token/status data files; **259** distinct external URLs linked from guide pages (1,194 including the blog) HTTP-checked.

## Known gaps and items not accessed or verified (not silently omitted)
1. **Visual-only content.** The pages contain 2,626 images and 542 videos. Only alt text and on-site captions were captured. Specs-tab **measurement diagrams (redlines)** are images, so dimensions that appear *only* in diagrams and not in token data are **not** in this guide. Mitigation: component token tables cover most dimensions (heights, paddings, icon sizes, shapes, colors). For anything else, open the Specs tab.
2. **Video transcripts** ("View transcript") were not captured. At least one page (color system overview) has one.
3. **Hidden/unpublished content** was excluded on purpose: 48 hidden content blocks, plus hidden tabs (an "XR" tab on dialogs, nav rail, toolbars, nav bar and app bars, now covered under foundations/xr; and "Spacing", "Density", "Hardware considerations" and "Bidirectionality & RTL" tabs on layout-overview. Spacing and Density are published under grids-spacing and RTL under bidirectionality-rtl. **"Hardware considerations" has no published page and is not covered.**).
4. **Token context choices.** Values are resolved for **Platform = Web**, Audience = 3P, with default tags for the other groups (Contrast = default, Font = static, Motion = standard). Columns add dark theme, medium/high contrast and the expressive motion scheme. Only 31 tokens have Web-specific values (emphasized easing → Standard; 30 variable-font `opsz` tokens undefined on Web). Everything else is shared with Android, and the motion and typography tables carry an Android comparison column. The data has no combined "iOS and web" tag. iOS-, Compose- and 1P-specific overrides exist in the data but aren't tabulated; re-run `tools/gen_tokens.py` with other contexts if needed.
5. **External Tier-2/3 sources.** For the web framing, these repo files were fetched and saved in `raw/web/`: material-web README, docs/roadmap.md, docs/support.md, docs/theming/{color,typography,shape}.md and docs/components/icon.md; the `docs/components/` and `labs/` directory listings; npm metadata for `@material/web` and `@material/material-color-utilities`; the material-color-utilities TypeScript README; and GitHub repo metadata for material-web and material-tokens. Each component's per-component material-web doc wasn't read beyond confirming it exists. Compose, MDC-Android and Flutter docs, the Figma kit, Theme Builder, codelabs and YouTube were **link-checked only**.
6. **Broken or legacy internal links** found in page text (9 unresolved targets): old `/libraries/mdc-android/*`, `/libraries/additional`, `/libraries/new-in-android-12`, `/theme-builder`, `/google-material-3/pages/interaction-states/overview`, and plain `http://m3.material.io`. 45 other non-sitemap internal links resolve through the site's alternate slugs. List: `raw/_internal_unmatched.json`.
7. **Plain-http external links** (7 on guide pages) couldn't be fetched from the research machine. Their https equivalents were checked for the key ones (XR guides, Material Symbols, material-tokens: 200; Figma/goo.gle kit links: 403, bot-blocked). Guide-linked status totals: 241×200, 2×302, 9×403, 7×unreachable over http.
8. **Interactive tools** (Theme Builder, Figma plugins) weren't operated.
9. **Third-party sources:** none were used for any rule or value. One web-platform mechanism (`prefers-reduced-motion`) is named in the agent instructions as the way to read the OS setting Material refers to. It's labeled "web platform, not Material".
10. **Native gaps the site leaves open.** The site has no system-level "edge-to-edge" guideline; it documents safety regions instead, and edge-to-edge appears only for lists and carousels. Predictive back is described only for Android. The site gives no Flutter motion-physics alternative. Not found on GitHub (404): material-components-android-examples, material-components-android-compose-theme-adapter, material-design-for-wordpress, though the site or blog still links some of them.
11. **Web gaps the site leaves open.** The site gives breakpoint widths in dp and doesn't state a dp-to-CSS-px conversion (target minimums appear both as "48x48dp" and "48x48 CSS pixels"). It names no pointer-specific target size and doesn't mention `prefers-reduced-motion` by name. The agent instructions flag these instead of filling them.

## Value verification
See `raw/verification.md`. All numeric values come from the site's own token data, or from page tables where values aren't tokenized (breakpoints, the web spring-curve table). Spot-checked against page text and against github.com/material-components/material-web tokens v0_192, which match. v0_192 predates Expressive, so Expressive values rely on the site data alone.

## Freshness / refresh procedure
1. Fetch `https://m3.material.io/` and find the current `main.<hash>.js`; extract the route tables (`tools/extract.py` expects `raw/_routes.json` and `raw/_blog_routes.json`).
2. Find the current build id from any page's network calls (`/_dsm/content/m3/<build>/…`). Update `V` in the fetch steps and `VER` in `tools/gen_tokens.py`.
3. Re-run: fetch content and data → `tools/extract.py` → digest step → `tools/gen_tokens.py` → `tools/gen_components.py` → `tools/build_platforms.py` → `tools/assemble.py` → `tools/add_web_status.py` (re-run build_platforms after gen_components). Re-fetch the `raw/web/` repo files and re-check the 13 web table.
4. Diff `inventory.json` `site_updated` timestamps to see which pages changed. Re-check "M3 Expressive update" sections and the status matrix.
