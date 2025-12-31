import { useState, useCallback, useRef } from "react";

export interface UsePullToRefreshOptions {
  /**
   * Callback when refresh is triggered
   */
  onRefresh: () => void | Promise<void>;
  /**
   * Pull distance threshold (px)
   */
  threshold?: number;
  /**
   * Maximum pull distance (px)
   */
  maxDistance?: number;
  /**
   * Resistance factor (0-1)
   */
  resistance?: number;
}

export interface PullToRefreshState {
  /**
   * Is currently pulling
   */
  isPulling: boolean;
  /**
   * Is refreshing
   */
  isRefreshing: boolean;
  /**
   * Current pull distance
   */
  distance: number;
  /**
   * Pull progress (0-1)
   */
  progress: number;
}

/**
 * Hook for pull-to-refresh state management
 *
 * @example
 * ```tsx
 * const pullToRefresh = usePullToRefresh({
 *   onRefresh: async () => {
 *     await fetchData();
 *   },
 * });
 * ```
 */
export function usePullToRefresh(options: UsePullToRefreshOptions) {
  const { onRefresh, threshold = 80, maxDistance = 120, resistance = 0.5 } = options;

  const [state, setState] = useState<PullToRefreshState>({
    isPulling: false,
    isRefreshing: false,
    distance: 0,
    progress: 0,
  });

  const startYRef = useRef<number>(0);
  const currentYRef = useRef<number>(0);

  const handleTouchStart = useCallback((clientY: number) => {
    startYRef.current = clientY;
    currentYRef.current = clientY;
    setState((prev) => ({ ...prev, isPulling: true }));
  }, []);

  const handleTouchMove = useCallback(
    (clientY: number) => {
      if (!state.isPulling && startYRef.current === 0) return;

      const deltaY = clientY - startYRef.current;
      if (deltaY < 0) return; // Only allow downward pull

      const rawDistance = deltaY;
      const resistedDistance =
        rawDistance > threshold ? threshold + (rawDistance - threshold) * resistance : rawDistance;
      const clampedDistance = Math.min(resistedDistance, maxDistance);
      const progress = Math.min(clampedDistance / threshold, 1);

      currentYRef.current = clientY;
      setState((prev) => ({
        ...prev,
        distance: clampedDistance,
        progress,
      }));
    },
    [state.isPulling, threshold, maxDistance, resistance],
  );

  const handleTouchEnd = useCallback(async () => {
    if (state.distance >= threshold && !state.isRefreshing) {
      setState((prev) => ({ ...prev, isRefreshing: true, isPulling: false }));
      try {
        await onRefresh();
      } finally {
        setState({
          isPulling: false,
          isRefreshing: false,
          distance: 0,
          progress: 0,
        });
        startYRef.current = 0;
        currentYRef.current = 0;
      }
    } else {
      setState({
        isPulling: false,
        isRefreshing: false,
        distance: 0,
        progress: 0,
      });
      startYRef.current = 0;
      currentYRef.current = 0;
    }
  }, [state.distance, state.isRefreshing, threshold, onRefresh]);

  const handlers = {
    onTouchStart: (e: React.TouchEvent) => handleTouchStart(e.touches[0].clientY),
    onTouchMove: (e: React.TouchEvent) => handleTouchMove(e.touches[0].clientY),
    onTouchEnd: handleTouchEnd,
  };

  return { state, handlers };
}
