import React from "react";

interface LeftLongArrowIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const LeftLongArrowIcon: React.FC<LeftLongArrowIconProps> = ({
  size = 16,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z" />
    </svg>
  );
};

export default LeftLongArrowIcon;
