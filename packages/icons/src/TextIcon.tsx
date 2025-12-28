import React from "react";

interface TextIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TextIcon: React.FC<TextIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M13 6v15h-2V6H5V4h14v2z" />
    </svg>
  );
};

export default TextIcon;
