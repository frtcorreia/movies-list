import { StyledPaginationContainer } from "./styled";
import { PaginationContainerProps } from "./types";

export const PaginationContainer: React.FC<PaginationContainerProps> = ({
  children,
}) => {
  return <StyledPaginationContainer>{children}</StyledPaginationContainer>;
};
