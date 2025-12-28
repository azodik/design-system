import React from "react";

interface OctagonIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const OctagonIcon: React.FC<OctagonIconProps> = ({ size = 20, className, style }) => {
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
        d="m15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565z"
      />
    </svg>
  );
};

export default OctagonIcon;
