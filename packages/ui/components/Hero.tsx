import React, { forwardRef } from "react";
import { Box } from "./Box";
import { Container } from "./Container";
import type { SemanticSize } from "../utils/size-variant-mapping";

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "centered" | "split" | "subtle";
  size?: "small" | "medium" | "large" | "full";
  isGlass?: boolean;
  hasGradient?: boolean;
  containerSize?: SemanticSize;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(function Hero(
  {
    children,
    variant = "centered",
    size = "medium",
    isGlass = false,
    hasGradient = false,
    containerSize = "lg",
    className = "",
    ...props
  },
  ref,
) {
  const classNames = [
    "az-Hero",
    `az-${variant}`,
    `az-${size}`,
    isGlass ? "az-glass" : "",
    hasGradient ? "az-gradient" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Box className={classNames} ref={ref} {...props}>
      <Container size={containerSize} className="az-Hero-container">
        {children}
      </Container>
    </Box>
  );
});
Hero.displayName = "Hero";

const HeroTitle = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <Box as="h1" className={`az-Hero-title ${className}`} {...props}>
    {children}
  </Box>
);

const HeroDescription = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <Box as="p" className={`az-Hero-description ${className}`} {...props}>
    {children}
  </Box>
);

const HeroActions = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <Box className={`az-Hero-actions ${className}`} {...props}>
    {children}
  </Box>
);

// Sub-component assignments for dot notation
const HeroRoot = Hero as typeof Hero & {
  Title: typeof HeroTitle;
  Description: typeof HeroDescription;
  Actions: typeof HeroActions;
};

HeroRoot.Title = HeroTitle;
HeroRoot.Description = HeroDescription;
HeroRoot.Actions = HeroActions;

export { HeroRoot as Hero, HeroTitle, HeroDescription, HeroActions };

export default HeroRoot;
