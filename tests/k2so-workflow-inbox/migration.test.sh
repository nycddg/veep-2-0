#!/usr/bin/env bash
# Throwaway LOCAL Postgres only. Never links to a Supabase project.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
MIGRATION="$ROOT/supabase/migrations/20261112190000_workflow_inbox.sql"
PGDATA="$(mktemp -d /tmp/k2so-wf-inbox-pg.XXXXXX)"
LOG="$PGDATA/postgres.log"
PORT="$((55432 + RANDOM % 200))"

export PATH="/usr/lib/postgresql/16/bin:/usr/lib/postgresql/15/bin:/usr/lib/postgresql/14/bin:/usr/bin:$PATH"

if ! command -v initdb >/dev/null 2>&1; then
  echo "initdb not found; installing postgresql locally" >&2
  sudo apt-get update -qq
  sudo DEBIAN_FRONTEND=noninteractive apt-get install -y -qq postgresql postgresql-contrib postgresql-client
fi

if ! command -v initdb >/dev/null 2>&1; then
  echo "FAIL: initdb still not on PATH" >&2
  exit 1
fi

initdb --no-sync -A trust -U "$USER" -D "$PGDATA" >/dev/null
pg_ctl -D "$PGDATA" -l "$LOG" -o "-p $PORT -k $PGDATA --listen_addresses=127.0.0.1" -w start >/dev/null

cleanup() {
  pg_ctl -D "$PGDATA" -m fast stop >/dev/null 2>&1 || true
  rm -rf "$PGDATA"
}
trap cleanup EXIT

export PGHOST=127.0.0.1
export PGPORT="$PORT"
export PGUSER="$USER"
export PGDATABASE=postgres

createdb wf_inbox_test
export PGDATABASE=wf_inbox_test

psql -v ON_ERROR_STOP=1 <<'SQL'
do $$
begin
  if not exists (select 1 from pg_roles where rolname = 'anon') then
    create role anon nologin noinherit;
  end if;
  if not exists (select 1 from pg_roles where rolname = 'authenticated') then
    create role authenticated nologin noinherit;
  end if;
  if not exists (select 1 from pg_roles where rolname = 'service_role') then
    create role service_role nologin noinherit bypassrls;
  else
    begin
      alter role service_role with bypassrls;
    exception when others then
      null;
    end;
  end if;
end
$$;
grant usage on schema public to anon, authenticated, service_role;
SQL

echo "Applying migration (1/2)"
psql -v ON_ERROR_STOP=1 -f "$MIGRATION" >/dev/null
echo "Applying migration (2/2)"
psql -v ON_ERROR_STOP=1 -f "$MIGRATION" >/dev/null

SHA_A="$(python3 -c 'print("a"*64)')"
SHA_B="$(python3 -c 'print("b"*64)')"
SHA_C="$(python3 -c 'print("c"*64)')"
export SHA_A SHA_B SHA_C

fail() {
  echo "FAIL: $*" >&2
  exit 1
}

psql_service() {
  psql -v ON_ERROR_STOP=1 -tA -c "SET ROLE service_role; $*" \
    | sed '/^SET$/d;/^$/d'
}

echo "new / duplicate / conflict outcomes"
NEW_OUT="$(psql_service "SELECT outcome FROM record_workflow_inbox('gushwork', 'lead-1', '$SHA_A', 'gushwork-leads', 'lead-1.json');")"
[[ "$NEW_OUT" == "new" ]] || fail "first insert expected new, got $NEW_OUT"

DUP_OUT="$(psql_service "SELECT outcome FROM record_workflow_inbox('gushwork', 'lead-1', '$SHA_A', 'gushwork-leads', 'lead-1.json');")"
[[ "$DUP_OUT" == "duplicate" ]] || fail "same sha expected duplicate, got $DUP_OUT"

CONFLICT_OUT="$(psql_service "SELECT outcome FROM record_workflow_inbox('gushwork', 'lead-1', '$SHA_B', 'gushwork-leads', 'lead-1.json');")"
[[ "$CONFLICT_OUT" == "conflict" ]] || fail "different sha expected conflict, got $CONFLICT_OUT"

