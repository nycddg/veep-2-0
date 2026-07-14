import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { BOOKING_URL } from "@/lib/booking";

export function FooterCTA({
  headline = (
    <>Your next big move starts here.</>
  ),
  sub = "Book a 30-minute call with a Veep founder. Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee.",
}: { headline?: ReactNode; sub?: string }) {
  return (
    <section className="py-20 md:py-28 border-t border-white/10 relative overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-cream text-balance leading-[1.1] allow-wrap">
          {headline}
        </h2>
        <p className="mt-5 text-cream/80 text-base sm:text-lg max-w-xl leading-relaxed">
          {sub}
        </p>
        <div className="mt-8 flex flex-col items-start sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-5">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group motion-cta rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11"
          >
            Book intro call <ArrowRight size={16} className="motion-arrow" />
          </a>
          <Link
            to="/contact"
            search={{ intent: "audit" }}
            className="motion-link text-sm text-cream/85 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/25 hover:decoration-white/70 pb-1 text-center sm:text-left min-h-11 inline-flex items-center justify-center sm:justify-start"
          >
            Request a capacity audit
          </Link>
        </div>
      </div>
    </section>
  );
}
