import { render } from "@testing-library/react";
import { Pagination } from "../pagination";

test("renders MoviesContainer component", () => {
  render(
    <Pagination
      currentPage={1}
      disableBtn
      moviesCurrentPage={3}
      setCurrentPage={(e) => console.log(e)}
    />
  );
});
