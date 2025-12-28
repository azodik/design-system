import React from "react";

interface MeetingIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MeetingIcon: React.FC<MeetingIconProps> = ({ size = 20, className, style }) => {
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
        d="M3 21v-2h2V3h10v1h4v15h2v2h-4V6h-2v15zm8-8q.425 0 .713-.288T12 12t-.288-.712T11 11t-.712.288T10 12t.288.713T11 13"
      />
    </svg>
  );
};

export default MeetingIcon;
