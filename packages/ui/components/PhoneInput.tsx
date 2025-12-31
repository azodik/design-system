import React, { useState, useCallback } from "react";
import { Select } from "./Select";
import Input from "./Input";
import { SemanticSize } from "../utils/size-variant-mapping";

export interface Country {
  code: string;
  dialCode: string;
  name: string;
  flag?: string;
}

export interface PhoneInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "size"
> {
  /**
   * Current phone value (controlled)
   */
  value?: string;
  /**
   * Default phone value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Callback when phone changes
   */
  onChange?: (phone: string, countryCode: string) => void;
  /**
   * Available countries
   */
  countries?: Country[];
  /**
   * Default country code
   */
  defaultCountry?: string;
  /**
   * Show country selector
   */
  showCountrySelector?: boolean;
  /**
   * Size variant
   */
  size?: SemanticSize;
  /**
   * Error state
   */
  error?: boolean;
}

const DEFAULT_COUNTRIES: Country[] = [
  { code: "US", dialCode: "+1", name: "United States", flag: "🇺🇸" },
  { code: "GB", dialCode: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", dialCode: "+1", name: "Canada", flag: "🇨🇦" },
  { code: "AU", dialCode: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "DE", dialCode: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "FR", dialCode: "+33", name: "France", flag: "🇫🇷" },
  { code: "IT", dialCode: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "ES", dialCode: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "IN", dialCode: "+91", name: "India", flag: "🇮🇳" },
  { code: "CN", dialCode: "+86", name: "China", flag: "🇨🇳" },
  { code: "JP", dialCode: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "BR", dialCode: "+55", name: "Brazil", flag: "🇧🇷" },
];

/**
 * Phone Input component for international phone numbers
 *
 * @example
 * ```tsx
 * <PhoneInput
 *   value={phone}
 *   onChange={(phone, countryCode) => setPhone(phone)}
 *   defaultCountry="US"
 * />
 * ```
 */
export function PhoneInput({
  value: controlledValue,
  defaultValue = "",
  onChange,
  countries = DEFAULT_COUNTRIES,
  defaultCountry = "US",
  showCountrySelector = true,
  size = "sm",
  error = false,
  className = "",
  ...props
}: PhoneInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.code === defaultCountry) || countries[0],
  );

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handlePhoneChange = useCallback(
    (phone: string) => {
      // Remove non-digit characters except +
      const cleaned = phone.replace(/[^\d+]/g, "");
      const newValue = selectedCountry.dialCode + cleaned.replace(selectedCountry.dialCode, "");

      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue, selectedCountry.code);
    },
    [selectedCountry, controlledValue, onChange],
  );

  const handleCountryChange = useCallback(
    (countryCode: string) => {
      const country = countries.find((c) => c.code === countryCode);
      if (country) {
        setSelectedCountry(country);
        // Update phone number with new country code
        const phoneWithoutCode = value.replace(/^\+\d+/, "");
        const newValue = country.dialCode + phoneWithoutCode;
        if (controlledValue === undefined) {
          setInternalValue(newValue);
        }
        onChange?.(newValue, country.code);
      }
    },
    [countries, value, controlledValue, onChange],
  );

  const phoneInputClasses = ["phone-input", className].filter(Boolean).join(" ");

  const countryOptions = countries.map((country) => ({
    value: country.code,
    label: `${country.flag || ""} ${country.dialCode} ${country.name}`,
  }));

  return (
    <div className={phoneInputClasses}>
      {showCountrySelector && (
        <Select
          value={selectedCountry.code}
          onChange={handleCountryChange}
          options={countryOptions}
          size={size}
          className="phone-input-country"
        />
      )}
      <Input
        type="tel"
        value={value}
        onChange={(e) => handlePhoneChange(e.target.value)}
        placeholder="Phone number"
        size={size}
        error={error ? "Invalid phone number" : undefined}
        className="phone-input-field"
        {...props}
      />
    </div>
  );
}

export default PhoneInput;
