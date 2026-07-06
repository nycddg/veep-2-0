import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { OutcomeTile } from "@/components/site/OutcomeTile";

const triggers = [
  {
    tag: "Capital moment",
    outcomes: [
      { headline: "Close the raise", sub: "Rebuild the model, run diligence, and land term sheets.", intent: "close-the-raise" },
      { headline: "Prep for exit", sub: "Get finance, ops, and diligence packs transaction-ready.", intent: "prep-for-exit" },
    ],
  },
  {
    tag: "Growth moment",
    outcomes: [
      { headline: "Unblock GTM", sub: "Reset pricing, install forecast cadence, get founders off deals.", intent: "unblock-gtm" },
      { headline: "Ship the platform", sub: "Own the roadmap and unstick engineering velocity.", intent: "ship-the-platform" },
    ],
  },
  {
    tag: "Transition moment",
    outcomes: [
      { headline: "Cover the seat", sub: "Interim CFO / COO / CRO the day after departure.", intent: "cover-the-seat" },
      { headline: "Integrate the acquisition", sub: "Stabilize ops, unify teams, hit synergy targets post-close.", intent: "integrate-the-acquisition" },
    ],
  },
];

const matrix = [
  { trigger: "Capital raise or refinance", fit: "Fractional CFO", why: "Function ownership through diligence + close." },
  { trigger: "Executive departure, no successor", fit: "Interim seat", why: "Full ownership while the search runs." },
  { trigger: "One critical initiative, fixed endpoint", fit: "Sprint", why: "Scoped, fixed-price, clear success criteria." },
  { trigger: "Founder wants a sparring partner", fit: "Advisory", why: "Judgment on cadence, no headcount." },
  { trigger: "Post-close integration", fit: "Interim COO or Sprint", why: "Depends on whether integration is >90 days." },
];

export const Route = createFileRoute("/for-companies")({
  head: () => ({
    meta: [
      { title: "For Companies — Fill the Seat Blocking the Quarter | Veep" },
      { name: "description", content: "Series A–C founders, PE portcos, and holdcos: buy the business outcome, not the fractional executive. Matched in 72 hours, deployed in under 10 days." },
      { property: "og:title", content: "For Companies — Veep" },
      { property: "og:description", content: "The work can't wait. Neither should the leadership." },
      { property: "og:url", content: "/for-companies" },
    ],
    links: [{ rel: "canonical", href: "/for-companies" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For companies"
        title="Fill the seat"
        italic="blocking the quarter."
        sub="You have an outcome that isn't happening because no senior operator owns it. Skip the 6-month search. Skip the consulting deck. We place an accountable executive inside the business — this quarter."
      />

      {/* Outcomes by trigger */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Buy the outcome
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              What's the one thing{" "}
              <span className="italic text-stone">without an owner?</span>
            </h2>
          </div>
          <div className="space-y-14">
            {triggers.map((t) => (
              <div key={t.tag}>
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-soft mb-6">
                  {t.tag}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.outcomes.map((o) => (
                    <OutcomeTile key={o.headline} {...o} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement match matrix */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Which engagement fits
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Match the trigger to{" "}
              <span className="italic text-stone">the engagement.</span>
            </h2>
          </div>
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10 text-[10px] font-medium uppercase tracking-[0.25em] text-stone-soft">
              <div className="col-span-5">Trigger</div>
              <div className="col-span-3">Engagement</div>
              <div className="col-span-4">Why it fits</div>
            </div>
            {matrix.map((r) => (
              <div key={r.trigger} className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-white/8 last:border-b-0 items-baseline">
                <div className="col-span-12 md:col-span-5 text-cream">{r.trigger}</div>
                <div className="col-span-6 md:col-span-3 text-accent text-sm font-medium">{r.fit}</div>
                <div className="col-span-6 md:col-span-4 text-sm text-stone">{r.why}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/services"
              className="text-sm text-cream/80 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60"
            >
              See all four engagements →
            </Link>
          </div>
        </div>
      </section>

      {/* Single testimonial */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
            Founder testimonial
          </div>
          <blockquote className="mt-10 font-serif text-3xl md:text-4xl leading-[1.2] text-cream tracking-tight italic">
            "I cannot recommend this team more highly. They think, act, and engage like co-founders."
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-11 w-11 rounded-full bg-white/5 ring-1 ring-white/20 grid place-items-center text-cream text-sm">
              JK
            </div>
            <div className="text-left">
              <div className="text-sm text-cream font-medium">Jerry Kolber</div>
              <div className="text-xs text-stone">Founder & CEO, Atomic Audio</div>
            </div>
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
