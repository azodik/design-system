"use client";
import React, { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import Card from "./Card";

export interface UpdateNotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Show update notification
   */
  show?: boolean;
  /**
   * Callback when update is accepted
   */
  onUpdate?: () => void;
  /**
   * Callback when update is dismissed
   */
  onDismiss?: () => void;
  /**
   * Custom update button text
   */
  updateButtonText?: string;
  /**
   * Custom dismiss button text
   */
  dismissButtonText?: string;
  /**
   * Custom title
   */
  title?: string;
  /**
   * Custom description
   */
  description?: string;
  /**
   * Auto-dismiss after delay (ms)
   */
  autoDismiss?: number;
}

/**
 * App Update Notification component
 *
 * @example
 * ```tsx
 * <UpdateNotification
 *   show={hasUpdate}
 *   onUpdate={handleUpdate}
 *   onDismiss={handleDismiss}
 * />
 * ```
 */
export function UpdateNotification({
  show: controlledShow,
  onUpdate,
  onDismiss,
  updateButtonText = "Update Now",
  dismissButtonText = "Later",
  title = "Update Available",
  description = "A new version of this app is available.",
  autoDismiss,
  className = "",
  ...props
}: UpdateNotificationProps) {
  const [internalShow, setInternalShow] = useState(false);

  useEffect(() => {
    // Listen for service worker updates
    if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
      const handleServiceWorkerUpdate = () => {
        if (controlledShow === undefined) {
          setInternalShow(true);
        }
      };

      navigator.serviceWorker.addEventListener("controllerchange", handleServiceWorkerUpdate);

      return () => {
        navigator.serviceWorker.removeEventListener("controllerchange", handleServiceWorkerUpdate);
      };
    }
  }, [controlledShow]);

  const handleDismiss = useCallback(() => {
    if (controlledShow === undefined) {
      setInternalShow(false);
    }
    onDismiss?.();
  }, [controlledShow, onDismiss]);

  const show = controlledShow !== undefined ? controlledShow : internalShow;

  useEffect(() => {
    if (autoDismiss && show) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, autoDismiss);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, show, handleDismiss]);

  const handleUpdate = () => {
    if (typeof window !== "undefined" && "location" in window) {
      window.location.reload();
    }
    onUpdate?.();
    if (controlledShow === undefined) {
      setInternalShow(false);
    }
  };

  if (!show) return null;

  const updateNotificationClasses = ["update-notification", className].filter(Boolean).join(" ");

  return (
    <Card className={updateNotificationClasses} {...props}>
      <div className="update-notification-content">
        <h3 className="update-notification-title">{title}</h3>
        <p className="update-notification-description">{description}</p>
        <div className="update-notification-actions">
          <Button variant="solid" onClick={handleUpdate}>
            {updateButtonText}
          </Button>
          <Button variant="ghost" onClick={handleDismiss}>
            {dismissButtonText}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default UpdateNotification;
