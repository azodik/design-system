"use client";
import React, { useState } from "react";
import { Select } from "./Select";
import type { SemanticSize } from "../utils/size-variant-mapping";

export interface TimePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Current time value (HH:mm format)
   */
  value?: string;
  /**
   * Default time value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Callback when time changes
   */
  onChange?: (time: string) => void;
  /**
   * 12-hour format
   */
  format12h?: boolean;
  /**
   * Show seconds
   */
  showSeconds?: boolean;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Size variant
   */
  size?: SemanticSize;
  /**
   * Error state
   */
  error?: boolean;
}

/**
 * Time Picker component for time selection
 *
 * @example
 * ```tsx
 * <TimePicker
 *   value={time}
 *   onChange={setTime}
 *   format12h
 * />
 * ```
 */
export function TimePicker({
  value: controlledValue,
  defaultValue = "00:00",
  onChange,
  format12h = false,
  showSeconds = false,
  disabled = false,
  size = "sm",
  error = false,
  className = "",
  ...props
}: TimePickerProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const time = controlledValue !== undefined ? controlledValue : internalValue;

  const [hours, minutes, seconds = "00"] = time.split(":");

  const generateHours = (): Array<{ value: string; label: string }> => {
    if (format12h) {
      return Array.from({ length: 12 }, (_, i) => {
        const hour = i + 1;
        return {
          value: hour.toString().padStart(2, "0"),
          label: hour.toString(),
        };
      });
    }
    return Array.from({ length: 24 }, (_, i) => ({
      value: i.toString().padStart(2, "0"),
      label: i.toString().padStart(2, "0"),
    }));
  };

  const generateMinutes = (): Array<{ value: string; label: string }> => {
    return Array.from({ length: 60 }, (_, i) => ({
      value: i.toString().padStart(2, "0"),
      label: i.toString().padStart(2, "0"),
    }));
  };

  const generateSeconds = (): Array<{ value: string; label: string }> => {
    return Array.from({ length: 60 }, (_, i) => ({
      value: i.toString().padStart(2, "0"),
      label: i.toString().padStart(2, "0"),
    }));
  };

  const handleChange = (type: "hours" | "minutes" | "seconds", newValue: string) => {
    let newTime: string;
    if (type === "hours") {
      newTime = `${newValue}:${minutes}:${seconds || "00"}`;
    } else if (type === "minutes") {
      newTime = `${hours}:${newValue}:${seconds || "00"}`;
    } else {
      newTime = `${hours}:${minutes}:${newValue}`;
    }

    if (!showSeconds) {
      newTime = newTime.split(":").slice(0, 2).join(":");
    }

    if (controlledValue === undefined) {
      setInternalValue(newTime);
    }
    onChange?.(newTime);
  };

  const timePickerClasses = ["time-picker", error && "time-picker-error", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={timePickerClasses} {...props}>
      <Select
        value={format12h ? (parseInt(hours) % 12 || 12).toString().padStart(2, "0") : hours}
        onChange={(newHour) => {
          if (format12h) {
            // Convert 12h to 24h format (simplified - would need AM/PM selector)
            handleChange("hours", newHour);
          } else {
            handleChange("hours", newHour);
          }
        }}
        options={generateHours()}
        disabled={disabled}
        size={size}
        error={error ? "Invalid time" : undefined}
      />
      <span className="time-picker-separator">:</span>
      <Select
        value={minutes}
        onChange={(newMinute) => handleChange("minutes", newMinute)}
        options={generateMinutes()}
        disabled={disabled}
        size={size}
        error={error ? "Invalid time" : undefined}
      />
      {showSeconds && (
        <>
          <span className="time-picker-separator">:</span>
          <Select
            value={seconds}
            onChange={(newSecond) => handleChange("seconds", newSecond)}
            options={generateSeconds()}
            disabled={disabled}
            size={size}
            error={error ? "Invalid time" : undefined}
          />
        </>
      )}
      {format12h && (
        <Select
          value={parseInt(hours) >= 12 ? "PM" : "AM"}
          onChange={(ampm) => {
            const isPM = ampm === "PM";
            const currentHour = parseInt(hours);
            let newHour: string;
            if (isPM && currentHour < 12) {
              newHour = (currentHour + 12).toString().padStart(2, "0");
            } else if (!isPM && currentHour >= 12) {
              newHour = (currentHour - 12 || 12).toString().padStart(2, "0");
            } else {
              newHour = hours;
            }
            handleChange("hours", newHour);
          }}
          options={[
            { value: "AM", label: "AM" },
            { value: "PM", label: "PM" },
          ]}
          disabled={disabled}
          size={size}
        />
      )}
    </div>
  );
}

export default TimePicker;
