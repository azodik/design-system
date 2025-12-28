import React from "react";

interface YenSignIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const YenSignIcon: React.FC<YenSignIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 2v20" />
      <path d="M8 5h8M8 9h8M8 13h8" />
      <path d="M6 7l6 6M18 7l-6 6" />
    </svg>
  );
};

export default YenSignIcon;
