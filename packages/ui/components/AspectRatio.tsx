import React from "react";

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Aspect ratio (width / height)
   * Examples: 16/9, 4/3, 1/1
   */
  ratio?: number;
  /**
   * Common aspect ratios
   */
  preset?: "square" | "video" | "photo" | "wide" | "portrait";
  /**
   * Children to maintain aspect ratio
   */
  children: React.ReactNode;
}

/**
 * Aspect Ratio component to maintain consistent aspect ratios
 *
 * @example
 * ```tsx
 * <AspectRatio ratio={16/9}>
 *   <img src="image.jpg" alt="Image" />
 * </AspectRatio>
 * ```
 */
export function AspectRatio({
  ratio,
  preset,
  className = "",
  style,
  children,
  ...props
}: AspectRatioProps) {
  const getRatio = (): number => {
    if (ratio) return ratio;
    if (preset === "square") return 1;
    if (preset === "video") return 16 / 9;
    if (preset === "photo") return 4 / 3;
    if (preset === "wide") return 21 / 9;
    if (preset === "portrait") return 3 / 4;
    return 16 / 9; // default
  };

  const aspectRatio = getRatio();
  const paddingBottom = `${(1 / aspectRatio) * 100}%`;

  const aspectRatioClasses = ["aspect-ratio", className].filter(Boolean).join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    paddingBottom,
  } as React.CSSProperties;

  return (
    <div className={aspectRatioClasses} style={customStyle} {...props}>
      <div className="aspect-ratio-content">{children}</div>
    </div>
  );
}

export default AspectRatio;
