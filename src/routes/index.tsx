import { createFileRoute } from "@tanstack/react-router";
import { ogImageMeta } from "@/lib/seo";
import { BookLink } from "@/components/site/rebuild/BookLink";
import { ClientTicker } from "@/components/site/rebuild/ClientTicker";
import { Container } from "@/components/site/rebuild/Container";
import { LegacyHash } from "@/components/site/rebuild/LegacyHash";
import { OperatorProof } from "@/components/site/motion/OperatorProof";
import { MotionScene } from "@/components/site/motion/MotionScene";
import { ActionLink } from "@/components/site/system/Controls";
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
                CEOs and funds hire Veep when mission-critical work has no clear owner and needs to
                move now.
              </p>
              <p className="v-body-large v-muted">
                Veep gives companies and funds the operating partner capacity found inside top VC
                and PE firms. We define the work and outcomes, assemble the right team, and own
                delivery.
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
            <p className="v-body-large v-muted vh-recognition">
              A fundraise to prepare. A go-to-market reset that keeps slipping. Margins that need
              fixing. A leadership gap the team can’t absorb.
            </p>
          </div>
          <OwnershipDiagram />
          <div className="vh-ownership-answer">
            <p className="v-body-large">
              Veep stays accountable for scope, quality, and continuity through delivery and
              handoff.
            </p>
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
              <p className="v-body-large">
                Models, reporting, materials, and coordination for a fundraise, financing, or
                transaction.
              </p>
            </li>
            <li>
              <h3>Repeatable revenue</h3>
              <p className="v-body-large">
                Customer focus, positioning, pricing, pipeline, and a sales cadence the team can run
                beyond the founder.
              </p>
            </li>
            <li>
              <h3>Commercial expansion</h3>
              <p className="v-body-large">
                A business case, operating plan, and launch coordination for a new market, product,
                offer, or channel.
              </p>
            </li>
          </ul>
          <TextLink to="/for-companies" hash="work">
            Explore the work
          </TextLink>
        </Container>
      </section>
      <section id="audiences" className="v-section v-section--tonal vh-audiences">
        <Container className="vh-paths">
          <article>
            <h2>For companies</h2>
            <p className="v-body-large v-muted">
              A senior owner for a critical operating priority.
            </p>
            <TextLink to="/for-companies">
              Explore company engagements <span aria-hidden="true">↗</span>
            </TextLink>
          </article>
          <article>
            <h2>For funds</h2>
            <p className="v-body-large v-muted">
              One relationship for operating capacity across your portfolio.
            </p>
            <TextLink to="/for-portfolios">
              Explore portfolio operations <span aria-hidden="true">↗</span>
            </TextLink>
          </article>
        </Container>
      </section>
      <section className="v-section vh-method" aria-labelledby="method-title">
        <Container>
          <h2 id="method-title">How the work gets delivered</h2>
          <ol className="vh-method-timeline">
            <li>
              <span className="vh-method-number" aria-hidden="true">
                01
              </span>
              <h3>Scope</h3>
              <p>A clear scope, outcome, and responsibilities.</p>
            </li>
            <li>
              <span className="vh-method-number" aria-hidden="true">
                02
              </span>
              <h3>Assemble</h3>
              <p>A lead operating partner and the support the work needs.</p>
            </li>
            <li>
              <span className="vh-method-number" aria-hidden="true">
                03
              </span>
              <h3>Own</h3>
              <p>A lead operating partner runs execution. Veep stays accountable.</p>
            </li>
            <li>
              <span className="vh-method-number" aria-hidden="true">
                04
              </span>
              <h3>Deliver</h3>
              <p>Complete the agreed work and hand off, or agree the next scope.</p>
            </li>
          </ol>
          <div className="vh-method-footer">
            <TextLink to="/for-companies" hash="benefits">
              How ownership works
            </TextLink>
          </div>
        </Container>
      </section>
      <section id="proof" className="v-section v-paper vh-proof-chapter">
        <Container>
          <div className="vh-proof-heading">
            <h2 className="v-heading">The difference it made.</h2>
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
        </Container>
      </section>
      <section className="v-section vh-testimonial" aria-label="Client experience">
        <Container>
          <figure className="vh-client-voice">
            <blockquote>
              “I cannot recommend this team more highly. They think, act, and engage like
              co-founders.”
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
      <ClientTicker kind="operators" />
      <section className="v-section vh-newsletter" aria-labelledby="newsletter-title">
        <Container className="vh-newsletter-layout">
          <div>
            <p className="v-eyebrow">The Veep newsletter</p>
            <h2 id="newsletter-title" className="v-heading">
              Zero to Something
            </h2>
            <p className="v-lead vh-newsletter-description">
              Field notes for founders building in the messy middle.
            </p>
            <p className="v-body-large vh-newsletter-description">
              Capital, revenue, people, and the work between them. An operating perspective on the
              decisions that move a business forward.
            </p>
            <ActionLink href="https://mailchi.mp/veep/zero-to-something-newsletter">
              Subscribe to Zero to Something
            </ActionLink>
          </div>
          <article className="vh-field-note" aria-labelledby="field-note-title">
            <p className="v-label">September 2026</p>
            <h3 id="field-note-title">When the Middle Gets Messier</h3>
            <p className="v-body-large">
              How founders can sharpen priorities when more activity stops producing progress.
            </p>
            <blockquote>“A company can be incredibly busy while standing still.”</blockquote>
            <a
              className="v-text-link"
              href="https://us19.campaign-archive.com/?u=37a4f019ed5c8b493097f1afc&amp;id=fa9065ae89"
            >
              Read our latest note
            </a>
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
