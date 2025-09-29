import React from 'react';

interface ChevronRightIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({ 
  size = 16, 
  className,
  style 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      style={{ 
        color: "currentColor",
        ...style
      }}
    >
      <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"></path>
    </svg>
  );
};

export default ChevronRightIcon;
