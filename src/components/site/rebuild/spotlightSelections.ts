import { spotlightOperators } from "@/lib/spotlight-operators";

export type SpotlightAudience = "home" | "companies" | "funds";

type EditorialSelection = {
  name: string;
  context: string;
  evidence: string;
  heroCredential?: string;
  heroCrop?: string;
};

// Editorial excerpts from spotlight-operators.ts. These are career credentials,
// including work before Veep, not availability or Veep engagement results.
const selections: Record<SpotlightAudience, EditorialSelection[]> = {
  home: [
    {
      name: "Jian Yang",
      context: "Finance for growth",
      heroCredential: "$140M+ equity raised at Industrious",
      heroCrop: "scale(1.14) translateY(-2%)",
      evidence:
        "At Industrious, secured $140M+ in equity funding and rebuilt finance for rapid scale.",
    },
    {
      name: "Erika Velazquez",
      context: "Products & audiences",
      heroCredential: "Built an ad product at Morning Brew",
      heroCrop: "scale(1.1) translateY(-2%)",
      evidence:
        "At Morning Brew, developed a newsletter ad product that doubled the average click-through rate.",
    },
    {
      name: "Victoria Kasumu",
      context: "People through change",
      heroCredential: "50+ hires in 90 days at David Zwirner",
      heroCrop: "scale(1.18) translateY(-3%)",
      evidence:
        "At David Zwirner, hired 50+ employees in 90 days. Prior experience includes Zocdoc and Pager Health.",
    },
    {
      name: "Jennifer Kasper",
      context: "Growth across brands",
      heroCredential: "Media strategy across 75+ LVMH Maisons",
      heroCrop: "scale(1.12) translateY(-2%)",
      evidence:
        "At LVMH, unified media strategy across 75+ Maisons and built cross-brand agency models.",
    },
  ],
  companies: [
    {
      name: "Jian Yang",
      context: "Capital readiness",
      evidence:
        "Secured $140M+ in equity funding at Industrious and restructured finance for rapid scale.",
    },
    {
      name: "Erika Velazquez",
      context: "Commercial execution",
      evidence:
        "Developed a new newsletter ad product at Morning Brew that doubled the average click-through rate.",
    },
    {
      name: "Jessica Davila",
      context: "Scaling the team",
      evidence:
        "At TaskRabbit, rebuilt people strategy while the company grew from 250 to 500 employees across nine countries.",
    },
  ],
  funds: [
    {
      name: "Alan Poussaint",
      context: "From investment to operations",
      evidence:
        "Former Principal at Lincolnshire Management and CFO of a Rocket Internet portfolio company.",
    },
    {
      name: "Sean Park",
      context: "Portfolio talent & leadership",
      evidence:
        "As CPO at Activant Capital, led portfolio talent strategy and served as interim CHRO on a portfolio path to a $2B exit.",
    },
    {
      name: "Elaine Bogart",
      context: "Turnaround & transaction",
      evidence:
        "Led a financial turnaround at Mojix and completed its international sale. Prior experience includes Fullscreen and Nifty’s.",
    },
    {
      name: "Alasdair Lloyd-Jones",
      context: "Growth through exit",
      evidence: "As CEO of SET Creative, grew revenue 5× and led the firm through its sale to WPP.",
    },
  ],
};

export function selectedSpotlights(audience: SpotlightAudience) {
  return selections[audience].map((selection) => {
    const operator = spotlightOperators.find((person) => person.name === selection.name);
    if (!operator) throw new Error(`Missing spotlight source: ${selection.name}`);
    return { ...operator, ...selection };
  });
}
