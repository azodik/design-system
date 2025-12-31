import React from "react";

import { SemanticSize, getSizeClassName } from "../utils/size-variant-mapping";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SemanticSize;
  as?: React.ElementType;
}

export function Container({
  children,
  className = "",
  size = "lg",
  as: Component = "div",
  ...props
}: ContainerProps) {
  const sizeClassName = getSizeClassName(size);
  return (
    <Component className={`az-Container ${sizeClassName} ${className}`} {...props}>
      {children}
    </Component>
  );
}
