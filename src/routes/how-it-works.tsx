import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/how-it-works")({
  beforeLoad: () => { throw redirect({ to: "/for-companies", hash: "how" }); },
});
