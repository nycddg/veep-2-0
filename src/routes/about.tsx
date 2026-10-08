import { createFileRoute } from "@tanstack/react-router";
import { ogImageMeta } from "@/lib/seo";
import { spotlightOperators } from "@/lib/spotlight-operators";
import { BookLink } from "@/components/site/rebuild/BookLink";
import { Container } from "@/components/site/rebuild/Container";
import { Section } from "@/components/site/rebuild/Section";
import { TextLink } from "@/components/site/rebuild/TextLink";
import { PublicClose, PublicIntro } from "@/components/site/rebuild/PublicPage";

const description =
  "Meet the founders and operating principles behind Veep. Operating partner capacity for companies and funds, with clear ownership from scope through handoff.";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Veep | Built by operators" },
      { name: "description", content: description },
      { property: "og:title", content: "About Veep | Built by operators" },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://www.veep.work/about" },
      ...ogImageMeta(),
    ],
    links: [{ rel: "canonical", href: "https://www.veep.work/about" }],
  }),
  component: Page,
});

const founders = [
  {
    name: "Dave Garcia",
    bio: "Launched products, led pivots, and helped companies through exits. Now building Veep to put senior ownership around critical work.",
  },
  {
    name: "Jian Yang",
    bio: "Finance operator and entrepreneur. At Industrious, secured $140M+ in equity funding and restructured financial operations for rapid scale.",
  },
  {
    name: "Mark Newhouse",
    bio: "Built brands, transformed organizations, and sold startups. Now building alongside founders through Veep.",
  },
];
const principles = [
  {
    title: "Start with the work.",
    body: "Define the priority, the outcome, and what getting it done requires. The mandate determines the team.",
  },
  {
    title: "Put an owner in charge.",
    body: "For operating engagements, a lead operating partner runs the workplan, coordinates delivery, and works inside the business.",
  },
  {
    title: "Stay accountable.",
    body: "Veep manages scope, quality, escalation, and continuity. Your team retains strategic decisions and approvals.",
  },
  {
    title: "Make the handoff count.",
    body: "Complete the agreed work and leave the documentation, context, and working materials the business needs next.",
  },
];
const people = [
  spotlightOperators[0],
  spotlightOperators[1],
  spotlightOperators[3],
  spotlightOperators[6],
  spotlightOperators[8],
  spotlightOperators[11],
];

function Page() {
  return (
    <div className="rebuild ve-editorial ve-public ve-about">
      <PublicIntro
        label="About Veep"
        title={
          <>
            Built by operators.
            <br />{" "}
            <span>
              Accountable for
              <br /> the work.
            </span>
          </>
        }
        actions={
          <>
            <BookLink />
            <TextLink to="/for-companies" hash="how">
              How we work <span aria-hidden="true">↗</span>
            </TextLink>
          </>
        }
      >
        <p>
          We built Veep around a familiar problem: the work is critical, the team is stretched, and
          no one clearly owns what happens next.
        </p>
        <p>
          Companies and funds need operating capacity that can take responsibility for a defined
          mandate. We scope the work, assemble the right team, and own delivery.
        </p>
      </PublicIntro>

      <Section pad="none" className="ve-network-spread">
        <Container className="ve-container">
          <div className="ve-network-spread-label">
            <p>Selected operating partners</p>
            <p>
              <strong>75+</strong> vetted senior operators
            </p>
          </div>
          <div className="ve-contact-sheet">
            {people.map((person) => (
              <figure key={person.name}>
                <img
                  src={person.photoUrl}
                  alt=""
                  width="330"
                  height="410"
                  loading="eager"
                  decoding="async"
                />
                <figcaption>
                  <span>{person.name}</span>
                  {person.role.replace(" Operating Partner", "")}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="ve-small-note">
            The team is assembled for the mandate, business, and stage. Profiles show network
            experience, not current availability.
          </p>
        </Container>
      </Section>

      <Section className="ve-founders-section">
        <Container className="ve-container">
          <div className="ve-section-opening">
            <h2 className="ve-title">
              Founders first.
              <br /> Operators always.
            </h2>
            <p className="ve-body">
              Veep grew out of firsthand experience building, scaling, and leading from inside
              companies. Our founders know how quickly a critical priority can become an ownership
              gap.
            </p>
          </div>
          <div className="ve-founders">
            {founders.map((founder, index) => (
              <article key={founder.name}>
                <p className="ve-kicker">Co-founder / 0{index + 1}</p>
                <h3>{founder.name}</h3>
                <p>{founder.bio}</p>
              </article>
            ))}
          </div>
          <p className="ve-small-note">Career experience includes work before Veep.</p>
        </Container>
      </Section>

      <Section className="ve-principles-section">
        <Container className="ve-container">
          <div className="ve-section-opening">
            <h2 className="ve-title">
              Ownership is
              <br /> a way of working.
            </h2>
            <p className="ve-body">
              The operating partner model found inside top VC and PE firms, available to companies
              and funds when the work needs to move.
            </p>
          </div>
          <ol className="ve-principles">
            {principles.map((item, i) => (
              <li key={item.title}>
                <span aria-hidden="true">0{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="ve-small-note">
            In Advisory engagements, your team retains execution ownership, supported by senior
            judgment and guidance.
          </p>
          <TextLink to="/for-companies" hash="benefits">
            See who owns what <span aria-hidden="true">↗</span>
          </TextLink>
        </Container>
      </Section>
      <PublicClose contact>
        Tell us about the work that keeps coming back to you. We’ll discuss the scope, the ownership
        it needs, and whether Veep is the right fit.
      </PublicClose>
    </div>
  );
}
