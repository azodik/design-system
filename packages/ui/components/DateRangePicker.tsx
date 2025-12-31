"use client";
import React, { useState, useEffect, useCallback } from "react";
import Input from "./Input";
import Button from "./Button";
import { Popover } from "./Popover";

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface DateRangePickerProps {
  /**
   * Selected date range
   */
  value?: DateRange;
  /**
   * Callback when date range changes
   */
  onChange?: (range: DateRange) => void;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Disable date picker
   */
  disabled?: boolean;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Show quick select buttons
   */
  showQuickSelect?: boolean;
}

/**
 * DateRangePicker - Enhanced date range selection for dashboards
 *
 * @example
 * ```tsx
 * <DateRangePicker
 *   value={{ start: new Date(), end: new Date() }}
 *   onChange={setDateRange}
 *   showQuickSelect
 * />
 * ```
 */
export function DateRangePicker({
  value,
  onChange,
  placeholder = "Select date range",
  disabled = false,
  className = "",
  showQuickSelect = true,
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(value?.start || null);
  const [endDate, setEndDate] = useState<Date | null>(value?.end || null);
  const [tempStartDate, setTempStartDate] = useState<Date | null>(startDate);
  const [tempEndDate, setTempEndDate] = useState<Date | null>(endDate);

  // Sync with external value
  useEffect(() => {
    // Use setTimeout to defer state update outside of effect
    setTimeout(() => {
      setStartDate(value?.start || null);
      setEndDate(value?.end || null);
      setTempStartDate(value?.start || null);
      setTempEndDate(value?.end || null);
    }, 0);
  }, [value]);

  const formatDate = useCallback((date: Date | null): string => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, []);

  const formatRange = useCallback((): string => {
    if (!startDate && !endDate) return placeholder;
    if (startDate && endDate) {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    }
    if (startDate) return `${formatDate(startDate)} - ...`;
    if (endDate) return `... - ${formatDate(endDate)}`;
    return placeholder;
  }, [startDate, endDate, formatDate, placeholder]);

  const handleDateSelect = useCallback(
    (date: Date, isStart: boolean) => {
      if (isStart) {
        setTempStartDate(date);
        // If end date is before start date, clear it
        if (tempEndDate && date > tempEndDate) {
          setTempEndDate(null);
        }
      } else {
        setTempEndDate(date);
        // If start date is after end date, update start date
        if (tempStartDate && date < tempStartDate) {
          setTempStartDate(date);
        }
      }
    },
    [tempStartDate, tempEndDate],
  );

  const handleApply = useCallback(() => {
    setStartDate(tempStartDate);
    setEndDate(tempEndDate);
    onChange?.({ start: tempStartDate, end: tempEndDate });
    setIsOpen(false);
  }, [tempStartDate, tempEndDate, onChange]);

  const handleClear = useCallback(() => {
    setTempStartDate(null);
    setTempEndDate(null);
    setStartDate(null);
    setEndDate(null);
    onChange?.({ start: null, end: null });
  }, [onChange]);

  const handleQuickSelect = useCallback((period: "today" | "week" | "month" | "year") => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let start: Date;
    const end: Date = new Date(today);
    end.setHours(23, 59, 59, 999);

    switch (period) {
      case "today":
        start = new Date(today);
        break;
      case "week":
        start = new Date(today);
        start.setDate(today.getDate() - 6);
        break;
      case "month":
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        break;
      case "year":
        start = new Date(today.getFullYear(), 0, 1);
        break;
      default:
        start = new Date(today);
    }

    setTempStartDate(start);
    setTempEndDate(end);
  }, []);

  const renderCalendar = () => {
    const today = new Date();
    const currentMonth = tempStartDate?.getMonth() || today.getMonth();
    const currentYear = tempStartDate?.getFullYear() || today.getFullYear();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];
    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(currentYear, currentMonth, day));
    }

    return (
      <div className="date-range-picker-calendar">
        {showQuickSelect && (
          <div className="date-range-picker-quick-select">
            <Button size="xs" variant="outline" onClick={() => handleQuickSelect("today")}>
              Today
            </Button>
            <Button size="xs" variant="outline" onClick={() => handleQuickSelect("week")}>
              Week
            </Button>
            <Button size="xs" variant="outline" onClick={() => handleQuickSelect("month")}>
              Month
            </Button>
            <Button size="xs" variant="outline" onClick={() => handleQuickSelect("year")}>
              Year
            </Button>
          </div>
        )}

        <div className="date-range-picker-calendar-grid">
          <div className="date-range-picker-weekdays">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="date-range-picker-weekday">
                {day}
              </div>
            ))}
          </div>
          <div className="date-range-picker-days">
            {days.map((date, index) => {
              if (!date) {
                return <div key={index} className="date-range-picker-day-empty" />;
              }

              const isStart = tempStartDate && date.getTime() === tempStartDate.getTime();
              const isEnd = tempEndDate && date.getTime() === tempEndDate.getTime();
              const isInRange =
                tempStartDate && tempEndDate && date >= tempStartDate && date <= tempEndDate;
              const isToday = date.toDateString() === today.toDateString();

              return (
                <button
                  key={index}
                  type="button"
                  className={`date-range-picker-day ${isStart ? "start" : ""} ${isEnd ? "end" : ""} ${isInRange ? "in-range" : ""} ${isToday ? "today" : ""}`}
                  onClick={() => {
                    if (!tempStartDate || (tempStartDate && tempEndDate)) {
                      handleDateSelect(date, true);
                      setTempEndDate(null);
                    } else {
                      handleDateSelect(date, false);
                    }
                  }}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        <div className="date-range-picker-actions">
          <Button size="sm" variant="outline" onClick={handleClear}>
            Clear
          </Button>
          <Button size="sm" variant="solid" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      content={renderCalendar()}
      className={className}
    >
      <Input
        value={formatRange()}
        placeholder={placeholder}
        disabled={disabled}
        readOnly
        className={className}
        onClick={() => !disabled && setIsOpen(true)}
        onKeyDown={(e) => {
          if (!disabled && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        role="button"
        tabIndex={disabled ? -1 : 0}
        style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      />
    </Popover>
  );
}

export default DateRangePicker;
