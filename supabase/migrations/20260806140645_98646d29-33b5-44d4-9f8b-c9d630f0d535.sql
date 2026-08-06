ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'operator';
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'client';

CREATE TABLE public.companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  domain text,
  slug text UNIQUE,
  plan text,
  status text NOT NULL DEFAULT 'active',
  notes text,
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.companies TO authenticated;
GRANT ALL ON public.companies TO service_role;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage companies" ON public.companies FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo companies" ON public.companies FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TABLE public.operators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  name text NOT NULL,
  headline text,
  photo_url text,
  highlights text[] NOT NULL DEFAULT '{}',
  functions text[] NOT NULL DEFAULT '{}',
  industries text[] NOT NULL DEFAULT '{}',
  stages text[] NOT NULL DEFAULT '{}',
  proof_points text[] NOT NULL DEFAULT '{}',
  preferences text,
  linkedin text,
  marketing_opt_in boolean NOT NULL DEFAULT true,
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.operators TO authenticated;
GRANT ALL ON public.operators TO service_role;
ALTER TABLE public.operators ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage operators" ON public.operators FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo operators" ON public.operators FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TABLE public.operator_availability (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  operator_id uuid NOT NULL REFERENCES public.operators(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'Open',
  days_per_week integer NOT NULL DEFAULT 0,
  earliest_start date,
  blackouts jsonb NOT NULL DEFAULT '[]',
  travel text,
  updated_at date,
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.operator_availability TO authenticated;
GRANT ALL ON public.operator_availability TO service_role;
ALTER TABLE public.operator_availability ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage operator availability" ON public.operator_availability FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo availability" ON public.operator_availability FOR SELECT TO authenticated USING (is_demo = true);

CREATE TABLE public.operator_invitations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  operator_id uuid NOT NULL REFERENCES public.operators(id) ON DELETE CASCADE,
  company_id uuid REFERENCES public.companies(id) ON DELETE SET NULL,
  title text NOT NULL,
  commitment text,
  location text,
  respond_by date,
  status text NOT NULL DEFAULT 'New',
  offer_type text,
  brief text,
  success text[] NOT NULL DEFAULT '{}',
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.operator_invitations TO authenticated;
GRANT ALL ON public.operator_invitations TO service_role;
ALTER TABLE public.operator_invitations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage invitations" ON public.operator_invitations FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo invitations" ON public.operator_invitations FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TABLE public.operator_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  operator_id uuid NOT NULL REFERENCES public.operators(id) ON DELETE CASCADE,
  company_id uuid REFERENCES public.companies(id) ON DELETE SET NULL,
  job text NOT NULL,
  offer_type text,
  start_date date,
  end_date date,
  state text NOT NULL DEFAULT 'Active',
  cs_contact text,
  goals text[] NOT NULL DEFAULT '{}',
  files jsonb NOT NULL DEFAULT '[]',
  updates jsonb NOT NULL DEFAULT '[]',
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.operator_assignments TO authenticated;
GRANT ALL ON public.operator_assignments TO service_role;
ALTER TABLE public.operator_assignments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage assignments" ON public.operator_assignments FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo assignments" ON public.operator_assignments FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TABLE public.operator_payouts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  operator_id uuid NOT NULL REFERENCES public.operators(id) ON DELETE CASCADE,
  engagement_id uuid,
  engagement text,
  payout_date date,
  amount integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'Processing',
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.operator_payouts TO authenticated;
GRANT ALL ON public.operator_payouts TO service_role;
ALTER TABLE public.operator_payouts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage payouts" ON public.operator_payouts FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo payouts" ON public.operator_payouts FOR SELECT TO authenticated USING (is_demo = true);

CREATE TABLE public.operator_agreements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  operator_id uuid NOT NULL REFERENCES public.operators(id) ON DELETE CASCADE,
  name text NOT NULL,
  kind text NOT NULL,
  status text NOT NULL DEFAULT 'Pending signature',
  dated date,
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.operator_agreements TO authenticated;
GRANT ALL ON public.operator_agreements TO service_role;
ALTER TABLE public.operator_agreements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage agreements" ON public.operator_agreements FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo agreements" ON public.operator_agreements FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TABLE public.clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  role text,
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.clients TO authenticated;
GRANT ALL ON public.clients TO service_role;
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage clients" ON public.clients FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo clients" ON public.clients FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TABLE public.jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  title text NOT NULL,
  status text NOT NULL DEFAULT 'Draft',
  urgency text,
  owned_today text,
  success text,
  constraints text,
  timeline jsonb NOT NULL DEFAULT '[]',
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at date NOT NULL DEFAULT CURRENT_DATE,
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.jobs TO authenticated;
GRANT ALL ON public.jobs TO service_role;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage jobs" ON public.jobs FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo jobs" ON public.jobs FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TABLE public.proposals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  job_id uuid REFERENCES public.jobs(id) ON DELETE SET NULL,
  name text NOT NULL,
  sent_on date,
  status text NOT NULL DEFAULT 'Sent',
  commercial jsonb NOT NULL DEFAULT '[]',
  inclusions text[] NOT NULL DEFAULT '{}',
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.proposals TO authenticated;
GRANT ALL ON public.proposals TO service_role;
ALTER TABLE public.proposals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage proposals" ON public.proposals FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo proposals" ON public.proposals FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TABLE public.engagements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  operator_id uuid NOT NULL REFERENCES public.operators(id) ON DELETE CASCADE,
  job_id uuid REFERENCES public.jobs(id) ON DELETE SET NULL,
  offer_type text,
  start_date date,
  end_date date,
  state text NOT NULL DEFAULT 'Active',
  operator_summary jsonb NOT NULL DEFAULT '{}',
  cs_contact text,
  goals text[] NOT NULL DEFAULT '{}',
  files jsonb NOT NULL DEFAULT '[]',
  updates jsonb NOT NULL DEFAULT '[]',
  requests jsonb NOT NULL DEFAULT '[]',
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.engagements TO authenticated;
GRANT ALL ON public.engagements TO service_role;
ALTER TABLE public.engagements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage engagements" ON public.engagements FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo engagements" ON public.engagements FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TABLE public.invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  number text NOT NULL,
  period text,
  amount integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'Due',
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.invoices TO authenticated;
GRANT ALL ON public.invoices TO service_role;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage invoices" ON public.invoices FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo invoices" ON public.invoices FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TABLE public.documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  name text NOT NULL,
  kind text NOT NULL,
  status text NOT NULL DEFAULT 'Draft',
  dated date,
  source_url text,
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.documents TO authenticated;
GRANT ALL ON public.documents TO service_role;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage documents" ON public.documents FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo documents" ON public.documents FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TABLE public.team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES public.companies(id) ON DELETE CASCADE,
  operator_id uuid REFERENCES public.operators(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text,
  role text NOT NULL,
  status text NOT NULL DEFAULT 'Active',
  is_demo boolean NOT NULL DEFAULT false,
  source text NOT NULL DEFAULT 'manual',
  external_id text,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  archived boolean NOT NULL DEFAULT false,
  CHECK ((company_id IS NOT NULL) OR (operator_id IS NOT NULL))
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.team_members TO authenticated;
GRANT ALL ON public.team_members TO service_role;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage team members" ON public.team_members FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authenticated users read demo team members" ON public.team_members FOR SELECT TO authenticated USING (is_demo = true AND archived = false);

CREATE TRIGGER companies_updated_at BEFORE UPDATE ON public.companies FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER operators_updated_at BEFORE UPDATE ON public.operators FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER operator_availability_updated_at BEFORE UPDATE ON public.operator_availability FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER operator_invitations_updated_at BEFORE UPDATE ON public.operator_invitations FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER operator_assignments_updated_at BEFORE UPDATE ON public.operator_assignments FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER operator_payouts_updated_at BEFORE UPDATE ON public.operator_payouts FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER operator_agreements_updated_at BEFORE UPDATE ON public.operator_agreements FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER clients_updated_at BEFORE UPDATE ON public.clients FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER jobs_updated_at BEFORE UPDATE ON public.jobs FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER proposals_updated_at BEFORE UPDATE ON public.proposals FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER engagements_updated_at BEFORE UPDATE ON public.engagements FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER invoices_updated_at BEFORE UPDATE ON public.invoices FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER documents_updated_at BEFORE UPDATE ON public.documents FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER team_members_updated_at BEFORE UPDATE ON public.team_members FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.companies (id, name, domain, slug, plan, status, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Northwind Manufacturing', 'northwindmfg.com', 'northwind', 'enterprise', 'active', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'Blue River Foods', 'blueriverfoods.com', 'blueriver', 'standard', 'active', true, 'demo');

INSERT INTO public.operators (id, name, headline, photo_url, highlights, functions, industries, stages, proof_points, preferences, linkedin, marketing_opt_in, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'Alan Poussaint', 'Finance operator for founder-led manufacturers and logistics businesses', '/assets/headshots/operator-headshot.webp', ARRAY[
  'Took three companies from founder-run bookkeeping to audit-ready close',
  'Carried lender and board reporting through two refinancings',
  'Hired and handed off to four permanent finance leaders'
], ARRAY['Finance', 'FP&A', 'Treasury', 'Corp dev'], ARRAY['Manufacturing', 'Logistics', 'Food & beverage'], ARRAY['Series A–C', 'PE-backed lower middle market'], ARRAY[
  'Close cycle 19 → 6 days at a $70M revenue logistics business',
  'Landed cost down 11% after co-man renegotiation',
  '$25M credit facility placed in under 90 days'
], '2–3 days per week, remote with monthly on-site, US time zones', 'https://www.linkedin.com/in/example', true, true, 'demo');

INSERT INTO public.operator_availability (operator_id, status, days_per_week, earliest_start, blackouts, travel, updated_at, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'Limited', 2, CURRENT_DATE + INTERVAL '21 days', jsonb_build_array(jsonb_build_object('id', 'b-1', 'from', (CURRENT_DATE + INTERVAL '45 days')::text, 'to', (CURRENT_DATE + INTERVAL '59 days')::text)), 'Up to 2 trips per month', CURRENT_DATE - INTERVAL '9 days', true, 'demo');

INSERT INTO public.operator_invitations (operator_id, company_id, title, commitment, location, respond_by, status, offer_type, brief, success, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Own the finance function through the next raise', '3 days / week', 'Remote · US Central overlap', CURRENT_DATE + INTERVAL '3 days', 'New', 'Operator', 'Controller left in Q1. The team needs someone to own the close, rebuild the reporting pack, and carry lender conversations while the CEO runs a raise.', ARRAY[
  'Close inside 7 business days by month three',
  'One reporting pack the board and lender both trust',
  'A permanent controller hired and onboarded'
], true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'Stand up demand planning before peak season', '10-week sprint', 'Hybrid · Chicago 2 days / month', CURRENT_DATE + INTERVAL '6 days', 'New', 'Sprint', 'Stockouts on the top ten SKUs are costing shelf space. Veep is scoping a sprint to install a forecast, reorder points, and a weekly S&OP rhythm.', ARRAY[
  'Forecast accuracy above 80% on A items',
  'Reorder points live in the ERP',
  'S&OP meeting running without Veep'
], true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', NULL, 'Interim COO through the plant transition', '4 days / week', 'On-site · Ohio', CURRENT_DATE - INTERVAL '4 days', 'Not selected', 'Operator', 'Second plant ramp with a new leadership team. Sponsor selected an operator with direct plant startup history.', ARRAY[
  'Ramp to full rate',
  'Scrap under 4%',
  'Site leadership hired'
], true, 'demo');

INSERT INTO public.operator_assignments (operator_id, company_id, job, offer_type, start_date, end_date, state, cs_contact, goals, files, updates, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Interim VP Finance', 'Operator', CURRENT_DATE - INTERVAL '58 days', CURRENT_DATE + INTERVAL '122 days', 'Active', 'Dana Reyes · Client Success', ARRAY[
  'Close inside 7 business days',
  'Rebuild the monthly reporting pack',
  'Hire and onboard a permanent controller'
], jsonb_build_array(jsonb_build_object('name', 'Engagement SOW.pdf', 'href', '#'), jsonb_build_object('name', 'Reporting pack v3.xlsx', 'href', '#')), jsonb_build_array(jsonb_build_object('id', 'u-1', 'date', (CURRENT_DATE - INTERVAL '4 days')::text, 'author', 'You', 'body', 'Close finished day 9. Two reconciliations still manual; automating next week.'), jsonb_build_object('id', 'u-2', 'date', (CURRENT_DATE - INTERVAL '11 days')::text, 'author', 'You', 'body', 'Lender pack delivered. Controller shortlist down to three candidates.')), true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'Advisory — cash forecasting', 'Advisory', CURRENT_DATE - INTERVAL '20 days', CURRENT_DATE + INTERVAL '40 days', 'Active', 'Dana Reyes · Client Success', ARRAY['13-week cash model owned by the finance lead'], jsonb_build_array(jsonb_build_object('name', 'Cash model.xlsx', 'href', '#')), jsonb_build_array(jsonb_build_object('id', 'u-3', 'date', (CURRENT_DATE - INTERVAL '6 days')::text, 'author', 'You', 'body', 'Model handed to the finance lead; running it live from next Monday.')), true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Interim Controller', 'Operator', CURRENT_DATE - INTERVAL '320 days', CURRENT_DATE - INTERVAL '140 days', 'Past', 'Marcus Hale · Client Success', ARRAY['Audit-ready close', 'Permanent controller hired'], '[]'::jsonb, '[]'::jsonb, true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'RevOps Sprint', 'Sprint', CURRENT_DATE - INTERVAL '420 days', CURRENT_DATE - INTERVAL '336 days', 'Past', 'Marcus Hale · Client Success', ARRAY['Single pipeline source of truth'], '[]'::jsonb, '[]'::jsonb, true, 'demo');

INSERT INTO public.operator_agreements (operator_id, name, kind, status, dated, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'Veep Network Agreement (2026)', 'Network agreement', 'Pending signature', CURRENT_DATE - INTERVAL '2 days', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'SOW — Northwind Manufacturing, Interim VP Finance', 'SOW', 'Signed', CURRENT_DATE - INTERVAL '60 days', true, 'demo');

INSERT INTO public.operator_payouts (operator_id, engagement, payout_date, amount, status, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'Northwind Manufacturing — Interim VP Finance', CURRENT_DATE - INTERVAL '3 days', 14500, 'Processing', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'Northwind Manufacturing — Interim VP Finance', CURRENT_DATE - INTERVAL '33 days', 14500, 'Paid', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'Northwind Manufacturing — Interim VP Finance', CURRENT_DATE - INTERVAL '63 days', 12800, 'Paid', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'Blue River Foods — Advisory', CURRENT_DATE - INTERVAL '94 days', 6000, 'Paid', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'Vertical SaaS — RevOps Sprint', CURRENT_DATE - INTERVAL '124 days', 18000, 'Paid', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'Vertical SaaS — RevOps Sprint', CURRENT_DATE - INTERVAL '155 days', 18000, 'Paid', true, 'demo');

INSERT INTO public.clients (id, company_id, name, email, role, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a31', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Priya Raman', 'priya@acmecapital.com', 'Admin', true, 'demo');

INSERT INTO public.jobs (id, company_id, title, status, urgency, owned_today, success, constraints, timeline, created_at, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b11', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Own the finance function through the next raise', 'In engagement', 'Immediate', 'founder', 'Close inside 7 days, one trusted reporting pack, permanent controller hired.', NULL, jsonb_build_array(jsonb_build_object('date', (CURRENT_DATE - INTERVAL '74 days')::text, 'note', 'Job submitted'), jsonb_build_object('date', (CURRENT_DATE - INTERVAL '71 days')::text, 'note', 'Scoping call with Veep'), jsonb_build_object('date', (CURRENT_DATE - INTERVAL '66 days')::text, 'note', 'Shortlist ready — 2 operators'), jsonb_build_object('date', (CURRENT_DATE - INTERVAL '62 days')::text, 'note', 'Proposal sent'), jsonb_build_object('date', (CURRENT_DATE - INTERVAL '58 days')::text, 'note', 'Engagement started')), CURRENT_DATE - INTERVAL '74 days', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b12', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'Stand up demand planning before peak season', 'Proposal out', 'Within 30 days', 'internal', 'Forecast accuracy above 80% on A items and a live S&OP rhythm.', 'Must work inside the existing ERP.', jsonb_build_array(jsonb_build_object('date', (CURRENT_DATE - INTERVAL '19 days')::text, 'note', 'Job submitted'), jsonb_build_object('date', (CURRENT_DATE - INTERVAL '16 days')::text, 'note', 'Scoping call with Veep'), jsonb_build_object('date', (CURRENT_DATE - INTERVAL '9 days')::text, 'note', 'Shortlist ready — 3 operators'), jsonb_build_object('date', (CURRENT_DATE - INTERVAL '5 days')::text, 'note', 'Proposal sent')), CURRENT_DATE - INTERVAL '19 days', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b13', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Post-acquisition back office integration', 'In review', 'Within 60 days', 'vendor', 'One ERP, one payroll, one close across all three entities.', NULL, jsonb_build_array(jsonb_build_object('date', (CURRENT_DATE - INTERVAL '6 days')::text, 'note', 'Job submitted'), jsonb_build_object('date', (CURRENT_DATE - INTERVAL '3 days')::text, 'note', 'Veep reviewing scope')), CURRENT_DATE - INTERVAL '6 days', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b14', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Interim plant leadership for the second line', 'On hold', 'This quarter', 'none', 'Ramp the second line to full rate with scrap under 4%.', NULL, jsonb_build_array(jsonb_build_object('date', (CURRENT_DATE - INTERVAL '40 days')::text, 'note', 'Job submitted'), jsonb_build_object('date', (CURRENT_DATE - INTERVAL '28 days')::text, 'note', 'Paused by client pending capex approval')), CURRENT_DATE - INTERVAL '40 days', true, 'demo');

INSERT INTO public.proposals (company_id, job_id, name, sent_on, status, commercial, inclusions, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b12', 'Demand planning sprint', CURRENT_DATE - INTERVAL '5 days', 'Sent', jsonb_build_array(jsonb_build_object('label', 'Offer type', 'value', 'Sprint'), jsonb_build_object('label', 'Term', 'value', '10 weeks'), jsonb_build_object('label', 'Commitment', 'value', '3 days / week'), jsonb_build_object('label', 'Fee', 'value', '$54,000 total, billed monthly')), ARRAY[
  'Matched operator with peak-season planning history',
  'Forecast, reorder points, and S&OP cadence installed in your ERP',
  'Weekly written updates and a named Veep client success contact',
  'Handover to your internal owner in the final two weeks'
], true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b11', 'Interim VP Finance', CURRENT_DATE - INTERVAL '62 days', 'Accepted', jsonb_build_array(jsonb_build_object('label', 'Offer type', 'value', 'Operator'), jsonb_build_object('label', 'Term', 'value', '6 months'), jsonb_build_object('label', 'Commitment', 'value', '3 days / week'), jsonb_build_object('label', 'Fee', 'value', '$29,000 / month')), ARRAY[
  'Operator deployed within 10 days',
  'Close, reporting pack, and lender support',
  'Permanent controller search support'
], true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b14', 'Plant leadership — interim COO', CURRENT_DATE - INTERVAL '34 days', 'Expired', jsonb_build_array(jsonb_build_object('label', 'Offer type', 'value', 'Operator'), jsonb_build_object('label', 'Term', 'value', '5 months'), jsonb_build_object('label', 'Commitment', 'value', '4 days / week'), jsonb_build_object('label', 'Fee', 'value', '$36,000 / month')), ARRAY[
  'On-site operator',
  'Ramp plan and daily management system'
], true, 'demo');