# original sha kept; new sha appended once
KEPT="$(psql_service "SELECT payload_sha256 FROM workflow_inbox WHERE provider='gushwork' AND source_id='lead-1';")"
[[ "$KEPT" == "$SHA_A" ]] || fail "original payload_sha256 not kept, got $KEPT"

STATUS="$(psql_service "SELECT status FROM workflow_inbox WHERE provider='gushwork' AND source_id='lead-1';")"
[[ "$STATUS" == "conflict" ]] || fail "status expected conflict, got $STATUS"

ARR="$(psql_service "SELECT array_to_string(conflict_sha256, ',') FROM workflow_inbox WHERE provider='gushwork' AND source_id='lead-1';")"
[[ "$ARR" == "$SHA_B" ]] || fail "conflict_sha256 expected $SHA_B, got $ARR"

psql_service "SELECT outcome FROM record_workflow_inbox('gushwork', 'lead-1', '$SHA_B', null, null);" >/dev/null
ARR2="$(psql_service "SELECT array_to_string(conflict_sha256, ',') FROM workflow_inbox WHERE provider='gushwork' AND source_id='lead-1';")"
[[ "$ARR2" == "$SHA_B" ]] || fail "conflict sha should not duplicate, got $ARR2"

psql_service "SELECT outcome FROM record_workflow_inbox('gushwork', 'lead-1', '$SHA_C', null, null);" >/dev/null
ARR3="$(psql_service "SELECT array_to_string(conflict_sha256, ',') FROM workflow_inbox WHERE provider='gushwork' AND source_id='lead-1';")"
[[ "$ARR3" == "$SHA_B,$SHA_C" ]] || fail "expected both conflict shas, got $ARR3"

echo "provider scoping"
OTHER="$(psql_service "SELECT outcome FROM record_workflow_inbox('other', 'lead-1', '$SHA_A', null, null);")"
[[ "$OTHER" == "new" ]] || fail "other provider same source_id should be new, got $OTHER"

echo "one effect per idempotency key"
INBOX_ID="$(psql_service "SELECT id::text FROM workflow_inbox WHERE provider='gushwork' AND source_id='lead-1';")"
ID1="$(psql_service "SELECT id::text FROM claim_workflow_effect('$INBOX_ID'::uuid, 'copper_upsert', 'gushwork:lead-1:copper');")"
ID2="$(psql_service "SELECT id::text FROM claim_workflow_effect('$INBOX_ID'::uuid, 'copper_upsert', 'gushwork:lead-1:copper');")"
[[ -n "$ID1" && "$ID1" == "$ID2" ]] || fail "second claim should return the same effect row ($ID1 vs $ID2)"
COUNT="$(psql_service "SELECT count(*)::text FROM workflow_effects WHERE idempotency_key='gushwork:lead-1:copper';")"
[[ "$COUNT" == "1" ]] || fail "expected one effect row, got $COUNT"
STATE="$(psql_service "SELECT state FROM workflow_effects WHERE id='$ID1'::uuid;")"
[[ "$STATE" == "intent" ]] || fail "claimed effect should stay intent, got $STATE"

echo "done requires readback"
if psql -v ON_ERROR_STOP=1 -c "INSERT INTO workflow_effects (inbox_id, effect_kind, idempotency_key, state) VALUES ('$INBOX_ID'::uuid, 'needs_readback', 'done-without-readback', 'done');" >/tmp/k2so-done.err 2>&1; then
  fail "done without readback should be rejected"
fi
grep -qi "violat" /tmp/k2so-done.err || fail "expected check violation for done without readback: $(cat /tmp/k2so-done.err)"
psql -v ON_ERROR_STOP=1 -c "INSERT INTO workflow_effects (inbox_id, effect_kind, idempotency_key, state, readback) VALUES ('$INBOX_ID'::uuid, 'needs_readback', 'done-with-readback', 'done', '{\"ok\":true}'::jsonb);" >/dev/null

