import React from "react";
import { useThemeContext } from "./Theme";
import { useTheme as useGlobalTheme } from "../providers/ThemeProvider";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "soft" | "outline" | "ghost" | "link";
  size?: "1" | "2" | "3" | "4";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  highContrast?: boolean;
}

/**
 * Button component with multiple variants, sizes, and colors
 *
 * @param children - Button content
 * @param variant - Visual style variant (default: "solid")
 * @param size - Button size (default: "2")
 * @param color - Button color theme (defaults to theme accent color)
 * @param radius - Border radius (defaults to theme radius)
 * @param highContrast - Use high contrast colors (default: false)
 * @example
 * ```tsx
 * <Button variant="solid" size="2" color="indigo">
 *   Click Me
 * </Button>
 * ```
 */
export default function Button({
  children,
  variant = "solid",
  size = "2",
  color,
  radius,
  highContrast = false,
  className,
  style,
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
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...(radius
      ? {
          "--radius-factor":
            radius === "none"
              ? "0"
              : radius === "small"
                ? "0.75"
                : radius === "medium"
                  ? "1"
                  : radius === "large"
                    ? "1.5"
                    : "2",
        }
      : {}),
  } as React.CSSProperties;

  return (
    <button className={buttonClasses} style={customStyle} {...props}>
      {children}
    </button>
  );
}
