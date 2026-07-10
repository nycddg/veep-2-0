import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/operatingpartners")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
