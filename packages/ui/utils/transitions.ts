/**
 * Transition system utilities for consistent animations
 */

export type TransitionType = "fade" | "slide" | "scale" | "rotate" | "blur";

export interface TransitionConfig {
  /**
   * Transition duration (ms)
   */
  duration?: number;
  /**
   * Transition easing function
   */
  easing?: string;
  /**
   * Transition delay (ms)
   */
  delay?: number;
}

export const TRANSITION_DEFAULTS: Record<TransitionType, TransitionConfig> = {
  fade: { duration: 200, easing: "ease-in-out" },
  slide: { duration: 300, easing: "ease-out" },
  scale: { duration: 200, easing: "ease-out" },
  rotate: { duration: 300, easing: "ease-in-out" },
  blur: { duration: 200, easing: "ease-in-out" },
};

/**
 * Get transition CSS string
 */
export function getTransition(
  type: TransitionType | TransitionType[],
  config: TransitionConfig = {},
): string {
  const types = Array.isArray(type) ? type : [type];
  const transitions = types.map((t) => {
    const defaultConfig = TRANSITION_DEFAULTS[t];
    const finalConfig = { ...defaultConfig, ...config };
    const property = getTransitionProperty(t);
    return `${property} ${finalConfig.duration}ms ${finalConfig.easing} ${finalConfig.delay || 0}ms`;
  });
  return transitions.join(", ");
}

/**
 * Get CSS property for transition type
 */
function getTransitionProperty(type: TransitionType): string {
  switch (type) {
    case "fade":
      return "opacity";
    case "slide":
      return "transform";
    case "scale":
      return "transform";
    case "rotate":
      return "transform";
    case "blur":
      return "filter";
    default:
      return "all";
  }
}

/**
 * Get transition styles object
 */
export function getTransitionStyles(
  type: TransitionType | TransitionType[],
  config: TransitionConfig = {},
): React.CSSProperties {
  return {
    transition: getTransition(type, config),
  };
}
