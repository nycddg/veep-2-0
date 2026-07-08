export function Testimonials() {
  return (
    <figure className="max-w-5xl mx-auto text-center">
      <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
        Verified — Founder testimonial
      </div>
      <blockquote className="mt-10 font-sans font-medium text-3xl md:text-5xl leading-[1.2] text-cream tracking-tight">
        "I cannot recommend this team more highly. They think, act, and engage like co-founders."
      </blockquote>
      <figcaption className="mt-10 flex items-center justify-center gap-4">
        <div className="h-11 w-11 rounded-full bg-white/5 ring-1 ring-white/20 grid place-items-center text-cream text-sm">
          JK
        </div>
        <div className="text-left">
          <div className="text-sm text-cream font-medium">Jerry Kolber</div>
          <div className="text-xs text-stone">Founder & CEO, Atomic Audio</div>
        </div>
      </figcaption>
    </figure>
  );
}
