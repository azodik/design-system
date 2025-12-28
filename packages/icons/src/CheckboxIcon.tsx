import React from "react";

interface CheckboxIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({ size = 20, className, style }) => {
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
        d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7.003 13l7.07-7.071l-1.413-1.414l-5.657 5.657l-2.829-2.829l-1.414 1.414z"
      />
    </svg>
  );
};

export default CheckboxIcon;
