import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { FeedBody } from "@/components/site/FeedBody";
import { formatFeedDate, relatedFeedEntries, type FeedCategory, type FeedPost } from "@/lib/feeds";

function RelatedLink({
  category,
  slug,
  title,
}: {
  category: FeedCategory;
  slug: string;
  title: string;
}) {
  const className = "group motion-link flex items-baseline justify-between gap-6 py-6";
  const body = (
    <>
      <span className="font-serif font-medium text-lg md:text-xl text-cream tracking-tight leading-snug">
        {title}
      </span>
      <span className="shrink-0 text-sm text-cream/70 group-hover:text-cream inline-flex items-center gap-1.5">
        Read <ArrowRight size={14} className="motion-arrow" />
      </span>
    </>
  );
  switch (category) {
    case "blog":
      return (
        <Link to="/feeds/blog/$slug" params={{ slug }} className={className}>
          {body}
        </Link>
      );
    case "service":
      return (
        <Link to="/feeds/service/$slug" params={{ slug }} className={className}>
          {body}
        </Link>
      );
    default: {
      const _exhaustive: never = category;
      return _exhaustive;
    }
  }
}

export function FeedArticlePage({ post }: { post: FeedPost }) {
  const related = relatedFeedEntries(post);

  return (
    <>
      <PageHero
        eyebrow="Feeds"
        title={post.title}
        sub={post.excerpt}
        primaryLabel="Book intro call"
        secondaryLabel="All feeds"
        secondaryTo="/feeds"
      />

      <article className="bg-surface-raised py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <time dateTime={post.date} className="mono-label text-cream/70">
            {formatFeedDate(post.date)}
          </time>
          <div className="mt-8 md:mt-10">
            <FeedBody blocks={post.body} />
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="py-14 sm:py-16 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="eyebrow">More from Feeds</div>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {related.map((item) => (
                <RelatedLink
                  key={`${item.category}-${item.slug}`}
                  category={item.category}
                  slug={item.slug}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FooterCTA />
    </>
  );
}
