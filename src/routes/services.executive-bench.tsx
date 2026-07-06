import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, CheckList, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/services/executive-bench")({
  head: () => ({
    meta: [
      { title: "Executive Bench — Veep" },
      { name: "description", content: "An annual executive capacity partnership for portfolios, holdcos, and multi-company operators." },
      { property: "og:title", content: "Executive Bench — Veep" },
      { property: "og:description", content: "Priority access to vetted operators, with quarterly capacity planning and emergency coverage." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Executive Bench"
        title="Executive capacity"
        italic="as infrastructure."
        sub="An annual partnership that gives your portfolio priority access to vetted Veep operators — plus quarterly capacity planning and emergency coverage when you need it."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>Included in the bench</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-cream">The annual layer.</h2>
            <p className="mt-4 text-stone">The retainer covers access, planning, and priority. Operator deployments are billed separately per SOW.</p>
          </div>
          <CheckList items={[
            "Portfolio-wide intake and capacity planning",
            "Quarterly leadership risk review",
            "Priority operator matching with response SLA",
            "Emergency CFO / COO / GTM coverage path",
            "Preferred commercial terms across engagements",
            "Executive Capacity MSA (one agreement, SOWs per role)",
            "Included diagnostics per portfolio company",
          ]} />
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Company Bench", p: "$15k–$35k / year", d: "Single operating company with recurring needs." },
            { t: "Portfolio Bench", p: "$50k–$150k / year", d: "PE, family office, holdco, independent sponsor." },
            { t: "Strategic Bench", p: "$150k–$300k / year", d: "Large portfolios, serial acquirers, multi-platform sponsors." },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-border bg-card p-8">
              <Eyebrow>{x.t}</Eyebrow>
              <div className="mt-4 font-serif text-3xl text-cream">{x.p}</div>
              <p className="mt-3 text-stone text-sm">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <FooterCTA headline="Retain the bench. Deploy on demand." />
    </>
  );
}
