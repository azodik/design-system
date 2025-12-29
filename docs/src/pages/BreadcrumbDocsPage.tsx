import { MDXProvider } from "@mdx-js/react";
import Breadcrumb from "@/docs/Breadcrumb.mdx";
import { Breadcrumb as BreadcrumbComponent, Card, CardContent, Box, Container } from "@azodik/ui";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Breadcrumb: BreadcrumbComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function BreadcrumbDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Breadcrumb", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="4" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <Breadcrumb />
          </MDXProvider>
        </Box>
      </Container>
    </SidebarLayout>
  );
}
