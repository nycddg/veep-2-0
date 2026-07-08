import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import { LogoWall } from "@/components/site/LogoWall";
import { Testimonials } from "@/components/site/Testimonials";
import { OperatorProofCard } from "@/components/site/OperatorProofCard";
import { EngagementTile } from "@/components/site/EngagementTile";
import { StepFlow } from "@/components/site/StepFlow";
import { TrustChip } from "@/components/site/TrustChip";
import { ObjectionList } from "@/components/site/ObjectionList";
import { FooterCTA } from "@/components/site/FooterCTA";

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

const heroOperators = [
  { name: "Jian Yang", role: "Senior Finance Operator", chips: ["Ex-Industrious", "Real Estate"], tilt: -2, translateY: 16 },
  { name: "Vanessa Kwan", role: "Senior Finance Operator", chips: ["Ex-Goldman", "Consumer"], tilt: 3, translateY: -32 },
  { name: "Kostja Mirkovic", role: "Senior GTM Operator", chips: ["Ex-LinkedIn", "B2B SaaS"], tilt: -4, translateY: 48 },
  { name: "Laura Merling", role: "Senior Operations Operator", chips: ["Ex-Google", "Mobility"], tilt: 2, translateY: 0 },
];

const spotlightOperators = [
  {
    name: "Jian Yang",
    role: "Senior Finance Operator",
    priorSeat: "Former VP Finance, Industrious (acq. by CBRE)",
    outcomes: [
      "Led $80M Series C readiness",
      "Built FP&A for 40+ locations",
      "Ran diligence through acquisition",
    ],
    chips: ["Real Estate", "Consumer", "M&A"],
  },
  {
    name: "Vanessa Kwan",
    role: "Senior Finance Operator",
    priorSeat: "Former CFO, DTC brand (Ex-Goldman Sachs)",
    outcomes: [
      "Raised $45M across Series A–C",
      "Improved gross margin +12 pts",
      "Owned board reporting cadence",
    ],
    chips: ["Consumer", "DTC", "Fundraising"],
  },
  {
    name: "Kostja Mirkovic",
    role: "Senior GTM Operator",
    priorSeat: "Former Head of Sales, LinkedIn Talent Solutions",
    outcomes: [
      "Scaled ARR from $8M → $32M",
      "Built enterprise motion from zero",
      "Rebuilt comp + territory model",
    ],
    chips: ["B2B SaaS", "Enterprise", "GTM Reset"],
  },
  {
    name: "Laura Merling",
    role: "Senior Operations Operator",
    priorSeat: "Former COO, mobility startup (Ex-Google)",
    outcomes: [
      "Cut ops cost per unit by 28%",
      "Stood up 3 new markets in 6 mo",
      "Hired + onboarded full ops org",
    ],
    chips: ["Mobility", "Operations", "Scaling"],
  },
];

const problems = [
  {
    t: "The work is critical — and no one clearly owns it.",
    d: "A fundraise, GTM reset, operating issue, margin problem, or leadership gap keeps coming back to the founder. The team is busy, but the priority is still stuck.",
  },
  {
    t: "The hire can come later. The work cannot.",
    d: "A full-time executive may be the right answer eventually. But the search could take months, the role may still be undefined, and the business needs movement now.",
  },
  {
    t: "The founder is still in the middle.",
    d: "Sales decisions, finance questions, operational escalations, people issues, and strategic initiatives keep landing on the CEO's desk.",
  },
  {
    t: "More advice is not enough.",
    d: "You do not need another deck, another tool, or a list of candidates to sort through. You need someone senior to step in, take responsibility, and move the work forward.",
  },
];

const alternatives = [
  { t: "Retained search", d: "Months to hire. Permanent commitment. Wrong-hire risk lands on you." },
  { t: "Consulting firms", d: "Recommendations without ownership. The work still lands back on your team." },
  { t: "Marketplaces and freelancers", d: "Profiles to browse. Variable quality. More decisions for the founder." },
];

const benefits = [
  { t: "Own the work", d: "Operators step in to take responsibility for critical work, not advise from the sidelines." },
  { t: "Deploy in under 10 days", d: "Shortlist in 72 hours. Onboarded and moving the work inside 10 days." },
  { t: "Senior-only roster", d: "150+ vetted senior operators across finance, GTM, operations, product, people, technology, and strategy." },
  { t: "No permanent commitment", d: "Get senior ownership before the full-time hire is clear, affordable, available, or necessary." },
  { t: "Clean handoff", d: "When the work lands or a permanent hire arrives, you get documentation, context, and continuity." },
  { t: "30-day fit guarantee", d: "If the operator is not right, we swap them or you walk. No fee owed for the remaining term." },
];

