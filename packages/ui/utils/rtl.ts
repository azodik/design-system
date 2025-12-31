/**
 * RTL Support utilities - Right-to-left language support
 */

import { useState, useEffect } from "react";

/**
 * Check if current locale is RTL
 */
export function isRTL(locale?: string): boolean {
  if (typeof window === "undefined") return false;

  const currentLocale = locale || navigator.language || "en-US";
  const rtlLocales = [
    "ar", // Arabic
    "he", // Hebrew
    "fa", // Persian
    "ur", // Urdu
    "yi", // Yiddish
  ];

  return rtlLocales.some((rtlLocale) => currentLocale.startsWith(rtlLocale));
}

/**
 * Apply RTL styles to element
 */
export function applyRTLStyles(element: HTMLElement, isRTL: boolean): void {
  if (isRTL) {
    element.setAttribute("dir", "rtl");
    element.style.direction = "rtl";
  } else {
    element.setAttribute("dir", "ltr");
    element.style.direction = "ltr";
  }
}

/**
 * Get RTL-aware margin/padding
 */
export function getRTLSpacing(
  start: string | number,
  end: string | number,
  isRTL: boolean,
): { marginLeft?: string | number; marginRight?: string | number } {
  if (isRTL) {
    return {
      marginRight: start,
      marginLeft: end,
    };
  }
  return {
    marginLeft: start,
    marginRight: end,
  };
}

/**
 * Get RTL-aware transform
 */
export function getRTLTransform(transform: string, isRTL: boolean): string {
  if (isRTL && transform.includes("translateX")) {
    return transform.replace(/translateX\(([^)]+)\)/, (match, value) => {
      const num = parseFloat(value);
      return `translateX(${-num}px)`;
    });
  }
  return transform;
}

/**
 * Hook to detect RTL
 */
export function useRTL(locale?: string): boolean {
  const [rtl, setRTL] = useState(() => {
    if (typeof window === "undefined") return false;
    return isRTL(locale);
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Use requestAnimationFrame to avoid synchronous setState in effect
    requestAnimationFrame(() => {
      setRTL(isRTL(locale));
    });
  }, [locale]);

  return rtl;
}
