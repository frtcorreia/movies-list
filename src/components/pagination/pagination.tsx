import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  border: none;
  background-color: transparent;
  margin: 0 5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => (props?.active ? "#fff" : "#333")};
  background-color: ${(props) => (props?.active ? "#333" : "transparent")};
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;

  &:disabled {
    color: #999;
    cursor: default;
    font-size: 25px;
  }
`;

interface PaginationsProps {
  moviesCurrentPage: number;
  currentPage: number;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
  disableBtn: boolean;
}

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
