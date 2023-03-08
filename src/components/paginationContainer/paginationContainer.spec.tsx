import { render } from "test";

import { PaginationContainer } from "./paginationContainer";

describe("PaginationContainer component", () => {
  it("renders without crashing", () => {
    const component = render(<PaginationContainer />);

    expect(component).toBeTruthy();
  });
});
