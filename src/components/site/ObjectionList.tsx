const objections = [
  {
    q: "Is this right for me?",
    a: "You lead a business with critical work the team cannot absorb: preparing for capital, rebuilding sales, entering a market, fixing operations, or covering a leadership gap. Bring the priority; we'll assess the fit.",
  },
  {
    q: "How much does it cost?",
    a: "Advisory starts at $3k/month, Sprints at $25k/scope, Operators at $15k/month, and Pods at $30k/month. Scope and level of support determine the price.",
  },
  {
    q: "How quickly can we start?",
    a: "Operating engagements are scoped in 72 hours and started in under 10 days. We clarify responsibilities and the starting plan before work begins.",
  },
  {
    q: "How do you choose the operator?",
    a: "We select for the work, business model, and company stage. You can review relevant experience and references before the engagement begins.",
  },
  {
    q: "What if it isn't a fit?",
    a: "The operator has a 30-day fit guarantee. We swap them or you walk, with no fee owed for the remaining engagement term.",
  },
  {
    q: "What happens on the intro call?",
    a: "In 30 minutes, we clarify the work, urgency, and support you need. If Veep fits, we move into scoping. We'll tell you directly if another route makes more sense.",
  },
];

export function ObjectionList() {
  return (
    <div className="motion-stagger grid md:grid-cols-2 gap-4 md:gap-5">
      {objections.map((o) => (
        <div key={o.q} className="motion-row-wash rounded-[6px] bg-surface-card p-6 sm:p-7">
          <h3 className="font-serif font-medium text-xl text-cream tracking-tight leading-snug">
            {o.q}
          </h3>
          <p className="mt-2 text-base text-stone leading-relaxed">{o.a}</p>
        </div>
      ))}
    </div>
  );
}
