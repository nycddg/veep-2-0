import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { BOOKING_URL } from "@/lib/booking";


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
  density = "default",
  divider = false,
  maxWidth = "7xl",
}: {
  children: ReactNode;
  className?: string;
  tone?: "canvas" | "light" | "panel" | "ink" | "forest" | "muted" | "cream";
  index?: string | number;
  category?: string;
  bare?: boolean;
  density?: "default" | "dense" | "spacious" | "hero";
  divider?: boolean;
  maxWidth?: "7xl" | "wide" | "full";
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

  // Legacy mono index/category chrome retired; args accepted but ignored.
  void index; void category; void labelColor; void ruleColor;

  const padCls =
    density === "hero"
      ? "py-20 md:py-28"
      : density === "dense"
      ? "py-14 md:py-20"
      : density === "spacious"
      ? "py-28 md:py-40"
      : "py-20 md:py-28";

  const borderCls = divider
    ? tone === "light"
      ? "border-t border-ink/10"
      : "border-t border-white/10"
    : "";

  const maxWidthCls =
    maxWidth === "wide"
      ? "max-w-[81.5rem]"
      : maxWidth === "full"
      ? "max-w-none"
      : "max-w-7xl";

  return (
    <section className={`${toneCls} ${borderCls} ${className}`}>
      <div className={`mx-auto ${maxWidthCls} px-4 sm:px-6 lg:px-8`}>
        <div className={bare ? "" : padCls}>{children}</div>
      </div>
    </section>
  );
}


/**
 * Eyebrow — indigo micro-caps marker matching the homepage section headers.
 */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
      {children}
    </div>
  );
}

/**
 * MonoLabel — Attio-style numeric column indicator ("0.1", "0.2", …).
 */
export function MonoLabel({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[11px] tracking-[0.14em] text-stone-soft">
      {children}
    </span>
  );
}

/**
 * DualCTA — light pill primary (opens booking calendar in new tab) +
 * outlined secondary linking to /contact for the audit intent.
 */
export function DualCTA({
  tone = "onDark",
  primaryLabel = "Book a call",
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
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full px-5 py-3 text-sm font-medium transition ${primary}`}
      >
        {primaryLabel}
      </a>
      <Link
        to="/contact"
        search={{ intent: "audit" }}
        className={`rounded-full px-5 py-3 text-sm font-medium transition ${secondary}`}
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
          <span className="font-mono text-[11px] tracking-[0.14em] text-stone-soft pt-1 w-10 shrink-0">
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
      <span className="font-mono text-[11px] tracking-[0.14em] uppercase">
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
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-stone-soft">{label}</div>
      <div className="mt-0.5 text-sm font-medium text-cream">{value}</div>
    </div>
  );
}
