const steps = [
  { n: "01", t: "Diagnose", d: "30-minute call to clarify the priority, urgency, current owner, and the outcome that needs to move." },
  { n: "02", t: "Scope", d: "We define the work and recommend the right structure: Advisory, Sprint, Operator, or Pod." },
  { n: "03", t: "Match", d: "A senior operator shortlisted against the work, company stage, function, and industry." },
  { n: "04", t: "Deploy in <10 days", d: "Contracts, onboarding, and working rhythm set. The operator starts owning the work." },
];

export function StepFlow() {
  return (
    <div className="grid md:grid-cols-4 gap-y-10 border-t border-white/10 pt-10">
      {steps.map((s) => (
        <div
          key={s.n}
          className="flex flex-col border-t border-white/10 pt-8 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0 md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0 md:pr-8 md:last:pr-0"
        >
          <span className="font-mono text-[11px] tracking-[0.12em] text-accent">{s.n}</span>
          <div className="mt-4 font-serif text-2xl text-cream tracking-tight">{s.t}</div>
          <p className="mt-2 text-base text-stone leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  );
}
