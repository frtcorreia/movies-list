import React from "react";
import styled from "styled-components";
import { Container, Movie, Pagination, SearchBar } from "../../components";
import { useMoviesList } from "./moviesList.hook";

const MoviesContainer = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  margin-top: 110px;
`;

const EmptyStateContainer = styled.div`
  display: flex;
  height: calc(100vh - 109px);
  align-self: center;
  align-items: center;
  flex-direction: row;
`;

const Message = styled.p`
  font-size: 33px;
  margin-bottom: 10px;
`;

export const MoviesList: React.FC = () => {
  const { data, getDataSearch, query, setQuery, currentPage, setCurrentPage } =
    useMoviesList();

  return (
    <Container>
      <SearchBar
        onClick={() => getDataSearch()}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {data.length > 0 ? (
        <MoviesContainer className="movies">
          {data.map((movie, i) => (
            <Movie
              key={i}
              title={movie.title}
              description={movie?.description}
              director={movie?.director}
              image={movie?.coverImage}
              year={movie?.year}
            />
          ))}
        </MoviesContainer>
      ) : (
        <EmptyStateContainer>
          <Message>Sorry, we don't have any more movies to show.</Message>
        </EmptyStateContainer>
      )}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        disableBtn={data.length < 1}
        moviesCurrentPage={data.length}
      />
    </Container>
  );
};
