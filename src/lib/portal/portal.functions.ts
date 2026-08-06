import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database } from "@/integrations/supabase/types";

type Tables = Database["public"]["Tables"];

type Company = Tables["companies"]["Row"];
export type PortalOperator = {
  id: string;
  name: string;
  headline: string;
  photo: string;
  highlights: string[];
  functions: string[];
  industries: string[];
  stages: string[];
  proofPoints: string[];
  preferences: string;
  linkedin: string;
  marketingOptIn: boolean;
};

export type PortalAvailability = {
  status: "Open" | "Limited" | "Full" | "Paused";
  daysPerWeek: number;
  earliestStart: string;
  blackouts: { id: string; from: string; to: string }[];
  travel: string;
  updatedAt: string;
};

export type PortalInvitation = {
  id: string;
  title: string;
  company: string;
  commitment: string;
  location: string;
  respondBy: string;
  status: "New" | "Interested" | "Declined" | "Expired" | "Selected" | "Not selected";
  brief: string;
  success: string[];
  offerType: string;
};

export type PortalAssignment = {
  id: string;
  company: string;
  job: string;
  offerType: string;
  start: string;
  end: string;
  state: "Active" | "Past";
  csContact: string;
  goals: string[];
  files: { name: string; href: string }[];
  updates: { id: string; date: string; author: string; body: string }[];
};

export type PortalAgreement = {
  id: string;
  name: string;
  kind: "Network agreement" | "SOW";
  status: "Pending signature" | "Signed" | "Expired";
  dated: string;
};

export type PortalPayout = {
  id: string;
  date: string;
  engagement: string;
  amount: number;
  status: "Paid" | "Processing";
};

export type PortalJob = {
  id: string;
  companyId: string;
  title: string;
  status: string;
  urgency: string;
  ownedToday: string;
  success: string;
  constraints?: string;
  createdAt: string;
  timeline: { date: string; note: string }[];
};

export type PortalProposal = {
  id: string;
  name: string;
  jobId: string;
  companyId: string;
  sentOn: string;
  status: "Sent" | "Under review" | "Accepted" | "Declined" | "Expired";
  commercial: { label: string; value: string }[];
  inclusions: string[];
};

export type PortalEngagement = {
  id: string;
  jobId: string;
  companyId: string;
  offerType: string;
  start: string;
  end: string;
  state: "Active" | "Past";
  operator: { name: string; headline: string; photo: string };
  csContact: string;
  goals: string[];
  files: { name: string; href: string }[];
  updates: { id: string; date: string; author: string; body: string }[];
  requests: { id: string; kind: string; body: string; date: string }[];
};

export type PortalInvoice = {
  id: string;
  number: string;
  period: string;
  companyId: string;
  amount: number;
  status: "Due" | "Paid" | "Overdue";
};

export type PortalDocument = {
  id: string;
  name: string;
  kind: "MSA" | "SOW" | "NDA" | "Proposal";
  companyId: string;
  status: "Signed" | "Pending signature" | "Draft";
  dated: string;
};

export type PortalTeamMember = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Billing" | "Viewer" | "Veep CS" | "Operator";
  status: "Active" | "Pending";
};

export type PortalData = {
  companies: Company[];
  operator: PortalOperator | null;
  availability: PortalAvailability | null;
  invitations: PortalInvitation[];
  assignments: PortalAssignment[];
  agreements: PortalAgreement[];
  payouts: PortalPayout[];
  jobs: PortalJob[];
  proposals: PortalProposal[];
  engagements: PortalEngagement[];
  invoices: PortalInvoice[];
  documents: PortalDocument[];
  team: PortalTeamMember[];
};

function companyName(companies: Company[], id: string | null): string {
  if (!id) return "Veep";
  return companies.find((c) => c.id === id)?.name ?? "Unknown";
}

function asOperator(row: Tables["operators"]["Row"]): PortalOperator {
  return {
    id: row.id,
    name: row.name,
    headline: row.headline ?? "",
    photo: row.photo_url ?? "",
    highlights: row.highlights ?? [],
    functions: row.functions ?? [],
    industries: row.industries ?? [],
    stages: row.stages ?? [],
    proofPoints: row.proof_points ?? [],
    preferences: row.preferences ?? "",
    linkedin: row.linkedin ?? "",
    marketingOptIn: row.marketing_opt_in ?? true,
  };
}

