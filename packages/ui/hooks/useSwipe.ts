import { useState, useRef } from "react";
import { useTouch, TouchState } from "./useTouch";

export type SwipeDirection = "left" | "right" | "up" | "down" | null;

export interface UseSwipeOptions {
  /**
   * Minimum distance for a swipe (pixels)
   */
  threshold?: number;
  /**
   * Maximum time for a swipe (milliseconds)
   */
  maxDuration?: number;
  /**
   * Callback when swipe is detected
   */
  onSwipe?: (direction: SwipeDirection, distance: number) => void;
  /**
   * Callback when swipe starts
   */
  onSwipeStart?: () => void;
  /**
   * Callback when swipe ends
   */
  onSwipeEnd?: () => void;
}

/**
 * Hook for detecting swipe gestures
 *
 * @example
 * ```tsx
 * const swipe = useSwipe({
 *   onSwipe: (direction, distance) => {
 *     if (direction === 'left') handleSwipeLeft();
 *   },
 * });
 * ```
 */
export function useSwipe(options: UseSwipeOptions = {}) {
  const { threshold = 50, maxDuration = 300, onSwipe, onSwipeStart, onSwipeEnd } = options;

  const [direction, setDirection] = useState<SwipeDirection>(null);
  const [distance, setDistance] = useState(0);
  const startTimeRef = useRef<number>(0);

  const { state, handlers } = useTouch({
    onTouchStart: () => {
      startTimeRef.current = Date.now();
      onSwipeStart?.();
    },
    onTouchMove: (touchState: TouchState) => {
      const duration = Date.now() - startTimeRef.current;
      const absDeltaX = Math.abs(touchState.deltaX);
      const absDeltaY = Math.abs(touchState.deltaY);

      if (touchState.distance >= threshold && duration <= maxDuration) {
        let newDirection: SwipeDirection = null;

        if (absDeltaX > absDeltaY) {
          newDirection = touchState.deltaX > 0 ? "right" : "left";
          setDistance(absDeltaX);
        } else {
          newDirection = touchState.deltaY > 0 ? "down" : "up";
          setDistance(absDeltaY);
        }

        setDirection(newDirection);
      }
    },
    onTouchEnd: (touchState: TouchState) => {
      const duration = Date.now() - startTimeRef.current;
      const absDeltaX = Math.abs(touchState.deltaX);
      const absDeltaY = Math.abs(touchState.deltaY);

      if (touchState.distance >= threshold && duration <= maxDuration) {
        let finalDirection: SwipeDirection = null;

        if (absDeltaX > absDeltaY) {
          finalDirection = touchState.deltaX > 0 ? "right" : "left";
          setDistance(absDeltaX);
        } else {
          finalDirection = touchState.deltaY > 0 ? "down" : "up";
          setDistance(absDeltaY);
        }

        setDirection(finalDirection);
        onSwipe?.(
          finalDirection,
          finalDirection === "left" || finalDirection === "right" ? absDeltaX : absDeltaY,
        );
      } else {
        setDirection(null);
        setDistance(0);
      }
      onSwipeEnd?.();
    },
  });

  return {
    direction,
    distance,
    isSwiping: state.isTouching,
    handlers,
  };
}
