import React from "react";

interface ReverseIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReverseIcon: React.FC<ReverseIconProps> = ({ size = 20, className, style }) => {
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
        d="m4.624 12.416l10.599 7.066a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L4.624 11.584a.5.5 0 0 0 0 .832"
      />
    </svg>
  );
};

export default ReverseIcon;
