import React from "react";

interface PaintbrushIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PaintbrushIcon: React.FC<PaintbrushIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path d="m14.5 2-6.5 6.5" />
      <path d="M18.5 6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5Z" />
      <path d="M2 12c6 0 10-2.5 10-7 0-2.5-2-4-4-4S4 2.5 4 5c0 4.5 4 7 10 7" />
      <path d="M2 19h20" />
    </svg>
  );
};

export default PaintbrushIcon;
