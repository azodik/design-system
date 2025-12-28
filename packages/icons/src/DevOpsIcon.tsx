import React from "react";

interface DevOpsIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DevOpsIcon: React.FC<DevOpsIconProps> = ({ size = 20, className, style }) => {
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
        d="m22 18l-5 4l-8-3v3l-4.19-5.75l12.91 1.05V6.34L22 5.65zM4.81 16.25V8.96l12.91-2.62L10.6 2v2.84L3.97 6.76L2 9.38v5.69z"
      />
    </svg>
  );
};

export default DevOpsIcon;
