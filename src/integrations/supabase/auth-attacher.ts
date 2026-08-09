// Auth bearer attachment for serverFn RPCs.
// Factory-only: never call createMiddleware at module import time.
import { createMiddleware } from "@tanstack/react-start";
import { supabase } from "./client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Mw = any;

export async function createAttachSupabaseAuth(): Promise<Mw> {
  if (typeof createMiddleware !== "function") {
    throw new Error(
      `attachSupabaseAuth: createMiddleware is not a function (typeof=${typeof createMiddleware})`,
    );
  }
  return createMiddleware({ type: "function" }).client(async ({ next }) => {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    return next({
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  });
}
