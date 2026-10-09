# Homepage system review

9 October 2026 · Local clone · `fable/polish`

## Ready for review

The homepage and shared foundations are ready for Dave's visual review at **http://127.0.0.1:8090/**. The working component reference is at **http://127.0.0.1:8090/__design-system/**. The broader page migration is not represented as complete.

## Recorded checks

- Production build passes after the final component and CSS changes.
- Targeted ESLint passes for the changed public components, homepage, specimen, and Vite configuration.
- `git diff --check` passes.
- Homepage rendered and inspected at 1440, 1024, 768, 390, and 320px in dark and light themes. No document-level horizontal overflow was observed. The moving ticker clips within its own window intentionally.
- Desktop and mobile header behavior checked. The unintended desktop menu trigger was removed. Mobile opening moves focus into the menu; Escape closes it and returns focus to the trigger. Theme switching works in both layouts.
- Four operator portraits load with supported credentials and the shared crop/corner treatment. The initial full-page screenshot captured unloaded lazy images; later captures verified all four loaded successfully.
- All 16 client names remain in the homepage ticker. Its label and the hero CTA share the same left coordinate (88px at 1440px). There is no homepage ticker or animation pause button.
- Homepage loop is running at 5.4 seconds, and its `data-playing` state changes to false when scrolled offscreen. The specimen renders the actual component's static problem and resolved modes. Reduced-motion media rules were inspected in source; the operating system preference was not changed during this pass.
- Shared specimen controls checked in both themes: selected state, disabled state, local empty-field error and recovery, keyboard focus ring, and keyboard disclosure opening. These examples have no submission endpoint.
- Semantic contrast spot checks informed a darker light-mode link color and a fine ink edge around the coral work object. Normal light links are approximately 5:1 on cream and above 4.5:1 on the panel surface. Muted text and control boundaries were checked against their intended surfaces. This is not a claim of a complete accessibility certification.
- Companies, Funds, Pricing, About, Join, FAQ, and MeetVeep load at desktop dark and 390px light. No horizontal page overflow was observed. The existing booking URL remains unchanged. A FAQ disclosure was opened by keyboard and its existing answer verified. No real form was submitted.
- No browser console errors were returned during the final homepage check.
- The internal design specimen is absent from the generated production JavaScript/HTML output.

## Existing check limitations

The repository-wide TypeScript check still reports ten errors outside this pass: `PageHero.tsx`, Supabase auth middleware, portal mock/store functions, and the existing root error component. No error remains in the changed homepage or system component files. The existing nonstandard focus option in the shared header was replaced with standard `focus()` while preserving its keyboard behavior.

## Critique resolved in this pass

The largest visual correction was the tablet ownership layout: four process steps now form two columns below the heading, removing the empty side column. Shared controls no longer drift between corner treatments and focus states. The proof result is paired with the work that supports it. Client evidence appears once, and career experience remains qualified separately from Veep engagement results.

Retired legacy CSS includes 98 obsolete homepage/portrait selector groups and 12 obsolete disclosure groups. Remaining legacy selectors belong to unmigrated pages and are intentionally retained.

## Evidence

Browser captures and measurements are saved in:

`/Users/dave/.codex/visualizations/2026/10/08/01a11cba-9c61-7091-878a-af7c099dd3d0/veep-system-review/`

Key files: `homepage-ready-dark.png`, `homepage-ready-dark-full.png`, `homepage-ready-light-full.png`, `home-dark-390.png`, `system-paired-themes.png`, `system-interaction-states.png`, and `system-motion-states.png`. Supporting route measurements are in `shared-route-smoke.json` and `shared-route-mobile-smoke.json`.

## Next rollout

After homepage review, apply the established roles to Companies and Funds, then Pricing, About, Join, FAQ, and MeetVeep. Preserve their different narrative jobs. Trace live form behavior before adopting the new field component; keep route paths, prices, legal text, booking destinations, and portal behavior unchanged. No push or deployment was made.
