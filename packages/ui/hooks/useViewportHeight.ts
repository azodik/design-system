import { useState, useEffect } from "react";

/**
 * Hook for getting dynamic viewport height (handles mobile browser bars)
 *
 * @example
 * ```tsx
 * const vh = useViewportHeight();
 * <div style={{ height: `${vh}px` }}>Content</div>
 * ```
 */
export function useViewportHeight(): number {
  const [height, setHeight] = useState(() => {
    if (typeof window === "undefined") return 0;
    return window.innerHeight;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateHeight = () => {
      setHeight(window.innerHeight);
    };

    // Use visual viewport API if available (better for mobile)
    if (window.visualViewport) {
      const handleResize = () => {
        setHeight(window.visualViewport?.height || window.innerHeight);
      };

      window.visualViewport.addEventListener("resize", handleResize);
      updateHeight();

      return () => {
        window.visualViewport?.removeEventListener("resize", handleResize);
      };
    } else {
      // Fallback to regular resize
      window.addEventListener("resize", updateHeight);
      updateHeight();

      return () => {
        window.removeEventListener("resize", updateHeight);
      };
    }
  }, []);

  return height;
}
