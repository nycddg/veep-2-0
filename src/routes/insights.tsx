import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Fractional Executive Playbooks | Veep" },
      { name: "description", content: "Field notes on fractional CFO cost, interim executive coverage, and how the best operators run pivotal engagements." },
      { property: "og:title", content: "Insights — Veep" },
      { property: "og:description", content: "Playbooks from operators who run Veep engagements every day." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
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
            <div key={p.t} className="rounded-3xl border border-border bg-card p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <Eyebrow>{p.tag}</Eyebrow>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-gold">/ Coming soon</span>
              </div>
              <div className="text-2xl text-cream leading-tight tracking-tight">{p.t}</div>
              <p className="text-stone text-sm">{p.d}</p>
              <div className="mt-auto text-sm text-stone">{p.read}</div>
            </div>
          ))}
        </div>
      </Section>

      <FooterCTA />
    </>
  );
}
