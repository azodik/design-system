import React from "react";

interface XCircleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const XCircleIcon: React.FC<XCircleIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
};

export default XCircleIcon;
