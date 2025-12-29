import React from "react";
import { resolveRadiusFactor } from "../utils/radius";

export interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  label?: string;
  help?: string;
  error?: string;
  size?: "1" | "2" | "3";
  radius?: "none" | "small" | "medium" | "large" | "full";
  className?: string;
}

export function Radio({
  label,
  help,
  error,
  size = "2",
  radius,
  className = "",
  id,
  name,
  style,
  ...props
}: RadioProps) {
  const generatedId = React.useId();
  const radioId = id || name || generatedId;

  const customStyle: React.CSSProperties = {
    ...style,
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  const containerClasses = ["az-Radio radio", `az-r-size-${size}`, className]
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
