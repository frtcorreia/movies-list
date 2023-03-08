import styled from "styled-components";
import { MainContainerProps } from "./types";

export const StyledMainContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>;
};
