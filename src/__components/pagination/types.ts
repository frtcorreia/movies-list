export interface PaginationsProps {
  moviesCurrentPage: number;
  currentPage: number;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
  disableBtn: boolean;
}
