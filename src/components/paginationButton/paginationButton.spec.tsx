import { render } from "test";

import { PaginationButton } from "./paginationButton";

describe("PaginationButton component", () => {
  it("renders without crashing", () => {
    const component = render(<PaginationButton />);

    expect(component).toBeTruthy();
  });

  it("should render active button", () => {
    const { getByRole } = render(<PaginationButton active />);

    const btn = getByRole("button");
    expect(btn).not.toBeDisabled();
  });
});
