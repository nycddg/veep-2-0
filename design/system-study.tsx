import { createRoot } from "react-dom/client";
import { useState, type CSSProperties } from "react";
import { ActionLink, Button, Disclosure, Field } from "../src/components/site/system/Controls";
import { ProfileFigure } from "../src/components/site/system/ProfileFigure";
import { MotionScene } from "../src/components/site/motion/MotionScene";
import { selectedSpotlights } from "../src/components/site/rebuild/spotlightSelections";
import { spotlightOperators } from "../src/lib/spotlight-operators";
import "../src/styles.css";
import "./system-study.css";

import { ComponentStates } from "./ComponentStates";

const person = selectedSpotlights("home")[0];
const longName = spotlightOperators.find(
  (operator) => operator.name === "Miguel Ferreyra de Bone",
)!;
const colors = [
  "surface",
  "surface-section",
  "surface-panel",
  "text",
  "text-secondary",
  "accent",
  "signal",
];

function ThemeSpecimen({ theme }: { theme: "dark" | "light" }) {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState("");
  const [validated, setValidated] = useState(false);
  const [animate, setAnimate] = useState(false);
  return (
    <article
      data-ve-theme={theme}
      className="ve-system vs-theme"
      aria-label={`${theme} theme specimen`}
    >
      <header>
        <p className="v-label">{theme === "dark" ? "01 / Dark" : "02 / Light"}</p>
        <h2 className="v-heading">
          Critical work,
          <br />
          owned.
        </h2>
        <p className="v-body-large v-muted">One identity. Deliberate roles for each theme.</p>
      </header>
      <section>
        <h3 className="v-title">Color has a job.</h3>
        <div className="vs-swatches">
          {colors.map((role) => (
            <div key={role}>
              <i style={{ background: `var(--v-${role})` } as CSSProperties} />
              <span className="v-label">{role}</span>
            </div>
          ))}
        </div>
        <p className="v-caption v-muted">
          Blue connects. Coral identifies the work selected to advance. Neutral actions keep the
          next step clear.
        </p>
      </section>
      <section>
        <h3 className="v-title">A useful type hierarchy.</h3>
        <p className="v-display">A job for Veep.</p>
        <p className="v-page-title">One critical priority.</p>
        <p className="v-lead">The priority that keeps slipping.</p>
        <p className="v-body v-muted">
          IBM Plex Sans carries the voice. IBM Plex Mono provides the quieter labels, numbers, and
          prices. Weight stays at 400 or 500.
        </p>
        <p className="v-label">Scope / Assemble / Own / Deliver</p>
        <div className="vs-reading v-reading">
          <p className="v-body-large">
            Veep gives companies and funds the operating partner capacity found inside top VC and PE
            firms. A senior operating partner takes the lead, with the support the work needs. You
            retain strategic decisions and approvals.
          </p>
          <p className="v-body v-muted">
            Complete the agreed work and hand over the documentation, context, and working
            materials. If the business needs further support, agree the next scope.
          </p>
          <p className="v-caption v-muted">
            Reading sample from the current Home and Companies pages. Explanation stays in Sans;
            short metadata stays in Mono. Text remains readable when the available width changes.
          </p>
        </div>
        <div className="vs-figures">
          <div>
            <p className="v-label">B2B SAAS · FINANCE</p>
            <p className="v-metric">$6M</p>
            <p className="v-body">Raised in six weeks.</p>
          </div>
          <div>
            <p className="v-label">Operator engagement</p>
            <p className="vs-price">
              <span>From</span> <span className="v-metric">$15k</span>
            </p>
            <p className="v-body">per month</p>
          </div>
        </div>
      </section>
      <section>
        <h3 className="v-title">States, not new styles.</h3>
        <div className="vs-actions">
          <ActionLink href="/">Open homepage</ActionLink>
          <Button
            variant="secondary"
            aria-pressed={selected}
            onClick={() => setSelected(!selected)}
          >
            {selected ? "Selected ✓" : "Select example"}
          </Button>
          <Button variant="quiet" onClick={() => setSelected(false)}>
            Reset
          </Button>
          <Button disabled>Unavailable</Button>
        </div>
        <a className="v-text-link" href="/#proof">
          Inside the engagement <span aria-hidden="true">↗</span>
        </a>
        <p className="v-caption v-muted">
          Hover, press, and Tab through the controls. Selected state uses a check and a tonal fill;
          keyboard focus keeps a clear outline.
        </p>
      </section>
      <ComponentStates />
      <section>
        <h3 className="v-title">Clarity at the point of action.</h3>
        <div className="vs-field-demo">
          <Field
            label="Work to scope"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              setValidated(false);
            }}
            note="Local example. Nothing is submitted."
            error={validated && !value.trim() ? "Add a short description of the work." : undefined}
          />
          <Button variant="secondary" onClick={() => setValidated(true)}>
            Check example
          </Button>
          {validated && value.trim() && (
            <p role="status" className="vs-success">
              ✓ Description added. This example stays in your browser.
            </p>
          )}
        </div>
        <Disclosure question="What does ownership mean?">
          A lead operating partner runs execution. Veep stays accountable. You retain strategic
          decisions and approvals.
        </Disclosure>
      </section>
      <section>
        <h3 className="v-title">A few purposeful shapes.</h3>
        <div className="vs-shapes">
          <div>
            <i className="vs-frame" />
            <p className="v-label">Scope / square</p>
          </div>
          <div>
            <i className="vs-control" />
            <p className="v-label">Control / 6px</p>
          </div>
          <div>
            <i className="vs-panel" />
            <p className="v-label">Panel / 8px</p>
          </div>
          <div>
            <i className="vs-node" />
            <p className="v-label">Center / circle</p>
          </div>
        </div>
        <div className="vs-tonal">
          <p className="v-body">
            Tonal change groups related information. Lines explain relationships and support
            controls. Editorial content stays open; profiles keep image and copy on one surface.
          </p>
        </div>
        <div className="vs-impact">
          <p className="v-label">Impact / paired foreground</p>
          <p className="v-title">The work moves. So does the business.</p>
          <p className="v-body">Financials the business can stand behind.</p>
        </div>
        <div className="v-paper vs-tonal">
          <p className="v-label">Paper / nested light roles</p>
          <p className="v-body">Evidence belongs beside the result.</p>
          <a className="v-text-link" href="/for-companies#proof">
            Inside the engagements
          </a>
        </div>
      </section>
      <section>
        <h3 className="v-title">Shared alignment, different arrangements.</h3>
        <div className="v-grid vs-grid-demo">
          <div className="v-span-half">
            <p className="v-label">The responsibility</p>
            <p className="v-body">A lead operating partner runs execution.</p>
          </div>
          <div className="v-span-half">
            <p className="v-label">The decision boundary</p>
            <p className="v-body">You retain strategic decisions and approvals.</p>
          </div>
          <div className="v-span-full vs-tonal">
            <p className="v-caption">
              12 columns at large widths, 8 at medium, 4 at compact. This composition stacks when
              its own width falls below 600px. Narrative order stays intact.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h3 className="v-title">The person and the evidence.</h3>
        <div className="vs-profiles">
          <ProfileFigure
            name={person.name}
            priorCompanies={person.priorCompanies}
            role={person.role}
            credential={person.heroCredential ?? person.evidence}
            photoUrl={person.photoUrl}
            photoPosition={person.photoPosition}
          />
          <ProfileFigure
            name={longName.name}
            priorCompanies={longName.priorCompanies}
            role={longName.role}
            credential={longName.summary}
            photoUrl={longName.photoUrl}
            photoPosition={longName.photoPosition}
          />
        </div>
        <p className="v-caption v-muted">
          Panel surface, 15px corners. Plex Sans for the name and evidence; Plex Mono for the role.
        </p>
      </section>
      <section>
        <h3 className="v-title">Relationships before motion.</h3>
        <p className="v-body v-muted">
          Incoming work expands the executive center. The same coral circle leaves in a defined
          scope and advances on its own path.
        </p>
        <div className="vs-motion">
          <div>
            <p className="v-label">Problem</p>
            <MotionScene concept="desk" motion="still" frame="problem" />
          </div>
          <div>
            <p className="v-label">{animate ? "Continuous loop" : "Resolved"}</p>
            <MotionScene concept="desk" motion={animate ? "auto" : "still"} />
          </div>
        </div>
        <div className="vs-static-relationships">
          <div>
            <p className="v-label">Company / resolved</p>
            <MotionScene concept="mandate" motion="still" />
            <p className="v-caption v-muted">
              One scope, an attached owner, supporting capabilities, and a path to delivery.
            </p>
          </div>
          <div>
            <p className="v-label">Fund / resolved</p>
            <MotionScene concept="portfolio" motion="still" />
            <p className="v-caption v-muted">
              One relationship above independent company boundaries. Each mandate stays inside its
              company.
            </p>
          </div>
        </div>
        <Button variant="secondary" onClick={() => setAnimate(!animate)}>
          {animate ? "Show static resolution" : "Play motion example"}
        </Button>
        <p className="v-caption v-muted">
          12 seconds. Pauses offscreen and in a hidden tab. Reduced motion retains the resolved
          state. This study’s control is not added to the homepage.
        </p>
      </section>
    </article>
  );
}

