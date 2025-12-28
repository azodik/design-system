import React from "react";

interface MockIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MockIcon: React.FC<MockIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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
        d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"
      />
      <path
        fill="currentColor"
        d="M16 24.667V28h3.333l9.83-9.83l-3.333-3.333Zm15.74-9.074a.885.885 0 0 0 .001-1.252v-.001l-2.08-2.08a.885.885 0 0 0-1.253-.001l-1.627 1.627l3.333 3.333Z"
      />
    </svg>
  );
};

export default MockIcon;
