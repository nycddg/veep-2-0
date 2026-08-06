import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { rel } from "./dates";
import * as op from "./operator-seed";
import * as cl from "./client-seed";
import type {
  Agreement,
  Assignment,
  Availability,
  DocumentRow,
  Engagement,
  Invitation,
  InvitationStatus,
  Invoice,
  Job,
  JobStatus,
  OperatorProfile,
  Payout,
  Proposal,
  TeamMember,
} from "./types";

/**
 * Session-only demo store. Everything here is placeholder data: it resets on
 * reload and is replaced screen by screen as real sources come online.
 */
type State = {
  invitations: Invitation[];
  assignments: Assignment[];
  availability: Availability;
  profile: OperatorProfile;
  agreements: Agreement[];
  payouts: Payout[];
  jobs: Job[];
  proposals: Proposal[];
  engagements: Engagement[];
  team: TeamMember[];
  documents: DocumentRow[];
  invoices: Invoice[];
  companyId: string | "all";
};

type Actions = {
  respondToInvitation: (id: string, status: InvitationStatus) => void;
  saveAvailability: (next: Partial<Availability>) => void;
  setMarketingOptIn: (value: boolean) => void;
  signAgreement: (id: string) => void;
  submitInvoice: (engagement: string, amount: number) => void;
  postOperatorUpdate: (assignmentId: string, body: string) => void;
  postClientUpdate: (engagementId: string, body: string) => void;
  submitJob: (input: {
    title: string;
    success: string;
    ownedToday: string;
    urgency: string;
    companyId: string;
    constraints?: string;
  }) => string;
  setProposalStatus: (id: string, status: Proposal["status"]) => void;
  addEngagementRequest: (engagementId: string, kind: string, body: string) => void;
  inviteTeammate: (name: string, email: string, role: TeamMember["role"]) => void;
  setCompanyId: (id: string | "all") => void;
};

const PortalContext = createContext<(State & Actions) | null>(null);

function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

export function PortalStoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(() => ({
    invitations: op.seedInvitations,
    assignments: op.seedAssignments,
    availability: op.seedAvailability,
    profile: op.seedProfile,
    agreements: op.seedAgreements,
    payouts: op.seedPayouts,
    jobs: cl.seedJobs,
    proposals: cl.seedProposals,
    engagements: cl.seedEngagements,
    team: cl.seedTeam,
    documents: cl.seedDocuments,
    invoices: cl.seedInvoices,
    companyId: "all",
  }));

  const value = useMemo<State & Actions>(() => {
    const patch = (fn: (s: State) => State) => setState((s) => fn(s));
    return {
      ...state,
      respondToInvitation: (id, status) =>
        patch((s) => ({
          ...s,
          invitations: s.invitations.map((i) => (i.id === id ? { ...i, status } : i)),
        })),
      saveAvailability: (next) =>
        patch((s) => ({
          ...s,
          availability: { ...s.availability, ...next, updatedAt: rel(0) },
        })),
      setMarketingOptIn: (marketingOptIn) =>
        patch((s) => ({ ...s, profile: { ...s.profile, marketingOptIn } })),
      signAgreement: (id) =>
        patch((s) => ({
          ...s,
          agreements: s.agreements.map((a) =>
            a.id === id ? { ...a, status: "Signed" as const, dated: rel(0) } : a,
          ),
        })),
      submitInvoice: (engagement, amount) =>
        patch((s) => ({
          ...s,
          payouts: [
            { id: uid("p"), date: rel(0), engagement, amount, status: "Processing" as const },
            ...s.payouts,
          ],
        })),
      postOperatorUpdate: (assignmentId, body) =>
        patch((s) => ({
          ...s,
          assignments: s.assignments.map((a) =>
            a.id === assignmentId
              ? { ...a, updates: [{ id: uid("u"), date: rel(0), author: "You", body }, ...a.updates] }
              : a,
          ),
        })),
      postClientUpdate: (engagementId, body) =>
        patch((s) => ({
          ...s,
          engagements: s.engagements.map((e) =>
            e.id === engagementId
              ? { ...e, updates: [{ id: uid("cu"), date: rel(0), author: "You", body }, ...e.updates] }
              : e,
          ),
        })),
      submitJob: (input) => {
        const id = uid("job");
        patch((s) => ({
          ...s,
          jobs: [
            {
              id,
              title: input.title,
              companyId: input.companyId,
              status: "Submitted" as JobStatus,
              urgency: input.urgency,
              ownedToday: input.ownedToday,
              success: input.success,
              constraints: input.constraints,
              createdAt: rel(0),
              timeline: [{ date: rel(0), note: "Job submitted — Veep will reply within one business day" }],
            },
            ...s.jobs,
          ],
        }));
        return id;
      },
      setProposalStatus: (id, status) =>
        patch((s) => ({
          ...s,
          proposals: s.proposals.map((p) => (p.id === id ? { ...p, status } : p)),
        })),
      addEngagementRequest: (engagementId, kind, body) =>
        patch((s) => ({
          ...s,
          engagements: s.engagements.map((e) =>
            e.id === engagementId
              ? { ...e, requests: [{ id: uid("req"), kind, body, date: rel(0) }, ...e.requests] }
              : e,
          ),
        })),
      inviteTeammate: (name, email, role) =>
        patch((s) => ({
          ...s,
          team: [...s.team, { id: uid("tm"), name, email, role, status: "Pending" as const }],
        })),
      setCompanyId: (companyId) => patch((s) => ({ ...s, companyId })),
    };
  }, [state]);

  return <PortalContext.Provider value={value}>{children}</PortalContext.Provider>;
}

export function usePortal() {
  const ctx = useContext(PortalContext);
  if (!ctx) throw new Error("usePortal must be used inside PortalStoreProvider");
  return ctx;
}

export const companies = cl.companies;
export const account = cl.account;
export const networkLeads = op.networkLeads;
export const networkWins = op.networkWins;

export function companyName(id: string): string {
  return companies.find((c) => c.id === id)?.name ?? "All companies";
}