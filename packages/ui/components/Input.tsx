import React from "react";
import { resolveRadiusFactor } from "../utils/radius";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  help?: string;
  error?: string;
  status?: "success" | "error";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  size?: "1" | "2" | "3";
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
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
  }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const generatedId = React.useId();
  const inputId = id || name || generatedId;
  const isNamedColor =
    color && ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  const inputClasses = [
    "az-TextFieldInput input",
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
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        name={name || inputId}
        className={inputClasses}
        style={customStyle}
        {...props}
      />
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
});

export default Input;