const engagements = [
  {
    name: "Advisory",
    price: "From $3.5k / mo",
    bestWhen: "Senior judgment for high-stakes decisions — board prep, fundraising, transactions, executive issues, and strategic tradeoffs.",
    to: "/pricing" as const,
  },
  {
    name: "Sprint",
    price: "From $15k",
    bestWhen: "One urgent priority with a clear owner and endpoint — fundraise readiness, GTM reset, margin improvement, operating cadence, or transaction prep.",
    to: "/pricing" as const,
  },
  {
    name: "Operator",
    price: "From $15k / mo",
    bestWhen: "Ongoing senior ownership without a permanent executive hire. Best when a function, initiative, or leadership gap needs consistent operating support.",
    to: "/pricing" as const,
    featured: true,
  },
  {
    name: "Pod",
    price: "From $30k / mo",
    bestWhen: "A lead operator plus specialist support for cross-functional work — GTM + RevOps, finance + operations, AI transformation, new market launch, or operating reset.",
    to: "/pricing" as const,
  },
];

const differentiators = [
  {
    dim: "Time to start",
    veep: "Shortlist in 72 hours, deployed in under 10 days",
    old: "Months to hire, weeks to scope, or endless profile browsing",
  },
  {
    dim: "Ownership",
    veep: "Senior operator owns the work",
    old: "Recommendations, candidates, tools, or hourly help",
  },
  {
    dim: "Cost",
    veep: "Priced to scope and level of support",
    old: "Search fees plus salary, or large consulting engagements",
  },
  {
    dim: "Seniority",
    veep: "Vetted senior operators only",
    old: "Variable — junior consultants, unknown freelancers, or mismatched candidates",
  },
  {
    dim: "Exit",
    veep: "Clean handoff with documentation",
    old: "Deck delivered, search continues, or dependency grows",
  },
  {
    dim: "Risk",
    veep: "30-day fit guarantee — swap or walk",
    old: "You own the miss",
  },
];

const cases = [
  {
    tag: "Series B SaaS · Finance Sprint",
    trigger: "Board confidence in finance slipped 60 days before a bridge round.",
    outcome: "Forecast rebuilt, board materials tightened, and bridge closed in 42 days.",
    metric: "$18M raised",
  },
  {
    tag: "PE portco · Operations Operator",
    trigger: "COO exited two months after acquisition. Integration stalled.",
    outcome: "Operating cadence installed, integration restarted, and permanent COO hired at month five.",
    metric: "$6.2M annualized savings",
  },
  {
    tag: "Founder-led · GTM Sprint",
    trigger: "GTM stalled at $8M ARR. Founder still owned every strategic deal.",
    outcome: "Sales motion rebuilt and pipeline coverage reached 3.1x within 90 days.",
    metric: "+62% Q/Q pipeline",
  },
];

