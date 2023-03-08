import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  z-index: 2;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #f1f3f4;
  border-radius: 8px;
  padding: 0 16px;
  margin: 30px;
  width: 100%;
  max-width: 600px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-color: rgba(223, 225, 229, 0);
  }
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  flex: 1;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #6b7c93;
  }
`;

const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 8px;
  cursor: pointer;
`;

interface SearchBarProps {
  value: string;
  onClick: () => void;
  onChange?: (e: any) => void;
}

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
        />
        <SearchButton onClick={onClick}>
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
