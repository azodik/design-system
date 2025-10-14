import { MDXProvider } from "@mdx-js/react";
import Card from "@/docs/Card.mdx";
import { Card as CardComponent, CardContent, CardHeader, CardTitle } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Card: CardComponent,
  CardContent: CardContent,
  CardHeader: CardHeader,
  CardTitle: CardTitle,
};

export default function CardDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Card", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Card />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
