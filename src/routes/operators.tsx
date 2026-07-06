import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/operators")({
  head: () => ({
    meta: [
      { title: "The Veep Roster | Senior Fractional & Interim Operators" },
      { name: "description", content: "Meet the Veep roster — 25+ senior CFOs, COOs, CROs, CMOs, CTOs, and Chiefs of People who have led at Google, LinkedIn, Meta, LVMH, Goldman Sachs, Morning Brew, Coinbase, and more." },
      { property: "og:title", content: "The Veep Roster — Senior Operators" },
      { property: "og:description", content: "$1B+ raised. 15+ exits. $2B+ saved. 30M users served. One all-star roster." },
      { property: "og:url", content: "/operators" },
    ],
    links: [{ rel: "canonical", href: "/operators" }],
  }),
  component: Page,
});

type Op = { n: string; r: string; co: string; tags: string[] };

const operators: Op[] = [
  { n: "Jian Yang", r: "Chief Financial Officer", co: "Industrious · Opencare · UGE · Avenir", tags: ["Real Estate", "Tech", "Energy", "Finance", "Healthcare"] },
  { n: "Miguel Ferreya de Bone", r: "Chief Financial Officer", co: "Taste of Belgium · Farnsworth Cannabis", tags: ["F&B", "Cannabis", "Finance"] },
  { n: "Elaine Bogart", r: "Chief Financial Officer", co: "Nifty's · Mojix · 4Wall · Fullscreen", tags: ["Tech", "Retail / DTC", "Web3", "Media", "Entmt."] },
  { n: "Vanessa Kwan", r: "Chief Financial Officer", co: "BDG · Stuart Weitzman · Goldman Sachs", tags: ["Media", "Consumer", "Retail", "Finance", "Luxury"] },
  { n: "Stephanie Lung", r: "Chief Financial Officer", co: "Ever/Body · Studs · Y7 · Saks Fifth Ave.", tags: ["Retail / DTC", "Wellness", "Beauty", "E-comm", "Luxury"] },
  { n: "Yong Kang", r: "Chief Financial Officer", co: "Pursuit · Fundopolis · Homer Logistics", tags: ["Tech", "Education", "Finance", "Impact", "Venture"] },
  { n: "Victoria Kasumu", r: "Chief People Officer", co: "Maisonette · Pager Health · Zocdoc", tags: ["Tech / SaaS", "Hospitality", "Retail / DTC", "Healthtech"] },
  { n: "Melanie Kingdon", r: "Chief People Officer", co: "Omnicom · Sparks&Honey · Best Buy", tags: ["Pro. Services", "Marketing", "B2B Services", "Consumer", "Retail"] },
  { n: "Jessica Davila", r: "Chief People Officer", co: "TaskRabbit · Pursuit · Bread · iCrossing", tags: ["Fintech", "Marketplaces", "MarTech", "SaaS", "HRtech"] },
  { n: "Sean Park", r: "Chief People Officer", co: "Activant Capital · OnPoint HR · EY", tags: ["Venture", "Tech", "Finance", "Consumer"] },
  { n: "Jennifer Kasper", r: "Chief Customer Officer", co: "Meta · LVMH · MediaLink · Macy's", tags: ["Retail / DTC", "Fashion", "Beauty", "Tech", "Digital Media"] },
  { n: "Chrysi Philalithes", r: "Chief Marketing Officer", co: "(RED) · Maximum Effort · Espotting", tags: ["Media", "Entmt.", "Impact", "Digital Media", "Consumer"] },
  { n: "Erika Velazquez Alpern", r: "Chief Marketing Officer", co: "Morning Brew · NewsCred · AOL", tags: ["New Media", "Consumer", "Tech / Web3", "Retail", "GenAI"] },
  { n: "Alasdair Lloyd-Jones", r: "Chief Marketing Officer", co: "Pentad · SET (WPP) · David Yurman", tags: ["Tech", "Consumer", "Sport", "Finance", "Auto"] },
  { n: "Christine Miranda Barnekow", r: "Chief Marketing Officer", co: "Betty Booze · Vita Coco · Diageo · JWT", tags: ["CPG", "E-Comm", "DTC", "Marketing", "Alcohol"] },
  { n: "Stephanie Shore", r: "Chief Marketing Officer", co: "MOO.com · Zipcar · Boston.com", tags: ["CPG", "Alcohol", "Mobility", "E-comm", "Media"] },
  { n: "Dave Garcia", r: "Chief Business Officer", co: "New Stand · Verizon · Frog · CO:", tags: ["Tech / Telco", "B2B Services", "Pro. Services", "Retail", "Consumer"] },
  { n: "Steve Reed", r: "Chief Revenue Officer", co: "Team Liquid · IGN · CBS · Heavy.com", tags: ["Sports", "Gaming", "New Media", "MarTech", "Creator"] },
  { n: "Kostja Mirkovic", r: "Chief Revenue Officer", co: "LinkedIn · Modern Health · Credit Suisse", tags: ["B2B SaaS", "AI", "Healthtech", "Fintech", "Marketplaces"] },
  { n: "Mark Newhouse", r: "Chief Strategy Officer", co: "SYPartners · WhatIf · American Express", tags: ["Tech", "Finance", "Consumer", "Pro. Services", "CPG"] },
  { n: "Munawar Ahmed", r: "Chief Experience Officer", co: "Oliver Wyman · Fjord · Coinbase", tags: ["Tech", "Consumer", "Logistics", "Finance", "Retail"] },
  { n: "Jorge Lopez", r: "Chief Technology Officer", co: "Refinery29 · Betaworks · Etsy", tags: ["New Media", "Web3", "E-Comm", "Creator", "DTC"] },
  { n: "Laura Merling", r: "Chief Operating Officer", co: "Google · Ford · AT&T · Arvest Bank", tags: ["Tech", "Mobility", "Telco", "Aerospace", "Banking"] },
  { n: "Gary Kilponen", r: "Chief Supply Chain Officer", co: "Celeros · Sulzer · Cameron · Deloitte", tags: ["Energy", "Industrials", "Manufacture", "Defense", "Oil & Gas"] },
  { n: "Andrew Silver", r: "Chief Operating Officer", co: "Huge · Iris Worldwide · Omnigon Comms", tags: ["Pro. Services", "Media", "Sport", "Consumer", "Tech"] },
  { n: "Bob Gower", r: "Chief Operating Officer", co: "ChangeForce · Undercurrent", tags: ["Enterprise", "Finance", "Healthcare", "Automotive", "B2B SaaS"] },
];

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((s) => s[0]).join("");
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="The roster"
        title="$1B+ raised. 15+ exits. 30M users served."
        italic="One all-star roster."
        sub="Meet the operators behind the outcomes. Not a talent pool — an invite-only bench of senior CFOs, COOs, CROs, CMOs, CTOs, and Chiefs of People, each vetted for judgment, adaptability, and the ability to execute fast without friction."
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operators.map((o) => (
            <div key={o.n} className="rounded-3xl border border-border bg-card p-6 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-forest/15 grid place-items-center text-forest text-sm tracking-tight font-medium">
                  {initials(o.n)}
                </div>
                <div>
                  <div className="text-lg text-cream tracking-tight leading-tight">{o.n}</div>
                  <div className="text-xs text-stone">{o.r}</div>
                </div>
              </div>
              <p className="mt-5 font-mono text-[11px] tracking-widest uppercase text-stone-soft leading-relaxed">
                {o.co}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {o.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary text-cream text-[11px] px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs font-mono uppercase tracking-widest text-stone-soft">
          / Full profiles, references, and availability shared on the discovery call.
        </p>
      </Section>

      <Section tone="muted">
        <div className="max-w-2xl">
          <Eyebrow>Are you an operator?</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight text-cream">Join the network.</h2>
          <p className="mt-4 text-stone">
            We work with senior CFOs, COOs, CROs, CMOs, CTOs, and Chiefs of People who
            want to run pivotal engagements — not fill hours.
          </p>
        </div>
      </Section>

      <FooterCTA headline="Every engagement starts with the right operator." />
    </>
  );
}
