import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/jenniferkasper")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
