"use client";

import React, { useState, useEffect, useRef } from "react";
import { HexColorPicker } from "react-colorful";

export interface ColorPickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  disabled?: boolean;
}

export function ColorPicker({
  value,
  defaultValue = "#000000",
  onChange,
  disabled = false,
  className = "",
  ...props
}: ColorPickerProps) {
  const [internalColor, setInternalColor] = useState(value ?? defaultValue);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const color = value ?? internalColor;

  /* Sync controlled value */
  useEffect(() => {
    if (value !== undefined && value !== internalColor) {
      setInternalColor(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const updateColor = (newColor: string) => {
    setInternalColor(newColor);
    onChange?.(newColor);
  };

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;

    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className={`color-picker ${className}`}
      {...props}
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        className="color-picker-trigger"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 10px",
          borderRadius: 6,
          border: "1px solid #d0d0d0",
          background: "#fff",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        <span
          style={{
            width: 20,
            height: 20,
            borderRadius: 4,
            backgroundColor: color,
            border: "1px solid #aaa",
          }}
        />
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 13,
          }}
        >
          {color.toUpperCase()}
        </span>
      </button>

      {/* Popup */}
      {open && !disabled && (
        <div
          className="color-picker-popup"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            zIndex: 1000,
            padding: 12,
            borderRadius: 8,
            background: "#fff",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <HexColorPicker color={color} onChange={updateColor} />
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
