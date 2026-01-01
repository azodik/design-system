import { MDXProvider } from "@mdx-js/react";
import StickyHeader from "@/docs/StickyHeader.mdx";
import {
  StickyHeader as StickyHeaderComponent,
  Card,
  CardContent,
  Box,
  Container,
} from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  StickyHeader: StickyHeaderComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function StickyHeaderDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "StickyHeader", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <StickyHeader />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
