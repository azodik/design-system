import React from "react";

interface Wind2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Wind2Icon: React.FC<Wind2IconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 2v8" />
      <path d="M2 12h20" />
      <path d="M12 14v8" />
    </svg>
  );
};

export default Wind2Icon;
