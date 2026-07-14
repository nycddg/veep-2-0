# Rebuild social share card with real veep wordmark

The current og-card renders "veep" as AI-generated typography. Replace it with a deterministic composite of the actual `veep-wordmark-white.png` asset on a canvas that matches the site palette. No AI generation — Python + PIL only, so the logo is pixel-identical to the on-site wordmark.

## Composition

- **Canvas**: 1200×630, solid `#050810` (site `--background` / navy canvas).
- **Wordmark**: `src/assets/veep-wordmark-white.png` (cream-white on transparent), downloaded from CDN, scaled to ~360px wide, centered slightly above middle.
- **Divider**: 1px, ~360px wide, in bright-blue accent `#789fff` at 45% alpha, ~28px below the wordmark.
- **Tagline**: "Senior operators for work that can't wait" in IBM Plex Sans 22px, cream `#F5F1E8` at 90%, centered under the rule. Fetch IBM Plex Sans TTF from Google Fonts if not present locally; fall back to DejaVu Sans if the fetch fails.
- **Corner mark**: bottom-left `veep.work` in IBM Plex Mono 16px cream at 70%, plus a tiny coral dot `#ec6b66` — matches the current corner mark style.

## Steps

1. Download `veep-wordmark-white.png` from its CDN URL to `/tmp/`.
2. Download IBM Plex Sans + Mono TTFs from Google Fonts to `/tmp/` (small, one-time; ignore failure and fall back to DejaVu).
3. Run a short Python script to composite the canvas and save `/tmp/og-card.jpg` (JPEG, quality 92, no chroma subsampling).
4. Delete the current `src/assets/og-card.jpg.asset.json`'s CDN object with `lovable-assets delete --file`, then `lovable-assets create --file /tmp/og-card.jpg --filename og-card.jpg > src/assets/og-card.jpg.asset.json`.
5. Update `OG_IMAGE_URL` in `src/lib/seo.ts` to the new absolute CDN URL from the pointer.
6. Verify homepage HTML still references the new URL via curl.

## Out of scope

No route or metadata changes beyond the URL string. No design changes to the wordmark itself. Not touching the operator or contact-form work from the previous pass.

## Note

Social platforms cache previews — LinkedIn/Twitter/Slack won't show the new card until re-scraped in their link debuggers.
