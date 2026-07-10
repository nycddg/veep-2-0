import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/agencies")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
