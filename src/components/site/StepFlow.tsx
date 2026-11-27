const steps = [
  { n: "01", t: "Assess & Scope", d: "A 30-minute founder call to define the business outcome, decision rights, and finish line. Scoped in 72 hours." },
  { n: "02", t: "Mobilize", d: "We assemble the lead operating partner, supporting specialists, and playbooks or agent workflows the mandate requires." },
  { n: "03", t: "Own Delivery", d: "Onboarded in under 10 days. The partner drives live execution inside your cadence while Veep governs quality and continuity." },
  { n: "04", t: "Compound or Hand Off", d: "Transfer working models, playbooks, and systems cleanly to your team, or carry that foundation straight into the next priority." },
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
