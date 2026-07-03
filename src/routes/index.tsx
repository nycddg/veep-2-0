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
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Eyebrow>Operator-led. AI-powered.</Eyebrow>
              <h1 className="mt-6 font-serif text-6xl md:text-7xl xl:text-8xl leading-[0.98] text-ink">
                Senior operators. <br />
                <em className="italic text-forest">Owned outcomes.</em>
              </h1>
              <p className="mt-6 text-lg text-stone max-w-xl">
                Veep gives companies immediate access to senior operators who own
                outcomes — without the cost, delay, or commitment of a full-time
                executive. Leadership when you need it, not when hiring catches up.
              </p>
              <div className="mt-8">
                <DualCTA />
              </div>
              <div className="mt-8">
                <RatingRow />
              </div>
            </div>
            <div className="lg:col-span-6">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      <LogoWall />

      <Section><AudienceTabs /></Section>

      <Marquee />

      <StatsBand />

      <Section><CompareTable /></Section>

      <Section tone="muted"><TriggerBento /></Section>

      <Section><CaseSwitcher /></Section>

      <Section><Testimonials /></Section>

      <FooterCTA />
    </>
  );
}
