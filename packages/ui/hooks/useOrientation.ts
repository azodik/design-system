import { useState, useEffect } from "react";

export type Orientation = "portrait" | "landscape";

export interface OrientationState {
  angle: number;
  type: Orientation;
}

/**
 * Hook for detecting device orientation
 *
 * @example
 * ```tsx
 * const orientation = useOrientation();
 * console.log(orientation.type); // 'portrait' or 'landscape'
 * ```
 */
export function useOrientation(): OrientationState {
  const [orientation, setOrientation] = useState<OrientationState>(() => {
    if (typeof window === "undefined") {
      return { angle: 0, type: "portrait" };
    }

    const angle = window.orientation || 0;
    const type: Orientation = Math.abs(angle) === 90 ? "landscape" : "portrait";

    return { angle, type };
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleOrientationChange = () => {
      const angle = window.orientation || 0;
      const type: Orientation = Math.abs(angle) === 90 ? "landscape" : "portrait";
      setOrientation({ angle, type });
    };

    // Listen to orientation change
    window.addEventListener("orientationchange", handleOrientationChange);

    // Also listen to resize for better compatibility
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return orientation;
}
