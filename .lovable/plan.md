Update the hero CTA row in src/routes/index.tsx so its visual treatment matches the existing FooterCTA component ("Make your next big move" section).

Changes:
- Primary "Book intro call" button: switch from the indigo solid pill to the cream pill used in FooterCTA — `bg-cream`, `text-ink`, `font-medium`, `px-7 py-3.5`, `text-sm`, `rounded-full`, with the arrow icon retained. Remove the accent shadow and hover:scale.
- Secondary action: switch from the outline pill to the FooterCTA text-link treatment — cream text with `underline underline-offset-8 decoration-white/20 hover:decoration-white/60`, `pb-1`, no border or pill shape.
- Keep the existing destinations/behavior: primary still opens BOOKING_URL; secondary still links to `#how` as "See how it works" (only the styling changes, not the action).
- No new imports needed — `Link` and `ArrowRight` are already imported.

Only src/routes/index.tsx is affected.