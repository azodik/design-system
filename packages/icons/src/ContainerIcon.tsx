import React from "react";

interface ContainerIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ContainerIcon: React.FC<ContainerIconProps> = ({ size = 20, className, style }) => {
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
        d="M20 3a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V20a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V16a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m-5-4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM4 3a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V20a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V16a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"
      />
    </svg>
  );
};

export default ContainerIcon;
