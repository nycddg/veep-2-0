import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BOOKING_URL } from "@/lib/booking";
import { TrustChip } from "./TrustChip";

/**
 * PageHero — editorial dark-navy hero shared across every interior route.
 * Cream pill primary CTA, ghost link secondary. No mono chrome.
 */
export function PageHero({
  eyebrow,
  title,
  sub,
  children,
  chip,
  primaryLabel = "Book intro call",
  secondaryLabel = "Request a capacity audit",
  secondaryTo = "/contact",
}: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  children?: ReactNode;
  chip?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  /** Legacy props — accepted but unused (retired mono chrome). */
  index?: string | number;
  category?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-3xl space-y-7">
          {chip ? (
            <TrustChip label={chip} />
          ) : (
            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent font-mono">
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl text-cream text-balance leading-[1.05]">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl leading-relaxed">
            {sub}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 pt-1">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition inline-flex items-center justify-center gap-2 min-h-11"
            >
              {primaryLabel} <ArrowRight size={16} />
            </a>
            <Link
              to={secondaryTo}
              className="text-sm text-cream/85 hover:text-cream underline underline-offset-8 decoration-white/25 hover:decoration-white/70 transition pb-1 text-center sm:text-left min-h-11 inline-flex items-center justify-center sm:justify-start"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
