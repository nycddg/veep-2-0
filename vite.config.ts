// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readFile } from "node:fs/promises";

export default defineConfig({
  vite: {
    plugins: [
      {
        name: "veep-local-design-study",
        configureServer(server) {
          server.middlewares.use(async (request, response, next) => {
            if (request.url?.split("?")[0] !== "/__design-system/") return next();
            try {
              const source = await readFile(
                new URL("./design/system-study.html", import.meta.url),
                "utf8",
              );
              const html = await server.transformIndexHtml("/__design-system/", source);
              response.setHeader("Content-Type", "text/html; charset=utf-8");
              response.setHeader("X-Robots-Tag", "noindex, nofollow");
              response.end(html);
            } catch (error) {
              next(error);
            }
          });
        },
      },
    ],
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Hard-pin Vercel output. Without this, local/CI builds default to
  // cloudflare-module (.output + wrangler). Vercel auto-detect works when
  // VERCEL=1 is set, but pinning removes an entire class of "built for the
  // wrong runtime" 500s if detection ever misses.
  nitro: {
    preset: "vercel",
  },
});
