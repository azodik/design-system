import React from "react";
import "../../core/components/scroll-area.css";

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
      scrollbarWidth: 'thin' as const,
      scrollbarColor: '#94a3b8 transparent',
      '--scrollbar-width': '4px',
      '--scrollbar-height': '4px',
      '--scrollbar-thumb-bg': '#94a3b8',
      '--scrollbar-thumb-radius': '2px'
    },
    md: {
      scrollbarWidth: 'auto' as const,
      scrollbarColor: '#64748b transparent',
      '--scrollbar-width': '12px',
      '--scrollbar-height': '12px',
      '--scrollbar-thumb-bg': '#64748b',
      '--scrollbar-thumb-radius': '6px'
    }
  };

  return (
    <div
      className={`scroll-area scroll-area-${scrollbarSize} scroll-area-${orientation} ${className}`}
      style={{
        border: scrollbarSize === 'sm' ? '1px solid #e2e8f0' : 
                '2px solid #cbd5e1',
        borderRadius: '6px',
        minWidth: 0,
        maxWidth: '100%'
      }}
    >
      <div 
        className="scroll-area-content"
        style={scrollbarStyles[scrollbarSize]}
      >
        {children}
      </div>
    </div>
  );
};
