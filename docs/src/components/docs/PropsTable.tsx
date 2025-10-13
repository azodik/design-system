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
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{ fontSize: "0.75rem", fontFamily: "Montserrat, sans-serif" }}
            >
              Prop
            </TableHeaderCell>
            <TableHeaderCell
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{ fontSize: "0.75rem", fontFamily: "Montserrat, sans-serif" }}
            >
              Type
            </TableHeaderCell>
            <TableHeaderCell
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{ fontSize: "0.75rem", fontFamily: "Montserrat, sans-serif" }}
            >
              Default
            </TableHeaderCell>
            <TableHeaderCell
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              style={{ fontSize: "0.75rem", fontFamily: "Montserrat, sans-serif" }}
            >
              Description
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop, index) => (
            <TableRow key={index}>
              <TableCell
                className="px-4 py-3 text-sm font-mono text-gray-900"
                style={{ fontSize: "0.8rem", fontFamily: "Montserrat, sans-serif" }}
              >
                {prop.name}
                {prop.required && <span className="text-red-500 ml-1">*</span>}
              </TableCell>
              <TableCell
                className="px-4 py-3 text-sm text-gray-600 font-mono"
                style={{ fontSize: "0.8rem", fontFamily: "Montserrat, sans-serif" }}
              >
                {prop.type}
              </TableCell>
              <TableCell
                className="px-4 py-3 text-sm text-gray-500 font-mono"
                style={{ fontSize: "0.8rem", fontFamily: "Montserrat, sans-serif" }}
              >
                {prop.default || "-"}
              </TableCell>
              <TableCell
                className="px-4 py-3 text-sm text-gray-600"
                style={{ fontSize: "0.8rem", fontFamily: "Montserrat, sans-serif" }}
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
