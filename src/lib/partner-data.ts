import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type Lead = {
  id: string;
  pseudonym: string;
  one_liner: string;
  role_needed: string;
  stage: string;
  sort_order: number;
  archived: boolean;
};

export type Win = {
  id: string;
  role: string;
  engagement_type: string;
  length: string;
  happened_on: string;
  archived: boolean;
};

export const LEAD_STAGES = ["Scoping", "Matching", "Proposal", "Closing", "Won"] as const;

export function useSessionUser() {
  return useQuery({
    queryKey: ["session-user"],
    queryFn: async () => {
      const { data } = await supabase.auth.getUser();
      return data.user;
    },
  });
}

export function useIsAdmin() {
  return useQuery({
    queryKey: ["is-admin"],
    queryFn: async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return false;
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userData.user.id);
      return (data ?? []).some((r) => r.role === "admin");
    },
  });
}

export function useLeads(includeArchived = false) {
  return useQuery({
    queryKey: ["leads", includeArchived],
    queryFn: async () => {
      let q = supabase.from("leads").select("*").order("sort_order").order("created_at", { ascending: false });
      if (!includeArchived) q = q.eq("archived", false);
      const { data, error } = await q;
      if (error) throw error;
      return (data ?? []) as Lead[];
    },
  });
}

export function useWins(includeArchived = false) {
  return useQuery({
    queryKey: ["wins", includeArchived],
    queryFn: async () => {
      let q = supabase.from("wins").select("*").order("happened_on", { ascending: false });
      if (!includeArchived) q = q.eq("archived", false);
      const { data, error } = await q;
      if (error) throw error;
      return (data ?? []) as Win[];
    },
  });
}
