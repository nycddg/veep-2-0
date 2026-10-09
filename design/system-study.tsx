import { createRoot } from "react-dom/client";
import { useState, type CSSProperties } from "react";
import { ActionLink, Button, Disclosure, Field } from "../src/components/site/system/Controls";
import { ProfileFigure } from "../src/components/site/system/ProfileFigure";
import { MotionScene } from "../src/components/site/motion/MotionScene";
import { selectedSpotlights } from "../src/components/site/rebuild/spotlightSelections";
import "../src/styles.css";
import "./system-study.css";

const person = selectedSpotlights("home")[0];
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
          owned<span className="v-signal">.</span>
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
        <p className="vs-type-display">A job for Veep.</p>
        <p className="v-lead">The priority that keeps slipping.</p>
        <p className="v-body v-muted">
          IBM Plex Sans carries the voice. IBM Plex Mono provides the quieter labels, numbers, and
          prices. Weight stays at 400 or 500.
        </p>
        <p className="v-label">Scope / Assemble / Own / Deliver</p>
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
          Hover, press, and Tab through the controls. Selected state has a border and a check, as
          well as a tonal fill.
        </p>
      </section>
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
            <p className="v-label">Surface / 15px</p>
          </div>
          <div>
            <i className="vs-node" />
            <p className="v-label">Center / circle</p>
          </div>
        </div>
        <div className="vs-tonal">
          <p className="v-body">
            Tonal change groups related information. A border defines a boundary. Shadows are
            reserved for an actual overlay.
          </p>
        </div>
      </section>
      <section>
        <h3 className="v-title">The person and the evidence.</h3>
        <div className="vs-profile">
          <ProfileFigure
            name={person.name}
            role={person.role}
            credential={person.heroCredential ?? person.evidence}
            photoUrl={person.photoUrl}
            photoPosition={person.photoPosition}
          />
        </div>
        <p className="v-caption v-muted">
          Selected career experience, including work before Veep. No availability implication.
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
        <Button variant="secondary" onClick={() => setAnimate(!animate)}>
          {animate ? "Show static resolution" : "Play motion example"}
        </Button>
        <p className="v-caption v-muted">
          5.4 seconds. Pauses offscreen and in a hidden tab. Reduced motion retains the resolved
          state. This study’s control is not added to the homepage.
        </p>
      </section>
    </article>
  );
}

export function SystemStudy() {
  const [view, setView] = useState<"both" | "dark" | "light">("both");
  return (
    <main className="ve-system vs-study">
      <header className="vs-intro">
        <p className="v-label">Veep / Internal design reference / 09 October 2026</p>
        <h1 className="v-heading">A system for the work.</h1>
        <p className="v-body-large v-muted">
          Working components, shared tokens, and two authored themes. This local study is separate
          from the public site.
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
      </header>
      <div className={`vs-themes ${view === "both" ? "" : "vs-single"}`}>
        {view !== "light" && <ThemeSpecimen theme="dark" />}
        {view !== "dark" && <ThemeSpecimen theme="light" />}
      </div>
    </main>
  );
}
createRoot(document.getElementById("root")!).render(<SystemStudy />);
