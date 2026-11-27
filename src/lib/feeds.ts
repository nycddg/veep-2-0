import catalogJson from "@/content/feeds/catalog.json";
import { SITE_URL } from "@/lib/seo";

/**
 * Editorial and service posts ported from the Gushwork /feeds overlay
 * (sheet dump 2026-11-16). /feeds lists every piece. Blog and service URLs both resolve.
 */
export type FeedRun = { t: string; href?: string };

export type FeedBlock =
  | { kind: "p"; runs: readonly FeedRun[] }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: readonly (readonly FeedRun[])[] }
  | { kind: "ol"; items: readonly (readonly FeedRun[])[] }
  | { kind: "quote"; runs: readonly FeedRun[] }
  | {
      kind: "table";
      caption?: string;
      headers: readonly string[];
      rows: readonly (readonly string[])[];
    }
  | { kind: "figure"; src?: string; alt: string; caption?: string };

export type FeedCategory = "blog" | "service";

export type FeedEntry = {
  slug: string;
  category: FeedCategory;
  title: string;
  excerpt: string;
  description: string;
  date: string;
};

export type FeedPost = FeedEntry & {
  body: readonly FeedBlock[];
};

type CatalogRow = {
  slug: string;
  category: FeedCategory;
  title: string;
  excerpt: string;
  description: string;
  date: string;
};

const catalog = catalogJson as CatalogRow[];

function byDateThenTitle(a: FeedEntry, b: FeedEntry): number {
  const date = b.date.localeCompare(a.date);
  if (date !== 0) return date;
  return a.title.localeCompare(b.title);
}

export function listFeedEntries(): readonly FeedEntry[] {
  return [...catalog].sort(byDateThenTitle);
}

export function listFeedPosts(): readonly FeedEntry[] {
  return catalog.filter((entry) => entry.category === "blog").sort(byDateThenTitle);
}

export function getFeedEntry(slug: string, category?: FeedCategory): FeedEntry | undefined {
  const entry = catalog.find((item) => item.slug === slug);
  if (!entry) return undefined;
  if (category && entry.category !== category) return undefined;
  return entry;
}

export function feedPostPath(post: Pick<FeedEntry, "slug" | "category">): string {
  return `/feeds/${post.category}/${post.slug}`;
}

export function feedPostUrl(post: Pick<FeedEntry, "slug" | "category">): string {
  return `${SITE_URL}${feedPostPath(post)}`;
}

export function feedInternalTarget(href: string): { category: FeedCategory; slug: string } | null {
  const match = /^\/feeds\/(blog|service)\/([^/?#]+)$/.exec(href);
  if (!match) return null;
  const category = match[1];
  if (category !== "blog" && category !== "service") return null;
  return { category, slug: decodeURIComponent(match[2]) };
}

export function relatedFeedEntries(
  post: Pick<FeedEntry, "slug" | "category" | "title">,
  count = 3,
): FeedEntry[] {
  const others = listFeedEntries().filter(
    (item) => item.slug !== post.slug || item.category !== post.category,
  );
  const blogs = others.filter((item) => item.category === "blog");
  const services = others.filter((item) => item.category === "service");

  function nextFrom(pool: readonly FeedEntry[], take: number): FeedEntry[] {
    if (pool.length === 0 || take <= 0) return [];
    const startAt = pool.findIndex((item) => item.title.localeCompare(post.title) > 0);
    const start = startAt < 0 ? 0 : startAt;
    const picked: FeedEntry[] = [];
    for (let step = 0; picked.length < take && step < pool.length; step += 1) {
      picked.push(pool[(start + step) % pool.length]);
    }
    return picked;
  }

  const blogTake = post.category === "blog" ? 1 : Math.min(1, count - 1);
  const serviceTake = count - blogTake;
  return [...nextFrom(blogs, blogTake), ...nextFrom(services, serviceTake)].slice(0, count);
}

export function formatFeedDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
