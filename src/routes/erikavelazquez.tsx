import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/erikavelazquez")({
  beforeLoad: () => { throw redirect({ to: "/", hash: "operators" }); },
});
