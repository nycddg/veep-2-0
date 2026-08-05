# Container flattening pass — whole site

Goal: content-led layout. Hierarchy comes from spacing, type scale, and rules — not from stacked boxes. One surface maximum per unit. No copy, token, or route changes. Both themes shipped.

## What I found (and will flatten)

**Home — hero (OperatorCanvas)**
- Portrait media surface plus two floating glass panels ("Match History" badge and "Match Matrix"), each carrying border + backdrop-blur + heavy drop shadow, plus an ambient glow. Three surfaces in one hero.
- Flatten to: portrait as the single media surface, one floating callout kept (Match Matrix — it carries the metrics), the Match History badge removed. The kept callout gets one surface treatment (fill only, no border + blur + double-shadow stack).

**Home — Network impact**
- Card-in-card: a rounded bordered `bg-secondary` panel wrapping a 4-cell divided grid, plus dot-grid overlay and animated scan line.
- Flatten to: divided 4-column metric row directly on the section background, top/bottom rules only. Overlays removed.

**Home — Outcome tiles (OutcomeTile)**
- Glass card per outcome.
- Flatten to: open link blocks separated by rules; arrow and hover state preserved (still interactive).

**Home — Objections (ObjectionList)**
- Glass card per Q/A.
- Flatten to: two-column open list, question in serif, answer beneath, hairline rule per item.

**Home — Audience tabs / Case switcher**
- Tinted inner panel (`border + bg-white/[0.02] + rounded`) holding another bordered header row inside.
- Flatten to: open content with a single top rule. Segmented tab controls stay (interactive affordance).

**Home — Operator spotlight (OperatorProofCard compact, OperatorSpotlightRail)**
- Compact card = glass card + `shadow-2xl` + ring-wrapped avatar inside = card-in-card plus double shadow.
- Flatten to: portrait stays one surface; name/role/chips sit as open type under it. Ring and outer shadow removed.

**meetveep**
- Bordered tinted `ul` box around the checklist.
- Flatten to: divide-y list, no box.

**for-portfolios**
- `bg-card rounded-2xl border` grid cards and a large rounded bordered panel section.
- Flatten to: open grid items with top rules; panel becomes a plain section block.

**contact / join**
- The form is a legitimate single surface — kept. Nested inside it: a tinted accent note box and a tinted error box (card-in-card).
- Flatten to: note and error as plain type with accent/destructive color, no inner fills.

**primitives.tsx shared card**
- `bg-card + border + shadow-elegant` = surface + border + shadow triple.
- Flatten to: single surface, no decorative border or shadow.

**Already clean — no change**
- Pricing: four tier columns with divider rules, nothing nested. Meets "one card per tier, nothing inside".
- FAQ: divide-y accordion, no nested boxes.
- TriggerBento, StepFlow, CompareTable, benefits/how sections: rule-based grids, already open layout.
- Partner dashboard / admin / auth: private app surfaces, outside the marketing audit.

## Technical notes
- Edits are className-only in `src/routes/index.tsx`, `for-portfolios.tsx`, `meetveep.tsx`, `contact.tsx`, `join.tsx`, and `src/components/site/{OperatorCanvas,OutcomeTile,ObjectionList,AudienceTabs,CaseSwitcher,OperatorProofCard,OperatorSpotlightRail,primitives}.tsx`.
- Existing semantic tokens (`--surface-raised`, `--surface-band`, `cream`, `stone`, `accent`) are reused as-is; no token or `styles.css` value changes. `.glass-card` stays defined for the remaining interactive surfaces (forms, auth).
- Verification: Playwright screenshots of every live route in dark and light mode after the pass.