import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/alasdairlloydjones")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
