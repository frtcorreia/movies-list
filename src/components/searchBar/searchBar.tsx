import {
  SearchButton,
  SearchContainer,
  SearchInput,
  SearchWrapper,
} from "./styled";
import { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({
  onClick,
  onChange,
  value,
}) => {
  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder={"Pesquisar..."}
          value={value}
          onChange={onChange}
          aria-label="search-input"
        />
        <SearchButton onClick={onClick} aria-label="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#6b7c93"
              d="M9.882 17.73c4.23 0 7.655-3.426 7.655-7.655S14.113 2.42 9.882 2.42C5.652 2.42 2.227 5.846 2.227 10.077c0 4.23 3.425 7.654 7.655 7.654zm7.365-.76l5.236 5.235a1.17 1.17 0 11-1.657 1.658l-5.236-5.236a9.392 9.392 0 111.657-1.657z"
            />
          </svg>
        </SearchButton>
      </SearchContainer>
    </SearchWrapper>
  );
};
