import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { ogImageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Veep | Operating Partners Built to Grow Enterprise Value" },
      {
        name: "description",
        content:
          "The org chart doesn't cover every job. Meet the founders behind Veep and the operating model bringing top-firm firepower to independent businesses and lean funds.",
      },
      { property: "og:title", content: "About Veep | Operating Partners Built to Grow Enterprise Value" },
      {
        property: "og:description",
        content:
          "The org chart doesn't cover every job. Meet the founders behind Veep and the operating model bringing top-firm firepower to independent businesses and lean funds.",
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
    title: "Start with the outcome",
    body: "Agree on what needs to be true on the other side before choosing an engagement shape or assembling a team.",
  },
  {
    title: "Experience has to translate",
    body: "A résumé earns a look. The real test is whether the operator fits this business, this stage, and this exact job.",
  },
  {
    title: "Ownership includes the finish",
    body: "Recommendations do not move enterprise value. We step into live execution and hand off working systems your team can run.",
  },
  {
    title: "Capabilities should compound",
    body: "Every mandate leaves behind sharper numbers, stronger commercial discipline, and institutional leverage for the next stage.",
  },
];

const founders: readonly { name: string; role: string; bio: string }[] = [
  {
    name: "Dave Garcia",
    role: "Co-Founder",
    bio: "Launched products, led pivots, landed exits. Now helping founders move faster with Veep.",
  },
  {
    name: "Jian Yang",
    role: "Co-Founder",
    bio: "Raised big, scaled fast, exited right. Now helping founders do the same, smarter.",
  },
  {
    name: "Mark Newhouse",
    role: "Co-Founder",
    bio: "Built brands, transformed orgs, sold startups. Now building alongside founders at Veep.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Veep"
        title="The org chart doesn't cover every job."
        sub="In an AI-powered business world, the mix between full-time employees, senior partners, and automated workflows is shifting permanently. Veep enables organizations to be as responsive as software."
        secondaryLabel="See how it works"
        secondaryTo="/"
        secondaryHash="how"
      />

      {/* Problem / Meet Veep */}
      <section className="bg-surface-raised border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-28 space-y-10 md:space-y-14">
          {[
            {
              eyebrow: "The gap",
              body: "Every company exists in three versions at once: the business running today, the business it can become, and the business an investor, lender, or buyer will underwrite. Capable teams are consumed by the first. Static org charts and slow hiring cycles leave the second and third exposed.",
            },
            {
              eyebrow: "Meet Veep",
              body: "Top firms invest more than capital. They deploy senior operators, playbooks, and technology to make companies stronger and more valuable. Veep puts that same firepower behind independent businesses and lean funds to grow revenue, expand margins, and withstand scrutiny.",
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
                Good judgment shows up in the work.
              </h2>
              <p className="text-stone text-base leading-relaxed max-w-md">
                Software and agents are absorbing routine execution. Competitive advantage now belongs to human judgment, orchestration, and senior operators trusted to lead.
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
              Built by founders and executives who have raised capital, led pivots, managed integrations, and carried companies to exit from the inside.
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
        headline={<>Bring us the job.</>}
        sub="Tell us what needs to move next. We'll clarify the outcome, recommend the right structure, and scope the mandate within 72 hours."
        primary="contact"
      />
    </>
  );
}
