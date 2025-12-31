/**
 * Hooks API utilities - Expose hooks for advanced usage
 */

/**
 * Re-export all hooks for convenience
 * This allows users to import hooks directly from the main package
 */

// Mobile hooks
export { useTouch } from "../hooks/useTouch";
export { useSwipe } from "../hooks/useSwipe";
export { useOrientation } from "../hooks/useOrientation";
export { useViewportHeight } from "../hooks/useViewportHeight";
export { usePullToRefresh } from "../hooks/usePullToRefresh";

// Form hooks
export { useAutoSave } from "../hooks/useAutoSave";

// Accessibility hooks
export { useHighContrastMode } from "../utils/high-contrast";
export { useReducedMotion } from "../utils/reduced-motion";
export { useRTL } from "../utils/rtl";

// Theme hooks
export { useDarkMode } from "../utils/dark-mode";

/**
 * Hook categories for documentation
 */
export const HookCategories = {
  mobile: ["useTouch", "useSwipe", "useOrientation", "useViewportHeight", "usePullToRefresh"],
  form: ["useAutoSave"],
  accessibility: ["useHighContrastMode", "useReducedMotion", "useRTL"],
  theme: ["useDarkMode"],
} as const;
