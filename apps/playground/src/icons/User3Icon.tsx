import React from 'react';

interface User3IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const User3Icon: React.FC<User3IconProps> = ({ 
  size = 20, 
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
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
    </svg>
  );
};

export default User3Icon;
