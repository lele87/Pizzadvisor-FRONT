import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import HomePage from "./HomePage";

describe("Given a HomePage page", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a Header component with 12 heading elements", () => {
      const expectedNumberHeading = 12;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const menuHeader = screen.getAllByRole("listitem");

      expect(menuHeader).toHaveLength(expectedNumberHeading);
    });
  });
});
