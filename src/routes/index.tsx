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
            <h1 className="v-display vh-hero-title">
              <span>Because a job </span>
              <span>always needs </span>
              <span>to be done.</span>
            </h1>
            <p className="vh-hero-problems">
              <span>The work you can’t get to.</span> <span>The project that keeps slipping.</span>{" "}
              <span>The priority that keeps coming back.</span>
            </p>
            <MotionScene concept="desk" compact className="vh-hero-visual" />
            <div className="vh-hero-argument">
              <p className="v-body-large">
                The hardest jobs rarely arrive with a clean title or an obvious owner. Veep puts
                senior operators on critical finance, GTM, and operations work for founders and
                funds.
              </p>
              <div className="vh-hero-actions">
                <ActionLink href="/for-companies" variant="secondary">
                  For founders
                </ActionLink>
                <ActionLink href="/for-portfolios" variant="secondary">
                  For funds
                </ActionLink>
              </div>
            </div>
          </div>
          <ClientTicker />
        </Container>
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
              A raise to prepare for. Revenue that still depends on you. A launch without an
              operating plan. Your team is at capacity, and you’re still the person holding it
              together.
            </p>
          </div>
          <OwnershipDiagram />
          <div className="vh-ownership-answer">
            <p>
              <strong>Veep is accountable</strong>{" "}
              <span>for scope, quality, and continuity from delivery through to handoff.</span>
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
                Get the model, reporting, and materials ready for the raise or transaction. Put a
                senior owner on the work between preparation and diligence.
              </p>
            </li>
            <li>
              <h3>Repeatable revenue</h3>
              <p className="v-body-large">
                Sharpen the customer focus, pricing, and pipeline. Build a sales cadence your team
                can run without the founder in every deal.
              </p>
            </li>
            <li>
              <h3>Commercial expansion</h3>
              <p className="v-body-large">
                Pressure-test the next market, product, or channel. Build the operating plan and put
                someone in charge of getting it into market.
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
            <h2>For founders</h2>
            <p className="v-body-large v-muted">
              Keep your attention on the decisions. A lead operating partner owns the plan and
              coordinates the people doing the work.
            </p>
            <TextLink to="/for-companies">
              Explore company engagements <span aria-hidden="true">↗</span>
            </TextLink>
          </article>
          <article>
            <h2>For funds</h2>
            <p className="v-body-large v-muted">
              Portfolio companies don’t pause for a search. Put senior operators on the work that
              needs to move, through one operating relationship.
            </p>
            <TextLink to="/for-portfolios">
              Explore portfolio operations <span aria-hidden="true">↗</span>
            </TextLink>
          </article>
        </Container>
      </section>
      <section className="v-section vh-method" aria-labelledby="method-title">
        <Container>
          <h2 id="method-title">Bring us the job.</h2>
          <ol className="vh-method-timeline">
            <li>
              <span className="vh-method-number" aria-hidden="true">
                01
              </span>
              <h3>Scope</h3>
              <p>Define the job and what has to be true on the other side.</p>
            </li>
            <li>
              <span className="vh-method-number" aria-hidden="true">
                02
              </span>
              <h3>Assemble</h3>
              <p>
                Put a lead operating partner in charge. Build the team and workflows around the job.
              </p>
            </li>
            <li>
              <span className="vh-method-number" aria-hidden="true">
                03
              </span>
              <h3>Own</h3>
              <p>Run the work, coordinate the team, and keep decisions moving.</p>
            </li>
            <li>
              <span className="vh-method-number" aria-hidden="true">
                04
              </span>
              <h3>Deliver</h3>
              <p>
                Finish the agreed work. Hand off clearly, with the next owner ready to take over.
              </p>
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
            <h2 className="v-heading">The difference Veep makes</h2>
            <TextLink to="/for-companies" hash="proof">
              Inside the engagements
            </TextLink>
          </div>
          <div className="vh-proof-cases">
            <article>
              <p className="v-label">B2B SAAS · FINANCE</p>
              <p className="vh-proof-number">$6M</p>
              <h3 className="v-lead">Raised in six weeks.</h3>
              <p className="v-body-large v-muted">
                A three-year financial model. Diligence-ready reporting. Support through investor
                meetings and term sheets.
              </p>
            </article>
            <article>
              <p className="v-label">SOFTWARE STUDIO · GROWTH</p>
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
            What work keeps
            <br />
            coming back to you?
          </h2>
          <div>
            <p className="v-body-large v-muted">
              Bring the stuck priority to a 30-minute intro call. Tell us what changed, what’s in
              the way, and what needs to happen next. We’ll help define the job and who should own
              it.
            </p>
            <BookLink />
          </div>
        </Container>
      </section>
    </div>
  );
}
