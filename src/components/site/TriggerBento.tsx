import { Eyebrow } from "./primitives";

const groups = [
  {
    title: "Growth",
    triggers: ["Raising capital", "Hiring executives", "Revenue plateau", "GTM redesign"],
  },
  {
    title: "Operational",
    triggers: ["COO or CFO need", "ERP implementation", "Pricing redesign", "Org redesign"],
  },
  {
    title: "Leadership",
    triggers: ["Executive departure", "Founder overwhelmed", "PE transition", "New CEO"],
  },
  {
    title: "Strategic",
    triggers: ["M&A activity", "New product launch", "New geography", "Turnaround"],
  },
];

export function TriggerBento() {
  return (
    <div>
      <div className="max-w-2xl">
        <Eyebrow>Pivotal moments</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-ink">
          Built for the moments that <em className="italic text-forest">create urgency.</em>
        </h2>
        <p className="mt-4 text-stone">
          Companies come to Veep when the work is urgent, a full-time hire is too
          slow, or consulting advice is not enough.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups.map((g) => (
          <div key={g.title} className="rounded-3xl bg-card border border-border p-6">
            <div className="font-serif text-2xl text-ink">{g.title}</div>
            <ul className="mt-5 space-y-3">
              {g.triggers.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest" /> {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
