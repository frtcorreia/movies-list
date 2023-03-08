import { fireEvent, render } from "test";

import { SearchBar } from "./searchBar";

describe("SearchBar component", () => {
  it("renders without crashing", () => {
    const props = {
      value: "seach value",
      onClick: jest.fn(),
      onChange: jest.fn(),
    };
    const component = render(<SearchBar {...props} />);

    expect(component).toBeTruthy();
  });
});
