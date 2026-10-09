import { selectedSpotlights } from "../rebuild/spotlightSelections";
import { ProfileFigure } from "../system/ProfileFigure";
import { useSectionMotion } from "../system/useSectionMotion";

export function OperatorProof() {
  const sequence = useSectionMotion();
  return (
    <div
      ref={sequence.ref}
      className="v-sequence"
      data-sequence="portraits"
      data-motion={sequence.state}
    >
      <div className="v-section-intro">
        <h2 className="v-heading">
          The people
          <br />
          behind the work.
        </h2>
        <p className="v-body-large">
          Our operating partners have raised capital, built teams, and led growth. Put that
          experience to work on your next priority.
        </p>
      </div>
      <div className="vh-people-grid">
        {selectedSpotlights("home").map((person) => (
          <ProfileFigure
            key={person.name}
            name={person.name}
            role={person.role}
            priorCompanies={person.priorCompanies}
            credential={person.heroCredential ?? person.evidence}
            photoUrl={person.photoUrl}
            photoPosition={person.photoPosition}
          />
        ))}
      </div>
    </div>
  );
}
