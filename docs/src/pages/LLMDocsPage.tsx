import { useState } from "react";
import { Button, Card, CardContent, Alert } from "@azodik/ui";
import { CopyIcon, CheckIcon } from "@azodik/icons";
import SidebarLayout from "@/components/sidebar/Sidebar";
import llmContent from "@/docs/llm-resource.txt?raw";
import "@/styles/docs.css";

export default function LLMDocsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(llmContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "AI Friendly (LLM)", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-2">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">AI Friendly Documentation</h1>
          <Button
            onClick={handleCopy}
            variant={copied ? "solid" : "outline"}
            color={copied ? "grass" : "indigo"}
            className="flex items-center gap-2"
          >
            {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
            {copied ? "Copied!" : "Copy Full MDX"}
          </Button>
        </div>

        {copied && (
          <Alert color="grass" variant="soft" className="mb-6">
            Documentation copied to clipboard! You can now paste it into your LLM prompt.
          </Alert>
        )}

        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              This page provides a concise, text-based version of the Azodik Design System
              documentation. It is designed to be easily consumed by Large Language Models (LLMs) to
              help them understand how to use our components.
            </p>
          </CardContent>
        </Card>

        <div className="docs-content">
          <pre className="p-4 rounded-lg bg-zinc-950 text-zinc-100 overflow-x-auto whitespace-pre-wrap font-mono text-sm border border-zinc-800 shadow-sm leading-relaxed">
            {llmContent}
          </pre>
        </div>
      </div>
    </SidebarLayout>
  );
}
