import React from "react";

interface ArrowNarrowRightIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowNarrowRightIcon: React.FC<ArrowNarrowRightIconProps> = ({
  size = 20,
  className,
  style,
}) => {
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
      <path d="M5 12h14" />
      <path d="m15 16 4-4" />
      <path d="m15 8 4 4" />
    </svg>
  );
};

export default ArrowNarrowRightIcon;
