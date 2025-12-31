import React from "react";
import type { SemanticSize } from "../utils/size-variant-mapping";
import Button from "./Button";
import { Stack } from "./Stack";

export interface QuickAction {
  /**
   * Action label
   */
  label: string;
  /**
   * Action icon
   */
  icon?: React.ReactNode;
  /**
   * Action callback
   */
  onClick: () => void;
  /**
   * Action variant
   */
  variant?: "solid" | "soft" | "outline" | "ghost";
  /**
   * Action color
   */
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  /**
   * Action is disabled
   */
  disabled?: boolean;
}

export interface QuickActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Actions to display
   */
  actions: QuickAction[];
  /**
   * Layout direction
   */
  direction?: "row" | "column";
  /**
   * Size variant
   */
  size?: SemanticSize;
  /**
   * Wrap actions
   */
  wrap?: boolean;
}

/**
 * Quick Actions component for action button groups
 *
 * @example
 * ```tsx
 * <QuickActions
 *   actions={[
 *     { label: "Edit", icon: <EditIcon />, onClick: handleEdit },
 *     { label: "Delete", icon: <DeleteIcon />, onClick: handleDelete, color: "ruby" },
 *   ]}
 * />
 * ```
 */
export function QuickActions({
  actions,
  direction = "row",
  size = "sm",
  wrap = false,
  className = "",
  ...props
}: QuickActionsProps) {
  const quickActionsClasses = ["quick-actions", className].filter(Boolean).join(" ");

  return (
    <div className={quickActionsClasses} {...props}>
      <Stack direction={direction} gap={8} wrap={wrap}>
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant || "outline"}
            color={action.color}
            size={size}
            icon={action.icon}
            onClick={action.onClick}
            disabled={action.disabled}
          >
            {action.label}
          </Button>
        ))}
      </Stack>
    </div>
  );
}

export default QuickActions;
