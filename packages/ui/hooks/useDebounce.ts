import { useState, useEffect } from "react";

/**
 * Hook to debounce a value
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default: 300)
 * @returns Debounced value
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook to debounce a callback function
 * @param callback - The function to debounce
 * @param delay - Delay in milliseconds (default: 300)
 * @returns Debounced callback
 */
export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay = 300,
): T {
  const [debouncedCallback, setDebouncedCallback] = useState<T>(() => callback as T);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCallback(() => callback);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);

  return debouncedCallback;
}
