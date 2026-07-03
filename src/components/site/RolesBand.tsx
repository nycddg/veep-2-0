import { Eyebrow } from "./primitives";

const roles = [
  { code: "CFO", name: "Chief Financial Officer", note: "Capital, reporting, diligence" },
  { code: "CCO", name: "Chief Commercial Officer", note: "GTM, revenue, pricing" },
  { code: "CTO", name: "Chief Technology Officer", note: "Product, platform, delivery" },
  { code: "CMO", name: "Chief Marketing Officer", note: "Positioning, demand, brand" },
  { code: "COO", name: "Chief Operating Officer", note: "Ops, org design, scale" },
  { code: "CEO", name: "Interim / Advisory CEO", note: "Transition, turnaround" },
];

export function RolesBand() {
  return (
    <section className="bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Every seat in the C-suite</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-ink">
              Executive horsepower, <em className="italic text-forest">on demand.</em>
            </h2>
            <p className="mt-4 text-stone max-w-lg">
              Our most active placements are CFO, CCO, CTO, and CMO — but Veep
              staffs the full C-suite when a company needs senior judgment now.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {roles.map((r) => (
            <div key={r.code} className="rounded-2xl border border-border bg-card p-5">
              <div className="font-serif text-3xl text-ink leading-none">{r.code}</div>
              <div className="mt-3 text-sm text-ink">{r.name}</div>
              <div className="mt-1 text-xs text-stone">{r.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
