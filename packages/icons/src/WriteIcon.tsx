import React from "react";

interface WriteIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const WriteIcon: React.FC<WriteIconProps> = ({ size = 20, className, style }) => {
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
      <g fill="currentColor" strokeLinejoin="round" strokeWidth="4">
        <path d="M5.325 43.5h8.485l31.113-31.113l-8.486-8.485L5.325 35.015z" />
        <path strokeLinecap="round" d="m27.952 12.387l8.485 8.485" />
      </g>
    </svg>
  );
};

export default WriteIcon;
