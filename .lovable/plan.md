# Typography scale sweep

The site's small text is running below common readability guidance: most body and supporting copy is 14px (`text-sm`, 185 uses), and labels/eyebrows are 10–11px (100 uses). Recommended practice is 16px for primary body copy, 15px for dense secondary copy, and no persistent UI text below 12px.

## What changes

**Body and supporting copy — 14px → 16px**
Paragraphs, list items, card descriptions, FAQ answers, form help text. Applies on Home, Pricing, For Portfolios, About, FAQ, Services, Compare, Contact, Join, Auth, Privacy/Terms.

**Dense secondary copy — 14px → 15px**
Feature bullet lists inside pricing/roster tiers, meta lines, footer link columns — where 16px would break the column rhythm.

**Eyebrows and mono labels — 10px → 11–12px**
The `text-[10px] uppercase tracking-[0.12em]` eyebrow becomes 11px with slightly reduced tracking so it stays compact but legible. Mono index labels (`0.1`, `01`) go to 11px. Nothing persistent stays at 10px.

**Buttons and links — 14px → 15px**
CTA pills, inline underlined links, and header/footer nav, so tap targets read at a comfortable size.

**Line length**
Body copy keeps its relaxed leading; where the size bump pushes a paragraph past roughly 75 characters per line, a max-width guard is added so measure stays readable.

## What does not change

- Headings, hero type, and display serif sizes — the current scale is well-proportioned.
- Stats and metric numerals.
- Layout, spacing rhythm, or component structure, beyond the max-width guards needed to keep line lengths in range.

## Technical approach

Rather than hundreds of scattered edits, define the scale once in `src/styles.css` and apply it through consistent utilities:

- Add semantic type utilities: `.type-body` (16px/1.65), `.type-body-sm` (15px/1.6), `.type-label` (11px uppercase, tuned tracking), `.type-meta` (11px mono).
- Replace `text-sm` on prose/paragraph elements with `.type-body` or `.type-body-sm`, and the repeated `text-[10px] uppercase tracking-[0.12em] text-accent` eyebrow pattern with `.type-label`.
- Leave `text-sm` in place only where it is a genuine control-size token (badges, small chips).
- Verify with mobile (390px) and desktop (1440px) screenshots on Home, Pricing, For Portfolios, About, FAQ, and Contact, checking for wrapping regressions in tier cards, comparison rows, and the footer.