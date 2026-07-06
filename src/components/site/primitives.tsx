import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Section — every marketing band is treated like a page in a technical manual.
 * Optional index ([0N]) and category (/ CATEGORY) render as monospace labels
 * on a faint ruled top border. Default tone is dark ("canvas"); pass "light"
 * for the one inverted section on the site, or "panel" for a raised charcoal.
 */
export function Section({
  children,
  className = "",
  tone = "canvas",
  index,
  category,
  bare = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: "canvas" | "light" | "panel" | "ink" | "forest" | "muted" | "cream";
  index?: string | number;
  category?: string;
  bare?: boolean;
}) {
  const toneCls =
    tone === "light"
      ? "bg-cream text-ink"
      : tone === "panel"
      ? "bg-card text-cream"
      : tone === "muted"
      ? "bg-secondary text-cream"
      : // legacy names all map to the dark canvas
        "bg-background text-cream";

  const isLight = tone === "light";
  const labelColor = isLight ? "text-stone-soft" : "text-stone-soft";
  const ruleColor = isLight ? "border-ink/10" : "border-white/8";

  return (
    <section className={`${toneCls} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(index !== undefined || category) && (
          <div className={`flex items-center justify-between border-t ${ruleColor} pt-5`}>
            <span className={`font-mono text-[11px] tracking-widest ${labelColor}`}>
              {index !== undefined ? `[${String(index).padStart(2, "0")}]` : ""}
            </span>
            {category && (
              <span className={`font-mono text-[11px] tracking-widest ${labelColor}`}>
                / {category}
              </span>
            )}
          </div>
        )}
        <div className={bare ? "" : "py-20 md:py-28"}>{children}</div>
      </div>
    </section>
  );
}

/**
 * Eyebrow — monospace `/ LABEL` marker. No pill, no dot. Pure typographic.
 */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[11px] tracking-widest uppercase text-stone-soft">
      / {children}
    </div>
  );
}

/**
 * MonoLabel — Attio-style numeric column indicator ("0.1", "0.2", …).
 */
export function MonoLabel({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[11px] tracking-widest text-stone-soft">
      {children}
    </span>
  );
}

/**
 * DualCTA — light pill primary + outlined-white secondary. Sized for dark bg.
 */
export function DualCTA({
  tone = "onDark",
  primaryLabel = "Book a discovery call",
  secondaryLabel = "Request a Capacity Audit",
}: {
  tone?: "onDark" | "onLight";
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const primary =
    tone === "onLight"
      ? "bg-ink text-cream hover:opacity-90"
      : "bg-cream text-ink hover:opacity-90";
  const secondary =
    tone === "onLight"
      ? "border border-ink/20 text-ink hover:bg-ink/5"
      : "border border-cream/20 text-cream hover:bg-cream/10";
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        to="/contact"
        className={`rounded-md px-5 py-3 text-sm font-medium transition ${primary}`}
      >
        {primaryLabel}
      </Link>
      <Link
        to="/contact"
        search={{ intent: "audit" }}
        className={`rounded-md px-5 py-3 text-sm font-medium transition ${secondary}`}
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}

/**
 * CheckList — thin rules and mono-index bullets, not filled green checks.
 */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-white/8 border-y border-white/8">
      {items.map((it, i) => (
        <li key={it} className="flex items-start gap-4 py-3 text-[15px] leading-relaxed text-cream/85">
          <span className="font-mono text-[11px] tracking-widest text-stone-soft pt-1 w-10 shrink-0">
            0.{i + 1}
          </span>
          <span className="flex-1">{it}</span>
          <Check size={14} strokeWidth={2} className="text-accent-gold mt-1.5 shrink-0" />
        </li>
      ))}
    </ul>
  );
}

/**
 * RatingRow — kept lean. Grey text, single gold dot, no filled star row.
 */
export function RatingRow() {
  return (
    <div className="flex items-center gap-3 text-sm text-stone">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-gold" />
      <span className="font-mono text-[11px] tracking-widest uppercase">
        Trusted by founders, boards, and investors
      </span>
    </div>
  );
}

/* Kept exports (unused by new marketing surfaces) so any lingering imports compile. */
export function MockPanel({ children }: { children?: ReactNode }) {
  return (
    <div className="relative rounded-lg bg-card border border-border shadow-elegant p-6 md:p-8 overflow-hidden">
      <div className="relative">{children}</div>
    </div>
  );
}

export function FloatingChip({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`rounded-md bg-card border border-border px-4 py-3 ${className}`}>
      <div className="font-mono text-[10px] uppercase tracking-widest text-stone-soft">{label}</div>
      <div className="mt-0.5 text-sm font-medium text-cream">{value}</div>
    </div>
  );
}
