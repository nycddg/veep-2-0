export type InvitationStatus =
  | "New"
  | "Interested"
  | "Declined"
  | "Expired"
  | "Selected"
  | "Not selected";

export type Invitation = {
  id: string;
  title: string;
  company: string;
  commitment: string;
  location: string;
  respondBy: string;
  status: InvitationStatus;
  brief: string;
  success: string[];
  offerType: string;
};

export type WeeklyUpdate = { id: string; date: string; author: string; body: string };

export type Assignment = {
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
  updates: WeeklyUpdate[];
};

export type Availability = {
  status: "Open" | "Limited" | "Full" | "Paused";
  daysPerWeek: number;
  earliestStart: string;
  blackouts: { id: string; from: string; to: string }[];
  travel: string;
  updatedAt: string;
};

export type OperatorProfile = {
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

export type Agreement = {
  id: string;
  name: string;
  kind: "Network agreement" | "SOW";
  status: "Pending signature" | "Signed" | "Expired";
  dated: string;
};

export type Payout = {
  id: string;
  date: string;
  engagement: string;
  amount: number;
  status: "Paid" | "Processing";
};

export type JobStatus =
  | "Draft"
  | "Submitted"
  | "In review"
  | "Shortlist ready"
  | "Proposal out"
  | "In engagement"
  | "Closed"
  | "On hold";

export type Job = {
  id: string;
  title: string;
  companyId: string;
  status: JobStatus;
  urgency: string;
  ownedToday: string;
  success: string;
  constraints?: string;
  createdAt: string;
  timeline: { date: string; note: string }[];
};

export type Proposal = {
  id: string;
  name: string;
  jobId: string;
  companyId: string;
  sentOn: string;
  status: "Sent" | "Under review" | "Accepted" | "Declined" | "Expired";
  commercial: { label: string; value: string }[];
  inclusions: string[];
};

export type Engagement = {
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
  updates: WeeklyUpdate[];
  requests: { id: string; kind: string; body: string; date: string }[];
};

export type Invoice = {
  id: string;
  number: string;
  period: string;
  companyId: string;
  amount: number;
  status: "Due" | "Paid" | "Overdue";
};

export type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Billing" | "Viewer" | "Veep CS" | "Operator";
  status: "Active" | "Pending";
};

export type DocumentRow = {
  id: string;
  name: string;
  kind: "MSA" | "SOW" | "NDA" | "Proposal";
  companyId: string;
  status: "Signed" | "Pending signature" | "Draft";
  dated: string;
};

export type Company = { id: string; name: string };