import { createRoot } from "react-dom/client";
import { useState } from "react";
import { MotionScene } from "../src/components/site/motion/MotionScene";
import { type MotionConcept, stories } from "../src/components/site/motion/stories";
import "./motion-study.css";
const concepts: MotionConcept[] = [
  "desk",
  "mandate",
  "assembly",
  "portfolio",
  "handoff",
  "scope",
  "expertise",
  "first-step",
];
export function Study() {
  const [animate, setAnimate] = useState(false);
  return (
    <main style={{ maxWidth: 1360, margin: "auto", padding: "32px 28px" }}>
      <p style={{ fontSize: 14, color: "var(--rb-muted)" }}>
        Veep / composition review / local workspace
      </p>
      <h1 style={{ fontSize: 44, fontWeight: 500, margin: "16px 0" }}>
        The relationship comes first.
      </h1>
      <p style={{ maxWidth: 850, lineHeight: 1.6 }}>
        Squares carry work. Frames define scope. Coral nodes mark owners; on Home, the coral square
        marks the work selected to advance. Hollow squares represent capability.
      </p>
      <button
        type="button"
        onClick={() => setAnimate(!animate)}
        style={{
          padding: "12px 18px",
          color: "inherit",
          border: "1px solid currentColor",
          margin: "12px 0 28px",
        }}
      >
        {animate ? "Compare static states" : "Play transitions"}
      </button>
      {concepts.map((concept, i) => (
        <section key={concept} style={{ padding: "32px 0", borderTop: "1px solid #343b46" }}>
          <h2 style={{ fontSize: 28, fontWeight: 500 }}>
            {i + 1}. {stories[concept].title}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
              gap: 48,
            }}
          >
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 500 }}>Problem</h3>
              <MotionScene concept={concept} motion="still" frame="problem" />
              <p style={{ lineHeight: 1.5, color: "var(--rb-muted)" }}>
                {stories[concept].problem}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 500 }}>Resolved</h3>
              <MotionScene concept={concept} motion={animate ? "auto" : "still"} />
              <p style={{ lineHeight: 1.5, color: "var(--rb-muted)" }}>
                {stories[concept].resolution}
              </p>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
createRoot(document.getElementById("root")!).render(<Study />);
