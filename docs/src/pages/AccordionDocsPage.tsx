import { MDXProvider } from "@mdx-js/react";
import Accordion from "@/docs/Accordion.mdx";
import { Accordion as AccordionComponent, AccordionItem, Card, CardContent } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Accordion: AccordionComponent,
  AccordionItem: AccordionItem,
  Card: Card,
  CardContent: CardContent,
};

export default function AccordionDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Accordion", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Accordion />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
