import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";

export function FooterCTA({
  headline = "What work in your business needs an owner right now?",
  sub = "Book a 30-minute call with a Veep founder. Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee.",
}: { headline?: string; sub?: string }) {
  return (
    <section className="py-28 md:py-40 border-t border-white/10 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-accent/10 blur-[140px] rounded-full max-w-3xl mx-auto"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-cream tracking-tight leading-[1.08]">
          {headline}
        </h2>
        <p className="mt-6 text-stone text-lg max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cream px-8 py-4 text-sm font-medium text-ink hover:bg-cream/90 transition inline-flex items-center gap-2 shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)]"
          >
            Book intro call <ArrowRight size={16} />
          </a>
          <Link
            to="/contact"
            search={{ intent: "audit" }}
            className="rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-cream hover:bg-white/5 transition"
          >
            Request a capacity audit
          </Link>
        </div>
      </div>
    </section>
  );
}