function asAvailability(row: Tables["operator_availability"]["Row"]): PortalAvailability {
  return {
    status: (row.status as PortalAvailability["status"]) ?? "Open",
    daysPerWeek: row.days_per_week ?? 0,
    earliestStart: row.earliest_start ?? "",
    blackouts: (row.blackouts as { id: string; from: string; to: string }[]) ?? [],
    travel: row.travel ?? "",
    updatedAt: row.updated_at ? String(row.updated_at) : "",
  };
}

function asInvitation(row: Tables["operator_invitations"]["Row"], companies: Company[]): PortalInvitation {
  return {
    id: row.id,
    title: row.title,
    company: companyName(companies, row.company_id),
    commitment: row.commitment ?? "",
    location: row.location ?? "",
    respondBy: row.respond_by ? String(row.respond_by) : "",
    status: (row.status as PortalInvitation["status"]) ?? "New",
    brief: row.brief ?? "",
    success: row.success ?? [],
    offerType: row.offer_type ?? "",
  };
}

function asAssignment(row: Tables["operator_assignments"]["Row"], companies: Company[]): PortalAssignment {
  return {
    id: row.id,
    company: companyName(companies, row.company_id),
    job: row.job,
    offerType: row.offer_type ?? "",
    start: row.start_date ? String(row.start_date) : "",
    end: row.end_date ? String(row.end_date) : "",
    state: (row.state as PortalAssignment["state"]) ?? "Active",
    csContact: row.cs_contact ?? "",
    goals: row.goals ?? [],
    files: (row.files as { name: string; href: string }[]) ?? [],
    updates: (row.updates as { id: string; date: string; author: string; body: string }[]) ?? [],
  };
}

function asAgreement(row: Tables["operator_agreements"]["Row"]): PortalAgreement {
  return {
    id: row.id,
    name: row.name,
    kind: (row.kind as PortalAgreement["kind"]) ?? "SOW",
    status: (row.status as PortalAgreement["status"]) ?? "Pending signature",
    dated: row.dated ? String(row.dated) : "",
  };
}

function asPayout(row: Tables["operator_payouts"]["Row"]): PortalPayout {
  return {
    id: row.id,
    date: row.payout_date ? String(row.payout_date) : "",
    engagement: row.engagement ?? "",
    amount: row.amount ?? 0,
    status: (row.status as PortalPayout["status"]) ?? "Processing",
  };
}

function asJob(row: Tables["jobs"]["Row"]): PortalJob {
  return {
    id: row.id,
    companyId: row.company_id,
    title: row.title,
    status: row.status,
    urgency: row.urgency ?? "",
    ownedToday: row.owned_today ?? "",
    success: row.success ?? "",
    constraints: row.constraints ?? undefined,
    createdAt: row.created_at ? String(row.created_at) : "",
    timeline: (row.timeline as { date: string; note: string }[]) ?? [],
  };
}

function asProposal(row: Tables["proposals"]["Row"]): PortalProposal {
  return {
    id: row.id,
    name: row.name,
    jobId: row.job_id ?? "",
    companyId: row.company_id,
    sentOn: row.sent_on ? String(row.sent_on) : "",
    status: (row.status as PortalProposal["status"]) ?? "Sent",
    commercial: (row.commercial as { label: string; value: string }[]) ?? [],
    inclusions: row.inclusions ?? [],
  };
}

function asEngagement(row: Tables["engagements"]["Row"], companies: Company[]): PortalEngagement {
  return {
    id: row.id,
    jobId: row.job_id ?? "",
    companyId: row.company_id,
    offerType: row.offer_type ?? "",
    start: row.start_date ? String(row.start_date) : "",
    end: row.end_date ? String(row.end_date) : "",
    state: (row.state as PortalEngagement["state"]) ?? "Active",
    operator: (row.operator_summary as { name: string; headline: string; photo: string }) ?? {
      name: "",
      headline: "",
      photo: "",
    },
    csContact: row.cs_contact ?? "",
    goals: row.goals ?? [],
    files: (row.files as { name: string; href: string }[]) ?? [],
    updates: (row.updates as { id: string; date: string; author: string; body: string }[]) ?? [],
    requests: (row.requests as { id: string; kind: string; body: string; date: string }[]) ?? [],
  };
}

