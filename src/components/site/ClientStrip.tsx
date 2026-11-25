const operatorsBuilt = [
  "Industrious",
  "Morning Brew",
  "Zocdoc",
  "Etsy",
  "Polestar",
  "Maisonette",
  "Zipcar",
  "Ford's Gin",
  "Moo.com",
  "Betaworks",
  "Heavy.com",
  "IGN",
  "TaskRabbit",
  "Refinery29",
  "New Stand",
  "American Express",
  "Verizon",
  "Citi",
  "Opencare",
  "UGE",
  "frog design",
  "Deloitte",
  "?What If! Innovation",
  "AOL",
  "The New Republic",
  "NewsCred",
  "Facebook",
  "LVMH",
  "Macy's",
  "Accenture",
  "David Yurman",
  "MediaLink",
  "David Zwirner",
  "Gansevoort Hotel Group",
  "WeightWatchers",
  "Verve Mobile",
  "Big Spaceship",
  "Pursuit",
  "Google",
  "Nifty's",
];

const tickerChips = [...operatorsBuilt, "and more"];

/**
 * ClientStrip — operator work-history ticker. Desktop-only, full width
 * under Operator career impact. Uses the existing .marquee utility.
 */
export function ClientStrip() {
  return (
    <div className="hidden md:block mt-10 md:mt-12 relative overflow-hidden">
      <div
        className="flex marquee whitespace-nowrap gap-2 items-center"
        style={{ animationDuration: "55s" }}
      >
        {[...tickerChips, ...tickerChips].map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="rounded-[6px] border border-white/10 bg-background px-3.5 py-1.5 text-sm text-cream whitespace-nowrap shrink-0"
          >
            {c}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface-raised to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface-raised to-transparent" />
    </div>
  );
}
