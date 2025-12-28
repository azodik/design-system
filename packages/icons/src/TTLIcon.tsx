import React from "react";

interface TTLIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TTLIcon: React.FC<TTLIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.925 13.575L4.5 24l10.425 10.425m18.15-20.85L43.5 24L33.075 34.425M15.492 22.298h3.403v3.404h-3.403zm13.613 0h3.403v3.404h-3.403zm-6.807 0h3.404v3.404h-3.404z"
      />
    </svg>
  );
};

export default TTLIcon;
