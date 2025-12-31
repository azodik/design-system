/**
 * Bundle analysis utilities - Size tracking and reporting
 */

export interface BundleSize {
  /**
   * Bundle name
   */
  name: string;
  /**
   * Bundle size in bytes
   */
  size: number;
  /**
   * Gzipped size in bytes
   */
  gzippedSize?: number;
  /**
   * Bundle path
   */
  path?: string;
}

/**
 * Format bytes to human-readable string
 *
 * @example
 * ```tsx
 * formatBytes(1024); // "1 KB"
 * ```
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

/**
 * Calculate gzipped size estimate
 * Typically gzip reduces size by 60-70%
 */
export function estimateGzippedSize(size: number): number {
  return Math.round(size * 0.35); // 65% reduction estimate
}

/**
 * Compare bundle sizes
 */
export function compareBundleSizes(
  current: BundleSize[],
  previous: BundleSize[],
): Array<BundleSize & { change: number; changePercent: number }> {
  return current.map((bundle) => {
    const prev = previous.find((p) => p.name === bundle.name);
    if (!prev) {
      return {
        ...bundle,
        change: bundle.size,
        changePercent: 100,
      };
    }

    const change = bundle.size - prev.size;
    const changePercent = (change / prev.size) * 100;

    return {
      ...bundle,
      change,
      changePercent,
    };
  });
}

/**
 * Generate bundle size report
 */
export function generateBundleReport(bundles: BundleSize[]): string {
  const totalSize = bundles.reduce((sum, b) => sum + b.size, 0);
  const totalGzipped = bundles.reduce(
    (sum, b) => sum + (b.gzippedSize || estimateGzippedSize(b.size)),
    0,
  );

  let report = `Bundle Size Report\n`;
  report += `==================\n\n`;
  report += `Total Size: ${formatBytes(totalSize)}\n`;
  report += `Total Gzipped: ${formatBytes(totalGzipped)}\n\n`;
  report += `Bundles:\n`;

  bundles.forEach((bundle) => {
    report += `  ${bundle.name}: ${formatBytes(bundle.size)}`;
    if (bundle.gzippedSize) {
      report += ` (${formatBytes(bundle.gzippedSize)} gzipped)`;
    }
    report += `\n`;
  });

  return report;
}
