import React from "react";
import { PaginationButton, PaginationContainer } from "components";
import { PaginationsProps } from "./types";

export const Pagination: React.FC<PaginationsProps> = ({
  currentPage,
  setCurrentPage,
  disableBtn = false,
  moviesCurrentPage,
}) => {
  console.log({ currentPage, setCurrentPage, disableBtn, moviesCurrentPage });
  return (
    <PaginationContainer>
      <button
        key="prev"
        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <PaginationButton key={currentPage} active disabled>
        {currentPage}
      </PaginationButton>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={moviesCurrentPage < 12}
      >
        Next
      </button>
    </PaginationContainer>
  );
};
