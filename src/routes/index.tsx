import { createFileRoute } from "@tanstack/react-router";
import { ogImageMeta } from "@/lib/seo";
import { BookLink } from "@/components/site/rebuild/BookLink";
import { ClientTicker } from "@/components/site/rebuild/ClientTicker";
import { Container } from "@/components/site/rebuild/Container";
import { LegacyHash } from "@/components/site/rebuild/LegacyHash";
import { OperatorProof } from "@/components/site/motion/OperatorProof";
import { MotionScene } from "@/components/site/motion/MotionScene";
import { OwnershipDiagram } from "@/components/site/rebuild/OwnershipDiagram";
import "@/components/site/system/home.css";
import { TextLink } from "@/components/site/rebuild/TextLink";

const TITLE = "Veep | Critical work, owned.";
const DESCRIPTION =
  "Operating partner capacity for companies and funds. Veep defines the work and outcomes, assembles the right team, and owns delivery.";

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
    links: [{ rel: "canonical", href: "https://www.veep.work/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(serviceSchema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="ve-system vh-home">
      <LegacyHash />
      <section className="vh-hero">
        <Container>
          <p className="vh-opening-label">An operating partner platform</p>
          <div className="vh-hero-grid">
            <div className="vh-hero-copy">
              <h1 className="v-display">
                <span>Because a job </span>
                <span>always needs </span>
                <span>
                  to be done<span className="v-signal">.</span>
                </span>
              </h1>
              <p className="v-lead">
                The work you can’t get to.
                <br />
                The priority that keeps slipping.
              </p>
              <p className="v-body-large v-muted">
                Veep gives companies and funds the operating partner capacity found inside top VC
                and PE firms.
              </p>
              <BookLink />
            </div>
            <MotionScene concept="desk" />
          </div>
        </Container>
        <ClientTicker />
      </section>
      <section id="overview" className="v-section">
        <Container>
          <div className="v-section-intro">
            <h2 className="v-heading">
              It can’t all land
              <br />
              back on your desk.
            </h2>
            <p className="v-body-large">
              Founders, CEOs, owner-operators, and funds hire Veep when mission-critical work has no
              clear owner and needs to move now.
            </p>
          </div>
          <OwnershipDiagram />
          <div className="vh-model-caption">
            <p className="v-body v-muted">
              The operating partner model found inside top VC and PE firms, available to your
              business.
            </p>
            <TextLink to="/for-companies" hash="benefits">
              How ownership works <span aria-hidden="true">↗</span>
            </TextLink>
          </div>
        </Container>
      </section>
      <section id="audiences" className="v-section v-section--tonal">
        <Container className="vh-paths">
          <article>
            <p className="v-label">For Companies</p>
            <h2 className="v-heading">
              One critical priority.
              <br />A senior owner.
            </h2>
            <p className="v-body-large v-muted">
              Prepare for a raise. Build a sales engine beyond the founder. Turn an expansion plan
              into operating work.
            </p>
            <TextLink to="/for-companies">
              Explore company engagements <span aria-hidden="true">↗</span>
            </TextLink>
          </article>
          <article>
            <p className="v-label">For Funds</p>
            <h2 className="v-heading">
              A portfolio of priorities.
              <br />
              One relationship.
            </h2>
            <p className="v-body-large v-muted">
              Plan capacity across the portfolio. Deploy it company by company, from diligence
              through exit readiness.
            </p>
            <TextLink to="/for-portfolios">
              Explore portfolio operations <span aria-hidden="true">↗</span>
            </TextLink>
          </article>
        </Container>
      </section>
      <section id="proof" className="v-section v-paper">
        <Container className="vh-proof">
          <div>
            <p className="v-label">Selected company work · B2B SaaS</p>
            <p className="vh-proof-number">$6M</p>
            <p className="v-lead">Raised in six weeks.</p>
          </div>
          <div>
            <h2 className="v-heading">
              A result has
              <br />
              work behind it.
            </h2>
            <p className="v-body-large v-muted">
              A three-year financial model. Diligence-ready reporting. Support through investor
              meetings and term sheets.
            </p>
            <TextLink to="/for-companies" hash="proof">
              Inside the engagement <span aria-hidden="true">↗</span>
            </TextLink>
          </div>
        </Container>
      </section>
      <section className="v-section">
        <Container>
          <OperatorProof />
        </Container>
      </section>
      <section className="v-section vh-close">
        <Container className="v-section-intro">
          <h2 className="v-heading">
            It's probably
            <br />a job for Veep<span className="v-signal">.</span>
          </h2>
          <div>
            <p className="v-body-large v-muted">
              It keeps slipping. It sits between functions. You’re still the one pushing it forward.
              Bring that work to a 30-minute intro call. We’ll discuss what it needs and whether
              Veep is the right fit.
            </p>
            <BookLink />
          </div>
        </Container>
      </section>
    </div>
  );
}
