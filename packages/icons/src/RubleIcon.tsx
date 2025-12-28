import React from "react";

interface RubleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RubleIcon: React.FC<RubleIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path d="M12 2v20" />
      <path d="M9 5h6M9 9h6" />
      <path d="M9 13h4" />
    </svg>
  );
};

export default RubleIcon;
