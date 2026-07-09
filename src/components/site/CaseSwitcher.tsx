import { useState } from "react";
import { Eyebrow } from "./primitives";
import { Waveform } from "./illustrations";

const cases = [
  {
    id: "raise",
    tab: "Capital raise",
    metric: "Series B closed in 14 weeks",
    peak: 0.62,
    body: "A Veep fractional finance operator rebuilt reporting, ran lender-grade forecasting, and owned investor diligence — from first meeting to signed term sheet.",
  },
  {
    id: "gtm",
    tab: "GTM reset",
    metric: "Pipeline 3.2× in one quarter",
    peak: 0.42,
    body: "Sprint engagement diagnosed a broken founder-led motion, reset pricing and ICP, and installed a weekly RevOps cadence before hiring a permanent CRO.",
  },
  {
    id: "interim",
    tab: "CFO transition",
    metric: "Zero board slippage during a 6-month search",
    peak: 0.78,
    body: "Interim CFO owned the seat while the full-time search ran, stabilized the finance team, and helped define what the permanent hire should own.",
  },
];

export function CaseSwitcher() {
  const [active, setActive] = useState(cases[0].id);
  const current = cases.find((c) => c.id === active)!;
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <Eyebrow>Engagement patterns</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-cream">
            One operator. One outcome.{" "}
            <span className="text-accent">One number that matters.</span>
          </h2>
        </div>
        <div className="inline-flex flex-wrap gap-1 self-start border border-white/10 rounded-md p-1 bg-white/[0.03]">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-3.5 py-1.5 text-sm rounded-[3px] transition font-mono tracking-wide uppercase text-[11px] ${
                active === c.id ? "bg-cream text-ink" : "text-stone hover:text-cream"
              }`}
            >
              {c.tab}
            </button>
          ))}
        </div>
      </div>
      <div className="border border-white/10 bg-white/[0.02] rounded-md">
        <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-center">
          <div className="md:col-span-5">
            <div className="font-mono text-[11px] tracking-widest text-stone-soft mb-4">
              / OUTCOME · {current.tab.toUpperCase()}
            </div>
            <div className="text-4xl md:text-5xl leading-[1.05] text-cream tracking-tight">
              {current.metric}
            </div>
            <p className="mt-6 text-stone leading-relaxed">{current.body}</p>
          </div>
          <div className="md:col-span-7 min-h-[260px] flex items-center">
            <Waveform bars={80} peakCenter={current.peak} peakWidth={0.12} className="w-full h-64" />
          </div>
        </div>
      </div>
    </div>
  );
}
