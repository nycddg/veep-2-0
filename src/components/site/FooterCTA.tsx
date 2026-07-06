import { DualCTA } from "./primitives";
import { TickRuler } from "./illustrations";

export function FooterCTA({
  headline = "What critical initiative doesn't have an owner right now?",
  sub = "Tell us the moment. We'll match a senior operator who can start in under 10 days.",
}: { headline?: string; sub?: string }) {
  return (
    <section className="bg-background text-cream border-t border-white/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-widest text-stone-soft">[09]</span>
          <span className="font-mono text-[11px] tracking-widest text-stone-soft">/ CONTACT</span>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h2 className="text-4xl md:text-6xl leading-[1.02] max-w-4xl mx-auto text-cream">
          {headline}
        </h2>
        <p className="mt-6 text-stone max-w-xl mx-auto">{sub}</p>
        <div className="mt-10 flex justify-center">
          <DualCTA />
        </div>
      </div>
      <TickRuler className="w-full h-8 opacity-70" />
    </section>
  );
}
