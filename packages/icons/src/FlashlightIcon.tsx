import React from "react";

interface FlashlightIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FlashlightIcon: React.FC<FlashlightIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M13 10h7l-9 13v-9H4l9-13z" />
    </svg>
  );
};

export default FlashlightIcon;
