import React from "react";

interface MuscleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MuscleIcon: React.FC<MuscleIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <g fill="currentColor">
        <path d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          strokeWidth="4"
          d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14m2.44 3.13L22 34"
        />
      </g>
    </svg>
  );
};

export default MuscleIcon;
