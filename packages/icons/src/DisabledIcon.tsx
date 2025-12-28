import React from "react";

interface DisabledIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DisabledIcon: React.FC<DisabledIconProps> = ({ size = 20, className, style }) => {
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
        d="M16.45 13.6L8 5.15V5l11 7zm3.3 9L13 15.8L8 19v-8.2L1.4 4.2l1.4-1.4l18.4 18.4z"
      />
    </svg>
  );
};

export default DisabledIcon;
