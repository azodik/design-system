import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from "@azodik/ui";

interface Prop {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props: Prop[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHeaderCell
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-family-sans)",
                color: "var(--gray-11)",
                textTransform: "uppercase",
              }}
            >
              Prop
            </TableHeaderCell>
            <TableHeaderCell
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-family-sans)",
                color: "var(--gray-11)",
                textTransform: "uppercase",
              }}
            >
              Type
            </TableHeaderCell>
            <TableHeaderCell
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-family-sans)",
                color: "var(--gray-11)",
                textTransform: "uppercase",
              }}
            >
              Default
            </TableHeaderCell>
            <TableHeaderCell
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-family-sans)",
                color: "var(--gray-11)",
                textTransform: "uppercase",
              }}
            >
              Description
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop, index) => (
            <TableRow key={index}>
              <TableCell
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-family-sans)",
                  color: "var(--gray-12)",
                }}
              >
                <code
                  style={{
                    background: "var(--gray-3)",
                    padding: "2px 4px",
                    borderRadius: "var(--radius-1)",
                  }}
                >
                  {prop.name}
                </code>
                {prop.required && (
                  <span style={{ color: "var(--ruby-9)", marginLeft: "4px" }}>*</span>
                )}
              </TableCell>
              <TableCell
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-family-sans)",
                  color: "var(--accent-11)",
                }}
              >
                <code
                  style={{
                    background: "var(--accent-3)",
                    padding: "2px 4px",
                    borderRadius: "var(--radius-1)",
                  }}
                >
                  {prop.type}
                </code>
              </TableCell>
              <TableCell
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-family-sans)",
                  color: "var(--gray-11)",
                }}
              >
                {prop.default || "-"}
              </TableCell>
              <TableCell
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-family-sans)",
                  color: "var(--gray-12)",
                }}
              >
                {prop.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
