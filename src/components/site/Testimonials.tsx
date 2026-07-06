import { Eyebrow } from "./primitives";

export function Testimonials() {
  return (
    <div>
      <div className="max-w-2xl">
        <Eyebrow>What founders say</Eyebrow>
        <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-cream">
          Results, not recommendations.
        </h2>
      </div>
      <figure className="mt-14 border-t border-white/8 pt-12 md:pt-16 grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-2 flex md:flex-col items-start justify-between gap-4">
          <span className="font-mono text-[11px] tracking-widest text-stone-soft">0.1</span>
          <span className="font-mono text-[11px] tracking-widest text-accent-gold">/ VERIFIED</span>
        </div>
        <div className="md:col-span-10">
          <blockquote className="text-2xl md:text-4xl leading-[1.15] text-cream tracking-tight max-w-4xl">
            "I cannot recommend this team more highly. They think, act, and engage like co-founders."
          </blockquote>
          <figcaption className="mt-8 font-mono text-[11px] tracking-widest uppercase text-stone">
            — Jerry Kolber, Founder &amp; CEO, Atomic Audio
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
