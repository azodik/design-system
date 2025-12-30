import React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  size?: "1" | "2" | "3" | "4" | "5" | "6";
  status?: "online" | "away" | "offline" | "busy";
  initials?: string;
}

export default function Avatar({
  src,
  alt,
  children,
  size = "3",
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
    "az-Avatar",
    `az-r-size-${size}`,
    status && "avatar-status",
    status && `avatar-${status}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={avatarClasses}
      role="img"
      aria-label={alt || initials || "User avatar"}
      {...props}
    >
      {src ? (
        <img src={src} alt="" />
      ) : (
        <div className="avatar-initials" aria-hidden="true">
          {getInitials()}
        </div>
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
    <div className={`avatar-group ${className}`} role="group" aria-label="Avatar group" {...props}>
      {visibleChildren}
      {remainingCount > 0 && (
        <div className="avatar-more" aria-label={`${remainingCount} more avatars`}>
          {moreLabel.replace("{count}", remainingCount.toString())}
        </div>
      )}
    </div>
  );
}
