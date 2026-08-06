import { rel } from "./dates";
import type {
  Agreement,
  Assignment,
  Availability,
  Invitation,
  OperatorProfile,
  Payout,
} from "./types";
import headshot from "@/assets/operator-headshot.png.asset.json";

/** Anonymized network rows — industry + situation only, never a company name. */
export const networkLeads = [
  { id: "nl-1", stage: "Scoping", role: "Interim CFO", func: "Finance", industry: "Series B logistics", engagement: "Operator", term: "6 months", blurb: "Finance pack and cash rhythm unowned after controller exit." },
  { id: "nl-2", stage: "Matching", role: "VP Operations", func: "Operations", industry: "Consumer manufacturing", engagement: "Operator", term: "9 months", blurb: "Second plant ramping with no line of sight on throughput or scrap." },
  { id: "nl-3", stage: "Proposal", role: "Head of RevOps", func: "Revenue", industry: "Vertical SaaS", engagement: "Sprint", term: "12 weeks", blurb: "Pipeline reporting contradicts the board deck two quarters running." },
  { id: "nl-4", stage: "Closing", role: "Supply Chain Lead", func: "Supply chain", industry: "DTC food", engagement: "Operator", term: "6 months", blurb: "Co-man transition slipping; service levels below contract." },
  { id: "nl-5", stage: "Scoping", role: "Chief of Staff", func: "General management", industry: "Healthcare services", engagement: "Advisory", term: "3 months", blurb: "Founder pulled into every decision ahead of a multi-site rollout." },
  { id: "nl-6", stage: "Matching", role: "Controller", func: "Finance", industry: "Industrial distribution", engagement: "Operator", term: "4 months", blurb: "Month-end close running 21 days with no audit trail." },
  { id: "nl-7", stage: "Proposal", role: "Head of People", func: "People", industry: "Series A fintech", engagement: "Sprint", term: "8 weeks", blurb: "Headcount doubling with no leveling, comp bands, or onboarding." },
  { id: "nl-8", stage: "Matching", role: "Interim CTO", func: "Technology", industry: "Marketplace", engagement: "Operator", term: "6 months", blurb: "Platform rewrite stalled after the technical founder stepped back." },
  { id: "nl-9", stage: "Scoping", role: "Integration Lead", func: "Corp dev", industry: "PE-backed services", engagement: "Pod", term: "5 months", blurb: "Two bolt-ons closed; back office still running on three systems." },
  { id: "nl-10", stage: "Closing", role: "Demand Planning Lead", func: "Supply chain", industry: "Specialty retail", engagement: "Sprint", term: "10 weeks", blurb: "Inventory turns falling while stockouts rise in the top ten SKUs." },
];

export const networkWins = [
  { id: "nw-1", role: "Interim CFO", engagement: "Operator", length: "6 months", industry: "B2B logistics", blurb: "Close cut from 19 to 6 days; lender reporting back on schedule.", closedOn: rel(-6) },
  { id: "nw-2", role: "VP Supply Chain", engagement: "Sprint", length: "12 weeks", industry: "DTC beverage", blurb: "Co-man contract renegotiated; landed cost down double digits.", closedOn: rel(-17) },
  { id: "nw-3", role: "Head of RevOps", engagement: "Operator", length: "4 months", industry: "Vertical SaaS", blurb: "One source of pipeline truth ahead of the Series C raise.", closedOn: rel(-31) },
  { id: "nw-4", role: "Chief of Staff", engagement: "Advisory", length: "3 months", industry: "Healthcare services", blurb: "Operating cadence installed across four clinics.", closedOn: rel(-48) },
];

export const seedInvitations: Invitation[] = [
  {
    id: "inv-1",
    title: "Own the finance function through the next raise",
    company: "Northwind Manufacturing",
    commitment: "3 days / week",
    location: "Remote · US Central overlap",
    respondBy: rel(3),
    status: "New",
    offerType: "Operator",
    brief:
      "Controller left in Q1. The team needs someone to own the close, rebuild the reporting pack, and carry lender conversations while the CEO runs a raise.",
    success: [
      "Close inside 7 business days by month three",
      "One reporting pack the board and lender both trust",
      "A permanent controller hired and onboarded",
    ],
  },
  {
    id: "inv-2",
    title: "Stand up demand planning before peak season",
    company: "Blue River Foods",
    commitment: "10-week sprint",
    location: "Hybrid · Chicago 2 days / month",
    respondBy: rel(6),
    status: "New",
    offerType: "Sprint",
    brief:
      "Stockouts on the top ten SKUs are costing shelf space. Veep is scoping a sprint to install a forecast, reorder points, and a weekly S&OP rhythm.",
    success: ["Forecast accuracy above 80% on A items", "Reorder points live in the ERP", "S&OP meeting running without Veep"],
  },
  {
    id: "inv-3",
    title: "Interim COO through the plant transition",
    company: "Confidential · PE-backed industrial",
    commitment: "4 days / week",
    location: "On-site · Ohio",
    respondBy: rel(-4),
    status: "Not selected",
    offerType: "Operator",
    brief: "Second plant ramp with a new leadership team. Sponsor selected an operator with direct plant startup history.",
    success: ["Ramp to full rate", "Scrap under 4%", "Site leadership hired"],
  },
];

