import { MDXProvider } from "@mdx-js/react";
import DataTable from "@/docs/DataTable.mdx";
import { DataTable as DataTableComponent, Card, CardContent } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  DataTable: DataTableComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function DataTableDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "DataTable", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-2">
        <div className="docs-content">
          <MDXProvider components={components}>
            <DataTable />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
