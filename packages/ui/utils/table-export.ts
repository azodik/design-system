/**
 * Table export utilities for CSV and Excel
 */

export interface ExportOptions {
  /**
   * File name (without extension)
   */
  filename?: string;
  /**
   * Include headers
   */
  includeHeaders?: boolean;
  /**
   * Custom delimiter (for CSV)
   */
  delimiter?: string;
}

/**
 * Export table data to CSV
 */
export function exportToCSV<T extends Record<string, unknown>>(
  data: T[],
  columns: Array<{ key: keyof T; label: string }>,
  options: ExportOptions = {},
): void {
  const { filename = "export", includeHeaders = true, delimiter = "," } = options;

  const rows: string[] = [];

  // Add headers
  if (includeHeaders) {
    rows.push(columns.map((col) => escapeCSVValue(col.label)).join(delimiter));
  }

  // Add data rows
  data.forEach((row) => {
    const values = columns.map((col) => {
      const value = row[col.key];
      return escapeCSVValue(value != null ? String(value) : "");
    });
    rows.push(values.join(delimiter));
  });

  // Create and download file
  const csvContent = rows.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export table data to Excel (XLSX format using CSV as fallback)
 * Note: For true Excel format, you'd need a library like xlsx
 */
export function exportToExcel<T extends Record<string, unknown>>(
  data: T[],
  columns: Array<{ key: keyof T; label: string }>,
  options: ExportOptions = {},
): void {
  const { filename = "export" } = options;

  // For now, export as CSV with .xlsx extension
  // In production, you'd use a library like 'xlsx' for proper Excel format
  exportToCSV(data, columns, { ...options, filename: `${filename}.xlsx` });
}

/**
 * Escape CSV value (handles commas, quotes, newlines)
 */
function escapeCSVValue(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

/**
 * Export table data to JSON
 */
export function exportToJSON<T extends Record<string, unknown>>(
  data: T[],
  options: ExportOptions = {},
): void {
  const { filename = "export" } = options;

  const jsonContent = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonContent], { type: "application/json" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.json`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
