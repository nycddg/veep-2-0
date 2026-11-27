import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { feedPostUrl, listFeedEntries, type FeedEntry } from "@/lib/feeds";
import { ogImageMeta, SITE_URL } from "@/lib/seo";

const posts = listFeedEntries();

const feedIndexSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Feeds",
  url: `${SITE_URL}/feeds`,
  description:
    "Notes from the work. Short pieces on operating capacity, value creation, and the jobs org charts leave uncovered.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: feedPostUrl(post),
      datePublished: post.date,
    })),
  },
};

export const Route = createFileRoute("/feeds/")({
  head: () => ({
    meta: [
      { title: "Feeds | Veep" },
      {
        name: "description",
        content:
          "Notes from the work. Short pieces on operating capacity, value creation, and the jobs org charts leave uncovered.",
      },
      { property: "og:title", content: "Feeds | Veep" },
      {
        property: "og:description",
        content:
          "Notes from the work. Short pieces on operating capacity, value creation, and the jobs org charts leave uncovered.",
      },
      { property: "og:url", content: `${SITE_URL}/feeds` },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/feeds` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(feedIndexSchema) }],
  }),
  component: Page,
});

function FeedListLink({ post }: { post: FeedEntry }) {
  const className =
    "group motion-hover-lift grid md:grid-cols-[6.5rem_minmax(0,1fr)_auto] gap-2 md:gap-8 py-8 md:py-10";
  const inner = (
    <>
      <div>
        <div className="mono-label text-cream/50">{post.category === "blog" ? "Blog" : "Service"}</div>
      </div>
      <div className="min-w-0">
        <h2 className="font-serif font-medium text-xl md:text-2xl text-cream tracking-tight leading-snug">
          {post.title}
        </h2>
        <p className="mt-3 text-base text-stone leading-relaxed max-w-2xl">{post.excerpt}</p>
      </div>
      <span className="text-sm text-cream/70 group-hover:text-cream inline-flex items-center gap-1.5 transition-colors duration-200 md:self-center">
        Read <ArrowRight size={14} className="motion-arrow" />
      </span>
    </>
  );

  switch (post.category) {
    case "blog":
      return (
        <Link to="/feeds/blog/$slug" params={{ slug: post.slug }} className={className}>
          {inner}
        </Link>
      );
    case "service":
      return (
        <Link to="/feeds/service/$slug" params={{ slug: post.slug }} className={className}>
          {inner}
        </Link>
      );
    default: {
      const _exhaustive: never = post.category;
      return _exhaustive;
    }
  }
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Feeds"
        title="Notes from the work."
        sub="Short pieces on operating capacity, value creation, and the jobs org charts leave uncovered."
        primaryLabel="Book intro call"
        secondaryLabel="See how it works"
        secondaryTo="/"
        secondaryHash="how"
      />

      <section className="bg-surface-raised py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mono-label mb-8 text-cream/70">{posts.length} pieces</div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {posts.map((post) => (
              <FeedListLink key={`${post.category}-${post.slug}`} post={post} />
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
