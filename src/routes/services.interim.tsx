import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/interim")({
  beforeLoad: () => {
    throw redirect({ to: "/for-companies", hash: "leadership" });
  },
});
