import React from "react";

interface EPSIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const EPSIcon: React.FC<EPSIconProps> = ({ size = 20, className, style }) => {
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
        d="m15.05 7.78l1.1-1.6S14.91 5 12.77 5c-2.73 0-4.42 1.84-4.42 3.76s1.73 2.93 1.73 2.93S8 12.38 8 15c0 2.63 2.14 4 4.44 4c2.94 0 4.56-1.96 4.56-1.96l-1.4-1.54s-1.46 1.37-3.01 1.37c-1.93 0-2.38-1.18-2.38-1.95c0-1.05.33-2.27 3.62-2.27l-.01-1.88s-3.38.34-3.38-1.99c0-1.57 1.46-1.86 2.2-1.86c1.64 0 2.41.86 2.41.86"
      />
    </svg>
  );
};

export default EPSIcon;
