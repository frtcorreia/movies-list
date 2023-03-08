export interface DataProps {
  coverImage?: string;
  description?: string;
  director?: string;
  id?: string;
  title?: string;
  year?: number;
}

export interface MoviesList {
  getDataSearch: () => Promise<void>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  data: DataProps[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
