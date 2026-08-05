export function TrustChip({ label = "72-hour match · 30-day fit guarantee" }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-[10px] font-medium tracking-[0.12em] uppercase text-accent">
      <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(from_var(--accent)_h_s_l_/_0.8)]" />
      {label}
    </div>
  );
}
