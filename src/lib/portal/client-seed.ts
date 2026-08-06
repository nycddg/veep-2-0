import { rel } from "./dates";
import type {
  Company,
  DocumentRow,
  Engagement,
  Invoice,
  Job,
  Proposal,
  TeamMember,
} from "./types";
import operatorAlan from "@/assets/operator-alan-poussaint.png.asset.json";
import operatorErika from "@/assets/operator-erika-velazquez.png.asset.json";

export const account = { name: "Acme Capital", type: "fund" as const };

export const companies: Company[] = [
  { id: "northwind", name: "Northwind Manufacturing" },
  { id: "blueriver", name: "Blue River Foods" },
];

export const seedJobs: Job[] = [
  {
    id: "job-1",
    title: "Own the finance function through the next raise",
    companyId: "northwind",
    status: "In engagement",
    urgency: "Immediate",
    ownedToday: "founder",
    success: "Close inside 7 days, one trusted reporting pack, permanent controller hired.",
    createdAt: rel(-74),
    timeline: [
      { date: rel(-74), note: "Job submitted" },
      { date: rel(-71), note: "Scoping call with Veep" },
      { date: rel(-66), note: "Shortlist ready — 2 operators" },
      { date: rel(-62), note: "Proposal sent" },
      { date: rel(-58), note: "Engagement started" },
    ],
  },
  {
    id: "job-2",
    title: "Stand up demand planning before peak season",
    companyId: "blueriver",
    status: "Proposal out",
    urgency: "Within 30 days",
    ownedToday: "internal",
    success: "Forecast accuracy above 80% on A items and a live S&OP rhythm.",
    constraints: "Must work inside the existing ERP.",
    createdAt: rel(-19),
    timeline: [
      { date: rel(-19), note: "Job submitted" },
      { date: rel(-16), note: "Scoping call with Veep" },
      { date: rel(-9), note: "Shortlist ready — 3 operators" },
      { date: rel(-5), note: "Proposal sent" },
    ],
  },
  {
    id: "job-3",
    title: "Post-acquisition back office integration",
    companyId: "northwind",
    status: "In review",
    urgency: "Within 60 days",
    ownedToday: "vendor",
    success: "One ERP, one payroll, one close across all three entities.",
    createdAt: rel(-6),
    timeline: [
      { date: rel(-6), note: "Job submitted" },
      { date: rel(-3), note: "Veep reviewing scope" },
    ],
  },
  {
    id: "job-4",
    title: "Interim plant leadership for the second line",
    companyId: "northwind",
    status: "On hold",
    urgency: "This quarter",
    ownedToday: "none",
    success: "Ramp the second line to full rate with scrap under 4%.",
    createdAt: rel(-40),
    timeline: [
      { date: rel(-40), note: "Job submitted" },
      { date: rel(-28), note: "Paused by client pending capex approval" },
    ],
  },
];

export const seedProposals: Proposal[] = [
  {
    id: "prop-1",
    name: "Demand planning sprint",
    jobId: "job-2",
    companyId: "blueriver",
    sentOn: rel(-5),
    status: "Sent",
    commercial: [
      { label: "Offer type", value: "Sprint" },
      { label: "Term", value: "10 weeks" },
      { label: "Commitment", value: "3 days / week" },
      { label: "Fee", value: "$54,000 total, billed monthly" },
    ],
    inclusions: [
      "Matched operator with peak-season planning history",
      "Forecast, reorder points, and S&OP cadence installed in your ERP",
      "Weekly written updates and a named Veep client success contact",
      "Handover to your internal owner in the final two weeks",
    ],
  },
  {
    id: "prop-2",
    name: "Interim VP Finance",
    jobId: "job-1",
    companyId: "northwind",
    sentOn: rel(-62),
    status: "Accepted",
    commercial: [
      { label: "Offer type", value: "Operator" },
      { label: "Term", value: "6 months" },
      { label: "Commitment", value: "3 days / week" },
      { label: "Fee", value: "$29,000 / month" },
    ],
    inclusions: ["Operator deployed within 10 days", "Close, reporting pack, and lender support", "Permanent controller search support"],
  },
  {
    id: "prop-3",
    name: "Plant leadership — interim COO",
    jobId: "job-4",
    companyId: "northwind",
    sentOn: rel(-34),
    status: "Expired",
    commercial: [
      { label: "Offer type", value: "Operator" },
      { label: "Term", value: "5 months" },
      { label: "Commitment", value: "4 days / week" },
      { label: "Fee", value: "$36,000 / month" },
    ],
    inclusions: ["On-site operator", "Ramp plan and daily management system"],
  },
];

