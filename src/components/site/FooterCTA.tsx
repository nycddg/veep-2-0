import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";

export function FooterCTA({
  headline = "Make your next big move.",
  sub = "Book a 30-minute call with a Veep founder. Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee.",
}: { headline?: string; sub?: string }) {
  return (
    <section className="py-24 md:py-32 border-t border-white/10 relative overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-cream">
          {headline}
        </h2>
        <p className="mt-5 text-stone text-lg max-w-xl leading-relaxed">
          {sub}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition inline-flex items-center gap-2"
          >
            Book intro call <ArrowRight size={16} />
          </a>
          <Link
            to="/contact"
            search={{ intent: "audit" }}
            className="text-sm text-cream/80 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60 transition pb-1"
          >
            Request a capacity audit
          </Link>
        </div>
      </div>
    </section>
  );
}
