# Replace "full-time hires" → "permanent hires"

## Straight swaps (no grammar issue)

- `src/routes/about.tsx:35` — "Save 40–80% vs. firms or full-time hires" → "…permanent hires"
- `src/routes/meetveep.tsx:10` — same line → "…permanent hires"
- `src/routes/index.tsx:453` — "full-time hires." → "permanent hires."
- `src/routes/faq.tsx:43` — "before a full-time hire makes sense" → "before a permanent hire makes sense"
- `src/components/site/AudienceTabs.tsx:29` — "Function scoping before a full-time hire" → "…before a permanent hire"
- `src/components/site/AudienceTabs.tsx:49` — "Clarifies what the full-time hire should own" → "…the permanent hire should own"
- `src/components/site/TriggerBento.tsx:35` — "a full-time hire is too…" → "a permanent hire is too…"

## Extending the swap to "full-time executive hire" (same concept)

- `src/routes/index.tsx:316` — "before a full-time executive hire makes sense" → "before a permanent executive hire makes sense"
- `src/routes/index.tsx:498` — "full-time executive hire makes sense" → "permanent executive hire makes sense"
- `src/routes/meetveep.tsx:72` — "full-time executive hire" → "permanent executive hire"

Proceeding with the above unless you object.

## Needs your approval (copy/grammar judgment)

1. `**src/routes/faq.tsx:16` and `src/routes/index.tsx:332**` (identical sentence):
  > "Search is for permanent hiring. Veep is for critical work that needs senior ownership before the **full-time hire** makes sense."
  >  Direct swap creates "permanent hiring… permanent hire" repetition in adjacent sentences. Options:
  - **A.** Swap anyway: "…before the permanent hire makes sense."
  - **B.** Rephrase second sentence: "…before that permanent hire makes sense."
  - **C.** Leave the second instance as-is (only "hires" plural is in scope).
2. `**src/routes/index.tsx:197**`:
  > "A **full-time executive** may be the right answer eventually…"
  >  Here "full-time" modifies the person, not "hire". "A permanent executive" reads oddly. Options:
  - **A.** Leave as-is (out of scope).
  - **B.** "A permanent executive hire may be the right answer eventually…"
  - **C.** "A full-time executive hire may be the right answer eventually…" (keep, minor tweak).
3. `**src/components/site/CaseSwitcher.tsx:25**`:
  > "Interim CFO owned the seat while the **full-time search** ran…"
  >  "Full-time search" = the search for the permanent hire. Options:
  - **A.** Leave as-is (different phrase, arguably out of scope).
  - **B.** "…while the permanent search ran…"

Tell me A/B/C for each and I'll implement in one pass.  
  
1. leave as is  
2. "a permanent hire"  
3. "while the search ran" 

&nbsp;