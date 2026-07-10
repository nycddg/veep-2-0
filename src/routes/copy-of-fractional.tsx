import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/copy-of-fractional")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
