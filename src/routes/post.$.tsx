import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/post/$")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
