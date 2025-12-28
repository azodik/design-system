import React from "react";

interface MusicIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MusicIcon: React.FC<MusicIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465" />
    </svg>
  );
};

export default MusicIcon;
