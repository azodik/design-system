import React from "react";

interface EventIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const EventIcon: React.FC<EventIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
};

export default EventIcon;
