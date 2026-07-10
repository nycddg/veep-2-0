import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/copy-of-mark-newhouse-profile-page")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
