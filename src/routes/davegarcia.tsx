import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/davegarcia")({
  beforeLoad: () => { throw redirect({ to: "/", hash: "operators" }); },
});
