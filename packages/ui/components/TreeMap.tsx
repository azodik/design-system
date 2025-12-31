"use client";
import React, { useMemo } from "react";

export interface TreeMapNode {
  /**
   * Node ID
   */
  id: string;
  /**
   * Node label
   */
  label: string;
  /**
   * Node value (determines size)
   */
  value: number;
  /**
   * Node color
   */
  color?: string;
  /**
   * Children nodes
   */
  children?: TreeMapNode[];
}

export interface TreeMapProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Tree map data
   */
  data: TreeMapNode[];
  /**
   * Width of treemap
   */
  width?: number;
  /**
   * Height of treemap
   */
  height?: number;
  /**
   * Color scale
   */
  colors?: string[];
  /**
   * Show labels
   */
  showLabels?: boolean;
  /**
   * On node click
   */
  onNodeClick?: (node: TreeMapNode) => void;
}

/**
 * TreeMap component for hierarchical data visualization
 *
 * @example
 * ```tsx
 * <TreeMap
 *   data={treeMapData}
 *   width={600}
 *   height={400}
 * />
 * ```
 */
export function TreeMap({
  data,
  width = 600,
  height = 400,
  colors = ["#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12"],
  showLabels = true,
  onNodeClick,
  className = "",
  ...props
}: TreeMapProps) {
  // Flatten tree structure
  const flattenNodes = useMemo(() => {
    const flatten = (nodes: TreeMapNode[]): TreeMapNode[] => {
      const result: TreeMapNode[] = [];
      nodes.forEach((node) => {
        if (node.children && node.children.length > 0) {
          result.push(...flatten(node.children));
        } else {
          result.push(node);
        }
      });
      return result;
    };
    return flatten(data);
  }, [data]);

  // Calculate total value
  const totalValue = useMemo(() => {
    return flattenNodes.reduce((sum, node) => sum + node.value, 0);
  }, [flattenNodes]);

  // Simple squarified treemap layout (simplified version)
  const layoutNodes = useMemo(() => {
    const sorted = [...flattenNodes].sort((a, b) => b.value - a.value);
    const rows: TreeMapNode[][] = [];
    let currentRow: TreeMapNode[] = [];
    let currentRowWidth = 0;
    const _rowHeight = height / Math.ceil(Math.sqrt(sorted.length));

    sorted.forEach((node, index) => {
      const nodeWidth = (node.value / totalValue) * width;
      if (currentRowWidth + nodeWidth > width && currentRow.length > 0) {
        rows.push(currentRow);
        currentRow = [node];
        currentRowWidth = nodeWidth;
      } else {
        currentRow.push(node);
        currentRowWidth += nodeWidth;
      }
      if (index === sorted.length - 1 && currentRow.length > 0) {
        rows.push(currentRow);
      }
    });

    const layouted: Array<TreeMapNode & { x: number; y: number; w: number; h: number }> = [];
    let y = 0;

    rows.forEach((row) => {
      const rowValue = row.reduce((sum, node) => sum + node.value, 0);
      const rowHeight = (rowValue / totalValue) * height;
      let x = 0;

      row.forEach((node) => {
        const nodeWidth = (node.value / rowValue) * width;
        layouted.push({
          ...node,
          x,
          y,
          w: nodeWidth,
          h: rowHeight,
        });
        x += nodeWidth;
      });

      y += rowHeight;
    });

    return layouted;
  }, [flattenNodes, totalValue, width, height]);

  const getNodeColor = (node: TreeMapNode, index: number): string => {
    if (node.color) return node.color;
    return colors[index % colors.length];
  };

  const treeMapClasses = ["treemap", className].filter(Boolean).join(" ");

  return (
    <div className={treeMapClasses} style={{ width, height, position: "relative" }} {...props}>
      {layoutNodes.map((node, index) => (
        <button
          type="button"
          key={node.id}
          className="treemap-node"
          style={{
            position: "absolute",
            left: `${node.x}px`,
            top: `${node.y}px`,
            width: `${node.w}px`,
            height: `${node.h}px`,
            backgroundColor: getNodeColor(node, index),
            border: "1px solid var(--color-background)",
            cursor: onNodeClick ? "pointer" : "default",
          }}
          onClick={() => onNodeClick?.(node)}
          onKeyDown={(e) => {
            if (onNodeClick && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              onNodeClick(node);
            }
          }}
          disabled={!onNodeClick}
          aria-label={`${node.label}: ${node.value}`}
          title={`${node.label}: ${node.value}`}
        >
          {showLabels && node.w > 50 && node.h > 30 && (
            <div className="treemap-node-label">
              <div className="treemap-node-name">{node.label}</div>
              <div className="treemap-node-value">{node.value}</div>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export default TreeMap;
