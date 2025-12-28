import React from "react";

interface ILSIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ILSIcon: React.FC<ILSIconProps> = ({ size = 20, className, style }) => {
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
        d="M22 16a5 5 0 0 1-5 5H8V9h2v10h7a3 3 0 0 0 3-3V3h2zm-6-8v7h-2V8a3 3 0 0 0-3-3H4v16H2V3h9a5 5 0 0 1 5 5"
      />
    </svg>
  );
};

export default ILSIcon;
