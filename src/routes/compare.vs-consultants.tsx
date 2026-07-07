import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/compare/vs-consultants")({
  beforeLoad: () => { throw redirect({ to: "/", hash: "vs" }); },
});
