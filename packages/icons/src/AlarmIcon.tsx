import React from "react";

interface AlarmIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AlarmIcon: React.FC<AlarmIconProps> = ({ size = 20, className, style }) => {
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
        d="M12 22a9 9 0 1 1 0-18a9 9 0 0 1 0 18m1-9V8h-2v7h5v-2zM1.747 6.283l3.536-3.536l1.414 1.414L3.16 7.697zm16.97-3.536l3.536 3.536l-1.414 1.414l-3.536-3.536z"
      />
    </svg>
  );
};

export default AlarmIcon;
