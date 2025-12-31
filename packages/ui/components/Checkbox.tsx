import React from "react";
import { resolveRadiusFactor } from "../utils/radius";
import type { SemanticSize } from "../utils/size-variant-mapping";
import { mapSemanticToNumeric } from "../utils/size-variant-mapping";

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  label?: string;
  help?: string;
  error?: string;
  size?: SemanticSize;
  radius?: "none" | "small" | "medium" | "large" | "full";
  className?: string;
}

export function Checkbox({
  label,
  help,
  error,
  size = "md",
  radius,
  className = "",
  id,
  name,
  style,
  ...props
}: CheckboxProps) {
  const generatedId = React.useId();
  const checkboxId = id || name || generatedId;

  const customStyle: React.CSSProperties = {
    ...style,
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  const containerClasses = [
    "az-Checkbox checkbox",
    `az-r-size-${mapSemanticToNumeric(size)}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="form-group">
      <div className={containerClasses} style={customStyle}>
        <input type="checkbox" id={checkboxId} name={name || checkboxId} {...props} />
        <span className="checkbox-custom" />
        {label && <label htmlFor={checkboxId}>{label}</label>}
      </div>
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}
