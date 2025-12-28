import React from "react";

interface NextIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const NextIcon: React.FC<NextIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor">
        <path d="m13 12l-5.25 5.25V6.75z" />
        <path strokeLinecap="square" strokeWidth="2" d="M16.5 18V6M7.75 17.25L13 12L7.75 6.75z" />
      </g>
    </svg>
  );
};

export default NextIcon;
