import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/compare")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/compare" || location.pathname === "/compare/") {
      throw redirect({ to: "/how-it-works", hash: "vs" });
    }
  },
  component: () => <Outlet />,
});
