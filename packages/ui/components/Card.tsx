import React from "react";
import { resolveRadiusFactor } from "../utils/radius";
import { SemanticSize, getSizeClassName } from "../utils/size-variant-mapping";
import { useReducedMotion } from "../utils/reduced-motion";
import { useHighContrastMode } from "../utils/high-contrast";
import { getSpacingVar } from "../utils/spacing-scale";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "surface" | "classic" | "ghost" | "glass";
  size?: SemanticSize;
  radius?: "none" | "small" | "medium" | "large" | "full";
  highContrast?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardActionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardContext = React.createContext<{ titleId?: string }>({});

export default function Card({
  children,
  className = "",
  variant = "surface",
  size = "sm",
  radius,
  highContrast: propHighContrast,
  style,
  ...props
}: CardProps) {
  const titleId = React.useId();
  const reducedMotion = useReducedMotion();
  const systemHighContrast = useHighContrastMode();
  const highContrast = propHighContrast ?? systemHighContrast;
  const sizeClassName = getSizeClassName(size);

  const hasTitle =
    React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === CardHeader,
    ) ||
    React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === CardTitle,
    );

  // Use spacing utilities
  const cardPadding = getSpacingVar(
    size === "xs" ? 2 : size === "sm" ? 3 : size === "md" ? 4 : size === "lg" ? 5 : 6,
  );

  const combinedClassName = [
    "az-Card",
    `az-variant-${variant}`,
    sizeClassName,
    highContrast ? "az-high-contrast" : "",
    reducedMotion ? "az-reduced-motion" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    ...resolveRadiusFactor(radius),
    padding: cardPadding,
  } as React.CSSProperties;

  return (
    <CardContext.Provider value={{ titleId }}>
      <div
        className={combinedClassName}
        style={customStyle}
        role="region"
        aria-labelledby={hasTitle ? titleId : undefined}
        {...props}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}

// Card Sub-components
export function CardHeader({ children, className = "", ...props }: CardHeaderProps) {
  return (
    <div className={`card-header ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "", ...props }: CardTitleProps) {
  const { titleId } = React.useContext(CardContext);
  return (
    <h3 id={titleId} className={`card-title ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = "", ...props }: CardDescriptionProps) {
  return (
    <p className={`card-description ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = "", ...props }: CardContentProps) {
  return (
    <div className={`card-content ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "", ...props }: CardFooterProps) {
  return (
    <div className={`card-footer ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardAction({ children, className = "", ...props }: CardActionProps) {
  return (
    <div className={`card-action ${className}`} {...props}>
      {children}
    </div>
  );
}
