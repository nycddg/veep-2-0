import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/fundraising")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
