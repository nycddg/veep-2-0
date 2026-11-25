# Shape tokens (md.sys.shape)

Source data: m3.material.io interactive token modules (`/_dsm/data/dsdb-m3/2026-09-23_06-10-05/`), DSDB "Google Material 3" design system version 38.2.9 (published 2026-08-10), site content build 2026-09-23_06-10-05. Page: https://m3.material.io/styles/shape/corner-radius-scale
Accessed: 2026-10-09. Values resolved by this guide's tools/dsdb.py for **web and native (Android/default platform)**. The main columns use context Platform=Web, Audience=3P, and each other group's default tag (Contrast=Default, Font=Static, Motion scheme=Standard) unless a column says otherwise. In this data only 31 tokens carry Web-specific values (`md.sys.motion.easing.emphasized` falls back to Standard easing; the 30 variable-font optical-size `…opsz` tokens are undefined for Web). Every other value is a platform-untagged default shared by all platforms, so the value shown applies equally to Web and to the Android/default platform. The motion and typography tables add an explicit Android/default column. The data has no combined "iOS and web" tag. Units are as stored in the data (dp = DIPS, pt = POINTS; Material's pages express type sizes in sp/pt).

| Token | Display name | Type | Value | Reference (first context) |
|---|---|---|---|---|
| **md.sys.shape** — Shape: Corner shape and directional modifier (like "top" or "end") tokens. | | | | |
| `md.sys.shape.corner-value.extra-extra-large` | Extra extra large corner value | LENGTH | 48dp |  |
| `md.sys.shape.corner-value.extra-large` | Extra large corner value | LENGTH | 28dp |  |
| `md.sys.shape.corner-value.extra-large-increased` | Extra large increased corner value | LENGTH | 32dp |  |
| `md.sys.shape.corner-value.extra-small` | Extra small corner value | LENGTH | 4dp |  |
| `md.sys.shape.corner-value.large` | Large corner value | LENGTH | 16dp |  |
| `md.sys.shape.corner-value.large-increased` | Large increased corner value | LENGTH | 20dp |  |
| `md.sys.shape.corner-value.medium` | Medium corner value | LENGTH | 12dp |  |
| `md.sys.shape.corner-value.none` | No corner value | LENGTH | 0dp |  |
| `md.sys.shape.corner-value.small` | Small corner value | LENGTH | 8dp |  |
| `md.sys.shape.corner.extra-extra-large` | Extra extra large rounding | SHAPE | rounded 48dp |  |
| `md.sys.shape.corner.extra-large` | Extra large rounding | SHAPE | rounded 28dp |  |
| `md.sys.shape.corner.extra-large-increased` | Extra large increased rounding | SHAPE | rounded 32dp |  |
| `md.sys.shape.corner.extra-large.top` | Extra large top rounding | SHAPE | rounded: topLeft=28dp, topRight=28dp, bottomRight=0, bottomLeft=0 |  |
| `md.sys.shape.corner.extra-small` | Extra small rounding | SHAPE | rounded 4dp |  |
| `md.sys.shape.corner.extra-small.top` | Extra small top rounding | SHAPE | rounded: topLeft=4dp, topRight=4dp, bottomRight=0, bottomLeft=0 |  |
| `md.sys.shape.corner.full` | Fully rounded | SHAPE | circular (full) |  |
| `md.sys.shape.corner.large` | Large rounding | SHAPE | rounded 16dp |  |
| `md.sys.shape.corner.large-increased` | Large increased rounding | SHAPE | rounded 20dp |  |
| `md.sys.shape.corner.large.end` | Large end rounding | SHAPE | rounded: topLeft=0, topRight=16dp, bottomRight=16dp, bottomLeft=0 |  |
| `md.sys.shape.corner.large.start` | Large start rounding | SHAPE | rounded: topLeft=16dp, topRight=0, bottomRight=0, bottomLeft=16dp |  |
| `md.sys.shape.corner.large.top` | Large top rounding | SHAPE | rounded: topLeft=16dp, topRight=16dp, bottomRight=0, bottomLeft=0 |  |
| `md.sys.shape.corner.medium` | Medium rounding | SHAPE | rounded 12dp |  |
| `md.sys.shape.corner.none` | No rounding | SHAPE | rounded 0dp |  |
| `md.sys.shape.corner.small` | Small rounding | SHAPE | rounded 8dp |  |
