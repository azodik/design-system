import React from "react";
import { Timeline, TimelineItem } from "./Timeline";

export interface Activity {
  /**
   * Activity ID
   */
  id: string;
  /**
   * Activity title
   */
  title: string;
  /**
   * Activity description
   */
  description?: string;
  /**
   * Activity timestamp
   */
  timestamp: Date | string;
  /**
   * Activity icon
   */
  icon?: React.ReactNode;
  /**
   * Activity type/color
   */
  type?: "info" | "success" | "warning" | "error" | "default";
  /**
   * Activity user/actor
   */
  actor?: {
    name: string;
    avatar?: string;
  };
  /**
   * Activity metadata
   */
  metadata?: Record<string, unknown>;
}

export interface ActivityFeedProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Activities to display
   */
  activities: Activity[];
  /**
   * Maximum number of activities to show
   */
  maxItems?: number;
  /**
   * Show timestamps
   */
  showTimestamps?: boolean;
  /**
   * Format timestamp function
   */
  formatTimestamp?: (timestamp: Date | string) => string;
  /**
   * Load more callback
   */
  onLoadMore?: () => void;
  /**
   * Has more items
   */
  hasMore?: boolean;
}

const defaultFormatTimestamp = (timestamp: Date | string): string => {
  const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
};

/**
 * Activity Feed component for timeline/activity stream
 *
 * @example
 * ```tsx
 * <ActivityFeed
 *   activities={activities}
 *   showTimestamps
 *   onLoadMore={loadMore}
 *   hasMore={hasMore}
 * />
 * ```
 */
export function ActivityFeed({
  activities,
  maxItems,
  showTimestamps = true,
  formatTimestamp = defaultFormatTimestamp,
  onLoadMore,
  hasMore = false,
  className = "",
  ...props
}: ActivityFeedProps) {
  const displayActivities = maxItems ? activities.slice(0, maxItems) : activities;

  const timelineItems: TimelineItem[] = displayActivities.map((activity) => {
    const typeColors: Record<string, string> = {
      info: "cyan",
      success: "grass",
      warning: "amber",
      error: "ruby",
      default: "azodik",
    };

    return {
      title: activity.title,
      description: activity.description,
      timestamp: showTimestamps ? formatTimestamp(activity.timestamp) : undefined,
      icon: activity.icon,
      color: typeColors[activity.type || "default"],
      content: activity.actor && (
        <div className="activity-feed-actor">
          {activity.actor.avatar && (
            <img
              src={activity.actor.avatar}
              alt={activity.actor.name}
              className="activity-feed-avatar"
            />
          )}
          <span className="activity-feed-actor-name">{activity.actor.name}</span>
        </div>
      ),
    };
  });

  const activityFeedClasses = ["activity-feed", className].filter(Boolean).join(" ");

  return (
    <div className={activityFeedClasses} {...props}>
      <Timeline items={timelineItems} orientation="vertical" showLine />
      {hasMore && onLoadMore && (
        <div className="activity-feed-load-more">
          <button type="button" className="activity-feed-load-more-button" onClick={onLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ActivityFeed;
