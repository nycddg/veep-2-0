// Hero visual — Barcode.
// Uniform-height vertical lines spread horizontally; stroke weight ramps
// thin → thick → thin across the width via a cosine envelope.

const LINES = 80;
const VB = 480;
const CY = VB / 2;
const SIDE_PAD = 40;
const USABLE_W = VB - SIDE_PAD * 2;
const COL_GAP = USABLE_W / (LINES - 1);
const START_X = SIDE_PAD;

const BAND_H = VB * 0.7;
const MAX_W = 6.5;
const MIN_W = 0.6;
const MAX_OP = 0.9;
const MIN_OP = 0.35;

// Cosine falloff from center: 1 at middle, 0 at edges.
function envelopeAt(i: number) {
  const t = (i - (LINES - 1) / 2) / ((LINES - 1) / 2); // -1..1
  return Math.cos((t * Math.PI) / 2);                  // 0..1..0
}

const cols = Array.from({ length: LINES }, (_, i) => {
  const env = envelopeAt(i);
  return {
    x: START_X + i * COL_GAP,
    w: MIN_W + (MAX_W - MIN_W) * env,
    op: MIN_OP + (MAX_OP - MIN_OP) * env,
  };
});

export function HeroMotif() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          viewBox={`0 0 ${VB} ${VB}`}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {cols.map((c, i) => {
            const y1 = CY - BAND_H / 2;
            const y2 = CY + BAND_H / 2;
            return (
              <line
                key={i}
                x1={c.x}
                y1={y1}
                x2={c.x}
                y2={y2}
                stroke="#F5F1EA"
                strokeOpacity={c.op}
                strokeWidth={c.w}
                strokeLinecap="butt"
              />
            );
          })}
        </svg>
      </div>

    </div>
  );
}
