import React from "react";

interface ExpandIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ExpandIcon: React.FC<ExpandIconProps> = ({ size = 20, className, style }) => {
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
        d="M4 22v-2h16v2zm8-3l-4-4l1.4-1.4l1.6 1.55v-6.3L9.4 10.4L8 9l4-4l4 4l-1.4 1.4L13 8.85v6.3l1.6-1.55L16 15zM4 4V2h16v2z"
      />
    </svg>
  );
};

export default ExpandIcon;
