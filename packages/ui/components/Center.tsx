import React from "react";

export interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Children to center
   */
  children: React.ReactNode;
  /**
   * Center horizontally
   */
  horizontal?: boolean;
  /**
   * Center vertically
   */
  vertical?: boolean;
  /**
   * Full width
   */
  fullWidth?: boolean;
  /**
   * Full height
   */
  fullHeight?: boolean;
}

/**
 * Center utility component for centering content
 *
 * @example
 * ```tsx
 * <Center>
 *   <Button>Centered Button</Button>
 * </Center>
 * ```
 */
export function Center({
  children,
  horizontal = true,
  vertical = true,
  fullWidth = false,
  fullHeight = false,
  className = "",
  style,
  ...props
}: CenterProps) {
  const centerClasses = [
    "center",
    horizontal && "center-horizontal",
    vertical && "center-vertical",
    fullWidth && "center-full-width",
    fullHeight && "center-full-height",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={centerClasses} style={style} {...props}>
      {children}
    </div>
  );
}

export default Center;
