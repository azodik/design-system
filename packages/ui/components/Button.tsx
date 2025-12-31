"use client";
import React from "react";
import { useThemeContext } from "./Theme";
import { useTheme as useGlobalTheme } from "../providers/ThemeProvider";
import { resolveRadiusFactor } from "../utils/radius";
import { Spinner } from "./Spinner";
import { SemanticSize, getSizeClassName } from "../utils/size-variant-mapping";
import { useReducedMotion } from "../utils/reduced-motion";
import { useHighContrastMode } from "../utils/high-contrast";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "soft" | "outline" | "ghost" | "link";
  size?: SemanticSize;
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
  size = "sm",
  color,
  radius,
  highContrast: propHighContrast,
  loading = false,
  icon,
  className,
  style,
  disabled,
  ...props
}: ButtonProps) {
  const context = useThemeContext();
  const globalTheme = useGlobalTheme();
  const reducedMotion = useReducedMotion();
  const systemHighContrast = useHighContrastMode();
  const highContrast = propHighContrast ?? systemHighContrast;

  // Resolve props from context if not provided, fallback to global theme
  const resolvedColor = color || context?.accentColor || globalTheme?.accentColor || "indigo";

  const isNamedColor = ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(
    resolvedColor,
  );

  const sizeClassName = getSizeClassName(size);

  const buttonClasses = [
    "az-reset",
    "az-Button",
    `az-variant-${variant}`,
    sizeClassName,
    isNamedColor ? `az-accent-${resolvedColor}` : "",
    highContrast ? "az-high-contrast" : "",
    loading ? "az-loading" : "",
    reducedMotion ? "az-reduced-motion" : "",
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
    <button
      className={buttonClasses}
      style={customStyle}
      disabled={disabled || loading}
      aria-busy={loading ? "true" : undefined}
      aria-disabled={disabled ? "true" : undefined}
      {...props}
    >
      {loading && <Spinner size="xs" color="currentColor" />}
      {!loading && icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-content">{children}</span>
    </button>
  );
}
