import React from "react";
import { resolveRadiusFactor } from "../utils/radius";
import { ValidationRules, useFieldValidation } from "../utils/validation";
import type { SemanticSize } from "../utils/size-variant-mapping";
import { getSizeClassName } from "../utils/size-variant-mapping";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  help?: string;
  error?: string;
  status?: "success" | "error";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  size?: SemanticSize;
  className?: string;
  /**
   * Validation rules for the textarea
   */
  rules?: ValidationRules;
  /**
   * Validate on change (default: true)
   */
  validateOnChange?: boolean;
}

export function Textarea({
  label,
  help,
  error: externalError,
  status,
  color,
  radius,
  size = "sm",
  className = "",
  style,
  id,
  name,
  rules,
  validateOnChange = true,
  value,
  onChange,
  onBlur,
  ...props
}: TextareaProps) {
  const generatedId = React.useId();
  const textareaId = id || name || generatedId;
  const isNamedColor =
    color && ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  // Internal validation
  const stringValue = typeof value === "string" ? value : value?.toString() || "";
  const validation = useFieldValidation(stringValue, rules, validateOnChange);

  // Use validation error if available, otherwise use external error
  const error = validation.error || externalError;
  const finalStatus = error ? "error" : status;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    validation.handleChange(newValue);
    onChange?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    validation.handleBlur();
    onBlur?.(e);
  };

  const sizeClassName = getSizeClassName(size);

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  const textareaClasses = [
    "az-TextAreaInput textarea",
    sizeClassName,
    finalStatus,
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
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}
