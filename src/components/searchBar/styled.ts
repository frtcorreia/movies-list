import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  z-index: 2;
`;

export const SearchContainer = styled.div`
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

export const SearchInput = styled.input`
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

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 8px;
  cursor: pointer;
`;
