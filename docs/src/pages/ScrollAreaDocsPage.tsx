import { MDXProvider } from "@mdx-js/react";
import ScrollArea from "@/docs/ScrollArea.mdx";
import { ScrollArea as ScrollAreaComponent, Card, CardContent } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  ScrollArea: ScrollAreaComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function ScrollAreaDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "ScrollArea", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <ScrollArea />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
