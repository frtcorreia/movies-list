import { render } from "test";

import { Movie } from "./movie";

describe("Movie component", () => {
  it("renders without crashing", () => {
    const date = new Date();
    const props = {
      description: "description test 1",
      director: "director test",
      image: "image.jpg",
      title: "title test",
      year: date.getFullYear(),
    };

    const component = render(<Movie {...props} />);

    expect(component).toBeTruthy();
  });

  it("should display a specific description", () => {
    const title = "title of test";

    const { getByText } = render(<Movie title={title} />);

    const text = getByText(title);
    expect(text).toBeInTheDocument();
  });
});
