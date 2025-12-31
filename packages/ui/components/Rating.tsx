import React, { useState } from "react";

export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Current rating value (controlled)
   */
  value?: number;
  /**
   * Default rating value (uncontrolled)
   */
  defaultValue?: number;
  /**
   * Maximum rating (number of stars)
   */
  max?: number;
  /**
   * Callback when rating changes
   */
  onChange?: (value: number) => void;
  /**
   * Read-only mode
   */
  readOnly?: boolean;
  /**
   * Allow half stars
   */
  allowHalf?: boolean;
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
  /**
   * Color variant
   */
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  /**
   * Show rating value text
   */
  showValue?: boolean;
  /**
   * Custom empty icon
   */
  emptyIcon?: React.ReactNode;
  /**
   * Custom filled icon
   */
  filledIcon?: React.ReactNode;
}

/**
 * Rating component with star ratings
 *
 * @example
 * ```tsx
 * <Rating
 *   value={rating}
 *   onChange={setRating}
 *   max={5}
 *   allowHalf
 * />
 * ```
 */
export function Rating({
  value: controlledValue,
  defaultValue = 0,
  max = 5,
  onChange,
  readOnly = false,
  allowHalf = false,
  size = "medium",
  color = "amber",
  showValue = false,
  emptyIcon,
  filledIcon,
  className = "",
  ...props
}: RatingProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [_hoverHalf, setHoverHalf] = useState(false);

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const displayValue = hoverValue !== null ? hoverValue : value;

  const isNamedColor = ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  const handleClick = (index: number, isHalf: boolean) => {
    if (readOnly) return;
    const newValue = isHalf ? index + 0.5 : index + 1;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleMouseEnter = (index: number, isHalf: boolean) => {
    if (readOnly) return;
    const newValue = isHalf ? index + 0.5 : index + 1;
    setHoverValue(newValue);
    setHoverHalf(isHalf);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverValue(null);
    setHoverHalf(false);
  };

  const renderStar = (index: number) => {
    const starValue = index + 1;
    const isFilled = displayValue >= starValue;
    const isHalfFilled = allowHalf && displayValue >= index + 0.5 && displayValue < starValue;
    const isHovered =
      hoverValue !== null &&
      (hoverValue >= starValue ||
        (allowHalf && hoverValue >= index + 0.5 && hoverValue < starValue));

    const starClasses = [
      "rating-star",
      isFilled && "rating-star-filled",
      isHalfFilled && "rating-star-half",
      isHovered && "rating-star-hover",
      isNamedColor ? `rating-star-color-${color}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    const customStyle: React.CSSProperties =
      color && !isNamedColor ? ({ "--rating-color": color } as React.CSSProperties) : {};

    return (
      <button
        type="button"
        key={index}
        className={starClasses}
        style={customStyle}
        onClick={() => handleClick(index, false)}
        onKeyDown={(e) => {
          if (!readOnly && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            handleClick(index, false);
          }
        }}
        onMouseEnter={() => handleMouseEnter(index, false)}
        onMouseLeave={handleMouseLeave}
        disabled={readOnly}
        aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
      >
        {isFilled ? filledIcon || "★" : emptyIcon || "☆"}
        {allowHalf && (
          <button
            type="button"
            className={`rating-star-half ${isHalfFilled ? "rating-star-half-filled" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              handleClick(index, true);
            }}
            onKeyDown={(e) => {
              if (!readOnly && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                e.stopPropagation();
                handleClick(index, true);
              }
            }}
            onMouseEnter={(e) => {
              e.stopPropagation();
              handleMouseEnter(index, true);
            }}
            onMouseLeave={handleMouseLeave}
            disabled={readOnly}
            aria-label={`${starValue - 0.5} stars`}
          >
            {isHalfFilled ? filledIcon || "★" : emptyIcon || "☆"}
          </button>
        )}
      </button>
    );
  };

  const ratingClasses = [
    "rating",
    `rating-size-${size}`,
    readOnly && "rating-readonly",
    isNamedColor ? `rating-color-${color}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={ratingClasses} role="group" aria-label="Rating" {...props}>
      <div className="rating-stars">{Array.from({ length: max }, (_, i) => renderStar(i))}</div>
      {showValue && (
        <span className="rating-value">{value > 0 ? value.toFixed(allowHalf ? 1 : 0) : "—"}</span>
      )}
    </div>
  );
}

export default Rating;
