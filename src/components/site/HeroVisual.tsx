import { GradientPyramid } from "./illustrations";

const cols = [
  { k: "0.1", h: "Fractional", d: "C-suite capacity for the pivotal moment." },
  { k: "0.2", h: "Interim", d: "Own the seat while the search runs." },
  { k: "0.3", h: "Sprint", d: "Ship one outcome with a clear endpoint." },
  { k: "0.4", h: "Bench", d: "Portfolio-wide executive capacity." },
  { k: "0.5", h: "AI-powered", d: "Operators governing unlimited AI staff." },
];

export function HeroVisual() {
  return (
    <div className="w-full">
      <div className="text-center">
        <div className="font-mono text-[11px] tracking-widest text-stone-soft">
          / POWERED BY
        </div>
        <div className="mt-3 text-3xl md:text-4xl tracking-tight text-cream">
          Operator Bench<sup className="font-mono text-[10px] text-stone-soft ml-1">™</sup>
        </div>
      </div>
      <GradientPyramid className="w-full h-[300px] mt-6" />
      <div className="grid grid-cols-5 gap-4 pt-6 border-t border-white/8">
        {cols.map((c) => (
          <div key={c.k}>
            <div className="text-[12px] leading-snug">
              <span className="text-cream">{c.h}</span>{" "}
              <span className="text-stone">{c.d}</span>
            </div>
            <div className="mt-6 font-mono text-[11px] tracking-widest text-stone-soft">
              {c.k}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
