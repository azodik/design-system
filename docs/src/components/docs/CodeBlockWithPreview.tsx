import React, { useState } from "react";
import { Tabs, TabList, TabTrigger, TabContent, Card, Flex, Center, Button } from "@azodik/ui";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyIcon, TickIcon } from "@azodik/icons";
import { useLanguageTranslation } from "@/hooks/useLanguageTranslation";

interface CodeBlockWithPreviewProps {
  children?: string;
  code?: string;
  language?: string;
  title?: string;
  preview?: React.ReactNode;
}

export const CodeBlockWithPreview: React.FC<CodeBlockWithPreviewProps> = ({
  children,
  code,
  language = "tsx",
  preview,
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const { t } = useLanguageTranslation();

  const handleCopy = async () => {
    const textToCopy = code || children || "";
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers that don't support clipboard API
      try {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // If all methods fail, show user-friendly message
        alert(t("copyFailed") || "Failed to copy code. Please select and copy manually.");
      }
    }
  };

  return (
    <div className="code-block-container" style={{ position: "relative", zIndex: 1 }}>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabList>
          <TabTrigger value="preview" borderWidth={4} width="100px">
            {t("preview")}
          </TabTrigger>
          <TabTrigger value="code" borderWidth={4} width="100px">
            {t("code")}
          </TabTrigger>
        </TabList>

        <TabContent value="preview">
          <Card
            style={{
              backgroundColor: "var(--preview-bg)",
              borderColor: "var(--preview-border)",
              width: "100%",
              overflow: "visible",
              minHeight: "200px",
              position: "relative",
              zIndex: 1,
              padding: "var(--space-4)",
            }}
          >
            <Center
              style={{
                overflow: "visible",
                minHeight: "150px",
                position: "relative",
                zIndex: 1,
                width: "100%",
                isolation: "isolate",
              }}
            >
              {preview}
            </Center>
          </Card>
        </TabContent>

        <TabContent value="code">
          <Card
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
              height: "calc(100vh - 400px)",
              minHeight: "450px",
              position: "relative",
              width: "100%",
              padding: "0",
              overflowY: "auto",
            }}
          >
            <Button
              variant="ghost"
              size="xs"
              onClick={handleCopy}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 10,
                padding: "var(--space-2)",
                backgroundColor: "var(--gray-7)",
                color: "var(--color-text)",
              }}
              title={copied ? t("copied") : t("copyCode")}
            >
              <Flex align="center" gap="2">
                {copied ? <TickIcon size={16} /> : <CopyIcon size={16} />}
              </Flex>
            </Button>
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                lineHeight: "1.5",
                padding: "1rem",
                background: "var(--color-background)",
                color: "var(--color-text)",
                height: "100%",
                minHeight: "100%",
                scrollbarWidth: "thin",
                scrollbarColor: "var(--color-border) transparent",
              }}
              wrapLines={true}
              wrapLongLines={true}
            >
              {code || children}
            </SyntaxHighlighter>
          </Card>
        </TabContent>
      </Tabs>
    </div>
  );
};
