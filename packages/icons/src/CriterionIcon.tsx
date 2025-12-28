import React from "react";

interface CriterionIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CriterionIcon: React.FC<CriterionIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M29.934 44.767c-11.47 3.074-23.26-3.733-26.332-15.202C.528 18.095 7.335 6.305 18.804 3.233c11.47-3.074 23.26 3.733 26.332 15.202"
      />
    </svg>
  );
};

export default CriterionIcon;
