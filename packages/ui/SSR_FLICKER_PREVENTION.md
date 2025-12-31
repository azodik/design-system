# SSR Flicker Prevention Guide

## Problem

When using SSR (Server-Side Rendering) with Next.js, Remix, or other frameworks, theme flickering can occur because:

1. **Server renders** with default theme (usually light)
2. **Client hydrates** and reads theme from localStorage/system preference
3. **Theme changes** after hydration, causing a visible flash/flicker

## Solution

We provide a **blocking script** that runs before React hydrates to set the theme immediately, preventing any flicker.

## Implementation

### Step 1: Add the Blocking Script

Add the theme initialization script to your HTML `<head>` **before React hydrates**.

#### Next.js App Router (app/layout.tsx)

```tsx
import { getThemeScript } from "@azodik/ui/server";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: getThemeScript({
              storageKey: "azodik-theme", // Must match ThemeProvider storageKey
              defaultTheme: "system", // Must match ThemeProvider defaultTheme
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="system" storageKey="azodik-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

#### Next.js Pages Router (\_document.tsx)

```tsx
import { Html, Head, Main, NextScript } from "next/document";
import { getThemeScript } from "@azodik/ui/server";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: getThemeScript({
              storageKey: "azodik-theme",
              defaultTheme: "system",
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

#### Remix (app/root.tsx)

```tsx
import { getThemeScript } from "@azodik/ui/server";

export default function Root() {
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
      <body>
        <Outlet />
      </body>
    </html>
  );
}
```

#### Plain HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      (function () {
        try {
          const storageKey = "azodik-theme";
          const stored = localStorage.getItem(storageKey);
          const defaultTheme = "system";
          let theme = stored || defaultTheme;

          if (theme === "system") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            theme = prefersDark ? "dark" : "light";
          }

          document.documentElement.setAttribute("data-theme", theme);
          document.documentElement.classList.add("az-theme-initialized");
        } catch (e) {
          document.documentElement.setAttribute("data-theme", "light");
          document.documentElement.classList.add("az-theme-initialized");
        }
      })();
    </script>
  </head>
  <body>
    <!-- Your app -->
  </body>
</html>
```

### Step 2: Ensure ThemeProvider Props Match

**Critical**: The `storageKey` and `defaultTheme` in the script **must match** your `ThemeProvider` props:

```tsx
// ✅ CORRECT - Script and Provider match
<script dangerouslySetInnerHTML={{ __html: getThemeScript({ storageKey: 'azodik-theme', defaultTheme: 'system' }) }} />
<ThemeProvider storageKey="azodik-theme" defaultTheme="system" />

// ❌ WRONG - Mismatched storageKey
<script dangerouslySetInnerHTML={{ __html: getThemeScript({ storageKey: 'azodik-theme', defaultTheme: 'system' }) }} />
<ThemeProvider storageKey="my-theme" defaultTheme="system" />
```

### Step 3: How It Works

1. **Script runs first** (before React): Sets `data-theme` attribute and adds `az-theme-initialized` class
2. **CSS prevents transitions**: Elements have no transitions until theme is initialized
3. **ThemeProvider detects initialization**: Checks if theme was already set by script
4. **No flicker**: Theme is consistent between server and client render

## CSS Classes

The script and ThemeProvider use these CSS classes:

- `az-theme-initialized` - Added when theme is set (prevents transition flicker)
- `az-theme-changing` - Added during theme changes (disables transitions temporarily)

These are automatically handled by the ThemeProvider and core CSS.

## Verification

To verify it's working:

1. Open DevTools → Network tab
2. Reload page with "Disable cache" enabled
3. Check Elements tab → `<html>` element
4. You should see `data-theme` attribute set **immediately** (before React loads)
5. You should see `az-theme-initialized` class present
6. No theme flash should be visible

## Troubleshooting

### Still seeing flicker?

1. **Check script placement**: Must be in `<head>`, before any React code
2. **Verify props match**: `storageKey` and `defaultTheme` must match between script and ThemeProvider
3. **Check console**: Look for any JavaScript errors
4. **Verify CSS loaded**: Ensure `@azodik/ui/styles.css` is imported

### Theme not applying?

1. **Check localStorage**: Verify theme is stored correctly
2. **Check script execution**: Add `console.log` in script to verify it runs
3. **Check ThemeProvider**: Ensure it's wrapping your app correctly

## Benefits

✅ **Zero flicker** - Theme set before React hydrates  
✅ **SSR compatible** - Works with all SSR frameworks  
✅ **System theme support** - Detects system preference immediately  
✅ **Automatic** - ThemeProvider detects script initialization  
✅ **No breaking changes** - Works with existing code
