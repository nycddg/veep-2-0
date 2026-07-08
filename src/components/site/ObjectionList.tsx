const objections = [
  {
    q: "Is this right for me?",
    a: "You are a founder, CEO, owner-operator, or investor-backed leader with critical work that needs senior ownership before the full-time hire makes sense. That could be a fundraise, GTM reset, margin issue, operations rebuild, leadership gap, recurring workflow, or strategic initiative.",
  },
  {
    q: "How much does it cost?",
    a: "Advisory starts at $3k/month. Sprints start at $25k. Operators start at $15k/month. Pods start at $30k/month. Operator in the Loop starts at $20k/month. The right structure depends on the work, urgency, and level of ownership required.",
  },
  {
    q: "How fast does it actually move?",
    a: "Shortlist in 72 hours. Operator deployed in under 10 days. Urgent coverage can move faster when the situation requires it.",
  },
  {
    q: "Can I trust the operator?",
    a: "Every operator is vetted and senior. Veep operators are former founders, CFOs, COOs, CROs, CMOs, CTOs, product leaders, people leaders, and chiefs of staff who have owned real outcomes before.",
  },
  {
    q: "What if it is not a fit?",
    a: "Every engagement carries a 30-day fit guarantee. If the operator isn't right, we swap them or you walk — no fee owed for the remaining term.",
  },
  {
    q: "What happens after the intro call?",
    a: "We run a 30-minute call with a Veep founder to clarify the work, urgency, and outcome. Within 72 hours we recommend the structure and shortlist the operator.",
  },
];

export function ObjectionList() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {objections.map((o) => (
        <div key={o.q} className="glass-card rounded-3xl p-7">
          <h3 className="font-serif text-xl text-cream tracking-tight leading-snug">
            {o.q}
          </h3>
          <p className="mt-4 text-sm text-stone leading-relaxed">{o.a}</p>
        </div>
      ))}
    </div>
  );
}