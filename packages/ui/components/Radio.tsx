import React from "react";
import { resolveRadiusFactor } from "../utils/radius";
import type { SemanticSize } from "../utils/size-variant-mapping";
import { getSizeClassName } from "../utils/size-variant-mapping";

export interface RadioProps extends Omit<
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

export function Radio({
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
}: RadioProps) {
  const generatedId = React.useId();
  const radioId = id || name || generatedId;

  const sizeClassName = getSizeClassName(size);

  const customStyle: React.CSSProperties = {
    ...style,
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  const containerClasses = ["az-Radio radio", sizeClassName, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="form-group">
      <div className={containerClasses} style={customStyle}>
        <input type="radio" id={radioId} name={name || radioId} {...props} />
        <span className="radio-custom" />
        {label && <label htmlFor={radioId}>{label}</label>}
      </div>
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}
