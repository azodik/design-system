import { MDXProvider } from "@mdx-js/react";
import ScrollArea from "@/docs/ScrollArea.mdx";
import { ScrollArea as ScrollAreaComponent, Card, CardContent, Box, Container } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  ScrollArea: ScrollAreaComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function ScrollAreaDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "ScrollArea", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <ScrollArea />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
