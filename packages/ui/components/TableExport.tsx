import React from "react";
import Button from "./Button";
import { Menu } from "./Menu";
import { exportToCSV, exportToExcel, exportToJSON } from "../utils/table-export";

export interface TableExportProps<T extends Record<string, unknown> = Record<string, unknown>> {
  /**
   * Table data
   */
  data: T[];
  /**
   * Column definitions
   */
  columns: Array<{ key: keyof T; label: string }>;
  /**
   * Export file name
   */
  filename?: string;
  /**
   * Show export button
   */
  showButton?: boolean;
  /**
   * Custom trigger
   */
  trigger?: React.ReactNode;
  /**
   * Export formats to show
   */
  formats?: ("csv" | "excel" | "json")[];
}

/**
 * Table Export component for exporting table data
 *
 * @example
 * ```tsx
 * <TableExport
 *   data={tableData}
 *   columns={tableColumns}
 *   filename="my-data"
 * />
 * ```
 */
export function TableExport<T extends Record<string, unknown> = Record<string, unknown>>({
  data,
  columns,
  filename = "export",
  showButton = true,
  trigger,
  formats = ["csv", "excel", "json"],
}: TableExportProps<T>) {
  const handleExport = (format: "csv" | "excel" | "json") => {
    switch (format) {
      case "csv":
        exportToCSV(data, columns, { filename });
        break;
      case "excel":
        exportToExcel(data, columns, { filename });
        break;
      case "json":
        exportToJSON(data, { filename });
        break;
    }
  };

  const menuItems = [
    ...(formats.includes("csv")
      ? [
          {
            label: "Export as CSV",
            onClick: () => handleExport("csv"),
            icon: "📄",
          },
        ]
      : []),
    ...(formats.includes("excel")
      ? [
          {
            label: "Export as Excel",
            onClick: () => handleExport("excel"),
            icon: "📊",
          },
        ]
      : []),
    ...(formats.includes("json")
      ? [
          {
            label: "Export as JSON",
            onClick: () => handleExport("json"),
            icon: "📋",
          },
        ]
      : []),
  ];

  if (trigger) {
    return <Menu trigger={trigger} items={menuItems} />;
  }

  if (showButton) {
    return <Menu trigger={<Button>Export</Button>} items={menuItems} />;
  }

  return null;
}

export default TableExport;
