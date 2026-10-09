export function OwnershipDiagram() {
  return (
    <div className="vh-ownership">
      <div className="vh-unowned">
        <h3>Critical work. No clear owner.</h3>
        <p className="vh-work-examples">
          Fundraise <span>·</span> GTM reset <span>·</span> Operating gap
        </p>
        <div className="vh-dead-ends">
          <div>
            <h4>Your team</h4>
            <p>At capacity. The priority keeps slipping.</p>
          </div>
          <div>
            <h4>A permanent hire</h4>
            <p>The search is running. The work still needs an owner.</p>
          </div>
          <div>
            <h4>Outside advice</h4>
            <p>The direction is clear. Execution still lands on your team.</p>
          </div>
        </div>
        <div className="vh-ceo-desk">
          <span aria-hidden="true" className="vh-signal" />
          <p>
            The CEO’s desk<strong>Every unresolved decision comes back to you.</strong>
          </p>
        </div>
      </div>
      <div className="vh-ownership-turn" aria-hidden="true">
        →
      </div>
      <div className="vh-owned">
        <p className="v-label">With Veep</p>
        <h3>
          The work gets
          <br />
          an owner.
        </h3>
        <ol>
          <li>
            <span>01</span>
            <div>
              <h4>Scope</h4>
              <p>A clear scope, outcome, and responsibilities.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h4>Assemble</h4>
              <p>A lead operating partner and the support the work needs.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h4>Own</h4>
              <p>A lead operating partner runs execution. Veep stays accountable.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h4>Deliver</h4>
              <p>Complete the agreed work and hand off, or agree the next scope.</p>
            </div>
          </li>
        </ol>
        <p className="vh-owned-boundary">
          You retain strategic decisions and approvals. Advisory provides senior guidance; your team
          owns execution.
        </p>
      </div>
    </div>
  );
}
