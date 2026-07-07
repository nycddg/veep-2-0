import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/for-companies")({
  beforeLoad: () => { throw redirect({ to: "/", hash: "solution" }); },
});
