import React from "react";

interface RecordIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const RecordIcon: React.FC<RecordIconProps> = ({ size = 20, className, style }) => {
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
      <path fill="currentColor" d="M19 12c0 3.86-3.14 7-7 7s-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7" />
    </svg>
  );
};

export default RecordIcon;
