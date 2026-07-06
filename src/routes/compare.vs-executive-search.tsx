import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/compare/vs-executive-search")({
  beforeLoad: () => { throw redirect({ to: "/how-it-works", hash: "vs" }); },
});
