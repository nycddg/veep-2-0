import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/operators")({
  beforeLoad: () => { throw redirect({ to: "/", hash: "operators" }); },
});
