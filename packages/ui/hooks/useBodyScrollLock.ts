import { useEffect } from "react";

/**
 * Hook to lock/unlock body scroll when a modal or overlay is open
 * @param isLocked - Whether the body scroll should be locked
 */
export function useBodyScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return;

    // Store the original overflow value
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Calculate scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Lock the body scroll
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Cleanup: restore original styles
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]);
}
