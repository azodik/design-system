"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";

export interface PullToRefreshProps {
  /**
   * Content to display
   */
  children: React.ReactNode;
  /**
   * Callback when refresh is triggered
   */
  onRefresh: () => Promise<void> | void;
  /**
   * Pull distance threshold (default: 80px)
   */
  threshold?: number;
  /**
   * Disable pull to refresh
   */
  disabled?: boolean;
  /**
   * Custom loading indicator
   */
  loadingIndicator?: React.ReactNode;
  /**
   * Custom pull indicator
   */
  pullIndicator?: React.ReactNode;
  /**
   * Custom className
   */
  className?: string;
}

/**
 * PullToRefresh - Built-in pull-to-refresh for lists
 *
 * @example
 * ```tsx
 * <PullToRefresh onRefresh={handleRefresh}>
 *   <div>List content</div>
 * </PullToRefresh>
 * ```
 */
export function PullToRefresh({
  children,
  onRefresh,
  threshold = 80,
  disabled = false,
  loadingIndicator,
  pullIndicator,
  className = "",
}: PullToRefreshProps) {
  const [isPulling, setIsPulling] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef(0);
  const currentYRef = useRef(0);
  const isDraggingRef = useRef(false);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (disabled || isRefreshing) return;

      const scrollTop = containerRef.current?.scrollTop || 0;
      // Only allow pull if at the top
      if (scrollTop === 0) {
        startYRef.current = e.touches[0].clientY;
        currentYRef.current = e.touches[0].clientY;
        isDraggingRef.current = true;
      }
    },
    [disabled, isRefreshing],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDraggingRef.current || disabled || isRefreshing) return;

      currentYRef.current = e.touches[0].clientY;
      const deltaY = currentYRef.current - startYRef.current;

      // Only allow downward pull
      if (deltaY > 0) {
        setIsPulling(true);
        const distance = Math.min(deltaY * 0.5, threshold * 1.5); // Damping factor
        setPullDistance(distance);
      }
    },
    [disabled, isRefreshing, threshold],
  );

  const handleTouchEnd = useCallback(async () => {
    if (!isDraggingRef.current || disabled || isRefreshing) return;

    isDraggingRef.current = false;

    if (pullDistance >= threshold) {
      setIsRefreshing(true);
      setPullDistance(threshold);

      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
        setIsPulling(false);
        setPullDistance(0);
      }
    } else {
      setIsPulling(false);
      setPullDistance(0);
    }
  }, [disabled, isRefreshing, pullDistance, threshold, onRefresh]);

  // Reset on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current?.scrollTop && containerRef.current.scrollTop > 0) {
        setIsPulling(false);
        setPullDistance(0);
        isDraggingRef.current = false;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const progress = Math.min(pullDistance / threshold, 1);
  const shouldShowIndicator = isPulling || isRefreshing;

  return (
    <div
      ref={containerRef}
      className={`pull-to-refresh ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "relative",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* Pull indicator */}
      {shouldShowIndicator && (
        <div
          className="pull-to-refresh-indicator"
          style={{
            opacity: progress,
            transform: `translateY(${Math.min(pullDistance, threshold)}px)`,
          }}
        >
          {isRefreshing
            ? loadingIndicator || (
                <div className="pull-to-refresh-spinner">
                  <div className="spinner" />
                </div>
              )
            : pullIndicator || (
                <div className="pull-to-refresh-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: `rotate(${progress * 180}deg)`,
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <polyline points="23 4 23 10 17 10" />
                    <polyline points="1 20 1 14 7 14" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                  </svg>
                </div>
              )}
        </div>
      )}

      {/* Content */}
      <div
        style={{
          transform: `translateY(${Math.min(pullDistance, threshold)}px)`,
          transition: isPulling ? "none" : "transform 0.3s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default PullToRefresh;
