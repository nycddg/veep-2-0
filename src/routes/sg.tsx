import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sg")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
