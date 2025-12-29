import React from "react";
import { SearchIcon } from "@azodik/icons";

export interface SelectWithSearchOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectWithSearchProps {
  label?: string;
  help?: string;
  error?: string;
  status?: "success" | "error";
  options: SelectWithSearchOption[];
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  noResultsText?: string;
  maxHeight?: number;
}

export function SelectWithSearch({
  label,
  help,
  error,
  status,
  options,
  className = "",
  value = "",
  onChange,
  placeholder = "Select an option",
  searchPlaceholder = "Search...",
  disabled = false,
  clearable = false,
  noResultsText = "No results found",
  maxHeight = 240,
}: SelectWithSearchProps) {
  const generatedId = React.useId();
  const selectId = generatedId;
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(value);
  const [searchQuery, setSearchQuery] = React.useState("");
  const selectRef = React.useRef<HTMLDivElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const selectedOption = options.find((option) => option.value === selectedValue);

  React.useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus search input when dropdown opens
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 0);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Filter options based on search query
  const filteredOptions = React.useMemo(() => {
    if (!searchQuery.trim()) {
      return options;
    }
    const query = searchQuery.toLowerCase();
    return options.filter((option) => option.label.toLowerCase().includes(query));
  }, [options, searchQuery]);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedValue("");
    onChange?.("");
    setSearchQuery("");
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchQuery("");
    }
  };

  const selectClasses = [
    "custom-select",
    "select-with-search",
    status && status,
    error && "error",
    disabled && "disabled",
    isOpen && "open",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const labelId = label ? `${selectId}-label` : undefined;
  const hiddenSelectId = `${selectId}-hidden`;

  return (
    <div className="form-group">
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
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="custom-select-wrapper" ref={selectRef}>
        <div
          className={selectClasses}
          onClick={handleToggle}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={isOpen ? `${selectId}-listbox` : undefined}
          aria-labelledby={labelId}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleToggle();
            }
            if (e.key === "Escape") {
              setIsOpen(false);
              setSearchQuery("");
            }
          }}
        >
          <span className="select-value">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <div className="select-actions">
            {clearable && selectedValue && !disabled && (
              <button
                type="button"
                className="select-clear"
                onClick={handleClear}
                aria-label="Clear selection"
                tabIndex={-1}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
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
        </div>

        {isOpen && (
          <div
            id={`${selectId}-listbox`}
            className="select-dropdown select-dropdown-search"
            role="listbox"
            aria-labelledby={labelId}
            style={{ maxHeight: `${maxHeight}px` }}
          >
            <div className="select-search-container">
              <SearchIcon size={16} className="select-search-icon" style={{}} />
              <input
                ref={searchInputRef}
                type="text"
                className="select-search-input"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setIsOpen(false);
                    setSearchQuery("");
                  }
                  if (e.key === "Enter" && filteredOptions.length === 1) {
                    e.preventDefault();
                    handleSelect(filteredOptions[0].value);
                  }
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    const firstOption = filteredOptions[0];
                    if (firstOption) {
                      const optionElement = document.querySelector(
                        `[data-option-value="${firstOption.value}"]`,
                      ) as HTMLElement;
                      optionElement?.focus();
                    }
                  }
                }}
              />
            </div>
            <div className="select-options-container">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div
                    key={option.value}
                    data-option-value={option.value}
                    className={`select-option ${
                      selectedValue === option.value ? "selected" : ""
                    } ${option.disabled ? "disabled" : ""}`}
                    onClick={() => !option.disabled && handleSelect(option.value)}
                    role="option"
                    aria-selected={selectedValue === option.value}
                    tabIndex={option.disabled ? -1 : 0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !option.disabled) {
                        e.preventDefault();
                        handleSelect(option.value);
                      }
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        const currentIndex = filteredOptions.findIndex(
                          (opt) => opt.value === option.value,
                        );
                        const nextOption = filteredOptions[currentIndex + 1];
                        if (nextOption) {
                          const nextElement = document.querySelector(
                            `[data-option-value="${nextOption.value}"]`,
                          ) as HTMLElement;
                          nextElement?.focus();
                        }
                      }
                      if (e.key === "ArrowUp") {
                        e.preventDefault();
                        const currentIndex = filteredOptions.findIndex(
                          (opt) => opt.value === option.value,
                        );
                        const prevOption = filteredOptions[currentIndex - 1];
                        if (prevOption) {
                          const prevElement = document.querySelector(
                            `[data-option-value="${prevOption.value}"]`,
                          ) as HTMLElement;
                          prevElement?.focus();
                        }
                      }
                    }}
                  >
                    {option.label}
                  </div>
                ))
              ) : (
                <div className="select-no-results">{noResultsText}</div>
              )}
            </div>
          </div>
        )}
      </div>
      {error && <div className="form-error">{error}</div>}
      {help && !error && <div className="form-help">{help}</div>}
    </div>
  );
}
