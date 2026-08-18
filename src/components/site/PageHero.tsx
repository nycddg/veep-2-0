import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { BOOKING_URL } from "@/lib/booking";
import { TrustChip } from "./TrustChip";

/**
 * PageHero — editorial dark-navy hero shared across every interior route.
 * Accent pill primary CTA, ghost link secondary. No mono chrome.
 *
 * Primary defaults to external booking. Pass primaryTo (+ optional primaryHash)
 * for in-site destinations (e.g. Join → #apply form). primaryHref overrides
 * booking URL when you need a different external link.
 */
export function PageHero({
  eyebrow,
  title,
  sub,
  children,
  chip,
  primaryLabel = "Book a 30-minute call",
  primaryHref,
  primaryTo,
  primaryHash,
  primarySearch,
  secondaryLabel = "Request a capacity audit",
  secondaryTo = "/contact",
}: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  children?: ReactNode;
  chip?: string;
  primaryLabel?: string;
  /** External primary URL. Ignored when primaryTo is set. Defaults to BOOKING_URL. */
  primaryHref?: string;
  /** Internal route for primary CTA (use instead of booking). */
  primaryTo?: string;
  primaryHash?: string;
  /** Query params for the internal primary route (e.g. { intent: "audit" }). */
  primarySearch?: Record<string, string>;
  secondaryLabel?: string;
  secondaryTo?: string;
  /** Legacy props — accepted but unused (retired mono chrome). */
  index?: string | number;
  category?: string;
}) {
  const primaryClass =
    "group motion-cta cta-accent rounded-full whitespace-nowrap px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11";

  const primaryInner = <>{primaryLabel}</>;

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-3xl space-y-7">
          {chip ? (
            <TrustChip label={chip} />
          ) : (
            <div className="eyebrow">{eyebrow}</div>
          )}
          <h1 className="font-medium text-[2.25rem] sm:text-5xl xl:text-6xl text-cream text-balance leading-[1.05] allow-wrap break-words">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl leading-relaxed text-pretty">
            {sub}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pt-1">
            {primaryTo ? (
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={primaryTo as any}
                hash={primaryHash}
                search={primarySearch}
                className={primaryClass}
              >
                {primaryInner}
              </Link>
            ) : (
              <a
                href={primaryHref ?? BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryClass}
              >
                {primaryInner}
              </a>
            )}
            <Link
              to={secondaryTo}
              className="motion-link text-sm text-cream/85 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/25 hover:decoration-white/70 pb-1 text-center sm:text-left min-h-11 inline-flex items-center justify-center sm:justify-start"
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
