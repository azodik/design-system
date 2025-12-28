import React from "react";

interface SleepIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SleepIcon: React.FC<SleepIconProps> = ({ size = 20, className, style }) => {
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
        d="M23 12h-6v-2l3.39-4H17V4h6v2l-3.38 4H23zm-8 4H9v-2l3.39-4H9V8h6v2l-3.38 4H15zm-8 4H1v-2l3.39-4H1v-2h6v2l-3.38 4H7z"
      />
    </svg>
  );
};

export default SleepIcon;
