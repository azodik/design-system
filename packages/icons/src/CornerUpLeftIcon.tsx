import React from "react";

interface CornerUpLeftIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CornerUpLeftIcon: React.FC<CornerUpLeftIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M19 10v9h-2v-7H9.414v5.414L3 11l6.414-6.414V10z" />
    </svg>
  );
};

export default CornerUpLeftIcon;
