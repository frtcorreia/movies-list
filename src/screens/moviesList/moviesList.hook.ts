import React from "react";
import { api } from "../../utils/api";

interface DataProps {
  coverImage?: string;
  description?: string;
  director?: string;
  id?: string;
  title?: string;
  year?: number;
}

interface MoviesList {
  getDataSearch: () => Promise<void>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  data: DataProps[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

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
    getDataPaginated();
    getDataSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return {
    data,
    getDataSearch,
    query,
    setQuery,
    currentPage,
    setCurrentPage,
  };
};
