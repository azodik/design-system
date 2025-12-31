import React, { useRef, useState, useCallback } from "react";

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Current value (controlled)
   */
  value?: number;
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: number;
  /**
   * Minimum value
   */
  min?: number;
  /**
   * Maximum value
   */
  max?: number;
  /**
   * Step increment
   */
  step?: number;
  /**
   * Callback when value changes
   */
  onChange?: (value: number) => void;
  /**
   * Callback when dragging ends
   */
  onValueChange?: (value: number) => void;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Show value label
   */
  showValue?: boolean;
  /**
   * Custom value formatter
   */
  formatValue?: (value: number) => string;
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
  /**
   * Color variant
   */
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  /**
   * Range slider (dual handles)
   */
  range?: boolean;
  /**
   * Range values (for range mode)
   */
  rangeValue?: [number, number];
  /**
   * Default range values (for range mode)
   */
  defaultRangeValue?: [number, number];
  /**
   * Range onChange callback
   */
  onRangeChange?: (values: [number, number]) => void;
}

/**
 * Slider component for selecting numeric values
 *
 * @example
 * ```tsx
 * <Slider
 *   min={0}
 *   max={100}
 *   value={value}
 *   onChange={setValue}
 *   showValue
 * />
 * ```
 */
export function Slider({
  value: controlledValue,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  onValueChange,
  disabled = false,
  showValue = false,
  formatValue,
  size = "medium",
  color = "azodik",
  range = false,
  rangeValue: controlledRangeValue,
  defaultRangeValue = [0, 100],
  onRangeChange,
  className = "",
  style,
  ...props
}: SliderProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [internalRangeValue, setInternalRangeValue] = useState<[number, number]>(defaultRangeValue);
  const [isDragging, setIsDragging] = useState(false);
  const [activeHandle, setActiveHandle] = useState<"min" | "max" | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const rangeValue = controlledRangeValue || internalRangeValue;

  const isNamedColor = ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(color);

  const getValueFromPosition = useCallback(
    (clientX: number): number => {
      if (!sliderRef.current) return min;
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const rawValue = min + percentage * (max - min);
      return Math.round(rawValue / step) * step;
    },
    [min, max, step],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, handle?: "min" | "max") => {
      if (disabled) return;
      e.preventDefault();
      setIsDragging(true);
      if (range) {
        setActiveHandle(handle || null);
      }

      const handleMove = (moveEvent: MouseEvent) => {
        const newValue = getValueFromPosition(moveEvent.clientX);

        if (range && activeHandle) {
          const [minVal, maxVal] = rangeValue;
          let newRange: [number, number] = [minVal, maxVal];

          if (activeHandle === "min") {
            newRange = [Math.min(newValue, maxVal - step), maxVal];
          } else {
            newRange = [minVal, Math.max(newValue, minVal + step)];
          }

          setInternalRangeValue(newRange);
          onRangeChange?.(newRange);
        } else {
          const clampedValue = Math.max(min, Math.min(max, newValue));
          setInternalValue(clampedValue);
          onChange?.(clampedValue);
        }
      };

      const handleUp = () => {
        setIsDragging(false);
        setActiveHandle(null);
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleUp);

        if (range) {
          onRangeChange?.(internalRangeValue);
        } else {
          onValueChange?.(internalValue);
        }
      };

      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleUp);
    },
    [
      disabled,
      range,
      activeHandle,
      rangeValue,
      getValueFromPosition,
      min,
      max,
      step,
      onChange,
      onValueChange,
      onRangeChange,
      internalValue,
      internalRangeValue,
    ],
  );

  const handleTrackClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled || isDragging) return;
      const newValue = getValueFromPosition(e.clientX);
      const clampedValue = Math.max(min, Math.min(max, newValue));

      if (range) {
        const [minVal, maxVal] = rangeValue;
        const _midPoint = (minVal + maxVal) / 2;
        const isCloserToMin = Math.abs(clampedValue - minVal) < Math.abs(clampedValue - maxVal);

        if (isCloserToMin) {
          const newRange: [number, number] = [Math.min(clampedValue, maxVal - step), maxVal];
          setInternalRangeValue(newRange);
          onRangeChange?.(newRange);
        } else {
          const newRange: [number, number] = [minVal, Math.max(clampedValue, minVal + step)];
          setInternalRangeValue(newRange);
          onRangeChange?.(newRange);
        }
      } else {
        setInternalValue(clampedValue);
        onChange?.(clampedValue);
        onValueChange?.(clampedValue);
      }
    },
    [
      disabled,
      isDragging,
      getValueFromPosition,
      min,
      max,
      range,
      rangeValue,
      step,
      onChange,
      onValueChange,
      onRangeChange,
    ],
  );

  const formatDisplayValue = useCallback(
    (val: number): string => {
      if (formatValue) return formatValue(val);
      return val.toString();
    },
    [formatValue],
  );

  const percentage = ((value - min) / (max - min)) * 100;
  const minPercentage = ((rangeValue[0] - min) / (max - min)) * 100;
  const maxPercentage = ((rangeValue[1] - min) / (max - min)) * 100;

  const sliderClasses = [
    "slider",
    `slider-size-${size}`,
    disabled && "slider-disabled",
    isDragging && "slider-dragging",
    isNamedColor ? `slider-color-${color}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--slider-color": color } : {}),
  } as React.CSSProperties;

  return (
    <div className={sliderClasses} style={customStyle} {...props}>
      {showValue && !range && <div className="slider-value">{formatDisplayValue(value)}</div>}
      {showValue && range && (
        <div className="slider-value">
          {formatDisplayValue(rangeValue[0])} - {formatDisplayValue(rangeValue[1])}
        </div>
      )}
      <div
        ref={sliderRef}
        className="slider-track"
        role="slider"
        tabIndex={0}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={range ? undefined : value}
        aria-valuetext={formatDisplayValue(value)}
        onClick={handleTrackClick}
        onMouseDown={(e) => handleMouseDown(e)}
        onKeyDown={(e) => {
          const stepValue = step || 1;
          if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
            e.preventDefault();
            onChange?.(Math.max(min, value - stepValue));
          } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
            e.preventDefault();
            onChange?.(Math.min(max, value + stepValue));
          } else if (e.key === "Home") {
            e.preventDefault();
            onChange?.(min);
          } else if (e.key === "End") {
            e.preventDefault();
            onChange?.(max);
          }
        }}
      >
        <div className="slider-track-background" />
        {range ? (
          <>
            <div
              className="slider-range"
              style={{
                left: `${minPercentage}%`,
                width: `${maxPercentage - minPercentage}%`,
              }}
            />
            <div
              className="slider-handle slider-handle-min"
              style={{ left: `${minPercentage}%` }}
              onMouseDown={(e) => {
                e.stopPropagation();
                handleMouseDown(e, "min");
              }}
              role="slider"
              aria-valuemin={min}
              aria-valuemax={rangeValue[1]}
              aria-valuenow={rangeValue[0]}
              tabIndex={disabled ? -1 : 0}
            />
            <div
              className="slider-handle slider-handle-max"
              style={{ left: `${maxPercentage}%` }}
              onMouseDown={(e) => {
                e.stopPropagation();
                handleMouseDown(e, "max");
              }}
              role="slider"
              aria-valuemin={rangeValue[0]}
              aria-valuemax={max}
              aria-valuenow={rangeValue[1]}
              tabIndex={disabled ? -1 : 0}
            />
          </>
        ) : (
          <>
            <div className="slider-fill" style={{ width: `${percentage}%` }} />
            <div
              className="slider-handle"
              style={{ left: `${percentage}%` }}
              onMouseDown={(e) => {
                e.stopPropagation();
                handleMouseDown(e);
              }}
              role="slider"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={value}
              tabIndex={disabled ? -1 : 0}
            />
          </>
        )}
      </div>
      <div className="slider-labels">
        <span>{formatDisplayValue(min)}</span>
        <span>{formatDisplayValue(max)}</span>
      </div>
    </div>
  );
}

export default Slider;
