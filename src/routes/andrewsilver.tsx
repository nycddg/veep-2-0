import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/andrewsilver")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