INSERT INTO public.engagements (company_id, operator_id, job_id, offer_type, start_date, end_date, state, operator_summary, cs_contact, goals, files, updates, requests, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b11', 'Operator', CURRENT_DATE - INTERVAL '58 days', CURRENT_DATE + INTERVAL '122 days', 'Active', jsonb_build_object('name', 'Alan Poussaint', 'headline', 'Finance operator — manufacturing and logistics', 'photo', '/assets/headshots/operator-alan-poussaint.png'), 'Dana Reyes · Client Success', ARRAY[
  'Close inside 7 business days by month three',
  'One reporting pack the board and lender both trust',
  'Permanent controller hired and onboarded'
], jsonb_build_array(jsonb_build_object('name', 'SOW — Interim VP Finance.pdf', 'href', '#'), jsonb_build_object('name', 'Reporting pack v3.xlsx', 'href', '#')), jsonb_build_array(jsonb_build_object('id', 'cu-1', 'date', (CURRENT_DATE - INTERVAL '4 days')::text, 'author', 'Alan Poussaint', 'body', 'Close finished day 9. Two reconciliations still manual; automating next week.'), jsonb_build_object('id', 'cu-2', 'date', (CURRENT_DATE - INTERVAL '11 days')::text, 'author', 'Alan Poussaint', 'body', 'Lender pack delivered. Controller shortlist down to three candidates.')), '[]'::jsonb, true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380b12', 'Sprint', CURRENT_DATE - INTERVAL '250 days', CURRENT_DATE - INTERVAL '166 days', 'Past', jsonb_build_object('name', 'Erika Velazquez', 'headline', 'Supply chain operator — food and beverage', 'photo', '/assets/headshots/operator-erika-velazquez.png'), 'Marcus Hale · Client Success', ARRAY['Co-man transition without a service interruption'], jsonb_build_array(jsonb_build_object('name', 'Sprint closeout.pdf', 'href', '#')), '[]'::jsonb, '[]'::jsonb, true, 'demo');

