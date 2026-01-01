import { MDXProvider } from "@mdx-js/react";
import InfiniteScroll from "@/docs/InfiniteScroll.mdx";
import {
  InfiniteScroll as InfiniteScrollComponent,
  Card,
  CardContent,
  Box,
  Container,
} from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  InfiniteScroll: InfiniteScrollComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function InfiniteScrollDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "InfiniteScroll", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <InfiniteScroll />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
