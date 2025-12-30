import { MDXProvider } from "@mdx-js/react";
import SelectWithSearch from "@/docs/SelectWithSearch.mdx";
import {
  SelectWithSearch as SelectWithSearchComponent,
  Card,
  CardContent,
  Box,
  Container,
} from "@azodik/ui";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  SelectWithSearch: SelectWithSearchComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function SelectWithSearchDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Select with Search", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="4" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <SelectWithSearch />
          </MDXProvider>
        </Box>
      </Container>
    </SidebarLayout>
  );
}
