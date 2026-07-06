const steps = [
  { n: "01", t: "Diagnose", d: "30-minute call to classify the trigger, urgency, and outcome that needs an owner." },
  { n: "02", t: "Match", d: "We shortlist one or two senior operators — matched to the outcome, not a title." },
  { n: "03", t: "Deploy in <10 days", d: "Contracts, onboarding, and access complete. The operator starts owning the outcome." },
  { n: "04", t: "Clean handoff", d: "When the outcome lands or a permanent hire arrives, we hand off — with documentation, not dependency." },
];

export function StepFlow() {
  return (
    <div className="grid md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
      {steps.map((s) => (
        <div key={s.n} className="bg-background p-7 flex flex-col">
          <span className="font-mono text-[10px] tracking-[0.2em] text-accent">{s.n}</span>
          <div className="mt-5 font-serif text-2xl text-cream tracking-tight">{s.t}</div>
          <p className="mt-3 text-sm text-stone leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  );
}
