import React from "react";

interface CornerDownRightIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CornerDownRightIcon: React.FC<CornerDownRightIconProps> = ({
  size = 20,
  className,
  style,
}) => {
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
      <path fill="currentColor" d="M5 14V5h2v7h7.586V6.586L21 13l-6.414 6.414V14z" />
    </svg>
  );
};

export default CornerDownRightIcon;
