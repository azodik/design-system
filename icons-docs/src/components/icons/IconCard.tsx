"use client";

import { Box, Toast } from "@azodik/ui";
import { getIconComponent } from "@/lib/icon-loader";
import type { IconInfo } from "@/types/icon";
import { useMemo, useState } from "react";

interface IconCardProps {
  icon: IconInfo;
  onClick: () => void;
}

export default function IconCard({ icon, onClick }: IconCardProps) {
  // Dynamic icon component loading - component is resolved at runtime
  // This is intentional for dynamic icon loading from a large icon library

  const IconComponent = useMemo(() => getIconComponent(icon.componentName), [icon.componentName]);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(icon.componentName);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <Box
      className="icon-card"
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding:
          "clamp(var(--space-4), 4vw, var(--space-6)) clamp(var(--space-3), 3vw, var(--space-4))",
        background: "var(--color-surface)",
        border: "2px solid var(--color-border)",
        borderRadius: "var(--radius-4)",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
        boxShadow: "var(--shadow-1)",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-9)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 12px 24px -8px rgba(var(--accent-9-rgb, 244, 129, 32), 0.25)";
        const copyBtn = e.currentTarget.querySelector(".copy-indicator") as HTMLElement;
        if (copyBtn) {
          copyBtn.style.opacity = "1";
          copyBtn.style.transform = "translateY(0)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-1)";
        const copyBtn = e.currentTarget.querySelector(".copy-indicator") as HTMLElement;
        if (copyBtn) {
          copyBtn.style.opacity = "0";
          copyBtn.style.transform = "translateY(-8px)";
        }
      }}
    >
      <Box
        className="copy-indicator"
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "var(--space-3)",
          right: "var(--space-3)",
          padding: "var(--space-2) var(--space-3)",
          fontSize: "0.75rem",
          background: "var(--accent-9)",
          color: "white",
          borderRadius: "var(--radius-2)",
          opacity: 0,
          transform: "translateY(-8px)",
          transition: "all 0.2s ease",
          fontWeight: 700,
          letterSpacing: "0.05em",
          boxShadow: "0 4px 12px rgba(var(--accent-9-rgb, 244, 129, 32), 0.4)",
          zIndex: 5,
          cursor: "pointer",
        }}
      >
        Copy
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--space-3)",
          width: "100%",
        }}
      >
        <Box
          style={{
            width: "clamp(40px, 10vw, 48px)",
            height: "clamp(40px, 10vw, 48px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--color-background)",
            color: "var(--color-text)",
            borderRadius: "var(--radius-3)",
            transition: "all 0.3s ease",
            border: "1px solid var(--color-border-subtle)",
            flexShrink: 0,
          }}
        >
          {IconComponent ? (
            // eslint-disable-next-line react-hooks/static-components
            <IconComponent
              size={24}
              style={{ width: "clamp(20px, 5vw, 24px)", height: "clamp(20px, 5vw, 24px)" }}
            />
          ) : (
            <Box
              style={{
                width: "clamp(20px, 5vw, 24px)",
                height: "clamp(20px, 5vw, 24px)",
                background: "var(--color-border)",
                borderRadius: "var(--radius-2)",
              }}
            />
          )}
        </Box>

        <Box
          as="span"
          style={{
            fontSize: "clamp(0.8125rem, 2.5vw, 0.9375rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            textAlign: "left",
            width: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontFamily: "var(--font-montserrat), sans-serif",
            letterSpacing: "-0.01em",
            lineHeight: 1.4,
          }}
        >
          {icon.displayName}
        </Box>
      </Box>

      {showToast && (
        <Toast
          variant="success"
          title="Copied!"
          onClose={() => setShowToast(false)}
          autoClose={2000}
          style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            zIndex: 9999,
          }}
        >
          {icon.componentName} copied to clipboard
        </Toast>
      )}
    </Box>
  );
}
