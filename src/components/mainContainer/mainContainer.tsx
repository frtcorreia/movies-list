import { StyledMainContainer } from "./styled";
import { MainContainerProps } from "./types";

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>;
};
