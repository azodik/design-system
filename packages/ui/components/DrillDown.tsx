import React, { useState, useCallback } from "react";
import Button from "./Button";
import Card from "./Card";

export interface DrillDownLevel {
  /**
   * Level ID
   */
  id: string;
  /**
   * Level title
   */
  title: string;
  /**
   * Level content
   */
  content: React.ReactNode;
  /**
   * Child levels
   */
  children?: DrillDownLevel[];
}

export interface DrillDownProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Root level data
   */
  rootLevel: DrillDownLevel;
  /**
   * Callback when drilling down
   */
  onDrillDown?: (level: DrillDownLevel) => void;
  /**
   * Callback when drilling up
   */
  onDrillUp?: (level: DrillDownLevel) => void;
  /**
   * Show breadcrumb navigation
   */
  showBreadcrumb?: boolean;
  /**
   * Show back button
   */
  showBackButton?: boolean;
}

/**
 * Drill-Down component - Click-through data exploration
 *
 * @example
 * ```tsx
 * <DrillDown
 *   rootLevel={rootLevel}
 *   onDrillDown={handleDrillDown}
 *   showBreadcrumb
 * />
 * ```
 */
export function DrillDown({
  rootLevel,
  onDrillDown,
  onDrillUp,
  showBreadcrumb = true,
  showBackButton = true,
  className = "",
  ...props
}: DrillDownProps) {
  const [currentLevel, setCurrentLevel] = useState<DrillDownLevel>(rootLevel);
  const [levelHistory, setLevelHistory] = useState<DrillDownLevel[]>([rootLevel]);

  const handleDrillDown = useCallback(
    (level: DrillDownLevel) => {
      setCurrentLevel(level);
      setLevelHistory((prev) => [...prev, level]);
      onDrillDown?.(level);
    },
    [onDrillDown],
  );

  const handleDrillUp = useCallback(() => {
    if (levelHistory.length > 1) {
      const newHistory = [...levelHistory];
      newHistory.pop();
      const previousLevel = newHistory[newHistory.length - 1];
      setCurrentLevel(previousLevel);
      setLevelHistory(newHistory);
      onDrillUp?.(previousLevel);
    }
  }, [levelHistory, onDrillUp]);

  const canGoBack = levelHistory.length > 1;

  const drillDownClasses = ["drill-down", className].filter(Boolean).join(" ");

  return (
    <div className={drillDownClasses} {...props}>
      {(showBreadcrumb || (showBackButton && canGoBack)) && (
        <div className="drill-down-header">
          {showBreadcrumb && (
            <div className="drill-down-breadcrumb">
              {levelHistory.map((level, index) => (
                <React.Fragment key={level.id}>
                  {index > 0 && <span className="drill-down-separator">/</span>}
                  <button
                    type="button"
                    className="drill-down-breadcrumb-item"
                    onClick={() => {
                      if (index < levelHistory.length - 1) {
                        const newHistory = levelHistory.slice(0, index + 1);
                        setCurrentLevel(newHistory[newHistory.length - 1]);
                        setLevelHistory(newHistory);
                      }
                    }}
                  >
                    {level.title}
                  </button>
                </React.Fragment>
              ))}
            </div>
          )}
          {showBackButton && canGoBack && (
            <Button variant="outline" onClick={handleDrillUp}>
              ← Back
            </Button>
          )}
        </div>
      )}
      <Card className="drill-down-content">
        <div className="drill-down-title">{currentLevel.title}</div>
        <div className="drill-down-body">{currentLevel.content}</div>
        {currentLevel.children && currentLevel.children.length > 0 && (
          <div className="drill-down-children">
            {currentLevel.children.map((child) => (
              <Card
                key={child.id}
                className="drill-down-child"
                onClick={() => handleDrillDown(child)}
                style={{ cursor: "pointer" }}
              >
                <div className="drill-down-child-title">{child.title}</div>
                {child.content && <div className="drill-down-child-preview">{child.content}</div>}
                <div className="drill-down-child-arrow">→</div>
              </Card>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

export default DrillDown;
