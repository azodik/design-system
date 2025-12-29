import React from "react";
import { resolveRadiusFactor } from "../utils/radius";

export interface SwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  label?: string;
  help?: string;
  error?: string;
  className?: string;
  position?: "default" | "space-between";
  size?: "1" | "2" | "3";
  radius?: "none" | "small" | "medium" | "large" | "full";
}

export function Switch({
  label,
  help,
  error,
  className = "",
  checked,
  onChange,
  id,
  name,
  position = "space-between",
  size = "2",
  radius,
  style,
  ...props
}: SwitchProps) {
  const generatedId = React.useId();
  const switchId = id || name || generatedId;
  const positionClass = position === "space-between" ? "switch-space-between" : "";

  const customStyle: React.CSSProperties = {
    ...style,
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  return (
    <div className={`form-group ${positionClass}`} style={customStyle}>
      {position === "space-between" && label && (
        <label htmlFor={switchId} className="form-label">
          {label}
        </label>
      )}
      <div className={`az-Switch switch az-r-size-${size} ${className}`}>
        <input
          type="checkbox"
          id={switchId}
          name={name || switchId}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <span className="switch-slider" />
      </div>
      {position === "default" && label && (
        <label htmlFor={switchId} className="form-label">
          {label}
        </label>
      )}
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}
