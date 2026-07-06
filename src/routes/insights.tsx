import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Veep" },
      { name: "description", content: "Field notes on executive capacity, operator-led execution, and pivotal business moments." },
      { property: "og:title", content: "Insights — Veep" },
      { property: "og:description", content: "How the best operators run pivotal engagements." },
    ],
  }),
  component: Page,
});

const posts = [
  {
    t: "The CFO wedge: why finance pain converts first",
    d: "Finance pain attaches to hard events. That's why it's the fastest wedge into a real executive-capacity engagement.",
    tag: "Positioning",
    read: "6 min read",
  },
  {
    t: "Interim vs. search: how to keep the work moving",
    d: "An interim operator preserves the permanent search and clarifies what the full-time role should own.",
    tag: "Playbook",
    read: "5 min read",
  },
  {
    t: "The portfolio bench, priced honestly",
    d: "Why 'membership' is the wrong word — and how to structure an executive bench that doesn't become a margin trap.",
    tag: "Model",
    read: "8 min read",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Field notes on"
        italic="operator-led execution."
        sub="Short essays and playbooks from the operators who run Veep engagements every day."
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.t} to="/insights" className="group rounded-3xl border border-border bg-card p-8 flex flex-col gap-6 hover:shadow-elegant transition">
              <Eyebrow>{p.tag}</Eyebrow>
              <div className="font-serif text-2xl text-cream leading-tight">{p.t}</div>
              <p className="text-stone text-sm">{p.d}</p>
              <div className="mt-auto flex items-center justify-between text-sm text-forest">
                <span>{p.read}</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
