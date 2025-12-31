/**
 * High Contrast Mode utilities
 */

import { useState, useEffect } from "react";

/**
 * Check if high contrast mode is enabled
 */
export function isHighContrastMode(): boolean {
  if (typeof window === "undefined") return false;

  // Check for Windows High Contrast Mode
  if (window.matchMedia) {
    const prefersContrast = window.matchMedia("(prefers-contrast: high)");
    if (prefersContrast.matches) return true;
  }

  // Check for forced-colors mode (Windows High Contrast)
  if (window.matchMedia) {
    const forcedColors = window.matchMedia("(forced-colors: active)");
    if (forcedColors.matches) return true;
  }

  return false;
}

/**
 * Apply high contrast styles
 */
export function applyHighContrastStyles(element: HTMLElement): void {
  if (isHighContrastMode()) {
    element.style.setProperty("--color-text", "#000000");
    element.style.setProperty("--color-background", "#FFFFFF");
    element.style.setProperty("--color-border", "#000000");
  }
}

/**
 * Hook to detect high contrast mode changes
 */
export function useHighContrastMode(): boolean {
  const [isHighContrast, setIsHighContrast] = useState(() => {
    if (typeof window === "undefined") return false;
    return isHighContrastMode();
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQueries = [
      window.matchMedia("(prefers-contrast: high)"),
      window.matchMedia("(forced-colors: active)"),
    ];

    const handleChange = () => {
      setIsHighContrast(isHighContrastMode());
    };

    mediaQueries.forEach((mq) => {
      if (mq.addEventListener) {
        mq.addEventListener("change", handleChange);
      } else {
        // Fallback for older browsers
        mq.addListener(handleChange);
      }
    });

    return () => {
      mediaQueries.forEach((mq) => {
        if (mq.removeEventListener) {
          mq.removeEventListener("change", handleChange);
        } else {
          mq.removeListener(handleChange);
        }
      });
    };
  }, []);

  return isHighContrast;
}
