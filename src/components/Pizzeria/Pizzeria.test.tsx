import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Pizzeria from "./Pizzeria";

describe("Given a Pizzeria component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 1 heading and 1 image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pizzeria />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading");
      const expectedImage = screen.getByRole("img");

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedImage).toBeInTheDocument();
    });
  });
});
