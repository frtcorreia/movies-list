import { render } from "test";

import { Pagination } from "./pagination";

describe("Pagination component", () => {
  it("renders without crashing", () => {
    const props = {
      currentPage: 1,
      moviesCurrentPage: 6,
      setCurrentPage: jest.fn(),
    };
    const component = render(<Pagination {...props} />);

    expect(component).toBeTruthy();
  });

  it("should render with page one", () => {
    const props = {
      currentPage: 1,
      moviesCurrentPage: 6,
      setCurrentPage: jest.fn(),
    };
    const { getByText } = render(<Pagination {...props} />);

    const pageNrDisplayed = getByText(1);
    expect(pageNrDisplayed).toBeInTheDocument();
  });
});
