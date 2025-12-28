import React from "react";

interface LinesIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LinesIcon: React.FC<LinesIconProps> = ({ size = 20, className, style }) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2 10v3m4-7v11m4-14v18m4-13v7m4-10v13m4-8v3"
      />
    </svg>
  );
};

export default LinesIcon;
