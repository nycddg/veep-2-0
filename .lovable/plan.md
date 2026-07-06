## Change

The selected section is a `tone="muted"` band — its background comes from the `--secondary` / `--muted` tokens (currently a solid navy `oklch(0.235 0.06 262)`). Swap those tokens to `#ffffff` at 10% opacity so the muted surface reads as a subtle translucent lift over the navy canvas everywhere it appears.

## Edit — `src/styles.css` `:root`

```css
--secondary: oklch(1 0 0 / 0.10);   /* white 10% over navy canvas */
--muted:     oklch(1 0 0 / 0.10);
```

All other tokens stay as-is. Components that use `bg-secondary` / `bg-muted` (via `<Section tone="muted">`) pick up the change automatically — no component edits required.
