import React from "react";
import { api } from "utils/api";
import { DataProps, MoviesList } from "./types";

export const useMoviesList = (): MoviesList => {
  const [data, setData] = React.useState<DataProps[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [query, setQuery] = React.useState("");

  const getDataPaginated = async () => {
    const res = await api.get(`?_page=${currentPage}&_limit=${12}`, {});
    setData(res.data);
  };

  const getDataSearch = async () => {
    const res = await api.get(
      `?q=${query}&_page=${currentPage}&_limit=${12}`,
      {}
    );
    setData(res.data);
  };

  React.useEffect(() => {
    getDataSearch();
    getDataPaginated();
    debugger;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return {
    data,
    getDataSearch,
    query,
    setQuery,
    currentPage,
    setCurrentPage,
  };
};
