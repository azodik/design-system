import React, { useState, useCallback } from "react";

export interface ColorPickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Current color value (hex)
   */
  value?: string;
  /**
   * Default color value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Callback when color changes
   */
  onChange?: (color: string) => void;
  /**
   * Format: hex, rgb, hsl
   */
  format?: "hex" | "rgb" | "hsl";
  /**
   * Show alpha channel
   */
  showAlpha?: boolean;
  /**
   * Preset colors
   */
  presets?: string[];
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
  /**
   * Disabled state
   */
  disabled?: boolean;
}

const DEFAULT_PRESETS = [
  "#000000",
  "#FFFFFF",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#FFC0CB",
  "#A52A2A",
  "#808080",
  "#000080",
  "#008000",
];

/**
 * Color Picker component for color selection
 *
 * @example
 * ```tsx
 * <ColorPicker
 *   value={color}
 *   onChange={setColor}
 *   presets={customPresets}
 * />
 * ```
 */
export function ColorPicker({
  value: controlledValue,
  defaultValue = "#000000",
  onChange,
  format: _format = "hex",
  showAlpha: _showAlpha = false,
  presets = DEFAULT_PRESETS,
  size = "medium",
  disabled = false,
  className = "",
  ...props
}: ColorPickerProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [showPicker, setShowPicker] = useState(false);

  const color = controlledValue !== undefined ? controlledValue : internalValue;

  const handleColorChange = useCallback(
    (newColor: string) => {
      if (controlledValue === undefined) {
        setInternalValue(newColor);
      }
      onChange?.(newColor);
    },
    [controlledValue, onChange],
  );

  const handlePresetClick = useCallback(
    (presetColor: string) => {
      handleColorChange(presetColor);
    },
    [handleColorChange],
  );

  const colorPickerClasses = [
    "color-picker",
    `color-picker-size-${size}`,
    disabled && "color-picker-disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={colorPickerClasses} {...props}>
      <div
        className="color-picker-trigger"
        onClick={() => !disabled && setShowPicker(!showPicker)}
        onKeyDown={(e) => {
          if (!disabled && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setShowPicker(!showPicker);
          }
        }}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label="Open color picker"
      >
        <div className="color-picker-preview" style={{ backgroundColor: color }} />
        <input
          type="color"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
          disabled={disabled}
          className="color-picker-input"
        />
        <span className="color-picker-value">{color.toUpperCase()}</span>
      </div>

      {showPicker && !disabled && (
        <div className="color-picker-popup">
          <div className="color-picker-presets">
            {presets.map((preset, index) => (
              <button
                key={index}
                type="button"
                className="color-picker-preset"
                style={{ backgroundColor: preset }}
                onClick={() => handlePresetClick(preset)}
                aria-label={`Select color ${preset}`}
              />
            ))}
          </div>
          <div className="color-picker-custom">
            <input
              type="color"
              value={color}
              onChange={(e) => handleColorChange(e.target.value)}
              className="color-picker-custom-input"
            />
            <input
              type="text"
              value={color}
              onChange={(e) => {
                if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
                  handleColorChange(e.target.value);
                }
              }}
              placeholder="#000000"
              className="color-picker-custom-text"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
