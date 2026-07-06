## Goal

Re-anchor the dark palette on deep navy `#000435` instead of neutral near-black, and replace the gray scale with tonal navy shades. All changes live in `src/styles.css` design tokens — components already read semantic tokens (`background`, `card`, `secondary`, `stone`, `rule`, etc.), so no component edits are needed.

## Token changes (src/styles.css `:root`)

Anchor: `#000435` ≈ `oklch(0.115 0.09 268)` — deep midnight navy.

| Token | Before (neutral) | After (navy) | Role |
|---|---|---|---|
| `--background` | `oklch(0.16 0 0)` | `oklch(0.115 0.09 268)` — `#000435` | Canvas |
| `--ink` | `oklch(0.13 0 0)` | `oklch(0.095 0.08 268)` | Deep inverted pill / darkest navy |
| `--card` | `oklch(0.195 0 0)` | `oklch(0.185 0.07 265)` | Raised panel |
| `--popover` | `oklch(0.195 0 0)` | `oklch(0.185 0.07 265)` | Same as card |
| `--secondary` | `oklch(0.22 0 0)` | `oklch(0.235 0.06 262)` | Muted surface (used by `tone="muted"` sections) |
| `--muted` | `oklch(0.22 0 0)` | `oklch(0.235 0.06 262)` | Same as secondary |
| `--forest-deep` | `oklch(0.20 0 0)` | `oklch(0.205 0.07 265)` | Dark inset block (diagnostic CTA) |
| `--stone` | `oklch(0.68 0 0)` neutral gray | `oklch(0.72 0.03 250)` | Secondary body text — soft blue-gray |
| `--stone-soft` | `oklch(0.48 0 0)` | `oklch(0.55 0.04 255)` | Tertiary / mono labels — dimmer blue-gray |
| `--rule` | `oklch(1 0 0 / 0.08)` | `oklch(0.85 0.05 240 / 0.10)` | Faint ruled lines pick up cool tint |
| `--border` | `oklch(1 0 0 / 0.10)` | `oklch(0.85 0.05 240 / 0.12)` | Same |
| `--input` | `oklch(1 0 0 / 0.14)` | `oklch(0.85 0.05 240 / 0.16)` | Same |

Left unchanged:
- `--cream`, `--foreground` (still off-white — reads clean on navy)
- Accent spectrum (`--accent-mint`, `--accent-coral`, `--accent-cyan`, `--accent-gold`) — the illustration gradient stays as-is per prior design decision.
- Light-section tokens are unaffected (compare table stays cream/ink).
- `--forest` (warm gold accent) unchanged.

## Verification

After the edit, screenshot the home page and one interior page (e.g. `/for-companies`) to confirm:
1. Canvas reads as deep navy, not black.
2. Cards and muted sections form a visible navy tonal ladder.
3. Body copy (`text-stone`) has a subtle cool cast, not flat gray.
4. Light compare-table section is untouched.
