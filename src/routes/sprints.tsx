import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sprints")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
