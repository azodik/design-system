import React, { useState, useMemo, useCallback } from "react";
import { useTheme, type GrayColor, type Radius } from "../providers/ThemeProvider";
import { PaletteIcon, MonitorIcon, SunIcon, MoonIcon } from "@azodik/icons";
import { Popover } from "./Popover";
import Badge from "./Badge";
import { VERSION } from "../version";

export interface ThemePanelProps {
  trigger?: React.ReactNode;
  className?: string;
  position?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end";
}

const ACCENT_COLORS = ["indigo", "ruby", "grass", "amber", "cyan", "azodik"];
const GRAY_COLORS = ["gray", "mauve", "slate", "sage"];
const RADII = ["none", "small", "medium", "large", "full"];
const SCALING = ["90%", "95%", "100%", "105%", "110%"];

/**
 * ThemePanel component for customizing theme appearance, colors, radius, and scaling
 *
 * @param trigger - Custom trigger element (optional)
 * @param className - Additional CSS classes
 * @param position - Position of the popover panel
 * @example
 * ```tsx
 * <ThemePanel position="bottom-end" />
 * ```
 */
export const ThemePanel = React.memo(function ThemePanel({
  trigger,
  className = "",
  position = "bottom-end",
}: ThemePanelProps) {
  const {
    setTheme,
    appearance,
    accentColor,
    setAccentColor,
    grayColor,
    setGrayColor,
    radius,
    setRadius,
    scaling,
    setScaling,
  } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const defaultTrigger = useMemo(
    () => (
      <button
        className={`theme-panel-trigger ${className}`}
        onClick={handleToggle}
        style={{
          padding: "8px",
          borderRadius: "var(--radius-3)",
          border: "1px solid var(--gray-6)",
          background: "var(--gray-2)",
          color: "var(--gray-12)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "36px",
          height: "36px",
        }}
        aria-label="Open theme panel"
        aria-expanded={isOpen}
      >
        <PaletteIcon size={20} />
      </button>
    ),
    [className, isOpen, handleToggle],
  );

  const panelContentMemo = useMemo(
    () => (
      <div
        className="theme-panel"
        style={{
          padding: "20px",
          minWidth: "300px",
          background: "var(--gray-1)",
          borderRadius: "var(--radius-4)",
          border: "1px solid var(--gray-6)",
          boxShadow: "var(--shadow-3)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h4 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: 600 }}>Appearance</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
            <AppearanceButton
              active={appearance === "light"}
              onClick={() => setTheme("light")}
              icon={<SunIcon size={14} />}
              label="Light"
            />
            <AppearanceButton
              active={appearance === "dark"}
              onClick={() => setTheme("dark")}
              icon={<MoonIcon size={14} />}
              label="Dark"
            />
            <AppearanceButton
              active={appearance === "system"}
              onClick={() => setTheme("system")}
              icon={<MonitorIcon size={14} />}
              label="System"
            />
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h4 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: 600 }}>Accent Color</h4>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {ACCENT_COLORS.map((color) => (
              <ColorDot
                key={color}
                color={color}
                active={accentColor === color}
                onClick={() => setAccentColor(color)}
              />
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h4 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: 600 }}>Gray Color</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {GRAY_COLORS.map((color) => (
              <SelectButton
                key={color}
                label={color}
                active={grayColor === color}
                onClick={() => setGrayColor(color as GrayColor)}
              />
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h4 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: 600 }}>Radius</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
            {RADII.map((r) => (
              <SelectButton
                key={r}
                label={r}
                active={radius === r}
                onClick={() => setRadius(r as Radius)}
              />
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: 600 }}>Scaling</h4>
          <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
            {SCALING.map((s) => (
              <SelectButton
                key={s}
                label={s}
                active={scaling === s}
                onClick={() => setScaling(s)}
                style={{ flex: "0 0 auto", minWidth: "50px" }}
              />
            ))}
          </div>
        </div>

        <div
          style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--gray-4)" }}
        >
          <Badge variant="soft" color="indigo">
            Version {VERSION}
          </Badge>
        </div>
      </div>
    ),
    [
      appearance,
      accentColor,
      grayColor,
      radius,
      scaling,
      setTheme,
      setAccentColor,
      setGrayColor,
      setRadius,
      setScaling,
    ],
  );

  return (
    <Popover isOpen={isOpen} onClose={handleClose} position={position} content={panelContentMemo}>
      {trigger || defaultTrigger}
    </Popover>
  );
});

interface AppearanceButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const AppearanceButton = React.memo(function AppearanceButton({
  active,
  onClick,
  icon,
  label,
}: AppearanceButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        padding: "8px 4px",
        borderRadius: "var(--radius-3)",
        border: `1px solid ${active ? "var(--accent-9)" : "var(--gray-6)"}`,
        background: active ? "var(--accent-3)" : "var(--gray-2)",
        color: active ? "var(--accent-11)" : "var(--gray-11)",
        cursor: "pointer",
        fontSize: "12px",
        transition: "all 0.2s",
      }}
    >
      {icon}
      {label}
    </button>
  );
});

AppearanceButton.displayName = "AppearanceButton";

interface ColorDotProps {
  color: string;
  active: boolean;
  onClick: () => void;
}

const ColorDot = React.memo(function ColorDot({ color, active, onClick }: ColorDotProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: active ? "2px solid white" : "none",
        boxShadow: active ? "0 0 0 1px var(--gray-8)" : "none",
        background: `var(--${color}-9)`,
        cursor: "pointer",
        padding: 0,
        flexShrink: 0,
      }}
      title={color}
      aria-label={`Select ${color} color`}
    />
  );
});

ColorDot.displayName = "ColorDot";

interface SelectButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

const SelectButton = React.memo(function SelectButton({
  label,
  active,
  onClick,
  style,
}: SelectButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px",
        borderRadius: "var(--radius-2)",
        border: `1px solid ${active ? "var(--accent-9)" : "var(--gray-6)"}`,
        background: active ? "var(--accent-3)" : "var(--gray-2)",
        color: active ? "var(--accent-11)" : "var(--gray-11)",
        cursor: "pointer",
        fontSize: "12px",
        textTransform: "capitalize",
        ...style,
      }}
      aria-pressed={active}
      aria-label={`Select ${label}`}
    >
      {label}
    </button>
  );
});

SelectButton.displayName = "SelectButton";
