# Motion tokens (md.sys.motion) — Standard vs Expressive motion schemes

Source data: m3.material.io interactive token modules (`/_dsm/data/dsdb-m3/2026-09-23_06-10-05/`), DSDB "Google Material 3" design system version 38.2.9 (published 2026-08-10), site content build 2026-09-23_06-10-05. Page: https://m3.material.io/styles/motion/overview/specs , https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
Accessed: 2026-10-09. Values resolved by this guide's tools/dsdb.py for **web and native (Android/default platform)**. The main columns use context Platform=Web, Audience=3P, and each other group's default tag (Contrast=Default, Font=Static, Motion scheme=Standard) unless a column says otherwise. In this data only 31 tokens carry Web-specific values (`md.sys.motion.easing.emphasized` falls back to Standard easing; the 30 variable-font optical-size `…opsz` tokens are undefined for Web). Every other value is a platform-untagged default shared by all platforms, so the value shown applies equally to Web and to the Android/default platform. The motion and typography tables add an explicit Android/default column. The data has no combined "iOS and web" tag. Units are as stored in the data (dp = DIPS, pt = POINTS; Material's pages express type sizes in sp/pt).

| Token | Display name | Type | Standard scheme (Web) | Expressive scheme (Web) | Standard scheme, Android default platform, for comparison | Reference (first context) |
|---|---|---|---|---|---|---|
| **md.sys.motion** — Motion: For all motion. Includes spring tokens (physics system), and legacy easing and duration tokens. | | | | | | |
| `md.sys.motion.duration.extra-long1` | Extra long 1 | DURATION | 700ms | 700ms | 700ms |  |
| `md.sys.motion.duration.extra-long2` | Extra long 2 | DURATION | 800ms | 800ms | 800ms |  |
| `md.sys.motion.duration.extra-long3` | Extra long 3 | DURATION | 900ms | 900ms | 900ms |  |
| `md.sys.motion.duration.extra-long4` | Extra long 4 | DURATION | 1000ms | 1000ms | 1000ms |  |
| `md.sys.motion.duration.long1` | Long 1 | DURATION | 450ms | 450ms | 450ms |  |
| `md.sys.motion.duration.long2` | Long 2 | DURATION | 500ms | 500ms | 500ms |  |
| `md.sys.motion.duration.long3` | Long 3 | DURATION | 550ms | 550ms | 550ms |  |
| `md.sys.motion.duration.long4` | Long 4 | DURATION | 600ms | 600ms | 600ms |  |
| `md.sys.motion.duration.medium1` | Medium 1 | DURATION | 250ms | 250ms | 250ms |  |
| `md.sys.motion.duration.medium2` | Medium 2 | DURATION | 300ms | 300ms | 300ms |  |
| `md.sys.motion.duration.medium3` | Medium 3 | DURATION | 350ms | 350ms | 350ms |  |
| `md.sys.motion.duration.medium4` | Medium 4 | DURATION | 400ms | 400ms | 400ms |  |
| `md.sys.motion.duration.short1` | Short 1 | DURATION | 50ms | 50ms | 50ms |  |
| `md.sys.motion.duration.short2` | Short 2 | DURATION | 100ms | 100ms | 100ms |  |
| `md.sys.motion.duration.short3` | Short 3 | DURATION | 150ms | 150ms | 150ms |  |
| `md.sys.motion.duration.short4` | Short 4 | DURATION | 200ms | 200ms | 200ms |  |
| `md.sys.motion.easing.emphasized` | Emphasized | CUBIC_BEZIER | cubic-bezier(0.2, 0, 0, 1) | cubic-bezier(0.2, 0, 0, 1) | path: M 0,0 C 0.05, 0, 0.133333, 0.06, 0.166666, 0.4 C 0.208333, 0.82, 0.25, 1, 1, 1 | `md.sys.motion.easing.standard` |
| `md.sys.motion.easing.emphasized.accelerate` | Emphasized accelerate | CUBIC_BEZIER | cubic-bezier(0.3, 0, 0.8, 0.15) | cubic-bezier(0.3, 0, 0.8, 0.15) | cubic-bezier(0.3, 0, 0.8, 0.15) |  |
| `md.sys.motion.easing.emphasized.decelerate` | Emphasized decelerate | CUBIC_BEZIER | cubic-bezier(0.05, 0.7, 0.1, 1) | cubic-bezier(0.05, 0.7, 0.1, 1) | cubic-bezier(0.05, 0.7, 0.1, 1) |  |
| `md.sys.motion.easing.legacy` | Legacy | CUBIC_BEZIER | cubic-bezier(0.4, 0, 0.2, 1) | cubic-bezier(0.4, 0, 0.2, 1) | cubic-bezier(0.4, 0, 0.2, 1) |  |
| `md.sys.motion.easing.legacy.accelerate` | Legacy accelerate | CUBIC_BEZIER | cubic-bezier(0.4, 0, 1, 1) | cubic-bezier(0.4, 0, 1, 1) | cubic-bezier(0.4, 0, 1, 1) |  |
| `md.sys.motion.easing.legacy.decelerate` | Legacy decelerate | CUBIC_BEZIER | cubic-bezier(0, 0, 0.2, 1) | cubic-bezier(0, 0, 0.2, 1) | cubic-bezier(0, 0, 0.2, 1) |  |
| `md.sys.motion.easing.linear` | Linear | CUBIC_BEZIER | cubic-bezier(0, 0, 1, 1) | cubic-bezier(0, 0, 1, 1) | cubic-bezier(0, 0, 1, 1) |  |
| `md.sys.motion.easing.standard` | Standard | CUBIC_BEZIER | cubic-bezier(0.2, 0, 0, 1) | cubic-bezier(0.2, 0, 0, 1) | cubic-bezier(0.2, 0, 0, 1) |  |
| `md.sys.motion.easing.standard.accelerate` | Standard accelerate | CUBIC_BEZIER | cubic-bezier(0.3, 0, 1, 1) | cubic-bezier(0.3, 0, 1, 1) | cubic-bezier(0.3, 0, 1, 1) |  |
| `md.sys.motion.easing.standard.decelerate` | Standard decelerate | CUBIC_BEZIER | cubic-bezier(0, 0, 0, 1) | cubic-bezier(0, 0, 0, 1) | cubic-bezier(0, 0, 0, 1) |  |
| `md.sys.motion.path` | Motion path | MOTION_PATH | {"standardPath": "LINEAR"} | {"standardPath": "LINEAR"} | {"standardPath": "LINEAR"} |  |
| `md.sys.motion.spring.default.effects` | Motion spring default effects  | CUSTOM_COMPOSITE | composite: damping=1 (md.sys.motion.spring.default.effects.damping); stiffness=1600 (md.sys.motion.spring.default.effects.stiffness) | composite: damping=1 (md.sys.motion.spring.default.effects.damping); stiffness=1600 (md.sys.motion.spring.default.effects.stiffness) | composite: damping=1 (md.sys.motion.spring.default.effects.damping); stiffness=1600 (md.sys.motion.spring.default.effects.stiffness) |  |
| `md.sys.motion.spring.default.effects.damping` | Motion spring default effects damping | NUMERIC | 1 | 1 | 1 |  |
| `md.sys.motion.spring.default.effects.stiffness` | Motion spring default effects stiffness | NUMERIC | 1600 | 1600 | 1600 |  |
| `md.sys.motion.spring.default.spatial` | Motion spring default spatial | CUSTOM_COMPOSITE | composite: damping=0.9 (md.sys.motion.spring.default.spatial.damping); stiffness=700 (md.sys.motion.spring.default.spatial.stiffness) | composite: damping=0.8 (md.sys.motion.spring.default.spatial.damping); stiffness=380 (md.sys.motion.spring.default.spatial.stiffness) | composite: damping=0.9 (md.sys.motion.spring.default.spatial.damping); stiffness=700 (md.sys.motion.spring.default.spatial.stiffness) |  |
| `md.sys.motion.spring.default.spatial.damping` | Motion spring default spatial damping | NUMERIC | 0.9 | 0.8 | 0.9 |  |
| `md.sys.motion.spring.default.spatial.stiffness` | Motion spring default spatial stiffness | NUMERIC | 700 | 380 | 700 |  |
| `md.sys.motion.spring.fast.effects` | Motion spring fast effects  | CUSTOM_COMPOSITE | composite: damping=1 (md.sys.motion.spring.fast.effects.damping); stiffness=3800 (md.sys.motion.spring.fast.effects.stiffness) | composite: damping=1 (md.sys.motion.spring.fast.effects.damping); stiffness=3800 (md.sys.motion.spring.fast.effects.stiffness) | composite: damping=1 (md.sys.motion.spring.fast.effects.damping); stiffness=3800 (md.sys.motion.spring.fast.effects.stiffness) |  |
| `md.sys.motion.spring.fast.effects.damping` | Motion spring fast effects damping | NUMERIC | 1 | 1 | 1 |  |
| `md.sys.motion.spring.fast.effects.stiffness` | Motion spring fast effects stiffness | NUMERIC | 3800 | 3800 | 3800 |  |
| `md.sys.motion.spring.fast.spatial` | Motion spring fast spatial | CUSTOM_COMPOSITE | composite: damping=0.9 (md.sys.motion.spring.fast.spatial.damping); stiffness=1400 (md.sys.motion.spring.fast.spatial.stiffness) | composite: damping=0.6 (md.sys.motion.spring.fast.spatial.damping); stiffness=800 (md.sys.motion.spring.fast.spatial.stiffness) | composite: damping=0.9 (md.sys.motion.spring.fast.spatial.damping); stiffness=1400 (md.sys.motion.spring.fast.spatial.stiffness) |  |
| `md.sys.motion.spring.fast.spatial.damping` | Motion spring fast spatial damping | NUMERIC | 0.9 | 0.6 | 0.9 |  |
| `md.sys.motion.spring.fast.spatial.stiffness` | Motion spring fast spatial stiffness | NUMERIC | 1400 | 800 | 1400 |  |
| `md.sys.motion.spring.slow.effects` | Motion spring slow effects  | CUSTOM_COMPOSITE | composite: damping=1 (md.sys.motion.spring.slow.effects.damping); stiffness=800 (md.sys.motion.spring.slow.effects.stiffness) | composite: damping=1 (md.sys.motion.spring.slow.effects.damping); stiffness=800 (md.sys.motion.spring.slow.effects.stiffness) | composite: damping=1 (md.sys.motion.spring.slow.effects.damping); stiffness=800 (md.sys.motion.spring.slow.effects.stiffness) |  |
| `md.sys.motion.spring.slow.effects.damping` | Motion spring slow effects damping | NUMERIC | 1 | 1 | 1 |  |
| `md.sys.motion.spring.slow.effects.stiffness` | Motion spring slow effects stiffness | NUMERIC | 800 | 800 | 800 |  |
| `md.sys.motion.spring.slow.spatial` | Motion spring slow spatial | CUSTOM_COMPOSITE | composite: damping=0.9 (md.sys.motion.spring.slow.spatial.damping); stiffness=300 (md.sys.motion.spring.slow.spatial.stiffness) | composite: damping=0.8 (md.sys.motion.spring.slow.spatial.damping); stiffness=200 (md.sys.motion.spring.slow.spatial.stiffness) | composite: damping=0.9 (md.sys.motion.spring.slow.spatial.damping); stiffness=300 (md.sys.motion.spring.slow.spatial.stiffness) |  |
| `md.sys.motion.spring.slow.spatial.damping` | Motion spring slow spatial damping | NUMERIC | 0.9 | 0.8 | 0.9 |  |
| `md.sys.motion.spring.slow.spatial.stiffness` | Motion spring slow spatial stiffness | NUMERIC | 300 | 200 | 300 |  |
