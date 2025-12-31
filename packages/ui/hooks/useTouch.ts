import { useState, useCallback, useRef } from "react";

export interface TouchState {
  isTouching: boolean;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  deltaX: number;
  deltaY: number;
  distance: number;
}

export interface UseTouchOptions {
  /**
   * Callback when touch starts
   */
  onTouchStart?: (state: TouchState) => void;
  /**
   * Callback when touch moves
   */
  onTouchMove?: (state: TouchState) => void;
  /**
   * Callback when touch ends
   */
  onTouchEnd?: (state: TouchState) => void;
  /**
   * Threshold for touch movement (pixels)
   */
  threshold?: number;
}

/**
 * Hook for detecting touch gestures
 *
 * @example
 * ```tsx
 * const touch = useTouch({
 *   onTouchStart: (state) => console.log('Touch started', state),
 *   onTouchMove: (state) => console.log('Moving', state.deltaX),
 * });
 * ```
 */
export function useTouch(options: UseTouchOptions = {}) {
  const { onTouchStart, onTouchMove, onTouchEnd, threshold = 0 } = options;
  const [state, setState] = useState<TouchState>({
    isTouching: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    deltaX: 0,
    deltaY: 0,
    distance: 0,
  });

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const updateState = useCallback(
    (touch: Touch, isStart = false) => {
      const x = touch.clientX;
      const y = touch.clientY;

      if (isStart) {
        touchStartRef.current = { x, y };
        setState({
          isTouching: true,
          startX: x,
          startY: y,
          currentX: x,
          currentY: y,
          deltaX: 0,
          deltaY: 0,
          distance: 0,
        });
      } else if (touchStartRef.current) {
        const deltaX = x - touchStartRef.current.x;
        const deltaY = y - touchStartRef.current.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const newState: TouchState = {
          isTouching: true,
          startX: touchStartRef.current.x,
          startY: touchStartRef.current.y,
          currentX: x,
          currentY: y,
          deltaX,
          deltaY,
          distance,
        };

        setState(newState);
        return newState;
      }
      return state;
    },
    [state],
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const newState = updateState(e.touches[0], true);
        onTouchStart?.(newState);
      }
    },
    [updateState, onTouchStart],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length > 0 && touchStartRef.current) {
        const newState = updateState(e.touches[0], false);
        if (newState.distance >= threshold) {
          onTouchMove?.(newState);
        }
      }
    },
    [updateState, onTouchMove, threshold],
  );

  const handleTouchEnd = useCallback(() => {
    if (touchStartRef.current) {
      const finalState = state;
      setState({
        ...finalState,
        isTouching: false,
      });
      onTouchEnd?.(finalState);
      touchStartRef.current = null;
    }
  }, [state, onTouchEnd]);

  const handlers = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };

  return { state, handlers };
}
