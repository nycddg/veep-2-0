import { DualCTA } from "./primitives";

export function FooterCTA({
  headline = "What critical initiative doesn't have an owner right now?",
  sub = "Tell us the moment. We'll match a senior operator who can start in under 10 days.",
}: { headline?: string; sub?: string }) {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl mx-auto">
          {headline}
        </h2>
        <p className="mt-6 text-cream/70 max-w-xl mx-auto">{sub}</p>
        <div className="mt-10 flex justify-center">
          <DualCTA tone="dark" />
        </div>
      </div>
    </section>
  );
}
