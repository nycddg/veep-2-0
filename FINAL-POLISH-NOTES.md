# FINAL-POLISH-NOTES — fable/polish, 2026-08-18

Final unify pass on top of Dave's Design Mode baseline (committed first as
`baseline: Design Mode pass + light ink-on-cream system`). Nothing from the
baseline was reverted. `bun run build` green after every commit.

## Commits

1. **baseline** — snapshot of all uncommitted Design Mode / light ink-on-cream
   work so polish deltas stay reviewable. (contact/join landed with commit 2
   because their baseline deltas were inseparable from the radius fix.)
2. **design: form fields + error panel to 15px radius** — `/contact` and
   `/join` `inputCls` and the contact submit-error panel were the last
   `rounded-xl` marketing surfaces. Now `rounded-[15px]`.
3. **design: borderless cards** — `glass-card` lost its 1px border in both
   themes (form shells on /contact, /join); contact "Outcome" panel lost
   `border-accent/30`; meetveep photo frame lost `ring-1`. Fills and shadows
   carry the separation.
4. **design: one CTA recipe** — form submit pills and 404/error pills now use
   the canonical `px-7 py-3.5`; header drawer pill gained `min-h-11` + focus
   ring. Desktop header pill keeps its compact padding deliberately (chrome,
   with a before: hit-area extension).
5. **design: FooterCTA** — sub sits above the button row and now reads
   "Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee.";
   the 30-minute sentence moved to fine print under the Book pill,
   left-aligned (only on the book variant). Placement under testimonials
   unchanged.
6. **motion: problem diagram** — full sequence: work box (0ms) → branch lines
   draw (120ms; stems scaleY top-down, horizontals scaleX from center) →
   route boxes stagger (190/260/330ms) → converge lines (400ms) → CEO desk
   (470ms). Copy follows its own box by 160ms. Delays scoped to
   `data-in="true"` so exit hides instantly. Reduced-motion: diagram classes
   already neutralized; closed two gaps — `.marquee` gets `animation: none`
   and `.motion-arrow` transform is forced off.
7. **design: theme seams** — `.spotlight-invert` (dark page → cream band)
   `--surface-raised` was flat with canvas (0.985); now mirrors the light
   ladder (0.972). TrustChip dot glow is `light:shadow-none` (paper doesn't
   glow; the dot stays).

## Deliberately left alone

- OperatorSpotlightRail coral featured ring — semantic signal, not card chrome.
- `cta-accent-dark` bright-blue pill on invert bands — locked treatment.
- Desk-dot pulses and spotlight stat ping — marks Dave asked for; allowed in
  both themes. Match-bar 100% glow lives on the navy island in both themes.
- StepFlow static `border-white/10` rules — adding hairline draws there would
  be new motion, not finishing existing motion.
- Header desktop pill compact padding (see commit 4).
- Em dashes, all copy, CTA destinations, 11px mono chrome, #F43F34,
  /portal, /auth, _authenticated.

## Addendum — accent reduction pass (same day, after final polish)

Dave: blue for text only; coral for vector graphics; progress bars red; dark
buttons cream; blue/navy hairlines red. Four commits, no structural rework of
the polish pass:

1. **Buttons** — `cta-accent` mirrors its ground everywhere: cream pill on
   dark, navy pill on light and on cream invert bands (`cta-accent-dark`
   recolored navy, name kept), cream pill on the light-page navy band. No
   blue button fills remain.
2. **Bars** — Match Matrix bars + 100% glow, header reading-progress line,
   and spotlight rail progress → coral. Bars/% lock untouched (color only).
3. **Hairlines** — featured tier borders (pricing + homepage engagement
   tiles), the light-mode tier hairline (was solid navy — the pricing navy
   line Dave flagged), and the active-nav underline → coral.
4. **Marks** — problem-diagram desk dots + pulse, TrustChip dot (+glow color),
   spotlight stat ping, list bullets (pricing, for-portfolios), meetveep step
   badges, rail initials placeholder → coral.

Kept blue by Dave's explicit call: dark hover washes + Why Veep column tint
(signature hover), eyebrows/mono labels/text links/`hover:text-accent`, focus
rings and focus borders (a11y chrome). Also left: operator photo tint overlay
(mix-blend photo grade; featured already coral, non-featured blue encodes the
distinction), contact outcome panel 5% tint (wash-class treatment), dark
ambient glows (locked), portal/auth/shadcn internals (out of scope).

## Addendum — CTA diversity pass (2026-08-18)

"Book intro call" was on 10 placements; now one action per context. Nav pills
read "Get started" (still booking). Homepage InlineCTAs: benefits "Get
matched" and testimonial "Book your intro call", both revised by Dave to
"Meet Veep" (still booking); before-you-book unchanged; hero
pill unchanged (lock). Spotlight rail text link is now a single "Request an
operator" → /contact (the redundant "Get in touch" secondary beside it was
dropped). FooterCTA book pill reads "Speak with our founders" (call is with a
founder; Dave revised from "Talk to a founder"). PageHero default label is "Book a 30-minute call" (inherited by
/faq and /about); /for-portfolios hero primary is "Request a capacity audit"
→ /contact?intent=audit with secondary "See pricing" → /pricing (default
secondary would have duplicated the new primary); /terms and /privacy read
"Get started". Destination changes are only the two flagged contact-page
placements (spotlight, for-portfolios hero). PageHero gained a
`primarySearch` prop to pass query params on internal primary routes.

## Environment caveats

- This container has no browser; QA was code-level (audits of radii, borders,
  weights, glows, CTA recipes across all marketing routes + both theme token
  ladders) plus green `NITRO_PRESET=vercel vite build` after each commit.
  Recommend one visual pass at 1440/390 in both themes on the dev server
  (`vite dev --host 0.0.0.0 --port 5173`).
- bun 1.3.14 installed in-container at ~/.bun for builds.
- No push, no deploy, no remote configured. Commits authored as
  Cisco <cisco@veep.work>.
