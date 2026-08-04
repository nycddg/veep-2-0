import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const getCopperDashboard = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isMember } = await context.supabase.rpc("is_member", {
      _user_id: context.userId,
    });
    if (!isMember) throw new Error("Forbidden");

    const copper = await import("./copper.server");
    if (!copper.isCopperConfigured()) {
      return { configured: false as const, leads: [], wins: [] };
    }

    const [leads, wins] = await Promise.all([
      copper.fetchCopperLeads(),
      copper.fetchCopperWins(),
    ]);
    return { configured: true as const, leads, wins };
  });
