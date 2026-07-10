const logos = [
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
  "AKQA",
  "Mayo Clinic",
  "co:collective",
  "Deloitte",
  "sparks&honey",
  "?What If! Innovation",
  "SYPartners",
  "Nutrisystem",
  "AOL",
  "The New Republic",
  "NewsCred",
  "Facebook",
  "LVMH",
  "Macy's",
  "HUGE",
  "Accenture",
  "Oliver Wyman",
  "David Yurman",
  "MediaLink",
  "David Zwirner",
  "Gansevoort Hotel Group",
  "WeightWatchers",
  "Verve Mobile",
  "Big Spaceship",
  "Pursuit",
  "Fundopolis",
  "Homer Logistics",
  "Arvest Bank",
  "Google",
  "Ford Motor Company",
  "AT&T",
  "Nifty's",
  "Mojix",
  "4Wall Entertainment",
];


export function LogoWall() {
  return (
    <section className="border-y border-white/10 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent text-center">
          operators who built the companies you admire
        </div>
        <div className="mt-7 relative overflow-hidden">
          <div className="flex marquee whitespace-nowrap gap-16 items-center">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={`${l}-${i}`}
                className="text-lg md:text-xl tracking-tight text-cream/75 shrink-0"
              >
                {l}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
