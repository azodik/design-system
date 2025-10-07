import React from "react";

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({
  children,
  content,
  position = "top",
  className = "",
  ...props
}: TooltipProps) {
  return (
    <div className={`tooltip ${className}`} {...props}>
      {children}
      <div className={`tooltip-content tooltip-${position}`}>{content}</div>
    </div>
  );
}
