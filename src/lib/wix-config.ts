// Wix form connection for the Veep operator application.
// These IDs come from the connected Wix account (garcda6@gmail.com)
// and the "Veep" site form built to receive operator applications.

export const WIX_SITE_ID = "be946f00-502a-4e63-9689-3a0444bfa798";
export const WIX_FORM_ID_DISCOVERY = "1e2587ad-fa62-41e6-9f29-022c5d96cd60";
export const WIX_FORM_ID_CAPACITY_AUDIT = "965b9c55-4b47-4d28-ac77-c2f5101c051c";

// Field target keys discovered from the Wix form schema.
export const WIX_FORM_FIELDS = {
  firstName: "first_name_aee9",
  lastName: "last_name_d5b2",
  email: "email_b471",
  linkedIn: "linked_in",
  website: "website",
  role: "highest_executive_role_held",
  fractionalExperience: "do_you_have_experience_with_interim_fractional_advisory_work",
  companyTypes: "what_types_of_companies_have_you_worked_with_select_all_that_app",
  growthStages: "what_growth_stages_are_you_experienced_with_select_all_that_appl",
  functions: "functional_expertise_check_all_that_apply",
  industries: "industry_experience",
  notes: "anything_else_we_should_know",
  source: "how_did_you_hear_of_us",
  resume: "resume",
} as const;

// Map Veep form role values to the Wix form dropdown values.
export const roleToWix: Record<string, string> = {
  "CEO / Founder": "Founder / Chief Executive",
  "President / COO": "C-Suite or EVP",
  "CFO": "C-Suite or EVP",
  "CRO / CMO": "C-Suite or EVP",
  "CPO / CTO": "C-Suite or EVP",
  "GM / SVP": "VP / SVP",
  "Other": "Other",
};

// Map Veep source values to the Wix dropdown options. The Veep form uses
// a free-text "How did you hear about Veep?" field. We map common answers
// where possible and fall back to "Other" for anything else.
export const sourceToWix: Record<string, string> = {
  Referral: "Referral",
  "Social Media": "Social Media",
  "Article / Podcast": "Article / Podcast",
  Other: "Other",
};

// Normalize checkbox values to match Wix option spelling.
export function normalizeCompanyType(value: string): string {
  if (value === "Non-profit / NGO") return "Non-Profit / NGO";
  return value;
}

export function normalizeFunction(value: string): string {
  if (value === "Sales, Marketing & Revenue") return "Sales, Marketing, & Revenue";
  return value;
}
