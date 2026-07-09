## Add Google Analytics 4 + Vector to the site

Both tags need to load on every page across all environments. TanStack Start injects `<head>` tags via the root route's `head()`, so both scripts belong in `src/routes/__root.tsx` — no `index.html` edits, no extra dependencies.

### Changes

**`src/routes/__root.tsx`** — extend the existing `head()` return:

1. Add the GA4 loader to `scripts`:
   ```ts
   { src: "https://www.googletagmanager.com/gtag/js?id=G-W4CC5NJ1H8", async: true },
   {
     children: `
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-W4CC5NJ1H8');
     `,
   },
   ```

2. Add the Vector pixel to `scripts` (inline, using the snippet you provided, minus the JSX wrapper):
   ```ts
   {
     children: `
       !function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
       vector.load("1fe348f4-6e5d-49a9-a481-c29fc08010f3");
     `,
   },
   ```

Both are appended alongside the existing JSON-LD `application/ld+json` script. The root shell already renders `<Scripts />` in `<body>`, so TanStack emits them correctly for SSR + hydration.

### SPA pageview tracking

GA4's `config` call auto-tracks the initial pageview. Client-side route changes in TanStack Router don't fire a fresh page load, so I'll also add a small subscription in `RootComponent` that calls `gtag('event', 'page_view', { page_path, page_location, page_title })` whenever the router's location changes (via `useRouter().subscribe('onResolved', ...)`). Vector's pixel handles SPA navigation on its own — no extra wiring.

### Out of scope

- No consent banner / cookie gating (you didn't ask for one; add later if EU traffic requires it).
- No custom events beyond pageviews.
- No env-based gating since you chose "All environments."

### Verification

After build: load the site, confirm in DevTools Network that `gtag/js?id=G-W4CC5NJ1H8` and `cdn.vector.co/pixel.js` both load, and that a `collect` request fires on navigation between routes.
