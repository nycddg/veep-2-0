import { useState } from "react";
import { Eyebrow } from "./primitives";

const cases = [
  {
    id: "raise",
    tab: "Capital raise",
    metric: "Series B closed in 14 weeks",
    body: "A Fractional C-Suite CFO stepped in to rebuild reporting, run lender-grade forecasting, and own investor diligence — from first meeting to signed term sheet.",
  },
  {
    id: "gtm",
    tab: "GTM reset",
    metric: "Pipeline 3.2× in one quarter",
    body: "Sprint engagement diagnosed a broken founder-led motion, reset pricing and ICP, and installed a weekly RevOps cadence before hiring a permanent CRO.",
  },
  {
    id: "interim",
    tab: "CFO transition",
    metric: "Zero board slippage during a 6-month search",
    body: "Interim CFO owned the seat while the full-time search ran, stabilized the finance team, and helped define what the permanent hire should own.",
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
