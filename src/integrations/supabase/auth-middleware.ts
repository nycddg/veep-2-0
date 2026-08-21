// Auth middleware for serverFns. Lovable-generated originally; rewritten so
// createMiddleware is NOT invoked at module evaluation time.
//
// Why: the portal route tree is eagerly imported by routeTree.gen.ts, which
// pulls mock-store → portal.functions → this file on EVERY SSR request
// (including the public homepage). A top-level createMiddleware() call was
// throwing on Vercel (`TypeError: createMiddleware is not a function`) during
// module init — likely a circular/export-order issue in the Nitro bundle —
// and took down the whole site.
import { createMiddleware } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";
import { httpError } from "@/lib/http-error";
import type { Database } from "./types";

function isNewSupabaseApiKey(value: string): boolean {
  return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}

function createSupabaseFetch(supabaseKey: string): typeof fetch {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== "undefined" && input instanceof Request ? input.headers : undefined,
    );

    if (init?.headers) {
      new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    }

    if (
      isNewSupabaseApiKey(supabaseKey) &&
      headers.get("Authorization") === `Bearer ${supabaseKey}`
    ) {
      headers.delete("Authorization");
    }

    headers.set("apikey", supabaseKey);
    return fetch(input, { ...init, headers });
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Mw = any;

function buildRequireSupabaseAuth(): Mw {
  if (typeof createMiddleware !== "function") {
    throw new Error(
      `requireSupabaseAuth: createMiddleware is not a function (typeof=${typeof createMiddleware})`,
    );
  }

  return createMiddleware({ type: "function" }).server(async ({ next }) => {
    const SUPABASE_URL = process.env["SUPABASE_URL"];
    const SUPABASE_PUBLISHABLE_KEY = process.env["SUPABASE_PUBLISHABLE_KEY"];

    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
      const missing = [
        ...(!SUPABASE_URL ? ["SUPABASE_URL"] : []),
        ...(!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []),
      ];
      const message = `Missing Supabase environment variable(s): ${missing.join(", ")}. Set them in Vercel Project Settings.`;
      console.error(`[Supabase] ${message}`);
      throw new Error(message);
    }

    const request = getRequest();

    if (!request?.headers) {
      httpError(401, "Unauthorized: No request headers available");
    }

    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      httpError(401, "Unauthorized: No authorization header provided");
    }

    if (!authHeader.startsWith("Bearer ")) {
      httpError(401, "Unauthorized: Only Bearer tokens are supported");
    }

    const token = authHeader.replace("Bearer ", "");
    if (!token) {
      httpError(401, "Unauthorized: No token provided");
    }

    if (token.split(".").length !== 3) {
      httpError(401, "Unauthorized: Invalid token");
    }

    const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      global: {
        fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      auth: {
        storage: undefined,
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data, error } = await supabase.auth.getClaims(token);
    if (error || !data?.claims) {
      httpError(401, "Unauthorized: Invalid token");
    }

    if (!data.claims.sub) {
      httpError(401, "Unauthorized: No user ID found in token");
    }

    return next({
      context: {
        supabase,
        userId: data.claims.sub,
        claims: data.claims,
      },
    });
  });
}

let cached: Mw | undefined;

function getRequireSupabaseAuth(): Mw {
  if (!cached) cached = buildRequireSupabaseAuth();
  return cached;
}

/**
 * Lazy proxy: importing this module must not call createMiddleware.
 * createServerFn(...).middleware([requireSupabaseAuth]) only touches the
 * value when the serverFn runs / is registered past first property access.
 */
export const requireSupabaseAuth: Mw = new Proxy(
  {},
  {
    get(_target, prop, receiver) {
      return Reflect.get(getRequireSupabaseAuth() as object, prop, receiver);
    },
    apply(_target, thisArg, args) {
      const mw = getRequireSupabaseAuth();
      return Reflect.apply(mw as object as (...a: unknown[]) => unknown, thisArg, args);
    },
  },
);
