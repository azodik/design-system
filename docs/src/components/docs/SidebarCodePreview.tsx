import React, { useState } from "react";
import { Tabs, TabList, TabTrigger, TabContent, Card } from "@azodik/ui";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyIcon, TickIcon } from "@azodik/icons";
import { useLanguageTranslation } from "@/hooks/useLanguageTranslation";

interface SidebarCodePreviewProps {
  title?: string | React.ReactNode;
  description?: string;
  preview: React.ReactNode;
  code: string;
  language?: string;
  height?: string;
  minHeight?: string;
  width?: string;
}

export default function SidebarCodePreview({
  preview,
  code,
  language = "tsx",
  height = "auto",
  minHeight = "400px",
  width = "100%",
}: SidebarCodePreviewProps) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const { t } = useLanguageTranslation();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers that don't support clipboard API
      try {
        const textArea = document.createElement("textarea");
        textArea.value = code;
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
    <section className="mb-lg">
      <Tabs value={activeTab} onValueChange={setActiveTab} style={{ marginTop: "40px" }}>
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
            className="border rounded-lg"
            style={{
              backgroundColor: "var(--preview-bg)",
              borderColor: "var(--preview-border)",
              marginLeft: "0px",
            }}
          >
            {preview}
          </Card>
        </TabContent>

        <TabContent value="code">
          <Card
            className="border rounded-lg overflow-y-auto p-0"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
              height: height,
              minHeight: minHeight,
              width: width,
              position: "relative",
              marginLeft: "0px",
            }}
          >
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-200 flex items-center gap-2"
              style={{ top: "10px", right: "10px" }}
              title={copied ? t("copied") : t("copyCode")}
            >
              {copied ? <TickIcon size={16} /> : <CopyIcon size={16} />}
            </button>
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                lineHeight: "1.5",
                padding: "1rem",
                background: "#1e1e1e",
                color: "var(--color-text)",
                height: "100%",
                minHeight: "100%",
                scrollbarWidth: "thin",
                scrollbarColor: "var(--color-border) transparent",
              }}
              wrapLines={true}
              wrapLongLines={true}
            >
              {code}
            </SyntaxHighlighter>
          </Card>
        </TabContent>
      </Tabs>
    </section>
  );
}
