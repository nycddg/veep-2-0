import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Eyebrow } from "./primitives";
import { Timeline, DotCluster } from "./illustrations";
import { ArrowUpRight } from "lucide-react";

type Pillar = {
  idx: string;
  eyebrow: string;
  title: string;
  bullets: string[];
  href: "/services/fractional-cfo" | "/services/interim" | "/services/executive-bench" | "/services/ai-operators" | "/for-portfolios";
  panelTitle: string;
  panelRows: { k: string; v: string }[];
  illo: "timeline" | "cluster";
  fillStart?: number;
  fillEnd?: number;
};

const companiesPillars: Pillar[] = [
  {
    idx: "0.1",
    eyebrow: "Fractional",
    title: "C-suite capacity for the moment that matters.",
    bullets: [
      "CFO, COO, CTO, CRO, CMO, or CPO — any C-suite role",
      "Capital, growth, or operating inflection points",
      "Board and investor reporting cadence",
      "Function scoping before a full-time hire",
    ],
    href: "/services/fractional-cfo",
    panelTitle: "Fractional C-Suite",
    panelRows: [
      { k: "Onboarded", v: "< 10 days" },
      { k: "Cadence", v: "Weekly + on-call" },
      { k: "Guarantee", v: "30-day fit" },
    ],
    illo: "timeline",
    fillStart: 0.15,
    fillEnd: 0.85,
  },
  {
    idx: "0.2",
    eyebrow: "Interim",
    title: "Own the seat while the search runs.",
    bullets: [
      "Full ownership of a function during transition",
      "Preserves the permanent search",
      "Clarifies what the full-time hire should own",
      "Stabilizes the team and the board narrative",
    ],
    href: "/services/interim",
    panelTitle: "Interim CFO / COO",
    panelRows: [
      { k: "Coverage", v: "Full seat" },
      { k: "Term", v: "3–9 months" },
      { k: "Handoff", v: "Structured" },
    ],
    illo: "timeline",
    fillStart: 0.25,
    fillEnd: 0.65,
  },
  {
    idx: "0.3",
    eyebrow: "Sprint",
    title: "Ship one critical initiative with a clear endpoint.",
    bullets: [
      "GTM redesign, pricing reset, org redesign",
      "M&A integration or transaction prep",
      "ERP or reporting rebuild",
      "One senior operator, one outcome, one deadline",
    ],
    href: "/services/ai-operators",
    panelTitle: "Sprint engagement",
    panelRows: [
      { k: "Scope", v: "Single outcome" },
      { k: "Timeline", v: "6–12 weeks" },
      { k: "Team", v: "Operator + AI" },
    ],
    illo: "timeline",
    fillStart: 0.35,
    fillEnd: 0.55,
  },
];

const portfoliosPillars: Pillar[] = [
  {
    idx: "0.1",
    eyebrow: "Bench",
    title: "An executive bench across the portfolio.",
    bullets: [
      "Priority access to vetted CFO, COO, and GTM operators",
      "Emergency coverage path for interim vacancies",
      "Quarterly executive capacity planning",
      "Preferred commercial terms on engagements",
    ],
    href: "/services/executive-bench",
    panelTitle: "Portfolio Executive Bench",
    panelRows: [
      { k: "Response SLA", v: "5 business days" },
      { k: "Included", v: "Diagnostics + planning" },
      { k: "Usage", v: "Billed separately" },
    ],
    illo: "cluster",
  },
  {
    idx: "0.2",
    eyebrow: "Audit",
    title: "Executive Capacity Audit for the portfolio.",
    bullets: [
      "Portfolio-wide leadership risk map",
      "CFO / COO / GTM coverage assessment",
      "Upcoming capital and event triggers",
      "Recommended bench structure per company",
    ],
    href: "/for-portfolios",
    panelTitle: "Capacity Audit",
    panelRows: [
      { k: "Duration", v: "2–3 weeks" },
      { k: "Output", v: "Risk map + plan" },
      { k: "Format", v: "Portfolio review" },
    ],
    illo: "cluster",
  },
  {
    idx: "0.3",
    eyebrow: "MSA",
    title: "Executive Capacity MSA, activated in days.",
    bullets: [
      "Master agreement signed once, SOWs per role",
      "Standard terms pre-approved across portcos",
      "Sourcing, replacement, QA, and billing managed",
      "Works for serial acquirers and holdcos",
    ],
    href: "/services/executive-bench",
    panelTitle: "Executive Capacity MSA",
    panelRows: [
      { k: "Setup", v: "One agreement" },
      { k: "Activation", v: "Per SOW" },
      { k: "Ops", v: "Fully managed" },
    ],
    illo: "cluster",
  },
];

export function AudienceTabs() {
  const [tab, setTab] = useState<"companies" | "portfolios">("companies");
  const pillars = tab === "companies" ? companiesPillars : portfoliosPillars;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <Eyebrow>How Veep engages</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-cream">
            One platform. Two ways to buy.
          </h2>
          <p className="mt-6 text-stone max-w-lg">
            Individual companies buy engagements against a specific business
            moment. Investors and holdcos retain an executive bench across
            their portfolio.
          </p>
        </div>

        <div className="inline-flex border border-white/10 rounded-md p-1 bg-white/[0.03] self-start">
          {[
            { id: "companies", label: "For Companies" },
            { id: "portfolios", label: "For Portfolios" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as typeof tab)}
              className={`px-3.5 py-1.5 text-[11px] font-mono tracking-widest uppercase rounded-[3px] transition ${
                tab === t.id ? "bg-cream text-ink" : "text-stone hover:text-cream"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-white/8">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="grid md:grid-cols-12 gap-10 md:gap-16 py-14 md:py-20 border-b border-white/8 items-center"
          >
            <div className="md:col-span-5">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] tracking-widest text-stone-soft">
                  {p.idx}
                </span>
                <span className="font-mono text-[11px] tracking-widest text-stone-soft">
                  / {p.eyebrow.toUpperCase()}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl text-cream leading-[1.1] tracking-tight">
                {p.title}
              </h3>
              <ul className="mt-8 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-baseline gap-3 text-sm text-cream/80">
                    <span className="inline-block h-1 w-1 rounded-full bg-accent-gold translate-y-[-2px]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={p.href}
                className="mt-10 inline-flex items-center gap-1 text-sm text-cream border-b border-cream/40 hover:border-cream pb-0.5"
              >
                Learn more <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="md:col-span-7">
              <div className="border border-white/10 bg-white/[0.02] rounded-md p-8">
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div className="text-cream text-sm">{p.panelTitle}</div>
                  <span className="font-mono text-[10px] tracking-widest text-stone-soft">
                    / {p.eyebrow.toUpperCase()}
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-6">
                  {p.panelRows.map((r) => (
                    <div key={r.k}>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-stone-soft">
                        {r.k}
                      </div>
                      <div className="mt-2 text-sm text-cream">{r.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  {p.illo === "timeline" ? (
                    <Timeline
                      fillStart={p.fillStart}
                      fillEnd={p.fillEnd}
                      className="w-full h-24"
                    />
                  ) : (
                    <DotCluster className="w-full h-56" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
