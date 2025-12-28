import React from "react";

interface ConstraintIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ConstraintIcon: React.FC<ConstraintIconProps> = ({ size = 20, className, style }) => {
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
        strokeLinecap="square"
        strokeWidth="2"
        d="M9 17H6.196C3.32 16.972 1 14.744 1 12s2.321-4.972 5.196-5H9m7 5H8m7-5h2.75C20.65 7 23 9.239 23 12s-2.35 5-5.25 5H15"
      />
    </svg>
  );
};

export default ConstraintIcon;
