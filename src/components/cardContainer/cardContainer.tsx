import { StyledCardContainer } from "./styled";
import { CardContainerProps } from "./types";

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return <StyledCardContainer>{children}</StyledCardContainer>;
};
