import React from "react";
import { useThemeContext } from "./Theme";
import { resolveRadiusFactor } from "../utils/radius";
import { SemanticSize, getSizeClassName } from "../utils/size-variant-mapping";
import { useReducedMotion } from "../utils/reduced-motion";
import { useHighContrastMode } from "../utils/high-contrast";
import { getSpacingVar } from "../utils/spacing-scale";
import { getFontSize } from "../utils/typography-scale";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "soft" | "surface" | "outline" | "glass";
  size?: SemanticSize;
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  title?: string;
  icon?: React.ReactNode;
  highContrast?: boolean;
}

export default function Alert({
  children,
  variant = "soft",
  size = "sm",
  color,
  radius,
  title,
  icon,
  highContrast: propHighContrast,
  className = "",
  style,
  ...props
}: AlertProps) {
  const context = useThemeContext();
  const reducedMotion = useReducedMotion();
  const systemHighContrast = useHighContrastMode();
  const highContrast = propHighContrast ?? systemHighContrast;
  const sizeClassName = getSizeClassName(size);

  const resolvedColor = color || context?.accentColor || "indigo";

  const isNamedColor = ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(
    resolvedColor,
  );

  // Use spacing and typography utilities
  const alertPadding = getSpacingVar(
    size === "xs" ? 2 : size === "sm" ? 3 : size === "md" ? 4 : size === "lg" ? 5 : 6,
  );
  const alertFontSize = getFontSize(
    size === "xs"
      ? "sm"
      : size === "sm"
        ? "base"
        : size === "md"
          ? "lg"
          : size === "lg"
            ? "xl"
            : "2xl",
  );

  const alertClasses = [
    "alert", // Use base alert class for structural styles
    `az-variant-${variant}`,
    sizeClassName,
    isNamedColor ? `az-accent-${resolvedColor}` : "",
    highContrast ? "az-high-contrast" : "",
    reducedMotion ? "az-reduced-motion" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    ...(color && !isNamedColor ? { "--accent-9": color } : {}),
    ...resolveRadiusFactor(radius),
    padding: alertPadding,
    fontSize: alertFontSize,
  } as React.CSSProperties;

  const titleId = React.useId();

  return (
    <div
      className={alertClasses}
      style={customStyle}
      role="alert"
      aria-labelledby={title ? titleId : undefined}
      {...props}
    >
      {icon && <div className="alert-icon">{icon}</div>}
      <div className="alert-content">
        {title && (
          <div id={titleId} className="alert-title">
            {title}
          </div>
        )}
        <div className="alert-message">{children}</div>
      </div>
    </div>
  );
}