export function SystemStudy() {
  const [view, setView] = useState<"both" | "dark" | "light">("both");
  return (
    <main id="reference-top" className="ve-system vs-study">
      <header className="vs-intro">
        <p className="v-label">Veep / Internal design reference / 09 October 2026</p>
        <h1 className="v-heading">A system for the work.</h1>
        <p className="v-body-large v-muted">
          Foundation checkpoint: typography, reading, tonal surfaces, people, shared alignment,
          controls, and static relationships in both themes. Examples use current site content.
        </p>
        <div className="vs-actions" role="group" aria-label="Theme comparison">
          {(["both", "dark", "light"] as const).map((option) => (
            <Button
              key={option}
              variant="secondary"
              aria-pressed={view === option}
              onClick={() => setView(option)}
            >
              {option === "both" ? "Both themes" : `${option === "dark" ? "Dark" : "Light"} theme`}
            </Button>
          ))}
          <a className="v-text-link" href="/">
            Review homepage <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="v-caption v-muted">
          Local reference only. Field examples send nothing. Compare paired themes, held interaction
          states, real keyboard focus, and local validation.
        </p>
      </header>
      <div className={`vs-themes ${view === "both" ? "" : "vs-single"}`}>
        {view !== "light" && <ThemeSpecimen theme="dark" />}
        {view !== "dark" && <ThemeSpecimen theme="light" />}
      </div>
    </main>
  );
}
createRoot(document.getElementById("root")!).render(<SystemStudy />);