echo "bad inputs rejected"
expect_fail_rpc() {
  local sql="$1"
  local label="$2"
  if psql -v ON_ERROR_STOP=1 -c "SET ROLE service_role; $sql" >/tmp/k2so-bad.out 2>/tmp/k2so-bad.err; then
    fail "$label should have been rejected"
  fi
}
expect_fail_rpc "SELECT * FROM record_workflow_inbox('GUSH', 'x', '$SHA_A', null, null);" "uppercase provider"
expect_fail_rpc "SELECT * FROM record_workflow_inbox('', 'x', '$SHA_A', null, null);" "empty provider"
expect_fail_rpc "SELECT * FROM record_workflow_inbox('gushwork', '', '$SHA_A', null, null);" "empty source_id"
expect_fail_rpc "SELECT * FROM record_workflow_inbox('gushwork', '$(python3 -c 'print("x"*201)')', '$SHA_A', null, null);" "source_id too long"
expect_fail_rpc "SELECT * FROM record_workflow_inbox('gushwork', 'x', '$(python3 -c 'print("A"*64)')', null, null);" "uppercase sha"
expect_fail_rpc "SELECT * FROM record_workflow_inbox('gushwork', 'x', 'abcd', null, null);" "short sha"
expect_fail_rpc "SELECT * FROM claim_workflow_effect('$INBOX_ID'::uuid, '', 'k');" "empty effect_kind"
expect_fail_rpc "SELECT * FROM claim_workflow_effect('$INBOX_ID'::uuid, 'kind', '');" "empty idempotency_key"

echo "deleting an inbox row with effects is blocked"
if psql -v ON_ERROR_STOP=1 -c "DELETE FROM workflow_inbox WHERE id='$INBOX_ID'::uuid;" >/tmp/k2so-del.out 2>/tmp/k2so-del.err; then
  fail "delete of inbox with effects should be blocked"
fi
grep -qiE "restrict|foreign key|violat" /tmp/k2so-del.err || fail "expected FK restrict: $(cat /tmp/k2so-del.err)"

echo "anon / authenticated cannot select or call RPCs"
expect_denied() {
  local role="$1"
  local sql="$2"
  local label="$3"
  if psql -v ON_ERROR_STOP=1 -c "SET ROLE $role; $sql" >/tmp/k2so-deny.out 2>/tmp/k2so-deny.err; then
    fail "$label should be denied for $role"
  fi
  grep -qiE "permission denied|must be owner" /tmp/k2so-deny.err || fail "$label ($role) unexpected error: $(cat /tmp/k2so-deny.err)"
}
expect_denied anon "SELECT * FROM workflow_inbox;" "select inbox"
expect_denied anon "SELECT * FROM workflow_effects;" "select effects"
expect_denied anon "SELECT * FROM record_workflow_inbox('gushwork', 'anon-1', '$SHA_A', null, null);" "record rpc"
expect_denied anon "SELECT * FROM claim_workflow_effect('$INBOX_ID'::uuid, 'k', 'anon-key');" "claim rpc"
expect_denied authenticated "SELECT * FROM workflow_inbox;" "select inbox"
expect_denied authenticated "SELECT * FROM workflow_effects;" "select effects"
expect_denied authenticated "SELECT * FROM record_workflow_inbox('gushwork', 'auth-1', '$SHA_A', null, null);" "record rpc"
expect_denied authenticated "SELECT * FROM claim_workflow_effect('$INBOX_ID'::uuid, 'k', 'auth-key');" "claim rpc"

echo "service_role can select and call RPCs"
SRV_COUNT="$(psql_service "SELECT count(*)::text FROM workflow_inbox;")"
[[ "$SRV_COUNT" -ge 1 ]] || fail "service_role should select inbox rows, got $SRV_COUNT"
SRV_NEW="$(psql_service "SELECT outcome FROM record_workflow_inbox('gushwork', 'lead-service', '$SHA_A', null, null);")"
[[ "$SRV_NEW" == "new" ]] || fail "service_role record rpc failed: $SRV_NEW"
SRV_CLAIM="$(psql_service "SELECT state FROM claim_workflow_effect((SELECT id FROM workflow_inbox WHERE source_id='lead-service'), 'notify', 'svc-key-1');")"
[[ "$SRV_CLAIM" == "intent" ]] || fail "service_role claim rpc failed: $SRV_CLAIM"

echo "ALL MIGRATION TESTS PASSED"
