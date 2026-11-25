# System color tokens (md.sys.color) — baseline scheme

Source data: m3.material.io interactive token modules (`/_dsm/data/dsdb-m3/2026-09-23_06-10-05/`), DSDB "Google Material 3" design system version 38.2.9 (published 2026-08-10), site content build 2026-09-23_06-10-05. Page: https://m3.material.io/styles/color/roles , https://m3.material.io/styles/color/static/baseline
Accessed: 2026-10-09. Values resolved by this guide's tools/dsdb.py for **web and native (Android/default platform)**. The main columns use context Platform=Web, Audience=3P, and each other group's default tag (Contrast=Default, Font=Static, Motion scheme=Standard) unless a column says otherwise. In this data only 31 tokens carry Web-specific values (`md.sys.motion.easing.emphasized` falls back to Standard easing; the 30 variable-font optical-size `…opsz` tokens are undefined for Web). Every other value is a platform-untagged default shared by all platforms, so the value shown applies equally to Web and to the Android/default platform. The motion and typography tables add an explicit Android/default column. The data has no combined "iOS and web" tag. Units are as stored in the data (dp = DIPS, pt = POINTS; Material's pages express type sizes in sp/pt).

These are the baseline (default) scheme values. Dynamic color and custom schemes generate different values for the same roles; design with roles, not hex values.

| Token | Display name | Light | Dark | Light medium-contrast | Light high-contrast | Dark medium-contrast | Dark high-contrast | Light reference |
|---|---|---|---|---|---|---|---|---|
| `md.sys.color.background` | Background | #FEF7FF | #141218 | #FEF7FF | #FEF7FF | #141218 | #141218 | `md.ref.palette.neutral98` |
| `md.sys.color.error` | Error | #B3261E | #F2B8B5 | #8C1D18 | #601410 | #F9DEDC | #FCEEEE | `md.ref.palette.error40` |
| `md.sys.color.error-container` | Error container | #F9DEDC | #8C1D18 | #B3261E | #8C1D18 | #E46962 | #F2B8B5 | `md.ref.palette.error90` |
| `md.sys.color.inverse-on-surface` | Inverse on surface | #F5EFF7 | #322F35 | #FFFFFF | #FFFFFF | #1D1B20 | #000000 | `md.ref.palette.neutral95` |
| `md.sys.color.inverse-primary` | Inverse primary | #D0BCFF | #6750A4 | #D0BCFF | #D0BCFF | #4F378B | #381E72 | `md.ref.palette.primary80` |
| `md.sys.color.inverse-surface` | Inverse surface | #322F35 | #E6E0E9 | #322F35 | #322F35 | #E6E0E9 | #E6E0E9 | `md.ref.palette.neutral20` |
| `md.sys.color.on-background` | On background | #1D1B20 | #E6E0E9 | #000000 | #000000 | #FFFFFF | #FFFFFF | `md.ref.palette.neutral10` |
| `md.sys.color.on-error` | On error | #FFFFFF | #601410 | #FFFFFF | #FFFFFF | #410E0B | #000000 | `md.ref.palette.error100` |
| `md.sys.color.on-error-container` | On error container | #8C1D18 | #F9DEDC | #FFFFFF | #FFFFFF | #000000 | #000000 | `md.ref.palette.error30` |
| `md.sys.color.on-primary` | On primary | #FFFFFF | #381E72 | #FFFFFF | #FFFFFF | #21005D | #000000 | `md.ref.palette.primary100` |
| `md.sys.color.on-primary-container` | On primary container | #4F378B | #EADDFF | #FFFFFF | #FFFFFF | #000000 | #000000 | `md.ref.palette.primary30` |
| `md.sys.color.on-primary-fixed` | On primary fixed | #21005D | #21005D | #FFFFFF | #FFFFFF | #000000 | #000000 | `md.ref.palette.primary10` |
| `md.sys.color.on-primary-fixed-variant` | On primary fixed variant | #4F378B | #4F378B | #FFFFFF | #FFFFFF | #381E72 | #000000 | `md.ref.palette.primary30` |
| `md.sys.color.on-secondary` | On secondary | #FFFFFF | #332D41 | #FFFFFF | #FFFFFF | #1D192B | #000000 | `md.ref.palette.secondary100` |
| `md.sys.color.on-secondary-container` | On secondary container | #4A4458 | #E8DEF8 | #FFFFFF | #FFFFFF | #000000 | #000000 | `md.ref.palette.secondary30` |
| `md.sys.color.on-secondary-fixed` | On secondary fixed | #1D192B | #1D192B | #FFFFFF | #FFFFFF | #000000 | #000000 | `md.ref.palette.secondary10` |
| `md.sys.color.on-secondary-fixed-variant` | On secondary fixed variant | #4A4458 | #4A4458 | #FFFFFF | #FFFFFF | #332D41 | #000000 | `md.ref.palette.secondary30` |
| `md.sys.color.on-surface` | On surface | #1D1B20 | #E6E0E9 | #000000 | #000000 | #FFFFFF | #FFFFFF | `md.ref.palette.neutral10` |
| `md.sys.color.on-surface-variant` | On surface variant | #49454F | #CAC4D0 | #322F37 | #000000 | #E7E0EC | #FFFFFF | `md.ref.palette.neutral-variant30` |
| `md.sys.color.on-tertiary` | On tertiary | #FFFFFF | #492532 | #FFFFFF | #FFFFFF | #31111D | #000000 | `md.ref.palette.tertiary100` |
| `md.sys.color.on-tertiary-container` | On tertiary container | #633B48 | #FFD8E4 | #FFFFFF | #FFFFFF | #000000 | #000000 | `md.ref.palette.tertiary30` |
| `md.sys.color.on-tertiary-fixed` | On tertiary fixed | #31111D | #31111D | #FFFFFF | #FFFFFF | #000000 | #000000 | `md.ref.palette.tertiary10` |
| `md.sys.color.on-tertiary-fixed-variant` | On tertiary fixed variant | #633B48 | #633B48 | #FFFFFF | #FFFFFF | #492532 | #000000 | `md.ref.palette.tertiary30` |
| `md.sys.color.outline` | Outline | #79747E | #938F99 | #49454F | #322F37 | #AEA9B4 | #F5EEFA | `md.ref.palette.neutral-variant50` |
| `md.sys.color.outline-variant` | Outline Variant | #CAC4D0 | #49454F | #79747E | #49454F | #938F99 | #CAC4D0 | `md.ref.palette.neutral-variant80` |
| `md.sys.color.primary` | Primary | #6750A4 | #D0BCFF | #4F378B | #381E72 | #EADDFF | #F6EDFF | `md.ref.palette.primary40` |
| `md.sys.color.primary-container` | Primary container | #EADDFF | #4F378B | #6750A4 | #4F378B | #9A82DB | #D0BCFF | `md.ref.palette.primary90` |
| `md.sys.color.primary-fixed` | Primary fixed | #EADDFF | #EADDFF | #6750A4 | #4F378B | #EADDFF | #EADDFF | `md.ref.palette.primary90` |
| `md.sys.color.primary-fixed-dim` | Primary fixed dim | #D0BCFF | #D0BCFF | #4F378B | #381E72 | #D0BCFF | #D0BCFF | `md.ref.palette.primary80` |
| `md.sys.color.scrim` | Scrim | #000000 | #000000 | #000000 | #000000 | #000000 | #000000 | `md.ref.palette.neutral0` |
| `md.sys.color.secondary` | Secondary | #625B71 | #CCC2DC | #4A4458 | #332D41 | #E8DEF8 | #F6EDFF | `md.ref.palette.secondary40` |
| `md.sys.color.secondary-container` | Secondary container | #E8DEF8 | #4A4458 | #625B71 | #4A4458 | #958DA5 | #CCC2DC | `md.ref.palette.secondary90` |
| `md.sys.color.secondary-fixed` | Secondary fixed | #E8DEF8 | #E8DEF8 | #625B71 | #4A4458 | #E8DEF8 | #E8DEF8 | `md.ref.palette.secondary90` |
| `md.sys.color.secondary-fixed-dim` | Secondary fixed dim | #CCC2DC | #CCC2DC | #4A4458 | #332D41 | #CCC2DC | #CCC2DC | `md.ref.palette.secondary80` |
| `md.sys.color.shadow` | Shadow | #000000 | #000000 | #000000 | #000000 | #000000 | #000000 | `md.ref.palette.neutral0` |
| `md.sys.color.surface` | Surface | #FEF7FF | #141218 | #FEF7FF | #FEF7FF | #141218 | #141218 | `md.ref.palette.neutral98` |
| `md.sys.color.surface-bright` | Surface Bright | #FEF7FF | #3B383E | #FEF7FF | #FEF7FF | #3B383E | #3B383E | `md.ref.palette.neutral98` |
| `md.sys.color.surface-container` | Surface Container | #F3EDF7 | #211F26 | #F3EDF7 | #F3EDF7 | #211F26 | #211F26 | `md.ref.palette.neutral94` |
| `md.sys.color.surface-container-high` | Surface Container High | #ECE6F0 | #2B2930 | #ECE6F0 | #ECE6F0 | #2B2930 | #2B2930 | `md.ref.palette.neutral92` |
| `md.sys.color.surface-container-highest` | Surface Container Highest | #E6E0E9 | #36343B | #E6E0E9 | #E6E0E9 | #36343B | #36343B | `md.ref.palette.neutral90` |
| `md.sys.color.surface-container-low` | Surface Container Low | #F7F2FA | #1D1B20 | #F7F2FA | #F7F2FA | #1D1B20 | #1D1B20 | `md.ref.palette.neutral96` |
| `md.sys.color.surface-container-lowest` | Surface Container Lowest | #FFFFFF | #0F0D13 | #FFFFFF | #FFFFFF | #0F0D13 | #0F0D13 | `md.ref.palette.neutral100` |
| `md.sys.color.surface-dim` | Surface Dim | #DED8E1 | #141218 | #DED8E1 | #DED8E1 | #141218 | #141218 | `md.ref.palette.neutral87` |
| `md.sys.color.surface-tint` | Surface tint | #6750A4 | #D0BCFF | #4F378B | #381E72 | #EADDFF | #F6EDFF | `md.sys.color.primary` → `md.ref.palette.primary40` |
| `md.sys.color.surface-tint-color` | Surface tint color | #6750A4 | #D0BCFF | #4F378B | #381E72 | #EADDFF | #F6EDFF | `md.sys.color.primary` → `md.ref.palette.primary40` |
| `md.sys.color.surface-variant` | Surface Variant | #E7E0EC | #49454F | #E7E0EC | #E7E0EC | #49454F | #49454F | `md.ref.palette.neutral-variant90` |
| `md.sys.color.tertiary` | Tertiary | #7D5260 | #EFB8C8 | #633B48 | #492532 | #FFD8E4 | #FFECF1 | `md.ref.palette.tertiary40` |
| `md.sys.color.tertiary-container` | Tertiary container | #FFD8E4 | #633B48 | #7D5260 | #633B48 | #B58392 | #EFB8C8 | `md.ref.palette.tertiary90` |
| `md.sys.color.tertiary-fixed` | Tertiary fixed | #FFD8E4 | #FFD8E4 | #7D5260 | #633B48 | #FFD8E4 | #FFD8E4 | `md.ref.palette.tertiary90` |
| `md.sys.color.tertiary-fixed-dim` | Tertiary fixed dim | #EFB8C8 | #EFB8C8 | #633B48 | #492532 | #EFB8C8 | #EFB8C8 | `md.ref.palette.tertiary80` |
