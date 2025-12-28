import React from "react";
import { useThemeContext } from "./Theme";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "solid" | "soft" | "outline" | "surface";
  size?: "1" | "2" | "3";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  highContrast?: boolean;
}

export default function Badge({
  children,
  variant = "soft",
  size = "1",
  color,
  radius,
  highContrast = false,
  className = "",
  style,
  ...props
}: BadgeProps) {
  const context = useThemeContext();

  const resolvedColor = color || context?.accentColor || "indigo";

  const isNamedColor = ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(
    resolvedColor,
  );

  const badgeClasses = [
    "badge",
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
    <span className={badgeClasses} style={customStyle} {...props}>
      {children}
    </span>
  );
}
