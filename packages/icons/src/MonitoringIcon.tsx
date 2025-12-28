import React from "react";

interface MonitoringIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MonitoringIcon: React.FC<MonitoringIconProps> = ({ size = 20, className, style }) => {
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
        d="M3 21v-2l2-2v4zm4 0v-6l2-2v8zm4 0v-8l2 2.025V21zm4 0v-5.975l2-2V21zm4 0V11l2-2v12zM3 15.825V13l7-7l4 4l7-7v2.825l-7 7l-4-4z"
      />
    </svg>
  );
};

export default MonitoringIcon;
