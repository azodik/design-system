import { MDXProvider } from "@mdx-js/react";
import BottomSheet from "@/docs/BottomSheet.mdx";
import { BottomSheet as BottomSheetComponent, Card, CardContent, Box, Container } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  BottomSheet: BottomSheetComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function BottomSheetDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "BottomSheet", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <BottomSheet />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}

