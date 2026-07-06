import { createFileRoute, Link } from "@tanstack/react-router";
import { LogoWall } from "@/components/site/LogoWall";
import { AudienceTabs } from "@/components/site/AudienceTabs";
import { CompareTable } from "@/components/site/CompareTable";
import { TriggerBento } from "@/components/site/TriggerBento";
import { Testimonials } from "@/components/site/Testimonials";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Eyebrow, Section } from "@/components/site/primitives";
import { ArrowRight, Clock, Check, Users, Handshake } from "lucide-react";

const faqs = [
  {
    q: "How fast can a Veep operator start?",
    a: "Most engagements begin in under 10 days from the discovery call. Interim coverage can begin in as little as 5 days when the trigger is urgent.",
  },
  {
    q: "How much does a fractional executive cost?",
    a: "Fractional C-suite engagements run $12k–$40k per month. Interim coverage runs $35k–$90k per month. Sprint engagements are scoped per outcome. Advisory retainers start at $5k per month.",
  },
  {
    q: "How is Veep different from a consultant?",
    a: "A consultant recommends. A Veep operator owns. Our operators step into your business as the accountable executive for the outcome — not as an outside advisor writing a deck.",
  },
  {
    q: "How is Veep different from an executive search firm?",
    a: "Search firms take 4–6 months to place a permanent hire. Veep places a senior operator in the seat in under 10 days — so the work moves now, and the permanent search runs in parallel without pressure.",
  },
  {
    q: "What if it isn't a fit?",
    a: "Every engagement carries a 30-day fit guarantee. If the operator isn't right, we swap them or you walk with no fee owed for the remaining term.",
  },
  {
    q: "Who is Veep for?",
    a: "Series A–C founders and CEOs, PE and family-office portfolio companies, and holdcos that need senior executive capacity — CFO, COO, CRO, or CTO — without committing to a full-time hire.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fractional & Interim Executives in Under 10 Days | Veep" },
      {
        name: "description",
        content:
          "Veep places senior fractional and interim executives — CFO, COO, CRO, CTO — inside your company in under 10 days. Operator-led. 30-day fit guarantee.",
      },
      { property: "og:title", content: "Fractional & Interim Executives in Under 10 Days | Veep" },
      {
        property: "og:description",
        content:
          "Senior operators who own the outcome — not consultants who recommend it. Placed in under 10 days. 30-day fit guarantee.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="bg-background text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-t border-white/8 pt-5">
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">[01]</span>
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">
              / VEEP · FRACTIONAL &amp; INTERIM EXECUTIVES
            </span>
          </div>
          <div className="pt-14 md:pt-20 pb-16 md:pb-20">
            <div className="max-w-4xl">
              <Eyebrow>Operator-led · 30-day fit guarantee</Eyebrow>
              <h1 className="mt-8 text-5xl md:text-7xl xl:text-[84px] leading-[1.0] text-cream tracking-tight">
                Fractional and interim executives who{" "}
                <span className="text-stone">own the outcome</span> —
                <br className="hidden md:block" /> in place in{" "}
                <span className="text-accent-gold">under 10 days</span>.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-stone max-w-2xl leading-relaxed">
                For founders, CEOs, and PE portfolios who need a real CFO, COO, CRO, or
                CTO now — without a six-month search, a full-time salary, or a
                consultant's recommendations.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-ink hover:opacity-90 transition inline-flex items-center gap-2"
                >
                  Book a discovery call <ArrowRight size={16} />
                </Link>
                <a
                  href="#how-it-works"
                  className="rounded-full border border-cream/20 px-6 py-3.5 text-sm font-medium text-cream hover:bg-cream/10 transition"
                >
                  See how it works
                </a>
              </div>
            </div>
          </div>

          {/* Proof strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-y border-white/8 py-8 mb-8">
            {[
              { k: "$1B+", v: "capital raised" },
              { k: "$3B+", v: "revenue created" },
              { k: "$2B+", v: "costs saved" },
              { k: "20+", v: "exits" },
            ].map((s) => (
              <div key={s.k}>
                <div className="text-3xl md:text-4xl text-cream tracking-tight">{s.k}</div>
                <div className="mt-1 font-mono text-[11px] tracking-widest uppercase text-stone-soft">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoWall />

      {/* CASE STUDIES */}
      <section className="bg-background text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-t border-white/8 pt-5">
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">[1.5]</span>
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">/ RECENT ENGAGEMENTS</span>
          </div>
          <div className="py-20 md:py-28">
            <div className="max-w-2xl">
              <Eyebrow>Anonymized case studies</Eyebrow>
              <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-cream tracking-tight">
                What operators unlock in the first 90 days.
              </h2>
            </div>
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {[
                {
                  tag: "Series B SaaS · Fractional CFO",
                  trigger: "Board lost confidence in the finance function 60 days before a bridge round.",
                  work: "Rebuilt the model, ran diligence, negotiated terms.",
                  outcome: "Bridge closed in 42 days at target valuation.",
                  metric: "$18M raised",
                },
                {
                  tag: "PE portco · Interim COO",
                  trigger: "COO exited two months after acquisition. Integration stalled across three sites.",
                  work: "Held the seat, stabilized ops, ran the search in parallel.",
                  outcome: "Permanent COO hired at month five. EBITDA +14%.",
                  metric: "$6.2M annualized savings",
                },
                {
                  tag: "Founder-led · Sprint",
                  trigger: "GTM stalled at $8M ARR. Founder still owned every deal above $50k.",
                  work: "Rebuilt pricing, hired two AEs, installed forecast cadence.",
                  outcome: "Pipeline coverage 3.1x within 90 days. Founder off deals under $250k.",
                  metric: "+62% Q/Q pipeline",
                },
              ].map((c) => (
                <div key={c.tag} className="rounded-3xl border border-white/8 bg-card p-6 flex flex-col">
                  <span className="font-mono text-[11px] tracking-widest uppercase text-accent-gold">{c.tag}</span>
                  <p className="mt-5 text-sm text-stone leading-relaxed"><span className="text-cream">Trigger.</span> {c.trigger}</p>
                  <p className="mt-3 text-sm text-stone leading-relaxed"><span className="text-cream">Work.</span> {c.work}</p>
                  <p className="mt-3 text-sm text-stone leading-relaxed"><span className="text-cream">Outcome.</span> <strong className="text-cream font-medium">{c.outcome}</strong></p>
                  <div className="mt-6 pt-5 border-t border-white/8 text-2xl text-cream tracking-tight">{c.metric}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs font-mono uppercase tracking-widest text-stone-soft">
              / Client names withheld under NDA. Full references available on discovery call.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-background text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-t border-white/8 pt-5">
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">[02]</span>
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">/ HOW IT WORKS</span>
          </div>
          <div className="py-20 md:py-28">
            <div className="max-w-2xl">
              <Eyebrow>How Veep works</Eyebrow>
              <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-cream tracking-tight">
                From call to operator in the seat — in under 10 days.
              </h2>
            </div>
            <div className="mt-14 grid md:grid-cols-4 gap-6">
              {[
                {
                  n: "01",
                  icon: Clock,
                  t: "Diagnose",
                  d: "30-minute call to classify the trigger, the urgency, and the outcome that needs an owner.",
                },
                {
                  n: "02",
                  icon: Users,
                  t: "Match",
                  d: "We shortlist 1–2 senior operators from the bench — matched to the outcome, not a title.",
                },
                {
                  n: "03",
                  icon: Check,
                  t: "Deploy in <10 days",
                  d: "Contracts, onboarding, and access complete inside 10 days. Operator starts owning the outcome.",
                },
                {
                  n: "04",
                  icon: Handshake,
                  t: "Clean handoff",
                  d: "When the outcome is delivered or a permanent hire lands, we hand off — with documentation, not dependency.",
                },
              ].map((s) => (
                <div key={s.n} className="rounded-3xl border border-white/8 bg-card p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-widest text-stone-soft">{s.n}</span>
                    <s.icon size={16} className="text-accent-gold" />
                  </div>
                  <div className="mt-6 text-xl text-cream tracking-tight">{s.t}</div>
                  <p className="mt-3 text-sm text-stone leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section index={3} category="How Veep engages"><AudienceTabs /></Section>

      {/* WHICH MODEL FITS — pricing tease */}
      <section className="bg-background text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-t border-white/8 pt-5">
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">[04]</span>
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">/ WHICH MODEL FITS</span>
          </div>
          <div className="py-20 md:py-28">
            <div className="max-w-2xl">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-cream tracking-tight">
                Priced to the scope. Not the hour.
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-4 gap-4">
              {[
                { t: "Advisory", p: "$5k–$12.5k / mo", d: "Executive judgment for a founder or CEO." },
                { t: "Fractional", p: "$12k–$40k / mo", d: "A senior operator runs the function on cadence." },
                { t: "Interim", p: "$35k–$90k / mo", d: "Full-seat ownership while the search runs." },
                { t: "Sprint", p: "Scoped / outcome", d: "One critical initiative, clear endpoint." },
              ].map((m) => (
                <div key={m.t} className="rounded-3xl border border-white/8 bg-card p-6">
                  <Eyebrow>{m.t}</Eyebrow>
                  <div className="mt-4 text-2xl text-cream tracking-tight">{m.p}</div>
                  <p className="mt-3 text-sm text-stone leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/pricing" className="text-sm text-cream underline underline-offset-4 hover:text-accent-gold">
                See full pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section index={5} category="How Veep is different" tone="light"><CompareTable /></Section>

      <Section index={6} category="Pivotal moments" tone="muted"><TriggerBento /></Section>

      <Section index={7} category="What operators unlock"><Testimonials /></Section>

      {/* FAQ */}
      <section className="bg-background text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-t border-white/8 pt-5">
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">[08]</span>
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">/ FAQ</span>
          </div>
          <div className="py-20 md:py-28 grid md:grid-cols-3 gap-12">
            <div>
              <Eyebrow>Common questions</Eyebrow>
              <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-cream tracking-tight">
                Objections we hear — and answer.
              </h2>
              <p className="mt-6 text-stone">
                More on the{" "}
                <Link to="/faq" className="underline underline-offset-4 hover:text-accent-gold">
                  full FAQ
                </Link>
                .
              </p>
            </div>
            <div className="md:col-span-2 divide-y divide-white/8 border-y border-white/8">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <div className="text-lg text-cream tracking-tight">{f.q}</div>
                  <p className="mt-2 text-stone leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterCTA
        headline="What critical initiative doesn't have an owner right now?"
        sub="Book a 30-minute call. If we can't match an operator in 10 days, don't proceed. If it isn't working in 30, walk — no fee owed."
      />
    </>
  );
}
