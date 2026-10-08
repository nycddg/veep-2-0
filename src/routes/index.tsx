import { createFileRoute } from "@tanstack/react-router";
import { ogImageMeta } from "@/lib/seo";
import { BookLink } from "@/components/site/rebuild/BookLink";
import { ClientTicker } from "@/components/site/rebuild/ClientTicker";
import { Container } from "@/components/site/rebuild/Container";
import { LegacyHash } from "@/components/site/rebuild/LegacyHash";
import { operatorAsset } from "@/components/site/rebuild/operatorAsset";
import { OperatorDeck } from "@/components/site/rebuild/OperatorDeck";
import { OwnershipDiagram } from "@/components/site/rebuild/OwnershipDiagram";
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
    <div className="rebuild ve-editorial">
      <LegacyHash />
      <Section pad="none" className="ve-home-hero">
        <Container className="ve-container">
          <div className="ve-masthead-top">
            <p>Operating partners for companies & funds</p>
            <span>Critical work, owned.</span>
          </div>
          <h1 className="ve-home-title">
            <span>Because a job</span>
            <span>
              always needs to be done<span className="ve-period">.</span>
            </span>
          </h1>
          <div className="ve-home-stage">
            <div className="ve-home-intro">
              <p className="ve-lead">
                The work needs to move.
                <br />
                Put the right people behind it.
              </p>
              <p>
                Veep gives companies and funds the operating partner capacity found inside top VC
                and PE firms. We define the work and outcomes, assemble the right team, and own
                delivery.
              </p>
              <BookLink />
              <p className="ve-network-count">
                <strong>75+</strong>
                <span>
                  vetted senior operators
                  <br />
                  selected for the work
                </span>
              </p>
            </div>
            <OperatorDeck />
          </div>
        </Container>
        <ClientTicker />
      </Section>

      <Section id="overview" className="ve-model-section">
        <Container className="ve-container">
          <div className="ve-section-opening">
            <h2 className="ve-title">
              It can’t all land
              <br />
              back on your desk.
            </h2>
            <p className="ve-body">
              Founders, CEOs, owner-operators, and funds hire Veep when mission-critical work has no
              clear owner and needs to move now.
            </p>
          </div>
          <OwnershipDiagram />
          <div className="ve-model-caption">
            <p>
              The operating partner model found inside top VC and PE firms, available to your
              business.
            </p>
            <TextLink to="/for-companies" hash="benefits">
              How ownership works <span aria-hidden="true">↗</span>
            </TextLink>
          </div>
        </Container>
      </Section>

      <Section id="audiences" pad="none" className="ve-paths-section">
        <Container className="ve-container">
          <div className="ve-paths">
            <article className="ve-path ve-path-company">
              <p className="ve-kicker">For Companies</p>
              <h2>
                One critical
                <br />
                priority.
                <br />
                <span>A senior owner.</span>
              </h2>
              <div className="ve-path-glyph ve-single-glyph" aria-hidden="true">
                <i />
                <i />
                <i />
                <b />
              </div>
              <p>
                Prepare for a raise. Build a sales engine beyond the founder. Turn an expansion plan
                into operating work.
              </p>
              <TextLink to="/for-companies">
                Explore company engagements <span aria-hidden="true">↗</span>
              </TextLink>
            </article>
            <article className="ve-path ve-path-funds">
              <p className="ve-kicker">For Funds</p>
              <h2>
                A portfolio
                <br />
                of priorities.
                <br />
                <span>One relationship.</span>
              </h2>
              <div className="ve-path-glyph ve-many-glyph" aria-hidden="true">
                <i />
                <i />
                <i />
                <b />
                <i />
                <i />
                <i />
              </div>
              <p>
                Plan capacity across the portfolio. Deploy it company by company, from diligence
                through exit readiness.
              </p>
              <TextLink to="/for-portfolios">
                Explore portfolio operations <span aria-hidden="true">↗</span>
              </TextLink>
            </article>
          </div>
        </Container>
      </Section>

      <Section id="proof" className="ve-home-proof">
        <Container className="ve-container">
          <div className="ve-proof-teaser">
            <div>
              <p className="ve-kicker">Selected company work · B2B SaaS</p>
              <p className="ve-proof-number">$6M</p>
              <p className="ve-proof-label">Raised in six weeks.</p>
            </div>
            <div>
              <h2 className="ve-title">
                A result has
                <br />
                work behind it.
              </h2>
              <p className="ve-body">
                A three-year financial model. Diligence-ready reporting. Support through investor
                meetings and term sheets.
              </p>
              <TextLink to="/for-companies" hash="proof">
                Inside the engagement <span aria-hidden="true">↗</span>
              </TextLink>
            </div>
          </div>
          <ClientTicker kind="clients" />
        </Container>
      </Section>
      <Section className="ve-close">
        <Container className="ve-container ve-close-layout">
          <h2>
            What needs
            <br />
            to move<span className="ve-period">?</span>
          </h2>
          <div>
            <p>
              Bring the priority that keeps coming back. In a 30-minute intro call, we’ll discuss
              the work and whether Veep is the right fit.
            </p>
            <BookLink />
          </div>
        </Container>
      </Section>
    </div>
  );
}
