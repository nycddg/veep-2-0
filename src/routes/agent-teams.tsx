import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { Reveal } from "@/components/site/Reveal";
import { PlatformStrata } from "@/components/site/PlatformStrata";
import { AgentOfficeSwitch } from "@/components/site/AgentOfficeSwitch";
import { WeeklyCycle } from "@/components/site/WeeklyCycle";
import { ogImageMeta } from "@/lib/seo";

export const Route = createFileRoute("/agent-teams")({
  head: () => ({
    meta: [
      { title: "Agent Teams | Veep" },
      {
        name: "description",
        content:
          "Operator-governed Agent Teams give lean companies institutional discipline without fixed headcount. Agents run recurring prep. The operating partner sets the standard. You keep approvals.",
      },
      { property: "og:title", content: "Agent Teams | Veep" },
      {
        property: "og:description",
        content:
          "Operator-governed Agent Teams give lean companies institutional discipline without fixed headcount. Agents run recurring prep. The operating partner sets the standard. You keep approvals.",
      },
      { property: "og:url", content: "https://www.veep.work/agent-teams" },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/agent-teams" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Playbooks & Agent Teams"
        title="Institutional discipline without fixed headcount."
        sub="Senior operators, repeatable playbooks, and operator-governed workflows run inside one mandate. Agents handle the recurring prep. A lead operating partner sets the standard and resolves exceptions. You stay in control."
        primaryLabel="Bring us the job"
        primaryTo="/contact"
        secondaryLabel="See what we take on"
        secondaryTo="/"
        secondaryHash="mandates"
      />

      <Reveal as="section" className="py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-12">
            <div className="eyebrow">Inside one mandate</div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Three layers. Clear ownership.
            </h2>
            <p className="mt-6 text-base md:text-lg text-stone leading-relaxed">
              The operating partner doesn't hand the business to software. Agents run the work that repeats. Specialists carry defined tasks. The partner owns the standard and every exception that matters.
            </p>
          </div>
          <PlatformStrata />
        </div>
      </Reveal>

      <Reveal as="section" className="bg-surface-raised py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="eyebrow">Four offices</div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              The same boundary in every office.
            </h2>
            <p className="mt-6 text-base text-stone leading-relaxed">
              Each office shows what agents prepare and what the operating partner still decides.
            </p>
          </div>
          <AgentOfficeSwitch />
        </div>
      </Reveal>

      <Reveal as="section" className="py-14 sm:py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="eyebrow">A worked week</div>
            <h2 className="mt-6 font-serif font-medium text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight leading-[1.15] text-balance allow-wrap">
              Cash and variance, ready for Monday's review.
            </h2>
            <p className="mt-6 text-base text-stone leading-relaxed">
              One illustrative cycle. Finance leadership gets a pack built through the week, not scrambled together the night before.
            </p>
          </div>
          <WeeklyCycle />
        </div>
      </Reveal>

      <FooterCTA
        headline={<>Bring us the recurring work.</>}
        sub="Agent Teams are scoped to the mandate and priced transparently up front, with no extra headcount required to hold the cadence."
      />
    </>
  );
}
