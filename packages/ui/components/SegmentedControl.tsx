"use client";
import React, { useState } from "react";

export interface SegmentedControlOption {
  /**
   * Option value
   */
  value: string;
  /**
   * Option label
   */
  label: string;
  /**
   * Optional icon
   */
  icon?: React.ReactNode;
  /**
   * Disabled state
   */
  disabled?: boolean;
}

export interface SegmentedControlProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  /**
   * Options for the segmented control
   */
  options: SegmentedControlOption[];
  /**
   * Selected value (controlled)
   */
  value?: string;
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Callback when selection changes
   */
  onChange?: (value: string) => void;
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
  /**
   * Color variant
   */
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  /**
   * Full width
   */
  fullWidth?: boolean;
}

/**
 * Segmented Control component (iOS-style)
 *
 * @example
 * ```tsx
 * <SegmentedControl
 *   options={[
 *     { value: "list", label: "List" },
 *     { value: "grid", label: "Grid" },
 *     { value: "map", label: "Map" },
 *   ]}
 *   value={view}
 *   onChange={setView}
 * />
 * ```
 */
export function SegmentedControl({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  size = "medium",
  color = "azodik",
  fullWidth = false,
  className = "",
  style,
  ...props
}: SegmentedControlProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || options[0]?.value || "");
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const isNamedColor = ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  const controlClasses = [
    "segmented-control",
    `segmented-control-size-${size}`,
    fullWidth && "segmented-control-full-width",
    isNamedColor ? `segmented-control-color-${color}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--segmented-color": color } : {}),
  } as React.CSSProperties;

  const selectedIndex = options.findIndex((opt) => opt.value === value);

  return (
    <div className={controlClasses} style={customStyle} role="tablist" {...props}>
      <div
        className="segmented-control-indicator"
        style={{
          transform: `translateX(${selectedIndex * 100}%)`,
          width: `${100 / options.length}%`,
        }}
      />
      {options.map((option) => {
        const isSelected = value === option.value;
        const optionClasses = [
          "segmented-control-option",
          isSelected && "segmented-control-option-selected",
          option.disabled && "segmented-control-option-disabled",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-label={option.label}
            className={optionClasses}
            onClick={() => !option.disabled && handleChange(option.value)}
            disabled={option.disabled}
          >
            {option.icon && <span className="segmented-control-icon">{option.icon}</span>}
            <span className="segmented-control-label">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default SegmentedControl;
