const steps = [
  { n: "01", t: "Diagnose", d: "30-minute call to clarify the priority, urgency, current owner, and the outcome that needs to move." },
  { n: "02", t: "Scope", d: "We define the work and recommend the right structure: Advisory, Sprint, Operator, or Pod." },
  { n: "03", t: "Match", d: "A senior operator shortlisted against the work, company stage, function, and industry." },
  { n: "04", t: "Deploy in <10 days", d: "Contracts, onboarding, and working rhythm set. The operator starts owning the work." },
];

export function StepFlow() {
  return (
    <div className="grid md:grid-cols-4 gap-x-10 gap-y-12">
      {steps.map((s) => (
        <div key={s.n} className="flex flex-col">
          <span className="font-mono text-[10px] tracking-[0.12em] text-accent">{s.n}</span>
          <div className="mt-2 font-serif text-2xl text-cream tracking-tight">{s.t}</div>
          <p className="mt-4 text-sm text-stone leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  );
}
