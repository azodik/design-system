import React, { useState, useRef, useEffect } from "react";
import { useReducedMotion } from "../utils/reduced-motion";
import { useHighContrastMode } from "../utils/high-contrast";

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  disabled?: boolean;
}

export function Tooltip({
  children,
  content,
  position = "top",
  delay = 200,
  disabled = false,
  className = "",
  ...props
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion = useReducedMotion();
  const highContrast = useHighContrastMode();
  const actualDelay = reducedMotion ? 0 : delay;

  const handleMouseEnter = () => {
    if (disabled) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, actualDelay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`tooltip-wrapper ${className}`}
      role="presentation"
      tabIndex={-1}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {React.cloneElement(
        children as React.ReactElement,
        {
          ...((children as React.ReactElement).props || {}),
          ref: (node: HTMLElement | null) => {
            triggerRef.current = node;
            const childElement = children as React.ReactElement;
            if (childElement && typeof childElement === "object" && "ref" in childElement) {
              const childRef = (childElement as { ref?: React.Ref<HTMLElement> }).ref;
              if (typeof childRef === "function") {
                childRef(node);
              } else if (childRef && typeof childRef === "object" && "current" in childRef) {
                // Create a new ref object to avoid mutating the original
                const mutableRef = childRef as React.MutableRefObject<HTMLElement | null>;
                // eslint-disable-next-line react-hooks/immutability
                mutableRef.current = node;
              }
            }
          },
        } as React.HTMLAttributes<HTMLElement>,
      )}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`tooltip tooltip-${position} ${highContrast ? "az-high-contrast" : ""} ${reducedMotion ? "az-reduced-motion" : ""}`}
          role="tooltip"
          aria-live="polite"
          style={{
            transition: reducedMotion ? "none" : undefined,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}
