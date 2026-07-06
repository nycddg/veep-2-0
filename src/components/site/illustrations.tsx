/**
 * Line-based generative illustration kit.
 * Vocabulary: thin evenly-spaced lines; one dimension (length, opacity, color, weight)
 * varies to encode meaning. Every illustration is a single pure SVG.
 */
import type { CSSProperties } from "react";

/* -------------------------------------------------------------------------- */
/* GradientPyramid — the signature Attio "Universal Context" figure.
   A pyramid of horizontal lines that fade from mint at the top to coral at
   the base. Used as the hero visual. */
export function GradientPyramid({ className = "" }: { className?: string }) {
  const rows = 22;
  const maxWidth = 720;
  const gap = 14;
  return (
    <svg
      viewBox={`0 0 ${maxWidth + 40} ${rows * gap + 40}`}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pyr-mint" x1="0" x2="1" y1="0" y2="0" gradientUnits="objectBoundingBox">
          <stop offset="0" style={{ stopColor: "#7dd3fc", stopOpacity: 0 }} />
          <stop offset="0.15" style={{ stopColor: "#5eead4", stopOpacity: 0.9 }} />
          <stop offset="0.85" style={{ stopColor: "#5eead4", stopOpacity: 0.9 }} />
          <stop offset="1" style={{ stopColor: "#7dd3fc", stopOpacity: 0 }} />
        </linearGradient>
        <linearGradient id="pyr-gold" x1="0" x2="1" y1="0" y2="0" gradientUnits="objectBoundingBox">
          <stop offset="0" style={{ stopColor: "#e8c46a", stopOpacity: 0 }} />
          <stop offset="0.5" style={{ stopColor: "#e8c46a", stopOpacity: 0.95 }} />
          <stop offset="1" style={{ stopColor: "#e8c46a", stopOpacity: 0 }} />
        </linearGradient>
        <linearGradient id="pyr-coral" x1="0" x2="1" y1="0" y2="0" gradientUnits="objectBoundingBox">
          <stop offset="0" style={{ stopColor: "#f5a97f", stopOpacity: 0 }} />
          <stop offset="0.5" style={{ stopColor: "#f5a97f", stopOpacity: 0.9 }} />
          <stop offset="1" style={{ stopColor: "#f5a97f", stopOpacity: 0 }} />
        </linearGradient>
        <linearGradient id="pyr-grey" x1="0" x2="1" y1="0" y2="0" gradientUnits="objectBoundingBox">
          <stop offset="0" style={{ stopColor: "#ffffff", stopOpacity: 0 }} />
          <stop offset="0.5" style={{ stopColor: "#ffffff", stopOpacity: 0.28 }} />
          <stop offset="1" style={{ stopColor: "#ffffff", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      {Array.from({ length: rows }).map((_, i) => {
        const y = 20 + i * gap;
        const w = ((i + 1) / rows) * maxWidth;
        const cx = (maxWidth + 40) / 2;
        const t = i / (rows - 1);
        let fill = "url(#pyr-grey)";
        if (t < 0.25) fill = "url(#pyr-mint)";
        else if (t < 0.6) fill = "url(#pyr-gold)";
        else fill = "url(#pyr-coral)";
        return (
          <rect
            key={i}
            x={cx - w / 2}
            y={y - 1.25}
            width={w}
            height={2.5}
            rx={1.25}
            fill={fill}
          />
        );
      })}
    </svg>
  );
}


/* -------------------------------------------------------------------------- */
/* Waveform — Attio "system of action" vertical-bar chart.
   Bars uniformly light; a central cluster darkens/shifts to gold to imply a
   peak / moment. Used in stats band and case switcher. */
export function Waveform({
  bars = 96,
  peakCenter = 0.62,
  peakWidth = 0.14,
  className = "",
  height = 220,
  variant = "dark",
}: {
  bars?: number;
  peakCenter?: number; // 0-1
  peakWidth?: number;  // 0-1
  className?: string;
  height?: number;
  variant?: "dark" | "light";
}) {
  const baseStroke =
    variant === "light" ? "oklch(0.13 0 0 / 0.18)" : "oklch(1 0 0 / 0.16)";
  const peakStroke =
    variant === "light" ? "oklch(0.13 0 0)" : "#e8c46a";
  return (
    <svg
      viewBox={`0 0 ${bars * 8} ${height}`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => {
        const t = i / (bars - 1);
        const distFromPeak = Math.abs(t - peakCenter);
        const inPeak = distFromPeak < peakWidth / 2;
        // vary length subtly by sinusoidal + peak envelope
        const envelope =
          0.35 + Math.max(0, 1 - distFromPeak / 0.4) * 0.55 + Math.sin(t * 12) * 0.05;
        const h = Math.max(20, envelope * height);
        const x = i * 8 + 3;
        const y = (height - h) / 2;
        return (
          <line
            key={i}
            x1={x}
            x2={x}
            y1={y}
            y2={y + h}
            stroke={inPeak ? peakStroke : baseStroke}
            strokeWidth={inPeak ? 2.5 : 1.5}
            strokeLinecap="round"
            
          />
        );
      })}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* TickRuler — thin horizontal tick marks with a subtle center highlight. */
export function TickRuler({
  ticks = 120,
  highlightCenter = true,
  className = "",
}: {
  ticks?: number;
  highlightCenter?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${ticks * 6} 28`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: ticks }).map((_, i) => {
        const t = i / (ticks - 1);
        const center = Math.abs(t - 0.5);
        const highlight = highlightCenter && center < 0.02;
        return (
          <line
            key={i}
            x1={i * 6 + 3}
            x2={i * 6 + 3}
            y1={4}
            y2={24}
            stroke={
              highlight
                ? "#f5f5f0"
                : `oklch(1 0 0 / ${0.06 + (1 - center) * 0.14})`
            }
            strokeWidth={highlight ? 2 : 1}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Timeline — horizontal engagement window on a faint baseline of tick marks. */
export function Timeline({
  fillStart = 0.25,
  fillEnd = 0.55,
  className = "",
  label,
}: {
  fillStart?: number;
  fillEnd?: number;
  className?: string;
  label?: string;
}) {
  const width = 480;
  const height = 90;
  const ticks = 60;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} aria-hidden="true">
      {/* baseline ticks */}
      {Array.from({ length: ticks }).map((_, i) => {
        const x = (i / (ticks - 1)) * width;
        const t = i / (ticks - 1);
        const inFill = t >= fillStart && t <= fillEnd;
        return (
          <line
            key={i}
            x1={x}
            x2={x}
            y1={height / 2 - (inFill ? 12 : 4)}
            y2={height / 2 + (inFill ? 12 : 4)}
            stroke={inFill ? "#e8c46a" : "oklch(1 0 0 / 0.16)"}
            strokeWidth={inFill ? 2 : 1}
            strokeLinecap="round"
          />
        );
      })}
      {/* endpoint labels */}
      <text x={fillStart * width} y={height - 8} className="mono-label" fill="#7a7a7a" fontSize="9">
        START
      </text>
      <text x={fillEnd * width - 28} y={height - 8} className="mono-label" fill="#7a7a7a" fontSize="9">
        HANDOFF
      </text>
      {label && (
        <text x={((fillStart + fillEnd) / 2) * width - 30} y={18} fill="#f5f5f0" fontSize="11">
          {label}
        </text>
      )}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* DotCluster — clusters of dots (portfolio companies) linked to a central bench. */
export function DotCluster({ className = "" }: { className?: string }) {
  const clusters = [
    { cx: 90, cy: 60, dots: 5 },
    { cx: 90, cy: 190, dots: 4 },
    { cx: 470, cy: 60, dots: 6 },
    { cx: 470, cy: 190, dots: 5 },
  ];
  const center = { cx: 280, cy: 125 };
  return (
    <svg viewBox="0 0 560 250" className={className} aria-hidden="true">
      {/* connecting lines */}
      {clusters.map((c, i) => (
        <line
          key={`l-${i}`}
          x1={center.cx}
          y1={center.cy}
          x2={c.cx}
          y2={c.cy}
          stroke="oklch(1 0 0 / 0.10)"
          strokeWidth={1}
          strokeDasharray="2 4"
        />
      ))}
      {/* cluster dots */}
      {clusters.map((c, ci) =>
        Array.from({ length: c.dots }).map((_, i) => {
          const angle = (i / c.dots) * Math.PI * 2;
          const r = 22;
          return (
            <circle
              key={`d-${ci}-${i}`}
              cx={c.cx + Math.cos(angle) * r}
              cy={c.cy + Math.sin(angle) * r}
              r={3}
              fill="oklch(1 0 0 / 0.55)"
            />
          );
        })
      )}
      {/* central bench */}
      <circle cx={center.cx} cy={center.cy} r={8} fill="#e8c46a" />
      <circle cx={center.cx} cy={center.cy} r={22} fill="none" stroke="#e8c46a" strokeWidth={1} strokeOpacity={0.4} />
      <circle cx={center.cx} cy={center.cy} r={38} fill="none" stroke="#e8c46a" strokeWidth={1} strokeOpacity={0.2} />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* BarStack — small vertical bar array; used inline in cards. */
export function BarStack({
  bars = 24,
  className = "",
  highlightIndex,
}: {
  bars?: number;
  className?: string;
  highlightIndex?: number;
}) {
  return (
    <svg viewBox={`0 0 ${bars * 6} 44`} className={className} preserveAspectRatio="none" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => {
        const h = 12 + Math.abs(Math.sin(i * 0.5)) * 28;
        const y = (44 - h) / 2;
        const isHighlight = highlightIndex === i;
        return (
          <line
            key={i}
            x1={i * 6 + 3}
            x2={i * 6 + 3}
            y1={y}
            y2={y + h}
            stroke={isHighlight ? "#e8c46a" : "oklch(1 0 0 / 0.22)"}
            strokeWidth={isHighlight ? 2 : 1.5}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* RuledGrid — decorative faint horizontal rules under a section. */
export function RuledGrid({ rows = 8, className = "" }: { rows?: number; className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="ruled-bottom"
          style={{ height: `${100 / rows}%` } as CSSProperties}
        />
      ))}
    </div>
  );
}
