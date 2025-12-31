/**
 * Reduced Motion utilities - Respect prefers-reduced-motion
 */

import { useState, useEffect } from "react";

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;

  if (window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    return mediaQuery.matches;
  }

  return false;
}

/**
 * Hook to detect reduced motion preference
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setReducedMotion(e.matches);
    };

    // Check initial value
    handleChange(mediaQuery);

    // Listen for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return reducedMotion;
}

/**
 * Get transition duration based on reduced motion preference
 */
export function getTransitionDuration(defaultDuration: number, reducedDuration = 0): number {
  return prefersReducedMotion() ? reducedDuration : defaultDuration;
}

/**
 * Get animation duration based on reduced motion preference
 */
export function getAnimationDuration(defaultDuration: number, reducedDuration = 0): string {
  const duration = prefersReducedMotion() ? reducedDuration : defaultDuration;
  return `${duration}ms`;
}
