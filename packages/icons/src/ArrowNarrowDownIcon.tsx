import React from "react";

interface ArrowNarrowDownIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowNarrowDownIcon: React.FC<ArrowNarrowDownIconProps> = ({
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
      <path d="M12 5v14" />
      <path d="m12 19 4-4" />
      <path d="m12 19-4-4" />
    </svg>
  );
};

export default ArrowNarrowDownIcon;
