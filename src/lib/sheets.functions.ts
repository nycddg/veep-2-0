import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const getSheetDashboard = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isMember } = await context.supabase.rpc("is_member", {
      _user_id: context.userId,
    });
    if (!isMember) throw new Error("Forbidden");

    const sheets = await import("./sheets.server");

    try {
      const leads = await sheets.fetchSheetLeads();
      return { configured: true as const, leads };
    } catch (error) {
      console.error("Google Sheets dashboard read failed", error);
      return { configured: false as const, leads: [] };
    }
  });
