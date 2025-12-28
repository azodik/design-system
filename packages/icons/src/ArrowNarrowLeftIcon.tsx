import React from "react";

interface ArrowNarrowLeftIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowNarrowLeftIcon: React.FC<ArrowNarrowLeftIconProps> = ({
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
      <path d="m5 12 4 4" />
      <path d="m5 12 4-4" />
    </svg>
  );
};

export default ArrowNarrowLeftIcon;
