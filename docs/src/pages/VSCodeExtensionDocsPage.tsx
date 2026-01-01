import { MDXProvider } from "@mdx-js/react";
import VSCodeExtension from "@/docs/VSCodeExtension.mdx";
import { Card, CardContent, Box, Container, Stack } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Card: Card,
  CardContent: CardContent,
  Stack: Stack,
};

export default function VSCodeExtensionDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "VSCode Extension", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <VSCodeExtension />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
