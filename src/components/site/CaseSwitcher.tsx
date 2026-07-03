import { useState } from "react";
import { Eyebrow } from "./primitives";

const cases = [
  {
    id: "raise",
    tab: "CFO — capital raise",
    metric: "Series B closed in 14 weeks",
    body: "Fractional CFO stepped in to rebuild reporting, run lender-grade forecasting, and own investor diligence — from first meeting to signed term sheet.",
  },
  {
    id: "gtm",
    tab: "CCO — GTM reset",
    metric: "Pipeline 3.2× in one quarter",
    body: "Fractional CCO diagnosed a broken founder-led motion, reset pricing and ICP, and installed a weekly RevOps cadence before hiring a permanent commercial leader.",
  },
  {
    id: "cmo",
    tab: "CMO — repositioning",
    metric: "CAC down 38% in two quarters",
    body: "Interim CMO rebuilt the positioning, killed the channels that weren't converting, and stood up a lifecycle motion the in-house team now runs on its own.",
  },
  {
    id: "cto",
    tab: "CTO — platform reset",
    metric: "Roadmap unblocked in 8 weeks",
    body: "Interim CTO owned engineering during a founder transition, cleared architectural debt, stabilized delivery, and defined the profile for the permanent hire.",
  },
  {
    id: "interim",
    tab: "Interim coverage",
    metric: "Zero board slippage during a 6-month search",
    body: "Interim executive owned the seat while the full-time search ran, stabilized the team, and helped define what the permanent hire should actually own.",
  },
];

export function CaseSwitcher() {
  const [active, setActive] = useState(cases[0].id);
  const current = cases.find((c) => c.id === active)!;
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <Eyebrow>Engagement patterns</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-ink">
            One operator. One outcome. <em className="italic text-forest">One number that matters.</em>
          </h2>
        </div>
        <div className="inline-flex flex-wrap gap-1 rounded-full border border-border p-1 bg-card self-start">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                active === c.id ? "bg-ink text-cream" : "text-stone hover:text-ink"
              }`}
            >
              {c.tab}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-3xl bg-card border border-border p-8 md:p-14">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="font-serif text-5xl md:text-7xl leading-[1.05] text-ink">
            {current.metric}
          </div>
          <p className="text-lg text-stone leading-relaxed">{current.body}</p>
        </div>
      </div>
    </div>
  );
}
