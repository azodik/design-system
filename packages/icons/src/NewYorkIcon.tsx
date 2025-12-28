import React from "react";

interface NewYorkIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const NewYorkIcon: React.FC<NewYorkIconProps> = ({ size = 20, className, style }) => {
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
        d="M19 9V7a2 2 0 0 0-2-2h-1V2h-2v3h-1a2 2 0 0 0-2 2v2a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v8h3v-2h2v2h4v-2h2v2h2v-2h2v2h3V11a2 2 0 0 0-2-2M8 18H6v-2h2zm6 0h-2v-2h2zm0-4h-2v-2h2zm-1-5V7h4v2zm5 9h-2v-2h2zm0-4h-2v-2h2z"
      />
    </svg>
  );
};

export default NewYorkIcon;
