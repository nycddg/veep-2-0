import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/fractional-cfo")({
  beforeLoad: () => {
    throw redirect({ to: "/for-companies", hash: "capital-readiness" });
  },
});
