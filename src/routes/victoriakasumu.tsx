import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/victoriakasumu")({
  beforeLoad: () => { throw redirect({ to: "/", hash: "operators" }); },
});
