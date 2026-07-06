import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/executive-bench")({
  beforeLoad: () => { throw redirect({ to: "/for-portfolios" }); },
});
