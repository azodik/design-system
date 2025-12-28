import React from "react";

interface FileMusicIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FileMusicIcon: React.FC<FileMusicIconProps> = ({ size = 20, className, style }) => {
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
        d="m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-5 10.05a2.5 2.5 0 1 0 2 2.45V10h3V8h-5z"
      />
    </svg>
  );
};

export default FileMusicIcon;
