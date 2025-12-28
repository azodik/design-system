import React from "react";

interface CrossIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CrossIcon: React.FC<CrossIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M14 2h-4v6H4v4h6v10h4V12h6V8h-6z" />
    </svg>
  );
};

export default CrossIcon;
