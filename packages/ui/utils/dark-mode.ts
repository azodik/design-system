/**
 * Enhanced Dark Mode utilities
 */

import { useState, useEffect } from "react";

export type DarkModePreference = "light" | "dark" | "auto";

export interface DarkModeConfig {
  /**
   * Default preference
   */
  defaultPreference?: DarkModePreference;
  /**
   * Storage key for persistence
   */
  storageKey?: string;
  /**
   * Class name to apply to root element
   */
  className?: string;
}

/**
 * Check if dark mode is enabled
 */
export function isDarkMode(): boolean {
  if (typeof window === "undefined") return false;

  // Check system preference
  if (window.matchMedia) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    return prefersDark.matches;
  }

  // Check for dark class on document
  return document.documentElement.classList.contains("dark");
}

/**
 * Enable dark mode
 */
export function enableDarkMode(className = "dark"): void {
  if (typeof document === "undefined") return;
  document.documentElement.classList.add(className);
  document.documentElement.setAttribute("data-theme", "dark");
}

/**
 * Disable dark mode
 */
export function disableDarkMode(className = "dark"): void {
  if (typeof document === "undefined") return;
  document.documentElement.classList.remove(className);
  document.documentElement.setAttribute("data-theme", "light");
}

/**
 * Toggle dark mode
 */
export function toggleDarkMode(className = "dark"): boolean {
  const isDark = isDarkMode();
  if (isDark) {
    disableDarkMode(className);
    return false;
  } else {
    enableDarkMode(className);
    return true;
  }
}

/**
 * Set dark mode preference
 */
export function setDarkModePreference(
  preference: DarkModePreference,
  className = "dark",
  storageKey = "dark-mode-preference",
): void {
  if (typeof window === "undefined" || typeof localStorage === "undefined") return;

  localStorage.setItem(storageKey, preference);

  if (preference === "auto") {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (systemPrefersDark) {
      enableDarkMode(className);
    } else {
      disableDarkMode(className);
    }
  } else if (preference === "dark") {
    enableDarkMode(className);
  } else {
    disableDarkMode(className);
  }
}

/**
 * Get dark mode preference
 */
export function getDarkModePreference(storageKey = "dark-mode-preference"): DarkModePreference {
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    return "auto";
  }

  const stored = localStorage.getItem(storageKey);
  if (stored === "light" || stored === "dark" || stored === "auto") {
    return stored;
  }

  return "auto";
}

/**
 * Hook for dark mode state
 */
export function useDarkMode(config: DarkModeConfig = {}): {
  isDark: boolean;
  toggle: () => void;
  setPreference: (preference: DarkModePreference) => void;
  preference: DarkModePreference;
} {
  const {
    defaultPreference = "auto",
    storageKey = "dark-mode-preference",
    className = "dark",
  } = config;

  const [isDark, setIsDark] = useState(() => isDarkMode());
  const [preference, setPreferenceState] = useState<DarkModePreference>(
    () => getDarkModePreference(storageKey) || defaultPreference,
  );

  useEffect(() => {
    // Initialize from preference
    setDarkModePreference(preference, className, storageKey);

    // Listen for system preference changes
    if (preference === "auto" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
        setIsDark(e.matches);
        if (e.matches) {
          enableDarkMode(className);
        } else {
          disableDarkMode(className);
        }
      };

      handleChange(mediaQuery);

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleChange);
      } else {
        mediaQuery.addListener(handleChange);
      }

      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener("change", handleChange);
        } else {
          mediaQuery.removeListener(handleChange);
        }
      };
    } else {
      // Use requestAnimationFrame to avoid synchronous setState in effect
      requestAnimationFrame(() => {
        setIsDark(isDarkMode());
      });
    }
  }, [preference, className, storageKey]);

  const toggle = () => {
    const newIsDark = toggleDarkMode(className);
    setIsDark(newIsDark);
    const newPreference = newIsDark ? "dark" : "light";
    setPreferenceState(newPreference);
    localStorage.setItem(storageKey, newPreference);
  };

  const setPreference = (newPreference: DarkModePreference) => {
    setPreferenceState(newPreference);
    setDarkModePreference(newPreference, className, storageKey);
    setIsDark(isDarkMode());
  };

  return {
    isDark,
    toggle,
    setPreference,
    preference,
  };
}
