import React from "react";

interface SubmitIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SubmitIcon: React.FC<SubmitIconProps> = ({ size = 20, className, style }) => {
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
        fillRule="evenodd"
        d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V7h-1V3H3v10h2.005v1H2.5a.5.5 0 0 1-.5-.5zm11.994 6.832l-4.52 4.519a.5.5 0 0 1-.706 0l-2.51-2.51l.706-.708l2.157 2.157l4.166-4.166z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SubmitIcon;
