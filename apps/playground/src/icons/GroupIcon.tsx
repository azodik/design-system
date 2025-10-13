import React from "react";

interface GroupIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GroupIcon: React.FC<GroupIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 15.37V22h2v-6h2.5l2.5 7.5h2L8 16h2l2.5 7.5h2L14 16h2v6h2zM7.5 9.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S6 7.17 6 8s.67 1.5 1.5 1.5z"></path>
    </svg>
  );
};

export default GroupIcon;
