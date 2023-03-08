import { render } from "test";

import { MainContainer } from "./mainContainer";

describe("MainContainer component", () => {
  it("renders without crashing", () => {
    const component = render(<MainContainer />);

    expect(component).toBeTruthy();
  });
});
