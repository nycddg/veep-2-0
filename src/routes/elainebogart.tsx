import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/elainebogart")({
  beforeLoad: () => {
    throw redirect({ to: "/for-companies", hash: "operators" });
  },
});
