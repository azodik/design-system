import React from "react";

interface ArrowLeftCircleIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowLeftCircleIcon: React.FC<ArrowLeftCircleIconProps> = ({
  size = 20,
  className,
  style,
}) => {
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
        d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 9V8l-4 4l4 4v-3h4v-2z"
      />
    </svg>
  );
};

export default ArrowLeftCircleIcon;
