/**
 * Shared proof so homepage #proof and the funds delivery ledger
 * cannot drift on the public numbers.
 */

export type ProofCase = {
  id: string;
  tag: string;
  role: string;
  trigger: string;
  outcome: string;
  metric: string;
  figure?: string;
  kicker?: string;
};

export const proofRaise = {
  id: "proof-raise",
  tag: "B2B SAAS",
  role: "Finance Operating Partner",
  trigger:
    "CEO was preparing for a first institutional round without a financial model, diligence materials, or fundraising playbook.",
  outcome:
    "Veep built the 3-year model and CAC/LTV dashboards and stood beside the founder through investor questions; the company closed $6M against a $4M target.",
  metric: "$6M raised in 6 weeks",
  figure: "$6M",
  kicker: "Raised in 6 weeks",
} as const satisfies ProofCase;

export const proofStudio = {
  id: "proof-studio",
  tag: "SOFTWARE STUDIO",
  role: "Growth Operating Partner",
  trigger:
    "An $8M product studio was stuck firefighting inconsistent project profitability with no scalable path into AI.",
  outcome:
    "Veep standardized scoping, staffing, and margin tracking, freeing the CEO to launch an AI practice, build a $2M+ prospective pipeline, and hire a Director of AI.",
  metric: "Project margins up 25%",
} as const satisfies ProofCase;

export const proofPodcast = {
  id: "proof-podcast",
  tag: "PODCAST PUBLISHER",
  role: "Business Operating Partner",
  trigger:
    "A profitable, bootstrapped publisher had never raised outside capital and lacked a financial model or institutional growth plan.",
  outcome:
    "Veep built the company's first financial model, defined use of proceeds, and sourced investors representing over a third of the round.",
  metric: "Sourced 35% of capital",
} as const satisfies ProofCase;

export const homeProofCases = [proofRaise, proofStudio, proofPodcast] as const;

export type DeliveryProof = {
  id: string;
  label: string;
  result: string;
  trigger: string;
  work: string;
};

/** Anonymous on purpose. ClientStrip still lists Northstar Vets; this card does not. */
export const veterinaryDelivery = {
  id: "delivery-vet",
  label: "Veterinary Group, acquisition integration",
  result: "Monthly close from roughly 25 days to 8.",
  trigger:
    "After close, monthly reporting was still landing about 25 days out, so integration calls were being made on stale numbers.",
  work: "Veep clarified finance responsibilities, rebuilt the close process, and supported integration. Monthly close came down to 8 days.",
} as const satisfies DeliveryProof;

export const saasDelivery = {
  id: proofRaise.id,
  label: "B2B SaaS diligence mandate",
  result: "$6M raised in 6 weeks against a $4M target.",
  trigger: proofRaise.trigger,
  work: proofRaise.outcome,
} as const satisfies DeliveryProof;

export const companyDeliveryProof = [veterinaryDelivery, saasDelivery] as const;
