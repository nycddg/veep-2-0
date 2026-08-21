import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  action,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  action?: ReactNode;
}) {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
      <div className="min-w-0 max-w-2xl">
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">{eyebrow}</div>
        <h1 className="mt-3 text-2xl md:text-3xl tracking-tight text-cream">{title}</h1>
        {intro && <p className="mt-3 text-base leading-relaxed text-stone">{intro}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </header>
  );
}

export function SectionTitle({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <h2 className="text-lg tracking-tight text-cream">{children}</h2>
      {aside}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone-soft">{children}</div>
  );
}

export function Status({ label, tone = "quiet" }: { label: string; tone?: "quiet" | "accent" | "warn" }) {
  const cls =
    tone === "accent"
      ? "border-accent/40 text-accent"
      : tone === "warn"
        ? "border-[color:var(--accent-coral)]/50 text-[color:var(--accent-coral)]"
        : "border-white/15 text-stone";
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-[6px] border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.1em] ${cls}`}
    >
      {label}
    </span>
  );
}

export function PrimaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return (
    <button
      {...rest}
      className={`motion-cta inline-flex min-h-11 items-center justify-center rounded-[6px] bg-cream px-5 py-2.5 text-sm font-medium text-ink transition hover:opacity-90 disabled:opacity-50 ${className}`}
    />
  );
}

export function GhostButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return (
    <button
      {...rest}
      className={`inline-flex min-h-11 items-center justify-center rounded-[6px] border border-white/15 px-5 py-2.5 text-sm text-cream transition hover:bg-white/5 disabled:opacity-50 ${className}`}
    />
  );
}

export function TextButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return (
    <button
      {...rest}
      className={`text-sm text-accent underline underline-offset-4 transition hover:opacity-80 ${className}`}
    />
  );
}

/** The one raised surface allowed per logical unit. Never nest these. */
export function Surface({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[6px] bg-[color:var(--surface-raised)] p-5 shadow-sm md:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function Rows({ children }: { children: ReactNode }) {
  return <div className="divide-y divide-white/10 border-y border-white/10">{children}</div>;
}

export function Row({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="block w-full cursor-pointer px-1 py-4 text-left transition hover:bg-white/[0.03]"
      >
        {children}
      </button>
    );
  }
  return <div className="px-1 py-4">{children}</div>;
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">
        {label}
      </span>
      {children}
    </label>
  );
}

export const inputCls =
  "w-full rounded-lg border border-white/12 bg-white/5 px-3 py-2.5 text-sm text-cream outline-none focus:border-accent";

export function DemoNote({ children }: { children?: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone-soft">
      {children ?? "Demo data — placeholder content for this release"}
    </p>
  );
}

export function KeyValue({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((i) => (
        <div key={i.label}>
          <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-stone-soft">{i.label}</dt>
          <dd className="mt-1.5 text-base text-cream">{i.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function EmptyState({ children }: { children: ReactNode }) {
  return <p className="py-6 text-base text-stone">{children}</p>;
}