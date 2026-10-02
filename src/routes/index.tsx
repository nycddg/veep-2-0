import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import heroHeadshot from "@/assets/operator-headshot.png.asset.json";
import { LogoWall } from "@/components/site/LogoWall";
import { Testimonials } from "@/components/site/Testimonials";
import { OperatorSpotlightChapter } from "@/components/site/OperatorSpotlightChapter";
import { OperatorCanvas } from "@/components/site/OperatorCanvas";
import { ClientStrip } from "@/components/site/ClientStrip";
import { EngagementTile } from "@/components/site/EngagementTile";
import { StepFlow } from "@/components/site/StepFlow";
import { Check } from "lucide-react";
import { ObjectionList } from "@/components/site/ObjectionList";
import { ProblemDiagram } from "@/components/site/ProblemDiagram";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Accordion } from "@/components/site/Accordion";
import { Reveal } from "@/components/site/Reveal";
import { ogImageMeta } from "@/lib/seo";

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

const alternatives = [
  { t: "Permanent hire", d: "The right answer for a lasting role. When the work is urgent or the role is still taking shape, you need ownership during the search." },
  { t: "Consulting firms", d: "Useful for specialist analysis and recommendations. When execution is the gap, someone also needs to lead the work inside the business." },
  { t: "Freelancers and advisors", d: "Useful for defined tasks or expert judgment. Cross-functional work also needs a lead owner to coordinate delivery and make the pieces work together." },
];

const benefits = [
  { t: "A clear owner", d: "A lead operating partner runs the workplan, coordinates delivery, and keeps the agreed priority moving." },
  { t: "Started in under 10 days", d: "Operating engagements are scoped in 72 hours and started in under 10 days." },
  { t: "Experience that fits", d: "75+ vetted senior operators, selected for the mandate, business model, and company stage." },
  { t: "Support that fits the work", d: "Start with a defined scope. Agree the next step as the work changes: continue, expand, or hand over." },
  { t: "A clean handoff", d: "Your team gets the documentation, context, and working materials needed to carry the work forward." },
  { t: "30-day fit guarantee", d: "If the operator isn't right, we swap them or you walk, with no fee owed for the remaining term." },
];

const engagements = [
  {
    name: "Advisory",
    price: "From $3k / mo",
    bestWhen: "Senior judgment for board prep, fundraise strategy, and high-stakes decisions. Your team retains execution ownership.",
    to: "/pricing" as const,
    hash: "tiers",
  },
  {
    name: "Sprint",
    price: "From $25k / scope",
    bestWhen: "One urgent priority with a defined owner and endpoint. Fundraise preparation, a GTM reset, margin work, or diligence over 4–12 weeks.",
    to: "/pricing" as const,
    hash: "tiers",
  },
  {
    name: "Operator",
    price: "From $15k / mo",
    bestWhen: "Embedded senior ownership of a function, initiative, or leadership gap. Typically 3–12 months, shaped around the work.",
    to: "/pricing" as const,
    hash: "tiers",
    featured: true,
  },
  {
    name: "Pod",
    price: "From $30k / mo",
    bestWhen: "A lead operating partner plus specialist support for work spanning functions, such as finance and operations or GTM and RevOps.",
    to: "/pricing" as const,
    hash: "tiers",
  },
];

const differentiators = [
  {
    dim: "Time to start",
    veep: "Scoped in 72 hours. Started in under 10 days.",
    clarify: "When can someone begin?",
  },
  {
    dim: "Ownership",
    veep: "A lead operating partner, with Veep overseeing scope and quality.",
    clarify: "Who runs the work day to day?",
  },
  {
    dim: "Outcomes",
    veep: "Agreed outputs and success criteria, defined in scope.",
    clarify: "What will the engagement deliver?",
  },
  {
    dim: "Cost",
    veep: "A defined engagement, priced to the work and support required.",
    clarify: "What are you paying for?",
  },
  {
    dim: "Seniority",
    veep: "Vetted senior operators selected for the mandate.",
    clarify: "Who will actually do the work?",
  },
  {
    dim: "Exit",
    veep: "A planned handoff with documentation and context.",
    clarify: "How does the work transfer?",
  },
  {
    dim: "Risk",
    veep: "30-day fit guarantee. Swap or walk.",
    clarify: "What happens if the operator isn't right?",
  },
];

