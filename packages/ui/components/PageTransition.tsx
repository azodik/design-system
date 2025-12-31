import React, { useEffect, useState } from "react";
import { useReducedMotion } from "../utils/reduced-motion";
import { getTransitionStyles } from "../utils/transitions";

export type TransitionType = "fade" | "slide" | "scale" | "none";

export interface PageTransitionProps {
  /**
   * Children to transition
   */
  children: React.ReactNode;
  /**
   * Transition type
   */
  type?: TransitionType;
  /**
   * Transition duration (ms)
   */
  duration?: number;
  /**
   * Show transition
   */
  show?: boolean;
  /**
   * Direction for slide transition
   */
  direction?: "left" | "right" | "up" | "down";
}

/**
 * Page Transition component - Route transition animations
 *
 * @example
 * ```tsx
 * <PageTransition type="fade" show={isVisible}>
 *   <PageContent />
 * </PageTransition>
 * ```
 */
export function PageTransition({
  children,
  type = "fade",
  duration = 300,
  show = true,
  direction = "right",
}: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(show);
  const [shouldRender, setShouldRender] = useState(show);
  const reducedMotion = useReducedMotion();
  const actualDuration = reducedMotion ? 0 : duration;

  useEffect(() => {
    if (show) {
      // Use requestAnimationFrame to avoid synchronous setState in effect
      requestAnimationFrame(() => {
        setShouldRender(true);
        // Trigger animation after render
        setTimeout(() => setIsVisible(true), 10);
      });
    } else {
      // Use requestAnimationFrame to avoid synchronous setState in effect
      requestAnimationFrame(() => {
        setIsVisible(false);
        // Remove from DOM after animation
        setTimeout(() => setShouldRender(false), actualDuration);
      });
    }
  }, [show, actualDuration]);

  if (!shouldRender) return null;

  const getTransitionStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      transition: reducedMotion
        ? "none"
        : getTransitionStyles(type === "fade" ? "fade" : type === "slide" ? "slide" : "scale", {
            duration: actualDuration,
          }).transition,
    };

    if (!isVisible) {
      let transform = "none";
      switch (type) {
        case "fade": {
          return { ...baseStyle, opacity: 0 };
        }
        case "slide": {
          const transforms: Record<string, string> = {
            left: "translateX(-100%)",
            right: "translateX(100%)",
            up: "translateY(-100%)",
            down: "translateY(100%)",
          };
          transform = transforms[direction];
          return { ...baseStyle, opacity: 0, transform };
        }
        case "scale": {
          return { ...baseStyle, opacity: 0, transform: "scale(0.95)" };
        }
        default: {
          return baseStyle;
        }
      }
    }

    return {
      ...baseStyle,
      opacity: 1,
      transform: "none",
    };
  };

  return (
    <div
      className={`page-transition ${reducedMotion ? "az-reduced-motion" : ""}`}
      style={getTransitionStyle()}
    >
      {children}
    </div>
  );
}

export default PageTransition;
