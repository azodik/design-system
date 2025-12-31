import React, { useRef, useState, KeyboardEvent } from "react";

export interface OTPInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Number of OTP digits
   */
  length?: number;
  /**
   * Current value (controlled)
   */
  value?: string;
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Callback when value changes
   */
  onChange?: (value: string) => void;
  /**
   * Callback when OTP is complete
   */
  onComplete?: (value: string) => void;
  /**
   * Mask input (show dots instead of numbers)
   */
  mask?: boolean;
  /**
   * Numeric only
   */
  numericOnly?: boolean;
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
  /**
   * Error state
   */
  error?: boolean;
}

/**
 * OTP Input component for one-time password entry
 *
 * @example
 * ```tsx
 * <OTPInput
 *   length={6}
 *   value={otp}
 *   onChange={setOtp}
 *   onComplete={(value) => console.log('OTP:', value)}
 * />
 * ```
 */
export function OTPInput({
  length = 6,
  value: controlledValue,
  defaultValue = "",
  onChange,
  onComplete,
  mask = false,
  numericOnly = true,
  size = "medium",
  error = false,
  className = "",
  ...props
}: OTPInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const digits = value.split("").slice(0, length);
  while (digits.length < length) {
    digits.push("");
  }

  const handleChange = (index: number, newValue: string) => {
    if (numericOnly && newValue && !/^\d$/.test(newValue)) {
      return;
    }

    const newDigits = [...digits];
    newDigits[index] = newValue.slice(-1); // Take only the last character
    const newValueString = newDigits.join("");

    if (controlledValue === undefined) {
      setInternalValue(newValueString);
    }
    onChange?.(newValueString);

    // Auto-focus next input
    if (newValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if complete
    if (newValueString.length === length) {
      onComplete?.(newValueString);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length);
    const newDigits = pastedData.split("").slice(0, length);

    if (numericOnly) {
      const numericDigits = newDigits.filter((d) => /^\d$/.test(d));
      if (numericDigits.length === 0) return;

      const newValueString = numericDigits.join("");
      if (controlledValue === undefined) {
        setInternalValue(newValueString);
      }
      onChange?.(newValueString);

      // Focus the next empty input or the last one
      const nextIndex = Math.min(numericDigits.length, length - 1);
      inputRefs.current[nextIndex]?.focus();

      if (newValueString.length === length) {
        onComplete?.(newValueString);
      }
    } else {
      const newValueString = newDigits.join("");
      if (controlledValue === undefined) {
        setInternalValue(newValueString);
      }
      onChange?.(newValueString);

      const nextIndex = Math.min(newDigits.length, length - 1);
      inputRefs.current[nextIndex]?.focus();

      if (newValueString.length === length) {
        onComplete?.(newValueString);
      }
    }
  };

  const otpClasses = ["otp-input", `otp-input-size-${size}`, error && "otp-input-error", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={otpClasses} {...props}>
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type={mask ? "password" : "text"}
          inputMode={numericOnly ? "numeric" : "text"}
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="otp-input-digit"
          aria-label={`Digit ${index + 1} of ${length}`}
          autoComplete="one-time-code"
        />
      ))}
    </div>
  );
}

export default OTPInput;
