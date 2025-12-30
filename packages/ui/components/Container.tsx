import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "1" | "2" | "3" | "4";
  as?: React.ElementType;
}

export function Container({
  children,
  className = "",
  size = "4",
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component className={`az-Container az-size-${size} ${className}`} {...props}>
      {children}
    </Component>
  );
}
