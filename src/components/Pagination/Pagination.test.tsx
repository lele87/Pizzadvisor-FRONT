import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Pagination from "./Pagination";
import store from "../../redux/store";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Pagination component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render 1 button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pagination />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });
  describe("When the user clicks on the load more button", () => {
    test("Then the dispatch should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pagination />
          </Provider>
        </BrowserRouter>
      );
      const loadMoreButton = screen.getByRole("button", { name: "Load More" });

      userEvent.click(loadMoreButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
