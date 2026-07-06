import { Waveform } from "./illustrations";

const stats = [
  { v: "$1B+", k: "Capital raised" },
  { v: "$3B+", k: "Revenue created" },
  { v: "$2B+", k: "Costs saved" },
  { v: "20+", k: "Exits" },
  { v: "<10d", k: "Onboarding" },
  { v: "30d", k: "Fit guarantee" },
];

export function StatsBand() {
  return (
    <section className="bg-background text-cream border-t border-b border-white/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-t border-white/8 pt-5">
          <span className="font-mono text-[11px] tracking-widest text-stone-soft">[04]</span>
          <span className="font-mono text-[11px] tracking-widest text-stone-soft">/ GROWTH + SECURITY</span>
        </div>

        <div className="py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-4xl md:text-5xl leading-[1.05] text-cream tracking-tight">
                $1B+ raised. $3B+ revenue created. $2B+ costs saved.
              </h2>
              <p className="mt-6 text-stone max-w-lg">
                Veep operators lead through growth, transformation, fundraising, and
                operational change. They're not learning on your business — they've already done the work.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8">
                {stats.map((s) => (
                  <div key={s.k} className="border-t border-white/8 pt-4">
                    <div className="text-3xl md:text-4xl text-cream leading-none tracking-tight">{s.v}</div>
                    <div className="mt-2 text-sm text-stone">{s.k}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative min-h-[320px] flex items-center">
              <Waveform bars={110} peakCenter={0.58} peakWidth={0.14} className="w-full h-72" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
