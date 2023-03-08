import React from "react";
import {
  MainContainer,
  Movie,
  MoviesContainer,
  Pagination,
  SearchBar,
  EmptyState,
} from "../../components";
import { useMoviesList } from "./moviesList.hook";

export const MoviesList: React.FC = () => {
  const { data, getDataSearch, query, setQuery, currentPage, setCurrentPage } =
    useMoviesList();

  return (
    <MainContainer>
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
        <EmptyState text="Sorry, we don't have any more movies to show." />
      )}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        //disableBtn={data.length < 1}
        moviesCurrentPage={data.length}
      />
    </MainContainer>
  );
};
