import { render } from "test";

import { MoviesContainer } from "./movieContainer";

describe("Movie component", () => {
  it("renders without crashing", () => {
    const component = render(<MoviesContainer />);

    expect(component).toBeTruthy();
  });
});
