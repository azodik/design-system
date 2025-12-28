import React from "react";

interface ReplicaIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReplicaIcon: React.FC<ReplicaIconProps> = ({ size = 20, className, style }) => {
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
        d="M19 11h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m0 8h-6v-6h6ZM12 3H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3v-2H6V5h6v4h2V5a2 2 0 0 0-2-2"
      />
    </svg>
  );
};

export default ReplicaIcon;
