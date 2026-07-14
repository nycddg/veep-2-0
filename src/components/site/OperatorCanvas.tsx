import { Star } from "lucide-react";
import headshotAsset from "@/assets/operator-headshot.png.asset.json";

const MATRIX = [
  { label: "Functional Depth", value: 97 },
  { label: "Business Model Familiarity", value: 95 },
  { label: "Industry Expertise", value: 98 },
  { label: "Life Stage Experience", value: 100 },
];

export function OperatorCanvas() {
  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 md:px-0">
      {/* ambient indigo glow */}
      <div className="absolute inset-0 bg-accent/10 blur-[120px] rounded-full scale-90 pointer-events-none" />

      <div className="relative">
        {/* Headshot slot */}
        <div className="relative z-10 mx-auto w-full aspect-[16/9] max-w-2xl rounded-3xl bg-[color:var(--surface-raised)] overflow-hidden shadow-2xl">
          <img
            src={headshotAsset.url}
            alt="Vetted operator headshot"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Match badge — hidden on small screens to keep hero uncluttered */}
        <div className="hidden sm:flex absolute -top-6 left-2 md:-left-4 z-20 bg-background/85 light:bg-white/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] items-center gap-3 op-float">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-[0_0_20px_rgba(120,159,255,0.4)]">
            <Star size={18} className="text-white fill-white" />
          </div>
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-[0.12em] text-accent font-medium">MATCH HISTORY</p>
            <p className="text-sm text-cream font-medium">95% Match Success Rate</p>
          </div>
        </div>

        {/* Match matrix — hidden on small screens */}
        <div className="hidden sm:block absolute -bottom-10 right-0 md:-right-6 z-20 bg-[color:var(--surface-raised)]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.7)] w-[260px] md:w-[280px] op-float-delayed">
          <p className="text-[10px] text-cream/80 mb-5 font-medium uppercase tracking-[0.16em]">Match Matrix</p>
          <div className="space-y-4">
            {MATRIX.map((row) => (
              <div key={row.label}>
                <div className="flex justify-between text-[11px] text-white mb-1.5 font-medium">
                  <span>{row.label}</span>
                  <span>{row.value}%</span>
                </div>
                <div className="h-1 w-full bg-white/15 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent"
                    style={{
                      width: `${row.value}%`,
                      boxShadow: row.value === 100 ? "0 0 8px rgba(120,159,255,0.5)" : undefined,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes op-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        @keyframes op-float-delayed { 0%,100% { transform: translateY(0) } 50% { transform: translateY(12px) } }
        .op-float { animation: op-float 6s ease-in-out infinite; }
        .op-float-delayed { animation: op-float-delayed 7s ease-in-out infinite; }
      `}</style>
    </div>
  );
}