import { selectedSpotlights } from "../rebuild/spotlightSelections";
import { ProfileFigure } from "../system/ProfileFigure";

export function OperatorProof() {
  return (
    <>
      <div className="v-section-intro">
        <h2 className="v-heading">
          The people
          <br />
          behind the work.
        </h2>
        <p className="v-body-large">
          Our operators have raised capital, built teams, and led growth. Put that experience to
          work on your next priority.
        </p>
      </div>
      <div className="vh-people-grid">
        {selectedSpotlights("home").map((person) => (
          <ProfileFigure
            key={person.name}
            name={person.name}
            role={person.role}
            credential={person.heroCredential ?? person.evidence}
            photoUrl={person.photoUrl}
            photoPosition={person.photoPosition}
          />
        ))}
      </div>
    </>
  );
}
