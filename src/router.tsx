import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

/**
 * Phase 2 — View Transitions.
 * Use boolean default (most reliable). Skip same-path / reduced-motion via
 * a thin navigate wrapper applied after router creation.
 */
export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Boolean form — always attempt VT when the browser supports it.
    // Per-nav skip handled in navigate wrapper below.
    defaultViewTransition: true,
  });

  // Skip VT for hash/search-only hops and prefers-reduced-motion.
  const originalNavigate = router.navigate.bind(router);
  router.navigate = (async (opts) => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : "";

    // Resolve target path roughly from `to` when it's an absolute path string.
    let nextPath: string | undefined;
    if (typeof opts?.to === "string" && opts.to.startsWith("/")) {
      nextPath = opts.to.split("?")[0].split("#")[0];
    }

    const samePath =
      nextPath !== undefined && currentPath !== "" && nextPath === currentPath;

    const viewTransition = reduced || samePath ? false : opts?.viewTransition ?? true;

    return originalNavigate({ ...opts, viewTransition });
  }) as typeof router.navigate;

  return router;
};
