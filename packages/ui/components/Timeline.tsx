import React from "react";

export interface TimelineItem {
  /**
   * Item title
   */
  title: string;
  /**
   * Item description
   */
  description?: string;
  /**
   * Item timestamp
   */
  timestamp?: string;
  /**
   * Custom icon
   */
  icon?: React.ReactNode;
  /**
   * Item color variant
   */
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  /**
   * Item is active
   */
  active?: boolean;
  /**
   * Item is completed
   */
  completed?: boolean;
  /**
   * Custom content
   */
  content?: React.ReactNode;
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Timeline items
   */
  items: TimelineItem[];
  /**
   * Orientation
   */
  orientation?: "vertical" | "horizontal";
  /**
   * Show connecting line
   */
  showLine?: boolean;
  /**
   * Alternate item positions (for horizontal)
   */
  alternate?: boolean;
}

/**
 * Timeline component for displaying chronological events
 *
 * @example
 * ```tsx
 * <Timeline
 *   items={[
 *     { title: "Started", timestamp: "2024-01-01", completed: true },
 *     { title: "In Progress", timestamp: "2024-01-15", active: true },
 *     { title: "Upcoming", timestamp: "2024-02-01" },
 *   ]}
 * />
 * ```
 */
export function Timeline({
  items,
  orientation = "vertical",
  showLine = true,
  alternate = false,
  className = "",
  ...props
}: TimelineProps) {
  const timelineClasses = [
    "timeline",
    `timeline-${orientation}`,
    alternate && "timeline-alternate",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={timelineClasses} {...props}>
      {items.map((item, index) => {
        const isActive = item.active;
        const isCompleted = item.completed || index < items.findIndex((i) => i.active);
        const isNamedColor =
          item.color && ["indigo", "ruby", "grass", "amber", "cyan", "azodik"].includes(item.color);

        const itemClasses = [
          "timeline-item",
          isActive && "timeline-item-active",
          isCompleted && "timeline-item-completed",
          isNamedColor ? `timeline-item-color-${item.color}` : "",
        ]
          .filter(Boolean)
          .join(" ");

        const customStyle: React.CSSProperties =
          item.color && !isNamedColor
            ? ({ "--timeline-color": item.color } as React.CSSProperties)
            : {};

        return (
          <div key={index} className={itemClasses} style={customStyle}>
            {showLine && index < items.length - 1 && <div className="timeline-line" />}
            <div className="timeline-marker">
              {item.icon || <div className="timeline-dot">{isCompleted && "✓"}</div>}
            </div>
            <div className="timeline-content">
              <div className="timeline-title">{item.title}</div>
              {item.description && <div className="timeline-description">{item.description}</div>}
              {item.timestamp && <div className="timeline-timestamp">{item.timestamp}</div>}
              {item.content && <div className="timeline-custom-content">{item.content}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
