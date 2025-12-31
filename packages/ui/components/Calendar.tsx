"use client";
import React, { useState, useCallback } from "react";

export interface CalendarProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange" | "defaultValue"
> {
  /**
   * Selected date (controlled)
   */
  value?: Date;
  /**
   * Default date (uncontrolled)
   */
  defaultValue?: Date;
  /**
   * Callback when date changes
   */
  onChange?: (date: Date) => void;
  /**
   * Minimum selectable date
   */
  minDate?: Date;
  /**
   * Maximum selectable date
   */
  maxDate?: Date;
  /**
   * Disabled dates
   */
  disabledDates?: Date[];
  /**
   * Highlighted dates
   */
  highlightedDates?: Date[];
  /**
   * Show week numbers
   */
  showWeekNumbers?: boolean;
  /**
   * First day of week (0 = Sunday, 1 = Monday)
   */
  firstDayOfWeek?: 0 | 1;
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
}

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Calendar component for date selection
 *
 * @example
 * ```tsx
 * <Calendar
 *   value={selectedDate}
 *   onChange={setSelectedDate}
 *   minDate={new Date()}
 * />
 * ```
 */
export function Calendar({
  value: controlledValue,
  defaultValue,
  onChange,
  minDate,
  maxDate,
  disabledDates = [],
  highlightedDates = [],
  showWeekNumbers = false,
  firstDayOfWeek = 0,
  size = "medium",
  className = "",
  ...props
}: CalendarProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || new Date());
  const [viewDate, setViewDate] = useState(controlledValue || defaultValue || new Date());

  const selectedDate = controlledValue !== undefined ? controlledValue : internalValue;

  const isDateDisabled = useCallback(
    (date: Date): boolean => {
      if (minDate && date < minDate) return true;
      if (maxDate && date > maxDate) return true;
      return disabledDates.some(
        (disabled) =>
          disabled.getDate() === date.getDate() &&
          disabled.getMonth() === date.getMonth() &&
          disabled.getFullYear() === date.getFullYear(),
      );
    },
    [minDate, maxDate, disabledDates],
  );

  const isDateHighlighted = useCallback(
    (date: Date): boolean => {
      return highlightedDates.some(
        (highlighted) =>
          highlighted.getDate() === date.getDate() &&
          highlighted.getMonth() === date.getMonth() &&
          highlighted.getFullYear() === highlighted.getFullYear(),
      );
    },
    [highlightedDates],
  );

  const isDateSelected = useCallback(
    (date: Date): boolean => {
      if (!selectedDate) return false;
      return (
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear()
      );
    },
    [selectedDate],
  );

  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: Date[] = [];

    // Add days from previous month to fill first week
    const startDay = firstDay.getDay();
    const adjustedStartDay = firstDayOfWeek === 1 ? (startDay === 0 ? 6 : startDay - 1) : startDay;

    for (let i = adjustedStartDay - 1; i >= 0; i--) {
      days.push(new Date(year, month, -i));
    }

    // Add days of current month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day));
    }

    // Add days from next month to fill last week
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push(new Date(year, month + 1, day));
    }

    return days;
  };

  const handleDateClick = useCallback(
    (date: Date) => {
      if (isDateDisabled(date)) return;

      if (controlledValue === undefined) {
        setInternalValue(date);
      }
      onChange?.(date);
    },
    [isDateDisabled, controlledValue, onChange],
  );

  const handlePrevMonth = useCallback(() => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  }, []);

  const handleNextMonth = useCallback(() => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  }, []);

  const handlePrevYear = useCallback(() => {
    setViewDate((prev) => new Date(prev.getFullYear() - 1, prev.getMonth(), 1));
  }, []);

  const handleNextYear = useCallback(() => {
    setViewDate((prev) => new Date(prev.getFullYear() + 1, prev.getMonth(), 1));
  }, []);

  const days = getDaysInMonth(viewDate);
  const displayDaysOfWeek =
    firstDayOfWeek === 1 ? [...DAYS_OF_WEEK.slice(1), DAYS_OF_WEEK[0]] : DAYS_OF_WEEK;

  const calendarClasses = ["calendar", `calendar-size-${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={calendarClasses} {...props}>
      <div className="calendar-header">
        <button
          type="button"
          className="calendar-nav"
          onClick={handlePrevYear}
          aria-label="Previous year"
        >
          ««
        </button>
        <button
          type="button"
          className="calendar-nav"
          onClick={handlePrevMonth}
          aria-label="Previous month"
        >
          ‹
        </button>
        <div className="calendar-month-year">
          {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
        </div>
        <button
          type="button"
          className="calendar-nav"
          onClick={handleNextMonth}
          aria-label="Next month"
        >
          ›
        </button>
        <button
          type="button"
          className="calendar-nav"
          onClick={handleNextYear}
          aria-label="Next year"
        >
          »»
        </button>
      </div>

      <div className="calendar-weekdays">
        {showWeekNumbers && <div className="calendar-week-number-header">Wk</div>}
        {displayDaysOfWeek.map((day) => (
          <div key={day} className="calendar-weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-days">
        {days.map((day, index) => {
          const isCurrentMonth = day.getMonth() === viewDate.getMonth();
          const isDisabled = isDateDisabled(day);
          const isHighlighted = isDateHighlighted(day);
          const isSelected = isDateSelected(day);
          const weekNumber = Math.floor(index / 7) + 1;

          const dayClasses = [
            "calendar-day",
            !isCurrentMonth && "calendar-day-other-month",
            isDisabled && "calendar-day-disabled",
            isHighlighted && "calendar-day-highlighted",
            isSelected && "calendar-day-selected",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <React.Fragment key={day.toISOString()}>
              {showWeekNumbers && index % 7 === 0 && (
                <div className="calendar-week-number">{weekNumber}</div>
              )}
              <button
                type="button"
                className={dayClasses}
                onClick={() => handleDateClick(day)}
                disabled={isDisabled}
                aria-label={day.toLocaleDateString()}
              >
                {day.getDate()}
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
