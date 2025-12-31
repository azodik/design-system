/**
 * Validation rules and utilities for form inputs
 */

import React from "react";

export type ValidationRule =
  | { type: "required"; message: string }
  | { type: "email"; message: string }
  | { type: "minLength"; value: number; message: string }
  | { type: "maxLength"; value: number; message: string }
  | { type: "min"; value: number; message: string }
  | { type: "max"; value: number; message: string }
  | { type: "pattern"; value: RegExp; message: string }
  | { type: "custom"; validator: (value: string) => boolean | string; message?: string };

/**
 * Simplified validation rules object for easier API
 */
export interface ValidationRules {
  required?: string | boolean;
  email?: string | boolean;
  minLength?: { value: number; message: string } | number;
  maxLength?: { value: number; message: string } | number;
  min?: { value: number; message: string } | number;
  max?: { value: number; message: string } | number;
  pattern?: { value: RegExp; message: string } | RegExp;
  custom?: (value: string) => boolean | string;
}

/**
 * Convert simplified rules to ValidationRule array
 */
export function normalizeRules(rules: ValidationRules): ValidationRule[] {
  const normalized: ValidationRule[] = [];

  if (rules.required) {
    normalized.push({
      type: "required",
      message: typeof rules.required === "string" ? rules.required : "This field is required",
    });
  }

  if (rules.email) {
    normalized.push({
      type: "email",
      message: typeof rules.email === "string" ? rules.email : "Invalid email format",
    });
  }

  if (rules.minLength) {
    if (typeof rules.minLength === "number") {
      normalized.push({
        type: "minLength",
        value: rules.minLength,
        message: `Minimum length is ${rules.minLength}`,
      });
    } else {
      normalized.push({
        type: "minLength",
        value: rules.minLength.value,
        message: rules.minLength.message,
      });
    }
  }

  if (rules.maxLength) {
    if (typeof rules.maxLength === "number") {
      normalized.push({
        type: "maxLength",
        value: rules.maxLength,
        message: `Maximum length is ${rules.maxLength}`,
      });
    } else {
      normalized.push({
        type: "maxLength",
        value: rules.maxLength.value,
        message: rules.maxLength.message,
      });
    }
  }

  if (rules.min) {
    if (typeof rules.min === "number") {
      normalized.push({
        type: "min",
        value: rules.min,
        message: `Minimum value is ${rules.min}`,
      });
    } else {
      normalized.push({
        type: "min",
        value: rules.min.value,
        message: rules.min.message,
      });
    }
  }

  if (rules.max) {
    if (typeof rules.max === "number") {
      normalized.push({
        type: "max",
        value: rules.max,
        message: `Maximum value is ${rules.max}`,
      });
    } else {
      normalized.push({
        type: "max",
        value: rules.max.value,
        message: rules.max.message,
      });
    }
  }

  if (rules.pattern) {
    if (rules.pattern instanceof RegExp) {
      normalized.push({
        type: "pattern",
        value: rules.pattern,
        message: "Invalid format",
      });
    } else {
      normalized.push({
        type: "pattern",
        value: rules.pattern.value,
        message: rules.pattern.message,
      });
    }
  }

  if (rules.custom) {
    normalized.push({
      type: "custom",
      validator: rules.custom,
      message: "Validation failed",
    });
  }

  return normalized;
}

/**
 * Validate a value against rules
 */
export function validateValue(value: string, rules: ValidationRule[]): string | null {
  for (const rule of rules) {
    let error: string | null = null;

    switch (rule.type) {
      case "required":
        if (!value || value.trim().length === 0) {
          error = rule.message;
        }
        break;

      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          error = rule.message;
        }
        break;
      }

      case "minLength":
        if (value && value.length < rule.value) {
          error = rule.message;
        }
        break;

      case "maxLength":
        if (value && value.length > rule.value) {
          error = rule.message;
        }
        break;

      case "min": {
        const numValue = Number(value);
        if (value && !isNaN(numValue) && numValue < rule.value) {
          error = rule.message;
        }
        break;
      }

      case "max": {
        const maxNumValue = Number(value);
        if (value && !isNaN(maxNumValue) && maxNumValue > rule.value) {
          error = rule.message;
        }
        break;
      }

      case "pattern":
        if (value && !rule.value.test(value)) {
          error = rule.message;
        }
        break;

      case "custom": {
        const result = rule.validator(value);
        if (result === false) {
          error = rule.message || "Validation failed";
        } else if (typeof result === "string") {
          error = result;
        }
        break;
      }
    }

    if (error) {
      return error;
    }
  }

  return null;
}

/**
 * Hook for form field validation
 */
export function useFieldValidation(
  value: string,
  rules: ValidationRules | undefined,
  validateOnChange = true,
) {
  const [error, setError] = React.useState<string | null>(null);
  const [touched, setTouched] = React.useState(false);

  const normalizedRules = React.useMemo(() => {
    return rules ? normalizeRules(rules) : [];
  }, [rules]);

  const validate = React.useCallback(
    (val: string) => {
      if (normalizedRules.length === 0) {
        setError(null);
        return null;
      }

      const validationError = validateValue(val, normalizedRules);
      setError(validationError);
      return validationError;
    },
    [normalizedRules],
  );

  React.useEffect(() => {
    if (validateOnChange && touched) {
      validate(value);
    }
  }, [value, touched, validate, validateOnChange]);

  const handleBlur = React.useCallback(() => {
    setTouched(true);
    validate(value);
  }, [value, validate]);

  const handleChange = React.useCallback(
    (newValue: string) => {
      if (touched || validateOnChange) {
        validate(newValue);
      }
    },
    [touched, validate, validateOnChange],
  );

  return {
    error,
    touched,
    validate: () => validate(value),
    handleBlur,
    handleChange,
    setTouched,
  };
}
