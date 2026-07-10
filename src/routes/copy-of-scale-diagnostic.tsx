import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/copy-of-scale-diagnostic")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
