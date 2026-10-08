export function AgentTeam() {
  return (
    <div className="ve-agent-layout">
      <div>
        <p className="ve-kicker">Agent Teams</p>
        <h2 className="ve-title">
          Recurring work.
          <br /> Human judgment.
        </h2>
        <p className="ve-body">
          For recurring finance, founder office, growth, and operations work, Veep combines operator
          direction with technical oversight. Agents support the agreed recurring work.
        </p>
        <p className="ve-agent-terms">
          Blueprint / Build / Run. Scope systems, data access, timing, review requirements, and
          handoff. Agent Teams are scoped separately.
        </p>
      </div>
      <div className="ve-agent-architecture">
        <div className="ve-agent-loop">
          <span aria-hidden="true">↻</span>
          <h3>
            The recurring
            <br /> work cycle
          </h3>
          <p>
            Finance · Founder office
            <br /> Growth · Operations
          </p>
        </div>
        <div className="ve-agent-roles">
          <div>
            <span className="ve-agent-node" aria-hidden="true" />
            <h3>Operating partner</h3>
            <p>
              Functional judgment,
              <br /> quality, and exceptions
            </p>
          </div>
          <div>
            <span className="ve-agent-node" aria-hidden="true" />
            <h3>Technical lead</h3>
            <p>Architecture, permissions, integrations, monitoring, and reliability</p>
          </div>
          <div>
            <span className="ve-agent-node" aria-hidden="true" />
            <h3>Your team</h3>
            <p>
              Strategic decisions
              <br /> and approvals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
