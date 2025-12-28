import React from "react";

interface ShareIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ShareIcon: React.FC<ShareIconProps> = ({ size = 20, className, style }) => {
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
        d="m13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.5 3.5 0 0 1 0 1.457l5.11 2.788a3.5 3.5 0 1 1-.958 1.755"
      />
    </svg>
  );
};

export default ShareIcon;
