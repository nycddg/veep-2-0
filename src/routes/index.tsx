import { createFileRoute } from "@tanstack/react-router";
import { ogImageMeta } from "@/lib/seo";
import { BookLink } from "@/components/site/rebuild/BookLink";
import { ClientTicker } from "@/components/site/rebuild/ClientTicker";
import { Container } from "@/components/site/rebuild/Container";
import { LegacyHash } from "@/components/site/rebuild/LegacyHash";
import { OperatorProof } from "@/components/site/motion/OperatorProof";
import { MotionScene } from "@/components/site/motion/MotionScene";
import { Disclosure } from "@/components/site/system/Controls";
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
          <div className="vh-hero-composition">
            <div className="vh-hero-copy">
              <h1 className="v-display">
                <span>Because a job always </span>
                <span>needs to be done.</span>
              </h1>
              <p className="v-lead">
                <span>The work you can’t get to.</span>{" "}
                <span>The priority that keeps slipping.</span>
              </p>
              <p className="v-body-large v-muted">
                CEOs and funds hire Veep when mission-critical work has no clear owner and needs to
                move now.
              </p>
            </div>
            <MotionScene concept="desk" />
            <div className="vh-hero-actions">
              <BookLink />
            </div>
          </div>
        </Container>
        <ClientTicker />
      </section>
      <section id="overview" className="v-section vh-problem-chapter">
        <Container>
          <div className="vh-problem-intro">
            <h2 className="v-heading">
              It can’t all land
              <br />
              back on your desk.
            </h2>
            <p className="v-body-large v-muted">
              The team is busy. The hire takes time. Advice still needs someone to act on it. The
              work keeps coming back to you.
            </p>
          </div>
          <OwnershipDiagram />
          <div className="vh-ownership-answer">
            <h3 className="v-title">The work gets an owner.</h3>
            <p className="v-body-large v-muted">
              Veep gives companies and funds the operating partner capacity found inside top VC and
              PE firms. A senior operating partner takes the lead, with the support the work needs.
              You retain strategic decisions and approvals.
            </p>
          </div>
          <div className="vh-method-detail">
            <Disclosure question="How the work gets delivered">
              <ol>
                <li>
                  <strong>Scope.</strong> A clear scope, outcome, and responsibilities.
                </li>
                <li>
                  <strong>Assemble.</strong> A lead operating partner and the support the work
                  needs.
                </li>
                <li>
                  <strong>Own.</strong> A lead operating partner runs execution. Veep stays
                  accountable.
                </li>
                <li>
                  <strong>Deliver.</strong> Complete the agreed work and hand off, or agree the next
                  scope.
                </li>
              </ol>
              <p>Advisory provides senior guidance; your team owns execution.</p>
              <TextLink to="/for-companies" hash="benefits">
                How ownership works
              </TextLink>
            </Disclosure>
          </div>
        </Container>
      </section>
      <section id="impact" className="v-section vh-impact-chapter">
        <Container>
          <h2>
            The work moves.
            <br />
            So does the business.
          </h2>
          <ul className="vh-impact-list">
            <li>
              <h3>Capital readiness</h3>
              <div>
                <p className="v-lead">Financials the business can stand behind.</p>
                <p className="v-body">
                  Financial models, reporting, and materials for investor, lender, or buyer
                  scrutiny.
                </p>
              </div>
            </li>
            <li>
              <h3>Repeatable revenue</h3>
              <div>
                <p className="v-lead">Growth the team can run beyond the founder.</p>
                <p className="v-body">
                  Customer focus, positioning, pricing, pipeline management, and a sales cadence.
                </p>
              </div>
            </li>
            <li>
              <h3>Commercial expansion</h3>
              <div>
                <p className="v-lead">A sound expansion decision and a plan to act on.</p>
                <p className="v-body">
                  The business case, operating plan, and leadership to launch a new market, product,
                  offer, or channel.
                </p>
              </div>
            </li>
          </ul>
          <TextLink to="/for-companies" hash="work">
            Explore the work
          </TextLink>
        </Container>
      </section>
      <section id="proof" className="v-section v-paper vh-proof-chapter">
        <Container>
          <div className="vh-proof-heading">
            <h2 className="v-heading">
              The work.
              <br />
              The difference it made.
            </h2>
            <TextLink to="/for-companies" hash="proof">
              Inside the engagements
            </TextLink>
          </div>
          <div className="vh-proof-cases">
            <article>
              <p className="v-label">B2B SaaS · Finance operating partner</p>
              <p className="vh-proof-number">$6M</p>
              <h3 className="v-lead">Raised in six weeks.</h3>
              <p className="v-body-large v-muted">
                A three-year financial model. Diligence-ready reporting. Support through investor
                meetings and term sheets.
              </p>
            </article>
            <article>
              <p className="v-label">Software studio · Growth operating partner</p>
              <p className="vh-proof-number">25%</p>
              <h3 className="v-lead">Project margins up.</h3>
              <p className="v-body-large v-muted">
                Standardized project scoping and staffing, built an AI GTM and delivery framework,
                and hired a Director of AI.
              </p>
            </article>
          </div>
          <figure className="vh-client-voice">
            <blockquote>
              I cannot recommend this team more highly. They think, act, and engage like
              co-founders.
            </blockquote>
            <figcaption>
              <strong>Jerry Kolber</strong>
              <span>Founder &amp; CEO, Atomic Audio</span>
            </figcaption>
          </figure>
        </Container>
      </section>
      <section className="v-section">
        <Container>
          <OperatorProof />
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
      <section className="v-section vh-close">
        <Container className="v-section-intro">
          <h2 className="v-heading">
            It's probably
            <br />a job for Veep.
          </h2>
          <div>
            <p className="v-body-large v-muted">
              It keeps slipping. It sits between functions. You’re still the one pushing it forward.
              Bring that work to a 30-minute intro call. We’ll define the priority and recommend the
              operating capacity to move it forward.
            </p>
            <BookLink />
          </div>
        </Container>
      </section>
    </div>
  );
}
