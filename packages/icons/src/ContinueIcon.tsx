import React from "react";

interface ContinueIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ContinueIcon: React.FC<ContinueIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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
        d="M10 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.501-.865l19 11a1 1 0 0 1 0 1.73l-19 11A1 1 0 0 1 10 28m1-21.266v18.532L27 16zM4 4h2v24H4z"
      />
    </svg>
  );
};

export default ContinueIcon;
