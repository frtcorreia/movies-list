import styled from "styled-components";
import { MovieContainerProps } from "./types";

export const StyledMoviesContainer = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  margin-top: 110px;
`;

export const MoviesContainer: React.FC<MovieContainerProps> = ({
  children,
}) => {
  return <StyledMoviesContainer>{children}</StyledMoviesContainer>;
};
