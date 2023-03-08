import { EmptyState } from "../emptyState";
import { render, screen, fireEvent } from "@testing-library/react";
test("renders EmptyState component", () => {
  render(<EmptyState />);
});

test("renders EmptyState component with text prop", () => {
  const { getByText } = render(<EmptyState text="Hello World" />);
  const textElement = getByText(/hello world/i);
  expect(textElement).toBeInTheDocument();
});
