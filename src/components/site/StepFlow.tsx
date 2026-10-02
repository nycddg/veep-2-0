const steps = [
  { n: "01", t: "Clarify", d: "A 30-minute intro call to understand the work, urgency, and outcome, and whether Veep is the right fit." },
  { n: "02", t: "Scope", d: "Within 72 hours, define the work, responsibilities, success criteria, and recommended engagement shape." },
  { n: "03", t: "Assemble", d: "Select a lead operating partner and the supporting capacity required, matched to the mandate and company." },
  { n: "04", t: "Own", d: "Start in under 10 days. The operator runs the work; Veep manages scope, quality, and continuity." },
];

export function StepFlow() {
  return (
    <div className="motion-stagger grid md:grid-cols-4 gap-y-10 border-t border-white/10 pt-10">
      {steps.map((s) => (
        <div
          key={s.n}
          className="flex flex-col border-t border-white/10 pt-8 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0 md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0 md:pr-8 md:last:pr-0"
        >
          <span className="eyebrow">{s.n}</span>
          <div className="mt-4 font-serif font-medium text-xl text-cream tracking-tight">{s.t}</div>
          <p className="mt-2 text-base text-stone leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  );
}
