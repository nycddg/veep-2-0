import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import erikaHeadshot from "@/assets/operator-erika-velazquez.png.asset.json";

const FORM_URL = "https://forms.gle/LE2pMAsCW3kWsKes7";

const BULLETS = [
  "Onboarded in under a week",
  "Save 40\u201380% vs. firms or full-time hires",
  "Flexible terms: fractional, interim, or project-based",
  "Risk-free 30-day guarantee",
];

export const Route = createFileRoute("/meetveep")({
  head: () => ({
    meta: [
      { title: "Meet Veep \u2014 the fastest way to add firepower to your team" },
      {
        name: "description",
        content:
          "Veep connects founder-led companies with proven senior operators who embed quickly and get to work. Onboarded in under a week, 30-day guarantee.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Meet Veep \u2014 the fastest way to add firepower to your team" },
      {
        property: "og:description",
        content:
          "Proven independent operators \u2014 former founders and C-suite leaders \u2014 who embed quickly and drive real results. Fast.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Meet Veep \u2014 the fastest way to add firepower to your team" },
      {
        name: "twitter:description",
        content:
          "Proven independent operators \u2014 former founders and C-suite leaders \u2014 who embed quickly and drive real results. Fast.",
      },
    ],
  }),
  component: MeetVeepPage,
});

function MeetVeepPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col gap-7 lg:grid lg:grid-cols-12 lg:gap-x-16 lg:gap-y-7 lg:items-start">
          <h1 className="order-1 lg:col-span-7 text-4xl sm:text-5xl md:text-5xl xl:text-6xl text-cream text-balance leading-[1.05]">
            The work needs an owner.
          </h1>

          <div className="order-2 lg:col-span-5 lg:row-span-4">
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-accent/70 blur-[2px] scale-95 translate-y-2"
              />
              <img
                src={erikaHeadshot.url}
                alt="Senior Veep operator"
                className="w-full h-auto rounded-3xl object-cover"
                loading="eager"
              />
            </div>
          </div>

          <div className="order-3 lg:col-span-7 space-y-4 text-base sm:text-lg text-cream/80 max-w-2xl leading-relaxed">
            <p>
              Your company may not be ready, willing, or able to make the
              full-time executive hire. But the fundraise, GTM reset, margin
              issue, leadership gap, or operating priority still needs to move.
            </p>
            <p>
              Veep matches founder-led companies with vetted senior operators
              for the job to be done. Critical work gets owned before the
              permanent hire is in place.
            </p>
          </div>

          <ul className="order-4 lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.03] divide-y divide-white/10 max-w-xl">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-center gap-3 px-5 py-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className="text-sm sm:text-base text-cream/90">{b}</span>
              </li>
            ))}
          </ul>

          <div className="order-5 lg:col-span-7 pt-1">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition inline-flex items-center justify-center gap-2 min-h-11"
            >
              Meet Veep <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
