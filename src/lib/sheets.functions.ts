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
    if (!sheets.isSheetsConfigured()) {
      return { configured: false as const, leads: [], wins: [] };
    }

    try {
      const [leads, wins] = await Promise.all([
        sheets.fetchSheetLeads(),
        sheets.fetchSheetWins(),
      ]);
      return { configured: true as const, leads, wins };
    } catch (error) {
      console.error("Google Sheets dashboard read failed", error);
      return { configured: false as const, leads: [], wins: [] };
    }
  });
