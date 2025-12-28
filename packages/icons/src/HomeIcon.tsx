import React from "react";

interface HomeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const HomeIcon: React.FC<HomeIconProps> = ({ size = 20, className, style }) => {
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
        d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47746C11.7471 2.19663 12.2529 2.19663 12.6139 2.47746L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM11 13V19H13V13H11Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HomeIcon;
