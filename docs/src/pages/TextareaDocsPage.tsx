import { MDXProvider } from "@mdx-js/react";
import Textarea from "@/docs/Textarea.mdx";
import { Textarea as TextareaComponent, Card, CardContent, Box, Container } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Textarea: TextareaComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function TextareaDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Textarea", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="4" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <Textarea />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
