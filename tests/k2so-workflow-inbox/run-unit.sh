#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="${TMPDIR:-/tmp}/k2so-workflow-inbox-unit.mjs"
FAKE="$ROOT/tests/k2so-workflow-inbox/fake-supabase.ts"
ENTRY="$ROOT/tests/k2so-workflow-inbox/unit.test.ts"

export PATH="${ROOT}/node_modules/.bin:${HOME}/.bun/bin:${PATH}"

if command -v esbuild >/dev/null 2>&1; then
  ESBUILD=(esbuild)
elif command -v bun >/dev/null 2>&1; then
  ESBUILD=(bunx esbuild)
else
  ESBUILD=(npx --yes esbuild)
fi

"${ESBUILD[@]}" "$ENTRY" \
  --bundle \
  --platform=node \
  --format=esm \
  --target=node22 \
  --packages=bundle \
  --alias:@supabase/supabase-js="$FAKE" \
  --outfile="$OUT"

node --test "$OUT"