const cases = [
  {
    tag: "B2B SAAS",
    role: "Operating partner: Finance",
    trigger: "The CEO was preparing for a first institutional round without a financial model, investor materials, or fundraising experience.",
    outcome: "Built a three-year model and diligence-ready CAC/LTV dashboards, and coached the CEO through investor meetings and term sheets.",
    metric: "$6M raised in 6 weeks",
    figure: "$6M",
    kicker: "Raised in 6 weeks",
  },
  {
    tag: "SOFTWARE STUDIO",
    role: "Operating partner: Growth",
    trigger: "An $8M product development studio faced inconsistent project profitability and needed a scalable approach to AI work.",
    outcome: "Standardized project scoping and staffing, built an AI GTM and delivery framework, and hired a Director of AI.",
    metric: "Project margins up 25%",
  },
  {
    tag: "PODCAST PUBLISHER",
    role: "Operating partner: Business",
    trigger: "A profitable, bootstrapped publisher with millions in revenue was preparing to raise outside capital without a financial model or growth plan.",
    outcome: "Built the first financial model, defined use of proceeds, and sourced investors representing over a third of the round.",
    metric: "35% of the round sourced",
  },
];

// Mini FAQ — non-dupes of ObjectionList ("Before you book")
const faqs = [
  {
    q: "What is a Veep operating partner?",
    a: "A vetted senior leader who takes responsibility for a defined body of work inside your business. The engagement may cover a function, a critical initiative, or a leadership gap. Veep manages scope, quality, and continuity around the work.",
  },
  {
    q: "How is Veep different from a consulting firm?",
    a: "Veep operating engagements include a named lead responsible for execution and delivery inside the business. Advisory is available when you need senior judgment and your team will carry out the work.",
  },
  {
    q: "How is Veep different from executive search?",
    a: "Executive search fills a permanent role. Veep gives current work a senior owner, including while a search is underway. The engagement can end with a documented handoff to your new hire or existing team.",
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
  serviceType: "Senior operator deployment",
  provider: { "@type": "Organization", name: "Veep" },
  areaServed: ["North America", "Europe"],
  description:
    "Veep puts a senior operating partner in charge of critical work. We define the outcome, assemble the team, and own delivery.",
  offers: [
    { "@type": "Offer", name: "Advisory", priceSpecification: { "@type": "PriceSpecification", price: "3000", priceCurrency: "USD" } },
    { "@type": "Offer", name: "Sprint", priceSpecification: { "@type": "PriceSpecification", price: "25000", priceCurrency: "USD" } },
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
      { title: "Veep: Senior Operators for Work That Can't Wait" },
      {
        name: "description",
        content:
          "Veep puts a senior operating partner in charge of the critical work your team cannot absorb. We define the outcome, assemble the team, and own delivery.",
      },
      { property: "og:title", content: "Veep: Senior Operators for Work That Can't Wait" },
      {
        property: "og:description",
        content:
          "Veep puts a senior operating partner in charge of the critical work your team cannot absorb. We define the outcome, assemble the team, and own delivery.",
      },
      { property: "og:url", content: "https://www.veep.work/" },
      { property: "og:type", content: "website" },
      ...ogImageMeta(),
    ],
    links: [
      { rel: "canonical", href: "https://www.veep.work/" },
      {
        rel: "preload",
        as: "image",
        href: heroHeadshot.url,
        fetchPriority: "high",
      },
    ],
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

function InlineCTA({
  label = "Book intro call",
  mode = "book",
  centered = false,
}: {
  label?: string;
  mode?: "book" | "contact";
  /** Testimonial-section variant: centered pill, no fine print. */
  centered?: boolean;
}) {
  const className =
    "group motion-cta cta-accent rounded-[6px] whitespace-nowrap px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11";
  const pill =
    mode === "contact" ? (
      <Link to="/contact" className={className}>
        {label}
      </Link>
    ) : (
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  if (centered) {
    return <div className="mt-6 flex justify-center">{pill}</div>;
  }
  return (
    <div className="flex flex-col items-start gap-4.5">
      {pill}
      <span className="text-xs text-stone-soft tracking-wide">
        30-minute intro call · Reply within 1 business day · 30-day fit guarantee
      </span>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

function CaseCard({
  c,
  featured = false,
}: {
  c: (typeof cases)[number];
  featured?: boolean;
}) {
  const pad = featured ? "p-7 md:p-8" : "p-5 sm:p-7";

  const body = (
    <>
      {featured && c.figure && c.kicker ? (
        <div className="mt-4" role="img" aria-label={c.metric}>
          <div
            aria-hidden="true"
            className="proof-figure stat-figure text-[4.125rem] md:text-[4.95rem] lg:text-[6.6rem] text-cream leading-none"
          >
            {c.figure}
          </div>
          <div
            aria-hidden="true"
            className="mt-3 font-serif font-medium text-xl md:text-2xl text-cream tracking-tight leading-snug"
          >
            {c.kicker}
          </div>
        </div>
      ) : (
        <div className="mt-4 font-serif font-medium text-xl text-cream tracking-tight leading-snug text-balance">
          {c.metric}
        </div>
      )}
      <div className="mt-4 mono-label">{c.role}</div>
      <p className="mt-4 text-sm text-stone leading-relaxed">
        <span className="text-cream">Trigger. </span>
        {c.trigger}
      </p>
      <p className="mt-3 text-sm text-stone leading-relaxed">
        <span className="text-cream">Outcome. </span>
        {c.outcome}
      </p>
    </>
  );

  return (
    <div
      className={`motion-row-wash flex h-full flex-col rounded-[6px] bg-surface-card ${pad}`}
    >
      <span className="eyebrow">{c.tag}</span>
      {featured ? (
        <div className="flex min-h-0 flex-1 flex-col justify-center">{body}</div>
      ) : (
        body
      )}
    </div>
  );
}

function Index() {
  return (
    <>
      {/* Hero */}
      <section id="overview" className="relative overflow-hidden scroll-mt-20">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 md:pt-24 pb-20 md:pb-28 flex flex-col items-center text-center">
          <h1 className="motion-fade-up font-medium text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight sm:leading-[0.98] text-cream text-balance allow-wrap break-words mb-6">
            Because a job always needs to be done.
          </h1>

          <p className="motion-fade-up motion-delay-1 text-base sm:text-lg text-stone max-w-2xl leading-relaxed mb-10">
            Veep puts a senior operating partner in charge of the critical work your team cannot absorb. We define the outcome, assemble the team, and own delivery.
          </p>

          <div className="motion-fade-up motion-delay-2 flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 mb-14 md:mb-16 text-sm text-cream/90">
            {["Senior operators", "Scoped in 72 hours", "30-day fit guarantee"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check size={18} className="text-accent" strokeWidth={2.5} />
                {t}
              </div>
            ))}
          </div>

          <div className="motion-fade-up motion-delay-3 w-full">
            <OperatorCanvas />
          </div>

          <div className="motion-fade-up motion-delay-4 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 mt-12 sm:mt-20 w-full">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group motion-cta cta-accent rounded-[6px] whitespace-nowrap px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11"
            >
              Book intro call
            </a>
            <Link
              to="/"
              hash="how"
              className="motion-link text-sm text-cream/85 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/25 hover:decoration-white/60 pb-1"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <LogoWall />

      <div className="flex flex-col">
      {/* What Veep is — after Problem on mobile */}
      <Reveal as="section" className="order-2 md:order-1">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <SectionEyebrow>MEET VEEP</SectionEyebrow>
          <p className="mt-6 font-serif text-xl sm:text-2xl md:text-3xl text-cream tracking-tight leading-snug">
            Veep is an operating partner platform for companies and funds that need more senior capacity. We take ownership of critical work across finance, growth, operations, product, and people, from preparing for a raise to rebuilding how the business runs.
          </p>
          <p className="mt-6 text-sm text-stone">
            The work gets an owner. You get an operating partner, with Veep accountable for scope, quality, and continuity.
          </p>
        </div>
      </Reveal>

      {/* Problem — before Meet Veep on mobile */}
      <Reveal as="section" id="problem" className="order-1 md:order-2 bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14 text-left">
            <SectionEyebrow>The moment you're in</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              The priority is clear. The owner isn't.
            </h2>
          </div>

          <ProblemDiagram />

          <div className="mt-20 md:mt-24 motion-hairline pt-12">
            <div className="mono-label mb-8">When the usual options leave a gap</div>
            <div className="motion-stagger grid md:grid-cols-3 gap-y-10">
              {alternatives.map((a) => (
                <div
                  key={a.t}
                  className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0 md:border-l md:border-white/10 md:pl-10 md:first:border-l-0 md:first:pl-0 md:pr-10 md:last:pr-0"
                >
                  <div className="font-serif font-medium text-xl text-cream/90 tracking-tight">{a.t}</div>
                  <p className="mt-2 text-base text-stone leading-relaxed">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      </div>

      {/* Solution */}
      <Reveal as="section" id="solution" className="border-t border-white/10 md:border-t-0 py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionEyebrow>What we do</SectionEyebrow>
              <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
                Put an owner around the work.
              </h2>
              <p className="mt-8 text-stone text-base md:text-lg leading-relaxed">
                Bring us the priority: a raise to prepare for, a sales process to rebuild, a new market to enter, or a leadership gap to cover. We define the outcome, assign a lead operating partner, and assemble the support the work requires.
              </p>
              <p className="mt-4 text-stone text-base md:text-lg leading-relaxed">
                Your operator runs the work. Veep manages scope, quality, and continuity. You keep the strategic decisions and approvals, with a clear handoff when the engagement ends.
              </p>
              <p className="mt-6 eyebrow hidden md:block !text-cream">
                Critical work, owned from scope through delivery.
              </p>
            </div>
            <div className="motion-stagger divide-y divide-white/10 lg:border-l lg:border-white/10 lg:pl-14">
              <div className="eyebrow pb-6">The Veep model</div>
              {[
                ["Scope", "Define the job, the outcome, and what success looks like. Agree on the work, responsibilities, and price before delivery begins."],
                ["Assemble", "Assign a senior operating partner with relevant experience and the supporting capacity the job requires."],
                ["Own", "The lead operator runs delivery. Veep stays accountable for scope, quality, escalation, and continuity through handoff or the next agreed scope."],
                ["30-day fit guarantee", "If the operator isn't right within the first 30 days, we swap them or you walk, with no fee owed for the remaining term."],
              ].map(([t, d]) => (
                <div key={t} className="py-6 last:pb-0">
                  <div className="font-serif font-medium text-xl text-cream tracking-tight">{t}</div>
                  <p className="mt-2 text-base text-stone leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Operators + network impact — shared chapter (source of truth for
          For Funds too; see OperatorSpotlightChapter) */}
      <Reveal as="section" id="operators" className="bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <OperatorSpotlightChapter />
        </div>
      </Reveal>

      {/* Benefits */}
      <Reveal as="section" id="benefits" className="hidden md:block py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>What you get</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Senior ownership. Clear accountability.
            </h2>
          </div>
          <div className="motion-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {benefits.map((b, i) => (
              <div key={b.t} className="motion-row-wash rounded-[6px] bg-surface-card p-6 sm:p-7">
                <div className="eyebrow">
                  0{i + 1}
                </div>
                <div className="mt-3 font-serif font-medium text-xl text-cream tracking-tight leading-tight">
                  {b.t}
                </div>
                <p className="mt-2 text-base text-stone leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <InlineCTA label="Discuss the work" mode="contact" />
          </div>
        </div>
      </Reveal>

      {/* Engagements */}
      <Reveal as="section" id="offer" className="bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <div className="max-w-2xl">
              <SectionEyebrow>Engagements</SectionEyebrow>
              <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
                The right support for the job.
              </h2>
            </div>
            <Link
              to="/pricing"
              className="group motion-link inline-flex items-center gap-2 text-sm text-cream/90 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/30 hover:decoration-white/70 pb-1"
            >
              See full pricing <ArrowRight size={14} className="motion-arrow" />
            </Link>
          </div>
          <div className="motion-stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagements.map((e) => (
              <EngagementTile key={e.name} {...e} />
            ))}
          </div>
          <p className="mt-10 text-sm text-stone max-w-3xl">
            Define the work first. Choose the engagement shape together.
          </p>
        </div>
      </Reveal>

      {/* How it works */}
      <Reveal as="section" id="how" className="py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>How It Works</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              From urgent priority to owned work.
            </h2>
          </div>
          <StepFlow />
        </div>
      </Reveal>

      {/* Proof */}
      <Reveal as="section" id="proof" className="bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14 hidden md:block">
            <SectionEyebrow>Proof</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap hidden md:block">
              Outcomes delivered in 90 days or less.
            </h2>
          </div>

          <div className="motion-stagger hidden md:grid md:grid-cols-2 gap-4 md:gap-5">
            <CaseCard c={cases[0]} featured />
            <div className="flex flex-col gap-4 md:gap-5">
              <CaseCard c={cases[1]} />
              <CaseCard c={cases[2]} />
            </div>
          </div>

          <div className="motion-stagger hidden md:grid mt-12 md:mt-20 grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-10 motion-hairline-y">
            {[
              { k: "75+", v: "Vetted senior operators" },
              { k: "72h", v: "To scope" },
              { k: "<10d", v: "To start" },
              { k: "30d", v: "Fit guarantee" },
            ].map((s) => (
              <div key={s.k}>
                <div className="stat-figure text-4xl md:text-5xl text-cream">{s.k}</div>
                <div className="mt-2 mono-label font-medium">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <ClientStrip />

          <div className="md:mt-24">
            <Testimonials />
          </div>

          <div className="mt-16">
            <InlineCTA centered label="Book intro call" />
          </div>
        </div>
      </Reveal>

      {/* Why Veep */}
      <Reveal as="section" id="vs" className="hidden md:block bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>Why Veep</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Know who owns the work.
            </h2>
          </div>

          <div className="grid grid-cols-[auto_minmax(min-content,1fr)_minmax(min-content,1fr)] border-y border-white/10 divide-y divide-white/10">
            <div className="hidden md:grid md:grid-cols-subgrid md:col-span-3">
              <div className="p-5 mono-label">Dimension</div>
              <div className="p-5 mono-label">What to clarify</div>
              <div className="p-5 eyebrow">Veep</div>
            </div>
            {differentiators.map((r) => (
              <div key={r.dim} className="group grid md:grid-cols-subgrid md:col-span-3 gap-y-2 gap-x-0 p-5 md:p-0">
                <div className="md:p-5 mono-label transition-colors duration-200 group-hover:text-cream">
                  {r.dim}
                </div>
                <div className="md:p-5 text-base text-stone leading-relaxed">{r.clarify}</div>
                <div className="md:p-5 text-base text-cream leading-relaxed md:bg-accent/[0.06] light:md:bg-foreground/5 motion-row-wash">
                  {r.veep}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* For Funds */}
      <Reveal as="section" id="portfolios" className="spotlight-invert py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 md:gap-14 items-center">
            <div className="lg:col-span-3 space-y-5">
              <SectionEyebrow>FOR FUNDS</SectionEyebrow>
              <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
                Portfolio work needs an owner, too.
              </h2>
              <p className="text-base text-stone leading-relaxed">
                Add portfolio operating capacity without building a full internal team. Veep helps funds identify gaps and assign senior ownership across diligence, post-close execution, integration, leadership transitions, and exit readiness. One operating relationship, with the work scoped company by company.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col items-start lg:items-end gap-4">
              <Link
                to="/for-portfolios"
                className="motion-cta cta-accent-dark rounded-[6px] whitespace-nowrap px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11 inline-flex items-center justify-center"
              >
                Explore portfolio ops
              </Link>
              <Link
                to="/contact"
                search={{ intent: "audit" }}
                className="group motion-link inline-flex items-center gap-2 text-sm text-cream/85 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/25 hover:decoration-white/60"
              >
                Request a capacity audit <ArrowRight size={14} className="motion-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Before you book (objections) */}
      <Reveal as="section" className="py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>Before you book</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              What to know before the first call.
            </h2>
          </div>
          <ObjectionList />
          <div className="mt-14 hidden md:block">
            <InlineCTA />
          </div>
        </div>
      </Reveal>

      {/* Mini FAQ (non-dupes + link) */}
      <Reveal as="section" id="faq" className="hidden md:block bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Straight answers.
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <Accordion key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <div className="mt-8 text-sm text-stone">
            More detail on the{" "}
            <Link to="/faq" className="motion-link text-cream underline underline-offset-4 decoration-white/40 hover:decoration-white">
              full FAQ page
            </Link>.
          </div>
        </div>
      </Reveal>

      {/* Final CTA */}
      <FooterCTA
        headline="Bring the priority that keeps coming back."
        sub="Book a 30-minute intro call to clarify the work, discuss the support it needs, and see whether Veep is the right fit."
        primaryLabel="Book intro call"
      />
    </>
  );
}