import React from "react";

export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Group label
   */
  label?: string;
  /**
   * Group description
   */
  description?: string;
  /**
   * Fields in this group
   */
  children: React.ReactNode;
  /**
   * Layout direction
   */
  direction?: "row" | "column";
  /**
   * Gap between fields
   */
  gap?: number | string;
  /**
   * Show border
   */
  bordered?: boolean;
}

/**
 * Field Group component for grouping related form fields
 *
 * @example
 * ```tsx
 * <FieldGroup label="Personal Information" description="Enter your details">
 *   <Input label="First Name" />
 *   <Input label="Last Name" />
 * </FieldGroup>
 * ```
 */
export function FieldGroup({
  label,
  description,
  children,
  direction = "column",
  gap = 16,
  bordered = false,
  className = "",
  style,
  ...props
}: FieldGroupProps) {
  const fieldGroupClasses = [
    "field-group",
    `field-group-${direction}`,
    bordered && "field-group-bordered",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    gap: typeof gap === "number" ? `${gap}px` : gap,
  } as React.CSSProperties;

  return (
    <div className={fieldGroupClasses} style={customStyle} {...props}>
      {(label || description) && (
        <div className="field-group-header">
          {label && <h3 className="field-group-label">{label}</h3>}
          {description && <p className="field-group-description">{description}</p>}
        </div>
      )}
      <div className="field-group-fields">{children}</div>
    </div>
  );
}

export default FieldGroup;
