// Hero visual — Signal.
// Vertical hairlines evenly spaced; heights vary in a slow sinusoidal envelope
// so top and bottom edges form soft opposing curves. One center line indigo,
// slightly taller. Very slow 12s breathing on line heights (±3%).

const LINES = 48;
const VB = 480;                         // viewBox size
const CX = VB / 2;                      // horizontal center
const CY = VB / 2;                      // vertical center
const SIDE_PAD = 40;                    // horizontal padding
const USABLE_W = VB - SIDE_PAD * 2;
const COL_GAP = USABLE_W / (LINES - 1); // spacing between lines
const START_X = SIDE_PAD;

const MAX_H = 300;                      // tallest line (center)
const MIN_H = 40;                       // shortest line (edges)
const CENTER_IDX = Math.floor(LINES / 2);

// Sinusoidal envelope: cosine falloff from center produces opposing top/bottom curves.
function heightAt(i: number) {
  const t = (i - (LINES - 1) / 2) / ((LINES - 1) / 2); // -1..1
  const env = Math.cos((t * Math.PI) / 2);             // 0..1..0
  return MIN_H + (MAX_H - MIN_H) * env;
}

const cols = Array.from({ length: LINES }, (_, i) => {
  const h = heightAt(i);
  const isCenter = i === CENTER_IDX;
  return {
    x: START_X + i * COL_GAP,
    h: isCenter ? h * 1.08 : h, // center slightly taller
    isCenter,
    // Distinct phase per column so breathing feels organic.
    phase: (i * 53) % 100,
  };
});

export function HeroMotif() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      <div className="absolute inset-0 rounded-sm border border-white/10 bg-white/[0.015] overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#F5F1EA 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Corner meta */}
        <div className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.12em] uppercase text-cream/40">
          Ownership · Signal
        </div>
        <div className="absolute top-5 right-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-cream/40">
          <span className="h-1.5 w-1.5 rounded-full bg-accent motif-pulse" />
          Active
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[10px] tracking-[0.12em] uppercase text-cream/30">
          <span>Streams → Owner → Output</span>
          <span>V-03</span>
        </div>

        <svg
          viewBox={`0 0 ${VB} ${VB}`}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {cols.map((c, i) => {
            const color = c.isCenter ? "#6366F1" : "#F5F1EA";
            const op = c.isCenter ? 0.9 : 0.28 + (c.h / MAX_H) * 0.15;
            const y1 = CY - c.h / 2;
            const y2 = CY + c.h / 2;

            return (
              <line
                key={i}
                x1={c.x}
                y1={y1}
                x2={c.x}
                y2={y2}
                stroke={color}
                strokeOpacity={op}
                strokeWidth={c.isCenter ? 1.25 : 1}
                strokeLinecap="round"
                className="motif-line"
                style={{
                  transformOrigin: `${c.x}px ${CY}px`,
                  animationDelay: `-${c.phase / 10}s`,
                }}
              />
            );
          })}
        </svg>
      </div>

      <style>{`
        @keyframes motifBreathe {
          0%,100% { transform: scaleY(0.97); }
          50%     { transform: scaleY(1.03); }
        }
        .motif-line {
          animation: motifBreathe 12s ease-in-out infinite;
        }
        @keyframes motifPulse {
          0%, 100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
        .motif-pulse { animation: motifPulse 2.4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .motif-line, .motif-pulse { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
