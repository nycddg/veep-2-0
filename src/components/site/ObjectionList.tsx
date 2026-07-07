const objections = [
  {
    q: "Is this right for me?",
    a: "You're a founder or CEO of a scaling company ($3M–$150M revenue) with a critical initiative — fundraise, GTM reset, ops rebuild, exec seat gap — that can't wait for a 4-month search. If that's you, yes.",
  },
  {
    q: "How much does it cost?",
    a: "Fractional runs $12k–$40k/mo. Interim runs $35k–$90k/mo. Advisory starts at $5k/mo. No retainers, no long-term lock-in. 40–80% less than executive search plus a permanent salary.",
  },
  {
    q: "How fast does it actually move?",
    a: "Shortlist in 72 hours. Operator in the seat in under 10 days. Interim coverage in as little as 5 days when the trigger is urgent.",
  },
  {
    q: "Can I trust the operator?",
    a: "Every operator is invite-only and reference-checked — CFOs, COOs, CROs, CTOs from Stripe, Google, LinkedIn, Goldman, Meta. Senior only. No consultants writing decks.",
  },
  {
    q: "What if it isn't a fit?",
    a: "Every engagement carries a 30-day fit guarantee. If the operator isn't right, we swap them or you walk with no fee owed for the remaining term.",
  },
  {
    q: "What happens after the intro call?",
    a: "30-minute diagnostic. We classify the trigger and outcome. Within 72 hours you get 1–2 shortlisted operators with fit rationale. You pick. They start.",
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