export const seedEngagements: Engagement[] = [
  {
    id: "eng-1",
    jobId: "job-1",
    companyId: "northwind",
    offerType: "Operator",
    start: rel(-58),
    end: rel(122),
    state: "Active",
    operator: {
      name: "Alan Poussaint",
      headline: "Finance operator — manufacturing and logistics",
      photo: operatorAlan.url,
    },
    csContact: "Dana Reyes · Client Success",
    goals: [
      "Close inside 7 business days by month three",
      "One reporting pack the board and lender both trust",
      "Permanent controller hired and onboarded",
    ],
    files: [
      { name: "SOW — Interim VP Finance.pdf", href: "#" },
      { name: "Reporting pack v3.xlsx", href: "#" },
    ],
    updates: [
      { id: "cu-1", date: rel(-4), author: "Alan Poussaint", body: "Close finished day 9. Two reconciliations still manual; automating next week." },
      { id: "cu-2", date: rel(-11), author: "Alan Poussaint", body: "Lender pack delivered. Controller shortlist down to three candidates." },
    ],
    requests: [],
  },
  {
    id: "eng-2",
    jobId: "job-2",
    companyId: "blueriver",
    offerType: "Sprint",
    start: rel(-250),
    end: rel(-166),
    state: "Past",
    operator: {
      name: "Erika Velazquez",
      headline: "Supply chain operator — food and beverage",
      photo: operatorErika.url,
    },
    csContact: "Marcus Hale · Client Success",
    goals: ["Co-man transition without a service interruption"],
    files: [{ name: "Sprint closeout.pdf", href: "#" }],
    updates: [],
    requests: [],
  },
];

export const seedTeam: TeamMember[] = [
  { id: "tm-1", name: "Dana Reyes", email: "dana@veep.co", role: "Veep CS", status: "Active" },
  { id: "tm-2", name: "Alan Poussaint", email: "operator@veep.co", role: "Operator", status: "Active" },
  { id: "tm-3", name: "Priya Raman", email: "priya@acmecapital.com", role: "Admin", status: "Active" },
  { id: "tm-4", name: "Tom Whitfield", email: "tom@northwindmfg.com", role: "Viewer", status: "Active" },
];

export const seedDocuments: DocumentRow[] = [
  { id: "doc-1", name: "Master Services Agreement", kind: "MSA", companyId: "northwind", status: "Signed", dated: rel(-80) },
  { id: "doc-2", name: "SOW — Interim VP Finance", kind: "SOW", companyId: "northwind", status: "Signed", dated: rel(-60) },
  { id: "doc-3", name: "Mutual NDA", kind: "NDA", companyId: "blueriver", status: "Signed", dated: rel(-22) },
  { id: "doc-4", name: "Proposal — Demand planning sprint", kind: "Proposal", companyId: "blueriver", status: "Pending signature", dated: rel(-5) },
];

export const seedInvoices: Invoice[] = [
  { id: "in-1", number: "VP-1043", period: "Current month", companyId: "northwind", amount: 29000, status: "Due" },
  { id: "in-2", number: "VP-1029", period: "Last month", companyId: "northwind", amount: 29000, status: "Paid" },
  { id: "in-3", number: "VP-1014", period: "Two months ago", companyId: "northwind", amount: 29000, status: "Paid" },
  { id: "in-4", number: "VP-0998", period: "Three months ago", companyId: "blueriver", amount: 18000, status: "Overdue" },
  { id: "in-5", number: "VP-0981", period: "Four months ago", companyId: "blueriver", amount: 18000, status: "Paid" },
];