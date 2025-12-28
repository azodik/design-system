import React from "react";

interface SHA256IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SHA256Icon: React.FC<SHA256IconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
};

export default SHA256Icon;
