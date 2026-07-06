import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/ai-operators")({
  beforeLoad: () => { throw redirect({ to: "/how-it-works", hash: "ai" }); },
});
