import { useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { spotlightOperators } from "@/lib/spotlight-operators";

const order = [0, 1, 3, 7, 6, 8, 2, 4, 5, 9, 10, 11];

/** A human roster, controlled by the reader rather than autoplay. */
export function OperatorDeck() {
  const [start, setStart] = useState(0);
  const [selected, setSelected] = useState(0);
  const detailId = useId();
  const cardsRef = useRef<HTMLDivElement>(null);
  const people = Array.from(
    { length: 4 },
    (_, i) => spotlightOperators[order[(start + i) % order.length]],
  );
  const person = people[selected];
  function move(direction: number) {
    setStart((value) => (value + direction * 4 + order.length) % order.length);
    setSelected(0);
    cardsRef.current?.scrollTo({ left: 0, behavior: "instant" });
  }
  return (
    <div className="ve-deck">
      <div ref={cardsRef} className="ve-deck-cards" aria-label="Selected operating partners">
        {people.map((op, i) => (
          <button
            type="button"
            key={op.name}
            className={`ve-profile ve-profile-${i} ${selected === i ? "is-selected" : ""}`}
            aria-label={`Show ${op.name}'s experience`}
            aria-pressed={selected === i}
            aria-controls={detailId}
            onClick={() => setSelected(i)}
          >
            <span className="ve-profile-discipline">
              {op.role.replace(" Operating Partner", "")}
            </span>
            <img
              src={op.photoUrl}
              alt=""
              width="330"
              height="410"
              loading={start === 0 ? "eager" : "lazy"}
              decoding="async"
              style={{ objectPosition: op.photoPosition ?? "center 18%" }}
            />
            <span className="ve-profile-name">{op.name}</span>
          </button>
        ))}
      </div>
      <div className="ve-deck-caption">
        <div id={detailId} aria-live="polite" aria-atomic="true">
          <p className="ve-deck-hint">Selected network experience</p>
          <p className="ve-deck-person">
            {person.name} <span>{person.role}</span>
          </p>
          <p className="ve-deck-prior">Prior experience: {person.priorCompanies.join(" / ")}</p>
        </div>
        <div className="ve-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous four operators">
            <ArrowLeft size={20} />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next four operators">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
