import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { ogImageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Veep | Built to Carry the Work" },
      {
        name: "description",
        content:
          "Veep is an operating partner platform built by operators. We put experienced judgment and hands-on delivery behind critical work.",
      },
      { property: "og:title", content: "About Veep | Built to Carry the Work" },
      {
        property: "og:description",
        content:
          "Veep is an operating partner platform built by operators. We put experienced judgment and hands-on delivery behind critical work.",
      },
      { property: "og:url", content: "https://www.veep.work/about" },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/about" }],
  }),
  component: Page,
});

const principles: readonly { title: string; body: string }[] = [
  {
    title: "Start with the job",
    body: "Define the outcome and what it takes to deliver before deciding which role or team belongs on it.",
  },
  {
    title: "Handpicked to be hands-on",
    body: "Bring experience that fits the company and the job. Credentials are the starting point.",
  },
  {
    title: "Keep decisions clear",
    body: "You direct and approve. We carry the agreed delivery.",
  },
  {
    title: "Finish with a handoff",
    body: "Leave outputs, documentation, and context. Agree the next scope or hand off cleanly.",
  },
];

const founders: readonly { name: string; role: string; bio: string }[] = [
  {
    name: "Dave Garcia",
    role: "Co-Founder",
    bio: "Launched products, led pivots, and landed exits. Now helping founders get consequential work done.",
  },
  {
    name: "Jian Yang",
    role: "Co-Founder",
    bio: "Raised capital, scaled businesses, and led exits. Now bringing that financial judgment to Veep.",
  },
  {
    name: "Mark Newhouse",
    role: "Co-Founder",
    bio: "Built brands, transformed organizations, and sold startups. Now getting into the work with founders.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Veep"
        title="Built for the work that keeps coming back."
        sub="We've built companies and led from inside them. We know the work that falls between functions, outgrows the team, or waits for a hire. Veep exists to give that work the judgment, people, and follow-through it needs."
        secondaryLabel="See how it works"
        secondaryTo="/how-it-works"
      />

      {/* Problem / Meet Veep */}
      <section className="bg-surface-raised border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-28 space-y-10 md:space-y-14">
          {[
            {
              eyebrow: "The problem",
              body: "The org chart doesn't cover every job. A founder can set the priority, a team can agree the plan, and execution can still have no owner. That is where consequential work starts to drift.",
            },
            {
              eyebrow: "Meet Veep",
              body: "Veep extends the operating partner model of top funds beyond portfolios. We define the job, bring together the right people and workflows, and take responsibility through delivery and handoff.",
            },
          ].map((row) => (
            <div
              key={row.eyebrow}
              className="grid lg:grid-cols-12 gap-8 lg:gap-14 border-t border-white/10 pt-10 md:pt-14 first:border-t-0 first:pt-0"
            >
              <div className="lg:col-span-4">
                <div className="eyebrow">
                  {row.eyebrow}
                </div>
              </div>
              <p className="lg:col-span-8 font-serif font-medium text-xl md:text-2xl text-cream leading-[1.5] tracking-tight text-balance">
                {row.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="py-14 sm:py-16 md:py-28 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4 space-y-5">
              <div className="eyebrow">
                What we believe
              </div>
              <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream leading-[1.15] tracking-tight text-balance allow-wrap">
                Experience that gets into the work.
              </h2>
              <p className="text-stone text-base leading-relaxed max-w-md">
                Senior judgment earns its place in the work. Understand the business, take responsibility, and see the job through.
              </p>
            </div>
            <ul className="lg:col-span-8">
              {principles.map((p, idx) => (
                <li
                  key={p.title}
                  className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-white/10 py-6 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-sm text-accent tabular-nums pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="text-cream text-lg tracking-tight">
                      {p.title}
                    </div>
                    <p className="mt-2 text-stone text-base leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Founding team */}
      <section className="bg-surface-raised border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-28">
          <div className="max-w-2xl space-y-4">
            <div className="eyebrow">
              Founding team
            </div>
            <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream leading-[1.15] tracking-tight text-balance allow-wrap">
              Founders first. Operators always.
            </h2>
            <p className="text-stone text-base leading-relaxed">
              We've built, scaled, and led from inside. Veep puts that operating perspective behind every engagement.
            </p>
          </div>
          <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-10 md:gap-8">
            {founders.map((f) => (
              <div key={f.name} className="border-t border-white/10 pt-6">
                <div className="mono-label">
                  {f.role}
                </div>
                <div className="mt-3 font-serif font-medium text-xl text-cream tracking-tight">
                  {f.name}
                </div>
                <p className="mt-3 text-stone text-base leading-relaxed">
                  {f.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA
        headline={<>What keeps landing on your desk?</>}
        sub="Bring us the priority, the constraint, and what needs to be true on the other side. We'll help define the job."
        primary="contact"
      />
    </>
  );
}
