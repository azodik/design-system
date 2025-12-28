import React from "react";

interface MergeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MergeIcon: React.FC<MergeIconProps> = ({ size = 20, className, style }) => {
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
        d="m8 17l4-4h3.2c.4 1.2 1.5 2 2.8 2c1.7 0 3-1.3 3-3s-1.3-3-3-3c-1.3 0-2.4.8-2.8 2H12L8 7V3H3v5h3l4.2 4L6 16H3v5h5z"
      />
    </svg>
  );
};

export default MergeIcon;
