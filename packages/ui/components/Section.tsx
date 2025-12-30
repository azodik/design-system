import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "1" | "2" | "3";
  as?: React.ElementType;
}

export function Section({
  children,
  className = "",
  size = "2",
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component className={`az-Section az-size-${size} ${className}`} {...props}>
      {children}
    </Component>
  );
}
