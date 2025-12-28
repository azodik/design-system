import React from "react";

interface CompactIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CompactIcon: React.FC<CompactIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M3 19h6v-7H3zm7 0h12v-7H10zM3 5v6h19V5z" />
    </svg>
  );
};

export default CompactIcon;
