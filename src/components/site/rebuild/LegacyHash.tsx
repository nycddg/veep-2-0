import { useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

const legacyHomeHashes = {
  capacity: { to: "/", hash: "overview" },
  operators: { to: "/for-companies", hash: "operators" },
  offer: { to: "/for-companies", hash: "offer" },
  vs: { to: "/for-companies", hash: "alternatives" },
  faq: { to: "/faq" },
  portfolios: { to: "/for-portfolios" },
} as const;

type LegacyKey = keyof typeof legacyHomeHashes;

function isLegacyKey(value: string): value is LegacyKey {
  return Object.prototype.hasOwnProperty.call(legacyHomeHashes, value);
}

export function LegacyHash() {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (pathname !== "/") return;
    const key = hash.replace(/^#/, "");
    if (!isLegacyKey(key)) return;
    const dest = legacyHomeHashes[key];
    if (dest.to === "/") {
      void router.navigate({ to: "/", hash: dest.hash, replace: true });
      return;
    }
    if (dest.to === "/faq") {
      void router.navigate({ to: "/faq", replace: true });
      return;
    }
    if (dest.to === "/for-portfolios") {
      void router.navigate({ to: "/for-portfolios", replace: true });
      return;
    }
    void router.navigate({ to: "/for-companies", hash: dest.hash, replace: true });
  }, [hash, pathname, router]);

  return null;
}
