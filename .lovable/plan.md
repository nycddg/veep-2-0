## Rebuild the hero (Andela-style, centered symmetrical canvas)

Replace the current left-aligned two-column hero (headline left / waveform motif right) with a single centered stack: headline → subhead → check-row → operator headshot canvas with floating cards → dual CTA row.

### Scope
- Only edits `src/routes/index.tsx` (the hero `<section id="overview">` block, lines ~328–369).
- Creates a new component `src/components/site/OperatorCanvas.tsx` for the headshot + floating cards visual.
- Leaves `HeroMotif`/`HeroVisual` untouched but stops importing `HeroMotif` on the homepage.
- Does NOT touch nav, `LogoWall`, or any section below the hero.

### Content changes
- Headline: keep the current copy shape but center it. Line 1 `The work needs` (cream), Line 2 `an owner.` (indigo accent). Sans-serif extrabold, sizes `text-5xl md:text-7xl`, tight `leading-[1.05]`.
- Subhead (centered, max-w-2xl): "Veep helps founder-led companies bring in vetted senior operators to own critical work before the full-time executive hire makes sense." (existing copy, unchanged).
- Check row (replaces the pill `TrustChip`): three inline items with indigo check icons — `Vetted senior operators` · `72-hour match` · `30-day fit guarantee`.
- CTAs: primary solid indigo pill `Book intro call` (links to `BOOKING_URL`), secondary outline pill `See how it works` (Link → `#how`). Both centered.

### OperatorCanvas component
Structure mirrors the selected prototype exactly:
- Outer wrapper `relative max-w-3xl` with a soft `bg-accent/10 blur-[120px]` glow behind.
- Central slot: 16:9 rounded-3xl card, gradient `from-[#1a1c2e] to-[#0a0c16]`, `border-white/10`. Inside: 128px circle with `OP` initials in indigo — this is the placeholder headshot slot the user can later swap for a real image.
- Floating Card A (top-left, overlapping): pill "Operator Found · 95% Match Rate" with a small indigo star icon, glass surface (`bg-white/5 backdrop-blur-3xl border-white/10`).
- Floating Card B (bottom-right, overlapping): "Match Matrix" panel with 4 labeled progress rows (Functional Depth 97%, Business Model 95%, Industry Expertise 98%, Life Stage Experience 100%), glass surface on `bg-[#0a0c16]/80`.
- Two subtle float animations (`float` up ~12px, `float-delayed` down ~12px, 6–7s ease-in-out infinite) added as scoped `<style>` inside the component.

### Technical details
- All colors reference existing tokens where possible (`text-cream`, `text-accent`, `bg-accent`, `text-stone`) — the hex fallbacks in the prototype map cleanly to the current design system (`#050810`=background, `#6366f1`=accent, `#F5F1EA`=cream).
- No new fonts — the project's sans stack replaces Inter from the prototype. Serif is not used in the final headline (the selected v3 refinement dropped Playfair for extrabold sans).
- The hero grid drops from `lg:grid-cols-2` to a single centered column; container becomes `max-w-5xl` centered, `text-center`.
- Placeholder headshot uses initials `OP` — swap for a real `<img>` later by replacing the inner circle contents in `OperatorCanvas`.
- No new dependencies, no font installs, no routing changes.

### Files
- Edit `src/routes/index.tsx` — replace hero section block; remove `HeroMotif` import.
- Add `src/components/site/OperatorCanvas.tsx`.
