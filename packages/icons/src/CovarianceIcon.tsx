import React from "react";

interface CovarianceIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CovarianceIcon: React.FC<CovarianceIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
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
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 152H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v76.69l34.34-34.35a8 8 0 0 1 11.32 0L128 132.69L172.69 88H144a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8v48a8 8 0 0 1-16 0V99.31l-50.34 50.35a8 8 0 0 1-11.32 0L104 131.31l-40 40V176h136a8 8 0 0 1 0 16"
      />
    </svg>
  );
};

export default CovarianceIcon;
