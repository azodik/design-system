import { MDXProvider } from "@mdx-js/react";
import FloatingActionButton from "@/docs/FloatingActionButton.mdx";
import { FloatingActionButton as FloatingActionButtonComponent, Card, CardContent, Box, Container } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  FloatingActionButton: FloatingActionButtonComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function FloatingActionButtonDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "FloatingActionButton", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <FloatingActionButton />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}

