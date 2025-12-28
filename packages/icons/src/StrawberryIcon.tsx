import React from "react";

interface StrawberryIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const StrawberryIcon: React.FC<StrawberryIconProps> = ({ size = 20, className, style }) => {
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
        d="m17 7l3.5-3.5M17 2v5h5M2.1 17.1a4 4 0 0 0 4.8 4.8l9-2.1a6.32 6.32 0 0 0 2.9-10.9L15 5.2A6.5 6.5 0 0 0 4.1 8.3Zm6.4-7.6h.01m3.99-1h.01m-5.01 5h.01m3.99-1h.01m3.99-1h.01m-9.01 6h.01m3.99-1h.01m3.99-1h.01"
      />
    </svg>
  );
};

export default StrawberryIcon;