const faqs = [
  {
    q: "What is a Veep operator?",
    a: "A Veep operator is a vetted senior operator who steps into your business to own critical work before a full-time executive hire makes sense. Depending on the need, that operator may be a CFO, COO, CRO, CMO, CTO, product leader, people leader, chief of staff, or functional expert.",
  },
  {
    q: "How fast can a Veep operator start?",
    a: "Shortlist in 72 hours. Operator deployed in under 10 days. Urgent interim or leadership-gap coverage can move faster when needed.",
  },
  {
    q: "How much does Veep cost?",
    a: "Advisory starts around $3.5k/month. Sprints start around $15k. Operators start around $15k/month. Pods start around $30k/month. Operator-in-the-Loop engagements start around $20k/month. Every engagement is scoped around the work.",
  },
  {
    q: "How is Veep different from a consulting firm?",
    a: "A consultant recommends. A Veep operator owns. Our operators step into the work, set the rhythm, build the materials, make decisions with the team, and move the priority forward.",
  },
  {
    q: "How is Veep different from executive search?",
    a: "Search is for permanent hiring. Veep is for critical work that needs senior ownership before the full-time hire makes sense. The work moves now, while the permanent hiring decision stays open.",
  },
  {
    q: "Who is Veep for?",
    a: "Veep is built for founder-led, owner-led, and investor-backed companies with real revenue, real teams, and growing complexity. Most clients are doing $5M–$150M in revenue, though the right fit depends more on the work than the exact company size.",
  },
  {
    q: "What if it is not a fit?",
    a: "Every engagement carries a 30-day fit guarantee. If the operator is not right, we swap them or you walk with no fee owed for the remaining term.",
  },
  {
    q: "Where does Veep operate?",
    a: "Veep operators work remotely across North America and Europe, with on-site availability for key moments such as board meetings, offsites, integration weeks, and major operating milestones.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Senior operator placement",
  provider: { "@type": "Organization", name: "Veep" },
  areaServed: ["North America", "Europe"],
  description:
    "Veep places vetted senior operators — CFOs, COOs, CROs, CMOs, CTOs, product, people, and functional leaders — inside founder-led companies to own critical work in under 10 days.",
  offers: [
    { "@type": "Offer", name: "Advisory", priceSpecification: { "@type": "PriceSpecification", price: "3500", priceCurrency: "USD" } },
    { "@type": "Offer", name: "Sprint", priceSpecification: { "@type": "PriceSpecification", price: "15000", priceCurrency: "USD" } },
    { "@type": "Offer", name: "Operator", priceSpecification: { "@type": "PriceSpecification", price: "15000", priceCurrency: "USD" } },
    { "@type": "Offer", name: "Pod", priceSpecification: { "@type": "PriceSpecification", price: "30000", priceCurrency: "USD" } },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Route
// ─────────────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Work Needs an Owner — Veep" },
      {
        name: "description",
        content:
          "Veep helps founder-led companies bring in vetted senior operators to own critical work — matched in 72 hours, deployed in under 10 days. 30-day fit guarantee.",
      },
      { property: "og:title", content: "The Work Needs an Owner — Veep" },
      {
        property: "og:description",
        content:
          "Senior operators to own critical work before the full-time executive hire makes sense — matched in 72 hours, deployed in under 10 days.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: Index,
});

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

function InlineCTA({ label = "Book intro call" }: { label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream/90 transition inline-flex items-center gap-2 shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)]"
      >
        {label} <ArrowRight size={16} />
      </a>
      <span className="text-xs text-stone-soft tracking-wide">
        30-minute call · Reply within 1 business day · 30-day fit guarantee
      </span>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </div>
  );
}

