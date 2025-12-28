import React from "react";

interface VerticalIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VerticalIcon: React.FC<VerticalIconProps> = ({ size = 20, className, style }) => {
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
        d="M12 2.5L8 7h8zm0 7.5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-4 7l4 4.5l4-4.5z"
      />
    </svg>
  );
};

export default VerticalIcon;
