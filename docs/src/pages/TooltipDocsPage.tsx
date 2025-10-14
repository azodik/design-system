import { MDXProvider } from "@mdx-js/react";
import Tooltip from "@/docs/Tooltip.mdx";
import { Tooltip as TooltipComponent, Button, Card, CardContent } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Tooltip: TooltipComponent,
  Button: Button,
  Card: Card,
  CardContent: CardContent,
};

export default function TooltipDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Tooltip", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Tooltip />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
