# Tonal containers and secondary motion

9 October 2026 · Dave's container brief supersedes earlier accent-edge treatments.

## Surface decisions

| Role                  | Treatment                                                                      | Use                                                                    |
| --------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Page                  | Existing dark Night / light Cream                                              | The default reading surface                                            |
| Section               | Existing raised tone or an intentional inverse paper spread                    | A new narrative chapter, not a frame around every block                |
| Panel                 | Tonal fill, 8px radius, no outline or accent edge                              | One bounded scope, ownership model, audit brief, or form               |
| Interactive container | Tonal selected/hover state, directional internal movement                      | Work tabs and FAQ disclosures; retain keyboard focus outlines          |
| Editorial content     | Open type and space                                                            | Intros, founder biographies, criteria, closing copy                    |
| Profile               | Portrait and copy inside one tonal surface; 15px outer radius, 10px inset crop | Credibility; no hover behavior implying a static portrait is clickable |
| Proof                 | Open result and explanation on a shared plane                                  | No accent rails, count-up numbers, or decorative metric boxes          |
| Diagram               | Open geometry; lines only express relationships                                | Scope boundaries, branches, shared access, and delivery paths          |
| Pricing               | One comparison plane, tonal column/group differentiation                       | No isolated floating cards or accent perimeter                         |
| Utility               | Filled form sheet; functional input boundaries                                 | Preserve validation, focus, selection, and form behavior               |

No universal card shadow or hover lift. Blue identifies activity or a meaningful state; coral identifies the work needing ownership. Neither color frames a container merely for emphasis. Structural relationship lines, readable form boundaries, keyboard focus indicators, and necessary comparison rules remain exceptions.

## Motion hierarchy

1. **Hero:** the existing 5.4-second circular work loop remains the expressive peak.
2. **Signature section:** the homepage ownership diagram runs a short entry sequence. Three work paths converge at the CEO's desk; the desk registers the load; the arrow advances; Scope → Assemble → Own → Deliver receives a restrained sequential emphasis. The diagram then rests. On narrow screens the turn points down.
3. **Component:** work tabs move their arrow and assemble the selected work products; FAQ disclosure rotates its mark and opens a tonal reading plane; editorial links move in their destination direction. Static pricing and portraits do not pretend to be buttons.
4. **Micro:** pressed actions compress slightly; selected navigation uses tone; focus remains explicit.

Selected supporting sections reuse the same motion primitives: portfolio connections complete in order, process markers activate in order, portraits settle within their crops, and proof values settle without changing their figures. No moving text gates, parallax, ambient floating shapes, or decorative endless loops are added.

Secondary entry motion runs once, pauses offscreen and in hidden documents, and has a complete visible static state before JavaScript and with reduced motion. Core copy never starts at zero opacity. Interaction motion is limited to hover-capable devices and keyboard focus; touch keeps clear static/selected states.

## Implementation map

`system/tokens.css` defines radius and timing roles. `system/surfaces.css` adapts public editorial components to the tonal policy. `system/section-motion.css` supplies shared sequence behavior, driven by `useSectionMotion`. `system/home.css` owns the marked ownership diagram's geometry and responsive turn. The shared `Section` component enables entry motion only on explicitly selected sections.

Applied surfaces: Home, Companies (including Agent Teams), Funds, Pricing, About, Join, FAQ, MeetVeep, and the Contact form sheet. Portal and legal page bodies remain outside this pass. Copy, offer terms, route paths, booking destinations, and submission handlers remain unchanged.

## Review evidence

- Profile cards now keep portrait, identity, role, and credential on one tonal surface. Home, About, and Join use image-above-copy cards; Companies and Funds use one combined editorial card that stacks on phones. Existing automatic progression and manual spotlight controls are preserved.
- Production build, targeted ESLint, formatting, and whitespace checks pass.
- Home, Companies, and Funds were rendered and measured at 1440, 1024, 768, 390, and 320px in both themes; no document-level horizontal overflow. Representative ownership, profile, and portfolio layouts were inspected as screenshots at desktop, tablet, and phone sizes. Supporting public pages were checked at 1440px light and 320px dark; Join's initial loading sample was repeated after its content loaded.
- Observed the ownership sequence running, then paused after scrolling away; its desk signal aligns with the converging paths. The arrow and steps settle after the entry sequence.
- Verified spotlight selection pauses automatic progression; mandate tabs respond to arrow keys; FAQ opens its complete answer on a tonal plane. No browser console errors returned.
- Reduced-motion styles and the preference listener were reviewed in source. The operating-system preference was not changed. No real forms were submitted.

Captures and measurements: `/Users/dave/.codex/visualizations/2026/10/08/01a11cba-9c61-7091-878a-af7c099dd3d0/veep-tonal-motion/`.
