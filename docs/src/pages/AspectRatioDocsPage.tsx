import { MDXProvider } from "@mdx-js/react";
import AspectRatio from "@/docs/AspectRatio.mdx";
import { AspectRatio as AspectRatioComponent, Card, CardContent, Box, Container } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  AspectRatio: AspectRatioComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function AspectRatioDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "AspectRatio", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <AspectRatio />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}

