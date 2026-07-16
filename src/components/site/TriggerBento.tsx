import { Eyebrow } from "./primitives";

const groups = [
  {
    idx: "0.1",
    title: "Growth",
    triggers: ["Raising capital", "Hiring executives", "Revenue plateau", "GTM redesign"],
  },
  {
    idx: "0.2",
    title: "Operational",
    triggers: ["COO or CFO need", "ERP implementation", "Pricing redesign", "Org redesign"],
  },
  {
    idx: "0.3",
    title: "Leadership",
    triggers: ["Executive departure", "Founder overwhelmed", "PE transition", "New CEO"],
  },
  {
    idx: "0.4",
    title: "Strategic",
    triggers: ["M&A activity", "New product launch", "New geography", "Turnaround"],
  },
];

export function TriggerBento() {
  return (
    <div>
      <div className="max-w-2xl">
        <Eyebrow>Pivotal moments</Eyebrow>
        <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-cream">
          Built for the moments that create urgency.
        </h2>
        <p className="mt-6 text-stone max-w-lg">
          Companies come to Veep when the work is urgent, a permanent hire is too
          slow, or consulting advice is not enough.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/8">
        {groups.map((g) => (
          <div key={g.title} className="p-6 flex flex-col gap-6 border-b border-white/8 md:border-r">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-widest text-stone-soft">{g.idx}</span>
              <span className="font-mono text-[10px] tracking-widest text-stone-soft">/ {g.title.toUpperCase()}</span>
            </div>
            <div className="text-2xl text-cream tracking-tight">{g.title}</div>
            <ul className="space-y-2.5">
              {g.triggers.map((t, i) => (
                <li key={t} className="flex items-baseline gap-3 text-sm text-cream/80">
                  <span className="font-mono text-[10px] tracking-widest text-stone-soft w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
