import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import heroHeadshot from "@/assets/operator-headshot.png.asset.json";
import { LogoWall } from "@/components/site/LogoWall";
import { Testimonials } from "@/components/site/Testimonials";
import { OperatorSpotlightRail } from "@/components/site/OperatorSpotlightRail";
import { OperatorCanvas } from "@/components/site/OperatorCanvas";
import { EngagementTile } from "@/components/site/EngagementTile";
import { StepFlow } from "@/components/site/StepFlow";
import { Check } from "lucide-react";
import { ObjectionList } from "@/components/site/ObjectionList";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Reveal } from "@/components/site/Reveal";
import { ogImageMeta } from "@/lib/seo";
import jianYangHeadshot from "@/assets/operator-jian-yang.png.asset.json";
import erikaVelazquezHeadshot from "@/assets/operator-erika-velazquez.png.asset.json";
import elaineBogartHeadshot from "@/assets/operator-elaine-bogart.png.asset.json";
import victoriaKasumuHeadshot from "@/assets/operator-victoria-kasumu.png.asset.json";
import vanessaKwanHeadshot from "@/assets/operator-vanessa-kwan.png.asset.json";
import alasdairLloydJonesHeadshot from "@/assets/operator-alasdair-lloyd-jones.png.asset.json";
import alanPoussaintHeadshot from "@/assets/operator-alan-poussaint.png.asset.json";
import jenniferKasperHeadshot from "@/assets/operator-jennifer-kasper.png.asset.json";
import seanParkHeadshot from "@/assets/operator-sean-park.png.asset.json";
import jonathanLevinsonHeadshot from "@/assets/operator-jonathan-levinson.png.asset.json";
import miguelFerreyraHeadshot from "@/assets/operator-miguel-ferreyra-de-bone.png.asset.json";
import jessicaDavilaHeadshot from "@/assets/operator-jessica-davila.png.asset.json";

// ─────────────────────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────────────────────

const heroOperators = [
  {
    name: "Jian Yang",
    role: "Finance Operating Partner",
    chips: ["Ex-UGE", "Real Estate"],
    tilt: -2,
    translateY: 16,
    photoUrl: jianYangHeadshot.url,
  },
  {
    name: "Erika Velazquez",
    role: "Marketing Operating Partner",
    chips: ["Ex-Morning Brew", "New Media"],
    tilt: 3,
    translateY: -32,
    photoUrl: erikaVelazquezHeadshot.url,
  },
  {
    name: "Elaine Bogart",
    role: "Finance Operating Partner",
    chips: ["Ex-Fullscreen", "Web3"],
    tilt: -4,
    translateY: 48,
    photoUrl: elaineBogartHeadshot.url,
  },
  {
    name: "Victoria Kasumu",
    role: "People Operating Partner",
    chips: ["Ex-Zocdoc", "TECH"],
    tilt: 2,
    translateY: 0,
    photoUrl: victoriaKasumuHeadshot.url,
  },
];

