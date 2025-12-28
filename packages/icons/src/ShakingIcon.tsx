import React from "react";

interface ShakingIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ShakingIcon: React.FC<ShakingIconProps> = ({ size = 20, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{
        color: "currentColor",
        ...style,
      }}
    >
      <circle cx="36" cy="36" r="22" fill="currentColor" />
      <ellipse
        cx="36"
        cy="36"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        rx="22.087"
        ry="22"
      />
      <circle cx="42" cy="45" r="3" />
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.5 30.5S5 55 30 63M6 44s2 11 12.017 16.958M62.449 43.47s5.405-24.317-19.282-33.238m23.28 18.839s-1.59-11.066-11.38-17.392"
      />
      <ellipse
        cx="26.485"
        cy="36.052"
        rx="2.308"
        ry="4.155"
        transform="rotate(-31.607 26.484 36.052)"
      />
      <ellipse
        cx="37.769"
        cy="27.323"
        rx="2.308"
        ry="4.155"
        transform="rotate(-39.583 37.77 27.323)"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M40.514 21.662s2.977 1.188 3.711 4.667m-23.542 9.914s.176 3.2 3.238 5.007"
      />
    </svg>
  );
};

export default ShakingIcon;
