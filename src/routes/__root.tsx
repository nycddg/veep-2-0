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

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veep",
  description:
    "Veep places senior fractional and interim executives — CFO, COO, CRO, CTO — inside companies in under 10 days. Operator-led. 30-day fit guarantee.",
  url: "/",
  logo: "/favicon.ico",
  email: "hello@veep.co",
  slogan: "Fractional and interim executives who own the outcome.",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-[11px] tracking-widest text-stone-soft">[404] / NOT FOUND</div>
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
        <div className="font-mono text-[11px] tracking-widest text-stone-soft">[ERR] / SOMETHING BROKE</div>
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
      { title: "Veep — Fractional & Interim Executives in Under 10 Days" },
      {
        name: "description",
        content:
          "Veep places senior fractional and interim executives — CFO, COO, CRO, CTO — inside your company in under 10 days. Operator-led. 30-day fit guarantee.",
      },
      { name: "author", content: "Veep" },
      { property: "og:site_name", content: "Veep" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(orgSchema) }],
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
