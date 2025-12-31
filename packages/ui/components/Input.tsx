import React from "react";
import { resolveRadiusFactor } from "../utils/radius";
import { ValidationRules, useFieldValidation } from "../utils/validation";
import { useDebounce } from "../hooks/useDebounce";
import { SemanticSize, getSizeClassName } from "../utils/size-variant-mapping";
import { useReducedMotion } from "../utils/reduced-motion";
import { useHighContrastMode } from "../utils/high-contrast";
import { getSpacingVar } from "../utils/spacing-scale";
import { getFontSize } from "../utils/typography-scale";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  help?: string;
  error?: string;
  status?: "success" | "error";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  size?: SemanticSize;
  highContrast?: boolean;
  className?: string;
  /**
   * Validation rules for the input
   * @example
   * rules={{
   *   required: "Email is required",
   *   email: "Invalid email format",
   *   minLength: { value: 5, message: "Too short" }
   * }}
   */
  rules?: ValidationRules;
  /**
   * Validate on change (default: true)
   */
  validateOnChange?: boolean;
  /**
   * Debounce delay in milliseconds for onChange (0 = no debounce)
   */
  debounceMs?: number;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    help,
    error: externalError,
    status,
    color,
    radius,
    size = "sm",
    highContrast: propHighContrast,
    className = "",
    style,
    id,
    name,
    rules,
    validateOnChange = true,
    debounceMs,
    value,
    onChange,
    onBlur,
    ...props
  }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const generatedId = React.useId();
  const inputId = id || name || generatedId;
  const reducedMotion = useReducedMotion();
  const systemHighContrast = useHighContrastMode();
  const highContrast = propHighContrast ?? systemHighContrast;
  const isNamedColor =
    color && ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  // Use spacing and typography utilities
  const sizeClassName = getSizeClassName(size);
  const inputSpacing = getSpacingVar(
    size === "xs" ? 1 : size === "sm" ? 2 : size === "md" ? 3 : size === "lg" ? 4 : 5,
  );
  const inputFontSize = getFontSize(
    size === "xs"
      ? "sm"
      : size === "sm"
        ? "base"
        : size === "md"
          ? "lg"
          : size === "lg"
            ? "xl"
            : "2xl",
  );

  // Internal state for debounced inputs
  const [internalValue, setInternalValue] = React.useState(
    typeof value === "string" ? value : value?.toString() || "",
  );

  // Debounce the value if debounceMs is provided
  const debouncedValue = useDebounce(internalValue, debounceMs || 0);
  const shouldUseDebounce = debounceMs !== undefined && debounceMs > 0;

  // Sync with external value
  React.useEffect(() => {
    const stringValue = typeof value === "string" ? value : value?.toString() || "";
    setInternalValue(stringValue);
  }, [value]);

  // Trigger onChange with debounced value
  React.useEffect(() => {
    if (
      shouldUseDebounce &&
      debouncedValue !== (typeof value === "string" ? value : value?.toString() || "")
    ) {
      const syntheticEvent = {
        target: { value: debouncedValue },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(syntheticEvent);
    }
  }, [debouncedValue, shouldUseDebounce, onChange, value]);

  // Internal validation
  const stringValue = typeof value === "string" ? value : value?.toString() || "";
  const validation = useFieldValidation(stringValue, rules, validateOnChange);

  // Use validation error if available, otherwise use external error
  const error = validation.error || externalError;
  const finalStatus = error ? "error" : status;

  // Build input classes with size, high contrast, and reduced motion
  const inputClasses = [
    "az-Input",
    "input",
    sizeClassName,
    isNamedColor ? `az-accent-${color}` : "",
    finalStatus ? `az-status-${finalStatus}` : "",
    highContrast ? "az-high-contrast" : "",
    reducedMotion ? "az-reduced-motion" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Build custom styles with spacing and typography
  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...resolveRadiusFactor(radius),
    padding: inputSpacing,
    fontSize: inputFontSize,
  } as React.CSSProperties;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);

    if (shouldUseDebounce) {
      // For debounced inputs, only update internal state
      validation.handleChange(newValue);
    } else {
      // For non-debounced inputs, call onChange immediately
      validation.handleChange(newValue);
      onChange?.(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validation.handleBlur();
    onBlur?.(e);
  };

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
        value={shouldUseDebounce ? internalValue : value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
});

export default Input;
