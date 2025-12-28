import React from "react";
import { useThemeContext } from "./Theme";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "soft" | "surface" | "outline";
  size?: "1" | "2" | "3";
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  title?: string;
  icon?: React.ReactNode;
  highContrast?: boolean;
}

export default function Alert({
  children,
  variant = "soft",
  size = "2",
  color,
  radius,
  title,
  icon,
  highContrast = false,
  className = "",
  style,
  ...props
}: AlertProps) {
  const context = useThemeContext();

  const resolvedColor = color || context?.accentColor || "indigo";

  const isNamedColor = ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(
    resolvedColor,
  );

  const alertClasses = [
    "alert", // Use base alert class for structural styles
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
    <div className={alertClasses} style={customStyle} {...props}>
      {icon && <div className="alert-icon">{icon}</div>}
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
      </div>
    </div>
  );
}
