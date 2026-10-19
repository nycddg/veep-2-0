const objections = [
  {
    q: "Is this right for me?",
    a: "You have a business to run and a consequential job the team cannot absorb: a raise, growth initiative, new market, leadership gap, or recurring workflow. Bring us that job.",
  },
  {
    q: "How much does it cost?",
    a: "Advisory starts at $3k/month, Sprints at $25k/scope, Operators at $15k/month, and Pods at $30k/month. Agent Teams are scoped separately. We recommend the approach once the job is clear.",
  },
  {
    q: "How fast does it actually move?",
    a: "Operating engagements are scoped in 72 hours and started in under 10 days. Agent Teams have separately agreed launch timing.",
  },
  {
    q: "Can I trust the operator?",
    a: "Our operating partners have carried consequential work before. We assess relevant experience, company stage, business model, and references against your job, then confirm fit and availability.",
  },
  {
    q: "What if it is not a fit?",
    a: "If the operator is not right within the first 30 days, we swap them or you walk, with no fee owed for the remaining term.",
  },
  {
    q: "What happens after the intro call?",
    a: "We discuss the business, the work, and what needs to be true on the other side. Then we define the scope and recommend how to deliver it.",
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
