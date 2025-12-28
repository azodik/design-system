import React from "react";

interface HeartHandshakeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const HeartHandshakeIcon: React.FC<HeartHandshakeIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-2.07a2.12 2.12 0 0 1 2.89 0 2.13 2.13 0 0 1 0 3.05L9.2 19.07a2.17 2.17 0 0 1-3.08 0 2.17 2.17 0 0 1 0-3.08l4.25-4.26" />
    </svg>
  );
};

export default HeartHandshakeIcon;
