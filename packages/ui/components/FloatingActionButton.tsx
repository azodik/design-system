import React from "react";
import { resolveRadiusFactor } from "../utils/radius";

export interface FloatingActionButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "size"
> {
  /**
   * Icon to display in the FAB
   */
  icon: React.ReactNode;
  /**
   * Label text (shown on hover or when expanded)
   */
  label?: string;
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
  /**
   * Position on screen
   */
  position?:
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-left"
    | "bottom-center"
    | "top-center";
  /**
   * Color variant
   */
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  /**
   * Extended FAB (shows label)
   */
  extended?: boolean;
  /**
   * Show mini variant
   */
  mini?: boolean;
  /**
   * Radius variant
   */
  radius?: "none" | "small" | "medium" | "large" | "full";
}

/**
 * Floating Action Button (FAB) component
 * Material Design inspired floating button for primary actions
 *
 * @example
 * ```tsx
 * <FloatingActionButton
 *   icon={<PlusIcon />}
 *   label="Add Item"
 *   onClick={handleAdd}
 *   position="bottom-right"
 * />
 * ```
 */
export function FloatingActionButton({
  icon,
  label,
  size = "medium",
  position = "bottom-right",
  color = "azodik",
  extended = false,
  mini = false,
  radius = "full",
  className = "",
  style,
  ...props
}: FloatingActionButtonProps) {
  const isNamedColor = ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  const sizeClass = mini
    ? "fab-mini"
    : size === "small"
      ? "fab-small"
      : size === "large"
        ? "fab-large"
        : "fab-medium";
  const positionClass = `fab-position-${position}`;

  const fabClasses = [
    "fab",
    sizeClass,
    positionClass,
    extended && "fab-extended",
    isNamedColor ? `fab-color-${color}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--fab-color": color } : {}),
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  return (
    <button
      type="button"
      className={fabClasses}
      style={customStyle}
      aria-label={label || "Floating action button"}
      {...props}
    >
      <span className="fab-icon">{icon}</span>
      {extended && label && <span className="fab-label">{label}</span>}
    </button>
  );
}

export default FloatingActionButton;
