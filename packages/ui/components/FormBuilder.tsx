"use client";
import React, { useState, useCallback } from "react";
import Input from "./Input";
import { Select } from "./Select";
import Button from "./Button";
import FieldGroup from "./FieldGroup";

export type FieldType =
  | "text"
  | "email"
  | "number"
  | "password"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "date";

export interface FormField {
  /**
   * Field ID
   */
  id: string;
  /**
   * Field type
   */
  type: FieldType;
  /**
   * Field label
   */
  label: string;
  /**
   * Field name (for form data)
   */
  name: string;
  /**
   * Field placeholder
   */
  placeholder?: string;
  /**
   * Field default value
   */
  defaultValue?: string | number | boolean;
  /**
   * Field options (for select/radio)
   */
  options?: Array<{ value: string; label: string }>;
  /**
   * Field validation rules
   */
  required?: boolean;
  /**
   * Field group
   */
  group?: string;
  /**
   * Conditional display
   */
  condition?: {
    field: string;
    value: string | number | boolean;
  };
}

export interface FormBuilderProps extends Omit<React.HTMLAttributes<HTMLFormElement>, "onSubmit"> {
  /**
   * Form fields configuration
   */
  fields: FormField[];
  /**
   * Form submission handler
   */
  onSubmit?: (data: Record<string, unknown>) => void;
  /**
   * Form reset handler
   */
  onReset?: () => void;
  /**
   * Show submit button
   */
  showSubmit?: boolean;
  /**
   * Show reset button
   */
  showReset?: boolean;
  /**
   * Submit button label
   */
  submitLabel?: string;
  /**
   * Reset button label
   */
  resetLabel?: string;
}

/**
 * Form Builder component - Dynamic form generation
 *
 * @example
 * ```tsx
 * <FormBuilder
 *   fields={formFields}
 *   onSubmit={(data) => console.log(data)}
 * />
 * ```
 */
export function FormBuilder({
  fields,
  onSubmit,
  onReset,
  showSubmit = true,
  showReset = false,
  submitLabel = "Submit",
  resetLabel = "Reset",
  className = "",
  ...props
}: FormBuilderProps) {
  const [formData, setFormData] = useState<Record<string, unknown>>(() => {
    const initial: Record<string, unknown> = {};
    fields.forEach((field) => {
      if (field.defaultValue !== undefined) {
        initial[field.name] = field.defaultValue;
      }
    });
    return initial;
  });

  const handleChange = useCallback((name: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.(formData);
    },
    [formData, onSubmit],
  );

  const handleReset = useCallback(() => {
    const reset: Record<string, unknown> = {};
    fields.forEach((field) => {
      if (field.defaultValue !== undefined) {
        reset[field.name] = field.defaultValue;
      }
    });
    setFormData(reset);
    onReset?.();
  }, [fields, onReset]);

  // Group fields by group
  const groupedFields = fields.reduce(
    (acc, field) => {
      const group = field.group || "default";
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(field);
      return acc;
    },
    {} as Record<string, FormField[]>,
  );

  const renderField = (field: FormField) => {
    const value = formData[field.name];
    const shouldShow = field.condition
      ? formData[field.condition.field] === field.condition.value
      : true;

    if (!shouldShow) return null;

    const commonProps = {
      key: field.id,
      name: field.name,
      label: field.label,
      placeholder: field.placeholder,
      required: field.required,
    };

    switch (field.type) {
      case "text":
      case "email":
      case "password":
        return (
          <Input
            {...commonProps}
            type={field.type}
            value={String(value || "")}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        );
      case "number":
        return (
          <Input
            {...commonProps}
            type="number"
            value={String(value || "")}
            onChange={(e) => handleChange(field.name, parseFloat(e.target.value) || 0)}
          />
        );
      case "textarea":
        return (
          <textarea
            {...commonProps}
            value={String(value || "")}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className="form-builder-textarea"
            rows={4}
          />
        );
      case "select":
        return (
          <Select
            {...commonProps}
            options={field.options || []}
            value={String(value || "")}
            onChange={(val) => handleChange(field.name, val)}
          />
        );
      case "checkbox":
        return (
          <label className="form-builder-checkbox">
            <input
              type="checkbox"
              checked={Boolean(value)}
              onChange={(e) => handleChange(field.name, e.target.checked)}
            />
            <span>{field.label}</span>
          </label>
        );
      case "radio":
        return (
          <div className="form-builder-radio-group">
            <label>{field.label}</label>
            {field.options?.map((option) => (
              <label key={option.value} className="form-builder-radio">
                <input
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const formClasses = ["form-builder", className].filter(Boolean).join(" ");

  return (
    <form className={formClasses} onSubmit={handleSubmit} {...props}>
      {Object.entries(groupedFields).map(([groupName, groupFields]) => {
        if (groupName === "default") {
          return <React.Fragment key={groupName}>{groupFields.map(renderField)}</React.Fragment>;
        }
        return (
          <FieldGroup key={groupName} label={groupName}>
            {groupFields.map(renderField)}
          </FieldGroup>
        );
      })}
      {(showSubmit || showReset) && (
        <div className="form-builder-actions">
          {showSubmit && <Button type="submit">{submitLabel}</Button>}
          {showReset && (
            <Button type="button" variant="outline" onClick={handleReset}>
              {resetLabel}
            </Button>
          )}
        </div>
      )}
    </form>
  );
}

export default FormBuilder;
