import { createFileRoute } from "@tanstack/react-router";
import { ogImageMeta } from "@/lib/seo";
import { BookLink } from "@/components/site/rebuild/BookLink";
import { ClientTicker } from "@/components/site/rebuild/ClientTicker";
import { Container } from "@/components/site/rebuild/Container";
import { LegacyHash } from "@/components/site/rebuild/LegacyHash";
import { operatorAsset } from "@/components/site/rebuild/operatorAsset";
import { Portrait } from "@/components/site/rebuild/Portrait";
import { Section } from "@/components/site/rebuild/Section";
import { TextLink } from "@/components/site/rebuild/TextLink";

const TITLE = "Veep | Critical work, owned.";
const DESCRIPTION =
  "Operating partner capacity for companies and funds. Veep defines the work and outcomes, assembles the right team, and owns delivery.";

const jian = operatorAsset("Jian Yang");

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Operating partner capacity",
  provider: { "@type": "Organization", name: "Veep" },
  description: DESCRIPTION,
};

const steps = [
  { n: "01", t: "Scope", d: "Define the work, outcome, and responsibilities." },
  { n: "02", t: "Assemble", d: "Bring together the operating partner and support the work needs." },
  { n: "03", t: "Own", d: "Put a lead operating partner in charge of execution." },
  { n: "04", t: "Deliver", d: "Complete the agreed work and hand off, or agree the next scope." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://www.veep.work/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      ...ogImageMeta(),
    ],
    links: [
      { rel: "canonical", href: "https://www.veep.work/" },
      { rel: "preload", as: "image", href: jian.src, fetchPriority: "high" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(serviceSchema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="rebuild">
      <LegacyHash />
      <Section pad="none" className="rb-home-hero">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-x-6">
            <h1 className="rb-h1-home md:col-span-12 lg:col-span-10">
              <span className="lg:block">Because a job </span>
              <span className="lg:block">always needs </span>
              <span className="lg:block">to be done.</span>
            </h1>
            <div className="mt-8 md:col-span-7 lg:col-span-6">
              <p className="rb-deck">
                Founders, CEOs, owner-operators, and funds hire Veep when mission-critical work has
                no clear owner and needs to move now.
              </p>
              <p className="rb-body mt-4">
                Veep gives companies and funds the operating partner capacity found inside top VC
                and PE firms. We define the work and outcomes, assemble the right team, and own
                delivery.
              </p>
              <div className="mt-8 flex flex-col items-start gap-1 sm:flex-row sm:gap-8">
                <TextLink to="/for-companies">For Companies</TextLink>
                <TextLink to="/for-portfolios">For Funds</TextLink>
              </div>
            </div>
            <figure className="rb-hero-portrait mt-10 w-[220px] md:col-span-4 md:col-start-9 md:mt-8 md:w-full lg:col-span-3 lg:col-start-9">
              <Portrait
                src={jian.src}
                objectPosition={jian.objectPosition}
                scale={jian.scale}
                priority
                className="aspect-[4/5] w-full"
              />
              <figcaption className="mt-3">
                <span className="block text-[16px] font-medium leading-[1.4]">Jian Yang</span>
                <span className="rb-caption mt-1 block text-[var(--rb-muted)]">
                  Finance Operating Partner
                </span>
                <span className="rb-caption mt-1 block text-[var(--rb-muted)]">
                  Prior experience: Industrious, Opencare
                </span>
              </figcaption>
            </figure>
          </div>
          <ClientTicker />
        </Container>
      </Section>

      <Section id="overview">
        <Container>
          <h2 className="rb-h2 max-w-[24ch]">The priority is clear. The owner isn't.</h2>
          <p className="rb-body mt-4 max-w-[46ch]">
            Important work gets blocked, limps along, or lands back on your desk when no one owns
            the outcome.
          </p>
          <div className="rb-ownership-map mt-12">
            <div className="rb-work-inputs">
              <p className="rb-caption text-[var(--rb-muted)]">Work without an owner</p>
              <ul className="rb-returning-work mt-4">
                {[
                  "Capital & transaction readiness",
                  "Revenue repeatability",
                  "Commercial expansion",
                  "Leadership and operating gaps",
                ].map((item) => (
                  <li key={item} className="text-[18px] leading-[1.4]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rb-leadership-desk">
              <p className="text-[22px] font-medium leading-[1.25]">Leadership</p>
              <p className="mt-3 text-[16px] leading-[1.5] text-[var(--rb-muted)]">
                Lands back on your desk when no one owns the outcome.
              </p>
              <span className="rb-desk-line" aria-hidden />
            </div>
            <div className="rb-owned-mandate">
              <p className="text-[18px] leading-[1.4]">A mandate gains an owner</p>
              <p className="rb-caption mt-2 text-[var(--rb-muted)]">
                Illustrative. Not a client workload.
              </p>
              <h3 className="mt-6 text-[26px] font-medium leading-[1.2]">Capital readiness</h3>
              <dl className="rb-owned-details mt-5">
                <div className="rb-owned-scope">
                  <dt>Scope</dt>
                  <dd>Model, reporting, and investor materials</dd>
                </div>
                <div>
                  <dt>Lead owner</dt>
                  <dd>Lead operating partner</dd>
                </div>
                <div>
                  <dt>Support</dt>
                  <dd>Veep</dd>
                </div>
                <div className="rb-owned-delivery">
                  <dt>Delivery</dt>
                  <dd>Complete the agreed work and hand off</dd>
                </div>
              </dl>
            </div>
          </div>
          <ol className="mt-12 grid gap-6 border-t border-[var(--rb-rule)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="rb-mono text-[14px] text-[var(--rb-link)]">{step.n}</p>
                <h3 className="mt-2 text-[18px] font-medium leading-[1.3]">{step.t}</h3>
                <p className="mt-2 text-[16px] leading-[1.5] text-[var(--rb-muted)]">{step.d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="audiences" tone="field" pad="compact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
            <div className="lg:pr-10">
              <h2 className="text-[30px] font-medium leading-[1.15] lg:text-[34px]">
                For Companies
              </h2>
              <p className="rb-body mt-4">
                Prepare for a raise. Build a sales engine beyond the founder. Put an expansion plan
                into motion. Veep gives critical work inside your business a senior owner.
              </p>
              <TextLink to="/for-companies" className="mt-4">
                Explore company engagements
              </TextLink>
            </div>
            <div className="border-t border-[var(--rb-rule)] pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h2 className="text-[30px] font-medium leading-[1.15] lg:text-[34px]">For Funds</h2>
              <p className="rb-body mt-4">
                Plan operating capacity across the portfolio and deploy it company by company.
                Support diligence, post-close execution, leadership transitions, and exit readiness
                through one operating relationship.
              </p>
              <TextLink to="/for-portfolios" className="mt-4">
                Explore portfolio operations
              </TextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="proof">
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <p className="rb-metric">$6M</p>
              <p className="mt-3 text-[20px] leading-[1.35] lg:text-[22px]">Raised in six weeks</p>
              <p className="rb-caption mt-3 text-[var(--rb-muted)]">B2B SaaS</p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-[28px] font-medium leading-[1.2] lg:text-[32px]">
                The work behind the raise.
              </h2>
              <p className="rb-body mt-4">
                A CEO preparing for a first institutional round needed a financial model, investor
                materials, and fundraising support.
              </p>
              <p className="rb-body mt-3">
                The engagement built a three-year model and diligence-ready CAC/LTV dashboards, and
                supported the CEO through investor meetings and term sheets.
              </p>
              <TextLink to="/for-companies" hash="proof" className="mt-4">
                See the work behind the result
              </TextLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section pad="compact">
        <Container>
          <h2 className="max-w-[16ch] text-[36px] font-medium leading-[1.15] lg:text-[40px]">
            Bring the priority that keeps coming back.
          </h2>
          <p className="rb-body mt-4 max-w-[48ch]">
            Book a 30-minute intro call to clarify the work, discuss the support it needs, and see
            whether Veep is the right fit.
          </p>
          <BookLink className="mt-8" />
        </Container>
      </Section>
    </div>
  );
}
