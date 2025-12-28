import React from "react";

interface PortfolioIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PortfolioIcon: React.FC<PortfolioIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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
        d="M28 10h-6V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M12 6h8v4h-8ZM4 26V12h24v14Z"
      />
    </svg>
  );
};

export default PortfolioIcon;
