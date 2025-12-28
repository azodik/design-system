import React from "react";

interface ConfirmIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ConfirmIcon: React.FC<ConfirmIconProps> = ({ size = 20, className, style }) => {
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
        strokeDasharray="24"
        strokeDashoffset="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 11l6 6l10 -10"
      >
        <animate fill="currentColor" attributeName="stroke-dashoffset" dur="0.4s" values="24;0" />
      </path>
    </svg>
  );
};

export default ConfirmIcon;
