import React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  status?: "online" | "away" | "offline" | "busy";
  initials?: string;
}

export default function Avatar({
  src,
  alt,
  children,
  size = "md",
  status,
  initials,
  className = "",
  ...props
}: AvatarProps) {
  const getInitials = () => {
    if (initials) return initials;
    if (typeof children === "string") {
      return children
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    return "";
  };

  const avatarClasses = [
    "avatar",
    `avatar-${size}`,
    status && "avatar-status",
    status && `avatar-${status}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={avatarClasses} {...props}>
      {src ? (
        <img src={src} alt={alt || "Avatar"} />
      ) : (
        <div className="avatar-initials">{getInitials()}</div>
      )}
    </div>
  );
}

// Avatar Group Component
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  max?: number;
  moreLabel?: string;
}

export function AvatarGroup({
  children,
  max = 3,
  moreLabel = "+{count}",
  className = "",
  ...props
}: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children);
  const visibleChildren = childrenArray.slice(0, max);
  const remainingCount = childrenArray.length - max;

  return (
    <div className={`avatar-group ${className}`} {...props}>
      {visibleChildren}
      {remainingCount > 0 && (
        <div className="avatar-more">{moreLabel.replace("{count}", remainingCount.toString())}</div>
      )}
    </div>
  );
}
