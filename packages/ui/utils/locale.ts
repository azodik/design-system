/**
 * Locale Utilities - Date/number formatting
 */

/**
 * Format number based on locale
 */
export function formatNumber(
  value: number,
  locale: string = "en-US",
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

/**
 * Format currency based on locale
 */
export function formatCurrency(
  value: number,
  locale: string = "en-US",
  currency: string = "USD",
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    ...options,
  }).format(value);
}

/**
 * Format date based on locale
 */
export function formatDate(
  date: Date | string | number,
  locale: string = "en-US",
  options?: Intl.DateTimeFormatOptions,
): string {
  const dateObj = typeof date === "string" || typeof date === "number" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Format relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(date: Date | string | number, locale: string = "en-US"): string {
  const dateObj = typeof date === "string" || typeof date === "number" ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  // Check if RelativeTimeFormat is available
  if (typeof Intl !== "undefined" && "RelativeTimeFormat" in Intl) {
    try {
      const RelativeTimeFormat = (
        Intl as unknown as {
          RelativeTimeFormat: new (
            locale: string,
            options?: { numeric?: string },
          ) => { format: (value: number, unit: string) => string };
        }
      ).RelativeTimeFormat;
      const rtf = new RelativeTimeFormat(locale, { numeric: "auto" });

      if (Math.abs(diffInSeconds) < 60) {
        return rtf.format(-diffInSeconds, "second");
      } else if (Math.abs(diffInSeconds) < 3600) {
        return rtf.format(-Math.floor(diffInSeconds / 60), "minute");
      } else if (Math.abs(diffInSeconds) < 86400) {
        return rtf.format(-Math.floor(diffInSeconds / 3600), "hour");
      } else if (Math.abs(diffInSeconds) < 2592000) {
        return rtf.format(-Math.floor(diffInSeconds / 86400), "day");
      } else if (Math.abs(diffInSeconds) < 31536000) {
        return rtf.format(-Math.floor(diffInSeconds / 2592000), "month");
      } else {
        return rtf.format(-Math.floor(diffInSeconds / 31536000), "year");
      }
    } catch {
      // Fall through to fallback
    }
  }

  // Fallback for browsers without RelativeTimeFormat
  if (Math.abs(diffInSeconds) < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (Math.abs(diffInSeconds) < 3600) {
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  } else if (Math.abs(diffInSeconds) < 86400) {
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  } else if (Math.abs(diffInSeconds) < 2592000) {
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  } else if (Math.abs(diffInSeconds) < 31536000) {
    return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  } else {
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
  }
}

/**
 * Parse locale string
 */
export function parseLocale(locale: string): { language: string; region?: string } {
  const parts = locale.split("-");
  return {
    language: parts[0],
    region: parts[1],
  };
}

/**
 * Get browser locale
 */
export function getBrowserLocale(): string {
  if (typeof window === "undefined") return "en-US";
  return navigator.language || navigator.languages?.[0] || "en-US";
}
