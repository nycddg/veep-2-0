import { useEffect, useId, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

const work = [
  {
    id: "capital-readiness",
    title: "Capital readiness",
    situation: "A raise, financing, or transaction is approaching.",
    detail:
      "Build the financial model, reporting, and materials for investor, lender, or buyer scrutiny.",
    outcome: "Financials the business can stand behind.",
    papers: ["Financial model", "Reporting", "Investor materials"],
  },
  {
    id: "revenue-repeatability",
    title: "Revenue repeatability",
    situation: "Growth still depends on the founder.",
    detail:
      "Clarify customer focus, positioning, and pricing. Establish pipeline management and a sales cadence.",
    outcome: "Growth the team can run beyond the founder.",
    papers: ["Customer focus", "Pipeline", "Sales cadence"],
  },
  {
    id: "commercial-expansion",
    title: "Commercial expansion",
    situation: "The opportunity is clear. The operating plan is missing.",
    detail:
      "Build the business case and operating plan for a new market, product, offer, or channel. Lead the launch and coordinate the functions it needs.",
    outcome: "A sound expansion decision and a plan to act on.",
    papers: ["Business case", "Operating plan", "Launch plan"],
  },
  {
    id: "leadership",
    title: "Leadership gaps",
    situation: "A critical function needs someone in charge.",
    detail:
      "Put a senior operator in charge while the permanent role takes shape. Maintain continuity and prepare the handoff.",
    outcome: "Critical work keeps moving through the transition.",
    papers: ["Workplan", "Team cadence", "Handoff"],
  },
];

export function WorkMandate() {
  const [active, setActive] = useState(0);
  const hash = useRouterState({ select: (state) => state.location.hash });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const groupId = useId();
  useEffect(() => {
    const match = work.findIndex((item) => item.id === hash.replace(/^#/, ""));
    if (match !== -1) setActive(match);
  }, [hash]);
  return (
    <div className="ve-work-studio" id="work">
      <div className="ve-work-selector">
        <h2>
          Which priority
          <br /> needs an owner?
        </h2>
        <div role="tablist" aria-label="Explore company priorities" className="ve-work-tabs">
          {work.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${groupId}-${index}`}
              aria-controls={item.id}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                let next = active;
                if (event.key === "ArrowDown" || event.key === "ArrowRight")
                  next = (active + 1) % work.length;
                else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
                  next = (active + work.length - 1) % work.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = work.length - 1;
                else return;
                event.preventDefault();
                setActive(next);
                tabRefs.current[next]?.focus();
              }}
            >
              <span>{item.title}</span>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </div>
      <div className="ve-mandate-pages">
        {work.map((item, index) => (
          <div
            key={item.id}
            id={item.id}
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`${groupId}-${index}`}
            hidden={active !== index}
            className="ve-mandate-panel"
          >
            <p className="ve-kicker">Example mandate</p>
            <h3>{item.situation}</h3>
            <p className="ve-mandate-detail">{item.detail}</p>
            <p className="ve-mandate-outcome">
              <span>The outcome</span>
              {item.outcome}
            </p>
            <div className="ve-paper-stack" aria-label="Work products">
              {item.papers.map((paper, i) => (
                <div key={paper} className={`ve-work-paper ve-work-paper-${i}`}>
                  <span className="ve-paper-fold" aria-hidden="true" />
                  <span>{paper}</span>
                  <div className="ve-paper-lines" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              ))}
            </div>
            <div className="ve-mandate-owner">
              <span className="ve-signal" aria-hidden="true" />
              <p>
                <strong>Lead operating partner</strong>
                <span>Owns execution against the agreed scope</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
