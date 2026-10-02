import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BOOKING_URL } from "@/lib/booking";

export function FooterCTA({
  headline = <>Your next big move starts here.</>,
  sub = "Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee.",
  /** Default: Fillout booking. Pass "contact" for Get in touch → /contact. */
  primary = "book",
}: {
  headline?: ReactNode;
  sub?: string;
  primary?: "book" | "contact";
}) {
  const primaryClass =
    "group motion-cta cta-accent rounded-[6px] whitespace-nowrap px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11";

  return (
    <section className="py-14 sm:py-16 md:py-28 border-t border-white/10 relative overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream text-balance leading-[1.15] allow-wrap">
          {headline}
        </h2>
        <p className="mt-5 text-cream/80 text-base sm:text-lg max-w-xl leading-relaxed">
          {sub}
        </p>
        <div className="mt-8 flex flex-col items-start sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-5">
          {primary === "contact" ? (
            <Link to="/contact" className={primaryClass}>
              Get in touch
            </Link>
          ) : (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryClass}
            >
              Speak with our founders
            </a>
          )}
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
