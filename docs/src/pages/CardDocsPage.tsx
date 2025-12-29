import { MDXProvider } from "@mdx-js/react";
import Card from "@/docs/Card.mdx";
import { Card as CardComponent, CardContent, CardHeader, CardTitle, Box, Container } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Card: CardComponent,
  CardContent: CardContent,
  CardHeader: CardHeader,
  CardTitle: CardTitle,
};

export default function CardDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Card", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="4" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <Card />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
