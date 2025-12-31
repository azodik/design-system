# Server-Side Rendering (SSR) Guide

This guide explains how to use `@azodik/ui` components in server-side rendering (SSR) environments, including Next.js App Router, Remix, and other React SSR frameworks.

## Overview

All `@azodik/ui` components are client components and include the `"use client"` directive. This means:

- ✅ Components work seamlessly with Next.js App Router
- ✅ Components are tree-shakeable
- ✅ No additional configuration needed for most frameworks
- ✅ Proper hydration handling built-in

## Next.js App Router

### Basic Setup

All components are ready to use in Next.js App Router without any special configuration:

```tsx
// app/page.tsx
"use client"; // Only needed if this page uses client-side features

import { Button, Card, Input } from "@azodik/ui";
import "@azodik/ui/styles.css";

export default function Page() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Click me</Button>
    </Card>
  );
}
```

### Server Components

You can use server components and import client components:

```tsx
// app/layout.tsx (Server Component)
import { ThemeScript } from "@azodik/ui";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/page.tsx (Server Component)
import { ClientPage } from "./client-page";

export default function Page() {
  return <ClientPage />;
}
```

```tsx
// app/client-page.tsx (Client Component)
"use client";

import { Button, Card } from "@azodik/ui";

export function ClientPage() {
  return (
    <Card>
      <Button>Client Component</Button>
    </Card>
  );
}
```

### Theme Setup (Prevent Flickering)

To prevent theme flickering on initial load, add `ThemeScript` to your root layout:

```tsx
// app/layout.tsx
import { ThemeScript } from "@azodik/ui";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

Or use the utility function for more control:

```tsx
// app/layout.tsx
import { getThemeScript } from "@azodik/ui/utils/theme-script";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: getThemeScript({
              storageKey: "azodik-theme",
              defaultTheme: "system",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## Remix

### Setup

```tsx
// app/root.tsx
import { ThemeScript } from "@azodik/ui";
import "@azodik/ui/styles.css";

export default function App() {
  return (
    <html>
      <head>
        <ThemeScript />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
```

### Using Components

```tsx
// app/routes/_index.tsx
import { Button, Card } from "@azodik/ui";

export default function Index() {
  return (
    <Card>
      <Button>Hello from Remix</Button>
    </Card>
  );
}
```

## Vite + SSR

### Setup

```tsx
// src/main.tsx
import { ThemeProvider } from "@azodik/ui";
import "@azodik/ui/styles.css";

// Add ThemeScript to index.html <head>
```

```html
<!-- index.html -->
<head>
  <script>
    (function () {
      try {
        var localTheme = localStorage.getItem("azodik-theme");
        var supportDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (localTheme === "dark" || (!localTheme && supportDarkMode)) {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.setAttribute("data-theme", "light");
        }
      } catch (e) {}
    })();
  </script>
</head>
```

## Important Notes

### "use client" Directive

All component source files include `"use client"` directive. This means:

- ✅ No need to add it manually when importing components
- ✅ Components work in Next.js App Router automatically
- ✅ Tree-shaking works correctly
- ✅ Build output includes the directive

### Hydration Safety

All components handle SSR safely:

- Browser API checks: `typeof window !== "undefined"`
- Document checks: `typeof document !== "undefined"`
- Safe defaults for SSR
- No hydration mismatches

### Theme Script

**Critical**: Always include `ThemeScript` in your HTML `<head>` to prevent theme flickering:

```tsx
import { ThemeScript } from "@azodik/ui";

// In your root layout/component
<head>
  <ThemeScript />
</head>;
```

### Bundle Size

Components are tree-shakeable. Import only what you need:

```tsx
// ✅ Good - Only imports Button
import { Button } from "@azodik/ui";

// ❌ Avoid - Imports entire library
import * as UI from "@azodik/ui";
```

## Troubleshooting

### "use client" Error in Next.js

If you see errors about "use client", ensure you're using the latest version of `@azodik/ui`. All components include the directive.

### Theme Flickering

If you see theme flickering on page load:

1. Ensure `ThemeScript` is in `<head>` before React hydrates
2. Check that the script runs synchronously (not async/defer)
3. Verify localStorage is accessible

### Hydration Mismatches

If you see hydration warnings:

1. Ensure you're using the latest version
2. Check for custom CSS that might affect SSR
3. Verify all components use proper SSR guards

## Examples

### Next.js App Router Complete Example

```tsx
// app/layout.tsx
import { ThemeScript, ThemeProvider } from "@azodik/ui";
import "@azodik/ui/styles.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

```tsx
// app/page.tsx
import { Button, Card, Input, Stack } from "@azodik/ui";

export default function HomePage() {
  return (
    <Stack gap={16}>
      <Card>
        <h1>Welcome</h1>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </Card>
    </Stack>
  );
}
```

## Best Practices

1. **Always include ThemeScript** in your root layout
2. **Import components individually** for better tree-shaking
3. **Use Server Components** when possible, import client components as needed
4. **Check SSR compatibility** when using custom hooks or browser APIs
5. **Test hydration** in development to catch issues early

## Support

For issues or questions:

- Check the [main README](../README.md)
- Review component documentation
- Open an issue on GitHub
