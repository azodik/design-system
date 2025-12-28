import React from "react";

interface ServerlessIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ServerlessIcon: React.FC<ServerlessIconProps> = ({ size = 20, className, style }) => {
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
        d="M11.787 6H5v3h5.695zm-1.82 5H5v3h3.875zm1.037 3l1.092-3H20v3zm-2.856 2H5v3h2.056zm1.036 3l1.092-3H20v3zm3.64-10l1.092-3H20v3z"
      />
    </svg>
  );
};

export default ServerlessIcon;
