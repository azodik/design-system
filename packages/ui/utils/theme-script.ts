/**
 * Blocking script to prevent theme flicker in SSR
 *
 * This script should be placed in the <head> of your HTML document,
 * before React hydrates, to prevent theme flicker.
 *
 * Usage in Next.js (app/layout.tsx):
 * ```tsx
 * <head>
 *   <script
 *     dangerouslySetInnerHTML={{
 *       __html: getThemeScript({ storageKey: 'azodik-theme', defaultTheme: 'system' })
 *     }}
 *   />
 * </head>
 * ```
 *
 * Usage in HTML:
 * ```html
 * <head>
 *   <script>
 *     // Paste the script content here
 *   </script>
 * </head>
 * ```
 */
export function getThemeScript(options?: {
  storageKey?: string;
  defaultTheme?: "light" | "dark" | "system";
}): string {
  const storageKey = options?.storageKey || "azodik-theme";
  const defaultTheme = options?.defaultTheme || "system";

  return `
    (function() {
      try {
        const storageKey = '${storageKey}';
        const stored = localStorage.getItem(storageKey);
        const defaultTheme = '${defaultTheme}';
        let theme = stored || defaultTheme;
        
        if (theme === 'system') {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          theme = prefersDark ? 'dark' : 'light';
        }
        
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.classList.add('az-theme-initialized');
      } catch (e) {
        // Fallback to light theme if there's an error
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.add('az-theme-initialized');
      }
    })();
  `.trim();
}

/**
 * Get the inline script tag for Next.js
 */
export function getThemeScriptTag(options?: {
  storageKey?: string;
  defaultTheme?: "light" | "dark" | "system";
}): string {
  return `<script dangerouslySetInnerHTML={{ __html: \`${getThemeScript(options)}\` }} />`;
}
