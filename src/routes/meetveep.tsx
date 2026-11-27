import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import erikaHeadshot from "@/assets/operator-erika-velazquez.png.asset.json";
import { FooterCTA } from "@/components/site/FooterCTA";
import { ogImageMeta } from "@/lib/seo";

const BULLETS = [
  "Scoped in 72 hours. Started in under 10 days.",
  "Priced to the work: individual mandates or managed operating partnerships",
  "75+ vetted senior operators",
  "Avg. 18 yrs in seat",
];

export const Route = createFileRoute("/meetveep")({
  head: () => ({
    meta: [
      { title: "Meet Veep | Operate Like a Market Leader Without an Institutional Backer" },
      {
        name: "description",
        content:
          "Top firms invest more than capital. Veep puts senior operators, playbooks, and technology behind independent businesses and lean funds to grow revenue, expand margins, and withstand scrutiny.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Meet Veep | Operate Like a Market Leader Without an Institutional Backer" },
      {
        property: "og:description",
        content:
          "Top firms invest more than capital. Veep puts senior operators, playbooks, and technology behind independent businesses and lean funds to grow revenue, expand margins, and withstand scrutiny.",
      },
      { property: "og:url", content: "https://www.veep.work/meetveep" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Meet Veep | Operate Like a Market Leader Without an Institutional Backer" },
      {
        name: "twitter:description",
        content:
          "Top firms invest more than capital. Veep puts senior operators, playbooks, and technology behind independent businesses and lean funds to grow revenue, expand margins, and withstand scrutiny.",
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
                Operate like a market leader without an institutional backer.
              </h1>
            </div>

            <div className="order-2 lg:col-span-5 lg:row-span-4 lg:self-center">
              <div className="relative mx-auto max-w-md">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-accent/15 blur-[80px] scale-95 light:hidden"
                />
                <div className="overflow-hidden rounded-[6px] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] light:shadow-[0_20px_48px_-24px_rgba(26,31,58,0.22)]">
                  <img
                    src={erikaHeadshot.url}
                    alt="Senior Veep operating partner"
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
                Top firms invest more than capital. They deploy senior operators, playbooks, and technology to make companies stronger and more valuable. Veep puts that same firepower behind independent businesses and lean funds to grow revenue, expand margins, and withstand scrutiny.
              </p>
              <p>
                Your team is focused on running today's business. We step in to build the numbers, commercial engine, and new lines of business that take the company to its next stage, without waiting months on an executive search.
              </p>
            </div>

            <ul className="order-4 lg:col-span-7 rounded-[6px] bg-surface-card divide-y divide-white/10 max-w-xl">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-3 px-5 py-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-coral/40 text-accent-coral">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm sm:text-base text-cream/90">{b}</span>
                </li>
              ))}
            </ul>

            <div className="order-5 lg:col-span-7 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-5 pt-1">
              <Link
                to="/contact"
                className="group motion-cta cta-accent rounded-[6px] whitespace-nowrap px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11"
              >
                Bring us the job
              </Link>
              <Link
                to="/"
                hash="how"
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
              Outcome first. Shape second.
            </h2>
            <p className="mt-4 text-cream/80 leading-relaxed">
              Advisory, Sprint, Operator, Pod, Interim Leadership, Managed Operating Partnerships, and Agent Teams, priced to the work and not the hour.
            </p>
          </div>
          <div className="flex flex-col items-start sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-5">
            <Link
              to="/pricing"
              hash="tiers"
              className="group motion-cta cta-accent rounded-[6px] whitespace-nowrap px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center justify-center gap-2 min-h-11"
            >
              See pricing
            </Link>
            <Link
              to="/for-portfolios"
              className="motion-link text-sm text-cream/85 hover:text-cream underline underline-offset-8 hover:underline-offset-4 decoration-white/25 hover:decoration-white/70 pb-1 min-h-11 inline-flex items-center"
            >
              For Funds
            </Link>
          </div>
        </div>
      </section>

      <FooterCTA
        headline={<>Bring us the job that matters most.</>}
        sub="Tell us what needs to move. We'll clarify the outcome, recommend the right structure, and tell you plainly if Veep isn't the answer."
        primary="contact"
      />
    </>
  );
}
