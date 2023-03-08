import { render, screen } from "@testing-library/react";
import { Movie } from "../movie";

test("renders Movie component", () => {
  render(<Movie />);
});
