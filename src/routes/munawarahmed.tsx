import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/munawarahmed")({
  beforeLoad: () => {
    throw redirect({ to: "/for-companies", hash: "operators" });
  },
});
