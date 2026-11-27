const days = [
  {
    day: "Mon",
    agent: "Publishes cash and variance for the leadership review.",
    partner: "Walks the exceptions in the room.",
    client: "Approves the actions that leave the meeting.",
  },
  {
    day: "Tue",
    agent: "Logs decisions and open items from the review.",
    partner: "Assigns an owner to each exception.",
    client: "Confirms priority if the list shifted.",
  },
  {
    day: "Wed",
    agent: "Refreshes actuals and drafts the next variance notes.",
    partner: "Corrects notes that overreach the standard.",
    client: "Approves only if a number must be restated.",
  },
  {
    day: "Thu",
    agent: "Rebuilds the pack against the corrected standard.",
    partner: "Clears the exceptions still open.",
    client: "Reviews items that change a commitment.",
  },
  {
    day: "Fri",
    agent: "Locks the pack for Monday's review.",
    partner: "Signs the standard the pack was built to.",
    client: "Approves what leadership will see.",
  },
] as const;

export function WeeklyCycle() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 border-y border-white/10">
      {days.map((d) => (
        <div
          key={d.day}
          className="border-t border-white/10 py-6 first:border-t-0 md:border-t-0 md:border-l md:px-4 md:first:border-l-0"
        >
          <div className="eyebrow">{d.day}</div>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="mono-label">Agent</dt>
              <dd className="mt-1.5 text-sm text-stone leading-relaxed">{d.agent}</dd>
            </div>
            <div>
              <dt className="mono-label">Partner</dt>
              <dd className="mt-1.5 text-sm text-stone leading-relaxed">{d.partner}</dd>
            </div>
            <div>
              <dt className="mono-label">Client</dt>
              <dd className="mt-1.5 text-sm text-cream/85 leading-relaxed">{d.client}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}
