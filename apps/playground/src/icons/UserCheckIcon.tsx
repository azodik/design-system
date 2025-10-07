import React from 'react';

interface UserCheckIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const UserCheckIcon: React.FC<UserCheckIconProps> = ({ 
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
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
};

export default UserCheckIcon;
