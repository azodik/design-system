import React from "react";

interface BreakpointIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BreakpointIcon: React.FC<BreakpointIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path
        fill="currentColor"
        d="m12.854 7.646l-4.5-4.5a.5.5 0 0 0-.707 0l-4.501 4.5a.5.5 0 0 0 0 .707l4.5 4.5a.5.5 0 0 0 .708 0l4.5-4.5a.5.5 0 0 0 0-.707"
      />
    </svg>
  );
};

export default BreakpointIcon;
