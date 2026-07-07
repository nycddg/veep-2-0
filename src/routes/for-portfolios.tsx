import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/for-portfolios")({
  beforeLoad: () => { throw redirect({ to: "/", hash: "portfolios" }); },
});
