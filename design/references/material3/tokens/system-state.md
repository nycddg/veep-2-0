# State tokens (state-layer opacities, focus indicator)

Source data: m3.material.io interactive token modules (`/_dsm/data/dsdb-m3/2026-09-23_06-10-05/`), DSDB "Google Material 3" design system version 38.2.9 (published 2026-08-10), site content build 2026-09-23_06-10-05. Page: https://m3.material.io/foundations/interaction/states/state-layers
Accessed: 2026-10-09. Values resolved by this guide's tools/dsdb.py for **web and native (Android/default platform)**. The main columns use context Platform=Web, Audience=3P, and each other group's default tag (Contrast=Default, Font=Static, Motion scheme=Standard) unless a column says otherwise. In this data only 31 tokens carry Web-specific values (`md.sys.motion.easing.emphasized` falls back to Standard easing; the 30 variable-font optical-size `…opsz` tokens are undefined for Web). Every other value is a platform-untagged default shared by all platforms, so the value shown applies equally to Web and to the Android/default platform. The motion and typography tables add an explicit Android/default column. The data has no combined "iOS and web" tag. Units are as stored in the data (dp = DIPS, pt = POINTS; Material's pages express type sizes in sp/pt).

| Token | Display name | Type | Value | Reference (first context) |
|---|---|---|---|---|
| **md.sys.state** — State opacities: Opacity values for state layers. | | | | |
| `md.sys.state.disabled.state-layer-opacity` | Disabled state layer opacity | OPACITY | 0.38 |  |
| `md.sys.state.dragged.state-layer-opacity` | Dragged state layer opacity | OPACITY | 0.16 |  |
| `md.sys.state.focus.state-layer-opacity` | Focus state layer opacity | OPACITY | 0.1 |  |
| `md.sys.state.hover.state-layer-opacity` | Hover state layer opacity | OPACITY | 0.08 |  |
| `md.sys.state.pressed.state-layer-opacity` | Pressed state layer opacity | OPACITY | 0.1 |  |
| **md.sys.state.focus-indicator** — State - focus indicator: Common focus indicator tokens for all components | | | | |
| `md.sys.state.focus-indicator.inner-offset` | Focus indicator inner offset | LENGTH | -3dp |  |
| `md.sys.state.focus-indicator.outer-offset` | Focus indicator outer offset | LENGTH | 2dp |  |
| `md.sys.state.focus-indicator.thickness` | Focus indicator thickness | LENGTH | 3dp |  |
