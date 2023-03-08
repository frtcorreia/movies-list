import styled from "styled-components";
import { PaginationContainerProps } from "./types";

const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const PaginationContainer: React.FC<PaginationContainerProps> = ({
  children,
}) => {
  return <StyledPaginationContainer>{children}</StyledPaginationContainer>;
};
