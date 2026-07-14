// Shared SEO/social constants.
// The og-card lives on the Lovable CDN; use an absolute URL because social
// crawlers require it. The CDN path is stable and immutable per asset_id.
export const SITE_URL = "https://www.veep.work";
export const OG_IMAGE_URL =
  "https://www.veep.work/__l5e/assets-v1/ddadb273-aca7-4108-b8a0-7a1791f0303f/og-card.jpg";
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