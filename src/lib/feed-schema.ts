import { feedPostUrl, type FeedPost } from "@/lib/feeds";
import { OG_IMAGE_URL, ogImageMeta, SITE_URL } from "@/lib/seo";

function feedRunText(runs: readonly { t: string }[]): string {
  return runs.map((run) => run.t).join("");
}

function faqPairs(post: FeedPost): { q: string; a: string }[] {
  const pairs: { q: string; a: string }[] = [];
  let inFaq = false;
  for (let index = 0; index < post.body.length; index += 1) {
    const block = post.body[index];
    if (block.kind === "h2") {
      inFaq = block.text === "Frequently Asked Questions";
      continue;
    }
    if (!inFaq || block.kind !== "h3") continue;
    const next = post.body[index + 1];
    if (next?.kind !== "p") continue;
    const answer = feedRunText(next.runs).trim();
    if (!answer) continue;
    pairs.push({ q: block.text, a: answer });
  }
  return pairs;
}

function firstFigure(post: FeedPost): { src: string; alt: string } | null {
  for (const block of post.body) {
    if (block.kind === "figure" && block.src) {
      const src = block.src.startsWith("http") ? block.src : `${SITE_URL}${block.src}`;
      return { src, alt: block.alt };
    }
  }
  return null;
}

function serviceSchema(post: FeedPost, url: string) {
  switch (post.category) {
    case "service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: post.title,
        description: post.description,
        url,
        provider: { "@type": "Organization", name: "Veep", url: SITE_URL },
      };
    case "blog":
      return null;
    default: {
      const _exhaustive: never = post.category;
      return _exhaustive;
    }
  }
}

export function feedArticleHead(post: FeedPost) {
  const url = feedPostUrl(post);
  const image = firstFigure(post);
  const faqs = faqPairs(post);
  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "Veep", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Veep",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: OG_IMAGE_URL },
    },
  };
  if (image) article.image = image.src;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Feeds", item: `${SITE_URL}/feeds` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const scripts = [
    { type: "application/ld+json", children: JSON.stringify(article) },
    { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
  ];
  if (faqs.length > 0) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }),
    });
  }

  const service = serviceSchema(post, url);
  if (service) {
    scripts.push({ type: "application/ld+json", children: JSON.stringify(service) });
  }

  return {
    meta: [
      { title: `${post.title} | Veep` },
      { name: "description", content: post.description },
      { property: "og:title", content: `${post.title} | Veep` },
      { property: "og:description", content: post.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: post.date },
      ...(image
        ? [
            { property: "og:image", content: image.src },
            { property: "og:image:alt", content: image.alt },
            { name: "twitter:image", content: image.src },
            { name: "twitter:image:alt", content: image.alt },
          ]
        : [...ogImageMeta()]),
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
