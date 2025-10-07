import React from "react";

interface TickIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const TickIcon: React.FC<TickIconProps> = ({
  className = "",
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      width={size}
      height={size}
    >
      <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
    </svg>
  );
};

export default TickIcon;
