import React from "react";
import { resolveRadiusFactor } from "../utils/radius";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  help?: string;
  error?: string;
  status?: "success" | "error";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  size?: "1" | "2" | "3";
  className?: string;
}

export function Textarea({
  label,
  help,
  error,
  status,
  color,
  radius,
  size = "2",
  className = "",
  style,
  id,
  name,
  ...props
}: TextareaProps) {
  const generatedId = React.useId();
  const textareaId = id || name || generatedId;
  const isNamedColor =
    color && ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  const textareaClasses = [
    "az-TextAreaInput textarea",
    `az-r-size-${size}`,
    status,
    error && "error",
    isNamedColor ? `az-accent-${color}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="form-group">
      {label && (
        <label htmlFor={textareaId} className="form-label">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name || textareaId}
        className={textareaClasses}
        style={customStyle}
        {...props}
      />
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}
