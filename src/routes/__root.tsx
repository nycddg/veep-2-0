import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";

const GA_MEASUREMENT_ID = "G-W4CC5NJ1H8";

const gaInitScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`;

const vectorScript = `
!function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
vector.load("1fe348f4-6e5d-49a9-a481-c29fc08010f3");
`;

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veep",
  description:
    "Veep places vetted senior operators inside founder-led companies to own critical work. Matched in 72 hours. Deployed in under 10 days. 30-day fit guarantee.",
  url: "https://www.veep.work",
  logo: "/favicon.ico",
  email: "hello@veep.co",
  slogan: "Senior operators for work that can't wait.",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-[11px] tracking-[0.14em] text-stone-soft">[404] / NOT FOUND</div>
        <h1 className="mt-6 text-7xl text-cream tracking-tight">404</h1>
        <h2 className="mt-4 text-xl text-cream tracking-tight">Page not found</h2>
        <p className="mt-2 text-sm text-stone">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-ink transition hover:opacity-90"
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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-[11px] tracking-[0.14em] text-stone-soft">[ERR] / SOMETHING BROKE</div>
        <h1 className="mt-6 text-2xl text-cream tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-stone">
          Something went wrong. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-ink transition hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-white/5"
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
      { title: "Senior operators for work that can't wait | Veep" },
      {
        name: "description",
        content:
          "Veep helps founder-led companies bring in vetted senior operators to own critical work — matched in 72 hours, deployed in under 10 days. 30-day fit guarantee.",
      },
      { name: "author", content: "Veep" },
      { property: "og:site_name", content: "Veep" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Senior operators for work that can't wait | Veep" },
      { name: "twitter:description", content: "Veep helps founder-led companies bring in vetted senior operators to own critical work — matched in 72 hours, deployed in under 10 days. 30-day fit guarantee." },
      { name: "theme-color", content: "#0b1220" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:title", content: "Senior operators for work that can't wait | Veep" },
      { property: "og:description", content: "Veep helps founder-led companies bring in vetted senior operators to own critical work — matched in 72 hours, deployed in under 10 days. 30-day fit guarantee." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/CplJMIYweyNlP3tFRxmgvRkw5P52/social-images/social-1783620615204-navyondarkblue_square.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/CplJMIYweyNlP3tFRxmgvRkw5P52/social-images/social-1783620615204-navyondarkblue_square.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgSchema) },
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`, async: true },
      { children: gaInitScript },
      { children: vectorScript },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
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
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
