import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import erikaHeadshot from "@/assets/operator-erika-velazquez.png.asset.json";
import { FooterCTA } from "@/components/site/FooterCTA";
import { ogImageMeta } from "@/lib/seo";

const BULLETS = [
  "Shortlist in 72 hours. Deployed in under 10 days.",
  "Flexible terms: scoped to the work (advisory, project, or ongoing)",
  "30-day fit guarantee",
  "75+ vetted senior operators · Avg. 18 yrs in seat",
];

export const Route = createFileRoute("/meetveep")({
  head: () => ({
    meta: [
      { title: "Meet Veep | Senior Operators for Work That Can't Wait" },
      {
        name: "description",
        content:
          "Veep connects founder-led companies with vetted senior operators who step in to own critical work, now. Deployed in under 10 days. 30-day fit guarantee.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Meet Veep | Senior Operators for Work That Can't Wait" },
      {
        property: "og:description",
        content:
          "Vetted senior operators who step in to own critical work, now. Deployed in under 10 days. 30-day fit guarantee.",
      },
      { property: "og:url", content: "https://www.veep.work/meetveep" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Meet Veep | Senior Operators for Work That Can't Wait" },
      {
        name: "twitter:description",
        content:
          "Vetted senior operators who step in to own critical work, now. Deployed in under 10 days. 30-day fit guarantee.",
      },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/meetveep" }],
  }),
  component: MeetVeepPage,
});

function MeetVeepPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-24">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-x-16 lg:gap-y-8 lg:items-start">
            <div className="order-1 lg:col-span-7 space-y-5">
              <div className="eyebrow">Meet Veep</div>
              <h1 className="font-medium text-[2.25rem] sm:text-5xl xl:text-6xl text-cream text-balance leading-[1.05] allow-wrap break-words">
                The work needs an owner.
              </h1>
            </div>

            <div className="order-2 lg:col-span-5 lg:row-span-4">
              <div className="relative mx-auto max-w-md">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-accent/15 blur-[80px] scale-95"
                />
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl ring-1 ring-white/10 light:ring-ink/10 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] light:shadow-[0_20px_48px_-24px_rgba(26,31,58,0.22)]">
                  <img
                    src={erikaHeadshot.url}
                    alt="Senior Veep operator"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover object-top"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="order-3 lg:col-span-7 space-y-4 text-base sm:text-lg text-cream/80 max-w-2xl leading-relaxed text-pretty">
              <p>
                Your company may not be ready, willing, or able to make the
                permanent executive hire. The fundraise, GTM reset, margin
                issue, leadership gap, or operating priority still needs to move.
              </p>
              <p>
                Veep matches founder-led companies with vetted senior operators
                for the job to be done. Critical work gets owned before a
                permanent hire is in place.
              </p>
              <p className="eyebrow pt-2">
                Vetted senior operators who step in to own critical work, now.
              </p>
            </div>

            <ul className="order-4 lg:col-span-7 rounded-2xl border border-white/10 bg-[color:var(--surface-raised)] divide-y divide-white/10 max-w-xl">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-3 px-5 py-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm sm:text-base text-cream/90">{b}</span>
                </li>
              ))}
            </ul>

            <div className="order-5 lg:col-span-7 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-5 pt-1">
              <Link
                to="/contact"
                className="group motion-cta cta-accent rounded-full px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11"
              >
                Get in touch <ArrowRight size={16} className="motion-arrow" />
              </Link>
              <Link
                to="/how-it-works"
                className="motion-link text-sm text-cream/85 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/25 hover:decoration-white/70 pb-1 min-h-11 inline-flex items-center"
              >
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-band py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 md:mb-12">
            <div className="eyebrow">Engagements</div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Four shapes. One promise.
            </h2>
            <p className="mt-4 text-cream/80 leading-relaxed">
              Advisory, Sprint, Operator, and Pod — priced to the work, not the hour.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-5">
            <Link
              to="/pricing"
              hash="tiers"
              className="group motion-link inline-flex items-center gap-2 text-sm text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/30 hover:decoration-white/70 min-h-11"
            >
              See pricing <ArrowRight size={14} className="motion-arrow" />
            </Link>
            <Link
              to="/for-portfolios"
              className="motion-link text-sm text-cream/85 hover:text-cream underline underline-offset-8 decoration-white/25 hover:decoration-white/70 pb-1 min-h-11 inline-flex items-center"
            >
              For Funds
            </Link>
          </div>
        </div>
      </section>

      <FooterCTA
        headline={<>Tell us what cannot wait.</>}
        sub="Tell us about the work. We'll clarify the need, recommend the right model, and tell you directly if Veep isn't the answer."
        primary="contact"
      />
    </>
  );
}
