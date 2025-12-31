import React from "react";

export interface ConditionalFieldProps {
  /**
   * Condition to show field
   */
  condition: boolean;
  /**
   * Field to show/hide
   */
  children: React.ReactNode;
  /**
   * Animation when showing/hiding
   */
  animate?: boolean;
}

/**
 * Conditional Field component - Show/hide fields based on conditions
 *
 * @example
 * ```tsx
 * <ConditionalField condition={showAdvanced}>
 *   <Input label="Advanced Option" />
 * </ConditionalField>
 * ```
 */
export function ConditionalField({ condition, children, animate = true }: ConditionalFieldProps) {
  if (!condition) return null;

  const conditionalClasses = ["conditional-field", animate && "conditional-field-animate"]
    .filter(Boolean)
    .join(" ");

  return <div className={conditionalClasses}>{children}</div>;
}

export default ConditionalField;
