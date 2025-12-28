import React from "react";

interface SMTIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SMTIcon: React.FC<SMTIconProps> = ({ size = 20, className, style }) => {
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
        fillRule="evenodd"
        d="M12.065 4L5.62 8.955L3 16.935l6.465-4.45L12.045 20l2.555-7.515l6.4 4.45l-2.475-7.98zm-.46 1.155l-5.466 4.22l-1.91 5.945l5.07-3.53zm.874 0l5.47 4.22h-.005l1.91 5.945l-5.07-3.53zM12.084 6l-2.1 5.5h4.035zm0 12l-2.1-5.5h4.035z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SMTIcon;
