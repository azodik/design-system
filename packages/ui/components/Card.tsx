import React from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "outlined" | "shadow";
  width?: Size | string | number;
  height?: Size | string | number;
  padding?: Size | string | number;
  rounded?: Size | string | number;
  backgroundColor?: string;
  borderColor?: string;
  shadow?: boolean;
  hoverEffect?: boolean;
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

const sizeMap = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
};

export default function Card({
  children,
  className = "",
  variant = "default",
  width,
  height,
  padding = "md",
  rounded = "lg",
  backgroundColor,
  borderColor,
  shadow = true,
  hoverEffect = false,
  ...props
}: CardProps) {
  const variantClasses = {
    default: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    outlined: "bg-transparent border border-gray-300 dark:border-gray-600",
    shadow: "bg-white dark:bg-gray-800 border border-transparent",
  };

  const resolveSize = (value?: Size | string | number) => {
    if (typeof value === "string" && sizeMap[value as Size]) return sizeMap[value as Size];
    if (typeof value === "number") return `${value}px`;
    return value; // assume custom string like "2rem"
  };

  const style: React.CSSProperties = {
    width: resolveSize(width),
    height: resolveSize(height),
    padding: resolveSize(padding),
    borderRadius: resolveSize(rounded),
    backgroundColor,
    borderColor,
    boxShadow: shadow
      ? "0 4px 6px rgba(0,0,0,0.1)" // light mode default
      : undefined,
    // Mobile responsive
    minWidth: '280px',
    maxWidth: '100%',
  };

  const combinedClassName = [
    "transition-all",
    variantClasses[variant],
    shadow && "shadow-light dark:shadow-dark",
    hoverEffect && "hover:shadow-lg dark:hover:shadow-xl",
    className
  ].filter(Boolean).join(" ");

  return (
    <div
      className={combinedClassName}
      style={style}
      {...props}
    >
      {children}
    </div>
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
  return (
    <h3 className={`card-title ${className}`} {...props}>
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