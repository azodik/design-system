import React from "react";

interface ReadIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReadIcon: React.FC<ReadIconProps> = ({ size = 20, className, style }) => {
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
        d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM12 5v14h8V5zm1 2h6v2h-6zm0 3h6v2h-6z"
      />
    </svg>
  );
};

export default ReadIcon;
