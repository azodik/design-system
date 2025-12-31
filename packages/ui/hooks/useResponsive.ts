import { useState, useEffect } from "react";

export type DeviceType = "mobile" | "tablet" | "desktop";

export interface ResponsiveConfig {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}

export interface UseResponsiveReturn {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  matches: (query: string) => boolean;
}

// Default breakpoints
const DEFAULT_BREAKPOINTS = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
};

export function useResponsive(config?: ResponsiveConfig): UseResponsiveReturn {
  // Default to desktop for SSR safety
  const [deviceType, setDeviceType] = useState<DeviceType>(() => {
    // SSR-safe default
    if (typeof window === "undefined") return "desktop";
    return "desktop";
  });

  useEffect(() => {
    // SSR guard
    if (typeof window === "undefined") return;

    // Use custom breakpoints or defaults
    const breakpoints = {
      mobile: config?.mobile || DEFAULT_BREAKPOINTS.mobile,
      tablet: config?.tablet || DEFAULT_BREAKPOINTS.tablet,
      desktop: config?.desktop || DEFAULT_BREAKPOINTS.desktop,
    };

    // Create media query lists
    const queries = Object.keys(breakpoints).map((key) =>
      window.matchMedia(breakpoints[key as keyof typeof breakpoints]),
    );

    // Function to determine device type
    const updateDeviceType = () => {
      if (queries[0]?.matches) {
        setDeviceType("mobile");
      } else if (queries[1]?.matches) {
        setDeviceType("tablet");
      } else if (queries[2]?.matches) {
        setDeviceType("desktop");
      }
    };

    // Initial check
    updateDeviceType();

    // Add listeners
    queries.forEach((query) => {
      query.addEventListener("change", updateDeviceType);
    });

    // Cleanup
    return () => {
      queries.forEach((query) => {
        query.removeEventListener("change", updateDeviceType);
      });
    };
  }, [config]);

  // Function to check custom media queries
  const matches = (query: string): boolean => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  return {
    deviceType,
    isMobile: deviceType === "mobile",
    isTablet: deviceType === "tablet",
    isDesktop: deviceType === "desktop",
    matches,
  };
}
