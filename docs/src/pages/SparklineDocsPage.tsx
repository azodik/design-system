import { MDXProvider } from "@mdx-js/react";
import Sparkline from "@/docs/Sparkline.mdx";
import { Sparkline as SparklineComponent, Card, CardContent, Box, Container } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Sparkline: SparklineComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function SparklineDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Sparkline", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <Sparkline />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}

