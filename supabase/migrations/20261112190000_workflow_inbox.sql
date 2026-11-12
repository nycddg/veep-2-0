-- Workflow inbox ledger + effect intents.
-- Re-runnable. Safe to apply locally. This file is not applied to any remote
-- database by the PR that introduces it.

create extension if not exists pgcrypto;

create table if not exists public.workflow_inbox (
  id uuid primary key default gen_random_uuid(),
  provider text not null check (provider ~ '^[a-z0-9_-]{1,40}$'),
  source_id text not null check (char_length(source_id) between 1 and 200),
  payload_sha256 text not null check (payload_sha256 ~ '^[0-9a-f]{64}$'),
  storage_bucket text,
  storage_path text,
  status text not null default 'new'
    check (status in ('new', 'processing', 'done', 'skipped', 'conflict', 'failed')),
  conflict_sha256 text[] not null default '{}'::text[],
  received_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (provider, source_id)
);

create index if not exists workflow_inbox_status_received_at_idx
  on public.workflow_inbox (status, received_at);

create table if not exists public.workflow_effects (
  id uuid primary key default gen_random_uuid(),
  inbox_id uuid not null references public.workflow_inbox (id) on delete restrict,
  effect_kind text not null check (char_length(effect_kind) between 1 and 80),
  idempotency_key text not null unique check (char_length(idempotency_key) between 1 and 300),
  state text not null default 'intent'
    check (state in ('intent', 'uncertain', 'done', 'failed', 'cancelled')),
  attempts integer not null default 0 check (attempts >= 0),
  target_ref text,
  readback jsonb,
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (state <> 'done' or readback is not null)
);

create index if not exists workflow_effects_pending_idx
  on public.workflow_effects (state, created_at)
  where state in ('intent', 'uncertain');

alter table public.workflow_inbox enable row level security;
alter table public.workflow_effects enable row level security;

revoke all on table public.workflow_inbox from public;
revoke all on table public.workflow_effects from public;

do $$
begin
  if exists (select 1 from pg_roles where rolname = 'anon') then
    revoke all on table public.workflow_inbox from anon;
    revoke all on table public.workflow_effects from anon;
  end if;
  if exists (select 1 from pg_roles where rolname = 'authenticated') then
    revoke all on table public.workflow_inbox from authenticated;
    revoke all on table public.workflow_effects from authenticated;
  end if;
  if exists (select 1 from pg_roles where rolname = 'service_role') then
    grant all on table public.workflow_inbox to service_role;
    grant all on table public.workflow_effects to service_role;
  end if;
end
$$;

create or replace function public.record_workflow_inbox(
  p_provider text,
  p_source_id text,
  p_sha256 text,
  p_bucket text default null,
  p_path text default null
)
returns table (inbox_id uuid, outcome text)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
#variable_conflict use_column
declare
  inserted_id uuid;
  rec public.workflow_inbox%rowtype;
begin
  if p_provider is null or p_provider !~ '^[a-z0-9_-]{1,40}$' then
    raise exception 'invalid_provider' using errcode = '22023';
  end if;
  if p_source_id is null or char_length(p_source_id) < 1 or char_length(p_source_id) > 200 then
    raise exception 'invalid_source_id' using errcode = '22023';
  end if;
  if p_sha256 is null or p_sha256 !~ '^[0-9a-f]{64}$' then
    raise exception 'invalid_sha256' using errcode = '22023';
  end if;

  insert into public.workflow_inbox (
    provider, source_id, payload_sha256, storage_bucket, storage_path
  ) values (
    p_provider, p_source_id, p_sha256, p_bucket, p_path
  )
  on conflict (provider, source_id) do nothing
  returning id into inserted_id;

  if inserted_id is not null then
    inbox_id := inserted_id;
    outcome := 'new';
    return next;
    return;
  end if;

  select * into rec
  from public.workflow_inbox
  where provider = p_provider and source_id = p_source_id
  for update;

  if rec.payload_sha256 = p_sha256 then
    inbox_id := rec.id;
    outcome := 'duplicate';
    return next;
    return;
  end if;

  update public.workflow_inbox w
  set
    status = 'conflict',
    conflict_sha256 = case
      when p_sha256 = any (w.conflict_sha256) then w.conflict_sha256
      else array_append(w.conflict_sha256, p_sha256)
    end,
    updated_at = now()
  where w.id = rec.id;

  inbox_id := rec.id;
  outcome := 'conflict';
  return next;
end;
$$;

create or replace function public.claim_workflow_effect(
  p_inbox_id uuid,
  p_effect_kind text,
  p_idempotency_key text
)
returns public.workflow_effects
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  rec public.workflow_effects;
begin
  if p_inbox_id is null then
    raise exception 'invalid_inbox_id' using errcode = '22023';
  end if;
  if p_effect_kind is null or char_length(p_effect_kind) < 1 or char_length(p_effect_kind) > 80 then
    raise exception 'invalid_effect_kind' using errcode = '22023';
  end if;
  if p_idempotency_key is null
     or char_length(p_idempotency_key) < 1
     or char_length(p_idempotency_key) > 300 then
    raise exception 'invalid_idempotency_key' using errcode = '22023';
  end if;

  insert into public.workflow_effects (
    inbox_id, effect_kind, idempotency_key, state
  ) values (
    p_inbox_id, p_effect_kind, p_idempotency_key, 'intent'
  )
  on conflict (idempotency_key) do nothing
  returning * into rec;

  if rec.id is null then
    select * into rec
    from public.workflow_effects
    where idempotency_key = p_idempotency_key;
  end if;

  return rec;
end;
$$;

revoke all on function public.record_workflow_inbox(text, text, text, text, text) from public;
revoke all on function public.claim_workflow_effect(uuid, text, text) from public;

do $$
begin
  if exists (select 1 from pg_roles where rolname = 'anon') then
    revoke all on function public.record_workflow_inbox(text, text, text, text, text) from anon;
    revoke all on function public.claim_workflow_effect(uuid, text, text) from anon;
  end if;
  if exists (select 1 from pg_roles where rolname = 'authenticated') then
    revoke all on function public.record_workflow_inbox(text, text, text, text, text) from authenticated;
    revoke all on function public.claim_workflow_effect(uuid, text, text) from authenticated;
  end if;
  if exists (select 1 from pg_roles where rolname = 'service_role') then
    grant execute on function public.record_workflow_inbox(text, text, text, text, text) to service_role;
    grant execute on function public.claim_workflow_effect(uuid, text, text) to service_role;
  end if;
end
$$;
