import { StyledMoviesContainer } from "./styled";
import { MovieContainerProps } from "./types";

export const MoviesContainer: React.FC<MovieContainerProps> = ({
  children,
}) => {
  return <StyledMoviesContainer>{children}</StyledMoviesContainer>;
};
