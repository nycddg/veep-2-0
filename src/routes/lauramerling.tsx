import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/lauramerling")({
  beforeLoad: () => { throw redirect({ to: "/", hash: "operators", statusCode: 301 }); },
});
