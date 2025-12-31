/**
 * Haptic Feedback utilities - Vibration API integration
 */

export type HapticFeedbackType = "light" | "medium" | "heavy" | "success" | "warning" | "error";

export interface HapticFeedbackOptions {
  /**
   * Vibration pattern (ms)
   */
  pattern?: number | number[];
  /**
   * Vibration duration (ms)
   */
  duration?: number;
}

const HAPTIC_PATTERNS: Record<HapticFeedbackType, number | number[]> = {
  light: 10,
  medium: 20,
  heavy: 30,
  success: [10, 50, 10],
  warning: [20, 50, 20],
  error: [30, 50, 30],
};

/**
 * Check if haptic feedback is supported
 */
export function isHapticFeedbackSupported(): boolean {
  return typeof navigator !== "undefined" && "vibrate" in navigator;
}

/**
 * Trigger haptic feedback
 */
export function triggerHapticFeedback(
  type: HapticFeedbackType = "medium",
  options?: HapticFeedbackOptions,
): boolean {
  if (!isHapticFeedbackSupported()) {
    return false;
  }

  const pattern = options?.pattern || HAPTIC_PATTERNS[type];
  const duration = options?.duration;

  if (duration !== undefined) {
    return navigator.vibrate(duration);
  }

  if (Array.isArray(pattern)) {
    return navigator.vibrate(pattern);
  }

  return navigator.vibrate(pattern);
}

/**
 * Cancel haptic feedback
 */
export function cancelHapticFeedback(): void {
  if (isHapticFeedbackSupported()) {
    navigator.vibrate(0);
  }
}

/**
 * React hook for haptic feedback
 */
export function useHapticFeedback() {
  const trigger = (type: HapticFeedbackType = "medium", options?: HapticFeedbackOptions) => {
    return triggerHapticFeedback(type, options);
  };

  const cancel = () => {
    cancelHapticFeedback();
  };

  return {
    trigger,
    cancel,
    isSupported: isHapticFeedbackSupported(),
  };
}
