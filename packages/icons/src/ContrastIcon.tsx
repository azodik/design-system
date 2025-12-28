import React from "react";

interface ContrastIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ContrastIcon: React.FC<ContrastIconProps> = ({ size = 20, className, style }) => {
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
        d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2v-16a8 8 0 0 0 0 16"
      />
    </svg>
  );
};

export default ContrastIcon;