function Index() {
  return (
    <>
      {/* 1 — HERO */}
      <section id="overview" className="relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-accent/10 blur-[140px] rounded-full max-w-3xl mx-auto pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-9">
              <TrustChip label="72-hour match · 10-day deploy · 30-day fit guarantee" />

              <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.02] text-cream tracking-tight">
                The work{" "}
                <span className="text-accent">needs an owner.</span>
              </h1>

              <p className="text-lg md:text-xl text-stone max-w-xl leading-relaxed">
                Veep helps founder-led companies bring in vetted senior operators to own
                critical work before the full-time executive hire makes sense.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cream px-8 py-4 text-sm font-medium text-ink hover:bg-cream/90 transition-all inline-flex items-center gap-2 shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)]"
                >
                  Book intro call <ArrowRight size={16} />
                </a>
                <Link
                  to="/"
                  hash="how"
                  className="text-sm text-cream/80 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60 transition pb-1"
                >
                  See how it works
                </Link>
              </div>
            </div>

            <div className="relative min-h-[520px] flex items-center justify-center">
              <div className="absolute inset-0 bg-accent/10 blur-[120px] rounded-full" aria-hidden />
              <div className="relative grid grid-cols-2 gap-4 w-full max-w-lg">
                {heroOperators.map((op) => (
                  <OperatorProofCard key={op.name} {...op} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoWall />

      {/* 2 — WHAT IS VEEP (extractable AI-search definition) */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <SectionEyebrow>What Veep is</SectionEyebrow>
          <p className="mt-6 font-serif text-2xl md:text-3xl text-cream tracking-tight leading-snug">
            Veep brings senior ownership to work that cannot wait — helping founder-led
            companies deploy vetted operators across finance, GTM, operations, product,
            people, fundraising, and strategic initiatives.
          </p>
          <p className="mt-4 text-sm text-stone">
            Built for companies with real revenue, real teams, and growing complexity — before
            the full-time executive hire makes sense.
          </p>
        </div>
      </section>

      {/* 3 — PROBLEM */}
      <section id="problem" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <SectionEyebrow>The moment you're in</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Your business is too important{" "}
              <span className="text-accent">for ownerless work.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.t} className="glass-card rounded-3xl p-7">
                <h3 className="font-serif text-xl text-cream tracking-tight leading-snug">{p.t}</h3>
                <p className="mt-4 text-sm text-stone leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {alternatives.map((a) => (
              <div key={a.t} className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-stone-soft">Instead of</div>
                <div className="mt-3 font-serif text-xl text-stone tracking-tight">{a.t}</div>
                <p className="mt-3 text-sm text-stone-soft leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — SOLUTION */}
      <section id="solution" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionEyebrow>What we do</SectionEyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
                Senior operators to own work{" "}
                <span className="text-accent">that cannot wait.</span>
              </h2>
              <p className="mt-8 text-stone text-lg leading-relaxed">
                Tell us what needs movement: a fundraise, GTM reset, margin issue, leadership
                gap, operating problem, recurring workflow, or strategic decision. Veep helps
                define the work, recommends the right level of senior support, and matches the
                operator or team to the job — Advisory, Sprint, Operator, Pod, or
                Operator-in-the-Loop capacity.
              </p>
              <p className="mt-4 text-stone text-lg leading-relaxed">
                When the work lands or the permanent hire arrives, we hand off — with
                documentation, not dependency.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-10 space-y-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-accent">The Veep model</div>
              {[
                ["Start with the work, not the title", "We diagnose the priority, urgency, and outcome before deciding whether the answer is advisory, a sprint, an operator, a pod, or recurring operating capacity."],
                ["Senior only", "Every operator is a vetted senior leader — former founders, CFOs, COOs, CROs, CMOs, CTOs, product leaders, people leaders, and chiefs of staff."],
                ["Priced to scope", "Advisory, Sprint, Operator, Pod, or Operator in the Loop — structured around the work, not hourly browsing."],
                ["Guaranteed fit", "30 days to prove it. If the operator is not right, we swap them or you walk."],
              ].map(([t, d]) => (
                <div key={t} className="border-t border-white/10 pt-5 first:border-0 first:pt-0">
                  <div className="font-serif text-xl text-cream tracking-tight">{t}</div>
                  <p className="mt-2 text-sm text-stone leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — BENEFITS */}
      {/* 4.5 — OPERATORS SPOTLIGHT */}
      <section id="operators" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow>Operators</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Operators who've been in the seat —{" "}
              <span className="text-accent">and delivered.</span>
            </h2>
            <p className="mt-8 text-stone text-lg leading-relaxed">
              Every Veep operator has previously held the role they're deployed into, at
              a comparable-stage company, with outcomes we can reference. No juniors, no
              generalists, no career consultants.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {spotlightOperators.map((op) => (
              <OperatorProofCard
                key={op.name}
                name={op.name}
                role={op.role}
                priorSeat={op.priorSeat}
                outcomes={op.outcomes}
                chips={op.chips}
              />
            ))}
          </div>
          <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/10 pt-8">
            <p className="text-sm text-stone-soft">
              150+ vetted senior operators · avg. 18 yrs experience · every operator has
              held the seat before.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60 transition"
            >
              Meet operators for your work <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 5 — BENEFITS */}
      <section id="benefits" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow>What you get</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Executive capacity —{" "}
              <span className="text-accent">before the executive hire.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={b.t} className="glass-card rounded-3xl p-7">
                <div className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  0{i + 1}
                </div>
                <div className="mt-5 font-serif text-2xl text-cream tracking-tight leading-tight">
                  {b.t}
                </div>
                <p className="mt-3 text-sm text-stone leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <InlineCTA />
          </div>
        </div>
      </section>

      {/* 6 — OFFER / ENGAGEMENTS */}
      <section id="offer" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <SectionEyebrow>Engagements</SectionEyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
                Choose the right level of support{" "}
                <span className="text-accent">for the work.</span>
              </h2>
            </div>
            <Link
              to="/pricing"
              className="text-sm text-cream/80 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60 transition pb-1"
            >
              See full pricing →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagements.map((e) => (
              <EngagementTile key={e.name} {...e} />
            ))}
          </div>
        </div>
      </section>

      {/* 7 — HOW IT WORKS */}
      <section id="how" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow>How it works</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              From bottleneck to operator in the work —{" "}
              <span className="text-accent">in under 10 days.</span>
            </h2>
          </div>
          <StepFlow />
        </div>
      </section>

      {/* 8 — PROOF */}
      <section id="proof" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <SectionEyebrow>Proof</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              What operators can unlock in the{" "}
              <span className="text-accent">first 90 days.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {cases.map((c) => (
              <div key={c.tag} className="glass-card rounded-3xl p-7 flex flex-col">
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent">
                  {c.tag}
                </span>
                <p className="mt-6 text-sm text-stone leading-relaxed">
                  <span className="text-cream">Trigger. </span>{c.trigger}
                </p>
                <p className="mt-3 text-sm text-stone leading-relaxed">
                  <span className="text-cream">Outcome. </span>{c.outcome}
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 font-serif text-2xl text-cream tracking-tight">
                  {c.metric}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-10 border-y border-white/10">
            {[
              { k: "150+", v: "vetted operators" },
              { k: "72h", v: "to shortlist" },
              { k: "<10d", v: "to deploy" },
              { k: "30d", v: "fit guarantee" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-mono text-4xl md:text-5xl text-cream tracking-tight" style={{ fontFeatureSettings: '"zero", "ss01"' }}>{s.k}</div>
                <div className="mt-2 text-[11px] font-medium tracking-[0.2em] uppercase text-stone-soft">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <Testimonials />
          </div>

          <div className="mt-16">
            <InlineCTA />
          </div>
        </div>
      </section>

      {/* 9 — DIFFERENTIATION */}
      <section id="vs" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow>Why Veep</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              A better way to get{" "}
              <span className="text-accent">senior work owned.</span>
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 overflow-hidden divide-y divide-white/10">
            <div className="hidden md:grid grid-cols-3 bg-white/[0.03]">
              <div className="p-5 text-[10px] uppercase tracking-[0.2em] text-stone-soft">Dimension</div>
              <div className="p-5 text-[10px] uppercase tracking-[0.2em] text-stone-soft">The old way</div>
              <div className="p-5 text-[10px] uppercase tracking-[0.2em] text-accent">Veep</div>
            </div>
            {differentiators.map((r) => (
              <div key={r.dim} className="grid md:grid-cols-3 gap-2 md:gap-0 p-5 md:p-0">
                <div className="md:p-5 font-mono text-[11px] uppercase tracking-widest text-stone-soft">
                  {r.dim}
                </div>
                <div className="md:p-5 text-sm text-stone leading-relaxed">{r.old}</div>
                <div className="md:p-5 text-sm text-cream leading-relaxed md:bg-accent/[0.04]">
                  {r.veep}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — FOR PORTFOLIOS (secondary audience band) */}
      <section id="portfolios" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-10 md:p-14 grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3 space-y-5">
              <SectionEyebrow>For PE, VC, and family-office portfolios</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-tight leading-[1.1]">
                Portfolio-wide executive capacity — ready when the work needs an owner.
              </h2>
              <p className="text-stone leading-relaxed">
                We help investors and portfolio leaders identify executive-capacity gaps, map
                operating risk, and deploy vetted senior operators when a leadership gap opens
                or a value-creation priority stalls.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col lg:items-end gap-3">
              <Link
                to="/for-portfolios"
                className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream/90 transition"
              >
                See how the roster works
              </Link>
              <Link
                to="/contact"
                search={{ intent: "audit" }}
                className="text-sm text-cream/80 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60"
              >
                Request a capacity audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — OBJECTIONS */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow>Before you book</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              The questions founders ask{" "}
              <span className="text-accent">on the first call.</span>
            </h2>
          </div>
          <ObjectionList />
          <div className="mt-14">
            <InlineCTA />
          </div>
        </div>
      </section>

      {/* 12 — FAQ */}
      <section id="faq" className="py-24 md:py-32 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Straight answers.
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="cursor-pointer flex items-start justify-between gap-6 text-cream">
                  <span className="font-serif text-xl tracking-tight">{f.q}</span>
                  <span className="text-accent text-xl leading-none pt-1 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-stone leading-relaxed text-sm max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-sm text-stone">
            More detail on the{" "}
            <Link to="/faq" className="text-cream underline underline-offset-4 decoration-white/30 hover:decoration-white/70">
              full FAQ page
            </Link>.
          </div>
        </div>
      </section>

      {/* 13 — FINAL CTA */}
      <FooterCTA />
    </>
  );
}