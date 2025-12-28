import React from "react";

interface CornerUpRightIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CornerUpRightIcon: React.FC<CornerUpRightIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M5 10v9h2v-7h7.586v5.414L21 11l-6.414-6.414V10z" />
    </svg>
  );
};

export default CornerUpRightIcon;
