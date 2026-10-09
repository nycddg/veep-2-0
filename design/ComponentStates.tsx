import { ActionLink, Button, Disclosure, Field } from "../src/components/site/system/Controls";
import "./component-states.css";

const states = ["default", "hover", "focus", "pressed", "disabled"] as const;
const pairs = [
  ["Page", "surface", "text"],
  ["Section", "surface-section", "text-secondary"],
  ["Profile", "surface-panel", "text"],
  ["Audience action", "secondary-container", "on-secondary-container"],
  ["Newsletter", "primary-container", "on-primary-container"],
  ["Impact", "surface-impact", "on-impact"],
] as const;

export function ComponentStates() {
  return (
    <section className="vs-component-states">
      <h3 className="v-title">The complete interaction family.</h3>
      <p className="v-body v-muted">
        These examples use the shared controls and their real state rules. Labeled hover, focus, and
        pressed samples hold those appearances for comparison. Tab through the default examples to
        check actual keyboard focus. State samples stay in this reference; the audience links use
        their real destinations.
      </p>
      {(["primary", "secondary", "quiet"] as const).map((variant) => (
        <div className="vs-state-family" key={variant}>
          <h4 className="v-label">{variant} action</h4>
          <div className="vs-state-grid">
            {states.map((state) => (
              <div className="vs-state-sample" key={state}>
                <span className="v-label">{state}</span>
                <Button variant={variant} disabled={state === "disabled"} data-demo-state={state}>
                  Example
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="vs-state-family">
        <h4 className="v-label">Navigation, text links, and icon controls</h4>
        <div className="vs-state-grid">
          {states
            .filter((state) => state !== "disabled")
            .map((state) => (
              <div className="vs-state-sample" key={state}>
                <span className="v-label">{state}</span>
                <a className="v-nav" href="#reference-top" data-demo-state={state}>
                  Navigation
                </a>
                <a className="v-text-link" href="#reference-top" data-demo-state={state}>
                  Read more
                </a>
                <button
                  className="v-icon-button"
                  aria-label={`${state} menu example`}
                  data-demo-state={state}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </button>
              </div>
            ))}
        </div>
        <div className="vs-actions">
          <a className="v-nav is-active" href="#reference-top" aria-current="page">
            Current page
          </a>
          <Button variant="secondary" aria-pressed="true">
            Selected ✓
          </Button>
          <Button variant="secondary" aria-pressed="true" data-demo-state="focus">
            Selected + focus ✓
          </Button>
        </div>
      </div>
      <div className="vs-state-fields">
        <Field
          label="Default field"
          note="Persistent label and associated hint."
          placeholder="Describe the priority"
        />
        <Field label="Focus field" data-demo-state="focus" defaultValue="A critical priority" />
        <Field label="Error field" error="Add a short description before continuing." />
        <Field label="Disabled field" disabled defaultValue="Unavailable example" />
      </div>
      <Disclosure question="Disclosure example — open and close">
        The label stays visible, the marker changes, and the answer keeps its reading measure.
      </Disclosure>
      <div className="vs-state-family">
        <h4 className="v-label">Surface and foreground pairs</h4>
        <div className="vs-pair-grid">
          {pairs.map(([label, fill, foreground]) => (
            <div
              key={label}
              className="vs-color-pair"
              style={{ background: `var(--v-${fill})`, color: `var(--v-${foreground})` }}
            >
              <strong>{label}</strong>
              <span>Work with a clear owner.</span>
              <small>
                {fill} / {foreground}
              </small>
            </div>
          ))}
          <div className="vs-color-pair vs-signal-pair">
            <strong>Client voice</strong>
            <span>The work gets done.</span>
            <small>signal / ink</small>
          </div>
          <div className="v-paper vs-color-pair">
            <strong>Evidence on paper</strong>
            <span>A complete light palette in either theme.</span>
            <a className="v-text-link" href="#reference-top">
              Read the evidence
            </a>
          </div>
        </div>
      </div>
      <div className="vs-actions" aria-label="Equal audience routes">
        <ActionLink variant="secondary" href="/for-companies">
          For founders
        </ActionLink>
        <ActionLink variant="secondary" href="/for-portfolios">
          For funds
        </ActionLink>
      </div>
    </section>
  );
}
