import styled from "styled-components";

export const StyledMoviesContainer = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  margin-top: 110px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 701px) and (max-width: 1044px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1045px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1441px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
