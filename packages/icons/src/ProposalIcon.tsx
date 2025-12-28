import React from "react";

interface ProposalIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ProposalIcon: React.FC<ProposalIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <path fill="currentColor" d="M5 6H3v2H0V7h2V2h5v1H4v2h2v3H5M3 2L2 1l1-1l1 1" />
    </svg>
  );
};

export default ProposalIcon;
