const steps = [
  { n: "01", t: "Diagnose", d: "30-minute call to clarify the priority, urgency, current owner, and the outcome that needs to move." },
  { n: "02", t: "Scope", d: "We define the work and recommend the right structure: Advisory, Sprint, Operator, or Pod." },
  { n: "03", t: "Match", d: "One or two senior operators shortlisted against the work, company stage, function, and industry." },
  { n: "04", t: "Deploy in <10 days", d: "Contracts, onboarding, and working rhythm set. The operator starts owning the work." },
];

export function StepFlow() {
  return (
    <div className="grid md:grid-cols-4 md:divide-x divide-y md:divide-y-0 divide-white/10 border-t border-white/10">
      {steps.map((s) => (
        <div key={s.n} className="flex flex-col pt-7 pb-8 md:px-7 md:first:pl-0 md:last:pr-0">
          <span className="font-mono text-[10px] tracking-[0.14em] text-accent">{s.n}</span>
          <div className="mt-6 text-xl md:text-2xl text-cream tracking-tight leading-tight">{s.t}</div>
          <p className="mt-3 text-sm text-stone leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  );
}
