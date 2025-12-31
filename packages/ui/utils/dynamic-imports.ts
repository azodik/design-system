/**
 * Dynamic imports utilities - Split bundle by route/feature
 */

import React from "react";

/**
 * Lazy load a component with error handling
 *
 * @example
 * ```tsx
 * const LazyComponent = lazyLoad(() => import('./HeavyComponent'));
 * ```
 */
export function lazyLoad<T extends React.ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>,
): React.LazyExoticComponent<T> {
  return React.lazy(() =>
    importFn().catch((error) => {
      console.error("Failed to load component:", error);
      // Return a fallback component
      const FallbackComponent = () => React.createElement("div", null, "Failed to load component");
      return {
        default: FallbackComponent as unknown as T,
      };
    }),
  );
}

/**
 * Preload a module
 *
 * @example
 * ```tsx
 * preloadModule(() => import('./HeavyComponent'));
 * ```
 */
export function preloadModule<T>(importFn: () => Promise<T>): Promise<T> {
  return importFn();
}

/**
 * Load module with retry logic
 *
 * @example
 * ```tsx
 * const module = await loadWithRetry(() => import('./HeavyComponent'), 3);
 * ```
 */
export async function loadWithRetry<T>(
  importFn: () => Promise<T>,
  maxRetries = 3,
  delay = 1000,
): Promise<T> {
  let lastError: Error | null = null;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await importFn();
    } catch (error) {
      lastError = error as Error;
      if (i < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError || new Error("Failed to load module after retries");
}
