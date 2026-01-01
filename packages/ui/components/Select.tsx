"use client";
import React from "react";
import { resolveRadiusFactor } from "../utils/radius";
import { SemanticSize, getSizeClassName } from "../utils/size-variant-mapping";
import { useReducedMotion } from "../utils/reduced-motion";
import { useHighContrastMode } from "../utils/high-contrast";
import { getSpacingVar } from "../utils/spacing-scale";
import { getFontSize } from "../utils/typography-scale";

export interface SelectProps {
  label?: string;
  help?: string;
  error?: string;
  status?: "success" | "error";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  size?: SemanticSize;
  highContrast?: boolean;
  options: { value: string; label: string; icon?: React.ReactNode }[];
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  renderValue?: (option: {
    value: string;
    label: string;
    icon?: React.ReactNode;
  }) => React.ReactNode;
}

export function Select({
  label,
  help,
  error,
  status,
  color,
  radius,
  size = "sm",
  highContrast: propHighContrast,
  options,
  className = "",
  style,
  value = "",
  onChange,
  placeholder = "Select an option",
  disabled = false,
  renderValue,
}: SelectProps) {
  const generatedId = React.useId();
  const selectId = generatedId;
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(value);
  const selectRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const _reducedMotion = useReducedMotion();
  const systemHighContrast = useHighContrastMode();
  const _highContrast = propHighContrast ?? systemHighContrast;
  const sizeClassName = getSizeClassName(size);
  const isNamedColor =
    color && ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  // Refs for managing focus
  const listboxRef = React.useRef<HTMLDivElement>(null);
  const optionRefs = React.useRef<Map<string, HTMLDivElement>>(new Map());

  // Update option refs map
  const getOptionRef = (value: string) => {
    return optionRefs.current.get(value);
  };

  const setOptionRef = (value: string, element: HTMLDivElement | null) => {
    if (element) {
      optionRefs.current.set(value, element);
    } else {
      optionRefs.current.delete(value);
    }
  };

  // Use spacing and typography utilities
  const selectPadding = getSpacingVar(
    size === "xs" ? 2 : size === "sm" ? 3 : size === "md" ? 4 : size === "lg" ? 5 : 6,
  );
  const selectFontSize = getFontSize(
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
      if (event.detail !== selectRef.current && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
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
    // Focus back to trigger after selection
    triggerRef.current?.focus();
  };

  const customStyle: React.CSSProperties = {
    margin: 0,
    ...style,
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...resolveRadiusFactor(radius),
    padding: selectPadding,
    fontSize: selectFontSize,
  } as React.CSSProperties;

  const selectClasses = [
    "az-Select custom-select",
    sizeClassName,
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
          ref={triggerRef}
          className={selectClasses}
          onClick={() => {
            if (!disabled) {
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
          aria-invalid={error ? "true" : undefined}
          aria-disabled={disabled ? "true" : undefined}
          aria-describedby={error ? `${selectId}-error` : help ? `${selectId}-help` : undefined}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (!disabled) {
                if (!isOpen) {
                  const closeEvent = new CustomEvent("select:close-others", {
                    detail: selectRef.current,
                  });
                  document.dispatchEvent(closeEvent);
                  setIsOpen(true);
                } else {
                  setIsOpen(false);
                }
              }
            }
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
              e.preventDefault();
              if (!disabled && !isOpen) {
                setIsOpen(true);
              }
            }
            if (e.key === "Escape") {
              setIsOpen(false);
            }
          }}
        >
          <span
            className="select-value"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", flex: 1 }}
          >
            {renderValue && selectedOption ? (
              renderValue(selectedOption)
            ) : selectedOption ? (
              <>
                {selectedOption.icon && (
                  <span
                    className="select-icon"
                    style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
                  >
                    {selectedOption.icon}
                  </span>
                )}
                <span>{selectedOption.label}</span>
              </>
            ) : (
              placeholder
            )}
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
            ref={listboxRef}
            tabIndex={-1}
            onKeyDown={(e) => {
              const currentIndex = options.findIndex(
                (opt) =>
                  opt.value ===
                  (document.activeElement?.getAttribute("data-value") ?? selectedValue),
              );
              let nextIndex = currentIndex;

              if (e.key === "ArrowDown") {
                e.preventDefault();
                nextIndex = Math.min(currentIndex + 1, options.length - 1);
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                nextIndex = Math.max(currentIndex - 1, 0);
              } else if (e.key === "Home") {
                e.preventDefault();
                nextIndex = 0;
              } else if (e.key === "End") {
                e.preventDefault();
                nextIndex = options.length - 1;
              } else if (e.key === "Escape") {
                e.preventDefault();
                setIsOpen(false);
                // Focus back to trigger using ref
                triggerRef.current?.focus();
              } else if (e.key === "Tab") {
                setIsOpen(false);
                // Focus back to trigger when tabbing away
                triggerRef.current?.focus();
              }

              if (nextIndex !== currentIndex || isOpen) {
                const nextOption = options[nextIndex];
                if (nextOption) {
                  const el = getOptionRef(nextOption.value);
                  el?.focus();
                }
              }
            }}
          >
            {options.map((option) => (
              <div
                key={option.value}
                ref={(el) => setOptionRef(option.value, el)}
                data-value={option.value}
                className={`select-option ${selectedValue === option.value ? "selected" : ""}`}
                onClick={() => handleSelect(option.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(option.value);
                    // Focus back to trigger after selection
                    triggerRef.current?.focus();
                  }
                }}
                role="option"
                aria-selected={selectedValue === option.value}
                tabIndex={
                  isOpen &&
                  (selectedValue === option.value ||
                    (selectedValue === "" && options[0].value === option.value))
                    ? 0
                    : -1
                }
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                {option.icon && (
                  <span
                    className="select-icon"
                    style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
                  >
                    {option.icon}
                  </span>
                )}
                <span>{option.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {error && (
        <div id={`${selectId}-error`} className="form-error">
          {error}
        </div>
      )}
      {help && !error && (
        <div id={`${selectId}-help`} className="form-help">
          {help}
        </div>
      )}
    </div>
  );
}
