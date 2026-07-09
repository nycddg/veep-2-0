Replace the "OP" placeholder in the OperatorCanvas headshot slot with the uploaded portrait image.

1. Create a Lovable Asset pointer from `/mnt/user-uploads/Announcement_Cards_20-2.png` to `src/assets/operator-headshot.png.asset.json` using the `lovable-assets` CLI.
2. Import the asset pointer in `src/components/site/OperatorCanvas.tsx`.
3. Swap the inner circular "OP" placeholder div for an `<img>` that uses the asset URL, keeping the existing `aspect-[16/9]`, `rounded-3xl`, `overflow-hidden`, and `object-cover` behavior so the portrait fills the frame.
4. Preserve the ambient glow, match badge, and match matrix overlays unchanged.
5. Verify the preview renders the portrait in the headshot slot without distortion or layout breakage.