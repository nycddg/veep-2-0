import bodiesJson from "@/content/feeds/bodies.json";
import { getFeedEntry, type FeedBlock, type FeedCategory, type FeedPost } from "@/lib/feeds";

const bodies = bodiesJson as Record<string, FeedBlock[]>;

export function getFeedPost(slug: string, category?: FeedCategory): FeedPost | undefined {
  const entry = getFeedEntry(slug, category);
  if (!entry) return undefined;
  const body = bodies[slug];
  if (!body) return undefined;
  return { ...entry, body };
}
