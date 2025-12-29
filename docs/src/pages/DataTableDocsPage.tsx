import { MDXProvider } from "@mdx-js/react";
import DataTable from "@/docs/DataTable.mdx";
import { DataTable as DataTableComponent, Card, CardContent, Box, Container } from "@azodik/ui";
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
      <Container size="4" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <DataTable />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
