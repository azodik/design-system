import { useEffect, useRef, useCallback, useState } from "react";

export interface UseAutoSaveOptions<T> {
  /**
   * Data to save
   */
  data: T;
  /**
   * Save function
   */
  onSave: (data: T) => void | Promise<void>;
  /**
   * Debounce delay (ms)
   */
  delay?: number;
  /**
   * Enable auto-save
   */
  enabled?: boolean;
  /**
   * Save on unmount
   */
  saveOnUnmount?: boolean;
}

/**
 * Hook for form auto-save functionality
 *
 * @example
 * ```tsx
 * const { isSaving, lastSaved } = useAutoSave({
 *   data: formData,
 *   onSave: async (data) => {
 *     await saveToServer(data);
 *   },
 *   delay: 1000,
 * });
 * ```
 */
export function useAutoSave<T>(options: UseAutoSaveOptions<T>) {
  const { data, onSave, delay = 1000, enabled = true, saveOnUnmount = true } = options;

  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousDataRef = useRef<T>(data);
  const isInitialMount = useRef(true);

  const save = useCallback(
    async (dataToSave: T) => {
      if (!enabled) return;

      setIsSaving(true);
      try {
        await onSave(dataToSave);
        setLastSaved(new Date());
        previousDataRef.current = dataToSave;
      } catch (error) {
        console.error("Auto-save failed:", error);
      } finally {
        setIsSaving(false);
      }
    },
    [enabled, onSave],
  );

  useEffect(() => {
    // Skip on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      previousDataRef.current = data;
      return;
    }

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Check if data has changed
    if (JSON.stringify(data) !== JSON.stringify(previousDataRef.current)) {
      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        save(data);
      }, delay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [data, delay, save]);

  // Save on unmount if enabled
  useEffect(() => {
    if (!saveOnUnmount) return;

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Save immediately on unmount
      if (JSON.stringify(data) !== JSON.stringify(previousDataRef.current)) {
        save(data);
      }
    };
  }, [data, save, saveOnUnmount]);

  return { isSaving, lastSaved };
}
