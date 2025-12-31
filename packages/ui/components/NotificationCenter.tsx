import React, { useState, useCallback } from "react";
import Card from "./Card";
import Button from "./Button";
import { Popover } from "./Popover";

export type NotificationType = "info" | "success" | "warning" | "error";

export interface Notification {
  /**
   * Notification ID
   */
  id: string;
  /**
   * Notification title
   */
  title: string;
  /**
   * Notification message
   */
  message?: string;
  /**
   * Notification type
   */
  type?: NotificationType;
  /**
   * Notification timestamp
   */
  timestamp?: Date;
  /**
   * Action button label
   */
  actionLabel?: string;
  /**
   * Action callback
   */
  onAction?: () => void;
  /**
   * Dismiss callback
   */
  onDismiss?: () => void;
}

export interface NotificationCenterProps {
  /**
   * Notifications
   */
  notifications: Notification[];
  /**
   * Callback when notification is dismissed
   */
  onDismiss?: (id: string) => void;
  /**
   * Callback when all notifications are cleared
   */
  onClearAll?: () => void;
  /**
   * Show notification center
   */
  show?: boolean;
  /**
   * Callback when visibility changes
   */
  onVisibilityChange?: (show: boolean) => void;
  /**
   * Trigger button
   */
  trigger?: React.ReactNode;
  /**
   * Max notifications to show
   */
  maxNotifications?: number;
}

/**
 * Notification Center component - Enhanced notification system
 *
 * @example
 * ```tsx
 * <NotificationCenter
 *   notifications={notifications}
 *   onDismiss={handleDismiss}
 *   onClearAll={handleClearAll}
 * />
 * ```
 */
export function NotificationCenter({
  notifications,
  onDismiss,
  onClearAll,
  show: controlledShow,
  onVisibilityChange,
  trigger,
  maxNotifications = 10,
}: NotificationCenterProps) {
  const [internalShow, setInternalShow] = useState(false);
  const show = controlledShow !== undefined ? controlledShow : internalShow;

  const handleDismiss = useCallback(
    (id: string) => {
      onDismiss?.(id);
    },
    [onDismiss],
  );

  const handleClearAll = useCallback(() => {
    notifications.forEach((notification) => {
      handleDismiss(notification.id);
    });
    onClearAll?.();
  }, [notifications, handleDismiss, onClearAll]);

  const handleVisibilityChange = useCallback(
    (newShow: boolean) => {
      if (controlledShow === undefined) {
        setInternalShow(newShow);
      }
      onVisibilityChange?.(newShow);
    },
    [controlledShow, onVisibilityChange],
  );

  const displayNotifications = notifications.slice(0, maxNotifications);
  const unreadCount = notifications.length;

  const getNotificationIcon = (type?: NotificationType): string => {
    switch (type) {
      case "success":
        return "✓";
      case "warning":
        return "⚠";
      case "error":
        return "✕";
      default:
        return "ℹ";
    }
  };

  const getNotificationColor = (type?: NotificationType): string => {
    switch (type) {
      case "success":
        return "var(--success-9, #22c55e)";
      case "warning":
        return "var(--warning-9, #f59e0b)";
      case "error":
        return "var(--error-9, #ef4444)";
      default:
        return "var(--accent-9, #f97316)";
    }
  };

  const notificationContent = (
    <div className="notification-center">
      <div className="notification-center-header">
        <h3 className="notification-center-title">Notifications</h3>
        {notifications.length > 0 && (
          <Button variant="ghost" size="sm" onClick={handleClearAll}>
            Clear All
          </Button>
        )}
      </div>
      <div className="notification-center-list">
        {displayNotifications.length === 0 ? (
          <div className="notification-center-empty">No notifications</div>
        ) : (
          displayNotifications.map((notification) => (
            <Card key={notification.id} className="notification-center-item">
              <div className="notification-center-item-header">
                <div
                  className="notification-center-item-icon"
                  style={{ color: getNotificationColor(notification.type) }}
                >
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="notification-center-item-content">
                  <div className="notification-center-item-title">{notification.title}</div>
                  {notification.message && (
                    <div className="notification-center-item-message">{notification.message}</div>
                  )}
                  {notification.timestamp && (
                    <div className="notification-center-item-timestamp">
                      {notification.timestamp.toLocaleTimeString()}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="notification-center-item-dismiss"
                  onClick={() => handleDismiss(notification.id)}
                  aria-label="Dismiss"
                >
                  ×
                </button>
              </div>
              {notification.actionLabel && notification.onAction && (
                <div className="notification-center-item-actions">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      notification.onAction?.();
                      handleDismiss(notification.id);
                    }}
                  >
                    {notification.actionLabel}
                  </Button>
                </div>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );

  const defaultTrigger = (
    <Button variant="outline">Notifications {unreadCount > 0 && `(${unreadCount})`}</Button>
  );

  return (
    <Popover
      isOpen={show}
      onClose={() => handleVisibilityChange(false)}
      content={notificationContent}
      position="bottom-end"
    >
      <div
        onClick={() => handleVisibilityChange(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleVisibilityChange(true);
          }
        }}
        role="button"
        tabIndex={0}
      >
        {trigger || defaultTrigger}
      </div>
    </Popover>
  );
}

export default NotificationCenter;
