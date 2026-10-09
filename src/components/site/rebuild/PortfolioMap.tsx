const mandates = [
  {
    company: "Company A",
    work: "Capital readiness",
    scope: "Models, reporting, investor materials",
    lead: "Finance",
  },
  {
    company: "Company B",
    work: "Commercial expansion",
    scope: "Business case, launch, coordination",
    lead: "Growth",
  },
  {
    company: "Company C",
    work: "Leadership coverage",
    scope: "Continuity, workplan, handoff",
    lead: "Leadership",
  },
];

export function PortfolioMap() {
  return (
    <figure className="ve-portfolio-map">
      <div className="ve-fund-hub">
        <div className="ve-fund-circles">
          <div>Your fund</div>
          <div>Veep</div>
        </div>
        <h3>One master agreement</h3>
        <ul>
          <li>Capacity planning</li>
          <li>Priority operator access</li>
          <li>Quarterly review</li>
        </ul>
      </div>
      <div className="ve-portfolio-mandates">
        {mandates.map((item) => (
          <div className="ve-portfolio-lane" key={item.company}>
            <div className="ve-company-node">
              <span>{item.company}</span>
              <h3>{item.work}</h3>
              <p>{item.scope}</p>
            </div>
            <div className="ve-lane-owner">
              <span aria-hidden="true">↗</span>
              <p>
                {item.lead}
                <strong>Lead owner</strong>
              </p>
            </div>
          </div>
        ))}
        <p className="ve-map-fees">
          Each company: a separate scope, statement of work, and delivery fee.
        </p>
      </div>
      <figcaption>Example company mandates</figcaption>
    </figure>
  );
}
