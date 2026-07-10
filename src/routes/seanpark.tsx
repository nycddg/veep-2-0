import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/seanpark")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
