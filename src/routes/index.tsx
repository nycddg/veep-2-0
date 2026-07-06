import { createFileRoute } from "@tanstack/react-router";
import { HeroVisual } from "@/components/site/HeroVisual";
import { LogoWall } from "@/components/site/LogoWall";
import { Marquee } from "@/components/site/Marquee";
import { AudienceTabs } from "@/components/site/AudienceTabs";
import { StatsBand } from "@/components/site/StatsBand";
import { CompareTable } from "@/components/site/CompareTable";
import { TriggerBento } from "@/components/site/TriggerBento";
import { CaseSwitcher } from "@/components/site/CaseSwitcher";
import { Testimonials } from "@/components/site/Testimonials";
import { FooterCTA } from "@/components/site/FooterCTA";
import { DualCTA, Eyebrow, RatingRow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-t border-white/8 pt-5">
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">[01]</span>
            <span className="font-mono text-[11px] tracking-widest text-stone-soft">/ VEEP · SENIOR OPERATORS</span>
          </div>
          <div className="pt-14 md:pt-20 pb-24 md:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <Eyebrow>Operator-led · AI-powered</Eyebrow>
              <h1 className="mt-8 text-6xl md:text-7xl xl:text-[88px] leading-[0.98] text-cream tracking-tight">
                Senior operators.
                <br />
                <span className="text-stone">Owned outcomes.</span>
              </h1>
              <p className="mt-8 text-lg text-stone max-w-xl leading-relaxed">
                Veep gives companies immediate access to senior operators who own
                outcomes — without the cost, delay, or commitment of a full-time
                executive. Leadership when you need it, not when hiring catches up.
              </p>
              <div className="mt-10">
                <DualCTA />
              </div>
              <div className="mt-8">
                <RatingRow />
              </div>
            </div>
            <div className="lg:col-span-6 pt-2">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      <LogoWall />

      <Section index={2} category="How Veep engages"><AudienceTabs /></Section>

      <Marquee />

      <StatsBand />

      <Section index={5} category="How Veep is different" tone="light"><CompareTable /></Section>

      <Section index={6} category="Pivotal moments" tone="muted"><TriggerBento /></Section>

      <Section index={7} category="Engagement patterns"><CaseSwitcher /></Section>

      <Section index={8} category="What operators unlock"><Testimonials /></Section>

      <FooterCTA />
    </>
  );
}
