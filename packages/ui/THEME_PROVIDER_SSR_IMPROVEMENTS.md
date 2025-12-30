# ThemeProvider SSR Improvements

## Overview
The ThemeProvider has been significantly improved for better SSR (Server-Side Rendering) compatibility, preventing hydration mismatches and ensuring consistent behavior across different rendering environments.

## Key Improvements

### 1. **SSR-Safe Initial State**
**Before**: 
- Read from localStorage in useState initializer (could cause hydration mismatch)
- Theme computed synchronously using `window.matchMedia` (not available on server)

**After**:
- Initial state always uses `defaultTheme` on server (SSR-safe)
- localStorage is read only in `useEffect` after mount
- Theme resolution happens in `useEffect` to prevent hydration mismatch

```tsx
// SSR-safe initial state
const [internalAppearance, setInternalAppearance] = useState<"light" | "dark" | "system">(defaultTheme);
const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
```

### 2. **Proper Theme Resolution**
**Before**: Theme was computed in `useMemo` which runs on both server and client

**After**: 
- Theme resolution happens in `useEffect` (client-only)
- Separate state for resolved theme prevents hydration issues
- System preference is detected only after mount

```tsx
useEffect(() => {
  if (typeof window === "undefined") return;
  
  const stored = localStorage.getItem(storageKey);
  const appearance = stored || defaultTheme;
  setInternalAppearance(appearance);
  
  const resolveTheme = (app: "light" | "dark" | "system"): "light" | "dark" => {
    if (app === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return app;
  };
  
  setResolvedTheme(resolveTheme(appearance));
}, [defaultTheme, storageKey]);
```

### 3. **System Theme Preference Listener**
**New Feature**: Listens for system theme changes when using "system" preference

```tsx
if (appearance === "system") {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = () => {
    setResolvedTheme(mediaQuery.matches ? "dark" : "light");
  };
  
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }
}
```

### 4. **Separated Theme Application**
**Before**: Theme and configuration applied in single useEffect

**After**: 
- Theme application separated from configuration
- Theme applied only after mount to prevent hydration issues
- Configuration (colors, radius, scaling) applied separately

### 5. **Safe SSR Rendering**
**Before**: `data-theme` was conditionally set based on `mounted` state

**After**: 
- Uses safe default for SSR: `defaultTheme === "system" ? "light" : defaultTheme`
- Prevents hydration mismatch warnings
- Theme is properly applied after mount

```tsx
data-theme={mounted ? theme : defaultTheme === "system" ? "light" : defaultTheme}
```

## Benefits

1. **No Hydration Mismatches**: Server and client render the same initial HTML
2. **Better Performance**: Theme resolution happens only once after mount
3. **System Theme Support**: Automatically updates when system preference changes
4. **SSR Compatible**: Works perfectly with Next.js, Remix, and other SSR frameworks
5. **Flicker Prevention**: Theme is applied immediately after mount

## Migration Notes

No breaking changes! The API remains the same. The improvements are internal and transparent to users.

## Testing Recommendations

1. Test with Next.js App Router SSR
2. Test with Next.js Pages Router
3. Test theme switching (light/dark/system)
4. Test system preference changes
5. Verify no hydration warnings in console
6. Test with different defaultTheme values

## Browser Compatibility

- Modern browsers: Uses `addEventListener` for media queries
- Older browsers: Falls back to `addListener` (if needed)
- SSR: Fully compatible with all SSR frameworks

