import React from "react";
import { useThemeContext } from "./Theme";
import { resolveRadiusFactor } from "../utils/radius";
import { SemanticSize, getSizeClassName } from "../utils/size-variant-mapping";
import { useReducedMotion } from "../utils/reduced-motion";
import { useHighContrastMode } from "../utils/high-contrast";
import { getSpacingVar } from "../utils/spacing-scale";
import { getFontSize } from "../utils/typography-scale";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "solid" | "soft" | "outline" | "surface";
  size?: SemanticSize;
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | string;
  radius?: "none" | "small" | "medium" | "large" | "full";
  highContrast?: boolean;
}

export default function Badge({
  children,
  variant = "soft",
  size = "xs",
  color,
  radius,
  highContrast: propHighContrast,
  className = "",
  style,
  ...props
}: BadgeProps) {
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
  const badgePadding = getSpacingVar(
    size === "xs" ? 1 : size === "sm" ? 2 : size === "md" ? 3 : size === "lg" ? 4 : 5,
  );
  const badgeFontSize = getFontSize(
    size === "xs"
      ? "xs"
      : size === "sm"
        ? "sm"
        : size === "md"
          ? "base"
          : size === "lg"
            ? "lg"
            : "xl",
  );

  const badgeClasses = [
    "badge",
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
    padding: badgePadding,
    fontSize: badgeFontSize,
  } as React.CSSProperties;

  return (
    <span className={badgeClasses} style={customStyle} role="status" {...props}>
      {children}
    </span>
  );
}
