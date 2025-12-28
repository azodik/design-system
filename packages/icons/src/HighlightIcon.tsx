import React from "react";

interface HighlightIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const HighlightIcon: React.FC<HighlightIconProps> = ({ size = 20, className, style }) => {
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
        d="M5.65 8L3.5 5.9l1.4-1.45L7.05 6.6zM11 5V2h2v3zm7.4 3l-1.45-1.4l2.15-2.1l1.4 1.4zM9 22v-5l-3-3V9h12v5l-3 3v5z"
      />
    </svg>
  );
};

export default HighlightIcon;
