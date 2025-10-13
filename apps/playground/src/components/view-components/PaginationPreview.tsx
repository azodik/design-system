import React, { useState } from "react";
import { Pagination } from "@azodik/ui";

export const PaginationPreview = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div
      className="flex-vertical"
      style={{
        width: "100%",
        minWidth: "280px",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
        showFirstLast
        showPrevNext
      />
    </div>
  );
};

export const PaginationCode = `import React, { useState } from "react";
import { Pagination } from "@azodik/ui";

export const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex-vertical">
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
        showFirstLast
        showPrevNext
      />
    </div>
  );
};`;
