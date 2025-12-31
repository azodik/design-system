"use client";
import React, { useState, useCallback, KeyboardEvent } from "react";
import { resolveRadiusFactor } from "../utils/radius";
import type { SemanticSize } from "../utils/size-variant-mapping";

export interface TagInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "size"
> {
  /**
   * Current tags (controlled)
   */
  value?: string[];
  /**
   * Default tags (uncontrolled)
   */
  defaultValue?: string[];
  /**
   * Callback when tags change
   */
  onChange?: (tags: string[]) => void;
  /**
   * Maximum number of tags
   */
  maxTags?: number;
  /**
   * Validation function for tags
   */
  validateTag?: (tag: string) => boolean | string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Size variant
   */
  size?: SemanticSize;
  /**
   * Color variant
   */
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  /**
   * Radius variant
   */
  radius?: "none" | "small" | "medium" | "large" | "full";
  /**
   * Show remove button on tags
   */
  removable?: boolean;
  /**
   * Separator characters (default: comma, enter)
   */
  separators?: string[];
}

/**
 * Tag Input component for multiple tag entry
 *
 * @example
 * ```tsx
 * <TagInput
 *   value={tags}
 *   onChange={setTags}
 *   placeholder="Add tags..."
 *   removable
 * />
 * ```
 */
export function TagInput({
  value: controlledValue,
  defaultValue = [],
  onChange,
  maxTags,
  validateTag,
  placeholder = "Add tags...",
  size = "sm",
  color,
  radius,
  removable = true,
  separators = [",", "Enter"],
  className = "",
  style,
  ...props
}: TagInputProps) {
  const [internalTags, setInternalTags] = useState<string[]>(defaultValue);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const tags = controlledValue !== undefined ? controlledValue : internalTags;

  const isNamedColor =
    color && ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  const addTag = useCallback(
    (tag: string) => {
      const trimmedTag = tag.trim();
      if (!trimmedTag) return;

      if (maxTags && tags.length >= maxTags) {
        setError(`Maximum ${maxTags} tags allowed`);
        return;
      }

      if (tags.includes(trimmedTag)) {
        setError("Tag already exists");
        return;
      }

      if (validateTag) {
        const validation = validateTag(trimmedTag);
        if (validation === false) {
          setError("Invalid tag");
          return;
        }
        if (typeof validation === "string") {
          setError(validation);
          return;
        }
      }

      const newTags = [...tags, trimmedTag];
      if (controlledValue === undefined) {
        setInternalTags(newTags);
      }
      onChange?.(newTags);
      setInputValue("");
      setError(null);
    },
    [tags, maxTags, validateTag, controlledValue, onChange],
  );

  const removeTag = useCallback(
    (index: number) => {
      const newTags = tags.filter((_, i) => i !== index);
      if (controlledValue === undefined) {
        setInternalTags(newTags);
      }
      onChange?.(newTags);
    },
    [tags, controlledValue, onChange],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (separators.includes(e.key)) {
        e.preventDefault();
        if (inputValue.trim()) {
          addTag(inputValue);
        }
      } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
        removeTag(tags.length - 1);
      }
    },
    [inputValue, separators, addTag, tags, removeTag],
  );

  const handleBlur = useCallback(() => {
    if (inputValue.trim()) {
      addTag(inputValue);
    }
  }, [inputValue, addTag]);

  const inputClasses = [
    "tag-input",
    `tag-input-size-${size}`,
    error && "tag-input-error",
    isNamedColor ? `tag-input-color-${color}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--tag-input-color": color } : {}),
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  return (
    <div className="tag-input-container" style={customStyle}>
      <div className="tag-input-wrapper">
        {tags.map((tag, index) => (
          <span key={index} className="tag-input-tag">
            {tag}
            {removable && (
              <button
                type="button"
                className="tag-input-remove"
                onClick={() => removeTag(index)}
                aria-label={`Remove ${tag}`}
              >
                ×
              </button>
            )}
          </span>
        ))}
        <input
          type="text"
          className={inputClasses}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={tags.length === 0 ? placeholder : ""}
          {...props}
        />
      </div>
      {error && <div className="tag-input-error-message">{error}</div>}
    </div>
  );
}

export default TagInput;
