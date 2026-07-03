import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow, CheckList } from "@/components/site/primitives";
import { FooterCTA } from "@/components/site/FooterCTA";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Veep" },
      { name: "description", content: "Referral programs for accountants, lenders, executive search firms, M&A advisors, and investors." },
      { property: "og:title", content: "Partners — Veep" },
      { property: "og:description", content: "Refer executive capacity when your clients need more than your service can give." },
    ],
  }),
  component: Page,
});

const partners = [
  {
    t: "Accounting & controller firms",
    d: "When your clients outgrow bookkeeping and controller support, Veep provides CFO-level capacity above the accounting layer.",
    items: ["Forecasting and cash planning", "Board and lender reporting", "Acquisition support", "Finance-function buildout"],
  },
  {
    t: "Commercial lenders & private credit",
    d: "Borrowers with weak reporting or no strategic finance leader become finance-ready with a Veep CFO in place.",
    items: ["Lender diligence packs", "Covenant reporting", "13-week cash", "Refinancing prep"],
  },
  {
    t: "Executive search firms",
    d: "Preserve the search. We provide interim coverage while your placement runs — and can convert to permanent if it fits.",
    items: ["Interim CFO / COO / CMO", "Failed-search rescue", "Try-before-hire", "Structured handoff"],
  },
  {
    t: "M&A advisors & QoE",
    d: "Companies preparing for a transaction need finance and operations cleanup. We install operators before your process starts.",
    items: ["Exit-readiness CFO", "Diligence prep", "Working capital analysis", "Post-close integration"],
  },
  {
    t: "PE, family offices, sponsors",
    d: "Skip building a full internal operating-partner bench. Veep is the executive capacity layer across your portfolio.",
    items: ["Portfolio bench", "Emergency coverage", "Capacity audit", "MSA activation"],
  },
  {
    t: "Law firms",
    d: "Corporate, M&A, and emerging-company counsel see transitions early. Veep handles the executive-capacity side.",
    items: ["Restructuring support", "Governance uplift", "Post-transaction ops", "Founder-transition help"],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Refer the operator"
        italic="when advice runs out."
        sub="Veep partners with the trusted advisors who see executive-capacity problems first — accountants, lenders, search firms, M&A advisors, investors, and counsel."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {partners.map((p) => (
            <div key={p.t} className="rounded-3xl border border-border bg-card p-8">
              <Eyebrow>{p.t}</Eyebrow>
              <p className="mt-4 text-stone text-sm leading-relaxed">{p.d}</p>
              <div className="mt-6"><CheckList items={p.items} /></div>
            </div>
          ))}
        </div>
      </Section>

      <FooterCTA headline="Become a Veep referral partner." sub="We share economics with the advisors who send us the right work." />
    </>
  );
}
