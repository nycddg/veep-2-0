import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/proof")({
  beforeLoad: () => { throw redirect({ to: "/", hash: "proof" }); },
});
