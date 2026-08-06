Give the operator home "Your availability" section a stronger visual treatment so it reads as a first-class status card rather than body copy.

What we know
- The selected block is the third section on `/portal/operator` at lines 110–122.
- It currently renders as plain text: an `h2` header, a `.mt-3` status line, and a `.mt-2` last-updated line.
- Neighbouring sections ("Needs you", "Your assignments") use the `<Rows>`/`<Row>` list pattern, and the portal design system provides a `<Surface>` component as the one raised surface per logical unit.
- The `availability.status` value is one of `Open | Limited | Full | Paused` and is already wrapped in `text-cream`.

Plan
1. Wrap the availability content in the portal `Surface` component so it sits at the same elevation as the other keyed account items.
2. Add a small colored status indicator next to the status value, using the existing semantic palette:
   - Open → `bg-accent` (green)
   - Limited → `bg-yellow-400` or `bg-amber` (yellow/amber)
   - Full / Paused → `bg-[color:var(--accent-coral)]` (coral/red)
3. Keep the "Update" link in the section header, but align the layout with the two-column header pattern used elsewhere (`SectionTitle` or a flex row with title left / action right).
4. Preserve the existing text content and `Link` destination; only change presentation.
5. Confirm the change does not break the dark-theme contrast or the portal rule of "one raised surface per logical unit, never nested".

Files to touch
- `src/routes/_authenticated/portal/operator/index.tsx` (the selected section only)
- Optional: `src/components/portal/ui.tsx` only if a reusable `StatusIndicator` component is needed; otherwise implement inline.
