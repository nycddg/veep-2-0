## Remove border from operator headshot container

The selected `<img>` element in `OperatorCanvas.tsx` does not have a border itself. The visible border comes from its parent container on line 19, which currently includes `border border-white/10`.

### Change
In `src/components/site/OperatorCanvas.tsx`, remove `border border-white/10` from the headshot container `div` on line 19. The remaining classes will be:

```
relative z-10 mx-auto w-full aspect-[16/9] max-w-2xl rounded-3xl bg-gradient-to-br from-[#1a1c2e] to-[#0a0c16] overflow-hidden shadow-2xl
```

This keeps the rounded corners, gradient background, and shadow; only the faint white border is removed.

### Verification
After the edit, run `bun run build` to confirm no type or build errors.