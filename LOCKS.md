# veep.work locks — Fable / Cursor constitution

Read this before any edit. If a polish idea fights a lock, the lock wins.

Fable owns visual. These locks are Cisco/Dave constitution, not a second designer.

Live site is a different repo (`/opt/data/veep-2-0`, `nycddg/veep-2-0` main).
This clone must never gain a push remote to that GitHub repo. Never edit, push, or deploy live from this pass.

## Type (HARD — ChatGPT plan was wrong here)

- **Heads / body / UI:** IBM Plex Sans. Heads **500**, body **400**.
- **Chrome only:** IBM Plex Mono — eyebrows, labels, stats, prices. Not headlines.
- Site ceiling is **500**, not 600. Do not introduce 600/700 or `font-bold` 700.
- No Inter / Roboto / Space Grotesk / Geist.
- No italics on marketing UI.

## Color

- Default **dark**. Do not flip default to light or follow OS.
- Dark accent `#789FFF`. Light accent `#4E7AD4` (ink blue; not electric `#3474F4`). Signal `#F43F34`. Light wash `#E4E9F2`.
- Do not restore indigo `#5B46F5`. Do not add glow gradients.

## Proof / product chrome (KEEP)

- 95% match success rate
- Match Matrix bars + percents
- 75+, 72h, under 10d, 30-day fit
- $B network impact line
- Why Veep comparison: **desktop only** (`hidden md:block`)

## OperatorCanvas

- Signature surface. No new motif.
- Hide matrix on mobile. Photo `object-bottom`. Mobile aspect **3/4**, `sm+` 16/9.
- Labels stay the smaller canvas size (~9.9px / −10%). Do not bump to 11px.
- No float animation. No decorative hairline above the proof line.

## CTA

- Homepage high-intent primary = **Book intro call** → Fillout.
- Get in touch only on operators rail (secondary) and off-home pages that already use it.
- Join hero must not open Fillout (`primaryTo="/join"` + hash apply).
- See scope → `/pricing#tiers`. Never `/services`. On `/pricing` itself, do **not** render the self-link.
- No “Operator in the Loop”. No “algorithmic matching”. No em dashes in marketing copy.

## Nav

- Desktop: How It Works, For Funds **left of** Pricing.
- Mobile drawer hides Operators / Benefits / How It Works / Proof. Keep Overview + routes + Book.

## Motion (extend, do not replace)

- View Transitions already exist (~320ms). Section reveals exist (~560ms).
- Dave 08.17: **stronger, more elegant** motion. Elevate choreography, stagger, hover, page transitions.
- Still: no bounce, no parallax, no opacity-0 content gates, no Framer/GSAP.
- Micro can go a bit longer if it feels expensive (not cheap). Honor `prefers-reduced-motion`.

## Copy / claims

- Do not rewrite hero thesis, offer framing, or proof list.
- Public shapes only: Advisory / Sprint / Operator / Pod.
- Proof count is **75+**, never 150+.
- Form notify To = dave + mark + jian. From = dave@ only.

## Workflow

- Small reviewable commits on `fable/polish`.
- `bun run build` must stay green.
- Do not “launch-block” a site that is already live.
- Do not push to `nycddg/veep-2-0`.
