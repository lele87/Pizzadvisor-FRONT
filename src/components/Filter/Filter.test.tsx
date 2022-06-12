import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import Filter from "./Filter";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Filter component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render 3 buttons", () => {
      const expectedLength = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getAllByRole("button");

      expect(expectedButton).toHaveLength(expectedLength);
    });
  });
  describe("When the user clicks on the filter buttons", () => {
    test("Then the dispatch should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );
      const allButton = screen.getByRole("button", { name: "ALL" });
      const margheritaButton = screen.getByRole("button", {
        name: "MARGHERITA",
      });
      const diavolaButton = screen.getByRole("button", { name: "DIAVOLA" });

      userEvent.click(allButton);
      userEvent.click(margheritaButton);
      userEvent.click(diavolaButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
