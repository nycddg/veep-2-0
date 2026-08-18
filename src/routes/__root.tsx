import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";
import { ThemeProvider } from "../lib/theme";

const GA_MEASUREMENT_ID = "G-W4CC5NJ1H8";
/** Instantly Website Visitors (Leadsy) pixel — pid from Instantly setup UI */
const INSTANTLY_PIXEL_PID = "1yMyAoRcMRrO2Ix8a";

const gaInitScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`;

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veep",
  legalName: "The Veep Group, LLC",
  description:
    "Veep places vetted senior operators inside founder-led companies to own critical work. Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee.",
  url: "https://www.veep.work",
  logo: "https://www.veep.work/assets/og-card.jpg",
  email: "hey@veep.work",
  slogan: "Senior operators for work that can't wait.",
  sameAs: [] as string[],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mono-label">[404] / NOT FOUND</div>
        <h1 className="mt-6 text-7xl text-cream tracking-tight">404</h1>
        <h2 className="mt-4 text-xl text-cream tracking-tight">Page not found</h2>
        <p className="mt-2 text-sm text-stone">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="motion-cta cta-accent inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11"
          >
            Back to Veep
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mono-label">[ERR] / SOMETHING BROKE</div>
        <h1 className="mt-6 text-2xl text-cream tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-stone">
          Something went wrong. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="motion-cta cta-accent inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11"
          >
            Try again
          </button>
          <a
            href="/"
            className="motion-cta inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-cream hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Veep" },
      { property: "og:site_name", content: "Veep" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#0b1220" },
      { name: "theme-color", media: "(prefers-color-scheme: light)", content: "#E4E9F2" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        // Weights 300/600 were requested but unrenderable under the 500 ceiling — trimmed.
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgSchema) },
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`, async: true },
      { children: gaInitScript },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  // Inline bootstrap so the Leadsy/Instantly tag always executes (React SSR
  // <script src> tags are present in HTML but Instantly's "Test pixel" popup
  // often fails to detect them). This injects the real tag.js with data-pid.
  const instantlyPixelBootstrap = `
(function () {
  try {
    if (document.getElementById("vtag-ai-js")) return;
    var s = document.createElement("script");
    s.id = "vtag-ai-js";
    s.async = true;
    s.src = "https://r2.leadsy.ai/tag.js";
    s.setAttribute("data-pid", "${INSTANTLY_PIXEL_PID}");
    s.setAttribute("data-version", "062024");
    (document.head || document.documentElement).appendChild(s);
  } catch (e) {}
})();
`.trim();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* FOUC guard: default dark; only add .light if user stored it. Never follow OS. */}
        <script
          id="veep-theme-boot"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("veep-theme");var r=document.documentElement;if(t==="light"){r.classList.add("light");r.classList.remove("dark");r.style.colorScheme="light";}else{r.classList.remove("light");r.classList.add("dark");r.style.colorScheme="dark";}}catch(e){document.documentElement.classList.remove("light");document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";}})();`,
          }}
        />
        <link rel="preconnect" href="https://r2.leadsy.ai" crossOrigin="anonymous" />
        <script
          id="instantly-pixel-bootstrap"
          dangerouslySetInnerHTML={{ __html: instantlyPixelBootstrap }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isPortal = pathname.startsWith("/portal");

  useEffect(() => {
    const unsub = router.subscribe("onResolved", ({ toLocation }) => {
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag !== "function") return;
      gtag("event", "page_view", {
        page_path: toLocation.pathname + toLocation.searchStr,
        page_location: window.location.href,
        page_title: document.title,
      });
    });
    return () => unsub();
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          {!isPortal && <SiteHeader />}
          <main className="flex-1 vt-page-main">
            <Outlet />
          </main>
          {!isPortal && <SiteFooter />}
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
