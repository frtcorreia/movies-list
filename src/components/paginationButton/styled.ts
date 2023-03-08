import styled from "styled-components";

export const StyledPaginationButton = styled.button<{ active?: boolean }>`
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
