-- Form intake for veep.work (replaces Lovable → Wix connector)
-- Project: ynsjyojjnxavodiglzwk
-- Safe to re-run.

create extension if not exists pgcrypto;

create table if not exists public.form_submissions (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('join', 'contact', 'audit')),
  email text not null,
  name text,
  payload jsonb not null default '{}'::jsonb,
  source_path text,
  resume_path text,
  resume_filename text,
  resume_content_type text,
  resume_size int,
  notify_status text not null default 'skipped'
    check (notify_status in ('skipped', 'sent', 'failed', 'pending')),
  notify_error text,
  created_at timestamptz not null default now()
);

create index if not exists form_submissions_created_at_idx
  on public.form_submissions (created_at desc);
create index if not exists form_submissions_kind_idx
  on public.form_submissions (kind);
create index if not exists form_submissions_email_idx
  on public.form_submissions (email);

alter table public.form_submissions enable row level security;

-- No public policies: only service_role (bypasses RLS) writes/reads from serverFns.
drop policy if exists "form_submissions_no_public" on public.form_submissions;

-- Storage bucket for resumes (private)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'form-uploads',
  'form-uploads',
  false,
  10485760,
  array[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- No public storage policies — service_role only
