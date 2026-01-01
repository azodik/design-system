import { MDXProvider } from "@mdx-js/react";
import SegmentedControl from "@/docs/SegmentedControl.mdx";
import {
  SegmentedControl as SegmentedControlComponent,
  Card,
  CardContent,
  Box,
  Container,
} from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  SegmentedControl: SegmentedControlComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function SegmentedControlDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "SegmentedControl", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <SegmentedControl />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
