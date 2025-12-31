/**
 * Micro-interactions utilities - Button press, hover effects
 */

import { useState, useCallback } from "react";

export interface MicroInteractionState {
  /**
   * Is currently pressed
   */
  isPressed: boolean;
  /**
   * Is currently hovering
   */
  isHovering: boolean;
  /**
   * Is currently focused
   */
  isFocused: boolean;
}

/**
 * Hook for micro-interactions (press, hover, focus)
 *
 * @example
 * ```tsx
 * const { handlers, state } = useMicroInteraction();
 * <button {...handlers}>Click me</button>
 * ```
 */
export function useMicroInteraction() {
  const [state, setState] = useState<MicroInteractionState>({
    isPressed: false,
    isHovering: false,
    isFocused: false,
  });

  const handleMouseDown = useCallback(() => {
    setState((prev) => ({ ...prev, isPressed: true }));
  }, []);

  const handleMouseUp = useCallback(() => {
    setState((prev) => ({ ...prev, isPressed: false }));
  }, []);

  const handleMouseEnter = useCallback(() => {
    setState((prev) => ({ ...prev, isHovering: true }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setState((prev) => ({ ...prev, isHovering: false, isPressed: false }));
  }, []);

  const handleFocus = useCallback(() => {
    setState((prev) => ({ ...prev, isFocused: true }));
  }, []);

  const handleBlur = useCallback(() => {
    setState((prev) => ({ ...prev, isFocused: false }));
  }, []);

  const handlers = {
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  return { handlers, state };
}

/**
 * Get micro-interaction classes
 */
export function getMicroInteractionClasses(state: MicroInteractionState): string {
  const classes: string[] = [];

  if (state.isPressed) {
    classes.push("micro-interaction-pressed");
  }
  if (state.isHovering) {
    classes.push("micro-interaction-hovering");
  }
  if (state.isFocused) {
    classes.push("micro-interaction-focused");
  }

  return classes.join(" ");
}
