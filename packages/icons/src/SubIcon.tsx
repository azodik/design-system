import React from "react";

interface SubIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SubIcon: React.FC<SubIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M4 19v-2h10v2zm0-4v-2h16v2zm0-4V9h16v2zm0-4V5h16v2z" />
    </svg>
  );
};

export default SubIcon;
