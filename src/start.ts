import { createStart, createMiddleware } from "@tanstack/react-start";

// IMPORTANT: do not CALL createMiddleware at module top level.
// Importing the binding is fine (live ESM export). Invoking it during module
// evaluation raced a Nitro/Vercel circular init and threw:
//   TypeError: createMiddleware is not a function
// which 500'd every SSR page. Defer invocation to getOptions() time.
//
// Catastrophic SSR errors are still handled in src/server.ts.

export const startInstance = createStart(async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: { functionMiddleware?: any[]; requestMiddleware?: any[] } = {};

  try {
    if (typeof createMiddleware !== "function") {
      console.warn(
        `[start] createMiddleware unavailable (typeof=${typeof createMiddleware}). Bare start options.`,
      );
      return options;
    }

    const { createAttachSupabaseAuth } = await import(
      "@/integrations/supabase/auth-attacher"
    );
    options.functionMiddleware = [await createAttachSupabaseAuth()];

    const { renderErrorPage } = await import("./lib/error-page");
    options.requestMiddleware = [
      createMiddleware().server(async ({ next }) => {
        try {
          return await next();
        } catch (error) {
          if (
            error != null &&
            typeof error === "object" &&
            (("statusCode" in error &&
              typeof (error as { statusCode: unknown }).statusCode === "number" &&
              (error as { statusCode: number }).statusCode < 500) ||
              ("status" in error &&
                typeof (error as { status: unknown }).status === "number" &&
                (error as { status: number }).status < 500))
          ) {
            throw error;
          }
          console.error(error);
          return new Response(renderErrorPage(error), {
            status: 500,
            headers: { "content-type": "text/html; charset=utf-8" },
          });
        }
      }),
    ];
  } catch (err) {
    console.warn("[start] middleware setup failed; continuing bare:", err);
  }

  return options;
});
