import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/officehours")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
