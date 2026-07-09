// Ownership loop: an operator (indigo dot) enters the founder's system
// (sparse constellation), snaps into place, connects to neighbors, and the
// system stabilizes. Pure SVG + CSS keyframes — no runtime deps.
// Respects prefers-reduced-motion (renders final state as a still).

const NODES: { cx: number; cy: number; r: number; delay: number }[] = [
  { cx: 90,  cy: 110, r: 2.5, delay: 0.0 },
  { cx: 180, cy: 70,  r: 2,   delay: 0.2 },
  { cx: 260, cy: 140, r: 2.5, delay: 0.4 },
  { cx: 340, cy: 90,  r: 2,   delay: 0.6 },
  { cx: 120, cy: 240, r: 2,   delay: 0.8 },
  { cx: 220, cy: 300, r: 2.5, delay: 1.0 },
  { cx: 330, cy: 260, r: 2,   delay: 1.2 },
  { cx: 60,  cy: 340, r: 2,   delay: 1.4 },
  { cx: 380, cy: 340, r: 2,   delay: 1.6 },
  { cx: 180, cy: 400, r: 2.5, delay: 1.8 },
];

// Operator lands on this node.
const ANCHOR = { cx: 220, cy: 230 };

// Connections drawn from the operator to nearby nodes (indices into NODES).
const LINKS = [1, 2, 4, 5];

export function HeroMotif() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* Frame — matches existing card language */}
      <div className="absolute inset-0 rounded-sm border border-white/10 bg-white/[0.015] overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#F5F1EA 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Corner meta — reinforces editorial, not decorative */}
        <div className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.12em] uppercase text-cream/40">
          Ownership · Loop
        </div>
        <div className="absolute top-5 right-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-cream/40">
          <span className="h-1.5 w-1.5 rounded-full bg-accent motif-pulse" />
          Active
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[10px] tracking-[0.12em] uppercase text-cream/30">
          <span>Operator → System</span>
          <span>V-01</span>
        </div>

        <svg
          viewBox="0 0 440 440"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {/* Static system nodes (founder's org) */}
          {NODES.map((n, i) => (
            <circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="#F5F1EA"
              opacity="0.28"
              className="motif-node"
              style={{ animationDelay: `${n.delay}s` }}
            />
          ))}

          {/* Connective lines drawn from anchor outward */}
          <g stroke="#6366F1" strokeWidth="0.75" strokeOpacity="0.55" fill="none">
            {LINKS.map((idx, i) => {
              const n = NODES[idx];
              return (
                <line
                  key={idx}
                  x1={ANCHOR.cx}
                  y1={ANCHOR.cy}
                  x2={n.cx}
                  y2={n.cy}
                  className="motif-link"
                  style={{
                    strokeDasharray: 400,
                    strokeDashoffset: 400,
                    animationDelay: `${3.2 + i * 0.25}s`,
                  }}
                />
              );
            })}
          </g>

          {/* Expanding ring — the "snap" moment */}
          <circle
            cx={ANCHOR.cx}
            cy={ANCHOR.cy}
            r="6"
            fill="none"
            stroke="#6366F1"
            strokeWidth="1"
            className="motif-ring"
          />

          {/* The operator: enters, travels, lands on the anchor */}
          <g className="motif-operator">
            <circle r="5" fill="#6366F1" />
            <circle r="10" fill="#6366F1" opacity="0.15" />
          </g>
        </svg>
      </div>

      <style>{`
        @keyframes motifOperator {
          0%   { transform: translate(-40px, 40px); opacity: 0; }
          8%   { opacity: 1; }
          38%  { transform: translate(${ANCHOR.cx}px, ${ANCHOR.cy}px); opacity: 1; }
          100% { transform: translate(${ANCHOR.cx}px, ${ANCHOR.cy}px); opacity: 1; }
        }
        .motif-operator {
          transform-box: fill-box;
          animation: motifOperator 9s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
        }
        @keyframes motifRing {
          0%, 38%   { r: 6;  opacity: 0; }
          42%       { r: 6;  opacity: 0.9; }
          70%       { r: 42; opacity: 0; }
          100%      { r: 42; opacity: 0; }
        }
        .motif-ring { animation: motifRing 9s ease-out infinite; }
        @keyframes motifLink {
          0%, 40%   { stroke-dashoffset: 400; opacity: 0; }
          55%       { opacity: 1; }
          75%, 100% { stroke-dashoffset: 0; opacity: 1; }
        }
        .motif-link { animation: motifLink 9s ease-out infinite; }
        @keyframes motifNode {
          0%, 100% { opacity: 0.22; }
          50%      { opacity: 0.42; }
        }
        .motif-node { animation: motifNode 6s ease-in-out infinite; }
        @keyframes motifPulse {
          0%, 100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
        .motif-pulse { animation: motifPulse 2.4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .motif-operator, .motif-ring, .motif-link, .motif-node, .motif-pulse {
            animation: none !important;
          }
          .motif-operator { transform: translate(${ANCHOR.cx}px, ${ANCHOR.cy}px); }
          .motif-link { stroke-dashoffset: 0; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
