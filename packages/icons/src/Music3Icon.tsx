import React from "react";

interface Music3IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Music3Icon: React.FC<Music3IconProps> = ({ size = 20, className, style }) => {
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
      <circle cx="12" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
};

export default Music3Icon;
