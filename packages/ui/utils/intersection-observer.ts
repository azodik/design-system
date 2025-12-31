/**
 * Intersection Observer utilities for lazy loading
 */

import { useEffect, useRef, RefObject, useState } from "react";

export interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  /**
   * Trigger callback only once
   */
  triggerOnce?: boolean;
}

/**
 * Hook for intersection observer (lazy loading)
 *
 * @example
 * ```tsx
 * const { ref, isIntersecting } = useIntersectionObserver({
 *   threshold: 0.1,
 *   triggerOnce: true,
 * });
 * ```
 */
export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}): {
  ref: RefObject<HTMLElement | null>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
} {
  const { triggerOnce = false, ...observerOptions } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setEntry(entry);
      setIsIntersecting(entry.isIntersecting);

      if (triggerOnce && entry.isIntersecting) {
        observer.disconnect();
      }
    }, observerOptions);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnce, observerOptions]);

  return { ref, isIntersecting, entry };
}

/**
 * Hook for lazy loading images
 */
export function useLazyImage(src: string, options: UseIntersectionObserverOptions = {}) {
  const { ref, isIntersecting } = useIntersectionObserver({
    ...options,
    triggerOnce: true,
  });
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isIntersecting && !imageSrc) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setError(true);
      };
      img.src = src;
    }
  }, [isIntersecting, src, imageSrc]);

  return { ref, imageSrc, isLoaded, error };
}
