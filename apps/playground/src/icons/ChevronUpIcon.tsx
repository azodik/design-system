import React from 'react';

interface ChevronUpIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ChevronUpIcon: React.FC<ChevronUpIconProps> = ({ 
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
      style={style}
    >
      <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"></path>
    </svg>
  );
};

export default ChevronUpIcon;
