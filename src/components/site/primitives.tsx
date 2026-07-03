import { Link } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "ink" | "forest" | "muted";
}) {
  const toneCls =
    tone === "ink"
      ? "bg-ink text-cream"
      : tone === "forest"
      ? "bg-forest-deep text-forest-foreground"
      : tone === "muted"
      ? "bg-secondary text-ink"
      : "bg-background text-ink";
  return (
    <section className={`${toneCls} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-current/20 px-3 py-1 text-xs uppercase tracking-widest opacity-80">
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </div>
  );
}

export function DualCTA({
  tone = "light",
  primaryLabel = "Book a discovery call",
  secondaryLabel = "Request a Capacity Audit",
}: {
  tone?: "light" | "dark";
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const primary =
    tone === "dark"
      ? "bg-cream text-ink hover:opacity-90"
      : "bg-ink text-cream hover:opacity-90";
  const secondary =
    tone === "dark"
      ? "border border-cream/30 text-cream hover:bg-cream/10"
      : "border border-ink/20 text-ink hover:bg-secondary";
  return (
    <div className="flex flex-wrap gap-3">
      <Link to="/contact" className={`rounded-full px-5 py-3 text-sm font-medium transition ${primary}`}>
        {primaryLabel}
      </Link>
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

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-[15px] leading-relaxed">
          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
            <Check size={12} strokeWidth={3} />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function RatingRow() {
  return (
    <div className="flex items-center gap-3 text-sm text-stone">
      <div className="flex text-forest">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <span>Trusted by founders, boards, and investors.</span>
    </div>
  );
}

export function MockPanel({ children }: { children?: ReactNode }) {
  return (
    <div className="relative rounded-3xl bg-card border border-border shadow-elegant p-6 md:p-8 overflow-hidden">
      <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-forest/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-forest/5 blur-3xl" />
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
    <div className={`rounded-2xl bg-card border border-border shadow-float px-4 py-3 ${className}`}>
      <div className="text-[10px] uppercase tracking-widest text-stone">{label}</div>
      <div className="mt-0.5 text-sm font-medium text-ink">{value}</div>
    </div>
  );
}
