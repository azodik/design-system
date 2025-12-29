
import React from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = "div", className, ...props }, ref) => {
    return <Component ref={ref} className={className} {...props} />;
  }
);

Box.displayName = "Box";

export { Box };
