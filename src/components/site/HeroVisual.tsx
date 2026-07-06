import { FloatingChip, MockPanel } from "./primitives";

export function HeroVisual() {
  return (
    <div className="relative">
      <MockPanel>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-stone">Engagement</div>
            <div className="mt-1 font-serif text-2xl text-ink">Fractional C-Suite — Series B prep</div>
          </div>
          <span className="rounded-full bg-forest/10 text-forest text-xs px-3 py-1">Active · Day 18</span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { k: "Owner", v: "Maya R." },
            { k: "Cadence", v: "Weekly" },
            { k: "Runway", v: "22 mo" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl bg-secondary p-3">
              <div className="text-[10px] uppercase tracking-widest text-stone">{s.k}</div>
              <div className="mt-1 text-sm font-medium text-ink">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          {[
            { t: "Lender diligence pack shipped", d: "Yesterday" },
            { t: "Board reporting v2 approved", d: "3 days ago" },
            { t: "13-week cash rebuilt with ops", d: "This week" },
          ].map((r) => (
            <div key={r.t} className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-forest" />
                <span className="text-sm text-ink">{r.t}</span>
              </div>
              <span className="text-xs text-stone">{r.d}</span>
            </div>
          ))}
        </div>
      </MockPanel>

      <FloatingChip
        label="Onboarded"
        value="7 days"
        className="absolute -left-4 md:-left-10 top-8"
      />
      <FloatingChip
        label="Fit guarantee"
        value="30 days"
        className="absolute -right-2 md:-right-8 bottom-10"
      />
    </div>
  );
}