function asInvoice(row: Tables["invoices"]["Row"]): PortalInvoice {
  return {
    id: row.id,
    number: row.number,
    period: row.period ?? "",
    companyId: row.company_id,
    amount: row.amount ?? 0,
    status: (row.status as PortalInvoice["status"]) ?? "Due",
  };
}

function asDocument(row: Tables["documents"]["Row"]): PortalDocument {
  return {
    id: row.id,
    name: row.name,
    kind: (row.kind as PortalDocument["kind"]) ?? "Proposal",
    companyId: row.company_id,
    status: (row.status as PortalDocument["status"]) ?? "Draft",
    dated: row.dated ? String(row.dated) : "",
  };
}

function asTeamMember(row: Tables["team_members"]["Row"]): PortalTeamMember {
  return {
    id: row.id,
    name: row.name,
    email: row.email ?? "",
    role: (row.role as PortalTeamMember["role"]) ?? "Viewer",
    status: (row.status as PortalTeamMember["status"]) ?? "Active",
  };
}

export const getPortalData = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const [companies, operators, availability, invitations, assignments, agreements, payouts, jobs, proposals, engagements, invoices, documents, team] = await Promise.all([
      context.supabase.from("companies").select("*").eq("is_demo", true).eq("archived", false).order("name"),
      context.supabase.from("operators").select("*").eq("is_demo", true).eq("archived", false).limit(1).single(),
      context.supabase.from("operator_availability").select("*").eq("is_demo", true).limit(1).single(),
      context.supabase.from("operator_invitations").select("*").eq("is_demo", true).eq("archived", false).order("created_at", { ascending: false }),
      context.supabase.from("operator_assignments").select("*").eq("is_demo", true).eq("archived", false).order("start_date", { ascending: false }),
      context.supabase.from("operator_agreements").select("*").eq("is_demo", true).eq("archived", false).order("dated", { ascending: false }),
      context.supabase.from("operator_payouts").select("*").eq("is_demo", true).order("payout_date", { ascending: false }),
      context.supabase.from("jobs").select("*").eq("is_demo", true).eq("archived", false).order("created_at", { ascending: false }),
      context.supabase.from("proposals").select("*").eq("is_demo", true).eq("archived", false).order("sent_on", { ascending: false }),
      context.supabase.from("engagements").select("*").eq("is_demo", true).eq("archived", false).order("start_date", { ascending: false }),
      context.supabase.from("invoices").select("*").eq("is_demo", true).eq("archived", false).order("created_at", { ascending: false }),
      context.supabase.from("documents").select("*").eq("is_demo", true).eq("archived", false).order("dated", { ascending: false }),
      context.supabase.from("team_members").select("*").eq("is_demo", true).eq("archived", false).order("name"),
    ]);

    const companyRows = companies.data ?? [];

    return {
      companies: companyRows,
      operator: operators.data ? asOperator(operators.data) : null,
      availability: availability.data ? asAvailability(availability.data) : null,
      invitations: (invitations.data ?? []).map((r) => asInvitation(r, companyRows)),
      assignments: (assignments.data ?? []).map((r) => asAssignment(r, companyRows)),
      agreements: (agreements.data ?? []).map(asAgreement),
      payouts: (payouts.data ?? []).map(asPayout),
      jobs: (jobs.data ?? []).map(asJob),
      proposals: (proposals.data ?? []).map(asProposal),
      engagements: (engagements.data ?? []).map((r) => asEngagement(r, companyRows)),
      invoices: (invoices.data ?? []).map(asInvoice),
      documents: (documents.data ?? []).map(asDocument),
      team: (team.data ?? []).map(asTeamMember),
    } satisfies PortalData;
  });
