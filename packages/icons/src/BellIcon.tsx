import React from "react";

interface BellIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BellIcon: React.FC<BellIconProps> = ({ size = 20, className, style }) => {
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
        d="M12 2C13.3807 2 14.5 3.11929 14.5 4.5V4.8C17.41 5.42 19.5 8.01 19.5 11V17H21.5V19H2.5V17H4.5V11C4.5 8.01 6.59 5.42 9.5 4.8V4.5C9.5 3.11929 10.6193 2 12 2ZM10 20H14C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BellIcon;
