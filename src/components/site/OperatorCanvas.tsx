import { Star } from "lucide-react";

const MATRIX = [
  { label: "Functional Depth", value: 97 },
  { label: "Business Model", value: 95 },
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
        <div className="relative z-10 mx-auto w-full aspect-[16/9] max-w-2xl rounded-3xl bg-gradient-to-br from-[#1a1c2e] to-[#0a0c16] border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
          <div className="w-32 h-32 rounded-full bg-accent/5 flex items-center justify-center border border-accent/30 shadow-[0_0_60px_rgba(99,102,241,0.15)]">
            <span className="text-accent text-4xl font-extrabold tracking-tighter">OP</span>
          </div>
        </div>

        {/* Match badge */}
        <div className="absolute -top-6 left-2 md:-left-4 z-20 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center gap-3 op-float">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            <Star size={18} className="text-white fill-white" />
          </div>
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-[0.12em] text-accent font-black">Operator Found</p>
            <p className="text-sm text-cream font-bold">95% Match Rate</p>
          </div>
        </div>

        {/* Match matrix */}
        <div className="absolute -bottom-10 right-0 md:-right-6 z-20 bg-[#0a0c16]/80 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.7)] w-[260px] md:w-[280px] op-float-delayed">
          <p className="text-[10px] text-cream/60 mb-5 font-bold uppercase tracking-[0.2em]">Match Matrix</p>
          <div className="space-y-4">
            {MATRIX.map((row) => (
              <div key={row.label}>
                <div className="flex justify-between text-[11px] text-cream mb-1.5 font-semibold">
                  <span>{row.label}</span>
                  <span>{row.value}%</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent"
                    style={{
                      width: `${row.value}%`,
                      boxShadow: row.value === 100 ? "0 0 8px rgba(99,102,241,0.5)" : undefined,
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