import React, { useState, useEffect, useRef, useCallback } from "react";
import { BellIcon, XIcon } from "@azodik/icons";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  icon?: React.ReactNode;
  timestamp?: Date | string;
  read?: boolean;
  onClick?: () => void;
  onDismiss?: () => void;
  actions?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

export interface NotificationCenterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of notifications to display
   */
  notifications: Notification[];
  /**
   * Callback when a notification is clicked
   */
  onNotificationClick?: (notification: Notification) => void;
  /**
   * Callback when a notification is dismissed
   */
  onNotificationDismiss?: (notificationId: string) => void;
  /**
   * Callback when "Mark all as read" is clicked
   */
  onMarkAllAsRead?: () => void;
  /**
   * Callback when "Clear all" is clicked
   */
  onClearAll?: () => void;
  /**
   * Panel position relative to trigger
   */
  position?: "right" | "left" | "center";
  /**
   * Show panel footer with "View all" link
   */
  showFooter?: boolean;
  /**
   * Footer link text
   */
  footerLinkText?: string;
  /**
   * Footer link href or onClick handler
   */
  footerLink?: string | (() => void);
  /**
   * Custom trigger button
   */
  trigger?: React.ReactNode;
  /**
   * Show unread badge
   */
  showBadge?: boolean;
  /**
   * Maximum number of notifications to display
   */
  maxNotifications?: number;
  /**
   * Custom empty state message
   */
  emptyMessage?: string;
  /**
   * Language/locale for timestamp formatting (e.g., 'en', 'es', 'fr', 'de', 'hi')
   * Defaults to browser locale or 'en'
   */
  locale?: string;
}

/**
 * NotificationCenter component for displaying a panel of notifications
 *
 * @example
 * ```tsx
 * <NotificationCenter
 *   notifications={notifications}
 *   onNotificationClick={(notification) => console.log(notification)}
 *   onMarkAllAsRead={() => markAllAsRead()}
 * />
 * ```
 */
