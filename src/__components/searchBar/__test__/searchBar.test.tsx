import { render } from "@testing-library/react";
import { SearchBar } from "../searchBar";

const onClick = jest.fn();

test("renders SearchBar component", () => {
  render(
    <SearchBar
      value="Hello World"
      onClick={() => onClick()}
      onChange={() => onClick()}
    />
  );
});
