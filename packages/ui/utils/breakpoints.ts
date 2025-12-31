/**
 * Enhanced breakpoint system with industry-standard breakpoints
 * Based on Tailwind CSS breakpoints for consistency
 */
export const breakpoints = {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export type BreakpointKey = keyof typeof breakpoints;

/**
 * Responsive prop type that allows either a single value
 * or an object with breakpoint-specific values
 */
export type ResponsiveProp<T> =
  | T
  | {
      base?: T;
      xs?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      "2xl"?: T;
    };

/**
 * Resolves a responsive prop to a single value based on current breakpoint
 * @param prop - The responsive prop value
 * @param currentBreakpoint - Current active breakpoint
 * @returns The resolved value for the current breakpoint
 */
export function resolveResponsiveProp<T>(
  prop: ResponsiveProp<T>,
  currentBreakpoint: BreakpointKey,
): T | undefined {
  // If it's not an object, return as-is
  if (typeof prop !== "object" || prop === null || Array.isArray(prop)) {
    return prop as T;
  }

  // Type guard to check if it's the responsive object type
  const isResponsiveObject = (
    p: ResponsiveProp<T>,
  ): p is {
    base?: T;
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    "2xl"?: T;
  } => {
    return typeof p === "object" && p !== null && !Array.isArray(p);
  };

  if (!isResponsiveObject(prop)) {
    return prop as T;
  }

  // Get breakpoint order (from largest to smallest)
  const breakpointOrder: BreakpointKey[] = ["2xl", "xl", "lg", "md", "sm", "xs"];

  // Find the current breakpoint index
  const currentIndex = breakpointOrder.indexOf(currentBreakpoint);

  // Find the closest matching breakpoint value
  for (let i = currentIndex; i < breakpointOrder.length; i++) {
    const bp = breakpointOrder[i];
    if (bp in prop && prop[bp] !== undefined) {
      return prop[bp];
    }
  }

  // Fallback to base
  return prop.base;
}

/**
 * Creates a media query string for a breakpoint
 * @param breakpoint - Breakpoint key
 * @param direction - 'up' for min-width, 'down' for max-width
 * @returns Media query string
 */
export function createMediaQuery(
  breakpoint: BreakpointKey,
  direction: "up" | "down" = "up",
): string {
  const value = breakpoints[breakpoint];

  if (breakpoint === "xs") {
    return direction === "up" ? "(min-width: 0px)" : "(max-width: 639px)";
  }

  if (direction === "up") {
    return `(min-width: ${value})`;
  }

  // For 'down', we need to use the previous breakpoint
  const breakpointOrder: BreakpointKey[] = ["xs", "sm", "md", "lg", "xl", "2xl"];
  const currentIndex = breakpointOrder.indexOf(breakpoint);
  if (currentIndex > 0) {
    const prevBreakpoint = breakpointOrder[currentIndex - 1];
    const prevValue = breakpoints[prevBreakpoint];
    // Convert to number and subtract 1px for max-width
    const numValue = parseInt(prevValue, 10);
    return `(max-width: ${numValue - 1}px)`;
  }

  return `(max-width: ${value})`;
}

/**
 * Gets the current breakpoint based on window width
 * @param width - Window width (defaults to window.innerWidth)
 * @returns Current breakpoint key
 */
export function getCurrentBreakpoint(width?: number): BreakpointKey {
  if (typeof window === "undefined") {
    return "lg"; // SSR-safe default
  }

  const w = width ?? window.innerWidth;

  if (w >= 1536) return "2xl";
  if (w >= 1280) return "xl";
  if (w >= 1024) return "lg";
  if (w >= 768) return "md";
  if (w >= 640) return "sm";
  return "xs";
}
