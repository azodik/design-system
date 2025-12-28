import React from "react";

interface CloudyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CloudyIcon: React.FC<CloudyIconProps> = ({ size = 20, className, style }) => {
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
        d="M9 20.986a8.5 8.5 0 1 1 7.715-12.983A6.5 6.5 0 0 1 17 20.981V21H9z"
      />
    </svg>
  );
};

export default CloudyIcon;
