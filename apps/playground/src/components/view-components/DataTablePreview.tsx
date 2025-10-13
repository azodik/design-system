import React, { useState } from "react";
import { DataTable, Card } from "@azodik/ui";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
];

const columns = [
  { key: "name" as const, label: "Name", sortable: true },
  { key: "email" as const, label: "Email", sortable: true },
  { key: "role" as const, label: "Role" },
];

export const DataTablePreview = () => {
  const [sortBy, setSortBy] = useState<keyof (typeof users)[0] | undefined>();
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [selectedRows, setSelectedRows] = useState<typeof users>([]);

  const handleSort = (key: keyof (typeof users)[0]) => {
    if (sortBy === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortDirection("asc");
    }
  };

  const handleRowSelect = (row: (typeof users)[0], selected: boolean) => {
    if (selected) {
      setSelectedRows((prev) => [...prev, row]);
    } else {
      setSelectedRows((prev) => prev.filter((r) => r.id !== row.id));
    }
  };

  const handleSelectAll = (selected: boolean) => {
    if (selected) {
      setSelectedRows([...users]);
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <div className="flex-vertical-lg">
      <Card
        className="p-6"
        style={{
          width: "100%",
          minWidth: "280px",
          maxWidth: "100%",
        }}
      >
        <DataTable
          data={users}
          columns={columns}
          sortBy={sortBy}
          sortDirection={sortDirection}
          onSort={handleSort}
          onRowClick={(row) => console.log("Row clicked:", row)}
          selectedRows={selectedRows}
          onRowSelect={handleRowSelect}
          onSelectAll={handleSelectAll}
          selectable
          striped
          hover
        />
      </Card>
    </div>
  );
};

export const DataTableCode = `import React, { useState } from "react";
import { DataTable, Card } from "@azodik/ui";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
];

const columns = [
  { key: "name" as const, label: "Name", sortable: true },
  { key: "email" as const, label: "Email", sortable: true },
  { key: "role" as const, label: "Role" },
];

export const DataTableExample = () => {
  const [sortBy, setSortBy] = useState();
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortDirection("asc");
    }
  };

  const handleRowSelect = (row, selected) => {
    if (selected) {
      setSelectedRows(prev => [...prev, row]);
    } else {
      setSelectedRows(prev => prev.filter(r => r.id !== row.id));
    }
  };

  const handleSelectAll = (selected) => {
    if (selected) {
      setSelectedRows([...users]);
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <div className="flex-vertical-lg">
      <Card className="p-6">
        <DataTable
          data={users}
          columns={columns}
          sortBy={sortBy}
          sortDirection={sortDirection}
          onSort={handleSort}
          onRowClick={(row) => console.log("Row clicked:", row)}
          selectedRows={selectedRows}
          onRowSelect={handleRowSelect}
          onSelectAll={handleSelectAll}
          selectable
          striped
          hover
        />
      </Card>
    </div>
  );
};`;
