import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/memberdashboard")({
  beforeLoad: () => { throw redirect({ to: "/portal/operator", replace: true }); },
});
