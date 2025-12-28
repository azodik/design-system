import React from "react";

interface BlackIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BlackIcon: React.FC<BlackIconProps> = ({ size = 20, className, style }) => {
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
        d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 2.71 6H9v-6h8l2.15 3.59c.54-1.09.85-2.3.85-3.59a8 8 0 0 0-8-8"
      />
    </svg>
  );
};

export default BlackIcon;
