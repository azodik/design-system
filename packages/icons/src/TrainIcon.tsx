import React from "react";

interface TrainIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TrainIcon: React.FC<TrainIconProps> = ({ size = 20, className, style }) => {
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
        d="m17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM5 7v4h14V7zm7 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
      />
    </svg>
  );
};

export default TrainIcon;
