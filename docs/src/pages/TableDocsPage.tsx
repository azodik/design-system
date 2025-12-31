import { MDXProvider } from "@mdx-js/react";
import Table from "@/docs/Table.mdx";
import {
  Table as TableComponent,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  Card,
  CardContent,
  Container,
  Box,
} from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Table: TableComponent,
  TableHeader: TableHeader,
  TableBody: TableBody,
  TableRow: TableRow,
  TableHeaderCell: TableHeaderCell,
  TableCell: TableCell,
  Card: Card,
  CardContent: CardContent,
};

export default function TableDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Table", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <Table />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