export function NotificationCenter({
  notifications,
  onNotificationClick,
  onNotificationDismiss,
  onMarkAllAsRead,
  onClearAll,
  position = "right",
  showFooter = true,
  footerLinkText = "View all notifications",
  footerLink,
  trigger,
  showBadge = true,
  maxNotifications,
  emptyMessage = "No notifications",
  locale,
  className = "",
  ...props
}: NotificationCenterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Calculate unread count
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Filter and limit notifications
  const displayedNotifications = maxNotifications
    ? notifications.slice(0, maxNotifications)
    : notifications;

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Node;
      if (
        isOpen &&
        panelRef.current &&
        !panelRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleNotificationClick = useCallback(
    (notification: Notification) => {
      onNotificationClick?.(notification);
      notification.onClick?.();
    },
    [onNotificationClick],
  );

  const handleDismiss = useCallback(
    (notificationId: string, event?: React.MouseEvent) => {
      event?.stopPropagation();
      onNotificationDismiss?.(notificationId);
    },
    [onNotificationDismiss],
  );

  const handleMarkAllAsRead = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      onMarkAllAsRead?.();
    },
    [onMarkAllAsRead],
  );

  const handleClearAll = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      onClearAll?.();
    },
    [onClearAll],
  );

  const formatTimestamp = useCallback(
    (timestamp?: Date | string): string => {
      if (!timestamp) return "";
      const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
      const now = new Date();
      const diff = now.getTime() - date.getTime();

      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(diff / 3600000);
      const days = Math.floor(diff / 86400000);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30);
      const years = Math.floor(days / 365);

      const currentLocale =
        locale || (typeof navigator !== "undefined" ? navigator.language : "en");

      // Use Intl.RelativeTimeFormat if available for language-aware formatting
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const IntlWithRTF = Intl as any;
      if (typeof Intl !== "undefined" && IntlWithRTF.RelativeTimeFormat) {
        try {
          const rtf = new IntlWithRTF.RelativeTimeFormat(currentLocale, {
            numeric: "auto",
          });

          if (Math.abs(minutes) < 1) {
            return rtf.format(0, "second");
          }
          if (Math.abs(minutes) < 60) {
            return rtf.format(-minutes, "minute");
          }
          if (Math.abs(hours) < 24) {
            return rtf.format(-hours, "hour");
          }
          if (Math.abs(days) < 7) {
            return rtf.format(-days, "day");
          }
          if (Math.abs(weeks) < 4) {
            return rtf.format(-weeks, "week");
          }
          if (Math.abs(months) < 12) {
            return rtf.format(-months, "month");
          }
          if (Math.abs(years) >= 1) {
            return rtf.format(-years, "year");
          }
        } catch {
          // Fall through to fallback formatting
        }
      }

      // Fallback formatting with locale support
      if (Math.abs(minutes) < 1) {
        return "Just now";
      }
      if (Math.abs(minutes) < 60) {
        return `${minutes}m ago`;
      }
      if (Math.abs(hours) < 24) {
        return `${hours}h ago`;
      }
      if (Math.abs(days) < 7) {
        return `${days}d ago`;
      }

      // Fallback to locale-specific date format
      return date.toLocaleDateString(currentLocale, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
    [locale],
  );

  const getNotificationIcon = (notification: Notification): React.ReactNode => {
    if (notification.icon) return notification.icon;

    switch (notification.type) {
      case "success":
        return "✓";
      case "warning":
        return "⚠";
      case "error":
        return "✕";
      case "info":
      default:
        return "ℹ";
    }
  };

  const defaultTrigger = (
    <button
      ref={triggerRef}
      className="notification-center-trigger"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Notifications"
      aria-expanded={isOpen}
    >
      <BellIcon size={20} />
      {showBadge && unreadCount > 0 && (
        <span className="notification-center-badge">{unreadCount > 99 ? "99+" : unreadCount}</span>
      )}
    </button>
  );

  return (
    <div className={`notification-center ${className}`} {...props}>
      {trigger || defaultTrigger}

      <div
        ref={panelRef}
        className={`notification-panel position-${position} ${isOpen ? "open" : ""}`}
      >
        {/* Header */}
        <div className="notification-panel-header">
          <h3 className="notification-panel-title">Notifications</h3>
          <div className="notification-panel-actions">
            {unreadCount > 0 && onMarkAllAsRead && (
              <button
                className="notification-panel-action"
                onClick={handleMarkAllAsRead}
                type="button"
              >
                Mark all as read
              </button>
            )}
            {notifications.length > 0 && onClearAll && (
              <button className="notification-panel-action" onClick={handleClearAll} type="button">
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="notification-panel-body">
          {displayedNotifications.length === 0 ? (
            <div className="notification-empty">
              <div className="notification-empty-icon">🔔</div>
              <p className="notification-empty-text">{emptyMessage}</p>
            </div>
          ) : (
            <div className="notification-list">
              {displayedNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`notification-item ${!notification.read ? "unread" : ""}`}
                  onClick={() => handleNotificationClick(notification)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleNotificationClick(notification);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {/* Icon */}
                  <div className={`notification-icon ${notification.type || "info"}`}>
                    {getNotificationIcon(notification)}
                  </div>

                  {/* Content */}
                  <div className="notification-content">
                    <h4 className="notification-title">{notification.title}</h4>
                    <p className="notification-message">{notification.message}</p>
                    <div className="notification-meta">
                      {notification.timestamp && (
                        <span className="notification-time">
                          {formatTimestamp(notification.timestamp)}
                        </span>
                      )}
                      {notification.actions && notification.actions.length > 0 && (
                        <div className="notification-actions">
                          {notification.actions.map((action, index) => (
                            <button
                              key={index}
                              className="notification-action"
                              onClick={(e) => {
                                e.stopPropagation();
                                action.onClick();
                              }}
                              type="button"
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dismiss Button */}
                  {onNotificationDismiss && (
                    <button
                      className="notification-dismiss"
                      onClick={(e) => handleDismiss(notification.id, e)}
                      aria-label="Dismiss notification"
                      type="button"
                    >
                      <XIcon size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {showFooter && footerLink && (
          <div className="notification-panel-footer">
            {typeof footerLink === "string" ? (
              <a href={footerLink} className="notification-panel-footer-link">
                {footerLinkText}
              </a>
            ) : (
              <button
                className="notification-panel-footer-link"
                onClick={footerLink}
                type="button"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {footerLinkText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationCenter;
