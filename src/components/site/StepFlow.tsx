const steps = [
  { n: "01", t: "Scope", d: "Define the job, the outcome, and the best way to deliver. Agree what done looks like." },
  { n: "02", t: "Mobilize", d: "Put the right operating experience, specialists, and workflows behind the agreed scope." },
  { n: "03", t: "Own", d: "Keep the team on point, the work on course, and decisions clear." },
  { n: "04", t: "Deliver", d: "Complete the job. Agree the next scope or hand off cleanly." },
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
