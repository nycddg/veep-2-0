// Shared SEO/social constants.
// OG image is self-hosted under /public/assets (no Lovable __l5e CDN).
// Absolute URL required for social crawlers; SITE_URL is production canonical.
export const SITE_URL = "https://www.veep.work";
export const OG_IMAGE_PATH = "/assets/og-card.jpg";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;
export const OG_IMAGE_ALT = "Veep — senior operators for work that can't wait";

export function ogImageMeta() {
  return [
    { property: "og:image", content: OG_IMAGE_URL },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: OG_IMAGE_ALT },
    { name: "twitter:image", content: OG_IMAGE_URL },
    { name: "twitter:image:alt", content: OG_IMAGE_ALT },
  ] as const;
}
