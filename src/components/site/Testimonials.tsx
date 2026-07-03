import { Star } from "lucide-react";
import { Eyebrow } from "./primitives";

const quotes = [
  {
    q: "Within two weeks our Veep operator was running board reporting, cash, and lender conversations. It didn't feel like a consultant — it felt like our CFO.",
    a: "CEO, Series B SaaS",
  },
  {
    q: "We stopped shopping for fractional talent. Veep is our executive bench across the portfolio.",
    a: "Managing Partner, Lower-middle-market PE",
  },
  {
    q: "The best part is that they left cleanly. They built the function, hired the permanent leader, and handed it off.",
    a: "Founder, DTC platform",
  },
];

export function Testimonials() {
  return (
    <div>
      <div className="max-w-2xl">
        <Eyebrow>What operators unlock</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-ink">
          Results, not recommendations.
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <figure key={q.a} className="rounded-3xl border border-border bg-card p-8 flex flex-col gap-6">
            <div className="flex text-forest">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="font-serif text-2xl leading-snug text-ink">
              "{q.q}"
            </blockquote>
            <figcaption className="mt-auto text-sm text-stone">— {q.a}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
