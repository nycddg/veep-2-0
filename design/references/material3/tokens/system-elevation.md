# Elevation tokens (md.sys.elevation)

Source data: m3.material.io interactive token modules (`/_dsm/data/dsdb-m3/2026-09-23_06-10-05/`), DSDB "Google Material 3" design system version 38.2.9 (published 2026-08-10), site content build 2026-09-23_06-10-05. Page: https://m3.material.io/styles/elevation/tokens
Accessed: 2026-10-09. Values resolved by this guide's tools/dsdb.py for **web and native (Android/default platform)**. The main columns use context Platform=Web, Audience=3P, and each other group's default tag (Contrast=Default, Font=Static, Motion scheme=Standard) unless a column says otherwise. In this data only 31 tokens carry Web-specific values (`md.sys.motion.easing.emphasized` falls back to Standard easing; the 30 variable-font optical-size `…opsz` tokens are undefined for Web). Every other value is a platform-untagged default shared by all platforms, so the value shown applies equally to Web and to the Android/default platform. The motion and typography tables add an explicit Android/default column. The data has no combined "iOS and web" tag. Units are as stored in the data (dp = DIPS, pt = POINTS; Material's pages express type sizes in sp/pt).

| Token | Display name | Type | Value | Reference (first context) |
|---|---|---|---|---|
| **md.sys.elevation** — Elevation: Elevation level tokens | | | | |
| `md.sys.elevation.level0` | 0 | ELEVATION | 0dp |  |
| `md.sys.elevation.level1` | +1 | ELEVATION | 1dp |  |
| `md.sys.elevation.level2` | +2 | ELEVATION | 3dp |  |
| `md.sys.elevation.level3` | +3 | ELEVATION | 6dp |  |
| `md.sys.elevation.level4` | +4 | ELEVATION | 8dp |  |
| `md.sys.elevation.level5` | +5 | ELEVATION | 12dp |  |
| `md.sys.elevation.surface-tint-color` | Surface tint color | COLOR | #6750A4 | `md.sys.color.primary` → `md.ref.palette.primary40` |
