import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  help?: string;
  error?: string;
  status?: "success" | "error";
  className?: string;
}

export default function Input({
  label,
  help,
  error,
  status,
  className = "",
  id,
  name,
  ...props
}: InputProps) {
  const generatedId = React.useId();
  const inputId = id || name || generatedId;

  const inputClasses = ["input", status && status, error && "error", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="form-group">
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}
      <input id={inputId} name={name || inputId} className={inputClasses} {...props} />
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
  className = "",
  autoResize,
  minRows,
  maxRows,
  id,
  name,
  ...props
}: TextareaProps) {
  const generatedId = React.useId();
  const textareaId = id || name || generatedId;

  const textareaClasses = ["textarea", status && status, error && "error", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="form-group">
      {label && (
        <label htmlFor={textareaId} className="form-label">
          {label}
        </label>
      )}
      <textarea id={textareaId} name={name || textareaId} className={textareaClasses} {...props} />
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
  options: { value: string; label: string }[];
  className?: string;
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
  options,
  className = "",
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const selectClasses = [
    "custom-select",
    status && status,
    error && "error",
    disabled && "disabled",
    isOpen && "open",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const labelId = label ? `${selectId}-label` : undefined;

  return (
    <div className="form-group">
      {label && (
        <label id={labelId} className="form-label">
          {label}
        </label>
      )}
      <div className="custom-select-wrapper" ref={selectRef}>
        <div
          className={selectClasses}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={labelId}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              !disabled && setIsOpen(!isOpen);
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
          <div className="select-dropdown" role="listbox" aria-labelledby={labelId}>
            {options.map((option) => (
              <div
                key={option.value}
                className={`select-option ${selectedValue === option.value ? "selected" : ""}`}
                onClick={() => handleSelect(option.value)}
                role="option"
                aria-selected={selectedValue === option.value}
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
export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  help?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Checkbox({
  label,
  help,
  error,
  size = "md",
  className = "",
  id,
  name,
  ...props
}: CheckboxProps) {
  const checkboxClasses = ["checkbox", size !== "md" && `checkbox-${size}`, className]
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
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  help?: string;
  error?: string;
  className?: string;
}

export function Radio({ label, help, error, className = "", id, name, ...props }: RadioProps) {
  const generatedId = React.useId();
  const radioId = id || name || generatedId;

  return (
    <div className="form-group">
      <div className={`radio ${className}`}>
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
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  help?: string;
  error?: string;
  className?: string;
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
  ...props
}: SwitchProps) {
  const generatedId = React.useId();
  const switchId = id || name || generatedId;

  return (
    <div className="form-group">
      <div className={`switch ${className}`}>
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
      {label && (
        <label htmlFor={switchId} className="form-label">
          {label}
        </label>
      )}
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}