INSERT INTO public.invoices (company_id, number, period, amount, status, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'VP-1043', 'Current month', 29000, 'Due', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'VP-1029', 'Last month', 29000, 'Paid', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'VP-1014', 'Two months ago', 29000, 'Paid', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'VP-0998', 'Three months ago', 18000, 'Overdue', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'VP-0981', 'Four months ago', 18000, 'Paid', true, 'demo');

INSERT INTO public.documents (company_id, name, kind, status, dated, is_demo, source) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Master Services Agreement', 'MSA', 'Signed', CURRENT_DATE - INTERVAL '80 days', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'SOW — Interim VP Finance', 'SOW', 'Signed', CURRENT_DATE - INTERVAL '60 days', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'Mutual NDA', 'NDA', 'Signed', CURRENT_DATE - INTERVAL '22 days', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'Proposal — Demand planning sprint', 'Proposal', 'Pending signature', CURRENT_DATE - INTERVAL '5 days', true, 'demo');

INSERT INTO public.team_members (company_id, operator_id, name, email, role, status, is_demo, source) VALUES
(NULL, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'Dana Reyes', 'dana@veep.co', 'Veep CS', 'Active', true, 'demo'),
(NULL, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 'Alan Poussaint', 'operator@veep.co', 'Operator', 'Active', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', NULL, 'Priya Raman', 'priya@acmecapital.com', 'Admin', 'Active', true, 'demo'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', NULL, 'Tom Whitfield', 'tom@northwindmfg.com', 'Viewer', 'Active', true, 'demo');
