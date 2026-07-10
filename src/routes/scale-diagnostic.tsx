import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/scale-diagnostic")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
