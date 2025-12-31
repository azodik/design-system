import React, { useState, useCallback } from "react";
import Card from "./Card";
import Button from "./Button";
import { Popover } from "./Popover";

export type ActionPriority = "high" | "medium" | "low";

export interface ActionableNotification {
  /**
   * Action ID
   */
  id: string;
  /**
   * Action title
   */
  title: string;
  /**
   * Action description
   */
  description?: string;
  /**
   * Action priority
   */
  priority?: ActionPriority;
  /**
   * Action timestamp
   */
  timestamp?: Date;
  /**
   * Primary action label
   */
  primaryActionLabel: string;
  /**
   * Primary action callback
   */
  onPrimaryAction: () => void;
  /**
   * Secondary action label (optional)
   */
  secondaryActionLabel?: string;
  /**
   * Secondary action callback (optional)
   */
  onSecondaryAction?: () => void;
  /**
   * Dismiss callback
   */
  onDismiss?: () => void;
}

export interface ActionCenterProps {
  /**
   * Actionable notifications
   */
  actions: ActionableNotification[];
  /**
   * Callback when action is completed
   */
  onActionComplete?: (id: string) => void;
  /**
   * Callback when action is dismissed
   */
  onDismiss?: (id: string) => void;
  /**
   * Show action center
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
   * Max actions to show
   */
  maxActions?: number;
}

/**
 * Action Center component - Actionable notifications
 *
 * @example
 * ```tsx
 * <ActionCenter
 *   actions={actionableNotifications}
 *   onActionComplete={handleActionComplete}
 *   onDismiss={handleDismiss}
 * />
 * ```
 */
export function ActionCenter({
  actions,
  onActionComplete,
  onDismiss,
  show: controlledShow,
  onVisibilityChange,
  trigger,
  maxActions = 10,
}: ActionCenterProps) {
  const [internalShow, setInternalShow] = useState(false);
  const show = controlledShow !== undefined ? controlledShow : internalShow;

  const handlePrimaryAction = useCallback(
    (action: ActionableNotification) => {
      action.onPrimaryAction();
      onActionComplete?.(action.id);
    },
    [onActionComplete],
  );

  const handleSecondaryAction = useCallback((action: ActionableNotification) => {
    action.onSecondaryAction?.();
  }, []);

  const handleDismiss = useCallback(
    (id: string) => {
      onDismiss?.(id);
    },
    [onDismiss],
  );

  const handleVisibilityChange = useCallback(
    (newShow: boolean) => {
      if (controlledShow === undefined) {
        setInternalShow(newShow);
      }
      onVisibilityChange?.(newShow);
    },
    [controlledShow, onVisibilityChange],
  );

  const displayActions = actions.slice(0, maxActions);
  const actionCount = actions.length;
  const highPriorityCount = actions.filter((a) => a.priority === "high").length;

  const getPriorityColor = (priority?: ActionPriority): string => {
    switch (priority) {
      case "high":
        return "var(--error-9, #ef4444)";
      case "medium":
        return "var(--warning-9, #f59e0b)";
      case "low":
        return "var(--accent-9, #f97316)";
      default:
        return "var(--accent-9, #f97316)";
    }
  };

  const actionContent = (
    <div className="action-center">
      <div className="action-center-header">
        <h3 className="action-center-title">Actions {actionCount > 0 && `(${actionCount})`}</h3>
        {highPriorityCount > 0 && (
          <span className="action-center-badge">{highPriorityCount} urgent</span>
        )}
      </div>
      <div className="action-center-list">
        {displayActions.length === 0 ? (
          <div className="action-center-empty">No actions</div>
        ) : (
          displayActions.map((action) => (
            <Card key={action.id} className="action-center-item">
              <div className="action-center-item-header">
                <div className="action-center-item-content">
                  <div className="action-center-item-title">{action.title}</div>
                  {action.description && (
                    <div className="action-center-item-description">{action.description}</div>
                  )}
                  {action.timestamp && (
                    <div className="action-center-item-timestamp">
                      {action.timestamp.toLocaleTimeString()}
                    </div>
                  )}
                </div>
                {action.priority && (
                  <div
                    className="action-center-item-priority"
                    style={{ color: getPriorityColor(action.priority) }}
                  >
                    {action.priority === "high" && "!"}
                    {action.priority === "medium" && "•"}
                    {action.priority === "low" && "○"}
                  </div>
                )}
                <button
                  type="button"
                  className="action-center-item-dismiss"
                  onClick={() => handleDismiss(action.id)}
                  aria-label="Dismiss"
                >
                  ×
                </button>
              </div>
              <div className="action-center-item-actions">
                <Button variant="solid" size="sm" onClick={() => handlePrimaryAction(action)}>
                  {action.primaryActionLabel}
                </Button>
                {action.secondaryActionLabel && action.onSecondaryAction && (
                  <Button variant="outline" size="sm" onClick={() => handleSecondaryAction(action)}>
                    {action.secondaryActionLabel}
                  </Button>
                )}
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );

  const defaultTrigger = (
    <Button variant="outline">Actions {actionCount > 0 && `(${actionCount})`}</Button>
  );

  return (
    <Popover
      isOpen={show}
      onClose={() => handleVisibilityChange(false)}
      content={actionContent}
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

export default ActionCenter;
