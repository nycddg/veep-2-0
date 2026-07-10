import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/fractional")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
