import { createFileRoute, Link } from "@tanstack/react-router";
import { MotionScene } from "@/components/site/motion/MotionScene";
import { ogImageMeta } from "@/lib/seo";
import { Container } from "@/components/site/rebuild/Container";
import { Section } from "@/components/site/rebuild/Section";
import { TextLink } from "@/components/site/rebuild/TextLink";
import { PublicClose } from "@/components/site/rebuild/PublicPage";

const title = "Meet Veep | Critical work, owned.";
const description =
  "Operating partner capacity for companies and funds. Veep defines the work and outcomes, assembles the right team, and owns delivery.";
export const Route = createFileRoute("/meetveep")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://www.veep.work/meetveep" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/meetveep" }],
  }),
  component: MeetVeepPage,
});
const steps = [
  ["Scope", "Define the work, outcomes, responsibilities, and price."],
  ["Assemble", "Select a lead operating partner and the capacity the mandate needs."],
  ["Own", "The operator runs the work. Veep manages scope, quality, and continuity."],
  ["Deliver", "Complete the mandate and hand over the work, materials, and context."],
];
function MeetVeepPage() {
  return (
    <div className="rebuild ve-editorial ve-public ve-meet">
      <Section pad="none" className="ve-meet-hero">
        <Container className="ve-container">
          <p className="ve-kicker">Meet Veep</p>
          <div className="ve-meet-opening">
            <div>
              <h1>
                The work needs
                <br /> <span>an owner.</span>
              </h1>
              <p className="ve-meet-lead">
                The raise. The growth plan.
                <br /> The priority that keeps coming back.
              </p>
              <p>
                Veep puts senior operators on critical finance, GTM, and operations work for
                founders and funds. We define the job, assemble the team, and own delivery.
              </p>
              <div className="ve-public-actions">
                <Link to="/contact" className="ve-button cta-accent">
                  Get in touch
                </Link>
                <TextLink to="/for-companies" hash="how">
                  See how it works <span aria-hidden="true">↗</span>
                </TextLink>
              </div>
            </div>
            <MotionScene concept="first-step" className="ve-meet-motion" />
          </div>
          <div className="ve-meet-timing">
            <p>
              <strong>72h</strong>
              <span>Scoped in 72 hours</span>
            </p>
            <p>
              <strong>&lt;10d</strong>
              <span>Started in under 10 days</span>
            </p>
            <div>
              <p>Operating engagements.</p>
              <p>The mandate sets the delivery timeline.</p>
            </div>
          </div>
        </Container>
      </Section>
      <Section motion="process" className="ve-meet-method">
        <Container className="ve-container">
          <div className="ve-section-opening">
            <h2 className="ve-title">
              A clear mandate.
              <br /> Ownership through handoff.
            </h2>
            <p className="ve-body">
              75+ vetted senior operators, selected for the work. Your team retains strategic
              decisions and approvals.
            </p>
          </div>
          <ol className="ve-method-track">
            {steps.map(([name, body], i) => (
              <li key={name}>
                <span>0{i + 1}</span>
                <h3>{name}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
          <p className="ve-small-note">
            Advisory provides senior guidance while your team owns execution.
          </p>
        </Container>
      </Section>
      <Section motion="proof" className="ve-meet-proof v-paper">
        <Container className="ve-container ve-meet-proof-layout">
          <div>
            <p className="ve-kicker">Client work · B2B SaaS</p>
            <p className="ve-proof-number">$6M</p>
            <h2>Raised in six weeks.</h2>
          </div>
          <div>
            <h3>The work behind the raise.</h3>
            <p>
              A three-year financial model, diligence-ready CAC/LTV reporting, and CEO coaching
              through investor meetings and term sheets.
            </p>
            <TextLink to="/for-companies" hash="proof">
              Inside the engagement <span aria-hidden="true">↗</span>
            </TextLink>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="ve-container ve-meet-next">
          <div>
            <p className="ve-kicker">For founders</p>
            <h2 className="ve-title">
              Size the support
              <br /> to the work.
            </h2>
            <p>
              Choose Advisory, Sprint, Operator, or Pod around the job and the ownership it needs.
            </p>
            <TextLink to="/pricing" hash="tiers">
              See pricing <span aria-hidden="true">↗</span>
            </TextLink>
          </div>
          <div>
            <p className="ve-kicker">For funds</p>
            <h2 className="ve-title">
              Plan across
              <br /> the portfolio.
            </h2>
            <p>
              One operating relationship connects capacity planning to company delivery. Each
              mandate has its own scope, owner, and fee.
            </p>
            <TextLink to="/for-portfolios">
              Explore portfolio operations <span aria-hidden="true">↗</span>
            </TextLink>
          </div>
        </Container>
      </Section>
      <PublicClose contact>
        Tell us what needs an owner. We’ll define the scope and the team to take it on. Operator fit
        is covered by a 30-day fit guarantee.
      </PublicClose>
    </div>
  );
}
