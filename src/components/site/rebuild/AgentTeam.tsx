import { MotionScene } from "../motion/MotionScene";

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
          Agent Teams are designed for recurring reporting, research, and follow-through in finance,
          founder office, growth, and operations. The scope brings together agent workflows,
          operator review, and technical oversight.
        </p>
        <p className="ve-agent-terms">
          Blueprint / Build / Run. Systems, data access, review requirements, timing, price, and
          handoff are agreed for the work. Agent Teams are scoped separately from operator
          engagements.
        </p>
      </div>
      <div className="ve-agent-motion-model">
        <p className="ve-kicker">Illustrative finance workflow</p>
        <MotionScene concept="assembly" />
        <p className="ve-small-note">
          Agents prepare the agreed materials. The finance operator checks assumptions and handles
          exceptions. Your team makes business decisions and gives approvals.
        </p>
        <p className="ve-small-note">
          A technical lead owns architecture, permissions, integrations, monitoring, and
          reliability.
        </p>
        <p className="ve-small-note">Illustrative model, not a completed client engagement.</p>
      </div>
    </div>
  );
}
