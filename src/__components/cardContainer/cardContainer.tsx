import styled from "styled-components";
import { CardContainerProps } from "./types";

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  margin: 1rem;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  position: relative;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return <StyledCardContainer>{children}</StyledCardContainer>;
};
