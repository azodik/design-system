import React from "react";

export interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  scrollbarSize?: "sm" | "md";
  orientation?: "vertical" | "horizontal";
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  className = "",
  scrollbarSize = "md",
  orientation = "vertical",
}) => {
  const scrollbarStyles = {
    sm: {
      scrollbarWidth: "thin" as const,
      scrollbarColor: "var(--color-border) transparent",
      "--scrollbar-width": "4px",
      "--scrollbar-height": "4px",
      "--scrollbar-thumb-bg": "var(--color-border)",
      "--scrollbar-thumb-radius": "2px",
    },
    md: {
      scrollbarWidth: "auto" as const,
      scrollbarColor: "var(--color-border) transparent",
      "--scrollbar-width": "12px",
      "--scrollbar-height": "12px",
      "--scrollbar-thumb-bg": "var(--color-border)",
      "--scrollbar-thumb-radius": "6px",
    },
  };

  return (
    <div
      className={`scroll-area scroll-area-${scrollbarSize} scroll-area-${orientation} ${className}`}
      style={{
        border: scrollbarSize === "sm" ? "1px solid var(--color-border)" : "2px solid var(--color-border)",
        borderRadius: "6px",
        minWidth: 0,
        maxWidth: "100%",
        background: "var(--color-background)",
      }}
    >
      <div className="scroll-area-content" style={scrollbarStyles[scrollbarSize]}>
        {children}
      </div>
    </div>
  );
};
