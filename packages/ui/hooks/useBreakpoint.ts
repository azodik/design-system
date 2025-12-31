import { useState, useEffect } from "react";
import { BreakpointKey, getCurrentBreakpoint } from "../utils/breakpoints";

export interface UseBreakpointReturn {
  breakpoint: BreakpointKey;
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
  isAtLeast: (bp: BreakpointKey) => boolean;
  isAtMost: (bp: BreakpointKey) => boolean;
  matches: (query: string) => boolean;
}

/**
 * Hook to track current breakpoint and provide breakpoint utilities
 * @returns Breakpoint information and utility functions
 */
export function useBreakpoint(): UseBreakpointReturn {
  const [breakpoint, setBreakpoint] = useState<BreakpointKey>(() => {
    if (typeof window === "undefined") return "lg"; // SSR-safe default
    return getCurrentBreakpoint();
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateBreakpoint = () => {
      setBreakpoint(getCurrentBreakpoint());
    };

    // Initial check
    updateBreakpoint();

    // Listen for resize events
    window.addEventListener("resize", updateBreakpoint);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  const isAtLeast = (bp: BreakpointKey): boolean => {
    const order: BreakpointKey[] = ["xs", "sm", "md", "lg", "xl", "2xl"];
    const currentIndex = order.indexOf(breakpoint);
    const targetIndex = order.indexOf(bp);
    return currentIndex >= targetIndex;
  };

  const isAtMost = (bp: BreakpointKey): boolean => {
    const order: BreakpointKey[] = ["xs", "sm", "md", "lg", "xl", "2xl"];
    const currentIndex = order.indexOf(breakpoint);
    const targetIndex = order.indexOf(bp);
    return currentIndex <= targetIndex;
  };

  const matches = (query: string): boolean => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  return {
    breakpoint,
    isXs: breakpoint === "xs",
    isSm: breakpoint === "sm",
    isMd: breakpoint === "md",
    isLg: breakpoint === "lg",
    isXl: breakpoint === "xl",
    is2Xl: breakpoint === "2xl",
    isAtLeast,
    isAtMost,
    matches,
  };
}
