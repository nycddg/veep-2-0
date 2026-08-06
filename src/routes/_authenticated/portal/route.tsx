import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PortalShell } from "@/components/portal/PortalShell";
import { PortalStoreProvider } from "@/lib/portal/mock-store";

export const Route = createFileRoute("/_authenticated/portal")({
  head: () => ({
    meta: [
      { title: "Veep Portal" },
      { name: "description", content: "Private Veep portal for operators and clients." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Veep Portal" },
      { property: "og:description", content: "Private Veep portal for operators and clients." },
    ],
  }),
  component: () => (
    <PortalStoreProvider>
      <PortalShell>
        <Outlet />
      </PortalShell>
    </PortalStoreProvider>
  ),
});