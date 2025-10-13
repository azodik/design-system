import { MDXProvider } from "@mdx-js/react";
import GettingStarted from "@/docs/GettingStarted.mdx";
import { Button, Card, Alert, Input, Badge } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Button,
  Card,
  Alert,
  Input,
  Badge,
};

export default function GettingStartedPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Getting Started", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <GettingStarted />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
