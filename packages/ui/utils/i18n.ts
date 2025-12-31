/**
 * i18n Support utilities - Built-in internationalization
 */

export interface Translation {
  [key: string]: string | Translation;
}

export interface I18nConfig {
  /**
   * Default locale
   */
  defaultLocale: string;
  /**
   * Current locale
   */
  locale: string;
  /**
   * Translations
   */
  translations: Record<string, Translation>;
}

/**
 * Create i18n instance
 */
export function createI18n(config: I18nConfig) {
  const { defaultLocale, locale, translations } = config;

  const getTranslation = (key: string, localeOverride?: string): string => {
    const currentLocale = localeOverride || locale || defaultLocale;
    const translation = translations[currentLocale];

    if (!translation) {
      return key;
    }

    const keys = key.split(".");
    let value: string | Translation | undefined = translation;

    for (const k of keys) {
      if (typeof value === "object" && value !== null) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  const t = (key: string, localeOverride?: string): string => {
    return getTranslation(key, localeOverride);
  };

  return {
    t,
    getTranslation,
    locale,
    defaultLocale,
  };
}

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
