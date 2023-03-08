import React from "react";
import { PaginationButton } from "../paginationButton";
import { PaginationContainer } from "../paginationContainer";
import { PaginationsProps } from "./types";

export const Pagination: React.FC<PaginationsProps> = ({
  currentPage,
  setCurrentPage,
  disableBtn,
  moviesCurrentPage,
}) => {
  return (
    <PaginationContainer>
      <PaginationButton
        key="prev"
        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
        disabled={currentPage === 1}
      >
        Prev
      </PaginationButton>
      <PaginationButton key={currentPage} active disabled>
        {currentPage}
      </PaginationButton>
      <PaginationButton
        key="next"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={disableBtn || moviesCurrentPage < 12}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};
