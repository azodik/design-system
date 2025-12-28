import React from "react";

interface SkipForwardCircleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SkipForwardCircleIcon: React.FC<SkipForwardCircleIconProps> = ({
  size = 20,
  className,
  style,
}) => {
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
      <polygon points="5 4 15 12 5 20 5 4" />
      <line x1="19" y1="5" x2="19" y2="19" />
      <polygon points="16 12 10 8 10 16 16 12" />
      <line x1="16" x2="16" y1="8" y2="16" />
    </svg>
  );
};

export default SkipForwardCircleIcon;
