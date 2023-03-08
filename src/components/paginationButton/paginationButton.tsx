import { StyledPaginationButton } from "./styled";
import { PaginationButtonProps } from "./types";

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  active,
}) => {
  return (
    <StyledPaginationButton active={active}>{children}</StyledPaginationButton>
  );
};
