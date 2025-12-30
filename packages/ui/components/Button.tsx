import React from "react";
import { useThemeContext } from "./Theme";
import { useTheme as useGlobalTheme } from "../providers/ThemeProvider";
import { resolveRadiusFactor } from "../utils/radius";
import { Spinner } from "./Spinner";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "soft" | "outline" | "ghost" | "link";
  size?: "1" | "2" | "3" | "4";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  highContrast?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

/**
 * Button component with multiple variants, sizes, and colors
 */
export default function Button({
  children,
  variant = "solid",
  size = "2",
  color,
  radius,
  highContrast = false,
  loading = false,
  icon,
  className,
  style,
  disabled,
  ...props
}: ButtonProps) {
  const context = useThemeContext();
  const globalTheme = useGlobalTheme();

  // Resolve props from context if not provided, fallback to global theme
  const resolvedColor = color || context?.accentColor || globalTheme?.accentColor || "indigo";

  const isNamedColor = ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(
    resolvedColor,
  );

  const buttonClasses = [
    "az-reset",
    "az-Button",
    `az-variant-${variant}`,
    `az-r-size-${size}`,
    isNamedColor ? `az-accent-${resolvedColor}` : "",
    highContrast ? "az-high-contrast" : "",
    loading ? "az-loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...resolveRadiusFactor(radius),
  } as React.CSSProperties;

  return (
    <button className={buttonClasses} style={customStyle} disabled={disabled || loading} {...props}>
      {loading && <Spinner size="1" color="currentColor" />}
      {!loading && icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-content">{children}</span>
    </button>
  );
}
