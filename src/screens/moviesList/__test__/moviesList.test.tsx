import { render } from "@testing-library/react";
import { MoviesList } from "../moviesList";

test("renders CardContainer component", () => {
  render(<MoviesList />);
});