const spotlightOperators = [
  {
    name: "Jian Yang",
    role: "Finance Operating Partner",
    priorCompanies: ["INDUSTRIOUS", "OPENCARE"],
    summary:
      "Strategic finance leader and entrepreneur with a record of scaling fast-growing firms, optimizing financial operations, and securing funding. At Industrious, secured $140M+ in equity funding and restructured financial operations for rapid scale.",
    chips: ["Real Estate", "Finance", "Tech"],
    photoUrl: jianYangHeadshot.url,
  },
  {
    name: "Erika Velazquez",
    role: "Marketing Operating Partner",
    priorCompanies: ["MORNING BREW", "THE NEW REPUBLIC"],
    summary:
      "Story-driven marketer with deep expertise in brand strategy, product marketing, and audience growth. Specializes in launching and repositioning for impact. At Morning Brew, developed a new newsletter ad product that doubled the average CTR.",
    chips: ["New Media", "Consumer", "GenAI"],
    photoUrl: erikaVelazquezHeadshot.url,
  },
  {
    name: "Elaine Bogart",
    role: "Finance Operating Partner",
    priorCompanies: ["Fullscreen", "Nifty's"],
    summary:
      "Powerhouse CFO with 15+ years of experience leading financial transformation and strategic exits across SaaS, Web3, and new media. At Mojix, drove a +98% EBITDA turnaround and completed a successful international sale.",
    chips: ["Tech", "Web3", "Media"],
    photoUrl: elaineBogartHeadshot.url,
  },
  {
    name: "Victoria Kasumu",
    role: "People Operating Partner",
    priorCompanies: ["Zocdoc", "Pager Health"],
    summary:
      "Seasoned people leader who builds growth-focused operations by aligning talent, culture, and business goals. At David Zwirner, hired 50+ employees in 90 days while reducing redundancy 30% and increasing retention 15%.",
    chips: ["Hospitality", "TECH", "Healthcare"],
    photoUrl: victoriaKasumuHeadshot.url,
  },
  {
    name: "Vanessa Kwan",
    role: "Finance Operating Partner",
    priorCompanies: ["BDG MEDIA", "GOLDMAN SACHS"],
    summary:
      "Strategic finance and operations leader with 15+ years across investment banking, luxury retail, and digital media. At BDG Media, rose from Director to EVP Head of Finance and redesigned seller commissions, improving gross margins by 4 points.",
    chips: ["Digital Media", "Luxury Retail", "Consumer"],
    photoUrl: vanessaKwanHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Alasdair Lloyd-Jones",
    role: "Growth Operating Partner",
    priorCompanies: ["SET CREATIVE (WPP)", "DAVID YURMAN"],
    summary:
      "Global brand strategist and creative operator with a record of scaling consumer brands and leading high-impact transformation. As CEO of SET Creative, scaled revenue 5x and led the firm through a successful sale to WPP.",
    chips: ["Consumer Retail", "Tech", "Automotive"],
    photoUrl: alasdairLloydJonesHeadshot.url,
  },
  {
    name: "Alan Poussaint",
    role: "Finance Operating Partner",
    priorCompanies: ["ROCKET INTERNET", "KIXIE"],
    summary:
      "Transaction-ready finance operator with PE roots and marketplace scale; former Principal at Lincolnshire Management ($1.8B AUM), then CFO of a Rocket Internet portfolio company during the build of Indonesia's largest e-commerce platform.\u00a0",
    chips: ["Tech", "SaaS", "Private Capital"],
    photoUrl: alanPoussaintHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Jennifer Kasper",
    role: "Growth Operating Partner",
    priorCompanies: ["LVMH", "MACY'S"],
    summary:
      "Senior marketing leader with deep experience across global retail, beauty, fashion, media, and customer strategy. At LVMH, unified group media strategy across 75+ Maisons and built cross-brand agency models.",
    chips: ["Retail", "Fashion", "Beauty"],
    photoUrl: jenniferKasperHeadshot.url,
  },
  {
    name: "Sean Park",
    role: "People Operating Partner",
    priorCompanies: ["ACTIVANT CAPITAL", "EY"],
    summary:
      "People strategy leader who turns org design, leadership, and talent systems into business growth levers. As CPO at Activant Capital, led portfolio talent strategy and served as interim CHRO on a portfolio path to a $2B exit.",
    chips: ["Growth Equity", "PRO SERVICES", "TECH"],
    photoUrl: seanParkHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Jonathan Levinson",
    role: "Finance Operating Partner",
    priorCompanies: ["KIDS MADE MODERN", "YELLOWHEART"],
    summary:
      "Finance and operations leader with 25+ years turning founder assumptions into investor-ready plans and operating discipline. Has led or supported $65M+ in M&A and fundraising transactions.",
    chips: ["E-Commerce", "SaaS", "Manufacturing"],
    photoUrl: jonathanLevinsonHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Miguel Ferreyra de Bone",
    role: "Finance Operating Partner",
    priorCompanies: ["TASTE OF BELGIUM", "FARNSWORTH CANNABIS"],
    summary:
      "Seasoned operator with a track record of building and transforming companies across finance, strategy, operations, GTM, and product. Brings board-level judgment and hands-on operating experience across consumer, luxury, and finance.\u00a0",
    chips: ["Consumer", "Luxury", "Finance"],
    photoUrl: miguelFerreyraHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
  {
    name: "Jessica Davila",
    role: "People Operating Partner",
    priorCompanies: ["TASKRABBIT", "BREAD"],
    summary:
      "People strategy leader with a record of guiding companies through scale, acquisition, and leadership change. At TaskRabbit, rebuilt people strategy while scaling from 250 to 500 employees across 9 countries.",
    chips: ["Marketplace", "Fintech", "Consumer"],
    photoUrl: jessicaDavilaHeadshot.url,
    photoPosition: "center 15%",
    photoScale: 1.03,
  },
];

const problems = [
  {
    t: "Critical work with no clear owner.",
    d: "A fundraise, GTM reset, operating issue, or margin problem keeps coming back to you. The team is busy, but the priority is still stuck.",
  },
  {
    t: "The work cannot wait for a perfect org chart.",
    d: "A permanent hire may be the right answer, eventually. A search takes months or the role may still be undefined but the business needs to move now.",
  },
  {
    t: "You are stuck in the middle.",
    d: "Sales decisions, finance questions, operational escalations, people issues, and strategic initiatives keep landing on the CEO's desk.",
  },
  {
    t: "More advice is not enough.",
    d: "You don't need another deck or a stack of candidate profiles. You need someone senior to step in, take responsibility, and move the work.",
  },
];

const alternatives = [
  { t: "Permanent hire", d: "Months to hire. Permanent commitment. Wrong-hire risk lands on you, and the work waits for the search to finish." },
  { t: "Consulting firms", d: "Smart recommendations. Then they hand you a deck and the work still lands on you or your team." },
  { t: "Freelancers and advisors", d: "Profiles to browse. Variable seniority. More decisions and oversight for the founder, not fewer." },
];

const benefits = [
  { t: "Own the work", d: "Operators step in to take responsibility for critical work, not advise from the sidelines." },
  { t: "Deploy in under 10 days", d: "Algorithmic matching. Shortlist in 72 hours. Onboarded and in the work inside 10 days." },
  { t: "Senior-only roster", d: "75+ vetted senior operators across finance, GTM, operations, product, people, technology, and strategy." },
  { t: "No permanent commitment", d: "Senior ownership without the commit — engagements can pause, extend, or scale with the work." },
  { t: "Clean handoff", d: "When the work lands or a permanent hire arrives, you get documentation, context, and continuity." },
  { t: "30-day fit guarantee", d: "If the operator isn't the right fit, we swap them or you walk — exit the agreement with no penalties." },
];

const engagements = [
  {
    name: "Advisory",
    price: "From $3k / mo",
    bestWhen: "Senior judgment and direction for high-stakes decisions — board and investor prep, fundraise strategy, executive decisions, and strategic tradeoffs. Not full ownership of execution.",
    to: "/pricing" as const,
    hash: "tiers",
  },
  {
    name: "Sprint",
    price: "From $25k / scope",
    bestWhen: "Time-boxed. Clear scope. Clear outcome. Fast start — GTM reset, fundraise, margin work, diligence, or transaction prep across 4–12 weeks.",
    to: "/pricing" as const,
    hash: "tiers",
  },
  {
    name: "Operator",
    price: "From $15k / mo",
    bestWhen: "Embedded senior ownership of critical work across finance, GTM, operations, product, or people. Build or reset a function, resolve leadership gaps — typically 3–12 months.",
    to: "/pricing" as const,
    hash: "tiers",
    featured: true,
  },
  {
    name: "Pod",
    price: "From $30k / mo",
    bestWhen: "Multiple operators coordinated against a larger work program — GTM + RevOps, finance + ops, AI initiatives, or an operating reset across the company.",
    to: "/pricing" as const,
    hash: "tiers",
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
    dim: "OUTCOMES",
    veep: "High quality work immediately\u00a0\u00a0",
    old: "After the search, after the deck, or with variable quality",
  },
  {
    dim: "Cost",
    veep: "Priced to scope and level of support",
    old: "Search fees plus salary, or large consulting engagements",
  },
  {
    dim: "Seniority",
    veep: "Vetted senior operators only",
    old: "Variable; junior consultants for leverage or unvetted freelancers",
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
    tag: "B2B SAAS · FINANCE OPERATING PARTNER",
    trigger: "CEO was preparing for a first institutional round without a financial model, investor materials, or fundraising experience.",
    outcome: "Built a 3-year model, diligence-ready CAC/LTV dashboards, and coached the CEO through term sheets and investor meetings.",
    metric: "$6M raised in 6 weeks",
  },
  {
    tag: "SOFTWARE STUDIO · GROWTH OPERATING PARTNER",
    trigger: "An $8M product development studio was stuck firefighting, with inconsistent project profitability and no scalable path into AI.",
    outcome: "Installed standardized project scoping and staffing, built an AI GTM and delivery framework, and hired a Director of AI.",
    metric: "Project margins up 25%",
  },
  {
    tag: "PODCAST PUBLISHER · BUSINESS OPERATING PARTNER",
    trigger: "A profitable, bootstrapped publisher with millions in revenue had never raised outside capital and had no financial model or growth plan.",
    outcome: "Built the company's first financial model, defined use of proceeds, and sourced investors representing over a third of the round.",
    metric: "Sourced 35% of capital",
  },
];

const networkImpact = [
  { figure: "$2B+", label: "Cost savings delivered", detail: "Across transformation, product redesign, and operational efficiency initiatives at global enterprises." },
  { figure: "$1B+", label: "Capital raised", detail: "Venture funding, structured finance, SPACs, and instruments like securitized bonds." },
  { figure: "$3B+", label: "New revenue generated", detail: "Through new business lines, go-to-market strategy, and product commercialization." },
  { figure: "20+", label: "Exits & acquisitions", detail: "Including strategic sales, integrations, and post-merger transformations." },
];

const faqs = [
  {
    q: "What is a Veep operator?",
    a: "A Veep operator is a vetted senior operator who steps into your business to own critical work before a permanent executive hire makes sense. Depending on the need, that operator may be a CFO, COO, CRO, CMO, CTO, product leader, people leader, chief of staff, or functional expert.",
  },
  {
    q: "How fast can a Veep operator start?",
    a: "Shortlist in 72 hours. Operator deployed in under 10 days. Urgent interim or leadership-gap coverage can move faster when needed.",
  },
  {
    q: "How much does Veep cost?",
    a: "Advisory starts at $3k/month. Sprints start at $25k. Operators start at $15k/month. Pods start at $30k/month. Every engagement is scoped to the work.",
  },
  {
    q: "How is Veep different from a consulting firm?",
    a: "A consultant recommends. A Veep operator owns. Our operators step into the work, set the rhythm, build the materials, make decisions with the team, and move the priority forward.",
  },
  {
    q: "How is Veep different from executive search?",
    a: "Search is for permanent hiring. Veep is for critical work that needs senior ownership before the permanent hire makes sense. The work moves now, while the permanent hiring decision stays open.",
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
      { title: "Veep — Senior Operators for Critical Work That Can't Wait" },
      {
        name: "description",
        content:
          "Veep helps founder-led companies bring in vetted senior operators to own critical work — matched in 72 hours, deployed in under 10 days. 30-day fit guarantee.",
      },
      { property: "og:title", content: "Veep — Senior Operators for Critical Work That Can't Wait" },
      {
        property: "og:description",
        content:
          "Veep helps founder-led companies bring in vetted senior operators to own critical work — matched in 72 hours, deployed in under 10 days. 30-day fit guarantee.",
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
        fetchpriority: "high",
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
  return <div className="eyebrow">{children}</div>;
}

function Index() {
  return (
    <>
      {/* 1 — HERO */}
      <section id="overview" className="relative overflow-hidden scroll-mt-20">
        <div className="relative mx-auto max-w-5xl motion-fade-up px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 md:pt-24 pb-20 md:pb-28 flex flex-col items-center text-center">
          <h1 className="font-medium text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight sm:leading-[0.98] text-cream text-balance allow-wrap break-words mb-6">
            Because a job always needs to be done.
          </h1>

          <p className="text-base sm:text-lg text-stone max-w-2xl leading-relaxed mb-10">
            Vetted senior operators to own urgent priorities and high-stakes
            decisions before you are ready, willing, or able to make
            permanent hires.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 mb-14 md:mb-16 text-sm text-cream/90">
            {["Invite-only network", "72-hour match", "30-day fit guarantee"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check size={18} className="text-accent" strokeWidth={2.5} />
                {t}
              </div>
            ))}
          </div>

          <OperatorCanvas />

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 mt-12 sm:mt-20 w-full">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition inline-flex items-center justify-center gap-2 min-h-11"
            >
              Book intro call <ArrowRight size={16} />
            </a>
            <Link
              to="/"
              hash="how"
              className="text-sm text-cream/85 hover:text-cream underline underline-offset-8 decoration-white/25 hover:decoration-white/60 transition pb-1"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <LogoWall />

      {/* 2 — WHAT IS VEEP (extractable AI-search definition) */}
      <Reveal as="section">
        <div className="mx-auto max-w-[55.2rem] px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <SectionEyebrow>WHAT VEEP IS</SectionEyebrow>
          <p className="mt-6 font-serif text-xl sm:text-2xl md:text-3xl text-cream tracking-tight leading-snug">
            An invite-only network of operating partners ready to own the work that can't wait. Founders, CEOs, and investment firms hire Veep when important work has no owner across finance, GTM, operations, product, people, fundraising, and strategy.
          </p>
          <p className="mt-[1.4rem] text-sm text-stone">
            Built for companies with real revenue and growing complexity that need a critical outcome now.
          </p>
        </div>
      </Reveal>

      {/* 3 — PROBLEM */}
      <Reveal as="section" id="problem" className="bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>The moment you're in</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Your business is too important for ownerless work.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 md:gap-x-14 gap-y-12 md:gap-x-20">
            {problems.map((p) => (
              <div key={p.t}>
                <h3 className="font-serif font-medium text-xl text-cream tracking-tight leading-snug">{p.t}</h3>
                <p className="mt-2 text-base text-stone leading-relaxed max-w-md">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 md:mt-24 border-t border-white/10 pt-12">
            <div className="mono-label mb-8">Instead of</div>
            <div className="grid md:grid-cols-3 gap-y-10">
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
            <p className="mt-12 md:mt-14 mx-auto text-center font-serif font-medium text-lg md:text-xl text-cream/90 leading-snug max-w-5xl">
              Three options. None of them get you the outcomes you need, when you need them&nbsp;— now. Only Veep does.
            </p>
          </div>
        </div>
      </Reveal>

      {/* 4 — SOLUTION */}
      <Reveal as="section" id="solution" className="py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionEyebrow>What we do</SectionEyebrow>
              <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
                Built for the{"\u00a0"}job to be done.
              </h2>
              <p className="mt-8 text-stone text-base md:text-lg leading-relaxed">
                Tell us what's in the way, not moving, or landing back on you to solve.
                We shape the work and define the outcomes, recommend the right level of
                support (Advisory, Sprint, Operator, or Pod), and match operators to the job.
              </p>
              <p className="mt-4 text-stone text-base md:text-lg leading-relaxed">
                When the work lands or the permanent hire arrives, we hand off with
                results and documentation, not ongoing dependency.
              </p>
              <p className="mt-6 eyebrow">
                Vetted senior operators who step in to own critical work, now.
              </p>
            </div>
            <div className="divide-y divide-white/10 lg:border-l lg:border-white/10 lg:pl-14">
              <div className="eyebrow pb-6">The Veep model</div>
              {[
                ["Start with the work, not the title", "We diagnose the priority, urgency, and outcome before deciding whether the answer is advisory, a sprint, an operator, a pod, or recurring operating capacity."],
                ["Senior only", "Every operator is a vetted senior leader — former founders, CFOs, COOs, CROs, CMOs, CTOs, as well as product and people leaders."],
                ["Priced to scope", "Advisory, Sprint, Operator, or Pod structured around the work and outcomes."],
                ["Guaranteed fit", "30 days to prove it. If the operator is not right, we swap them or you walk."],
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

      {/* 5 — BENEFITS */}
      {/* 4.5 — OPERATORS SPOTLIGHT */}
      <Reveal as="section" id="operators" className="py-14 sm:py-16 md:py-28 border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">

          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>Operator spotlight</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Operators who've held the seat and delivered.
            </h2>
            <p className="mt-8 text-stone text-base md:text-lg leading-relaxed">
              Every Veep operator has held the role they're deployed into, at a
              comparable-stage company, with outcomes we can reference. No juniors, no
              generalists, no career consultants.
            </p>
          </div>
          <OperatorSpotlightRail operators={spotlightOperators} />

          <p className="mt-8 text-left text-sm text-stone">
            Just a few of the 75+ operators in our invite-only network.
          </p>

          {/* Network impact */}
          <div className="mt-20 md:mt-24">
            <div className="border-t border-white/10 pt-8 mb-12">
              <SectionEyebrow>Network impact</SectionEyebrow>
            </div>

            <div className="relative">
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-y-10">
                {networkImpact.map((m, i) => (
                  <div
                    key={m.label}
                    className="flex flex-col gap-3 group border-l border-white/10 pl-8 pr-8 odd:border-l-0 odd:pl-0 lg:odd:border-l lg:odd:pl-8 lg:first:border-l-0 lg:first:pl-0 last:pr-0 lg:pr-8 lg:last:pr-0"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        {i === 0 && (
                          <div className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
                        )}
                        <div className="relative w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="mono-label font-medium">
                        {m.label}
                      </span>
                    </div>
                    <div className="stat-figure text-4xl md:text-5xl text-cream leading-none">
                      {m.figure}
                    </div>
                    <p className="text-xs text-stone leading-relaxed">
                      {m.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-12 text-sm text-stone">
              Aggregated outcomes across our operator roster.
            </p>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/10 pt-8">
            <p className="text-sm text-stone">
              75+ vetted senior operators · Avg. 18 yrs experience · Every operator has held the seat
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cream underline underline-offset-8 decoration-white/30 hover:decoration-white/70 transition"
            >
              Meet operators for your work <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </Reveal>

      {/* 5 — BENEFITS */}
      <Reveal as="section" id="benefits" className="bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>What you get</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Senior ownership on your terms.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-8 md:gap-x-14 gap-y-10 md:gap-y-10 md:gap-y-14">
            {benefits.map((b, i) => (
              <div key={b.t}>
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
            <InlineCTA />
          </div>
        </div>
      </Reveal>

      {/* 6 — OFFER / ENGAGEMENTS */}
      <Reveal as="section" id="offer" className="bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <div className="max-w-2xl">
              <SectionEyebrow>Engagements</SectionEyebrow>
              <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
                Four engagement shapes. One promise.
              </h2>
            </div>
            <Link
              to="/pricing"
              className="text-sm text-cream/90 hover:text-cream underline underline-offset-8 decoration-white/30 hover:decoration-white/70 transition pb-1"
            >
              See full pricing →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagements.map((e) => (
              <EngagementTile key={e.name} {...e} />
            ))}
          </div>
          <p className="mt-10 text-sm text-stone max-w-3xl">
            Lead with the work. Choose the shape after the work is clear.
          </p>
        </div>
      </Reveal>

      {/* 7 — HOW IT WORKS */}
      <Reveal as="section" id="how" className="bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>How It Works</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              From first call to operator in the seat in under 10 days.
            </h2>
          </div>
          <StepFlow />
        </div>
      </Reveal>

      {/* 8 — PROOF */}
      <Reveal as="section" id="proof" className="py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-16">
            <SectionEyebrow>Proof</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              What senior operators change in the first 90 days.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-8 md:gap-x-14 gap-y-10 md:gap-y-10 md:gap-y-14">
            {cases.map((c) => (
              <div key={c.tag} className="flex flex-col rounded-2xl bg-[color:var(--surface-raised)] p-5 sm:p-7">
                <span className="eyebrow">
                  {c.tag}
                </span>
                <p className="mt-6 text-base text-stone leading-relaxed">
                  <span className="text-cream">Trigger. </span>{c.trigger}
                </p>
                <p className="mt-4 text-base text-stone leading-relaxed">
                  <span className="text-cream">Outcome. </span>{c.outcome}
                </p>
                <div className="mt-auto pt-8 font-serif font-medium text-xl text-accent tracking-tight">
                  {c.metric}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-10 border-y border-white/10">
            {[
              { k: "75+", v: "vetted operators" },
              { k: "72h", v: "to shortlist" },
              { k: "<10d", v: "to deploy" },
              { k: "30d", v: "fit guarantee" },
            ].map((s) => (
              <div key={s.k}>
                <div className="stat-figure text-4xl md:text-5xl text-cream">{s.k}</div>
                <div className="mt-2 mono-label font-medium">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-20">
            <Testimonials />
          </div>

          <div className="mt-16">
            <InlineCTA />
          </div>
        </div>
      </Reveal>

      {/* 9 — DIFFERENTIATION */}
      <Reveal as="section" id="vs" className="hidden md:block bg-surface-band py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>Why Veep</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              How Veep compares to the alternatives.
            </h2>
          </div>

          <div className="grid grid-cols-[auto_minmax(min-content,1fr)_minmax(min-content,1fr)] border-y border-white/10 divide-y divide-white/10">
            <div className="hidden md:grid md:grid-cols-subgrid md:col-span-3">
              <div className="p-5 mono-label">Dimension</div>
              <div className="p-5 mono-label">The old way</div>
              <div className="p-5 eyebrow">Veep</div>
            </div>
            {differentiators.map((r) => (
              <div key={r.dim} className="grid md:grid-cols-subgrid md:col-span-3 gap-y-2 gap-x-0 p-5 md:p-0">
                <div className="md:p-5 mono-label">
                  {r.dim}
                </div>
                <div className="md:p-5 text-base text-stone leading-relaxed">{r.old}</div>
                <div className="md:p-5 text-base text-cream leading-relaxed md:bg-accent/[0.06]">
                  {r.veep}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 10 — FOR PORTFOLIOS (secondary audience band) */}
      <Reveal as="section" id="portfolios" className="spotlight-invert py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 md:gap-14 items-center">
            <div className="lg:col-span-3 space-y-5">
              <SectionEyebrow>FOR FUNDS</SectionEyebrow>
              <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
                Portfolio companies don't pause for a search.
              </h2>
              <p className="text-base text-stone leading-relaxed">
                Transactions create volatility before close, after close, and during integration. Leadership seats open. The plan is clear, but the company often lacks the senior capacity to own the work. Veep gives transaction-active firms a retained roster of vetted operators, ready to support diligence, transition, integration, value creation, and interim leadership needs across the portfolio.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col items-start lg:items-end gap-4">
              <Link
                to="/for-portfolios"
                className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition min-h-11 inline-flex items-center justify-center"
              >
                See how portfolio rosters work
              </Link>
              <Link
                to="/contact"
                search={{ intent: "audit" }}
                className="text-sm text-cream/85 hover:text-cream underline underline-offset-8 decoration-white/25 hover:decoration-white/60"
              >
                Request a capacity audit →
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 11 — OBJECTIONS */}
      <Reveal as="section" className="py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>Before you book</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              The questions founders ask on the first call.
            </h2>
          </div>
          <ObjectionList />
          <div className="mt-14">
            <InlineCTA />
          </div>
        </div>
      </Reveal>

      {/* 12 — FAQ */}
      <Reveal as="section" id="faq" className="bg-surface-raised py-14 sm:py-16 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mb-12 md:mb-14">
            <SectionEyebrow>MINI FAQ</SectionEyebrow>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Straight answers.
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6 md:py-7">
                <summary className="cursor-pointer flex items-start justify-between gap-6 text-cream list-none [&::-webkit-details-marker]:hidden hover:text-cream transition">
                  <span className="font-serif font-medium text-xl tracking-tight">{f.q}</span>
                  <span className="text-accent text-xl leading-none pt-1 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-stone leading-relaxed text-base md:text-base max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-sm text-stone">
            More detail on the{" "}
            <Link to="/faq" className="text-cream underline underline-offset-4 decoration-white/40 hover:decoration-white">
              full FAQ page
            </Link>.
          </div>
        </div>
      </Reveal>

      {/* 13 — FINAL CTA */}
      <FooterCTA />
    </>
  );
}