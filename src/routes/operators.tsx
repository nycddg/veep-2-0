import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FooterCTA } from "@/components/site/FooterCTA";
import { LogoWall } from "@/components/site/LogoWall";

type Op = { n: string; r: string; co: string; tags: string[] };

const groups: { label: string; ops: Op[] }[] = [
  {
    label: "Finance",
    ops: [
      { n: "Jian Yang", r: "Chief Financial Officer", co: "Industrious · Opencare · UGE · Avenir", tags: ["Real Estate", "Tech", "Energy"] },
      { n: "Vanessa Kwan", r: "Chief Financial Officer", co: "BDG · Stuart Weitzman · Goldman Sachs", tags: ["Media", "Consumer", "Retail"] },
      { n: "Elaine Bogart", r: "Chief Financial Officer", co: "Nifty's · Mojix · 4Wall · Fullscreen", tags: ["Web3", "Media", "Retail"] },
      { n: "Marcus Reeve", r: "Chief Financial Officer", co: "Warby Parker · Casper · Rent the Runway", tags: ["DTC", "Consumer", "Retail"] },
    ],
  },
  {
    label: "Operations",
    ops: [
      { n: "Laura Merling", r: "Chief Operating Officer", co: "Google · Ford · AT&T · Arvest Bank", tags: ["Tech", "Mobility", "Banking"] },
      { n: "Andrew Silver", r: "Chief Operating Officer", co: "Huge · Iris Worldwide · Omnigon", tags: ["Pro. Services", "Media", "Sport"] },
      { n: "Gary Kilponen", r: "Chief Supply Chain Officer", co: "Celeros · Sulzer · Cameron · Deloitte", tags: ["Energy", "Industrials", "Manufacture"] },
      { n: "Priya Anand", r: "Chief Operating Officer", co: "Instacart · DoorDash · Uber", tags: ["Marketplace", "Logistics", "Tech"] },
    ],
  },
  {
    label: "Revenue & Marketing",
    ops: [
      { n: "Kostja Mirkovic", r: "Chief Revenue Officer", co: "LinkedIn · Modern Health · Credit Suisse", tags: ["B2B SaaS", "AI", "Fintech"] },
      { n: "Chrysi Philalithes", r: "Chief Marketing Officer", co: "(RED) · Maximum Effort · Espotting", tags: ["Media", "Impact", "Consumer"] },
      { n: "Erika Velazquez Alpern", r: "Chief Marketing Officer", co: "Morning Brew · NewsCred · AOL", tags: ["New Media", "Consumer", "GenAI"] },
      { n: "Daniel Osei", r: "Chief Revenue Officer", co: "Stripe · Segment · Twilio", tags: ["B2B SaaS", "Fintech", "Dev Tools"] },
    ],
  },
  {
    label: "Product, Tech & People",
    ops: [
      { n: "Jorge Lopez", r: "Chief Technology Officer", co: "Refinery29 · Betaworks · Etsy", tags: ["New Media", "Web3", "E-Comm"] },
      { n: "Munawar Ahmed", r: "Chief Experience Officer", co: "Oliver Wyman · Fjord · Coinbase", tags: ["Tech", "Finance", "Retail"] },
      { n: "Victoria Kasumu", r: "Chief People Officer", co: "Maisonette · Pager Health · Zocdoc", tags: ["Tech / SaaS", "Healthtech"] },
    ],
  },
];

const qualifications: { t: string; d: string }[] = [
  { t: "Senior leadership pedigree", d: "Prior experience as a founder or in a C-suite, GM, or SVP seat." },
  { t: "Appetite for the work", d: "A genuine desire to operate on interim, fractional, or advisory engagements — not a bridge between full-time roles." },
  { t: "Track record of outcomes", d: "A proven history of driving measurable results in fast-paced, high-stakes environments." },
  { t: "References and standards", d: "Strong, checkable references and a visible commitment to excellence in how they work." },
  { t: "Fractional experience — a plus", d: "Prior fractional or advisory work is helpful, but not required. Judgment and ownership are." },
];

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((s) => s[0]).join("");
}

export const Route = createFileRoute("/operators")({
  head: () => ({
    meta: [
      { title: "The Operators — Curated Bench of Fractional & Interim Execs | Veep" },
      { name: "description", content: "Not a directory. A curated, invite-only bench of senior CFOs, COOs, CROs, CMOs, CTOs, and CPOs — vetted for judgment, speed, and cross-functional ownership." },
      { property: "og:title", content: "The Operators — Veep" },
      { property: "og:description", content: "Curated, not searchable. Every match is hand-run by a Veep partner." },
      { property: "og:url", content: "/operators" },
    ],
    links: [{ rel: "canonical", href: "/operators" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="The operators"
        title="Curated bench."
        italic="Not a directory."
        sub="You won't browse profiles or filter by hourly rate. Every match is hand-run by a Veep partner against the specific outcome — pattern-matched, not keyword-searched."
        secondaryLabel="See the proof"
        secondaryTo="/proof"
      />

      <LogoWall />

      {/* Grouped operator sample */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              A sample of the bench
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
              Fifteen operators.{" "}
              <span className="italic text-stone">And more.</span>
            </h2>
            <p className="mt-6 text-stone text-lg leading-relaxed">
              Our network spans 150+ senior operators across finance, ops, revenue,
              product, tech, and people. The fifteen below are a slice of the executives
              we actively spotlight — full profiles, references, and availability are
              shared on the discovery call, once we know which outcome needs an owner.
            </p>
          </div>
          <div className="space-y-14">
            {groups.map((g) => (
              <div key={g.label}>
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-soft mb-6">
                  {g.label}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {g.ops.map((o) => (
                    <div key={o.n} className="glass-card rounded-3xl p-6">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-white/5 ring-1 ring-white/20 grid place-items-center text-cream text-sm">
                          {initials(o.n)}
                        </div>
                        <div>
                          <div className="text-cream tracking-tight leading-tight font-medium">{o.n}</div>
                          <div className="text-[10px] text-accent font-medium tracking-[0.15em] uppercase mt-0.5">
                            {o.r}
                          </div>
                        </div>
                      </div>
                      <p className="mt-5 text-xs text-stone-soft leading-relaxed">{o.co}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {o.tags.map((t) => (
                          <span key={t} className="text-[10px] px-2.5 py-1 bg-white/5 rounded-full border border-white/10 text-stone">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
            How we vet
          </div>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-cream tracking-tight leading-[1.05]">
            Invite-only.{" "}
            <span className="italic text-stone">Every operator has run the seat.</span>
          </h2>
          <p className="mt-6 text-stone text-lg leading-relaxed">
            Every Veep operator has held the C-suite role we deploy them into,
            passed a partner-led judgment interview, and shipped at least one
            prior fractional or interim engagement. We add roughly one operator
            per month. There is no self-serve intake.
          </p>
        </div>
      </section>

      <FooterCTA
        headline="Which outcome needs an operator?"
        sub="Tell us the moment. We'll match one — and share the full profile before the second call."
      />
    </>
  );
}
