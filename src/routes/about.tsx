import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Veep" },
      {
        name: "description",
        content:
          "Meet the founders behind Veep and the operating principles that shape every engagement — a small roster of senior operators who embed, build, and deliver.",
      },
      { property: "og:title", content: "About Veep — Who we are and why we built it" },
      {
        property: "og:description",
        content:
          "Born from the inside. Built for what's next. Meet the founders and principles behind Veep's senior operator model.",
      },
      { property: "og:url", content: "https://www.veep.work/about" },
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/about" }],
  }),
  component: Page,
});

const principles: readonly { title: string; body: string }[] = [
  {
    title: "Onboarded in under 10 days",
    body: "From intro call to embedded operator, measured in days — not the months a retained search takes.",
  },
  {
    title: "Save 40–80% vs. firms or full-time hires",
    body: "Senior seat coverage without the retained search fee or the fully-loaded C-suite comp.",
  },
  {
    title: "Flexible terms",
    body: "Scoped to the initiative, not to a five-year plan.",
  },
  {
    title: "30-day fit guarantee",
    body: "30 days to prove it. If the operator is not right, we swap them or you walk.",
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
        title="Born from the inside. Built for what's next."
        sub="After decades inside high-growth startups and large institutions, we kept seeing the same pattern: critical work slowed down, ownership got blurry, and the default answer was to add more headcount. Veep was built for a different path."
        secondaryLabel="See how it works"
        secondaryTo="/how-it-works"
      />

      {/* Problem / Meet Veep */}
      <section className="bg-surface-raised border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 space-y-14">
          {[
            {
              eyebrow: "The problem",
              body: "Operators felt stuck inside bloated orgs. Companies struggled to find senior talent that could lead fast and deliver with focus. The market rewarded process over ownership.",
            },
            {
              eyebrow: "Meet Veep",
              body: "Companies get flexible, high-impact operators who own outcomes. Operators get the freedom and focus to lead. Matched in 72 hours. Deployed in under 10 days.",
            },
          ].map((row) => (
            <div
              key={row.eyebrow}
              className="grid lg:grid-cols-12 gap-8 lg:gap-14 border-t border-white/10 pt-14 first:border-t-0 first:pt-0"
            >
              <div className="lg:col-span-4">
                <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
                  {row.eyebrow}
                </div>
              </div>
              <p className="lg:col-span-8 text-2xl md:text-3xl text-cream leading-[1.2] tracking-tight text-balance">
                {row.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4 space-y-5">
              <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
                What we believe
              </div>
              <h2 className="text-3xl md:text-4xl text-cream leading-[1.1] tracking-tight allow-wrap">
                Built the hard way. Rebuilt the smart way.
              </h2>
              <p className="text-cream/80 text-sm leading-relaxed max-w-md">
                Decades of lessons, one roster. The future belongs to leaner
                teams, faster decisions, and hands-on operators trusted to lead.
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
                    <p className="mt-2 text-cream/80 text-sm leading-relaxed">
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl space-y-4">
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
              Founding team
            </div>
            <h2 className="text-3xl md:text-4xl text-cream leading-[1.1] tracking-tight allow-wrap">
              Founders first. Operators always.
            </h2>
            <p className="text-cream/80 text-sm leading-relaxed">
              A founding team shaped by firsthand experience building, scaling,
              and leading from inside.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-10 md:gap-8">
            {founders.map((f) => (
              <div key={f.name} className="border-t border-white/10 pt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-cream/70">
                  {f.role}
                </div>
                <div className="mt-3 text-2xl text-cream tracking-tight">
                  {f.name}
                </div>
                <p className="mt-3 text-cream/80 text-sm leading-relaxed">
                  {f.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA
        headline={<>Your next big move starts here.</>}
        sub="Book a call to explore how Veep can help. If it's a fit, we'll scope the engagement and match you with a Veep within 72 hours."
      />
    </>
  );
}
