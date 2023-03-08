import { render } from "test";

import { EmptyState } from "./emptyState";

describe("EmptyState component", () => {
  it("renders without crashing", () => {
    const textExample = "test message";
    const component = render(<EmptyState text={textExample} />);

    expect(component).toBeTruthy();
  });

  it("should render text passed from prop text", () => {
    const textExample = "test message";
    const { getByText } = render(<EmptyState text={textExample} />);

    const text = getByText(textExample);
    expect(text).toBeInTheDocument();
  });
});
