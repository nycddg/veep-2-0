import { Eyebrow } from "./primitives";

const quotes = [
  {
    q: "Within two weeks our Veep operator was running board reporting, cash, and lender conversations. It didn't feel like a consultant — it felt like our CFO.",
    a: "CEO, Series B SaaS",
    k: "0.1",
  },
  {
    q: "We stopped shopping for fractional talent. Veep is our executive bench across the portfolio.",
    a: "Managing Partner, Lower-middle-market PE",
    k: "0.2",
  },
  {
    q: "The best part is that they left cleanly. They built the function, hired the permanent leader, and handed it off.",
    a: "Founder, DTC platform",
    k: "0.3",
  },
];

export function Testimonials() {
  return (
    <div>
      <div className="max-w-2xl">
        <Eyebrow>What operators unlock</Eyebrow>
        <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-cream">
          Results, not recommendations.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 border-t border-white/8">
        {quotes.map((q) => (
          <figure key={q.a} className="p-8 flex flex-col gap-8 border-b border-white/8 md:border-r">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-widest text-stone-soft">{q.k}</span>
              <span className="font-mono text-[11px] tracking-widest text-accent-gold">/ VERIFIED</span>
            </div>
            <blockquote className="text-xl md:text-2xl leading-snug text-cream tracking-tight">
              {q.q}
            </blockquote>
            <figcaption className="mt-auto font-mono text-[11px] tracking-widest uppercase text-stone">
              — {q.a}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