export const seedAssignments: Assignment[] = [
  {
    id: "as-1",
    company: "Northwind Manufacturing",
    job: "Interim VP Finance",
    offerType: "Operator",
    start: rel(-58),
    end: rel(122),
    state: "Active",
    csContact: "Dana Reyes · Client Success",
    goals: [
      "Close inside 7 business days",
      "Rebuild the monthly reporting pack",
      "Hire and onboard a permanent controller",
    ],
    files: [
      { name: "Engagement SOW.pdf", href: "#" },
      { name: "Reporting pack v3.xlsx", href: "#" },
    ],
    updates: [
      { id: "u-1", date: rel(-4), author: "You", body: "Close finished day 9. Two reconciliations still manual; automating next week." },
      { id: "u-2", date: rel(-11), author: "You", body: "Lender pack delivered. Controller shortlist down to three candidates." },
    ],
  },
  {
    id: "as-2",
    company: "Blue River Foods",
    job: "Advisory — cash forecasting",
    offerType: "Advisory",
    start: rel(-20),
    end: rel(40),
    state: "Active",
    csContact: "Dana Reyes · Client Success",
    goals: ["13-week cash model owned by the finance lead"],
    files: [{ name: "Cash model.xlsx", href: "#" }],
    updates: [{ id: "u-3", date: rel(-6), author: "You", body: "Model handed to the finance lead; running it live from next Monday." }],
  },
  {
    id: "as-3",
    company: "Confidential · Series B logistics",
    job: "Interim Controller",
    offerType: "Operator",
    start: rel(-320),
    end: rel(-140),
    state: "Past",
    csContact: "Marcus Hale · Client Success",
    goals: ["Audit-ready close", "Permanent controller hired"],
    files: [],
    updates: [],
  },
  {
    id: "as-4",
    company: "Confidential · Vertical SaaS",
    job: "RevOps Sprint",
    offerType: "Sprint",
    start: rel(-420),
    end: rel(-336),
    state: "Past",
    csContact: "Marcus Hale · Client Success",
    goals: ["Single pipeline source of truth"],
    files: [],
    updates: [],
  },
];

export const seedAvailability: Availability = {
  status: "Limited",
  daysPerWeek: 2,
  earliestStart: rel(21),
  blackouts: [{ id: "b-1", from: rel(45), to: rel(59) }],
  travel: "Up to 2 trips per month",
  updatedAt: rel(-9),
};

export const seedProfile: OperatorProfile = {
  name: "Alan Poussaint",
  headline: "Finance operator for founder-led manufacturers and logistics businesses",
  photo: headshot.url,
  highlights: [
    "Took three companies from founder-run bookkeeping to audit-ready close",
    "Carried lender and board reporting through two refinancings",
    "Hired and handed off to four permanent finance leaders",
  ],
  functions: ["Finance", "FP&A", "Treasury", "Corp dev"],
  industries: ["Manufacturing", "Logistics", "Food & beverage"],
  stages: ["Series A–C", "PE-backed lower middle market"],
  proofPoints: [
    "Close cycle 19 → 6 days at a $70M revenue logistics business",
    "Landed cost down 11% after co-man renegotiation",
    "$25M credit facility placed in under 90 days",
  ],
  preferences: "2–3 days per week, remote with monthly on-site, US time zones",
  linkedin: "https://www.linkedin.com/in/example",
  marketingOptIn: true,
};

export const seedAgreements: Agreement[] = [
  { id: "ag-1", name: "Veep Network Agreement (2026)", kind: "Network agreement", status: "Pending signature", dated: rel(-2) },
  { id: "ag-2", name: "SOW — Northwind Manufacturing, Interim VP Finance", kind: "SOW", status: "Signed", dated: rel(-60) },
];

export const seedPayouts: Payout[] = [
  { id: "p-1", date: rel(-3), engagement: "Northwind Manufacturing — Interim VP Finance", amount: 14500, status: "Processing" },
  { id: "p-2", date: rel(-33), engagement: "Northwind Manufacturing — Interim VP Finance", amount: 14500, status: "Paid" },
  { id: "p-3", date: rel(-63), engagement: "Northwind Manufacturing — Interim VP Finance", amount: 12800, status: "Paid" },
  { id: "p-4", date: rel(-94), engagement: "Blue River Foods — Advisory", amount: 6000, status: "Paid" },
  { id: "p-5", date: rel(-124), engagement: "Vertical SaaS — RevOps Sprint", amount: 18000, status: "Paid" },
  { id: "p-6", date: rel(-155), engagement: "Vertical SaaS — RevOps Sprint", amount: 18000, status: "Paid" },
];