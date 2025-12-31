import React, { useEffect, useRef, useState } from "react";

export interface InfiniteScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Callback when more items should be loaded
   */
  onLoadMore: () => void | Promise<void>;
  /**
   * Whether there are more items to load
   */
  hasMore: boolean;
  /**
   * Whether currently loading
   */
  loading?: boolean;
  /**
   * Distance from bottom to trigger load (px)
   */
  threshold?: number;
  /**
   * Loading component
   */
  loader?: React.ReactNode;
  /**
   * End message
   */
  endMessage?: React.ReactNode;
  /**
   * Children
   */
  children: React.ReactNode;
}

/**
 * Infinite Scroll component - Load more on scroll
 *
 * @example
 * ```tsx
 * <InfiniteScroll
 *   onLoadMore={loadMore}
 *   hasMore={hasMore}
 *   loading={isLoading}
 * >
 *   {items.map(item => <Item key={item.id} />)}
 * </InfiniteScroll>
 * ```
 */
export function InfiniteScroll({
  onLoadMore,
  hasMore,
  loading = false,
  threshold = 100,
  loader,
  endMessage,
  children,
  className = "",
  ...props
}: InfiniteScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !hasMore || loading || isLoading) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

      if (distanceFromBottom <= threshold) {
        setIsLoading(true);
        const loadPromise = Promise.resolve(onLoadMore());
        loadPromise.then(
          () => setIsLoading(false),
          () => setIsLoading(false),
        );
      }
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [onLoadMore, hasMore, loading, isLoading, threshold]);

  const infiniteScrollClasses = ["infinite-scroll", className].filter(Boolean).join(" ");

  return (
    <div ref={containerRef} className={infiniteScrollClasses} {...props}>
      {children}
      {loading || isLoading
        ? loader || <div className="infinite-scroll-loader">Loading...</div>
        : null}
      {!hasMore && endMessage ? <div className="infinite-scroll-end">{endMessage}</div> : null}
    </div>
  );
}

export default InfiniteScroll;
