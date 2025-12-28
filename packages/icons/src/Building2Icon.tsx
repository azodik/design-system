import React from "react";

interface Building2IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Building2Icon: React.FC<Building2IconProps> = ({ size = 20, className, style }) => {
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
        d="M277.334 64v341.333h128V192H320v-42.667h128v256h21.334V448H64v-.001L42.667 448v-42.667H64V64zm-42.667 42.667h-128v298.666h42.667v-64H192v64h42.667zm128 213.333v42.667H320V320zM192 234.667v42.666h-42.666v-42.666zm170.667 0v42.666H320v-42.666zM192 149.333V192h-42.666v-42.667z"
      />
    </svg>
  );
};

export default Building2Icon;
