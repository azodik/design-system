import React from "react";

interface BoxesIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BoxesIcon: React.FC<BoxesIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
      <path d="M7 16.5l-4.99-2.7A2 2 0 0 1 1 12.06V8.63a2 2 0 0 1 .97-1.71l3-1.8a2 2 0 0 1 2.06 0L12 5.5l3-1.38a2 2 0 0 1 2.06 0l3 1.8a2 2 0 0 1 .97 1.71v3.43a2 2 0 0 1-.97 1.7L17 16.5" />
      <path d="M12 7.5v5" />
      <path d="m7 16.5 5 2.7 5-2.7" />
      <path d="M12 19v-5" />
      <path d="m7 16.5 5-2.7 5 2.7M17 11.5v-5" />
      <path d="M7 6.5l5 2.7 5-2.7" />
    </svg>
  );
};

export default BoxesIcon;
