import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Phase 2 — progressive View Transitions.
 * Skip when: reduced-motion, same pathname (hash/search-only), unsupported browser.
 */
function viewTransitionTypes(info: {
  fromLocation?: { pathname: string } | null;
  toLocation: { pathname: string };
  pathChanged?: boolean;
}): string[] | false {
  if (prefersReducedMotion()) return false;
  if (info.pathChanged === false) return false;
  const from = info.fromLocation?.pathname;
  const to = info.toLocation.pathname;
  if (from && from === to) return false;
  return ["veep-page"];
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultViewTransition: {
      types: viewTransitionTypes,
    },
  });

  return router;
};
