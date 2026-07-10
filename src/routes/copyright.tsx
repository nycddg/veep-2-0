import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/copyright")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
