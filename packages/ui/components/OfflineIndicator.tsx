"use client";
import React, { useState, useEffect } from "react";
import { StatusBadge } from "./StatusBadge";

export interface OfflineIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Show indicator
   */
  show?: boolean;
  /**
   * Custom offline message
   */
  message?: string;
  /**
   * Position of indicator
   */
  position?: "top" | "bottom";
}

/**
 * Offline Indicator component for network status
 *
 * @example
 * ```tsx
 * <OfflineIndicator />
 * ```
 */
export function OfflineIndicator({
  show,
  message = "You're offline. Some features may be unavailable.",
  position = "top",
  className = "",
  ...props
}: OfflineIndicatorProps) {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (show === false || isOnline) return null;

  const indicatorClasses = ["offline-indicator", `offline-indicator-${position}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={indicatorClasses} {...props}>
      <StatusBadge status="offline" />
      <span className="offline-indicator-message">{message}</span>
    </div>
  );
}

export default OfflineIndicator;
