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
  ...props
}: InputProps) {
  const inputClasses = ["input", status && status, error && "error", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input className={inputClasses} {...props} />
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
}

export function Textarea({ label, help, error, status, className = "", ...props }: TextareaProps) {
  const textareaClasses = ["textarea", status && status, error && "error", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <textarea className={textareaClasses} {...props} />
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}

// Select Component
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  help?: string;
  error?: string;
  status?: "success" | "error";
  options: { value: string; label: string }[];
  className?: string;
}

export function Select({
  label,
  help,
  error,
  status,
  options,
  className = "",
  ...props
}: SelectProps) {
  const selectClasses = ["select", status && status, error && "error", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <select className={selectClasses} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}

// Checkbox Component
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  help?: string;
  error?: string;
  className?: string;
}

export function Checkbox({ label, help, error, className = "", ...props }: CheckboxProps) {
  return (
    <div className="form-group">
      <div className={`checkbox ${className}`}>
        <input type="checkbox" {...props} />
        <span className="checkbox-custom" />
        {label && <label>{label}</label>}
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

export function Radio({ label, help, error, className = "", ...props }: RadioProps) {
  return (
    <div className="form-group">
      <div className={`radio ${className}`}>
        <input type="radio" {...props} />
        <span className="radio-custom" />
        {label && <label>{label}</label>}
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

export function Switch({ label, help, error, className = "", ...props }: SwitchProps) {
  return (
    <div className="form-group">
      <div className={`switch ${className}`}>
        <input type="checkbox" {...props} />
        <span className="switch-slider" />
      </div>
      {label && <label className="form-label">{label}</label>}
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}
