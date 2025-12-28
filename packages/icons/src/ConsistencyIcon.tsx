import React from "react";

interface ConsistencyIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ConsistencyIcon: React.FC<ConsistencyIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
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
        fillRule="evenodd"
        d="m234.667 34.347l192 110.851V312.85l33.85 22.567l-11.833 17.75l-71.111 106.667l-14.435 21.652l-18.4-18.4l-71.974-71.975l30.17-30.17l53.568 53.566l56.681-85.007l11.834-17.75l1.65 1.099v-35.515L384 277.333v-85.331l-128 73.9v199.533l-21.333 12.317l-192-110.851V145.198zM85.333 192.001v150.266l128 73.9V265.902zM234.667 83.614L108.8 156.284l125.867 72.669l125.867-72.67z"
      />
    </svg>
  );
};

export default ConsistencyIcon;
