import React from "react";

interface TerminalIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TerminalIcon: React.FC<TerminalIconProps> = ({ size = 20, className, style }) => {
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
        d="m11 12l-7.071 7.071l-1.414-1.414L8.172 12L2.515 6.343L3.929 4.93zm0 7h10v2H11z"
      />
    </svg>
  );
};

export default TerminalIcon;
