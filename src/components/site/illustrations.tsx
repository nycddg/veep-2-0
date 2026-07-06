/**
 * Line-based generative illustration kit — mint→coral spectrum only.
 * Every illustration animates once on scroll via the useInView hook.
 */
import type { CSSProperties } from "react";
import { useInView } from "./useInView";

/* Shared gradient defs — mint → teal → peach → coral. Referenced by id. */
function GradientDefs() {
  return (
    <defs>
      <linearGradient id="ill-spectrum" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#7CE0C0" />
        <stop offset="0.4" stopColor="#56C7C0" />
        <stop offset="0.7" stopColor="#F2A47C" />
        <stop offset="1" stopColor="#EE6A4D" />
      </linearGradient>
      <linearGradient id="ill-spectrum-soft" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#7CE0C0" stopOpacity="0" />
        <stop offset="0.15" stopColor="#7CE0C0" stopOpacity="0.9" />
        <stop offset="0.5" stopColor="#F2A47C" stopOpacity="0.9" />
        <stop offset="0.85" stopColor="#EE6A4D" stopOpacity="0.9" />
        <stop offset="1" stopColor="#EE6A4D" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

/* -------------------------------------------------------------------------- */
/* GradientPyramid — hero. Stacked bars fade + slide in from center on scroll. */
export function GradientPyramid({ className = "" }: { className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const rows = 22;
  const maxWidth = 720;
  const gap = 14;
  return (
    <div ref={ref} className={className}>
      <svg
        viewBox={`0 0 ${maxWidth + 40} ${rows * gap + 40}`}
        className="w-full h-full"
        aria-hidden="true"
      >
        <GradientDefs />
        {Array.from({ length: rows }).map((_, i) => {
          const y = 20 + i * gap;
          const w = ((i + 1) / rows) * maxWidth;
          const cx = (maxWidth + 40) / 2;
          const delay = i * 35;
          return (
            <rect
              key={i}
              x={cx - w / 2}
              y={y - 1.25}
              width={w}
              height={2.5}
              rx={1.25}
              fill="url(#ill-spectrum-soft)"
              style={{
                transformOrigin: `${cx}px ${y}px`,
                transform: inView ? "scaleX(1)" : "scaleX(0)",
                opacity: inView ? 1 : 0,
                transition: `transform 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 500ms ease-out ${delay}ms`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Waveform — vertical bars grow from center; peak cluster uses gradient. */
export function Waveform({
  bars = 96,
  peakCenter = 0.62,
  peakWidth = 0.14,
  className = "",
  height = 220,
  variant = "dark",
}: {
  bars?: number;
  peakCenter?: number;
  peakWidth?: number;
  className?: string;
  height?: number;
  variant?: "dark" | "light";
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const baseStroke =
    variant === "light" ? "rgba(17,17,17,0.18)" : "rgba(255,255,255,0.16)";
  return (
    <div ref={ref} className={className}>
      <svg
        viewBox={`0 0 ${bars * 8} ${height}`}
        className="w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <GradientDefs />
        {Array.from({ length: bars }).map((_, i) => {
          const t = i / (bars - 1);
          const distFromPeak = Math.abs(t - peakCenter);
          const inPeak = distFromPeak < peakWidth / 2;
          const envelope =
            0.35 + Math.max(0, 1 - distFromPeak / 0.4) * 0.55 + Math.sin(t * 12) * 0.05;
          const h = Math.max(20, envelope * height);
          const x = i * 8 + 3;
          const y = (height - h) / 2;
          const delay = Math.round(i * 12);
          return (
            <line
              key={i}
              x1={x}
              x2={x}
              y1={y}
              y2={y + h}
              stroke={inPeak ? "url(#ill-spectrum)" : baseStroke}
              strokeWidth={inPeak ? 2.5 : 1.5}
              strokeLinecap="round"
              style={{
                transformOrigin: `${x}px ${height / 2}px`,
                transform: inView ? "scaleY(1)" : "scaleY(0)",
                opacity: inView ? 1 : 0,
                transition: `transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 400ms ease-out ${delay}ms`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* TickRuler — ticks stroke-in, center tick pulses once. */
export function TickRuler({
  ticks = 120,
  highlightCenter = true,
  className = "",
}: {
  ticks?: number;
  highlightCenter?: boolean;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      <svg
        viewBox={`0 0 ${ticks * 6} 28`}
        className="w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <GradientDefs />
        {Array.from({ length: ticks }).map((_, i) => {
          const t = i / (ticks - 1);
          const center = Math.abs(t - 0.5);
          const highlight = highlightCenter && center < 0.02;
          const delay = Math.round(i * 6);
          return (
            <line
              key={i}
              x1={i * 6 + 3}
              x2={i * 6 + 3}
              y1={4}
              y2={24}
              stroke={
                highlight
                  ? "url(#ill-spectrum)"
                  : `rgba(255,255,255,${(0.06 + (1 - center) * 0.14).toFixed(3)})`
              }
              strokeWidth={highlight ? 2 : 1}
              strokeLinecap="round"
              style={{
                opacity: inView ? 1 : 0,
                transition: `opacity 500ms ease-out ${delay}ms`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Timeline — engagement window fill draws left→right. */
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
  const [ref, inView] = useInView<HTMLDivElement>();
  const width = 480;
  const height = 90;
  const ticks = 60;
  return (
    <div ref={ref} className={className}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" aria-hidden="true">
        <GradientDefs />
        {Array.from({ length: ticks }).map((_, i) => {
          const x = (i / (ticks - 1)) * width;
          const t = i / (ticks - 1);
          const inFill = t >= fillStart && t <= fillEnd;
          // Delay ordered along the timeline so filled portion sweeps in.
          const delay = Math.round(i * 14);
          return (
            <line
              key={i}
              x1={x}
              x2={x}
              y1={height / 2 - (inFill ? 12 : 4)}
              y2={height / 2 + (inFill ? 12 : 4)}
              stroke={inFill ? "url(#ill-spectrum)" : "rgba(255,255,255,0.16)"}
              strokeWidth={inFill ? 2 : 1}
              strokeLinecap="round"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "scaleY(1)" : "scaleY(0.2)",
                transformOrigin: `${x}px ${height / 2}px`,
                transition: `opacity 400ms ease-out ${delay}ms, transform 500ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
              }}
            />
          );
        })}
        <text x={fillStart * width} y={height - 8} fill="#7a7a7a" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="1">
          START
        </text>
        <text x={fillEnd * width - 32} y={height - 8} fill="#7a7a7a" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="1">
          HANDOFF
        </text>
        {label && (
          <text x={((fillStart + fillEnd) / 2) * width - 30} y={18} fill="#EDEDED" fontSize="11">
            {label}
          </text>
        )}
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DotCluster — nodes fade in, connecting lines stroke-draw, center pulses. */
export function DotCluster({ className = "" }: { className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const clusters = [
    { cx: 90, cy: 60, dots: 5 },
    { cx: 90, cy: 190, dots: 4 },
    { cx: 470, cy: 60, dots: 6 },
    { cx: 470, cy: 190, dots: 5 },
  ];
  const center = { cx: 280, cy: 125 };
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 560 250" className="w-full h-full" aria-hidden="true">
        <GradientDefs />
        {clusters.map((c, i) => {
          const len = Math.hypot(c.cx - center.cx, c.cy - center.cy);
          return (
            <line
              key={`l-${i}`}
              x1={center.cx}
              y1={center.cy}
              x2={c.cx}
              y2={c.cy}
              stroke="url(#ill-spectrum-soft)"
              strokeWidth={1}
              strokeDasharray={len}
              strokeDashoffset={inView ? 0 : len}
              style={{ transition: `stroke-dashoffset 900ms cubic-bezier(0.22,1,0.36,1) ${200 + i * 80}ms` }}
            />
          );
        })}
        {clusters.map((c, ci) =>
          Array.from({ length: c.dots }).map((_, i) => {
            const angle = (i / c.dots) * Math.PI * 2;
            const r = 22;
            const delay = 600 + ci * 100 + i * 40;
            return (
              <circle
                key={`d-${ci}-${i}`}
                cx={c.cx + Math.cos(angle) * r}
                cy={c.cy + Math.sin(angle) * r}
                r={3}
                fill="rgba(255,255,255,0.6)"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: `opacity 400ms ease-out ${delay}ms`,
                }}
              />
            );
          })
        )}
        <circle
          cx={center.cx}
          cy={center.cy}
          r={8}
          fill="url(#ill-spectrum)"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.4)",
            transformOrigin: `${center.cx}px ${center.cy}px`,
            transition: `opacity 500ms ease-out 100ms, transform 600ms cubic-bezier(0.22,1,0.36,1) 100ms`,
          }}
        />
        <circle cx={center.cx} cy={center.cy} r={22} fill="none" stroke="url(#ill-spectrum-soft)" strokeWidth={1} opacity={inView ? 0.5 : 0} style={{ transition: "opacity 700ms ease-out 400ms" }} />
        <circle cx={center.cx} cy={center.cy} r={38} fill="none" stroke="url(#ill-spectrum-soft)" strokeWidth={1} opacity={inView ? 0.25 : 0} style={{ transition: "opacity 700ms ease-out 600ms" }} />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* BarStack — inline vertical bars for card visuals. */
export function BarStack({
  bars = 24,
  className = "",
  highlightIndex,
}: {
  bars?: number;
  className?: string;
  highlightIndex?: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      <svg viewBox={`0 0 ${bars * 6} 44`} className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
        <GradientDefs />
        {Array.from({ length: bars }).map((_, i) => {
          const h = 12 + Math.abs(Math.sin(i * 0.5)) * 28;
          const y = (44 - h) / 2;
          const isHighlight = highlightIndex === i;
          const delay = i * 20;
          return (
            <line
              key={i}
              x1={i * 6 + 3}
              x2={i * 6 + 3}
              y1={y}
              y2={y + h}
              stroke={isHighlight ? "url(#ill-spectrum)" : "rgba(255,255,255,0.22)"}
              strokeWidth={isHighlight ? 2 : 1.5}
              strokeLinecap="round"
              style={{
                transformOrigin: `${i * 6 + 3}px 22px`,
                transform: inView ? "scaleY(1)" : "scaleY(0)",
                transition: `transform 500ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* OrbitDial — arc + satellite for AI operators visual. */
export function OrbitDial({ className = "" }: { className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const cx = 140;
  const cy = 140;
  const r = 90;
  const circumference = 2 * Math.PI * r;
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 280 280" className="w-full h-full" aria-hidden="true">
        <GradientDefs />
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="url(#ill-spectrum)"
          strokeWidth={1.5}
          strokeDasharray={circumference}
          strokeDashoffset={inView ? 0 : circumference}
          style={{ transition: "stroke-dashoffset 1200ms cubic-bezier(0.22,1,0.36,1)" }}
        />
        <circle cx={cx} cy={cy} r={r * 0.6} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth={1} />
        <circle cx={cx} cy={cy} r={4} fill="url(#ill-spectrum)" opacity={inView ? 1 : 0} style={{ transition: "opacity 400ms ease-out 300ms" }} />
        <circle
          cx={cx + r}
          cy={cy}
          r={5}
          fill="#EE6A4D"
          opacity={inView ? 1 : 0}
          style={{
            transformOrigin: `${cx}px ${cy}px`,
            animation: inView ? "orbit 6s linear infinite" : "none",
            transition: "opacity 400ms ease-out 900ms",
          }}
        />
      </svg>
    </div>
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
