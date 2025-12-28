import React from "react";

interface BTreeIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BTreeIcon: React.FC<BTreeIconProps> = ({ size = 20, className, style }) => {
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
      <path d="M12 2v6M6 8h12M6 8v6M12 14v6M6 14h12" />
    </svg>
  );
};

export default BTreeIcon;
