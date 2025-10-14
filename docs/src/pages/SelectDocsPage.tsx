import { MDXProvider } from "@mdx-js/react";
import Select from "@/docs/Select.mdx";
import { Select as SelectComponent, Card, CardContent } from "@azodik/ui";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Select: SelectComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function SelectDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Select", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-2">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Select />
          </MDXProvider>
        </div>
      </div>
    </SidebarLayout>
  );
}
