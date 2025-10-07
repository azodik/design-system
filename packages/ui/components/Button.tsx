import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "link" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  color?: string;
  disabled?: boolean;
  width?: string | number;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  color,
  className,
  style,
  disabled,
  width,
  ...props
}: ButtonProps) {
  const customStyle = {
    ...(color ? {
      backgroundColor: variant === "outline" || variant === "link" || variant === "ghost" ? "transparent" : color,
      borderColor: variant === "outline" ? color : undefined,
      color: variant === "outline" || variant === "link" ? color : "white",
    } : {}),
    ...(width ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    ...style
  };

  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${className || ""}`} 
      style={customStyle}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
