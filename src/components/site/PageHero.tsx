import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BOOKING_URL } from "@/lib/booking";
import { TrustChip } from "./TrustChip";

/**
 * PageHero — editorial dark-navy hero shared across every interior route.
 * Locked to the homepage aesthetic: Playfair headline with italic accent,
 * cream pill primary CTA with soft glow, ghost link secondary. No mono chrome.
 */
export function PageHero({
  eyebrow,
  title,
  italic,
  sub,
  children,
  chip,
  primaryLabel = "Book intro call",
  secondaryLabel = "Request a capacity audit",
  secondaryTo = "/contact",
}: {
  eyebrow: string;
  title: string;
  italic?: string;
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
      <div className="absolute inset-x-0 top-0 h-[520px] bg-accent/8 blur-[140px] rounded-full max-w-3xl mx-auto pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-4xl space-y-8">
          {chip ? (
            <TrustChip label={chip} />
          ) : (
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </div>
          )}
          <h1 className="font-serif text-3xl md:text-4xl xl:text-6xl leading-[1.05] text-cream tracking-tight">
            {title}
            {italic && (
              <>
                {" "}
                <span className="text-accent">{italic}</span>
              </>
            )}
          </h1>
          <p className="text-lg md:text-xl text-stone max-w-2xl leading-relaxed">
            {sub}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream px-8 py-4 text-sm font-medium text-ink hover:bg-cream/90 transition-all inline-flex items-center gap-2 shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)]"
            >
              {primaryLabel} <ArrowRight size={16} />
            </a>
            <Link
              to={secondaryTo}
              className="text-sm text-cream/80 hover:text-cream underline underline-offset-8 decoration-white/20 hover:decoration-white/60 transition pb-1"
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
