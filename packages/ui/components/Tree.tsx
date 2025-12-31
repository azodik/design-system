import React, { useState, useCallback } from "react";

export interface TreeNode {
  /**
   * Node ID
   */
  id: string;
  /**
   * Node label
   */
  label: string;
  /**
   * Node icon
   */
  icon?: React.ReactNode;
  /**
   * Child nodes
   */
  children?: TreeNode[];
  /**
   * Node is expanded
   */
  expanded?: boolean;
  /**
   * Node is selected
   */
  selected?: boolean;
  /**
   * Node is disabled
   */
  disabled?: boolean;
  /**
   * Custom node content
   */
  content?: React.ReactNode;
}

export interface TreeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Tree data
   */
  data: TreeNode[];
  /**
   * Selected node IDs
   */
  selectedIds?: string[];
  /**
   * Expanded node IDs
   */
  expandedIds?: string[];
  /**
   * Callback when selection changes
   */
  onSelectionChange?: (selectedIds: string[]) => void;
  /**
   * Callback when expansion changes
   */
  onExpansionChange?: (expandedIds: string[]) => void;
  /**
   * Callback when node is clicked
   */
  onNodeClick?: (node: TreeNode) => void;
  /**
   * Multi-select
   */
  multiSelect?: boolean;
  /**
   * Show checkboxes
   */
  showCheckboxes?: boolean;
  /**
   * Size variant
   */
  size?: "small" | "medium" | "large";
}

/**
 * Tree component for hierarchical data display
 *
 * @example
 * ```tsx
 * <Tree
 *   data={treeData}
 *   selectedIds={selectedIds}
 *   onSelectionChange={setSelectedIds}
 *   showCheckboxes
 * />
 * ```
 */
export function Tree({
  data,
  selectedIds: controlledSelectedIds,
  expandedIds: controlledExpandedIds,
  onSelectionChange,
  onExpansionChange,
  onNodeClick,
  multiSelect = false,
  showCheckboxes = false,
  size = "medium",
  className = "",
  ...props
}: TreeProps) {
  const [internalSelectedIds, setInternalSelectedIds] = useState<string[]>([]);
  const [internalExpandedIds, setInternalExpandedIds] = useState<string[]>([]);

  const selectedIds =
    controlledSelectedIds !== undefined ? controlledSelectedIds : internalSelectedIds;
  const expandedIds =
    controlledExpandedIds !== undefined ? controlledExpandedIds : internalExpandedIds;

  const isNodeSelected = useCallback(
    (nodeId: string): boolean => {
      return selectedIds.includes(nodeId);
    },
    [selectedIds],
  );

  const isNodeExpanded = useCallback(
    (nodeId: string): boolean => {
      return expandedIds.includes(nodeId);
    },
    [expandedIds],
  );

  const toggleExpansion = useCallback(
    (nodeId: string) => {
      const newExpandedIds = isNodeExpanded(nodeId)
        ? expandedIds.filter((id) => id !== nodeId)
        : [...expandedIds, nodeId];

      if (controlledExpandedIds === undefined) {
        setInternalExpandedIds(newExpandedIds);
      }
      onExpansionChange?.(newExpandedIds);
    },
    [expandedIds, isNodeExpanded, controlledExpandedIds, onExpansionChange],
  );

  const toggleSelection = useCallback(
    (nodeId: string) => {
      let newSelectedIds: string[];
      if (multiSelect) {
        newSelectedIds = isNodeSelected(nodeId)
          ? selectedIds.filter((id) => id !== nodeId)
          : [...selectedIds, nodeId];
      } else {
        newSelectedIds = isNodeSelected(nodeId) ? [] : [nodeId];
      }

      if (controlledSelectedIds === undefined) {
        setInternalSelectedIds(newSelectedIds);
      }
      onSelectionChange?.(newSelectedIds);
    },
    [selectedIds, isNodeSelected, multiSelect, controlledSelectedIds, onSelectionChange],
  );

  // Use a function declaration to allow recursion
  const renderNode = (node: TreeNode, level = 0): React.ReactNode => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = isNodeExpanded(node.id);
    const isSelected = isNodeSelected(node.id);

    const nodeClasses = [
      "tree-node",
      `tree-node-level-${level}`,
      hasChildren && "tree-node-has-children",
      isExpanded && "tree-node-expanded",
      isSelected && "tree-node-selected",
      node.disabled && "tree-node-disabled",
      `tree-size-${size}`,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div key={node.id} className={nodeClasses}>
        <div
          className="tree-node-content"
          role="button"
          tabIndex={node.disabled ? -1 : 0}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-disabled={node.disabled}
          onClick={() => {
            if (node.disabled) return;
            if (hasChildren) {
              toggleExpansion(node.id);
            }
            onNodeClick?.(node);
            if (!showCheckboxes) {
              toggleSelection(node.id);
            }
          }}
          onKeyDown={(e) => {
            if (node.disabled) return;
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (hasChildren) {
                toggleExpansion(node.id);
              }
              onNodeClick?.(node);
              if (!showCheckboxes) {
                toggleSelection(node.id);
              }
            } else if (e.key === "ArrowRight" && hasChildren && !isExpanded) {
              e.preventDefault();
              toggleExpansion(node.id);
            } else if (e.key === "ArrowLeft" && hasChildren && isExpanded) {
              e.preventDefault();
              toggleExpansion(node.id);
            }
          }}
        >
          {showCheckboxes && (
            <input
              type="checkbox"
              checked={isSelected}
              onChange={(e) => {
                e.stopPropagation();
                toggleSelection(node.id);
              }}
              disabled={node.disabled}
              className="tree-node-checkbox"
            />
          )}
          {hasChildren && (
            <button
              type="button"
              className="tree-node-toggle"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpansion(node.id);
              }}
              disabled={node.disabled}
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? "▼" : "▶"}
            </button>
          )}
          {!hasChildren && <span className="tree-node-spacer" />}
          {node.icon && <span className="tree-node-icon">{node.icon}</span>}
          <span className="tree-node-label">{node.label}</span>
          {node.content && <div className="tree-node-custom-content">{node.content}</div>}
        </div>
        {hasChildren && isExpanded && (
          <div className="tree-node-children">
            {node.children?.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const treeClasses = ["tree", `tree-size-${size}`, className].filter(Boolean).join(" ");

  return (
    <div className={treeClasses} {...props}>
      {data.map((node) => renderNode(node))}
    </div>
  );
}

export default Tree;
