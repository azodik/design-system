import React from "react";
import { resolveRadiusFactor } from "../utils/radius";
import { ValidationRules, useFieldValidation } from "../utils/validation";
import { useDebounce } from "../hooks/useDebounce";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  help?: string;
  error?: string;
  status?: "success" | "error";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  size?: "1" | "2" | "3";
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
    size = "2",
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
  const isNamedColor =
    color && ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

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

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  const inputClasses = [
    "az-TextFieldInput input",
    `az-r-size-${size}`,
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
