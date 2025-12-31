import React from "react";
import NotificationCenter, { Notification } from "./NotificationCenter";

export interface NotificationGroup {
  /**
   * Group ID
   */
  id: string;
  /**
   * Group label
   */
  label: string;
  /**
   * Notifications in this group
   */
  notifications: Notification[];
  /**
   * Group icon (optional)
   */
  icon?: React.ReactNode;
}

export interface NotificationGroupsProps {
  /**
   * Notification groups
   */
  groups: NotificationGroup[];
  /**
   * Callback when notification is dismissed
   */
  onDismiss?: (groupId: string, notificationId: string) => void;
  /**
   * Callback when all notifications in a group are cleared
   */
  onClearGroup?: (groupId: string) => void;
  /**
   * Show notification groups
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
   * Max notifications per group
   */
  maxNotificationsPerGroup?: number;
}

/**
 * Notification Groups component - Group related notifications
 *
 * @example
 * ```tsx
 * <NotificationGroups
 *   groups={notificationGroups}
 *   onDismiss={handleDismiss}
 *   onClearGroup={handleClearGroup}
 * />
 * ```
 */
export function NotificationGroups({
  groups,
  onDismiss,
  onClearGroup,
  show: controlledShow,
  onVisibilityChange,
  trigger,
  maxNotificationsPerGroup = 5,
}: NotificationGroupsProps) {
  const allNotifications: Notification[] = groups.reduce<Notification[]>((acc, group) => {
    const groupNotifications = group.notifications.map((notification) => ({
      ...notification,
      id: `${group.id}-${notification.id}`,
    }));
    return [...acc, ...groupNotifications];
  }, []);

  const handleDismiss = (notificationId: string) => {
    const [groupId, notifId] = notificationId.split("-", 2);
    onDismiss?.(groupId, notifId);
  };

  const handleClearAll = () => {
    groups.forEach((group) => {
      onClearGroup?.(group.id);
    });
  };

  // Group notifications by their group
  const _groupedNotifications = groups.map((group) => ({
    ...group,
    notifications: group.notifications.slice(0, maxNotificationsPerGroup),
  }));

  return (
    <NotificationCenter
      notifications={allNotifications}
      onDismiss={handleDismiss}
      onClearAll={handleClearAll}
      show={controlledShow}
      onVisibilityChange={onVisibilityChange}
      trigger={trigger}
      maxNotifications={groups.reduce(
        (sum, group) => sum + Math.min(group.notifications.length, maxNotificationsPerGroup),
        0,
      )}
    />
  );
}

export default NotificationGroups;
