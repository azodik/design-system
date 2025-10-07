import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Table from '../docs/Table.mdx';
import { Table as TableComponent, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell, Card, CardContent } from '@azodik/ui';
import SidebarLayout from '../components/sidebar/Sidebar';
import '../styles/docs.css';

const components = {
  Table: TableComponent,
  TableHeader: TableHeader,
  TableBody: TableBody,
  TableRow: TableRow,
  TableHeaderCell: TableHeaderCell,
  TableCell: TableCell,
  Card: Card,
  CardContent: CardContent,
};

export default function TableDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Table", current: true }
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Table />
          </MDXProvider>
        </div>
      </div>
    </SidebarLayout>
  );
}
