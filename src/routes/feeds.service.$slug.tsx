import { createFileRoute, notFound } from "@tanstack/react-router";
import { FeedArticlePage } from "@/components/site/FeedArticlePage";
import { feedArticleHead } from "@/lib/feed-schema";
import { getFeedPost } from "@/lib/feed-posts";

export const Route = createFileRoute("/feeds/service/$slug")({
  loader: ({ params }) => {
    const post = getFeedPost(params.slug, "service");
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params }) => {
    const post = getFeedPost(params.slug, "service");
    if (!post) return {};
    return feedArticleHead(post);
  },
  component: Page,
});

function Page() {
  const { post } = Route.useLoaderData();
  return <FeedArticlePage post={post} />;
}
