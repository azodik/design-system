import React from "react";

interface TournamentIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const TournamentIcon: React.FC<TournamentIconProps> = ({ size = 20, className, style }) => {
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
        d="M2 2v2h5v4H2v2h5c1.11 0 2-.89 2-2V7h5v10H9v-1c0-1.11-.89-2-2-2H2v2h5v4H2v2h5c1.11 0 2-.89 2-2v-1h5c1.11 0 2-.89 2-2v-4h6v-2h-6V7c0-1.11-.89-2-2-2H9V4c0-1.11-.89-2-2-2z"
      />
    </svg>
  );
};

export default TournamentIcon;
