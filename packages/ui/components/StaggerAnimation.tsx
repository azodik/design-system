import React, { useState } from "react";
import { getTransitionStyles } from "../utils/transitions";
import { useReducedMotion } from "../utils/reduced-motion";

export interface StaggerAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Children to animate
   */
  children: React.ReactNode;
  /**
   * Stagger delay between items (ms)
   */
  staggerDelay?: number;
  /**
   * Animation type
   */
  animation?: "fade" | "slide" | "scale";
  /**
   * Direction for slide animation
   */
  direction?: "up" | "down" | "left" | "right";
  /**
   * Duration of each animation (ms)
   */
  duration?: number;
}

/**
 * Stagger Animation component for list item animations
 *
 * @example
 * ```tsx
 * <StaggerAnimation staggerDelay={50} animation="fade">
 *   {items.map(item => <Item key={item.id} {...item} />)}
 * </StaggerAnimation>
 * ```
 */
export function StaggerAnimation({
  children,
  staggerDelay = 50,
  animation = "fade",
  direction = "up",
  duration = 300,
  className = "",
  ...props
}: StaggerAnimationProps) {
  const [isVisible] = useState(true);
  const childrenArray = React.Children.toArray(children);
  const reducedMotion = useReducedMotion();
  const actualDelay = reducedMotion ? 0 : staggerDelay;
  const actualDuration = reducedMotion ? 0 : duration;

  const getAnimationStyles = (index: number): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      transition: reducedMotion
        ? "none"
        : getTransitionStyles(
            animation === "fade" ? "fade" : animation === "slide" ? "slide" : "scale",
            {
              duration: actualDuration,
              delay: index * actualDelay,
            },
          ).transition,
    };

    if (!isVisible) {
      switch (animation) {
        case "fade": {
          return { ...baseStyles, opacity: 0 };
        }
        case "slide": {
          const transforms: Record<string, string> = {
            up: "translateY(20px)",
            down: "translateY(-20px)",
            left: "translateX(20px)",
            right: "translateX(-20px)",
          };
          return { ...baseStyles, opacity: 0, transform: transforms[direction] };
        }
        case "scale": {
          return { ...baseStyles, opacity: 0, transform: "scale(0.8)" };
        }
        default: {
          return baseStyles;
        }
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: "none",
    };
  };

  const staggerClasses = ["stagger-animation", reducedMotion ? "az-reduced-motion" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={staggerClasses} {...props}>
      {childrenArray.map((child, index) => (
        <div key={index} className="stagger-animation-item" style={getAnimationStyles(index)}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default StaggerAnimation;
