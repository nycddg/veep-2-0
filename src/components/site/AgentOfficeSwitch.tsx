import { useState } from "react";

const offices = [
  {
    id: "finance",
    name: "Finance",
    prep: "Cash, variance to plan, and the questions those numbers raise, ready before the meeting.",
    decides:
      "Which variances are noise, which need an owner, and what gets said in the review.",
  },
  {
    id: "founder",
    name: "Founder",
    prep: "Board pack, investor questions, and the decisions waiting on the founder.",
    decides:
      "Which calls stay with the founder and which the operating partner will carry.",
  },
  {
    id: "operations",
    name: "Operations",
    prep: "Close status, delivery exceptions, and the handoffs blocking the week.",
    decides: "What gets fixed this week and what waits for the next cycle.",
  },
  {
    id: "growth",
    name: "Growth",
    prep: "Pipeline movement, forecast gaps, and the deals that need a commercial call.",
    decides: "Pricing, stage rules, and where the team spends the week.",
  },
] as const;

type OfficeId = (typeof offices)[number]["id"];

const officeById: Record<OfficeId, (typeof offices)[number]> = {
  finance: offices[0],
  founder: offices[1],
  operations: offices[2],
  growth: offices[3],
};

export function AgentOfficeSwitch() {
  const [active, setActive] = useState<OfficeId>("finance");
  const office = officeById[active];

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
      <ul className="lg:col-span-4 border-y border-white/10 divide-y divide-white/10">
        {offices.map((item) => {
          const selected = item.id === active;
          return (
            <li key={item.id}>
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(item.id)}
                className={`w-full text-left py-4 font-serif font-medium text-xl tracking-tight min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  selected ? "text-cream" : "text-stone hover:text-cream"
                }`}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="lg:col-span-8 lg:border-l lg:border-white/10 lg:pl-14">
        <div className="mono-label">Agents prep</div>
        <p className="mt-3 text-base md:text-lg text-stone leading-relaxed">{office.prep}</p>
        <div className="mono-label mt-8">Operating partner decides</div>
        <p className="mt-3 text-base md:text-lg text-cream leading-relaxed">{office.decides}</p>
      </div>
    </div>
  );
}
