import { render } from "test";

import { CardContainer } from "./cardContainer";

describe("CardContainer component", () => {
  it("renders without crashing", () => {
    const component = render(<CardContainer />);

    expect(component).toBeTruthy();
  });
});
