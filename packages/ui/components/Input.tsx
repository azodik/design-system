import React from "react";

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

export default function Input({
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
}: InputProps) {
  const generatedId = React.useId();
  const inputId = id || name || generatedId;
  const isNamedColor =
    color && ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  const customStyle = {
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...(radius
      ? {
          borderRadius:
            radius === "none"
              ? "0"
              : radius === "small"
                ? "var(--radius-1)"
                : radius === "medium"
                  ? "var(--radius-2)"
                  : radius === "large"
                    ? "var(--radius-4)"
                    : "var(--radius-round)",
        }
      : {}),
    ...style,
  };

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
}

// Textarea Component
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  help?: string;
  error?: string;
  status?: "success" | "error";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  size?: "1" | "2" | "3";
  className?: string;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
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
  autoResize: _autoResize,
  minRows: _minRows,
  maxRows: _maxRows,
  id,
  name,
  ...props
}: TextareaProps) {
  const generatedId = React.useId();
  const textareaId = id || name || generatedId;
  const isNamedColor =
    color && ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  const customStyle = {
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...(radius
      ? {
          borderRadius:
            radius === "none"
              ? "0"
              : radius === "small"
                ? "var(--radius-1)"
                : radius === "medium"
                  ? "var(--radius-2)"
                  : radius === "large"
                    ? "var(--radius-4)"
                    : "var(--radius-round)",
        }
      : {}),
    ...style,
  };

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

// Select Component
export interface SelectProps {
  label?: string;
  help?: string;
  error?: string;
  status?: "success" | "error";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  size?: "1" | "2" | "3";
  options: { value: string; label: string }[];
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function Select({
  label,
  help,
  error,
  status,
  color,
  radius,
  size = "2",
  options,
  className = "",
  style,
  value = "",
  onChange,
  placeholder = "Select an option",
  disabled = false,
}: SelectProps) {
  const generatedId = React.useId();
  const selectId = generatedId;
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(value);
  const selectRef = React.useRef<HTMLDivElement>(null);
  const isNamedColor =
    color && ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  const selectedOption = options.find((option) => option.value === selectedValue);

  React.useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleSelectOpen = (event: CustomEvent) => {
      // Close this select if another select opened
      if (event.detail !== selectRef.current && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Dispatch event to close all other selects
      const closeEvent = new CustomEvent("select:close-others", {
        detail: selectRef.current,
      });
      document.dispatchEvent(closeEvent);

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("select:close-others", handleSelectOpen as EventListener);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("select:close-others", handleSelectOpen as EventListener);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const customStyle = {
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...(radius
      ? {
          borderRadius:
            radius === "none"
              ? "0"
              : radius === "small"
                ? "var(--radius-1)"
                : radius === "medium"
                  ? "var(--radius-2)"
                  : radius === "large"
                    ? "var(--radius-4)"
                    : "var(--radius-round)",
        }
      : {}),
    ...style,
  };

  const selectClasses = [
    "az-Select custom-select",
    `az-r-size-${size}`,
    status,
    error && "error",
    disabled && "disabled",
    isOpen && "open",
    isNamedColor ? `az-accent-${color}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const labelId = label ? `${selectId}-label` : undefined;
  const hiddenSelectId = `${selectId}-hidden`;

  return (
    <div className="form-group" style={customStyle}>
      {label && (
        <label id={labelId} htmlFor={hiddenSelectId} className="form-label">
          {label}
        </label>
      )}
      {/* Visually hidden native select for accessibility */}
      <select
        id={hiddenSelectId}
        value={selectedValue}
        onChange={(e) => handleSelect(e.target.value)}
        disabled={disabled}
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        }}
        aria-hidden="true"
        tabIndex={-1}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="custom-select-wrapper" ref={selectRef}>
        <div
          className={selectClasses}
          onClick={() => {
            if (!disabled) {
              // Dispatch event to close all other selects before opening this one
              if (!isOpen) {
                const closeEvent = new CustomEvent("select:close-others", {
                  detail: selectRef.current,
                });
                document.dispatchEvent(closeEvent);
              }
              setIsOpen(!isOpen);
            }
          }}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={isOpen ? `${selectId}-listbox` : undefined}
          aria-labelledby={labelId}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (!disabled) {
                // Dispatch event to close all other selects before opening this one
                if (!isOpen) {
                  const closeEvent = new CustomEvent("select:close-others", {
                    detail: selectRef.current,
                  });
                  document.dispatchEvent(closeEvent);
                }
                setIsOpen(!isOpen);
              }
            }
            if (e.key === "Escape") {
              setIsOpen(false);
            }
          }}
        >
          <span className="select-value">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg
            className={`select-arrow ${isOpen ? "open" : ""}`}
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 8L10 12L14 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {isOpen && (
          <div
            id={`${selectId}-listbox`}
            className="select-dropdown"
            role="listbox"
            aria-labelledby={labelId}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={`select-option ${selectedValue === option.value ? "selected" : ""}`}
                onClick={() => handleSelect(option.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(option.value);
                  }
                }}
                role="option"
                aria-selected={selectedValue === option.value}
                tabIndex={0}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}

// Checkbox Component
export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  label?: string;
  help?: string;
  error?: string;
  size?: "1" | "2" | "3";
  className?: string;
}

export function Checkbox({
  label,
  help,
  error,
  size = "2",
  className = "",
  id,
  name,
  ...props
}: CheckboxProps) {
  const checkboxClasses = ["az-Checkbox checkbox", `az-r-size-${size}`, className]
    .filter(Boolean)
    .join(" ");

  const generatedId = React.useId();
  const checkboxId = id || name || generatedId;

  return (
    <div className="form-group">
      <div className={checkboxClasses}>
        <input type="checkbox" id={checkboxId} name={name || checkboxId} {...props} />
        <span className="checkbox-custom" />
        {label && <label htmlFor={checkboxId}>{label}</label>}
      </div>
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}

// Radio Component
export interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  label?: string;
  help?: string;
  error?: string;
  size?: "1" | "2" | "3";
  className?: string;
}

export function Radio({
  label,
  help,
  error,
  size = "2",
  className = "",
  id,
  name,
  ...props
}: RadioProps) {
  const generatedId = React.useId();
  const radioId = id || name || generatedId;

  return (
    <div className="form-group">
      <div className={`radio az-r-size-${size} ${className}`}>
        <input type="radio" id={radioId} name={name || radioId} {...props} />
        <span className="radio-custom" />
        {label && <label htmlFor={radioId}>{label}</label>}
      </div>
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}

// Switch Component
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
  ...props
}: SwitchProps) {
  const generatedId = React.useId();
  const switchId = id || name || generatedId;
  const positionClass = position === "space-between" ? "switch-space-between" : "";

  return (
    <div className={`form-group ${positionClass}`}>
      {position === "space-between" && label && (
        <label htmlFor={switchId} className="form-label">
          {label}
        </label>
      )}
      <div className={`switch az-r-size-${size} ${className}`}>
        <input
          type="checkbox"
          id={switchId}
          name={name || switchId}
          checked={checked}
          onChange={onChange || (() => {})}
          readOnly={!onChange}
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
