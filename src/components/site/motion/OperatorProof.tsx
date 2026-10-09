import { selectedSpotlights } from "../rebuild/spotlightSelections";

export function OperatorProof() {
  return (
    <div className="ve-motion-people">
      <div className="ve-section-opening">
        <h2 className="ve-title">
          The people
          <br />
          behind the work.
        </h2>
        <p className="ve-body">
          Selected operating partner experience. These are career credentials, including work before
          Veep, not current availability.
        </p>
      </div>
      <div className="ve-motion-proof-grid">
        {selectedSpotlights("home").map((person) => (
          <figure key={person.name}>
            <img
              src={person.photoUrl}
              alt=""
              width={1152}
              height={1440}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: person.photoPosition ?? "center 65%" }}
            />
            <figcaption>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <p>{person.heroCredential}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
